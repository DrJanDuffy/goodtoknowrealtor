# Schema.org Structured Data Implementation

This document outlines the comprehensive Schema.org structured data implementation for Dr. Janet Duffy's Las Vegas real estate website.

## 🎯 Overview

The website implements multiple Schema.org types to enhance search engine understanding and enable rich results in Google Search.

## 📋 Implemented Schema Types

### 1. RealEstateAgent Schema
**Location**: `src/lib/seo.ts` - `generateRealEstateAgentSchema()`
**Used on**: All pages (via root layout)

**Features**:
- Complete agent information (name, contact, credentials)
- Geographic service areas (Las Vegas, Summerlin, Henderson, etc.)
- Professional credentials and certifications
- Awards and achievements (Top 1%, Circle of Excellence)
- Aggregate ratings and reviews
- Service types and specializations

**Key Properties**:
```json
{
  "@type": "RealEstateAgent",
  "name": "Dr. Janet Duffy",
  "alternateName": "Las Vegas Real Estate Expert",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "REALTOR® License"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "certification",
      "name": "Luxury Property Specialist (LPS)"
    }
  ],
  "award": [
    "Top 1% of Las Vegas Realtors (2023, 2024)",
    "Berkshire Hathaway Circle of Excellence",
    "5-Star Client Rating Average"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "150"
  }
}
```

### 2. LocalBusiness Schema
**Location**: `src/lib/seo.ts` - `generateLocalBusinessSchema()`
**Used on**: All pages (via root layout)

**Features**:
- Berkshire Hathaway HomeServices office information
- Service area coverage
- Business hours and contact information
- Employee information (Dr. Janet Duffy)
- Service catalog with detailed offerings

**Key Properties**:
```json
{
  "@type": "RealEstateAgent",
  "name": "Berkshire Hathaway HomeServices Premier Properties",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Buying Services"
        }
      }
    ]
  }
}
```

### 3. Review Schema
**Location**: `src/lib/seo.ts` - `generateReviewSchema()`
**Used on**: Homepage (testimonials section)

**Features**:
- Client testimonials with 5-star ratings
- Author information and location
- Review content and publication dates
- Properly linked to RealEstateAgent being reviewed

**Key Properties**:
```json
{
  "@type": "Review",
  "itemReviewed": {
    "@type": "RealEstateAgent",
    "name": "Dr. Janet Duffy"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah & Michael Chen"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "Dr. Duffy's expertise and attention to detail..."
}
```

### 4. Product Schema (Property Listings)
**Location**: `src/lib/seo.ts` - `generatePropertySchema()`
**Used on**: Listings page

**Features**:
- Property details (bedrooms, bathrooms, square footage)
- Pricing and availability information
- Property images and descriptions
- MLS numbers and property types
- Geographic location data

**Key Properties**:
```json
{
  "@type": "Product",
  "name": "Luxury Home in Summerlin",
  "offers": {
    "@type": "Offer",
    "price": "850000",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "RealEstateAgent",
      "name": "Dr. Janet Duffy"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Bedrooms",
      "value": "4"
    }
  ]
}
```

### 5. BreadcrumbList Schema
**Location**: `src/lib/seo.ts` - `generateBreadcrumbSchema()`
**Used on**: All pages

**Features**:
- Hierarchical navigation structure
- Proper position ordering
- Full URLs for each breadcrumb level

**Key Properties**:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.goodtoknowrealtor.com"
    }
  ]
}
```

### 6. FAQPage Schema
**Location**: `src/lib/seo.ts` - `generateFAQSchema()`
**Used on**: Homepage

**Features**:
- Common real estate questions and answers
- Properly structured Q&A format
- SEO-friendly content for featured snippets

**Key Properties**:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Dr. Janet Duffy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Janet Duffy is a Top 1% Las Vegas real estate agent..."
      }
    }
  ]
}
```

### 7. Service Schema
**Location**: `src/lib/seo.ts` - `generateServiceSchema()`
**Used on**: Homepage

**Features**:
- Comprehensive service offerings
- Geographic service areas
- Service provider information
- Detailed service catalog

### 8. VideoObject Schema
**Location**: `src/lib/seo.ts` - `generateVideoSchema()`
**Used on**: (Ready for implementation when videos are added)

**Features**:
- Video metadata (duration, upload date, thumbnail)
- Content and embed URLs
- Publisher and creator information

## 🚀 Implementation Details

### File Structure
```
src/lib/seo.ts                    # Main schema configuration
src/app/layout.tsx               # Global schemas (RealEstateAgent, LocalBusiness)
src/app/page.tsx                 # Homepage schemas (Reviews, FAQ, Services)
src/app/listings/page.tsx        # Property listings schemas
scripts/validate-schema.js       # Schema validation script
```

### Usage Examples

#### Adding Schema to a New Page
```typescript
import { generateBreadcrumbSchema } from '@/lib/seo';

export default function MyPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'My Page', url: '/my-page' },
  ]);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      {/* Page content */}
    </>
  );
}
```

#### Adding Review Schema
```typescript
import { generateReviewSchema } from '@/lib/seo';

const reviews = generateReviewSchema([
  {
    author: 'Client Name',
    rating: 5,
    reviewBody: 'Excellent service!',
    datePublished: '2024-01-15',
    location: 'Las Vegas, NV',
  }
]);

// Render reviews as JSON-LD scripts
{reviews.map((review, index) => (
  <script
    key={index}
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(review),
    }}
  />
))}
```

## 🔍 Validation

### Google Rich Results Test
Test your schemas with Google's official tool:
1. Visit: https://search.google.com/test/rich-results
2. Enter your page URL or paste HTML code
3. Check for any errors or warnings
4. Verify all schema types are recognized

### Validation Script
Run the included validation script:
```bash
node scripts/validate-schema.js
```

This script validates:
- Required fields for each schema type
- Data format and structure
- Type-specific validations
- Cross-references between schemas

## 📊 SEO Benefits

### Rich Results Enabled
- **Agent Information**: Contact details, credentials, service areas
- **Reviews**: Star ratings and review snippets in search results
- **Breadcrumbs**: Navigation breadcrumbs in search results
- **FAQ**: Featured snippets for common questions
- **Products**: Property listings with images, prices, and details

### Search Console Integration
- Monitor schema errors and warnings
- Track rich result impressions and clicks
- Identify opportunities for schema enhancement

### Local SEO Enhancement
- Geographic targeting for Las Vegas area
- Service area coverage for all major neighborhoods
- Local business information for Berkshire Hathaway office

## 🛠️ Maintenance

### Regular Updates
1. **Monthly**: Review and update property listings schema
2. **Quarterly**: Add new testimonials and reviews
3. **Annually**: Update credentials, awards, and certifications

### Schema Evolution
- Monitor Schema.org updates and new types
- Implement new relevant schema types as they become available
- Optimize existing schemas based on search performance

### Performance Monitoring
- Track rich result performance in Search Console
- Monitor schema validation errors
- Analyze click-through rates from rich results

## 🔧 Troubleshooting

### Common Issues
1. **Missing Required Fields**: Ensure all required properties are included
2. **Invalid Data Types**: Use correct data formats (strings, numbers, URLs)
3. **Broken References**: Verify all URLs and IDs are valid
4. **Duplicate Content**: Avoid duplicate schema on the same page

### Debug Tools
- Google Rich Results Test
- Schema.org Validator
- Search Console Schema Reports
- Custom validation script

## 📈 Future Enhancements

### Planned Additions
- **Event Schema**: For open houses and real estate events
- **Organization Schema**: For Berkshire Hathaway corporate information
- **Article Schema**: For blog posts and market reports
- **WebSite Schema**: For site-wide search functionality

### Advanced Features
- **Dynamic Schema**: Generate schema from CMS data
- **Multi-language Support**: Implement hreflang and localized schemas
- **Real-time Updates**: Sync schema with live listing data
- **Analytics Integration**: Track schema performance metrics

## 📞 Support

For questions about schema implementation:
1. Check Google's Schema.org documentation
2. Use the validation script for debugging
3. Test with Google Rich Results Test
4. Monitor Search Console for errors

---

*This implementation ensures maximum search engine visibility and rich result eligibility for Dr. Janet Duffy's Las Vegas real estate website.*
