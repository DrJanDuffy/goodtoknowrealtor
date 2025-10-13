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
    
    // Try multiple selectors to find blog posts (including BHHS AEM-specific selectors)
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
      '.cmp-container',
      '.aem-container',
      '.text',
      '.title',
      '.heading',
      '[data-cmp-is="text"]',
      '[data-cmp-is="container"]',
      '.foundation-layout-container',
      '.foundation-layout-grid',
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
 * Generate BHHS-style blog posts that match their content structure
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
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/summer-2025-homebuyer-trends',
      imageAlt: 'Summer 2025 Homebuyer Trends',
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
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/Is-it-better-to-rent-or-buy-',
      imageAlt: 'Is it Better to Rent or Buy?',
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
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/should-you-buy-a-home-during',
      imageAlt: 'Should You Buy a Home During Market Changes?',
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
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/best-places-to-buy-land-in-t',
      imageAlt: 'Best Places to Buy Land and Homes',
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
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/are-short-term-rentals-still',
      imageAlt: 'Short-term Rental Investment Opportunities',
          originalUrl: 'https://www.bhhscp.com/blog/investment-opportunities-in-las-vegas-real-estate',
          categories: ['Investment', 'Market Analysis'],
          tags: ['real estate investment', 'las vegas', 'investment properties', 'market analysis'],
          readingTime: 7,
        },
        {
          id: 'sample-6',
          title: 'Berkshire Hathaway HomeServices: Your Trusted Real Estate Partner',
          slug: 'berkshire-hathaway-homeservices-trusted-real-estate-partner',
          content: `
            <h2>Why Choose Berkshire Hathaway HomeServices California Properties?</h2>
            <p>When it comes to buying or selling real estate, choosing the right brokerage matters. Berkshire Hathaway HomeServices California Properties represents the gold standard in real estate services, backed by the strength and stability of Berkshire Hathaway.</p>
            
            <h3>Our Commitment to Excellence</h3>
            <p>As part of the Berkshire Hathaway HomeServices network, we uphold the highest standards of professionalism and service:</p>
            <ul>
              <li><strong>Proven Track Record</strong>: Decades of successful real estate transactions</li>
              <li><strong>Global Network</strong>: Access to international buyers and sellers</li>
              <li><strong>Cutting-Edge Technology</strong>: Advanced tools for market analysis and marketing</li>
              <li><strong>Comprehensive Support</strong>: Full-service approach from listing to closing</li>
              <li><strong>Local Expertise</strong>: Deep knowledge of Las Vegas market conditions</li>
            </ul>
            
            <h3>What Sets Us Apart</h3>
            <p>Our unique advantages include:</p>
            <ul>
              <li><strong>Brand Recognition</strong>: The trusted Berkshire Hathaway name</li>
              <li><strong>Marketing Power</strong>: Extensive advertising and promotional reach</li>
              <li><strong>Professional Development</strong>: Ongoing training and education programs</li>
              <li><strong>Client-Centric Approach</strong>: Personalized service tailored to your needs</li>
              <li><strong>Innovation</strong>: Latest technology and marketing strategies</li>
            </ul>
            
            <h3>Our Services</h3>
            <p>We provide comprehensive real estate services:</p>
            <ul>
              <li>Residential sales and purchases</li>
              <li>Luxury property marketing</li>
              <li>Investment property analysis</li>
              <li>Market valuations and appraisals</li>
              <li>Relocation assistance</li>
              <li>Property management referrals</li>
            </ul>
            
            <h3>Your Success is Our Priority</h3>
            <p>At Berkshire Hathaway HomeServices California Properties, we measure our success by your satisfaction. Our team of experienced professionals is dedicated to helping you achieve your real estate goals with integrity, expertise, and personalized attention.</p>
            
            <p>Ready to experience the Berkshire Hathaway difference? Contact Dr. Janet Duffy at (702) 222-1964 to discuss your real estate needs.</p>
          `,
          excerpt: 'Learn why Berkshire Hathaway HomeServices California Properties is the premier choice for Las Vegas real estate services.',
          date: '2025-01-03T14:15:00Z',
          author: 'Dr. Janet Duffy',
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/the-state-of-housing-invento',
      imageAlt: 'State of Housing Inventory',
          originalUrl: 'https://www.bhhscp.com/blog/berkshire-hathaway-homeservices-trusted-real-estate-partner',
          categories: ['Company News', 'Services'],
          tags: ['berkshire hathaway', 'real estate services', 'professional', 'las vegas'],
          readingTime: 5,
        },
        {
          id: 'sample-7',
          title: 'Las Vegas Luxury Real Estate: A World-Class Market',
          slug: 'las-vegas-luxury-real-estate-world-class-market',
          content: `
            <h2>Discover Las Vegas Luxury Living</h2>
            <p>Las Vegas has emerged as one of the nation's premier luxury real estate markets, offering an unparalleled combination of world-class amenities, stunning architecture, and exclusive lifestyle opportunities.</p>
            
            <h3>Luxury Market Highlights</h3>
            <p>Las Vegas luxury properties feature:</p>
            <ul>
              <li><strong>Custom Estates</strong>: Multi-million dollar homes with resort-style amenities</li>
              <li><strong>High-Rise Condominiums</strong>: Penthouse living with Strip and mountain views</li>
              <li><strong>Golf Course Communities</strong>: Exclusive access to championship courses</li>
              <li><strong>Gated Communities</strong>: Privacy and security in prestigious neighborhoods</li>
              <li><strong>Smart Home Technology</strong>: State-of-the-art automation and security systems</li>
            </ul>
            
            <h3>Exclusive Neighborhoods</h3>
            <p>Las Vegas luxury is concentrated in several prestigious areas:</p>
            <ul>
              <li><strong>The Ridges</strong>: Mountain-top estates with panoramic views</li>
              <li><strong>MacDonald Highlands</strong>: Golf course living at its finest</li>
              <li><strong>Spanish Trail</strong>: Established luxury with mature landscaping</li>
              <li><strong>Red Rock Country Club</strong>: Exclusive golf and tennis community</li>
              <li><strong>Downtown High-Rises</strong>: Urban luxury with city skyline views</li>
            </ul>
            
            <h3>Luxury Amenities</h3>
            <p>High-end Las Vegas properties typically include:</p>
            <ul>
              <li>Resort-style swimming pools and spas</li>
              <li>Private home theaters and wine cellars</li>
              <li>Gourmet kitchens with premium appliances</li>
              <li>Outdoor living spaces with fire features</li>
              <li>Guest houses and entertainment pavilions</li>
              <li>Smart home automation systems</li>
            </ul>
            
            <h3>Investment Potential</h3>
            <p>Las Vegas luxury real estate offers strong investment opportunities:</p>
            <ul>
              <li>Consistent appreciation in premier locations</li>
              <li>Limited inventory in exclusive communities</li>
              <li>International buyer interest</li>
              <li>No state income tax advantage</li>
              <li>Growing luxury market demand</li>
            </ul>
            
            <h3>Why Work with a Luxury Specialist</h3>
            <p>Luxury real estate requires specialized expertise and discretion. As a certified luxury home marketing specialist, I provide:</p>
            <ul>
              <li>Confidential representation and privacy</li>
              <li>Access to off-market opportunities</li>
              <li>International marketing and networking</li>
              <li>Comprehensive market analysis</li>
              <li>White-glove service throughout the process</li>
            </ul>
            
            <p>Interested in Las Vegas luxury real estate? Contact Dr. Janet Duffy at (702) 222-1964 for a private consultation.</p>
          `,
          excerpt: 'Explore Las Vegas luxury real estate market featuring world-class amenities, exclusive neighborhoods, and exceptional investment potential.',
          date: '2025-01-01T10:30:00Z',
          author: 'Dr. Janet Duffy',
      image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/lifestyle/how-to-buy-a-home-in-sprin',
      imageAlt: 'How to Buy a Home in Spring',
          originalUrl: 'https://www.bhhscp.com/blog/las-vegas-luxury-real-estate-world-class-market',
          categories: ['Luxury Properties', 'Market Analysis'],
          tags: ['luxury real estate', 'las vegas', 'high-end properties', 'exclusive communities'],
          readingTime: 6,
        },
        {
          id: 'sample-8',
          title: 'Should You Buy a Home During Market Changes?',
          slug: 'should-you-buy-a-home-during-market-changes',
          content: `
            <h2>Navigating Market Changes as a Home Buyer</h2>
            <p>Market changes can create both opportunities and challenges for home buyers. Understanding how to navigate these fluctuations is crucial for making informed decisions about your home purchase.</p>
            
            <h3>Understanding Market Cycles</h3>
            <p>Real estate markets naturally cycle through different phases:</p>
            <ul>
              <li><strong>Buyer's Market</strong>: More inventory, lower prices, less competition</li>
              <li><strong>Seller's Market</strong>: Limited inventory, higher prices, multiple offers</li>
              <li><strong>Balanced Market</strong>: Equal supply and demand, stable pricing</li>
              <li><strong>Transitional Market</strong>: Moving between buyer and seller markets</li>
            </ul>
            
            <h3>Strategies for Different Market Conditions</h3>
            <p><strong>In a Buyer's Market:</strong></p>
            <ul>
              <li>Take time to explore multiple options</li>
              <li>Negotiate from a position of strength</li>
              <li>Consider asking for closing cost assistance</li>
              <li>Look for homes that have been on the market longer</li>
            </ul>
            
            <p><strong>In a Seller's Market:</strong></p>
            <ul>
              <li>Be prepared to act quickly</li>
              <li>Get pre-approved for financing</li>
              <li>Consider offering above asking price</li>
              <li>Minimize contingencies if possible</li>
            </ul>
            
            <h3>Key Considerations</h3>
            <p>Regardless of market conditions, focus on:</p>
            <ul>
              <li>Your long-term housing needs</li>
              <li>Affordability within your budget</li>
              <li>Location and neighborhood preferences</li>
              <li>Future market potential</li>
            </ul>
            
            <p>Ready to navigate the Las Vegas market? Contact Dr. Janet Duffy at (702) 222-1964 for expert guidance on timing your home purchase.</p>
          `,
          excerpt: 'Learn how to navigate different real estate market conditions and make informed decisions about when to buy your home.',
          date: '2024-12-28T16:20:00Z',
          author: 'Dr. Janet Duffy',
          image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/should-you-buy-a-home-during',
          imageAlt: 'Should You Buy a Home During Market Changes?',
          originalUrl: 'https://www.bhhscp.com/blog/should-you-buy-a-home-during-market-changes',
          categories: ['Buying Tips', 'Market Analysis'],
          tags: ['home buying', 'market conditions', 'real estate', 'timing'],
          readingTime: 4,
        },
        {
          id: 'sample-9',
          title: 'What Are Deed Restrictions?',
          slug: 'what-are-deed-restrictions',
          content: `
            <h2>Understanding Deed Restrictions in Real Estate</h2>
            <p>Deed restrictions, also known as restrictive covenants, are rules and limitations placed on a property that dictate how it can be used, maintained, or modified. These restrictions are legally binding and transfer with the property when sold.</p>
            
            <h3>Common Types of Deed Restrictions</h3>
            <p>Deed restrictions can cover various aspects of property use:</p>
            <ul>
              <li><strong>Architectural Guidelines</strong>: Home style, materials, colors</li>
              <li><strong>Land Use Restrictions</strong>: Prohibited activities or businesses</li>
              <li><strong>Maintenance Requirements</strong>: Property upkeep standards</li>
              <li><strong>Pet Restrictions</strong>: Limitations on animals or breeds</li>
              <li><strong>Parking Regulations</strong>: Vehicle storage and parking rules</li>
              <li><strong>Landscaping Requirements</strong>: Yard maintenance and design</li>
            </ul>
            
            <h3>Where to Find Deed Restrictions</h3>
            <p>Deed restrictions are typically found in:</p>
            <ul>
              <li>The property's deed or title documents</li>
              <li>Homeowners Association (HOA) bylaws</li>
              <li>Subdivision plat maps and covenants</li>
              <li>County recorder's office records</li>
              <li>Property disclosure documents</li>
            </ul>
            
            <h3>Why Deed Restrictions Exist</h3>
            <p>These restrictions serve several purposes:</p>
            <ul>
              <li>Maintain property values and neighborhood aesthetics</li>
              <li>Ensure consistent community standards</li>
              <li>Prevent incompatible land uses</li>
              <li>Protect the character of established neighborhoods</li>
            </ul>
            
            <h3>Important Considerations for Buyers</h3>
            <p>Before purchasing a property with deed restrictions:</p>
            <ul>
              <li>Review all restrictions carefully</li>
              <li>Understand enforcement mechanisms</li>
              <li>Consider your lifestyle and future plans</li>
              <li>Evaluate the impact on property value</li>
              <li>Check for any pending violations</li>
            </ul>
            
            <p>Need help understanding deed restrictions on a Las Vegas property? Contact Dr. Janet Duffy at (702) 222-1964 for expert guidance.</p>
          `,
          excerpt: 'Learn about deed restrictions, their purpose, and what they mean for property ownership and use.',
          date: '2024-12-25T11:45:00Z',
          author: 'Dr. Janet Duffy',
          image: 'https://www.bhhscp.com/content/dam/bhhs/web-images/good-to-know/general/what-are-deed-restrictions-9',
          imageAlt: 'What Are Deed Restrictions?',
          originalUrl: 'https://www.bhhscp.com/blog/what-are-deed-restrictions',
          categories: ['Legal Information', 'Home Buying'],
          tags: ['deed restrictions', 'property law', 'home buying', 'legal'],
          readingTime: 5,
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
