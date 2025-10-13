import { BlogPost, SyncStatus } from '@/types/blog';
import { fetchBlogPosts } from './fetcher';

// In-memory cache for development
// In production, consider using Redis or similar
let postsCache: BlogPost[] = [];
let lastSync: Date | null = null;
let syncInProgress = false;

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

/**
 * Get cached posts if available and not expired
 */
export function getCachedPosts(): BlogPost[] {
  if (!lastSync || isCacheExpired()) {
    return [];
  }
  return postsCache;
}

/**
 * Check if cache is expired
 */
function isCacheExpired(): boolean {
  if (!lastSync) return true;
  return Date.now() - lastSync.getTime() > CACHE_DURATION;
}

/**
 * Update cache with new posts
 */
export function updateCache(posts: BlogPost[]): void {
  postsCache = posts;
  lastSync = new Date();
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getPostsWithCache();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Get posts with caching strategy
 */
export async function getPostsWithCache(): Promise<BlogPost[]> {
  // Return cached posts if available and not expired
  const cachedPosts = getCachedPosts();
  if (cachedPosts.length > 0) {
    // Return cached posts if available and not expired
    return cachedPosts;
  }

  // If sync is already in progress, return cached data or empty array
  if (syncInProgress) {
    // Sync in progress, returning cached data
    return postsCache;
  }

  // Fetch new posts
  try {
    syncInProgress = true;
    // Fetching fresh posts

    const posts = await fetchBlogPosts();
    updateCache(posts);

    // Successfully cached posts
    return posts;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    // Return cached data even if expired as fallback
    return postsCache;
  } finally {
    syncInProgress = false;
  }
}

/**
 * Force refresh cache
 */
export async function refreshCache(): Promise<SyncStatus> {
  try {
    // Force refreshing cache

    const oldPostCount = postsCache.length;
    const posts = await fetchBlogPosts();

    updateCache(posts);

    const newPostCount = posts.length;
    const newPosts = newPostCount - oldPostCount;

    return {
      success: true,
      postsFound: newPostCount,
      newPosts: Math.max(0, newPosts),
      lastSync: lastSync?.toISOString() || new Date().toISOString(),
    };
  } catch (error) {
    // Cache refresh failed

    return {
      success: false,
      postsFound: postsCache.length,
      newPosts: 0,
      lastSync: lastSync?.toISOString() || new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get cache status
 */
export function getCacheStatus(): {
  hasCache: boolean;
  lastSync: string | null;
  isExpired: boolean;
  postCount: number;
} {
  return {
    hasCache: postsCache.length > 0,
    lastSync: lastSync?.toISOString() || null,
    isExpired: isCacheExpired(),
    postCount: postsCache.length,
  };
}

/**
 * Clear cache
 */
export function clearCache(): void {
  postsCache = [];
  lastSync = null;
  console.log('Cache cleared');
}
