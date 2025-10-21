import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team | Las Vegas Real Estate Professionals | Dr. Jan Duffy',
  description: 'Meet Dr. Jan Duffy\'s professional real estate team in Las Vegas. Experienced agents, support staff, and industry experts dedicated to your success.',
  keywords: 'Las Vegas real estate team, Dr. Jan Duffy team, real estate professionals, Las Vegas agents',
  openGraph: {
    title: 'Our Team | Las Vegas Real Estate Professionals | Dr. Jan Duffy',
    description: 'Meet Dr. Jan Duffy\'s professional real estate team in Las Vegas. Experienced agents, support staff, and industry experts dedicated to your success.',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Our Professional Team
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Meet the experienced professionals who make Dr. Jan Duffy&apos;s 
              real estate practice the premier choice in Las Vegas.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Meet Our Team
              </Link>
              <Link
                href='/about'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Learn About Dr. Duffy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Experienced Real Estate Professionals
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our team combines decades of experience with cutting-edge technology 
                and personalized service to deliver exceptional results for our clients.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Licensed Agents</h3>
                <p className='text-gray-600'>
                  Fully licensed and certified real estate professionals 
                  with extensive Las Vegas market knowledge.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Support Staff</h3>
                <p className='text-gray-600'>
                  Dedicated support staff ensuring smooth transactions 
                  and exceptional client service throughout the process.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Industry Experts</h3>
                <p className='text-gray-600'>
                  Specialized expertise in luxury properties, investment 
                  real estate, and Las Vegas market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Meet Our Team Members
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our diverse team brings together expertise from various aspects 
                of real estate to provide comprehensive service to our clients.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Senior Real Estate Agent'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Senior Agent</h3>
                  <p className='text-gray-600 mb-4'>
                    Experienced agent specializing in luxury properties 
                    and high-end real estate transactions.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Contact Agent →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Transaction Coordinator'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Transaction Coordinator</h3>
                  <p className='text-gray-600 mb-4'>
                    Dedicated coordinator ensuring smooth transactions 
                    from contract to closing.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Contact Coordinator →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Marketing Specialist'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Marketing Specialist</h3>
                  <p className='text-gray-600 mb-4'>
                    Creative marketing professional specializing in 
                    luxury property promotion and branding.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Contact Specialist →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Our Team Values
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our team is united by shared values that guide everything we do, 
                  from client service to professional development and community involvement.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Client-First Approach</h3>
                      <p className='text-gray-600'>
                        Every decision we make is guided by what&apos;s best for our clients.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Integrity & Honesty</h3>
                      <p className='text-gray-600'>
                        We maintain the highest ethical standards in all our interactions.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Continuous Learning</h3>
                      <p className='text-gray-600'>
                        We stay current with market trends and industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Professional real estate team'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Professional Team</h4>
                  <p className='text-sm opacity-90'>Dedicated to your success</p>
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
              Work With Our Professional Team
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Experience the difference that comes from working with a dedicated, 
              experienced team of real estate professionals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Contact Our Team
              </Link>
              <Link
                href='/about'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Learn About Dr. Duffy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
