import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Off-Market Properties Las Vegas | Exclusive Listings | Dr. Jan Duffy',
  description: 'Access exclusive off-market properties in Las Vegas. Private listings, pre-market opportunities, and exclusive real estate deals with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'off-market properties Las Vegas, exclusive listings, private real estate, pre-market properties, exclusive deals',
  openGraph: {
    title: 'Off-Market Properties Las Vegas | Exclusive Listings | Dr. Jan Duffy',
    description: 'Access exclusive off-market properties in Las Vegas. Private listings, pre-market opportunities, and exclusive real estate deals with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function OffMarketPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Off-Market Properties in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Access exclusive off-market properties that never hit the public market. 
              Private listings available only to Dr. Jan Duffy&apos;s VIP clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Request Off-Market Access
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

      {/* Off-Market Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Off-Market Properties Offer Superior Value
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Off-market properties provide unique advantages including reduced competition, 
                better pricing, and access to properties that may never be publicly listed.
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
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Exclusive Access</h3>
                <p className='text-gray-600'>
                  Properties available only to our VIP client network, 
                  never exposed to public competition.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Better Pricing</h3>
                <p className='text-gray-600'>
                  Negotiate directly with motivated sellers before 
                  market exposure drives up prices.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Privacy Protection</h3>
                <p className='text-gray-600'>
                  Confidential transactions protect seller privacy 
                  and maintain property discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Off-Market Properties */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Featured Off-Market Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover exclusive properties available only to our VIP clients. 
                These listings are not available through any public channels.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Off-Market Process */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  How Off-Market Access Works
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our exclusive off-market program provides qualified clients 
                  with access to properties that are not publicly listed, 
                  ensuring privacy, discretion, and competitive advantage.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>VIP Client Qualification</h3>
                      <p className='text-gray-600'>
                        Complete our qualification process to join our exclusive client network.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Property Matching</h3>
                      <p className='text-gray-600'>
                        We match you with off-market properties that meet your specific criteria.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Private Viewing</h3>
                      <p className='text-gray-600'>
                        Schedule confidential property viewings with complete discretion.
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
                        Negotiate directly with sellers without public competition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Exclusive off-market property'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Exclusive Access</h4>
                  <p className='text-sm opacity-90'>Private property listings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-Market Types */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Types of Off-Market Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our off-market inventory includes various property types 
                and unique opportunities not available through traditional channels.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury estate off-market'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Luxury Estates</h3>
                  <p className='text-gray-600 mb-4'>
                    High-end estates requiring privacy and discretion 
                    in their sale process.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Request Access →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Investment properties off-market'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Investment Properties</h3>
                  <p className='text-gray-600 mb-4'>
                    Commercial and multi-family properties available 
                    to qualified investors only.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Request Access →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Distressed properties off-market'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Distressed Properties</h3>
                  <p className='text-gray-600 mb-4'>
                    Properties requiring quick sale or special 
                    handling due to unique circumstances.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Request Access →
                  </Link>
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
              Join Our Exclusive Off-Market Network
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Gain access to Las Vegas&apos; most exclusive off-market properties 
              available only to Dr. Jan Duffy&apos;s VIP clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Request VIP Access
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
