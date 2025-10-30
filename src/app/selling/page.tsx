import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';
import { PageHero } from '@/components/ui/PageHero';
import { ConsultationCTA } from '@/components/ui/ConsultationCTA';
import { SEO_CONFIG } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: `${SEO_CONFIG.siteUrl}/selling` },
};

export default function SellingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Breadcrumbs */}
      <div className='bg-white border-b border-gray-200'>
        <div className='container py-4'>
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        title='Sell Your Luxury Las Vegas Home for Maximum Value'
        subtitle={'Discreet marketing, luxury staging expertise, and strategic negotiation to maximize your property&apos;s value in today&apos;s market. White-glove service from $127M+ sales expert.'}
        gradientFromClassName='from-amber-600'
        gradientToClassName='to-yellow-600'
      >
        <ConsultationCTA variant='primary' source='selling-page-hero' showPhone={false} className='bg-white text-amber-900 hover:bg-amber-50 border-2 border-white' />
        <Link
          href='/home-value'
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors duration-200'
        >
          Get Luxury Home Valuation
        </Link>
      </PageHero>

      {/* Home Value Widget */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Get Your Home&apos;s Current Value
              </h2>
              <p className='text-xl text-gray-600'>
                Find out what your Las Vegas home is worth in today&apos;s market
              </p>
            </div>
            <div className='card p-8'>
              <HomeValueWidget />
            </div>
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
              From market analysis to closing, I&apos;ll guide you through every step
              to maximize your home&apos;s value
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
                Comprehensive evaluation of your home&apos;s value and current market
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
                home&apos;s best features.
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

      {/* Assessment CTA Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <AssessmentCTA type="seller-readiness" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Tips For Sellers */}
            <div className='card p-8'>
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
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Home Value Report */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Analytics'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Home Value Report
              </h3>
              <p className='text-gray-600 mb-6'>
                Get a comprehensive analysis of your home&apos;s current market value
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
                className='btn btn-outline'
              >
                Get Your Report
 →
              </Link>
            </div>

            {/* Market Activity */}
            <div className='card p-8'>
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
                className='btn btn-outline'
              >
                View Market Data
 →
              </Link>
            </div>

            {/* Professional Photography */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>📸</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Professional Photography
              </h3>
              <p className='text-gray-600 mb-6'>
                High-quality photos and virtual tours that showcase your home&apos;s
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
                className='btn btn-outline'
              >
                Schedule Photography
 →
              </Link>
            </div>

            {/* Staging Services */}
            <div className='card p-8'>
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
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Marketing Strategy */}
            <div className='card p-8'>
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
                className='btn btn-outline'
              >
                Get Started
 →
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
              <p className='text-sm text-orange-600 mt-2'>Seller&apos;s market</p>
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
              See how I&apos;ve helped Las Vegas homeowners achieve outstanding
              results
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-lg'>★</span>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                &ldquo;Dr. Duffy sold our home in Summerlin for $25,000 above asking
                price in just 12 days. Her marketing strategy and staging advice
                were invaluable.&rdquo;
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
                    <span key={i} className='text-lg'>★</span>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                &ldquo;Professional, responsive, and results-driven. Dr. Duffy helped
                us navigate a complex sale with multiple offers and achieved the
                best possible outcome.&rdquo;
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
                    <span key={i} className='text-lg'>★</span>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 mb-6'>
                &ldquo;Dr. Duffy&apos;s market expertise and negotiation skills helped us
                sell our investment property for maximum profit. Highly
                recommend her services.&rdquo;
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

      {/* Luxury Marketing Services Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Luxury Marketing & Exclusive Services
              </h2>
              <p className='text-xl text-gray-700 font-medium'>
                Premium marketing strategies tailored for high-end properties in today&apos;s competitive market
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <div className='card p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200'>
                <div className='w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl mb-6'>
                  🔒
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Discreet Marketing</h3>
                <p className='text-gray-700 mb-4'>
                  Confidential listing strategies for high-profile properties. Private showings and targeted marketing to qualified luxury buyers.
                </p>
                <ul className='space-y-2 text-gray-600 mb-6'>
                  <li>• Private, invitation-only showings</li>
                  <li>• Confidential transaction handling</li>
                  <li>• Exclusive buyer network access</li>
                </ul>
              </div>
              <div className='card p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200'>
                <div className='w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl mb-6'>
                  💎
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Luxury Staging</h3>
                <p className='text-gray-700 mb-4'>
                  Professional staging with high-end furnishings to showcase your property&apos;s potential and maximize buyer appeal.
                </p>
                <ul className='space-y-2 text-gray-600 mb-6'>
                  <li>• Designer staging consultation</li>
                  <li>• Premium furniture placement</li>
                  <li>• Virtual staging options</li>
                </ul>
              </div>
            </div>
            <div className='text-center'>
              <ConsultationCTA variant='primary' source='selling-luxury-marketing' showPhone={true} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Maximize Your Home&apos;s Value with Luxury Marketing
          </h2>
          <p className='text-xl text-white/95 mb-8 max-w-3xl mx-auto font-medium'>
            Schedule a private consultation to discuss discreet marketing strategies, luxury staging, and strategic pricing to maximize your property&apos;s value in today&apos;s market.
          </p>
          <ConsultationCTA variant='white' source='selling-page-cta' />
        </div>
      </section>
    </div>
  );
}
