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
    alternateName: 'Las Vegas Real Estate Expert',
    description: 'Top 1% Las Vegas real estate agent Dr. Janet Duffy delivers exceptional results with $127M+ in sales volume. Expert guidance for buying, selling, and investing in Las Vegas properties.',
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
      {
        '@type': 'City',
        name: 'Downtown Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Green Valley',
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
      'First-Time Home Buyer Assistance',
      'Luxury Property Specialist',
    ],
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Premier Properties',
      url: 'https://www.bhhs.com',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'REALTOR® License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Association of Realtors',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Luxury Property Specialist (LPS)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Institute for Luxury Home Marketing',
        },
      },
    ],
    award: [
      'Top 1% of Las Vegas Realtors (2023, 2024)',
      'Berkshire Hathaway Circle of Excellence',
      '5-Star Client Rating Average',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    knowsAbout: [
      'Las Vegas Real Estate Market',
      'Luxury Homes',
      'Investment Properties',
      'First-Time Home Buyers',
      'Property Valuation',
      'Market Analysis',
      'Negotiation',
      'Transaction Management',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'National Association of Realtors',
      },
      {
        '@type': 'Organization',
        name: 'Las Vegas Realtors Association',
      },
      {
        '@type': 'Organization',
        name: 'Institute for Luxury Home Marketing',
      },
    ],
  };
}

// Generate JSON-LD structured data for Local Business (Berkshire Hathaway Office)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Berkshire Hathaway HomeServices Premier Properties',
    alternateName: 'Berkshire Hathaway HomeServices Las Vegas',
    description: 'Premier Las Vegas real estate office providing expert guidance for buying, selling, and investing in Las Vegas properties.',
    url: 'https://www.bhhs.com',
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Las Vegas, Nevada',
      addressLocality: 'Las Vegas',
      addressRegion: 'Nevada',
      postalCode: '89101',
      addressCountry: 'United States',
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
    priceRange: '$$$$',
    openingHours: 'Mo-Fr 09:00-18:00,Sa 10:00-16:00,Su 12:00-16:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    employee: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      jobTitle: 'Top 1% Las Vegas Real Estate Agent',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Buying Services',
            description: 'Expert guidance for buying homes in Las Vegas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Selling Services',
            description: 'Professional home selling services with market expertise',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Services',
            description: 'Specialized luxury property services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            description: 'Strategic investment property guidance',
          },
        },
      ],
    },
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

// Generate Review schema for testimonials
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  location?: string;
  community?: string;
}>) {
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      description: 'Las Vegas Real Estate Agent',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Janet Duffy Real Estate',
    },
    ...(review.location && { location: review.location }),
    ...(review.community && { community: review.community }),
  }));
}

// Generate Product schema for property listings
export function generatePropertySchema(properties: Array<{
  name: string;
  description: string;
  image: string;
  price: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  lotSize?: string;
  yearBuilt?: number;
  propertyType: string;
  listingStatus: string;
  mlsNumber?: string;
}>) {
  return properties.map(property => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: property.name,
    description: property.description,
    image: property.image,
    brand: {
      '@type': 'Brand',
      name: 'Berkshire Hathaway HomeServices',
    },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: property.listingStatus === 'For Sale' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Janet Duffy',
        telephone: SEO_CONFIG.phone,
        email: SEO_CONFIG.email,
      },
    },
    additionalProperty: [
      ...(property.bedrooms ? [{
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: property.bedrooms,
      }] : []),
      ...(property.bathrooms ? [{
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: property.bathrooms,
      }] : []),
      ...(property.squareFeet ? [{
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: property.squareFeet,
      }] : []),
      ...(property.lotSize ? [{
        '@type': 'PropertyValue',
        name: 'Lot Size',
        value: property.lotSize,
      }] : []),
      ...(property.yearBuilt ? [{
        '@type': 'PropertyValue',
        name: 'Year Built',
        value: property.yearBuilt,
      }] : []),
      {
        '@type': 'PropertyValue',
        name: 'Property Type',
        value: property.propertyType,
      },
      ...(property.mlsNumber ? [{
        '@type': 'PropertyValue',
        name: 'MLS Number',
        value: property.mlsNumber,
      }] : []),
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'Nevada',
      addressCountry: 'United States',
    },
  }));
}

// Generate VideoObject schema for videos
export function generateVideoSchema(videos: Array<{
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl?: string;
}>) {
  return videos.map(video => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Janet Duffy Real Estate',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
      },
    },
    creator: {
      '@type': 'Person',
      name: 'Dr. Janet Duffy',
    },
  }));
}

// Generate Service schema for real estate services
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Las Vegas Real Estate Services',
    description: 'Comprehensive real estate services including buying, selling, luxury properties, and investment properties in Las Vegas.',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description: 'Expert guidance for purchasing homes in Las Vegas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description: 'Professional home selling with market expertise',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Services',
            description: 'Specialized luxury property services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            description: 'Strategic investment property guidance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Valuation Services',
            description: 'Accurate property value assessments',
          },
        },
      ],
    },
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

// Generate HowTo schema for process pages
export function generateHowToSchema({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; url?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url ? `https://www.goodtoknowrealtor.com${step.url}` : undefined
    }))
  };
}

// Generate ItemList schema for hub pages
export function generateItemListSchema({
  name,
  description,
  items
}: {
  name: string;
  description: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `https://www.goodtoknowrealtor.com${item.url}`,
      description: item.description
    }))
  };
}

// Generate WebPage schema with breadcrumbs
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumbs
}: {
  name: string;
  description: string;
  url: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `https://www.goodtoknowrealtor.com${url}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `https://www.goodtoknowrealtor.com${crumb.url}`
      }))
    }
  };
}