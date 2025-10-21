import { MetadataRoute } from 'next';
import { getPostsWithCache } from '@/lib/blog/cache';

export default async function blogSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.goodtoknowrealtor.com';
  const currentDate = new Date().toISOString();
  
  // Get blog posts for dynamic sitemap generation
  const posts = await getPostsWithCache();
  
  // Generate blog post URLs with proper lastModified dates
  const blogPostUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || post.date || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    // Blog main page
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Individual blog posts
    ...blogPostUrls,
  ];
}
