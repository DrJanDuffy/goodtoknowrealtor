// Blog category configuration mirroring BHHS structure

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  assessmentType?: 'buyer-readiness' | 'seller-readiness' | 'neighborhood-match' | 'investment-roi';
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'buyer-advice',
    name: 'Buyer Advice',
    slug: 'buyer-advice',
    description: 'Expert guidance for first-time and experienced home buyers in Las Vegas',
    icon: '🏠',
    color: 'blue',
    assessmentType: 'buyer-readiness',
    featured: true,
    seo: {
      title: 'Las Vegas Home Buyer Advice | Dr. Janet Duffy',
      description: 'Expert home buying advice for Las Vegas. First-time buyer guides, financing tips, and neighborhood insights from Premier Good To Know REALTOR® Dr. Janet Duffy.',
      keywords: ['Las Vegas home buyer advice', 'first time home buyer Las Vegas', 'Vegas home buying tips', 'Las Vegas real estate buying guide']
    }
  },
  {
    id: 'seller-advice',
    name: 'Seller Advice',
    slug: 'seller-advice',
    description: 'Strategic tips to maximize your home\'s value when selling in Las Vegas',
    icon: '💰',
    color: 'green',
    assessmentType: 'seller-readiness',
    featured: true,
    seo: {
      title: 'Las Vegas Home Seller Advice | Dr. Janet Duffy',
      description: 'Expert home selling advice for Las Vegas. Pricing strategies, staging tips, and market insights to maximize your home\'s value.',
      keywords: ['Las Vegas home seller advice', 'sell home Las Vegas', 'Vegas home selling tips', 'Las Vegas real estate selling']
    }
  },
  {
    id: 'home-improvement',
    name: 'Home Improvement',
    slug: 'home-improvement',
    description: 'Desert living improvements and ROI-focused renovations for Vegas homes',
    icon: '🔨',
    color: 'orange',
    featured: true,
    seo: {
      title: 'Las Vegas Home Improvement Guide | Dr. Janet Duffy',
      description: 'Home improvement tips for Las Vegas properties. Desert landscaping, pool maintenance, and ROI-focused renovations.',
      keywords: ['Las Vegas home improvement', 'desert landscaping', 'Vegas pool homes', 'home renovation Las Vegas']
    }
  },
  {
    id: 'finance',
    name: 'Finance',
    slug: 'finance',
    description: 'Nevada tax advantages, gaming industry financing, and mortgage strategies',
    icon: '💳',
    color: 'purple',
    assessmentType: 'investment-roi',
    featured: true,
    seo: {
      title: 'Las Vegas Real Estate Finance | Dr. Janet Duffy',
      description: 'Real estate financing in Las Vegas. Nevada tax advantages, gaming industry mortgages, and investment strategies.',
      keywords: ['Las Vegas real estate finance', 'Nevada no income tax', 'gaming industry mortgage', 'Vegas investment property']
    }
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Las Vegas living beyond The Strip - neighborhoods, schools, and amenities',
    icon: '🌴',
    color: 'teal',
    assessmentType: 'neighborhood-match',
    featured: true,
    seo: {
      title: 'Las Vegas Lifestyle Guide | Dr. Janet Duffy',
      description: 'Discover Las Vegas lifestyle beyond The Strip. Neighborhood guides, school districts, and local amenities.',
      keywords: ['Las Vegas lifestyle', 'Vegas neighborhoods', 'Las Vegas schools', 'Summerlin Henderson']
    }
  },
  {
    id: 'market-updates',
    name: 'Market Updates',
    slug: 'market-updates',
    description: 'Weekly sales data, trends, and insights for the Las Vegas real estate market',
    icon: '📊',
    color: 'indigo',
    featured: true,
    seo: {
      title: 'Las Vegas Real Estate Market Updates | Dr. Janet Duffy',
      description: 'Latest Las Vegas real estate market updates. Sales data, trends, and neighborhood analysis.',
      keywords: ['Las Vegas real estate market', 'Vegas home prices', 'Las Vegas market trends', 'real estate Las Vegas']
    }
  }
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find(category => category.slug === slug);
}

export function getFeaturedCategories(): BlogCategory[] {
  return blogCategories.filter(category => category.featured);
}

export function getCategoryColorClass(color: string): string {
  const colorClasses = {
    blue: 'from-blue-600 to-indigo-600',
    green: 'from-green-600 to-emerald-600',
    orange: 'from-orange-600 to-red-600',
    purple: 'from-purple-600 to-violet-600',
    teal: 'from-teal-600 to-cyan-600',
    indigo: 'from-indigo-600 to-blue-600'
  };
  return colorClasses[color as keyof typeof colorClasses] || 'from-gray-600 to-gray-700';
}
