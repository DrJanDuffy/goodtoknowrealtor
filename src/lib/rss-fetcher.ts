import Parser from 'rss-parser';

export interface MarketInsight {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  categories?: string[];
  guid: string;
  isoDate?: string;
}

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['description', 'contentSnippet'],
    ],
  },
});

const RSS_FEED_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

/**
 * Fetch market insights from Simplifying the Market RSS feed
 * @param limit - Number of items to return (default: 6)
 * @returns Array of market insights
 */
export async function fetchMarketInsights(limit: number = 6): Promise<MarketInsight[]> {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    const insights: MarketInsight[] = feed.items.slice(0, limit).map((item) => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      content: item.content || item['content:encoded'] || '',
      contentSnippet: item.contentSnippet || item.description || '',
      categories: item.categories || [],
      guid: item.guid || item.link || '',
      isoDate: item.isoDate,
    }));

    return insights;
  } catch {
    // Log error for debugging
    return [];
  }
}

/**
 * Get a simplified excerpt from content
 * @param content - HTML or text content
 * @param maxLength - Maximum length of excerpt (default: 200)
 * @returns Clean text excerpt
 */
export function getExcerpt(content: string, maxLength: number = 200): string {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  
  // Remove extra whitespace
  const cleanText = text.replace(/\s+/g, ' ').trim();
  
  // Truncate and add ellipsis if needed
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  return cleanText.substring(0, maxLength).trim() + '...';
}

/**
 * Format date for display
 * @param dateString - Date string from RSS feed
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

