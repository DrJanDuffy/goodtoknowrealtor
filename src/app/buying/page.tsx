import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';
import { RealScoutSearch } from '@/components/PropertySearch/RealScoutSearch';

export default function BuyingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Breadcrumbs */}
      <div className='bg-white border-b border-gray-200'>
        <div className='container py-4'>
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 lg:py-20'>
        <div className='container'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              Buying Your Dream Home in Las Vegas
            </h1>
            <p className='text-xl lg:text-2xl text-amber-100 leading-relaxed'>
              Expert guidance from pre-approval to closing. Dr. Jan Duffy
              helps you navigate the Las Vegas real estate market with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Property Search Widget */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Search Las Vegas Properties
              </h2>
              <p className='text-xl text-gray-600'>
                Use our advanced search tool to find your perfect home
              </p>
            </div>
            <div className='bg-gray-50 rounded-2xl p-8'>
              <RealScoutSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process Section */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Your Home Buying Journey
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              From first-time buyers to seasoned investors, I&apos;ll guide you
              through every step of the home buying process
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Step 1 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                1
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Pre-Approval
              </h3>
              <p className='text-gray-600'>
                Get pre-approved for a mortgage to understand your budget and
                show sellers you&apos;re serious.
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                2
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Property Search
              </h3>
              <p className='text-gray-600'>
                I&apos;ll help you find homes that match your criteria, budget, and
                lifestyle needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                3
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Make an Offer
              </h3>
              <p className='text-gray-600'>
                Strategic negotiation to secure your dream home at the best
                possible price.
              </p>
            </div>

            {/* Step 4 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                4
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Close & Move In
              </h3>
              <p className='text-gray-600'>
                Final inspections, paperwork, and closing coordination for a
                smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment CTA Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <AssessmentCTA type="buyer-readiness" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Tips For Buyers */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>💡</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Tips For Buyers
              </h3>
              <p className='text-gray-600 mb-6'>
                Essential advice for first-time and experienced buyers to make
                informed decisions in the Las Vegas market.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Market timing strategies</li>
                <li>• Negotiation techniques</li>
                <li>• Home inspection tips</li>
                <li>• Financing options</li>
              </ul>
              <Link
                href='/buying/tips'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More →
              </Link>
            </div>

            {/* Finance Information */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Money'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Finance Information
              </h3>
              <p className='text-gray-600 mb-6'>
                Understanding your financing options and getting the best
                mortgage rates in Las Vegas.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Loan types and programs</li>
                <li>• Down payment assistance</li>
                <li>• Credit score optimization</li>
                <li>• First-time buyer programs</li>
              </ul>
              <Link
                href='/buying/finance'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More →
              </Link>
            </div>

            {/* Real Estate Updates */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
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
                Real Estate Updates
              </h3>
              <p className='text-gray-600 mb-6'>
                Stay informed with the latest Las Vegas market trends,
                statistics, and opportunities.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Monthly market reports</li>
                <li>• Neighborhood analysis</li>
                <li>• Price trend insights</li>
                <li>• Investment opportunities</li>
              </ul>
              <Link
                href='/buying/updates'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More →
              </Link>
            </div>

            {/* Planning Guide */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>📋</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Lifestyle & Planning Guide
              </h3>
              <p className='text-gray-600 mb-6'>
                Comprehensive guide to choosing the right neighborhood and
                lifestyle in Las Vegas.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Neighborhood profiles</li>
                <li>• School district information</li>
                <li>• Lifestyle amenities</li>
                <li>• Future development plans</li>
              </ul>
              <Link
                href='/buying/guide'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Learn More →
              </Link>
            </div>

            {/* Property Search */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>🔍</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Property Search
              </h3>
              <p className='text-gray-600 mb-6'>
                Access the latest Las Vegas listings with advanced search
                filters and market insights.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Advanced search filters</li>
                <li>• Price alerts and notifications</li>
                <li>• Virtual tours and photos</li>
                <li>• Market value estimates</li>
              </ul>
              <Link
                href='/listings/search'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Search Properties →
              </Link>
            </div>

            {/* First-Time Buyers */}
            <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Home'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                First-Time Buyers
              </h3>
              <p className='text-gray-600 mb-6'>
                Specialized guidance for first-time homebuyers with programs and
                resources designed for you.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• First-time buyer programs</li>
                <li>• Down payment assistance</li>
                <li>• Educational resources</li>
                <li>• Step-by-step guidance</li>
              </ul>
              <div className='space-y-2'>
                <Link
                  href='/buyer-guide'
                  className='block text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm'
                >
                  📖 Complete Buyer Guide →
                </Link>
                <Link
                  href='/first-time-buyer-challenges'
                  className='block text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm'
                >
                  ⚠️ Common Challenges & Solutions →
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Neighborhoods */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Popular Las Vegas Neighborhoods
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Discover the unique character and amenities of Las Vegas&apos;s most
              desirable neighborhoods
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Summerlin */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
                  alt='Summerlin neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Summerlin
                </h3>
                <p className='text-gray-600 mb-4'>
                  Master-planned community with luxury amenities
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $650K+
                  </span>
                  <Link
                    href='/listings/search?neighborhood=summerlin'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            </div>

            {/* Henderson */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
                  alt='Henderson neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Henderson
                </h3>
                <p className='text-gray-600 mb-4'>
                  Family-friendly with excellent schools
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $485K+
                  </span>
                  <Link
                    href='/listings/search?neighborhood=henderson'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            </div>

            {/* North Las Vegas */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
                  alt='North Las Vegas neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  North Las Vegas
                </h3>
                <p className='text-gray-600 mb-4'>
                  Growing area with new construction
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $320K+
                  </span>
                  <Link
                    href='/listings/search?neighborhood=north-las-vegas'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
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
            Ready to Find Your Dream Home?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Let Dr. Jan Duffy guide you through the home buying process with
            personalized service and expert market knowledge.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <Image
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                width={24}
                height={24}
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
