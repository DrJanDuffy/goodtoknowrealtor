// lib/bhhs-blog-fetcher.ts
// Enhanced blog fetcher for BHHS.com with multiple fallback methods

import * as cheerio from 'cheerio';
import { BlogPost } from '@/types/blog';

// Configuration for BHHS blog
const BHHS_CONFIG = {
  blogUrl: 'https://www.bhhs.com/blog',
  apiUrl: 'https://www.bhhs.com/wp-json/wp/v2', // Will test if available
  rssUrl: 'https://www.bhhs.com/blog/feed', // Standard RSS feed
  fallbackUrl: 'https://www.bhhscp.com/wp-json/wp/v2', // Your existing working API
  maxPosts: 50,
  timeout: 10000,
  retries: 3,
};

export interface BHHSBlogOptions {
  source?: 'api' | 'rss' | 'scraping' | 'fallback' | 'auto';
  maxPosts?: number;
  categories?: string[];
  search?: string;
}

/**
 * Test if WordPress REST API is available
 */
async function testWordPressAPI(url: string): Promise<boolean> {
  try {
    const response = await fetch(`${url}/posts?per_page=1`, {
      method: 'GET',
      headers: { 'User-Agent': 'BHHS-Blog-Fetcher/1.0' },
      signal: AbortSignal.timeout(5000),
    });
    return response.ok && response.headers.get('content-type')?.includes('application/json');
  } catch {
    return false;
  }
}

/**
 * Fetch posts via WordPress REST API (if available)
 */
async function fetchViaAPI(options: BHHSBlogOptions = {}): Promise<BlogPost[]> {
  const apiUrl = BHHS_CONFIG.apiUrl;
  const queryParams = new URLSearchParams({
    per_page: (options.maxPosts || BHHS_CONFIG.maxPosts).toString(),
    _embed: 'true',
    orderby: 'date',
    order: 'desc',
  });

  if (options.search) {
    queryParams.set('search', options.search);
  }

  const response = await fetch(`${apiUrl}/posts?${queryParams}`, {
    headers: { 'User-Agent': 'BHHS-Blog-Fetcher/1.0' },
    signal: AbortSignal.timeout(BHHS_CONFIG.timeout),
  });

  if (!response.ok) {
    throw new Error(`WordPress API Error: ${response.status} ${response.statusText}`);
  }

  const wpPosts = await response.json();
  return wpPosts.map(convertWordPressPost);
}

/**
 * Fetch posts via RSS feed
 */
async function fetchViaRSS(options: BHHSBlogOptions = {}): Promise<BlogPost[]> {
  const response = await fetch(BHHS_CONFIG.rssUrl, {
    headers: { 'User-Agent': 'BHHS-Blog-Fetcher/1.0' },
    signal: AbortSignal.timeout(BHHS_CONFIG.timeout),
  });

  if (!response.ok) {
    throw new Error(`RSS Feed Error: ${response.status} ${response.statusText}`);
  }

  const rssText = await response.text();
  return parseRSSFeed(rssText, options);
}

/**
 * Fetch posts via web scraping
 */
async function fetchViaScraping(options: BHHSBlogOptions = {}): Promise<BlogPost[]> {
  const response = await fetch(BHHS_CONFIG.blogUrl, {
    headers: { 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    },
    signal: AbortSignal.timeout(BHHS_CONFIG.timeout),
  });

  if (!response.ok) {
    throw new Error(`Scraping Error: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  return parseScrapedPosts(html, options);
}

/**
 * Use your existing fallback API
 */
async function fetchViaFallback(options: BHHSBlogOptions = {}): Promise<BlogPost[]> {
  const { getPosts } = await import('./wordpress');
  const wpPosts = await getPosts({
    per_page: options.maxPosts || BHHS_CONFIG.maxPosts,
    search: options.search,
  });
  
  return wpPosts.map(convertWordPressPost);
}

/**
 * Convert WordPress post to BlogPost format
 */
function convertWordPressPost(wpPost: any): BlogPost {
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
  const categories = wpPost._embedded?.['wp:term']?.[0] || [];
  const tags = wpPost._embedded?.['wp:term']?.[1] || [];
  const author = wpPost._embedded?.author?.[0];

  return {
    id: wpPost.id.toString(),
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    content: wpPost.content.rendered,
    excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    date: wpPost.date,
    author: author?.name || 'Berkshire Hathaway HomeServices',
    image: featuredMedia?.source_url,
    imageAlt: featuredMedia?.alt_text || wpPost.title.rendered,
    categories: categories.map((cat: any) => cat.name),
    tags: tags.map((tag: any) => tag.name),
    originalUrl: wpPost.link,
    readingTime: calculateReadingTime(wpPost.content.rendered),
  };
}

/**
 * Parse RSS feed
 */
function parseRSSFeed(rssText: string, options: BHHSBlogOptions = {}): BlogPost[] {
  const $ = cheerio.load(rssText, { xmlMode: true });
  const posts: BlogPost[] = [];

  $('item').each((index, element) => {
    if (posts.length >= (options.maxPosts || BHHS_CONFIG.maxPosts)) return false;

    const $item = $(element);
    const title = $item.find('title').text().trim();
    const link = $item.find('link').text().trim();
    const description = $item.find('description').text().trim();
    const pubDate = $item.find('pubDate').text().trim();
    const category = $item.find('category').text().trim();

    // Extract slug from link
    const urlParts = link.split('/');
    const slug = urlParts[urlParts.length - 2] || 'untitled';

    posts.push({
      id: `rss-${index}`,
      title,
      slug,
      content: description,
      excerpt: description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      date: new Date(pubDate).toISOString(),
      author: 'Berkshire Hathaway HomeServices',
      categories: category ? [category] : [],
      tags: [],
      originalUrl: link,
      readingTime: calculateReadingTime(description),
    });
  });

  return posts;
}

/**
 * Parse scraped HTML posts
 */
function parseScrapedPosts(html: string, options: BHHSBlogOptions = {}): BlogPost[] {
  const $ = cheerio.load(html);
  const posts: BlogPost[] = [];

  // Try multiple selectors for blog post containers
  const selectors = [
    '.blog-post',
    '.post',
    '.article',
    '[class*="post"]',
    '[class*="article"]',
    '.entry',
    '.content-item'
  ];

  let $posts = $();
  for (const selector of selectors) {
    $posts = $(selector);
    if ($posts.length > 0) break;
  }

  if ($posts.length === 0) {
    // Fallback: look for any elements with links that might be posts
    $posts = $('a[href*="/blog/"]').parent();
  }

  $posts.each((index, element) => {
    if (posts.length >= (options.maxPosts || BHHS_CONFIG.maxPosts)) return false;

    const $post = $(element);
    const $link = $post.find('a').first();
    const title = $post.find('h1, h2, h3, h4, .title, .post-title').first().text().trim();
    const link = $link.attr('href');
    const excerpt = $post.find('p, .excerpt, .post-excerpt').first().text().trim();

    if (!title || !link) return;

    // Extract slug from link
    const urlParts = link.split('/');
    const slug = urlParts[urlParts.length - 2] || 'untitled';

    // Get image
    const $img = $post.find('img').first();
    const image = $img.attr('src') || $img.attr('data-src');

    posts.push({
      id: `scraped-${index}`,
      title,
      slug,
      content: excerpt,
      excerpt: excerpt.substring(0, 200) + '...',
      date: new Date().toISOString(), // Fallback date
      author: 'Berkshire Hathaway HomeServices',
      categories: [],
      tags: [],
      originalUrl: link.startsWith('http') ? link : `https://www.bhhs.com${link}`,
      image,
      readingTime: calculateReadingTime(excerpt),
    });
  });

  return posts;
}

/**
 * Calculate reading time
 */
function calculateReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

/**
 * Main function with automatic fallback
 */
export async function fetchBHHSPosts(options: BHHSBlogOptions = {}): Promise<BlogPost[]> {
  const source = options.source || 'auto';
  
  console.log(`🔄 Fetching BHHS blog posts via ${source} method...`);

  if (source === 'auto') {
    // Try methods in order of preference
    const methods = [
      { name: 'WordPress API', fn: () => fetchViaAPI(options) },
      { name: 'RSS Feed', fn: () => fetchViaRSS(options) },
      { name: 'Web Scraping', fn: () => fetchViaScraping(options) },
      { name: 'Fallback API', fn: () => fetchViaFallback(options) },
    ];

    for (const method of methods) {
      try {
        console.log(`   Trying ${method.name}...`);
        const posts = await method.fn();
        console.log(`✅ Successfully fetched ${posts.length} posts via ${method.name}`);
        return posts;
      } catch (error) {
        console.log(`❌ ${method.name} failed: ${error.message}`);
        continue;
      }
    }
    
    throw new Error('All fetch methods failed');
  }

  // Use specific method
  switch (source) {
    case 'api':
      return await fetchViaAPI(options);
    case 'rss':
      return await fetchViaRSS(options);
    case 'scraping':
      return await fetchViaScraping(options);
    case 'fallback':
      return await fetchViaFallback(options);
    default:
      throw new Error(`Unknown source: ${source}`);
  }
}

/**
 * Test all methods to see which work
 */
export async function testBHHSSources(): Promise<{
  api: boolean;
  rss: boolean;
  scraping: boolean;
  fallback: boolean;
}> {
  console.log('🧪 Testing BHHS blog sources...');

  const results = {
    api: false,
    rss: false,
    scraping: false,
    fallback: false,
  };

  // Test WordPress API
  try {
    results.api = await testWordPressAPI(BHHS_CONFIG.apiUrl);
    console.log(`   WordPress API: ${results.api ? '✅ Available' : '❌ Not available'}`);
  } catch {
    console.log('   WordPress API: ❌ Not available');
  }

  // Test RSS feed
  try {
    const response = await fetch(BHHS_CONFIG.rssUrl, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(3000),
    });
    results.rss = response.ok;
    console.log(`   RSS Feed: ${results.rss ? '✅ Available' : '❌ Not available'}`);
  } catch {
    console.log('   RSS Feed: ❌ Not available');
  }

  // Test scraping
  try {
    const response = await fetch(BHHS_CONFIG.blogUrl, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(3000),
    });
    results.scraping = response.ok;
    console.log(`   Web Scraping: ${results.scraping ? '✅ Available' : '❌ Not available'}`);
  } catch {
    console.log('   Web Scraping: ❌ Not available');
  }

  // Test fallback (your existing API)
  try {
    results.fallback = await testWordPressAPI(BHHS_CONFIG.fallbackUrl);
    console.log(`   Fallback API: ${results.fallback ? '✅ Available' : '❌ Not available'}`);
  } catch {
    console.log('   Fallback API: ❌ Not available');
  }

  return results;
}
