import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';

export const metadata: Metadata = {
  title: 'Sell My Luxury House Las Vegas | Luxury Home Sales | Dr. Jan Duffy',
  description: 'Sell your luxury house in Las Vegas with Dr. Jan Duffy, Top 1% Real Estate Agent. Premium marketing, exclusive networks, and maximum value for luxury properties.',
  keywords: 'sell luxury house Las Vegas, luxury home sales, luxury property marketing, high-end real estate sales',
  openGraph: {
    title: 'Sell My Luxury House Las Vegas | Luxury Home Sales | Dr. Jan Duffy',
    description: 'Sell your luxury house in Las Vegas with Dr. Jan Duffy, Top 1% Real Estate Agent. Premium marketing, exclusive networks, and maximum value for luxury properties.',
    type: 'website',
  },
};

export default function SellingLuxuryPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Sell Your Luxury House in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Maximize your luxury property&apos;s value with Dr. Jan Duffy&apos;s 
              exclusive marketing strategies and premium buyer network.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Get Luxury Home Valuation
              </Link>
              <Link
                href='/selling'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Selling Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Dr. Jan Duffy for Luxury Home Sales?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                As a Top 1% Las Vegas real estate agent, Dr. Jan Duffy provides 
                unparalleled expertise in luxury property marketing and sales.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Premium Marketing</h3>
                <p className='text-gray-600'>
                  Professional photography, virtual tours, and targeted 
                  marketing to high-net-worth buyers worldwide.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Exclusive Network</h3>
                <p className='text-gray-600'>
                  Access to qualified luxury buyers, investors, and 
                  international clients seeking Las Vegas properties.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Maximum Value</h3>
                <p className='text-gray-600'>
                  Strategic pricing and negotiation expertise to achieve 
                  the highest possible sale price for your luxury home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Value Widget */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Get Your Luxury Home&apos;s Current Market Value
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Discover what your luxury property is worth in today&apos;s market 
              with our advanced valuation tool and market analysis.
            </p>
            <HomeValueWidget />
          </div>
        </div>
      </section>

      {/* Luxury Marketing Strategy */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Comprehensive Luxury Marketing Strategy
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our multi-channel marketing approach ensures your luxury property 
                reaches the right buyers through the most effective channels.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Professional luxury home photography'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Professional Photography</h3>
                  <p className='text-gray-600 mb-4'>
                    High-end photography and videography showcasing your 
                    luxury home&apos;s finest features and unique character.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Portfolio →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Virtual tour technology'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Virtual Tours</h3>
                  <p className='text-gray-600 mb-4'>
                    360° virtual tours and interactive walkthroughs 
                    for remote luxury buyers worldwide.
                  </p>
                  <Link
                    href='/luxury/virtual-tours'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Experience Tours →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury property marketing materials'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Premium Materials</h3>
                  <p className='text-gray-600 mb-4'>
                    Luxury brochures, floor plans, and marketing 
                    materials designed for high-end clientele.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Samples →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Luxury Home Selling Process
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our streamlined luxury selling process ensures your property 
                  receives maximum exposure and achieves optimal results in 
                  Las Vegas&apos; competitive luxury market.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Market Analysis</h3>
                      <p className='text-gray-600'>
                        Comprehensive market analysis and competitive pricing strategy.
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
                        Professional staging and preparation to showcase your home&apos;s potential.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Marketing Launch</h3>
                      <p className='text-gray-600'>
                        Multi-channel marketing campaign targeting luxury buyers.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Negotiation & Closing</h3>
                      <p className='text-gray-600'>
                        Expert negotiation and seamless transaction management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury home for sale'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Luxury Listing</h4>
                  <p className='text-sm opacity-90'>Premium marketing and presentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Market Insights */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Las Vegas Luxury Market Insights
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Understanding the luxury market dynamics helps us position 
                your property for maximum success and optimal pricing.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Market Trends</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Strong demand for luxury properties
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Limited inventory in prime locations
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    International buyer interest
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Premium amenities driving value
                  </li>
                </ul>
              </div>

              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Buyer Preferences</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Privacy and security features
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Resort-style amenities
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Smart home technology
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Prime location and views
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
              Ready to Sell Your Luxury Home?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Let Dr. Jan Duffy help you achieve maximum value for your 
              luxury property with our proven marketing strategies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Consultation
              </Link>
              <Link
                href='/selling'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
