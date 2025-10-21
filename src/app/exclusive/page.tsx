import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutSearch } from '@/components/PropertySearch/RealScoutSearch';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';

export const metadata: Metadata = {
  title: 'Exclusive Access | Off-Market Properties Las Vegas | Dr. Jan Duffy',
  description: 'Get exclusive access to off-market properties, pre-market listings, and VIP client services in Las Vegas with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'exclusive properties Las Vegas, off-market homes, pre-market listings, VIP real estate service, luxury properties, private showings',
  openGraph: {
    title: 'Exclusive Access | Off-Market Properties Las Vegas | Dr. Jan Duffy',
    description: 'Get exclusive access to off-market properties, pre-market listings, and VIP client services in Las Vegas with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function ExclusivePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Exclusive Access to Las Vegas&apos; Most Coveted Properties
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Discover off-market gems, pre-market opportunities, and VIP client services 
              that give you the competitive edge in Las Vegas&apos; competitive real estate market.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Request Exclusive Access
              </Link>
              <Link
                href='/about'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Our Exclusive Access Program?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                As a Top 1% Las Vegas real estate agent, Dr. Jan Duffy provides 
                unparalleled access to properties that never hit the public market.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Off-Market Properties</h3>
                <p className='text-gray-600'>
                  Access to exclusive listings that are never publicly advertised, 
                  giving you first pick of the most desirable properties.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Pre-Market Listings</h3>
                <p className='text-gray-600'>
                  Be the first to know about upcoming listings before they hit 
                  the MLS, giving you a significant competitive advantage.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>VIP Client Services</h3>
                <p className='text-gray-600'>
                  Personalized service with private showings, market insights, 
                  and dedicated support throughout your real estate journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Search Exclusive Las Vegas Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Use our advanced search tool to find properties that match your 
                exclusive criteria and preferences.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
              <RealScoutSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Access Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  The Advantage of Exclusive Access
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  In Las Vegas&apos; competitive real estate market, having exclusive access 
                  to off-market and pre-market properties can make the difference between 
                  finding your dream home and settling for what&apos;s available.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Reduced Competition</h3>
                      <p className='text-gray-600'>
                        Avoid bidding wars by accessing properties before they go public.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Better Pricing</h3>
                      <p className='text-gray-600'>
                        Negotiate directly with motivated sellers before market exposure.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Premium Properties</h3>
                      <p className='text-gray-600'>
                        Access luxury homes and unique properties rarely available publicly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Exclusive luxury home in Las Vegas'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Luxury Estate</h4>
                  <p className='text-sm opacity-90'>Exclusive off-market property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Value Widget Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Get Your Home&apos;s Current Market Value
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Whether you&apos;re considering selling or just curious about your home&apos;s worth, 
              get an instant valuation from our advanced market analysis tool.
            </p>
            <HomeValueWidget />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-amber-600'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h2 className='text-4xl font-bold mb-6'>
              Ready for Exclusive Access?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Join our exclusive client list and gain access to Las Vegas&apos; 
              most coveted properties before they hit the market.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Request Exclusive Access
              </Link>
              <Link
                href='/about'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Learn More About Dr. Duffy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
