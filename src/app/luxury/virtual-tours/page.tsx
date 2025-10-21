import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Luxury Virtual Tours Las Vegas | 360° Property Tours | Dr. Jan Duffy',
  description: 'Experience luxury properties in Las Vegas through immersive virtual tours. 360° property tours, interactive walkthroughs, and detailed property showcases with Dr. Jan Duffy.',
  keywords: 'luxury virtual tours Las Vegas, 360 property tours, virtual walkthroughs, interactive property tours, luxury home tours',
  openGraph: {
    title: 'Luxury Virtual Tours Las Vegas | 360° Property Tours | Dr. Jan Duffy',
    description: 'Experience luxury properties in Las Vegas through immersive virtual tours. 360° property tours, interactive walkthroughs, and detailed property showcases with Dr. Jan Duffy.',
    type: 'website',
  },
};

export default function LuxuryVirtualToursPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Luxury Virtual Tours in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Experience Las Vegas&apos; most exclusive properties through immersive 
              360° virtual tours and interactive walkthroughs from anywhere in the world.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Start Virtual Tour
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

      {/* Virtual Tour Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Virtual Property Tours?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Virtual tours revolutionize the property viewing experience, 
                offering convenience, accessibility, and detailed property insights.
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
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>360° Immersion</h3>
                <p className='text-gray-600'>
                  Experience every angle and detail of luxury properties with 
                  high-resolution 360° photography and interactive navigation.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Convenience</h3>
                <p className='text-gray-600'>
                  View properties from anywhere, anytime, without scheduling 
                  conflicts or travel requirements.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Detailed Analysis</h3>
                <p className='text-gray-600'>
                  Take your time to examine every detail, room layout, and 
                  property feature at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Virtual Tours */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Featured Virtual Tour Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Explore our collection of luxury properties available for 
                immersive virtual tours and interactive experiences.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Virtual Tour Types */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Types of Virtual Property Tours
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From 360° photography to interactive walkthroughs, discover 
                the various virtual tour technologies available for luxury properties.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='360° virtual tour'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>360° Photography</h3>
                  <p className='text-gray-600 mb-4'>
                    High-resolution panoramic views that allow you to look 
                    in every direction from key vantage points.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Experience 360° Tour →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Interactive walkthrough'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Interactive Walkthroughs</h3>
                  <p className='text-gray-600 mb-4'>
                    Navigate through properties room by room with clickable 
                    hotspots and detailed information points.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Start Interactive Tour →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Video property tour'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Video Tours</h3>
                  <p className='text-gray-600 mb-4'>
                    Cinematic video tours with professional narration and 
                    detailed property highlights.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Watch Video Tour →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Technology */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Advanced Virtual Tour Technology
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our virtual tours utilize cutting-edge technology to create 
                  immersive experiences that bring luxury properties to life, 
                  allowing you to explore every detail from the comfort of your home.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>High-Resolution Imaging</h3>
                      <p className='text-gray-600'>
                        Professional photography equipment captures every detail 
                        in stunning clarity and color accuracy.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Interactive Elements</h3>
                      <p className='text-gray-600'>
                        Clickable hotspots provide additional information about 
                        features, finishes, and property details.
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
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Mobile Optimization</h3>
                      <p className='text-gray-600'>
                        Seamless viewing experience across all devices including 
                        smartphones, tablets, and desktop computers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Virtual tour technology setup'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Virtual Reality</h4>
                  <p className='text-sm opacity-90'>Immersive property exploration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Process */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                How Virtual Tours Work
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our streamlined process makes it easy to experience luxury 
                properties through virtual tours and interactive experiences.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Tour Creation Process</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Professional photography and videography
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    High-resolution 360° image capture
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Interactive hotspot integration
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Quality assurance and optimization
                  </li>
                </ul>
              </div>

              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Viewing Experience</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Easy navigation and controls
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Detailed property information
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Multiple viewing modes
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Share and bookmark functionality
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
              Experience Luxury Properties Virtually
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Let Dr. Jan Duffy guide you through immersive virtual tours 
              of Las Vegas&apos; most exclusive luxury properties.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Virtual Tour
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
