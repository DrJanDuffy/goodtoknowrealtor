import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Showings Las Vegas | Exclusive Property Tours | Dr. Jan Duffy',
  description: 'Schedule private showings of Las Vegas luxury properties. Exclusive property tours, personalized viewing experiences, and VIP client services with Dr. Jan Duffy.',
  keywords: 'private showings Las Vegas, exclusive property tours, VIP real estate service, luxury property viewings',
  openGraph: {
    title: 'Private Showings Las Vegas | Exclusive Property Tours | Dr. Jan Duffy',
    description: 'Schedule private showings of Las Vegas luxury properties. Exclusive property tours, personalized viewing experiences, and VIP client services with Dr. Jan Duffy.',
    type: 'website',
  },
};

export default function PrivateShowingsPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Private Showings & Exclusive Tours
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Experience Las Vegas luxury properties through personalized, 
              private showings designed exclusively for VIP clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Schedule Private Showing
              </Link>
              <Link
                href='/exclusive'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Learn About VIP Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Private Showing Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Private Showings?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Private showings provide an intimate, focused experience that allows 
                you to thoroughly evaluate properties without distractions or time pressure.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Flexible Scheduling</h3>
                <p className='text-gray-600'>
                  Schedule showings at your convenience, including evenings 
                  and weekends to fit your busy lifestyle.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Personalized Attention</h3>
                <p className='text-gray-600'>
                  Dedicated one-on-one attention with detailed property 
                  analysis and market insights.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Privacy & Discretion</h3>
                <p className='text-gray-600'>
                  Confidential viewings that protect your privacy and 
                  maintain discretion throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Showing Process */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Private Showing Experience
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our private showing service provides a comprehensive, 
                  personalized experience designed to help you make informed 
                  decisions about Las Vegas luxury properties.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Pre-Viewing Consultation</h3>
                      <p className='text-gray-600'>
                        Discuss your criteria and preferences before scheduling viewings.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Property Preparation</h3>
                      <p className='text-gray-600'>
                        Ensure properties are properly prepared and staged for optimal viewing.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Detailed Tour</h3>
                      <p className='text-gray-600'>
                        Comprehensive property tour with detailed analysis and insights.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Follow-Up Analysis</h3>
                      <p className='text-gray-600'>
                        Post-viewing analysis and recommendations for next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Private property showing'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Private Tour</h4>
                  <p className='text-sm opacity-90'>Exclusive viewing experience</p>
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
              Schedule Your Private Showing
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Experience Las Vegas luxury properties through personalized, 
              private showings designed exclusively for VIP clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Private Showing
              </Link>
              <Link
                href='/exclusive'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Learn About VIP Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
