import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Communities | Dr. Janet Duffy Group',
  description: 'Explore Las Vegas communities with Dr. Janet Duffy Group. Find your perfect neighborhood in Summerlin, Henderson, North Las Vegas, and more.',
  keywords: ['Las Vegas communities', 'Las Vegas neighborhoods', 'Summerlin', 'Henderson', 'North Las Vegas'],
  url: '/communities',
  image: '/images/las-vegas-communities-og.jpg',
});

export default function CommunitiesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Communities', url: '/communities' },
  ]);

  const communities = [
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      href: '/areas/las-vegas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The heart of the Las Vegas Valley with diverse neighborhoods and urban amenities.',
      avgPrice: '$450,000',
      propertiesCount: 1250,
      highlights: ['Downtown Entertainment', 'Arts District', 'Historic Neighborhoods']
    },
    {
      id: 'summerlin',
      name: 'Summerlin',
      href: '/areas/summerlin',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premier master-planned community with luxury homes and world-class amenities.',
      avgPrice: '$750,000',
      propertiesCount: 890,
      highlights: ['Red Rock Canyon Views', 'Top-Rated Schools', 'Golf Courses']
    },
    {
      id: 'henderson',
      name: 'Henderson',
      href: '/areas/henderson',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Family-friendly community with excellent schools and recreational facilities.',
      avgPrice: '$525,000',
      propertiesCount: 1100,
      highlights: ['Lake Mead Access', 'Family Amenities', 'Growing Tech Sector']
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      href: '/areas/north-las-vegas',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Growing community with new developments and affordable housing options.',
      avgPrice: '$350,000',
      propertiesCount: 750,
      highlights: ['New Construction', 'Affordable Options', 'Business Development']
    },
    {
      id: 'downtown',
      name: 'Downtown Las Vegas',
      href: '/areas/downtown',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Urban living in the city center with modern condos and historic charm.',
      avgPrice: '$400,000',
      propertiesCount: 450,
      highlights: ['Urban Lifestyle', 'Historic Buildings', 'Entertainment District']
    },
    {
      id: 'green-valley',
      name: 'Green Valley',
      href: '/areas/green-valley',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Established neighborhood in Henderson with mature trees and community amenities.',
      avgPrice: '$600,000',
      propertiesCount: 680,
      highlights: ['Mature Neighborhoods', 'Community Parks', 'Established Schools']
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
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 lg:py-20'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
                Las Vegas Communities
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                Discover the perfect Las Vegas neighborhood for your lifestyle. From luxury Summerlin to family-friendly Henderson.
              </p>
            </div>
          </div>
        </section>

        {/* Communities Grid */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Explore Our Communities
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {communities.map((community) => (
                  <Link
                    key={community.id}
                    href={community.href}
                    className='group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                  >
                    <div className='relative h-48'>
                      <Image
                        src={community.image}
                        alt={community.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300'></div>
                      <div className='absolute top-4 left-4'>
                        <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                          {community.propertiesCount} Properties
                        </span>
                      </div>
                    </div>
                    
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                        {community.name}
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        {community.description}
                      </p>
                      
                      <div className='mb-4'>
                        <div className='text-2xl font-bold text-blue-600 mb-2'>
                          {community.avgPrice}
                        </div>
                        <div className='text-sm text-gray-500'>
                          Average Home Price
                        </div>
                      </div>
                      
                      <div className='space-y-1'>
                        <div className='text-sm font-medium text-gray-900'>Highlights:</div>
                        {community.highlights.map((highlight, index) => (
                          <div key={index} className='text-sm text-gray-600'>
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Las Vegas Market Overview
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                The Las Vegas real estate market offers diverse opportunities for buyers and sellers across all price ranges and neighborhoods.
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>$525K</div>
                  <div className='text-gray-600'>Median Home Price</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>22 Days</div>
                  <div className='text-gray-600'>Average Days on Market</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>98%</div>
                  <div className='text-gray-600'>List to Sale Price Ratio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Find Your Perfect Community?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let Dr. Janet Duffy Group help you discover the Las Vegas neighborhood that&apos;s perfect for your lifestyle and budget.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Start Your Search
              </Link>
              <Link
                href='tel:702-222-1964'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
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
