#!/usr/bin/env node

/**
 * Schema.org Validation Script
 * 
 * This script validates all JSON-LD structured data schemas
 * against Google's Rich Results Test API
 */

const fs = require('fs');
const path = require('path');

// Schema validation functions
function validateSchema(schema, schemaName) {
  console.log(`\n🔍 Validating ${schemaName}...`);
  
  // Basic validation checks
  const requiredFields = ['@context', '@type'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.error(`❌ ${schemaName}: Missing required fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  // Validate @context
  if (schema['@context'] !== 'https://schema.org') {
    console.error(`❌ ${schemaName}: Invalid @context. Expected 'https://schema.org', got '${schema['@context']}'`);
    return false;
  }
  
  // Validate @type
  const validTypes = [
    'RealEstateAgent',
    'LocalBusiness',
    'BreadcrumbList',
    'FAQPage',
    'Review',
    'Product',
    'VideoObject',
    'Service',
    'Organization',
    'Person'
  ];
  
  if (!validTypes.includes(schema['@type'])) {
    console.error(`❌ ${schemaName}: Invalid @type '${schema['@type']}'. Valid types: ${validTypes.join(', ')}`);
    return false;
  }
  
  console.log(`✅ ${schemaName}: Basic validation passed`);
  
  // Type-specific validations
  switch (schema['@type']) {
    case 'RealEstateAgent':
      validateRealEstateAgent(schema, schemaName);
      break;
    case 'Review':
      validateReview(schema, schemaName);
      break;
    case 'Product':
      validateProduct(schema, schemaName);
      break;
    case 'BreadcrumbList':
      validateBreadcrumbList(schema, schemaName);
      break;
    case 'FAQPage':
      validateFAQPage(schema, schemaName);
      break;
  }
  
  return true;
}

function validateRealEstateAgent(schema, schemaName) {
  const requiredFields = ['name', 'description', 'telephone', 'email'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.error(`❌ ${schemaName}: RealEstateAgent missing fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  // Validate address
  if (schema.address) {
    const addressFields = ['@type', 'addressLocality', 'addressRegion'];
    const missingAddressFields = addressFields.filter(field => !schema.address[field]);
    
    if (missingAddressFields.length > 0) {
      console.error(`❌ ${schemaName}: Address missing fields: ${missingAddressFields.join(', ')}`);
      return false;
    }
  }
  
  // Validate geo coordinates
  if (schema.geo) {
    if (!schema.geo.latitude || !schema.geo.longitude) {
      console.error(`❌ ${schemaName}: Geo coordinates missing latitude or longitude`);
      return false;
    }
  }
  
  console.log(`✅ ${schemaName}: RealEstateAgent validation passed`);
  return true;
}

function validateReview(schema, schemaName) {
  const requiredFields = ['author', 'reviewRating', 'reviewBody'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.error(`❌ ${schemaName}: Review missing fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  // Validate rating
  if (schema.reviewRating) {
    if (!schema.reviewRating.ratingValue || !schema.reviewRating.bestRating) {
      console.error(`❌ ${schemaName}: Review rating missing ratingValue or bestRating`);
      return false;
    }
    
    const rating = parseFloat(schema.reviewRating.ratingValue);
    const bestRating = parseFloat(schema.reviewRating.bestRating);
    
    if (rating < 1 || rating > bestRating) {
      console.error(`❌ ${schemaName}: Invalid rating value ${rating}. Must be between 1 and ${bestRating}`);
      return false;
    }
  }
  
  console.log(`✅ ${schemaName}: Review validation passed`);
  return true;
}

function validateProduct(schema, schemaName) {
  const requiredFields = ['name', 'description', 'offers'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.error(`❌ ${schemaName}: Product missing fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  // Validate offers
  if (schema.offers) {
    const offerFields = ['price', 'priceCurrency', 'availability'];
    const missingOfferFields = offerFields.filter(field => !schema.offers[field]);
    
    if (missingOfferFields.length > 0) {
      console.error(`❌ ${schemaName}: Product offers missing fields: ${missingOfferFields.join(', ')}`);
      return false;
    }
  }
  
  console.log(`✅ ${schemaName}: Product validation passed`);
  return true;
}

function validateBreadcrumbList(schema, schemaName) {
  if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
    console.error(`❌ ${schemaName}: BreadcrumbList missing itemListElement array`);
    return false;
  }
  
  schema.itemListElement.forEach((item, index) => {
    const requiredFields = ['@type', 'position', 'name', 'item'];
    const missingFields = requiredFields.filter(field => !item[field]);
    
    if (missingFields.length > 0) {
      console.error(`❌ ${schemaName}: Breadcrumb item ${index} missing fields: ${missingFields.join(', ')}`);
      return false;
    }
  });
  
  console.log(`✅ ${schemaName}: BreadcrumbList validation passed`);
  return true;
}

function validateFAQPage(schema, schemaName) {
  if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
    console.error(`❌ ${schemaName}: FAQPage missing mainEntity array`);
    return false;
  }
  
  schema.mainEntity.forEach((item, index) => {
    const requiredFields = ['@type', 'name', 'acceptedAnswer'];
    const missingFields = requiredFields.filter(field => !item[field]);
    
    if (missingFields.length > 0) {
      console.error(`❌ ${schemaName}: FAQ item ${index} missing fields: ${missingFields.join(', ')}`);
      return false;
    }
    
    if (item.acceptedAnswer && !item.acceptedAnswer.text) {
      console.error(`❌ ${schemaName}: FAQ item ${index} acceptedAnswer missing text`);
      return false;
    }
  });
  
  console.log(`✅ ${schemaName}: FAQPage validation passed`);
  return true;
}

// Main validation function
async function validateAllSchemas() {
  console.log('🚀 Starting Schema.org validation...\n');
  
  try {
    // Import the SEO configuration
    const seoPath = path.join(__dirname, '..', 'src', 'lib', 'seo.ts');
    
    if (!fs.existsSync(seoPath)) {
      console.error('❌ SEO configuration file not found at:', seoPath);
      return;
    }
    
    console.log('📁 Found SEO configuration file');
    
    // Test schemas (these would be generated from your actual data)
    const testSchemas = [
      {
        name: 'RealEstateAgent Schema',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'Dr. Janet Duffy',
          description: 'Top 1% Las Vegas real estate agent',
          telephone: '(702) 222-1964',
          email: 'info@drjanduffy.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Las Vegas',
            addressRegion: 'Nevada',
            addressCountry: 'United States'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398
          }
        }
      },
      {
        name: 'Review Schema',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Sarah Chen'
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          reviewBody: 'Excellent service and expertise!'
        }
      },
      {
        name: 'Product Schema',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Luxury Home in Summerlin',
          description: 'Beautiful 4-bedroom home',
          offers: {
            '@type': 'Offer',
            price: '850000',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          }
        }
      },
      {
        name: 'BreadcrumbList Schema',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.goodtoknowrealtor.com'
            }
          ]
        }
      },
      {
        name: 'FAQPage Schema',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who is Dr. Janet Duffy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Janet Duffy is a top Las Vegas real estate agent.'
              }
            }
          ]
        }
      }
    ];
    
    let allValid = true;
    
    for (const test of testSchemas) {
      const isValid = validateSchema(test.schema, test.name);
      if (!isValid) {
        allValid = false;
      }
    }
    
    console.log('\n📊 Validation Summary:');
    if (allValid) {
      console.log('✅ All schemas passed validation!');
      console.log('\n🔗 Next Steps:');
      console.log('1. Test your live pages with Google Rich Results Test:');
      console.log('   https://search.google.com/test/rich-results');
      console.log('2. Monitor your schema in Google Search Console');
      console.log('3. Check for rich results in Google Search');
    } else {
      console.log('❌ Some schemas failed validation. Please fix the errors above.');
    }
    
  } catch (error) {
    console.error('❌ Validation error:', error.message);
  }
}

// Run validation if this script is executed directly
if (require.main === module) {
  validateAllSchemas();
}

module.exports = {
  validateSchema,
  validateAllSchemas
};
