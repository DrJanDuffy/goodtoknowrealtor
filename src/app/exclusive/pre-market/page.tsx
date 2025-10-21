import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Pre-Market Listings Las Vegas | Coming Soon Properties | Dr. Jan Duffy',
  description: 'Access pre-market listings in Las Vegas. Properties coming to market soon, exclusive previews, and first-look opportunities with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'pre-market listings Las Vegas, coming soon properties, first-look real estate, exclusive previews',
  openGraph: {
    title: 'Pre-Market Listings Las Vegas | Coming Soon Properties | Dr. Jan Duffy',
    description: 'Access pre-market listings in Las Vegas. Properties coming to market soon, exclusive previews, and first-look opportunities with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function PreMarketPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Pre-Market Listings in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Get first access to properties coming to market. Be the first to see 
              and make offers on Las Vegas&apos; most desirable upcoming listings.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Join Pre-Market List
              </Link>
              <Link
                href='/exclusive'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Learn About Exclusive Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Market Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Pre-Market Access Gives You the Edge
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Pre-market listings provide significant advantages including first-look opportunities, 
                reduced competition, and the ability to secure properties before they hit the public market.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>First Look Advantage</h3>
                <p className='text-gray-600'>
                  Be the first to see and evaluate properties before 
                  they become available to the general public.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Competitive Advantage</h3>
                <p className='text-gray-600'>
                  Submit offers before properties hit the market, 
                  avoiding bidding wars and competition.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Better Terms</h3>
                <p className='text-gray-600'>
                  Negotiate favorable terms and conditions before 
                  market exposure creates seller leverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pre-Market Properties */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Coming Soon to Market
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Preview these exceptional properties before they officially 
                hit the Las Vegas real estate market.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Pre-Market Process */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  How Pre-Market Access Works
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our pre-market program provides qualified clients with early 
                  access to upcoming listings, giving you a significant advantage 
                  in Las Vegas&apos; competitive real estate market.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Early Notification</h3>
                      <p className='text-gray-600'>
                        Receive notifications about properties coming to market before public listing.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Private Preview</h3>
                      <p className='text-gray-600'>
                        Schedule private viewings before properties are officially listed.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Priority Offers</h3>
                      <p className='text-gray-600'>
                        Submit offers with priority consideration before market competition.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Exclusive Negotiation</h3>
                      <p className='text-gray-600'>
                        Negotiate terms directly with sellers before public market exposure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Pre-market property preview'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Coming Soon</h4>
                  <p className='text-sm opacity-90'>Exclusive pre-market preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-amber-600'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h2 className='text-4xl font-bold mb-6'>
              Get First Access to Coming Listings
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Join Dr. Jan Duffy&apos;s pre-market notification list and 
              be the first to know about Las Vegas&apos; most desirable upcoming properties.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Join Pre-Market List
              </Link>
              <Link
                href='/exclusive'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Learn About Exclusive Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
