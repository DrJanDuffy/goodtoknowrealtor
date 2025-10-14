import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cash Offer Program | Dr. Janet Duffy Group',
  description: 'Get a competitive cash offer for your Las Vegas home. Skip the traditional selling process with our cash offer program.',
  keywords: ['cash offer', 'sell home fast', 'Las Vegas real estate', 'Dr. Janet Duffy'],
  url: '/cash-offer',
  image: '/images/cash-offer-og.jpg',
});

export default function CashOfferPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cash Offer', url: '/cash-offer' },
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
                Get a Cash Offer for Your Home
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                Skip the traditional selling process. Get a competitive cash offer for your Las Vegas home in as little as 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                Why Choose Our Cash Offer Program?
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Fast Closing</h3>
                  <p className='text-gray-600'>Close in as little as 7 days instead of waiting months for a traditional sale.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Repairs Needed</h3>
                  <p className='text-gray-600'>We buy homes in any condition. No need to fix, clean, or stage your property.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Competitive Pricing</h3>
                  <p className='text-gray-600'>Get a fair market value offer based on current Las Vegas market conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                How It Works
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                    1
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Submit Your Info</h3>
                  <p className='text-gray-600'>Fill out our simple form with your property details.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                    2
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Get Your Offer</h3>
                  <p className='text-gray-600'>Receive a competitive cash offer within 24 hours.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                    3
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Accept & Close</h3>
                  <p className='text-gray-600'>Accept the offer and close in as little as 7 days.</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                    4
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Get Paid</h3>
                  <p className='text-gray-600'>Receive your cash payment and move on with your life.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Get Your Cash Offer?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Get a competitive cash offer for your Las Vegas home today. No obligations, no fees.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Get My Cash Offer
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
