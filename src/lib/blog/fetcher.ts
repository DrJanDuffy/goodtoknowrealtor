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
    
    // Try multiple selectors to find blog posts (including BHHS-specific selectors)
    const selectors = [
      '.blog-post',
      '.post-item',
      '.article',
      '[data-post-id]',
      '.entry',
      '.post',
      '.cmp-text',
      '.aem-GridColumn',
      '.responsivegrid',
      '.content',
      '.blog-content',
      '.post-content',
      '.article-content',
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
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
            imageAlt: title,
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

  // Enhanced image extraction with multiple fallbacks
  const img = $el.find('img').first();
  let image = img.attr('src') || img.attr('data-src') || img.attr('data-lazy-src') || img.attr('data-original');
  
  // If no image found, try to find images in parent containers
  if (!image) {
    const parentImg = $el.parent().find('img').first();
    image = parentImg.attr('src') || parentImg.attr('data-src') || parentImg.attr('data-lazy-src');
  }
  
  // If still no image, use a default real estate image
  if (!image) {
    image = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80';
  }
  
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
 * Generate sample blog posts for demonstration
 */
function generateSampleBlogPosts(): BlogPost[] {
  return [
    {
      id: 'sample-1',
      title: 'Las Vegas Real Estate Market Update: January 2025',
      slug: 'las-vegas-real-estate-market-update-january-2025',
      content: `
        <h2>Market Overview</h2>
        <p>The Las Vegas real estate market continues to show strong performance as we enter 2025. With inventory levels remaining low and demand staying steady, we're seeing a balanced market that favors both buyers and sellers.</p>
        
        <h3>Key Market Statistics</h3>
        <ul>
          <li>Median home price: $450,000 (up 3.2% from last year)</li>
          <li>Average days on market: 28 days</li>
          <li>Inventory levels: 2.1 months supply</li>
          <li>New listings: 1,247 (up 8% from December)</li>
        </ul>
        
        <h3>What This Means for You</h3>
        <p>For <strong>buyers</strong>: The market offers good opportunities with reasonable pricing and a decent selection of homes. Interest rates have stabilized, making it a good time to secure financing.</p>
        
        <p>For <strong>sellers</strong>: Homes are selling quickly when priced correctly. The low inventory means less competition, but buyers are still discerning about value.</p>
        
        <p>As your trusted Las Vegas real estate expert, I'm here to help you navigate this market successfully. Whether you're buying your first home, upgrading, or downsizing, I'll provide the guidance and expertise you need.</p>
      `,
      excerpt: 'Las Vegas real estate market shows strong performance in January 2025 with balanced conditions favoring both buyers and sellers.',
      date: '2025-01-15T10:00:00Z',
      author: 'Dr. Janet Duffy',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      imageAlt: 'Las Vegas skyline with modern homes',
      originalUrl: 'https://www.bhhscp.com/blog/las-vegas-real-estate-market-update-january-2025',
      categories: ['Market Updates', 'Las Vegas'],
      tags: ['real estate', 'las vegas', 'market update', 'housing trends'],
      readingTime: 4,
    },
    {
      id: 'sample-2',
      title: 'First-Time Home Buyer Guide: Everything You Need to Know',
      slug: 'first-time-home-buyer-guide-everything-you-need-to-know',
      content: `
        <h2>Your Journey to Homeownership Starts Here</h2>
        <p>Buying your first home is one of life's most exciting milestones. As a first-time buyer in Las Vegas, you have access to unique opportunities and programs designed to help you achieve homeownership.</p>
        
        <h3>Step 1: Assess Your Financial Readiness</h3>
        <p>Before you start house hunting, it's crucial to understand your financial position:</p>
        <ul>
          <li>Calculate your debt-to-income ratio</li>
          <li>Review your credit score and history</li>
          <li>Determine your down payment capability</li>
          <li>Consider closing costs and moving expenses</li>
        </ul>
        
        <h3>Step 2: Get Pre-Approved for a Mortgage</h3>
        <p>Pre-approval gives you several advantages:</p>
        <ul>
          <li>Know exactly how much you can afford</li>
          <li>Show sellers you're a serious buyer</li>
          <li>Move quickly when you find the right home</li>
        </ul>
        
        <h3>Step 3: Find the Right Real Estate Agent</h3>
        <p>Working with an experienced agent like Dr. Janet Duffy can make all the difference. I specialize in helping first-time buyers navigate the complex Las Vegas market with confidence.</p>
        
        <h3>Las Vegas First-Time Buyer Programs</h3>
        <p>Nevada offers several programs to help first-time buyers:</p>
        <ul>
          <li>Nevada Housing Division programs</li>
          <li>FHA loans with low down payments</li>
          <li>VA loans for eligible veterans</li>
          <li>USDA loans for rural areas</li>
        </ul>
        
        <p>Ready to start your home buying journey? Contact me at (702) 222-1964 for a personalized consultation.</p>
      `,
      excerpt: 'Complete guide for first-time home buyers in Las Vegas, covering everything from financial preparation to available assistance programs.',
      date: '2025-01-12T14:30:00Z',
      author: 'Dr. Janet Duffy',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'Happy couple holding house keys',
      originalUrl: 'https://www.bhhscp.com/blog/first-time-home-buyer-guide-everything-you-need-to-know',
      categories: ['Buying Tips', 'First-Time Buyers'],
      tags: ['first time buyer', 'home buying', 'mortgage', 'las vegas'],
      readingTime: 6,
    },
    {
      id: 'sample-3',
      title: 'Selling Your Las Vegas Home: 5 Tips for Maximum Value',
      slug: 'selling-your-las-vegas-home-5-tips-for-maximum-value',
      content: `
        <h2>Maximize Your Home's Value in Today's Market</h2>
        <p>Selling your Las Vegas home requires strategic planning to achieve the best possible outcome. Here are five proven tips to help you maximize your home's value and sell quickly.</p>
        
        <h3>1. Price It Right From the Start</h3>
        <p>Accurate pricing is crucial for a successful sale. Overpricing can lead to extended time on market and lower final sale price. I provide comprehensive market analysis to determine the optimal listing price based on:</p>
        <ul>
          <li>Recent comparable sales in your area</li>
          <li>Current market conditions</li>
          <li>Your home's unique features and condition</li>
        </ul>
        
        <h3>2. Enhance Your Home's Curb Appeal</h3>
        <p>First impressions matter. Simple improvements can significantly impact buyer interest:</p>
        <ul>
          <li>Fresh landscaping and clean exterior</li>
          <li>Updated front door and hardware</li>
          <li>Clean windows and gutters</li>
          <li>Pressure wash siding and walkways</li>
        </ul>
        
        <h3>3. Declutter and Depersonalize</h3>
        <p>Help buyers envision themselves in your home by creating a neutral, welcoming environment. Remove personal items and excess furniture to make rooms feel larger and more inviting.</p>
        
        <h3>4. Make Strategic Repairs</h3>
        <p>Address any maintenance issues before listing:</p>
        <ul>
          <li>Fix leaky faucets and running toilets</li>
          <li>Replace burned-out light bulbs</li>
          <li>Repair loose door handles and cabinet doors</li>
          <li>Touch up paint where needed</li>
        </ul>
        
        <h3>5. Professional Photography and Marketing</h3>
        <p>High-quality photos and comprehensive marketing are essential in today's digital market. I ensure your home is presented professionally across all platforms to reach the maximum number of qualified buyers.</p>
        
        <p>Ready to sell your Las Vegas home for maximum value? Contact Dr. Janet Duffy at (702) 222-1964 for a free home valuation and selling strategy consultation.</p>
      `,
      excerpt: 'Five essential tips for selling your Las Vegas home to achieve maximum value and a quick sale in today\'s competitive market.',
      date: '2025-01-10T09:15:00Z',
      author: 'Dr. Janet Duffy',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      imageAlt: 'Beautiful Las Vegas home for sale',
      originalUrl: 'https://www.bhhscp.com/blog/selling-your-las-vegas-home-5-tips-for-maximum-value',
      categories: ['Selling Tips', 'Market Strategy'],
      tags: ['home selling', 'real estate', 'las vegas', 'home value'],
      readingTime: 5,
    },
    {
      id: 'sample-4',
      title: 'Las Vegas Neighborhood Spotlight: Summerlin',
      slug: 'las-vegas-neighborhood-spotlight-summerlin',
      content: `
        <h2>Discover Summerlin: Las Vegas's Premier Master-Planned Community</h2>
        <p>Summerlin stands as one of Las Vegas's most desirable neighborhoods, offering residents a perfect blend of suburban tranquility and urban convenience. This master-planned community has consistently ranked among the nation's best places to live.</p>
        
        <h3>Community Highlights</h3>
        <p>Summerlin spans over 22,500 acres and includes:</p>
        <ul>
          <li>40+ parks and recreational facilities</li>
          <li>150+ miles of trails and walking paths</li>
          <li>Multiple golf courses and country clubs</li>
          <li>Top-rated schools and educational facilities</li>
          <li>Diverse dining and shopping options</li>
        </ul>
        
        <h3>Housing Options</h3>
        <p>The community offers a wide range of housing options to suit every lifestyle:</p>
        <ul>
          <li>Luxury custom homes and estates</li>
          <li>Family-friendly single-family homes</li>
          <li>Modern condominiums and townhomes</li>
          <li>Active adult communities</li>
        </ul>
        
        <h3>Real Estate Market</h3>
        <p>Summerlin's real estate market remains strong with:</p>
        <ul>
          <li>Median home price: $650,000</li>
          <li>Average days on market: 22 days</li>
          <li>High property values and appreciation</li>
          <li>Strong resale market</li>
        </ul>
        
        <h3>Why Choose Summerlin?</h3>
        <p>Residents enjoy:</p>
        <ul>
          <li>Excellent schools and family amenities</li>
          <li>Low crime rates and safe neighborhoods</li>
          <li>Easy access to the Las Vegas Strip and downtown</li>
          <li>Beautiful mountain views and natural landscapes</li>
          <li>Active community associations and events</li>
        </ul>
        
        <p>Interested in making Summerlin your home? Contact Dr. Janet Duffy at (702) 222-1964 to explore available properties and learn more about this exceptional community.</p>
      `,
      excerpt: 'Explore Summerlin, Las Vegas\'s premier master-planned community, featuring top-rated amenities, excellent schools, and diverse housing options.',
      date: '2025-01-08T16:45:00Z',
      author: 'Dr. Janet Duffy',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      imageAlt: 'Summerlin neighborhood with beautiful homes and mountain views',
      originalUrl: 'https://www.bhhscp.com/blog/las-vegas-neighborhood-spotlight-summerlin',
      categories: ['Neighborhoods', 'Las Vegas'],
      tags: ['summerlin', 'neighborhoods', 'las vegas', 'master planned community'],
      readingTime: 4,
    },
    {
      id: 'sample-5',
      title: 'Investment Opportunities in Las Vegas Real Estate',
      slug: 'investment-opportunities-in-las-vegas-real-estate',
      content: `
        <h2>Las Vegas: A Prime Market for Real Estate Investment</h2>
        <p>Las Vegas continues to attract investors from around the world due to its strong fundamentals, growing population, and diverse economy. Whether you're looking for rental properties, fix-and-flip opportunities, or long-term appreciation, Las Vegas offers compelling investment potential.</p>
        
        <h3>Market Fundamentals</h3>
        <p>Las Vegas presents strong investment fundamentals:</p>
        <ul>
          <li>Growing population and job market</li>
          <li>Tourism and entertainment industry stability</li>
          <li>Relatively affordable compared to coastal markets</li>
          <li>No state income tax</li>
          <li>Business-friendly environment</li>
        </ul>
        
        <h3>Investment Property Types</h3>
        <p>Las Vegas offers various investment opportunities:</p>
        <ul>
          <li><strong>Single-family rentals</strong>: Steady rental demand and appreciation</li>
          <li><strong>Multi-family properties</strong>: Higher cash flow potential</li>
          <li><strong>Short-term rentals</strong>: Tourism-driven rental market</li>
          <li><strong>Commercial properties</strong>: Growing business district</li>
          <li><strong>New construction</strong>: Modern amenities and energy efficiency</li>
        </ul>
        
        <h3>Key Investment Areas</h3>
        <p>Prime investment locations include:</p>
        <ul>
          <li><strong>Downtown Las Vegas</strong>: Urban revitalization and development</li>
          <li><strong>Henderson</strong>: Family-oriented, stable neighborhoods</li>
          <li><strong>North Las Vegas</strong>: Emerging growth areas</li>
          <li><strong>Southwest Valley</strong>: New construction and master-planned communities</li>
        </ul>
        
        <h3>Investment Considerations</h3>
        <p>Before investing, consider:</p>
        <ul>
          <li>Market analysis and property selection</li>
          <li>Financing options and cash flow projections</li>
          <li>Property management requirements</li>
          <li>Tax implications and benefits</li>
          <li>Exit strategies and long-term goals</li>
        </ul>
        
        <h3>Why Work with a Local Expert</h3>
        <p>Successful real estate investment requires local market knowledge and expertise. As a Las Vegas real estate professional, I provide:</p>
        <ul>
          <li>Comprehensive market analysis</li>
          <li>Investment property identification</li>
          <li>Financial modeling and projections</li>
          <li>Network of trusted professionals</li>
          <li>Ongoing portfolio management support</li>
        </ul>
        
        <p>Ready to explore Las Vegas real estate investment opportunities? Contact Dr. Janet Duffy at (702) 222-1964 for a personalized investment consultation.</p>
      `,
      excerpt: 'Discover why Las Vegas is a prime market for real estate investment, featuring strong fundamentals, diverse opportunities, and growing potential.',
      date: '2025-01-05T11:20:00Z',
      author: 'Dr. Janet Duffy',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      imageAlt: 'Las Vegas investment properties and skyline',
      originalUrl: 'https://www.bhhscp.com/blog/investment-opportunities-in-las-vegas-real-estate',
      categories: ['Investment', 'Market Analysis'],
      tags: ['real estate investment', 'las vegas', 'investment properties', 'market analysis'],
      readingTime: 7,
    }
  ];
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
      console.log('Returning sample blog posts for demonstration...');
      // Return sample blog posts for demonstration
      return generateSampleBlogPosts();
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
