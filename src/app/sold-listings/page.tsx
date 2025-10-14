import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sold Listings | Dr. Janet Duffy Group',
  description: 'View our recent sold listings and success stories. See how Dr. Janet Duffy Group delivers exceptional results for Las Vegas home sellers.',
  keywords: ['sold listings', 'Las Vegas real estate', 'Dr. Janet Duffy', 'home sales'],
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
      id: '1',
      address: '123 Summerlin Drive, Summerlin, NV',
      soldPrice: '$875,000',
      listPrice: '$850,000',
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-01-15',
      daysOnMarket: 18,
      agent: 'Dr. Janet Duffy'
    },
    {
      id: '2',
      address: '456 Henderson Blvd, Henderson, NV',
      soldPrice: '$445,000',
      listPrice: '$425,000',
      beds: 2,
      baths: 2,
      sqft: 1450,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-01-22',
      daysOnMarket: 12,
      agent: 'Sarah Johnson'
    },
    {
      id: '3',
      address: '789 North Vegas Way, North Las Vegas, NV',
      soldPrice: '$295,000',
      listPrice: '$285,000',
      beds: 3,
      baths: 2,
      sqft: 1850,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-02-05',
      daysOnMarket: 25,
      agent: 'Michael Chen'
    },
    {
      id: '4',
      address: '321 Downtown Ave, Las Vegas, NV',
      soldPrice: '$675,000',
      listPrice: '$650,000',
      beds: 3,
      baths: 2,
      sqft: 2100,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-02-12',
      daysOnMarket: 15,
      agent: 'Dr. Janet Duffy'
    },
    {
      id: '5',
      address: '654 Green Valley Rd, Henderson, NV',
      soldPrice: '$545,000',
      listPrice: '$525,000',
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-02-18',
      daysOnMarket: 22,
      agent: 'Lisa Rodriguez'
    },
    {
      id: '6',
      address: '987 Paradise Pkwy, Las Vegas, NV',
      soldPrice: '$385,000',
      listPrice: '$375,000',
      beds: 3,
      baths: 2,
      sqft: 1650,
      image: 'https://images.unsplash.com/photo-1600566753190-17f63baa73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldDate: '2024-02-25',
      daysOnMarket: 8,
      agent: 'Sarah Johnson'
    }
  ];

  const stats = {
    totalSold: 127,
    avgDaysOnMarket: 18,
    avgListToSaleRatio: 102.5,
    totalVolume: '$127M+'
  };

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
                SOLD LISTINGS
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                See our recent success stories and how we deliver exceptional results for Las Vegas home sellers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Our Sales Performance
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.totalSold}</div>
                  <div className='text-lg text-gray-600'>Properties Sold</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.avgDaysOnMarket}</div>
                  <div className='text-lg text-gray-600'>Avg Days on Market</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.avgListToSaleRatio}%</div>
                  <div className='text-lg text-gray-600'>List to Sale Price</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.totalVolume}</div>
                  <div className='text-lg text-gray-600'>Total Sales Volume</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Sales */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Recent Sales
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {soldProperties.map((property) => (
                  <div key={property.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <div className='relative h-48'>
                      <Image
                        src={property.image}
                        alt={property.address}
                        fill
                        className='object-cover'
                      />
                      <div className='absolute top-4 left-4'>
                        <span className='bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                          SOLD
                        </span>
                      </div>
                      <div className='absolute top-4 right-4'>
                        <span className='bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold'>
                          {property.daysOnMarket} days
                        </span>
                      </div>
                    </div>
                    
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        {property.soldPrice}
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        {property.address}
                      </p>
                      
                      <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                      
                      <div className='mb-4'>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-600'>List Price:</span>
                          <span className='line-through text-gray-500'>{property.listPrice}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-600'>Sold Price:</span>
                          <span className='font-semibold text-green-600'>{property.soldPrice}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-600'>Sold Date:</span>
                          <span>{new Date(property.soldDate).toLocaleDateString()}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-600'>Agent:</span>
                          <span className='font-semibold text-blue-600'>{property.agent}</span>
                        </div>
                      </div>
                      
                      <div className='text-center'>
                        <span className='text-sm text-gray-500'>
                          Sold for {((parseFloat(property.soldPrice.replace(/[$,]/g, '')) / parseFloat(property.listPrice.replace(/[$,]/g, '')) - 1) * 100).toFixed(1)}% above list price
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Success Stories
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Summerlin Luxury Sale
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    &ldquo;Dr. Duffy sold our Summerlin home in just 18 days for $25,000 above asking price. Her marketing strategy and negotiation skills are unmatched.&rdquo;
                  </p>
                  <div className='font-semibold text-gray-900'>Sarah & Michael Chen</div>
                  <div className='text-sm text-gray-500'>Summerlin Home Sellers</div>
                </div>
                
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Henderson Family Home
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    &ldquo;Professional, responsive, and results-driven. Dr. Duffy handled multiple offers and got us the best possible outcome for our family home.&rdquo;
                  </p>
                  <div className='font-semibold text-gray-900'>Jennifer Rodriguez</div>
                  <div className='text-sm text-gray-500'>Henderson Home Seller</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Join Our Success Stories?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let Dr. Janet Duffy Group help you achieve exceptional results for your Las Vegas home sale.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Get Your Home Value
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
