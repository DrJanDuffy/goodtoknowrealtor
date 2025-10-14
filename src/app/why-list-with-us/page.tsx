import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Why List With Us | Dr. Janet Duffy Group',
  description: 'Discover why Dr. Janet Duffy Group is the top choice for selling your Las Vegas home. Top 1% agent with proven results.',
  keywords: ['why list with us', 'Las Vegas real estate agent', 'Dr. Janet Duffy', 'sell home'],
  url: '/why-list-with-us',
  image: '/images/why-list-with-us-og.jpg',
});

export default function WhyListWithUsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Why List With Us', url: '/why-list-with-us' },
  ]);

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
                Why List With Us?
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                Dr. Janet Duffy Group delivers exceptional results for Las Vegas home sellers. Here&apos;s why we&apos;re the top choice.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Our Track Record Speaks for Itself
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>$127M+</div>
                  <div className='text-lg text-gray-600'>Total Sales Volume</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>22 Days</div>
                  <div className='text-lg text-gray-600'>Average Days to Sell</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>98%</div>
                  <div className='text-lg text-gray-600'>List Price to Sale Price</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>Top 1%</div>
                  <div className='text-lg text-gray-600'>Las Vegas Agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                What Sets Us Apart
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Market Expertise</h3>
                  <p className='text-gray-600'>15+ years of Las Vegas real estate experience with deep knowledge of local market trends and pricing strategies.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Fast Results</h3>
                  <p className='text-gray-600'>Our homes sell 40% faster than the market average with strategic marketing and pricing.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Maximum Value</h3>
                  <p className='text-gray-600'>We consistently achieve 98% of list price through expert pricing and negotiation strategies.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Personal Service</h3>
                  <p className='text-gray-600'>Dedicated support throughout the entire process with regular updates and communication.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Professional Marketing</h3>
                  <p className='text-gray-600'>High-quality photography, virtual tours, and comprehensive online marketing to reach maximum buyers.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>Proven Process</h3>
                  <p className='text-gray-600'>Streamlined selling process with clear timelines and expectations for a stress-free experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                What Our Clients Say
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <p className='text-gray-600 mb-4'>
                    &ldquo;Dr. Duffy sold our home in just 18 days for full asking price. Her marketing strategy and negotiation skills are unmatched.&rdquo;
                  </p>
                  <div className='font-semibold text-gray-900'>Sarah & Michael Chen</div>
                  <div className='text-sm text-gray-500'>Summerlin Home Sellers</div>
                </div>
                
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <p className='text-gray-600 mb-4'>
                    &ldquo;Professional, responsive, and results-driven. Dr. Duffy handled multiple offers and got us the best possible outcome.&rdquo;
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
              Ready to List Your Home?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Join hundreds of satisfied clients who chose Dr. Janet Duffy Group for their Las Vegas home sale.
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
