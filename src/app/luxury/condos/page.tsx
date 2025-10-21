import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Luxury Condos Las Vegas | High-Rise Condos | Dr. Jan Duffy',
  description: 'Discover luxury condos and high-rise condominiums in Las Vegas. Premium amenities, stunning views, and exclusive locations with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'luxury condos Las Vegas, high-rise condos, luxury condominiums, Las Vegas condos, premium condos, luxury high-rise',
  openGraph: {
    title: 'Luxury Condos Las Vegas | High-Rise Condos | Dr. Jan Duffy',
    description: 'Discover luxury condos and high-rise condominiums in Las Vegas. Premium amenities, stunning views, and exclusive locations with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function LuxuryCondosPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Luxury Condos & High-Rise Living in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Experience the pinnacle of urban luxury with our curated collection of 
              high-rise condos featuring world-class amenities and breathtaking views.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                View Available Condos
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

      {/* Luxury Condo Features */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Luxury Condo Living in Las Vegas?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Las Vegas luxury condos offer unparalleled convenience, security, 
                and amenities that redefine urban living standards.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Premium Amenities</h3>
                <p className='text-gray-600'>
                  State-of-the-art fitness centers, resort-style pools, concierge services, 
                  and private rooftop terraces with panoramic city views.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>24/7 Security</h3>
                <p className='text-gray-600'>
                  Advanced security systems, controlled access, and professional 
                  concierge services ensure your safety and privacy.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Prime Locations</h3>
                <p className='text-gray-600'>
                  Strategically located in the heart of Las Vegas with easy access 
                  to entertainment, dining, shopping, and business districts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Condo Properties */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Featured Luxury Condo Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover our handpicked selection of the finest condos and high-rise 
                residences in Las Vegas&apos; most prestigious locations.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Popular Condo Buildings */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Las Vegas&apos; Most Prestigious Condo Buildings
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From iconic Strip locations to exclusive residential towers, 
                explore the most sought-after addresses in Las Vegas.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury high-rise condo building'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>The Cosmopolitan</h3>
                  <p className='text-gray-600 mb-4'>
                    Iconic Strip location with resort-style amenities and 
                    breathtaking views of the Las Vegas skyline.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Available Units →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Modern luxury condo tower'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Turnberry Place</h3>
                  <p className='text-gray-600 mb-4'>
                    Ultra-luxury residential towers featuring private elevators 
                    and world-class concierge services.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Available Units →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Contemporary condo building'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>One Queensridge Place</h3>
                  <p className='text-gray-600 mb-4'>
                    Sophisticated high-rise living with panoramic mountain views 
                    and exclusive resort-style amenities.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Available Units →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condo Investment Benefits */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Why Invest in Las Vegas Luxury Condos?
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Las Vegas luxury condos offer exceptional investment potential 
                  with strong rental demand, appreciation potential, and tax benefits 
                  that make them attractive to both investors and primary residents.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Strong Rental Market</h3>
                      <p className='text-gray-600'>
                        High demand for luxury rentals from tourists, business travelers, and executives.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Appreciation Potential</h3>
                      <p className='text-gray-600'>
                        Limited supply and growing demand drive consistent property value appreciation.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Tax Benefits</h3>
                      <p className='text-gray-600'>
                        Nevada&apos;s tax-friendly environment with no state income tax benefits investors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury condo interior with city views'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Penthouse Living</h4>
                  <p className='text-sm opacity-90'>Unparalleled views and luxury amenities</p>
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
              Find Your Perfect Luxury Condo
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Let Dr. Jan Duffy help you discover the luxury condo that matches 
              your lifestyle and investment goals in Las Vegas.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Private Showing
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
