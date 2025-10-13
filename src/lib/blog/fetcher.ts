import * as cheerio from 'cheerio';
import { BlogPost, WordPressPost, BlogConfig } from '@/types/blog';

const BLOG_CONFIG: BlogConfig = {
  sourceUrl: 'https://www.bhhscp.com/blog',
  apiUrl: 'https://www.bhhscp.com/wp-json/wp/v2',
  revalidateInterval: 21600, // 6 hours
  maxPosts: 50,
};

/**
 * Primary method: Try to fetch posts via WordPress REST API
 */
async function fetchWordPressPosts(): Promise<BlogPost[]> {
  try {
    console.log('Attempting to fetch posts via WordPress REST API...');
    
    const response = await fetch(
      `${BLOG_CONFIG.apiUrl}/posts?_embed&per_page=${BLOG_CONFIG.maxPosts}&orderby=date&order=desc`,
      { 
        next: { revalidate: BLOG_CONFIG.revalidateInterval },
        headers: {
          'User-Agent': 'BHHS-Blog-Sync/1.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API returned ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    console.log(`Successfully fetched ${posts.length} posts via WordPress API`);
    
    return posts.map(normalizeWordPressPost);
  } catch (error) {
    console.log('WordPress API failed:', error);
    throw error;
  }
}

/**
 * Fallback method: Scrape posts from the blog page
 */
async function fetchPostsViaScraping(): Promise<BlogPost[]> {
  try {
    console.log('Attempting to fetch posts via web scraping...');
    
    const response = await fetch(BLOG_CONFIG.sourceUrl, {
      next: { revalidate: BLOG_CONFIG.revalidateInterval },
      headers: {
        'User-Agent': 'BHHS-Blog-Sync/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Scraping failed with status ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    const posts: BlogPost[] = [];
    
    // Try multiple selectors to find blog posts
    const selectors = [
      '.blog-post',
      '.post-item',
      '.article',
      '[data-post-id]',
      '.entry',
      '.post',
    ];

    let foundPosts = false;

    for (const selector of selectors) {
      const elements = $(selector);
      
      if (elements.length > 0) {
        console.log(`Found ${elements.length} posts using selector: ${selector}`);
        
        elements.each((i, element) => {
          if (posts.length >= BLOG_CONFIG.maxPosts) return false;
          
          const post = parseScrapedPost($, element);
          if (post) {
            posts.push(post);
          }
        });
        
        foundPosts = true;
        break;
      }
    }

    if (!foundPosts) {
      // Fallback: try to find any links that might be blog posts
      $('a[href*="/blog/"]').each((i, element) => {
        if (posts.length >= BLOG_CONFIG.maxPosts) return false;
        
        const $link = $(element);
        const url = $link.attr('href');
        const title = $link.text().trim();
        
        if (url && title && url !== BLOG_CONFIG.sourceUrl) {
          posts.push({
            id: `scraped-${i}`,
            title,
            slug: extractSlugFromUrl(url),
            content: '',
            excerpt: title,
            date: new Date().toISOString(),
            author: 'BHHS California Properties',
            originalUrl: url.startsWith('http') ? url : new URL(url, BLOG_CONFIG.sourceUrl).toString(),
            categories: [],
            tags: [],
          });
        }
      });
    }

    console.log(`Successfully scraped ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  }
}

/**
 * Parse a scraped post element
 */
function parseScrapedPost($: cheerio.CheerioAPI, element: cheerio.Element): BlogPost | null {
  const $el = $(element);
  
  // Extract title
  const title = $el.find('h1, h2, h3, .title, .post-title').first().text().trim() ||
                $el.find('a').first().text().trim();
  
  if (!title) return null;

  // Extract URL
  const url = $el.find('a').first().attr('href');
  if (!url) return null;

  // Extract date
  const dateText = $el.find('.date, .post-date, time').first().text().trim();
  const date = parseDate(dateText) || new Date().toISOString();

  // Extract excerpt
  const excerpt = $el.find('.excerpt, .post-excerpt, p').first().text().trim();

  // Extract image
  const img = $el.find('img').first();
  const image = img.attr('src') || img.attr('data-src');
  const imageAlt = img.attr('alt') || title;

  // Extract author
  const author = $el.find('.author, .post-author').first().text().trim() ||
                 'BHHS California Properties';

  return {
    id: `scraped-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    slug: extractSlugFromUrl(url),
    content: '',
    excerpt: excerpt || title,
    date,
    author,
    image: image ? (image.startsWith('http') ? image : new URL(image, BLOG_CONFIG.sourceUrl).toString()) : undefined,
    imageAlt,
    originalUrl: url.startsWith('http') ? url : new URL(url, BLOG_CONFIG.sourceUrl).toString(),
    categories: [],
    tags: [],
  };
}

/**
 * Normalize WordPress post to our BlogPost format
 */
function normalizeWordPressPost(post: WordPressPost): BlogPost {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const tags = post._embedded?.['wp:term']?.[1] || [];
  const author = post._embedded?.author?.[0];

  return {
    id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    date: post.date,
    author: author?.name || 'BHHS California Properties',
    image: featuredMedia?.source_url,
    imageAlt: featuredMedia?.alt_text || post.title.rendered,
    categories: categories.map(cat => cat.name),
    tags: tags.map(tag => tag.name),
    originalUrl: post.link,
    readingTime: calculateReadingTime(post.content.rendered),
  };
}

/**
 * Extract slug from URL
 */
function extractSlugFromUrl(url: string): string {
  const pathname = new URL(url, BLOG_CONFIG.sourceUrl).pathname;
  const segments = pathname.split('/').filter(Boolean);
  return segments[segments.length - 1] || 'untitled';
}

/**
 * Parse date from various formats
 */
function parseDate(dateText: string): string | null {
  if (!dateText) return null;
  
  try {
    // Try to parse common date formats
    const date = new Date(dateText);
    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
    } catch {
      console.warn('Failed to parse date:', dateText);
    }
  
  return null;
}

/**
 * Calculate estimated reading time
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Main function to fetch blog posts with fallback
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try WordPress API first
    return await fetchWordPressPosts();
  } catch (error) {
    console.log('WordPress API failed, falling back to scraping...');
    try {
      // Fall back to scraping
      return await fetchPostsViaScraping();
    } catch (scrapingError) {
      console.error('Both WordPress API and scraping failed:', scrapingError);
      // Return empty array or cached data if available
      return [];
    }
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Get blog configuration
 */
export function getBlogConfig(): BlogConfig {
  return BLOG_CONFIG;
}
