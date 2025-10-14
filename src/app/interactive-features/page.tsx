'use client';

import { PropertySearchFilters } from '@/components/PropertySearch/PropertySearchFilters';
import { PropertyComparison, usePropertyComparison } from '@/components/PropertyComparison/PropertyComparison';
import { MortgageCalculator } from '@/components/MortgageCalculator/MortgageCalculator';
import { PropertyAlerts } from '@/components/PropertyAlerts/PropertyAlerts';
import { NeighborhoodMap } from '@/components/InteractiveMap/NeighborhoodMap';
import { VirtualTourGallery } from '@/components/VirtualTours/VirtualTour';
import { MarketVisualizations } from '@/components/MarketData/MarketVisualizations';
import { EnhancedPropertyCard } from '@/components/PropertyCards/EnhancedPropertyCard';

// Sample property data
const sampleProperties = [
  {
    id: '1',
    title: 'Luxury Home in Summerlin',
    price: 850000,
    address: '123 Summerlin Pkwy, Las Vegas, NV 89134',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    lotSize: '0.25 acres',
    yearBuilt: 2018,
    propertyType: 'Single Family',
    features: ['Pool', 'Garage', 'Fireplace', 'Hardwood Floors', 'Updated Kitchen'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Beautiful luxury home in prestigious Summerlin community with stunning mountain views and premium amenities.',
    mlsNumber: 'MLS123456',
    status: 'For Sale' as const
  },
  {
    id: '2',
    title: 'Modern Condo Downtown',
    price: 425000,
    address: '456 Fremont St, Las Vegas, NV 89101',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    lotSize: 'N/A',
    yearBuilt: 2020,
    propertyType: 'Condo',
    features: ['Modern Kitchen', 'City Views', 'Concierge', 'Gym', 'Rooftop Pool'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Contemporary downtown condo with modern finishes and urban lifestyle amenities.',
    mlsNumber: 'MLS789012',
    status: 'For Sale' as const
  },
  {
    id: '3',
    title: 'Family Home in Henderson',
    price: 625000,
    address: '789 Green Valley Pkwy, Henderson, NV 89014',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    lotSize: '0.20 acres',
    yearBuilt: 2015,
    propertyType: 'Single Family',
    features: ['Master Suite', 'Garden', 'Garage', 'Updated Bathrooms', 'Open Floor Plan'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Perfect family home in Henderson with excellent schools and community amenities nearby.',
    mlsNumber: 'MLS345678',
    status: 'For Sale' as const
  }
];

// Sample virtual tours
const sampleVirtualTours = [
  {
    id: '1',
    propertyId: '1',
    title: 'Summerlin Home - 360° Tour',
    type: '360' as const,
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#',
    duration: 180,
    rooms: ['Living Room', 'Kitchen', 'Master Bedroom', 'Bathroom', 'Backyard'],
    description: 'Take a 360° virtual tour of this beautiful Summerlin home',
    isInteractive: true
  },
  {
    id: '2',
    propertyId: '1',
    title: 'Summerlin Home - Video Tour',
    type: 'video' as const,
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#',
    duration: 240,
    rooms: ['All Rooms'],
    description: 'Professional video tour showcasing all features',
    isInteractive: false
  }
];

export default function InteractiveFeaturesPage() {
  const comparison = usePropertyComparison();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Interactive Real Estate Features
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Experience the future of real estate with our advanced interactive tools and features
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Property Search with Filters */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Property Search</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect property with our comprehensive search filters and real-time filtering capabilities
            </p>
          </div>
          <PropertySearchFilters 
            onFiltersChange={() => {
              // Handle filter changes
            }}
          />
        </section>

        {/* Property Cards with Enhanced Features */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our curated selection with interactive features including virtual tours, comparison tools, and quick actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleProperties.map(property => (
              <EnhancedPropertyCard
                key={property.id}
                property={property}
                onCompare={comparison.addToComparison}
                showComparison={true}
                showVirtualTour={true}
              />
            ))}
          </div>

          {/* Comparison Button */}
          {comparison.hasProperties && (
            <div className="text-center">
              <button
                onClick={comparison.openComparison}
                className="btn btn-primary"
              >
                Compare Properties ({comparison.comparisonProperties.length})
              </button>
            </div>
          )}
        </section>

        {/* Mortgage Calculator */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mortgage Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your monthly payments and understand your financing options
            </p>
          </div>
          <MortgageCalculator initialPrice={500000} />
        </section>

        {/* Interactive Map */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhood Explorer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore properties and local amenities with our interactive neighborhood map
            </p>
          </div>
          <NeighborhoodMap />
        </section>

        {/* Market Data Visualizations */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with real-time market data and trends
            </p>
          </div>
          <MarketVisualizations area="Las Vegas Valley" />
        </section>

        {/* Virtual Tours */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Virtual Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience properties from anywhere with our immersive virtual tour technology
            </p>
          </div>
          <VirtualTourGallery 
            tours={sampleVirtualTours} 
            propertyTitle="Luxury Home in Summerlin"
          />
        </section>

        {/* Property Alerts */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Never miss a property that matches your criteria with our smart alert system
            </p>
          </div>
          <div className="flex justify-center">
            <PropertyAlerts />
          </div>
        </section>

        {/* Features Summary */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interactive Features Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Search</h3>
              <p className="text-gray-600 text-sm">
                Real-time filtering with comprehensive criteria and instant results
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Comparison</h3>
              <p className="text-gray-600 text-sm">
                Side-by-side comparison of up to 4 properties with detailed analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Tours</h3>
              <p className="text-gray-600 text-sm">
                360° tours, video walkthroughs, and interactive property exploration
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mortgage Tools</h3>
              <p className="text-gray-600 text-sm">
                Calculate payments, explore financing options, and get pre-approved
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Maps</h3>
              <p className="text-gray-600 text-sm">
                Explore neighborhoods, amenities, and property locations
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Data</h3>
              <p className="text-gray-600 text-sm">
                Real-time market trends, pricing analysis, and neighborhood insights
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Alerts</h3>
              <p className="text-gray-600 text-sm">
                Personalized property alerts based on your specific criteria
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
              <p className="text-gray-600 text-sm">
                Schedule showings, share properties, and connect with agents instantly
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Property Comparison Modal */}
      {comparison.isOpen && (
        <PropertyComparison
          properties={comparison.comparisonProperties}
          onClose={comparison.closeComparison}
        />
      )}
    </div>
  );
}
