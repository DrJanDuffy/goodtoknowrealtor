import Parser from 'rss-parser';

const parser = new Parser();
const KCM_RSS_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

export interface KCMPost {
  title: string;
  excerpt: string;
  link: string;
  pubDate: string;
  image?: string;
}

export async function fetchKCMPosts(limit = 10): Promise<KCMPost[]> {
  try {
    const feed = await parser.parseURL(KCM_RSS_URL);
    return feed.items.slice(0, limit).map(item => ({
      title: item.title || '',
      excerpt: item.contentSnippet || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      image: item.enclosure?.url,
    }));
  } catch (error) {
    console.error('Error fetching KCM posts:', error);
    return [];
  }
}

export async function getKCMPostsWithCache(limit = 10): Promise<KCMPost[]> {
  // This will be cached by Next.js with revalidate
  return fetchKCMPosts(limit);
}

