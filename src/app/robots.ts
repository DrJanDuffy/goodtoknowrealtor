import type { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Use canonical production URL so Google Search Console always sees the same sitemap
  const baseUrl = SEO_CONFIG.siteUrl;

  return {
    rules: [
      // Default: allow all crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // ── AI Retrieval Bots (power AI search results) ──
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // ── AI Training Bots (maximizes visibility in AI models) ──
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
