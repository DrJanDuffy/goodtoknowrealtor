import Link from 'next/link';

export default function SellingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 lg:py-20'>
        <div className='container'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              Sell Your Las Vegas Home for Maximum Value
            </h1>
            <p className='text-xl lg:text-2xl text-amber-100 leading-relaxed'>
              Expert marketing, strategic pricing, and proven negotiation skills
              to help you achieve the best possible outcome in today's market.
            </p>
          </div>
        </div>
      </section>

      {/* Selling Process Section */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Your Home Selling Process
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              From market analysis to closing, I'll guide you through every step
              to maximize your home's value
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Step 1 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                1
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Market Analysis
              </h3>
              <p className='text-gray-600'>
                Comprehensive evaluation of your home's value and current market
                conditions.
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                2
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Preparation & Staging
              </h3>
              <p className='text-gray-600'>
                Strategic improvements and professional staging to showcase your
                home's best features.
              </p>
            </div>

            {/* Step 3 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                3
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Marketing & Showings
              </h3>
              <p className='text-gray-600'>
                Professional photography, marketing campaigns, and coordinated
                showings.
              </p>
            </div>

            {/* Step 4 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                4
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Negotiation & Closing
              </h3>
              <p className='text-gray-600'>
                Expert negotiation to secure the best terms and smooth closing
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Tips For Sellers */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>💡</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Tips For Sellers
              </h3>
              <p className='text-gray-600 mb-6'>
                Proven strategies and insider tips to help you sell your home
                quickly and for top dollar.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Pricing strategies</li>
                <li>• Home preparation tips</li>
                <li>• Staging techniques</li>
                <li>• Market timing advice</li>
              </ul>
              <Link
                href='/selling/tips'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            {/* Home Value Report */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <img
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Analytics'
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Home Value Report
              </h3>
              <p className='text-gray-600 mb-6'>
                Get a comprehensive analysis of your home's current market value
                and selling potential.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Comparative market analysis</li>
                <li>• Recent sales data</li>
                <li>• Market trends and forecasts</li>
                <li>• Improvement recommendations</li>
              </ul>
              <Link
                href='/selling/valuation'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Get Your Report
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            {/* Market Activity */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>📈</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Market Activity
              </h3>
              <p className='text-gray-600 mb-6'>
                Stay informed with the latest Las Vegas real estate market
                trends and activity in your area.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Monthly market reports</li>
                <li>• Neighborhood statistics</li>
                <li>• Days on market trends</li>
                <li>• Price per square foot</li>
              </ul>
              <Link
                href='/selling/market'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                View Market Data
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            {/* Professional Photography */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>📸</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Professional Photography
              </h3>
              <p className='text-gray-600 mb-6'>
                High-quality photos and virtual tours that showcase your home's
                best features.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Professional photography</li>
                <li>• Virtual tours and walkthroughs</li>
                <li>• Drone photography</li>
                <li>• Marketing materials</li>
              </ul>
              <Link
                href='/contact'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Schedule Photography
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            {/* Staging Services */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>🏡</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Staging Services
              </h3>
              <p className='text-gray-600 mb-6'>
                Professional staging to help buyers envision themselves living
                in your home.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Home staging consultation</li>
                <li>• Furniture rental coordination</li>
                <li>• Decluttering services</li>
                <li>• Curb appeal enhancement</li>
              </ul>
              <Link
                href='/contact'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            {/* Marketing Strategy */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>📢</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Marketing Strategy
              </h3>
              <p className='text-gray-600 mb-6'>
                Comprehensive marketing campaigns to reach the maximum number of
                qualified buyers.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Multi-channel marketing</li>
                <li>• Social media promotion</li>
                <li>• Open house coordination</li>
                <li>• Agent network promotion</li>
              </ul>
              <Link
                href='/contact'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Get Started
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Las Vegas Market Statistics
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Current market conditions and trends that affect your home selling
              strategy
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center bg-gray-50 rounded-2xl p-8'>
              <div className='text-3xl font-bold text-amber-600 mb-2'>
                $450K
              </div>
              <p className='text-gray-600'>Median Home Price</p>
              <p className='text-sm text-green-600 mt-2'>
                +3.2% from last year
              </p>
            </div>

            <div className='text-center bg-gray-50 rounded-2xl p-8'>
              <div className='text-3xl font-bold text-amber-600 mb-2'>28</div>
              <p className='text-gray-600'>Days on Market</p>
              <p className='text-sm text-green-600 mt-2'>
                -5 days from last year
              </p>
            </div>

            <div className='text-center bg-gray-50 rounded-2xl p-8'>
              <div className='text-3xl font-bold text-amber-600 mb-2'>2.1</div>
              <p className='text-gray-600'>Months Supply</p>
              <p className='text-sm text-orange-600 mt-2'>Seller's market</p>
            </div>

            <div className='text-center bg-gray-50 rounded-2xl p-8'>
              <div className='text-3xl font-bold text-amber-600 mb-2'>
                98.5%
              </div>
              <p className='text-gray-600'>List to Sale Ratio</p>
              <p className='text-sm text-green-600 mt-2'>Strong market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className='py-20 bg-gradient-to-br from-amber-50 to-yellow-50'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Recent Sales Success Stories
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              See how I've helped Las Vegas homeowners achieve outstanding
              results
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                "Dr. Duffy sold our home in Summerlin for $25,000 above asking
                price in just 12 days. Her marketing strategy and staging advice
                were invaluable."
              </p>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4'>
                  <span className='text-amber-600 font-bold'>JL</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>
                    Jennifer & Luis Rodriguez
                  </h4>
                  <p className='text-gray-600 text-sm'>Summerlin Homeowners</p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                "Professional, responsive, and results-driven. Dr. Duffy helped
                us navigate a complex sale with multiple offers and achieved the
                best possible outcome."
              </p>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4'>
                  <span className='text-amber-600 font-bold'>MW</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>
                    Michael & Wendy Chen
                  </h4>
                  <p className='text-gray-600 text-sm'>Henderson Homeowners</p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                "Dr. Duffy's market expertise and negotiation skills helped us
                sell our investment property for maximum profit. Highly
                recommend her services."
              </p>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4'>
                  <span className='text-amber-600 font-bold'>DK</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>David Kim</h4>
                  <p className='text-gray-600 text-sm'>Real Estate Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Ready to Sell Your Home?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Get a free home valuation and discover how much your Las Vegas home
            is worth in today's market.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <img
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <Link
              href='/selling/valuation'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
