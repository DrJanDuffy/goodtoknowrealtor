// Blog post types for the BHHS blog clone

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  categories: string[];
  tags: string[];
  originalUrl: string;
  readingTime?: number;
}

export interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  slug: string;
  categories: number[];
  tags: number[];
  link: string;
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<
      Array<{
        name: string;
        slug: string;
      }>
    >;
    author?: Array<{
      name: string;
    }>;
  };
}

export interface ScrapedPost {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  categories?: string[];
}

export interface BlogConfig {
  sourceUrl: string;
  apiUrl?: string;
  revalidateInterval: number;
  maxPosts: number;
}

export interface SyncStatus {
  success: boolean;
  postsFound: number;
  newPosts: number;
  lastSync: string;
  error?: string;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}
