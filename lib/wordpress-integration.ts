// lib/wordpress-integration.ts
// Integration layer between your existing fetcher.ts and the new WordPress client

import { getPosts, getPostBySlug, getCategories, type WordPressPost } from './wordpress';
import { BlogPost } from '@/types/blog';

/**
 * Convert WordPress post to your existing BlogPost format
 * This maintains compatibility with your existing code
 */
function convertWordPressToBlogPost(wpPost: WordPressPost): BlogPost {
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
    author: author?.name || 'BHHS California Properties',
    image: featuredMedia?.source_url,
    imageAlt: featuredMedia?.alt_text || wpPost.title.rendered,
    categories: categories.map(cat => cat.name),
    tags: tags.map(tag => tag.name),
    originalUrl: wpPost.link,
    readingTime: calculateReadingTime(wpPost.content.rendered),
  };
}

/**
 * Calculate reading time (same logic as your existing fetcher)
 */
function calculateReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words per minute
}

/**
 * Enhanced blog post fetcher using the new WordPress client
 * Drop-in replacement for your existing fetchWordPressPosts function
 */
export async function fetchWordPressPostsEnhanced(): Promise<BlogPost[]> {
  try {
    // Using enhanced WordPress API client
    
    const wpPosts = await getPosts({
      per_page: 50, // Match your existing maxPosts
      orderby: 'date',
      order: 'desc',
    });

    // Successfully fetched posts
    
    return wpPosts.map(convertWordPressToBlogPost);
  } catch (error) {
    // Enhanced WordPress API failed
    throw error; // Let your existing fallback system handle this
  }
}

/**
 * Enhanced single post fetcher
 */
export async function fetchWordPressPostEnhanced(slug: string): Promise<BlogPost | null> {
  try {
    const wpPost = await getPostBySlug(slug);
    if (!wpPost) return null;
    
    return convertWordPressToBlogPost(wpPost);
  } catch (error) {
    // Enhanced single post fetch failed
    throw error;
  }
}

/**
 * Enhanced categories fetcher
 */
export async function fetchWordPressCategoriesEnhanced() {
  try {
    const categories = await getCategories();
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      count: cat.count,
    }));
  } catch (error) {
    // Enhanced categories fetch failed
    throw error;
  }
}

/**
 * Drop-in replacement for your existing fetchBlogPosts function
 * Uses enhanced WordPress client with existing fallback system
 */
export async function fetchBlogPostsEnhanced(): Promise<BlogPost[]> {
  try {
    // Try enhanced WordPress API first
    return await fetchWordPressPostsEnhanced();
  } catch {
    // Enhanced API failed, falling back to existing system
    
    // Import and use your existing fallback system
    const { fetchBlogPosts } = await import('@/lib/blog/fetcher');
    return await fetchBlogPosts();
  }
}

/**
 * Utility function to check if WordPress API is available
 */
export async function isWordPressAPIAvailable(): Promise<boolean> {
  try {
    await getPosts({ per_page: 1 });
    return true;
  } catch {
    return false;
  }
}

/**
 * Get WordPress API status for debugging
 */
export async function getWordPressAPIStatus() {
  try {
    const startTime = Date.now();
    const posts = await getPosts({ per_page: 1 });
    const duration = Date.now() - startTime;
    
    return {
      available: true,
      responseTime: `${duration}ms`,
      postsCount: posts.length,
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    return {
      available: false,
      error: error.message,
      lastChecked: new Date().toISOString(),
    };
  }
}
