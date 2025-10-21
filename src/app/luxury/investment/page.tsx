import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutListings } from '@/components/Home/RealScoutListings';

export const metadata: Metadata = {
  title: 'Luxury Investment Properties Las Vegas | Premium Real Estate Investments | Dr. Jan Duffy',
  description: 'Discover luxury investment properties in Las Vegas. Premium rental properties, vacation homes, and high-yield real estate investments with Dr. Jan Duffy, Top 1% Real Estate Agent.',
  keywords: 'luxury investment properties Las Vegas, rental properties, vacation homes, real estate investment, high-yield properties',
  openGraph: {
    title: 'Luxury Investment Properties Las Vegas | Premium Real Estate Investments | Dr. Jan Duffy',
    description: 'Discover luxury investment properties in Las Vegas. Premium rental properties, vacation homes, and high-yield real estate investments with Dr. Jan Duffy, Top 1% Real Estate Agent.',
    type: 'website',
  },
};

export default function LuxuryInvestmentPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Luxury Investment Properties in Las Vegas
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Build wealth through strategic luxury real estate investments in Las Vegas&apos; 
              thriving market with exceptional rental yields and appreciation potential.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                View Investment Properties
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

      {/* Investment Benefits */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Why Invest in Las Vegas Luxury Real Estate?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Las Vegas offers unique advantages for luxury real estate investors 
                with strong tourism, business growth, and tax-friendly environment.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>High Rental Yields</h3>
                <p className='text-gray-600'>
                  Luxury properties in Las Vegas generate strong rental income 
                  from tourists, business travelers, and long-term tenants.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Appreciation Potential</h3>
                <p className='text-gray-600'>
                  Limited luxury inventory and growing demand drive consistent 
                  property value appreciation in prime Las Vegas locations.
                </p>
              </div>

              <div className='text-center p-6 bg-gray-50 rounded-lg'>
                <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Tax Advantages</h3>
                <p className='text-gray-600'>
                  Nevada&apos;s tax-friendly environment with no state income tax 
                  maximizes your investment returns and cash flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investment Properties */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Featured Luxury Investment Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover our curated selection of premium investment properties 
                with exceptional rental potential and appreciation opportunities.
              </p>
            </div>

            <RealScoutListings />
          </div>
        </div>
      </section>

      {/* Investment Property Types */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Types of Luxury Investment Properties
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From vacation rentals to luxury condos, explore diverse investment 
                opportunities that match your portfolio strategy and risk tolerance.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury vacation rental property'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Vacation Rentals</h3>
                  <p className='text-gray-600 mb-4'>
                    High-end vacation homes with premium amenities and 
                    strong short-term rental demand from tourists.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Vacation Rentals →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury condo investment'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Luxury Condos</h3>
                  <p className='text-gray-600 mb-4'>
                    Premium condos with resort-style amenities and 
                    consistent rental demand from business travelers.
                  </p>
                  <Link
                    href='/luxury/condos'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Luxury Condos →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury single-family rental'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Single-Family Homes</h3>
                  <p className='text-gray-600 mb-4'>
                    Luxury homes in prestigious communities with 
                    long-term rental potential and family appeal.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    View Single-Family Homes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                  Strategic Investment Approach
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Our comprehensive investment strategy focuses on identifying properties 
                  with strong fundamentals, growth potential, and optimal risk-return profiles 
                  in Las Vegas&apos; dynamic luxury real estate market.
                </p>
                
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>1</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Market Analysis</h3>
                      <p className='text-gray-600'>
                        Comprehensive analysis of market trends, rental rates, and growth potential.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>2</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Property Evaluation</h3>
                      <p className='text-gray-600'>
                        Detailed assessment of property condition, location, and investment potential.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>3</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Financial Modeling</h3>
                      <p className='text-gray-600'>
                        Projected cash flow, ROI, and appreciation analysis for informed decisions.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-4 mt-1'>
                      <span className='text-white text-sm font-bold'>4</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Portfolio Management</h3>
                      <p className='text-gray-600'>
                        Ongoing support for property management and portfolio optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury investment property portfolio'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='text-xl font-semibold mb-2'>Investment Portfolio</h4>
                  <p className='text-sm opacity-90'>Strategic luxury real estate investments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Metrics */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Key Investment Performance Metrics
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Understanding these metrics helps evaluate investment performance 
                and make data-driven decisions for your luxury real estate portfolio.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Financial Performance</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Cash-on-Cash Return
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Net Operating Income (NOI)
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Cap Rate Analysis
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Total Return on Investment
                  </li>
                </ul>
              </div>

              <div className='bg-gray-50 p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Market Indicators</h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Occupancy Rates
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Rental Rate Growth
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Property Appreciation
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-amber-600 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    Market Liquidity
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
              Build Your Luxury Investment Portfolio
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Let Dr. Jan Duffy help you identify and acquire luxury investment 
              properties that deliver exceptional returns in Las Vegas.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Schedule Investment Consultation
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
