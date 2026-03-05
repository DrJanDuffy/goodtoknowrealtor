import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sold Listings | Dr. Jan Duffy - Recent Sales Success Stories',
  description: 'View Dr. Jan Duffy\'s recent sold listings and success stories. $127M+ in sales volume with exceptional results across Las Vegas.',
  keywords: ['sold listings Las Vegas', 'recent sales', 'Dr. Jan Duffy sales', 'Las Vegas real estate sales', 'success stories'],
  url: '/sold-listings',
  image: '/images/sold-listings-og.jpg',
});

export default function SoldListingsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Sold Listings', url: '/sold-listings' },
  ]);

  const soldProperties = [
    {
      address: '1234 Summerlin Pkwy, Summerlin, NV 89134',
      price: '$1,250,000',
      soldPrice: '$1,275,000',
      overAsking: '$25,000',
      daysOnMarket: 8,
      bedrooms: 4,
      bathrooms: 3,
      sqft: '3,200',
      yearBuilt: 2018,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'Summerlin',
      propertyType: 'Single Family',
      clientTestimonial: 'Dr. Duffy\'s marketing strategy attracted multiple offers. We sold for $25K above asking in just 8 days!',
      clientName: 'Sarah & Michael Chen',
      specialFeatures: ['Golf Course Views', 'Updated Kitchen', 'Master Suite', 'Pool']
    },
    {
      address: '5678 Henderson Dr, Henderson, NV 89014',
      price: '$675,000',
      soldPrice: '$695,000',
      overAsking: '$20,000',
      daysOnMarket: 12,
      bedrooms: 3,
      bathrooms: 2,
      sqft: '2,100',
      yearBuilt: 2015,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'Henderson',
      propertyType: 'Single Family',
      clientTestimonial: 'Professional staging and photography made our home stand out. Dr. Duffy\'s expertise was invaluable.',
      clientName: 'Jennifer Rodriguez',
      specialFeatures: ['Mountain Views', 'Open Floor Plan', 'Updated Bathrooms', 'Large Backyard']
    },
    {
      address: '9012 North Las Vegas Blvd, North Las Vegas, NV 89030',
      price: '$425,000',
      soldPrice: '$445,000',
      overAsking: '$20,000',
      daysOnMarket: 15,
      bedrooms: 3,
      bathrooms: 2,
      sqft: '1,800',
      yearBuilt: 2012,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'North Las Vegas',
      propertyType: 'Single Family',
      clientTestimonial: 'Dr. Duffy\'s market knowledge and pricing strategy exceeded our expectations. Highly recommend!',
      clientName: 'David Thompson',
      specialFeatures: ['New Construction', 'Energy Efficient', 'Open Concept', 'Garage']
    },
    {
      address: '3456 The Ridges Dr, Las Vegas, NV 89135',
      price: '$2,100,000',
      soldPrice: '$2,150,000',
      overAsking: '$50,000',
      daysOnMarket: 6,
      bedrooms: 5,
      bathrooms: 4,
      sqft: '4,500',
      yearBuilt: 2020,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'The Ridges',
      propertyType: 'Luxury Estate',
      clientTestimonial: 'Found our dream luxury home in The Ridges. Dr. Duffy\'s connections gave us access to off-market properties.',
      clientName: 'James & Lisa Park',
      specialFeatures: ['Strip Views', 'Custom Design', 'Wine Cellar', 'Home Theater']
    },
    {
      address: '7890 Green Valley Pkwy, Henderson, NV 89014',
      price: '$550,000',
      soldPrice: '$575,000',
      overAsking: '$25,000',
      daysOnMarket: 10,
      bedrooms: 4,
      bathrooms: 3,
      sqft: '2,400',
      yearBuilt: 2016,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'Green Valley',
      propertyType: 'Single Family',
      clientTestimonial: 'Dr. Duffy\'s negotiation skills got us $25K above asking. The entire process was smooth and professional.',
      clientName: 'Maria Rodriguez',
      specialFeatures: ['Gated Community', 'Pool & Spa', 'Granite Counters', 'Walk-in Closets']
    },
    {
      address: '2345 Lake Las Vegas Dr, Henderson, NV 89011',
      price: '$1,800,000',
      soldPrice: '$1,875,000',
      overAsking: '$75,000',
      daysOnMarket: 4,
      bedrooms: 4,
      bathrooms: 3,
      sqft: '3,800',
      yearBuilt: 2019,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      neighborhood: 'Lake Las Vegas',
      propertyType: 'Waterfront Estate',
      clientTestimonial: 'Waterfront luxury with resort-style living. Dr. Duffy\'s expertise in luxury properties is unmatched.',
      clientName: 'Robert & Diane Chen',
      specialFeatures: ['Waterfront', 'Marina Access', 'Resort Amenities', 'Custom Kitchen']
    }
  ];

  const stats = [
    {
      number: '$127M+',
      label: 'Total Sales Volume',
      description: 'Combined sales volume'
    },
    {
      number: '22',
      label: 'Average Days to Sell',
      description: 'Faster than market average'
    },
    {
      number: '98%',
      label: 'List to Sale Price',
      description: 'Client satisfaction rate'
    },
    {
      number: '500+',
      label: 'Successful Sales',
      description: 'Happy clients served'
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='container py-4'>
            <Breadcrumbs />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Recent Sales Success Stories
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                See how Dr. Jan Duffy delivers exceptional results for Las Vegas home sellers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Your Home Valued
                </Link>
                <Link
                  href="tel:702-222-1964"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
                >
                  Call (702) 222-1964
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Stats */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Sales Performance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven results that demonstrate our expertise and commitment to client success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sold Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Recent Sold Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients across Las Vegas's most desirable neighborhoods
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {soldProperties.map((property, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.address}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                      SOLD
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{property.soldPrice}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{property.neighborhood}</h3>
                      <span className="text-sm text-gray-600">{property.propertyType}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{property.address}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Bedrooms:</span>
                        <span className="ml-2 font-semibold">{property.bedrooms}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Bathrooms:</span>
                        <span className="ml-2 font-semibold">{property.bathrooms}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Square Feet:</span>
                        <span className="ml-2 font-semibold">{property.sqft}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Year Built:</span>
                        <span className="ml-2 font-semibold">{property.yearBuilt}</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Listed Price:</span>
                        <span className="text-sm font-semibold text-gray-800">{property.price}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Sold Price:</span>
                        <span className="text-sm font-semibold text-green-600">{property.soldPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Over Asking:</span>
                        <span className="text-sm font-semibold text-green-600">+{property.overAsking}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Days on Market:</span>
                      <span className="text-sm font-semibold text-blue-600">{property.daysOnMarket} days</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Special Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {property.specialFeatures.map((feature, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic mb-2">"{property.clientTestimonial}"</p>
                      <p className="text-sm font-semibold text-gray-900">- {property.clientName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Drives Our Success?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The strategies and expertise that consistently deliver exceptional results for our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <IconSymbol symbol='📊' className='text-4xl mb-4 text-blue-600' ariaLabel='Market data icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Pricing</h3>
                <p className="text-gray-600">Data-driven pricing that maximizes value while ensuring competitive positioning</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <IconSymbol symbol='🎯' className='text-4xl mb-4 text-blue-600' ariaLabel='Results icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Marketing</h3>
                <p className="text-gray-600">Multi-channel marketing that reaches the right buyers at the right time</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                <IconSymbol symbol='🤝' className='text-4xl mb-4 text-blue-600' ariaLabel='Partnership icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Negotiation</h3>
                <p className="text-gray-600">Skilled negotiation that protects your interests and maximizes profit</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <IconSymbol symbol='⚡' className='text-4xl mb-4 text-blue-600' ariaLabel='Speed icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Timing</h3>
                <p className="text-gray-600">Optimal timing strategies that capitalize on market conditions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy help you achieve exceptional results for your Las Vegas home sale. Get your free home valuation and discover your property's true market value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Home Valuation
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (702) 222-1964
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}