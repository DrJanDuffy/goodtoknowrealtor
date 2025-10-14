// lib/wordpress.ts
// WordPress API client for fetching blog posts

// Environment variables - simplified with smart defaults
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://www.bhhscp.com/wp-json/wp/v2';
const WORDPRESS_USER = process.env.WORDPRESS_USER || process.env.WP_USER;
const WORDPRESS_APP_PASSWORD = process.env.WORDPRESS_APP_PASSWORD || process.env.WP_APP_PASS;

// Platform detection
const isVercel = process.env.VERCEL === '1';
const isDevelopment = process.env.NODE_ENV === 'development';

// Smart configuration
const CONFIG = {
  revalidateInterval: isVercel ? 3600 : 0,
  maxPosts: 50,
  userAgent: `WordPress-Client/1.0 (${isVercel ? 'Vercel' : 'Worker'})`,
  timeout: 10000,
  retries: 2,
  // Use longer cache in development for faster iteration
  devCacheTime: isDevelopment ? 300 : 3600, // 5 min dev, 1 hour prod
};

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls: Record<string, string>;
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

// Smart fetch with authentication and retry logic
async function smartFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const headers: Record<string, string> = {
    'User-Agent': CONFIG.userAgent,
    ...options.headers,
  };

  // Add authentication if available
  if (WORDPRESS_USER && WORDPRESS_APP_PASSWORD) {
    const credentials = `${WORDPRESS_USER}:${WORDPRESS_APP_PASSWORD}`;
    headers['Authorization'] = `Basic ${Buffer.from(credentials).toString('base64')}`;
  }

  const fetchOptions = {
    ...options,
    headers,
    signal: AbortSignal.timeout ? AbortSignal.timeout(CONFIG.timeout) : undefined,
  };

  // Retry logic with exponential backoff
  for (let attempt = 0; attempt <= CONFIG.retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      
      if (response.ok) return response;
      
      // Don't retry client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`WordPress API Error: ${response.status} ${response.statusText}`);
      }
      
      // Retry server errors (5xx)
      if (attempt === CONFIG.retries) {
        throw new Error(`WordPress API Unavailable: ${response.status} ${response.statusText}`);
      }
      
      // Exponential backoff: 1s, 2s, 4s
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      
    } catch (error) {
      if (attempt === CONFIG.retries) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
  
  throw new Error('Max retries exceeded');
}

// Fetch all posts
export async function getPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: string;
  tags?: string;
  search?: string;
  orderby?: string;
  order?: 'asc' | 'desc';
}): Promise<WordPressPost[]> {
  const queryParams = new URLSearchParams({
    _embed: 'true',
    per_page: params?.per_page?.toString() || DEFAULT_CONFIG.maxPosts.toString(),
    page: params?.page?.toString() || '1',
    orderby: params?.orderby || 'date',
    order: params?.order || 'desc',
    ...(params?.categories && { categories: params.categories }),
    ...(params?.tags && { tags: params.tags }),
    ...(params?.search && { search: params.search }),
  });

  const response = await smartFetch(`${WORDPRESS_API_URL}/posts?${queryParams}`, {
    next: isVercel ? { revalidate: CONFIG.devCacheTime } : undefined,
  });

  return response.json();
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const response = await smartFetch(
    `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
    {
      next: isVercel ? { revalidate: CONFIG.devCacheTime } : undefined,
    }
  );

  const posts = await response.json();
  return posts.length > 0 ? posts[0] : null;
}

// Fetch all categories
export async function getCategories(): Promise<WordPressCategory[]> {
  const response = await smartFetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
    next: isVercel ? { revalidate: 86400 } : undefined, // Categories change rarely
  });

  return response.json();
}

// Fetch posts by category
export async function getPostsByCategory(categoryId: number, perPage = 10): Promise<WordPressPost[]> {
  return getPosts({
    categories: categoryId.toString(),
    per_page: perPage,
  });
}

// Search posts
export async function searchPosts(query: string, perPage = 10): Promise<WordPressPost[]> {
  return getPosts({
    search: query,
    per_page: perPage,
  });
}

// Get total post count
export async function getTotalPosts(): Promise<number> {
  const response = await smartFetch(`${WORDPRESS_API_URL}/posts?per_page=1`);
  
  const total = response.headers.get('X-WP-Total');
  return total ? parseInt(total, 10) : 0;
}

// Helper function to strip HTML tags from content
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Helper function to get excerpt
export function getExcerpt(post: WordPressPost, length = 150): string {
  const text = stripHtmlTags(post.excerpt.rendered);
  return text.length > length ? text.substring(0, length) + '...' : text;
}

// Helper function to get featured image URL
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

// Helper function to get author name
export function getAuthorName(post: WordPressPost): string {
  return post._embedded?.author?.[0]?.name || 'Unknown Author';
}

// Helper function to get categories
export function getCategories(post: WordPressPost): Array<{id: number; name: string; slug: string}> {
  const terms = post._embedded?.['wp:term'] || [];
  return terms[0] || [];
}

// Helper function to get tags
export function getTags(post: WordPressPost): Array<{id: number; name: string; slug: string}> {
  const terms = post._embedded?.['wp:term'] || [];
  return terms[1] || [];
}

// Helper function to get category names as array
export function getCategoryNames(post: WordPressPost): string[] {
  return getCategories(post).map(cat => cat.name);
}

// Helper function to get tag names as array
export function getTagNames(post: WordPressPost): string[] {
  return getTags(post).map(tag => tag.name);
}

// Helper function to calculate reading time (words per minute)
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  const text = stripHtmlTags(content);
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper function to format date
export function formatDate(dateString: string, locale = 'en-US'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Helper function to get relative time (e.g., "2 days ago")
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}
