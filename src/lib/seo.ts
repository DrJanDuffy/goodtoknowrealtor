import { Metadata } from 'next';

// Base configuration for Dr. Janet Duffy's Las Vegas real estate business
export const SEO_CONFIG = {
  siteName: 'Dr. Janet Duffy - Las Vegas Real Estate Expert',
  siteUrl: 'https://www.goodtoknowrealtor.com',
  defaultTitle: 'Dr. Janet Duffy - Las Vegas Real Estate Expert | Top 1% Agent',
  defaultDescription: 'Top-performing Las Vegas real estate agent Dr. Janet Duffy delivers exceptional results with $127M+ in sales volume. Expert guidance for buying, selling, and investing in Las Vegas properties.',
  keywords: [
    'Las Vegas real estate',
    'Dr. Janet Duffy',
    'Las Vegas realtor',
    'Las Vegas homes for sale',
    'Las Vegas real estate agent',
    'Summerlin real estate',
    'Henderson real estate',
    'Las Vegas luxury homes',
    'Las Vegas investment properties',
    'Las Vegas home buying',
    'Las Vegas home selling',
    'Berkshire Hathaway HomeServices',
    'Las Vegas property values',
    'Las Vegas market trends'
  ],
  author: 'Dr. Janet Duffy',
  phone: '(702) 222-1964',
  email: 'info@drjanduffy.com',
  address: {
    street: 'Las Vegas, Nevada',
    city: 'Las Vegas',
    state: 'Nevada',
    zipCode: '89101',
    country: 'United States'
  },
  social: {
    facebook: 'https://www.facebook.com/bhhsrealestate',
    instagram: 'https://www.instagram.com/bhhsrealestate',
    linkedin: 'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
    youtube: 'https://www.youtube.com/channel/UCrBKUuQDrkCNFjy4wF5ZWXw'
  },
  images: {
    default: '/images/dr-janet-duffy-og.jpg',
    logo: '/images/bhhs/logo.svg',
    agent: '/images/dr-janet-duffy-profile.jpg'
  }
};

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website'
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
    
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const allKeywords = [...SEO_CONFIG.keywords, ...keywords];
  const imageUrl = image ? `${SEO_CONFIG.siteUrl}${image}` : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.default}`;
  const pageUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: pageUrl,
      siteName: SEO_CONFIG.siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
      creator: '@drjanduffy',
    },
    alternates: {
      canonical: pageUrl,
    },
    verification: {
      google: 'your-google-verification-code', // Add your actual Google verification code
    },
  };
}

// Generate JSON-LD structured data for Real Estate Agent
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Janet Duffy',
    alternateName: 'Premier Good To Know REALTOR®',
    description: 'Premier Good To Know REALTOR® providing expert Las Vegas real estate services including buying, selling, and investment properties.',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      postalCode: SEO_CONFIG.address.zipCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'Nevada',
      },
    ],
    serviceType: [
      'Real Estate Buying',
      'Real Estate Selling',
      'Luxury Real Estate',
      'Investment Properties',
      'Property Valuation',
      'Real Estate Consulting',
    ],
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Premier Properties',
      url: 'https://www.bhhs.com',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'REALTOR® License',
    },
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
  };
}

// Generate JSON-LD structured data for Local Business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Janet Duffy Real Estate Services',
    alternateName: 'Premier Good To Know REALTOR®',
    description: 'Premier Las Vegas real estate services by Dr. Janet Duffy. Expert guidance for buying, selling, and investing in Las Vegas properties.',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      postalCode: SEO_CONFIG.address.zipCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      addressRegion: 'Nevada',
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00,Sa 10:00-16:00',
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SEO_CONFIG.siteUrl}${crumb.url}`,
    })),
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate Expert',
    description: 'Premier Good To Know REALTOR® Dr. Janet Duffy provides expert Las Vegas real estate services. Buy, sell, or invest in Las Vegas properties with personalized guidance and local market expertise.',
    keywords: ['Las Vegas real estate', 'Dr. Janet Duffy', 'Premier Good To Know REALTOR', 'Las Vegas realtor', 'Las Vegas homes for sale'],
  },
  about: {
    title: 'About Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate Expert',
    description: 'Learn about Dr. Janet Duffy, Premier Good To Know REALTOR® with over 15 years of Las Vegas real estate experience. Expert guidance for buying and selling properties.',
    keywords: ['Dr. Janet Duffy biography', 'Las Vegas real estate agent', 'Premier Good To Know REALTOR', 'Las Vegas realtor experience'],
  },
  contact: {
    title: 'Contact Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate',
    description: 'Contact Premier Good To Know REALTOR® Dr. Janet Duffy for expert Las Vegas real estate services. Call (702) 222-1964 for personalized assistance.',
    keywords: ['contact Dr. Janet Duffy', 'Las Vegas real estate contact', 'Premier Good To Know REALTOR contact', 'Las Vegas realtor phone'],
  },
  services: {
    title: 'Real Estate Services | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Comprehensive Las Vegas real estate services by Premier Good To Know REALTOR® Dr. Janet Duffy. Buying, selling, luxury properties, and investment services.',
    keywords: ['Las Vegas real estate services', 'home buying Las Vegas', 'home selling Las Vegas', 'luxury real estate Las Vegas'],
  },
  buying: {
    title: 'Buying a Home in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Expert guidance for buying a home in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. First-time buyer assistance and market insights.',
    keywords: ['buying home Las Vegas', 'first time home buyer Las Vegas', 'Las Vegas homes for sale', 'Las Vegas real estate buying'],
  },
  selling: {
    title: 'Selling Your Home in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Maximize your home\'s value when selling in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Expert pricing and marketing strategies.',
    keywords: ['selling home Las Vegas', 'home value Las Vegas', 'Las Vegas home selling tips', 'Las Vegas real estate selling'],
  },
  luxury: {
    title: 'Luxury Real Estate in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Premium luxury real estate services in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Summerlin, Henderson, and exclusive neighborhoods.',
    keywords: ['luxury homes Las Vegas', 'Summerlin luxury homes', 'Henderson luxury homes', 'Las Vegas luxury real estate'],
  },
  investing: {
    title: 'Real Estate Investment in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Strategic real estate investment opportunities in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Rental properties and investment guidance.',
    keywords: ['Las Vegas real estate investment', 'rental properties Las Vegas', 'investment properties Las Vegas', 'Las Vegas real estate investing'],
  },
  blog: {
    title: 'Las Vegas Real Estate Blog | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Latest Las Vegas real estate insights, market trends, and expert advice from Premier Good To Know REALTOR® Dr. Janet Duffy.',
    keywords: ['Las Vegas real estate blog', 'Las Vegas market trends', 'real estate news Las Vegas', 'Las Vegas property insights'],
  },
};
