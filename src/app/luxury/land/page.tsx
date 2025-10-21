import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Luxury Land for Sale Las Vegas | Premium Land Lots | Dr. Jan Duffy',
  description: 'Discover luxury land for sale in Las Vegas. Premium lots, custom home sites, and investment land opportunities with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'luxury land Las Vegas, land for sale, premium lots, custom home sites, investment land, Las Vegas land',
  openGraph: {
    title: 'Luxury Land for Sale Las Vegas | Premium Land Lots | Dr. Jan Duffy',
    description: 'Discover luxury land for sale in Las Vegas. Premium lots, custom home sites, and investment land opportunities with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function LuxuryLandPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Luxury Land for Sale in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Build your dream custom home on premium land lots in Las Vegas&apos; 
              most prestigious communities and exclusive developments.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                View Available Land
              </Link>
              <Link
                href='/luxury'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Explore All Luxury Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Land Investment Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Invest in Las Vegas Luxury Land?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Las Vegas land offers exceptional investment potential with growing 
                population, limited supply, and prime locations for custom home development.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Appreciation Potential</h3>
                <p className='text-gray-600'>
                  Land values in Las Vegas have shown consistent appreciation as 
                  the city continues to grow and develop.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Custom Development</h3>
                <p className='text-gray-600'>
                  Build your dream home exactly as you envision it with complete 
                  control over design, layout, and features.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Tax Advantages</h3>
                <p className='text-gray-600'>
                  Nevada&apos;s tax-friendly environment with no state income tax 
                  provides significant advantages for land investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Land Properties */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Featured Luxury Land Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover our curated selection of premium land lots perfect for 
                custom home development in Las Vegas&apos; most desirable locations.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Popular Land Areas */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Las Vegas&apos; Most Sought-After Land Areas
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From master-planned communities to exclusive hillside locations, 
                explore the most desirable areas for land investment and development.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Summerlin land development'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Summerlin</h3>
                  <p className='text-gray-600 mb-4'>
                    Master-planned community with luxury land lots offering 
                    mountain views and premium amenities.
                  </p>
                  <Link
                    href='/areas/summerlin'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Explore Summerlin Land →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Henderson hillside land'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Henderson</h3>
                  <p className='text-gray-600 mb-4'>
                    Hillside land lots with panoramic valley views and 
                    proximity to Lake Las Vegas amenities.
                  </p>
                  <Link
                    href='/areas/henderson'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Explore Henderson Land →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='North Las Vegas development'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>North Las Vegas</h3>
                  <p className='text-gray-600 mb-4'>
                    Growing area with affordable land opportunities and 
                    excellent potential for future development.
                  </p>
                  <Link
                    href='/areas/north-las-vegas'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Explore North Las Vegas Land →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Land Development Process */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Your Land Development Journey
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  From land acquisition to custom home completion, Dr. Jan Duffy 
                  provides comprehensive guidance throughout your development process, 
                  ensuring your vision becomes reality.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Land Selection</h3>
                      <p className='text-gray-600'>
                        Expert guidance in selecting the perfect lot for your custom home vision.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Due Diligence</h3>
                      <p className='text-gray-600'>
                        Comprehensive analysis of zoning, utilities, and development requirements.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Design & Planning</h3>
                      <p className='text-gray-600'>
                        Connect you with top architects and builders for your custom home design.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Construction Support</h3>
                      <p className='text-gray-600'>
                        Ongoing support throughout the construction process to ensure quality and timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Custom home construction on luxury land'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Custom Development</h4>
                  <p className='text-sm opacity-90'>Build your dream home from the ground up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Considerations */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Key Considerations for Land Investment
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Understanding these factors will help you make informed decisions 
                about your land investment in Las Vegas.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Location Factors</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Proximity to amenities and services
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    School district quality and ratings
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Future development plans in the area
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Transportation and infrastructure access
                  </li>
                </ul>
              </div>

              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Development Factors</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Zoning regulations and restrictions
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Utility availability and connection costs
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Soil conditions and environmental factors
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    HOA requirements and community guidelines
                  </li>
                </ul>
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
              Start Your Land Investment Journey
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Let Dr. Jan Duffy help you find the perfect land lot for your 
              custom home or investment opportunity in Las Vegas.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Land Consultation
              </Link>
              <Link
                href='/luxury'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Explore All Luxury Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
