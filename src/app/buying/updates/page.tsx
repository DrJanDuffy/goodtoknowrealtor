import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Updates | Dr. Janet Duffy',
  description: 'Stay informed with the latest Las Vegas real estate market trends, statistics, and opportunities. Expert insights from Dr. Janet Duffy.',
  keywords: ['Las Vegas real estate market', 'Vegas home prices', 'Las Vegas market trends', 'real estate Las Vegas updates'],
};

export default function BuyingUpdatesPage() {
  const marketUpdates = [
    {
      id: '1',
      title: 'Las Vegas Real Estate Market Report: January 2025',
      excerpt: 'Latest sales data, price trends, and market insights for Las Vegas real estate.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-18',
      readTime: '6 min read',
      category: 'Market Analysis',
      featured: true
    },
    {
      id: '2',
      title: 'California Migration Impact on Las Vegas Home Prices',
      excerpt: 'How California transplants are affecting Las Vegas real estate prices and inventory.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-06',
      readTime: '7 min read',
      category: 'Market Trends'
    },
    {
      id: '3',
      title: 'Summerlin Luxury Market Update: Q4 2024',
      excerpt: 'Exclusive insights into Summerlin\'s luxury real estate market performance.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-02',
      readTime: '5 min read',
      category: 'Neighborhood Focus'
    },
    {
      id: '4',
      title: 'Interest Rate Trends and Buyer Impact',
      excerpt: 'How current mortgage rates are affecting Las Vegas homebuyers in 2025.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Finance'
    }
  ];

  const marketStats = [
    {
      label: 'Median Home Price',
      value: '$450,000',
      change: '+3.2%',
      changeType: 'positive',
      description: 'Year-over-year increase'
    },
    {
      label: 'Average Days on Market',
      value: '28 days',
      change: '-5 days',
      changeType: 'positive',
      description: 'Faster than last quarter'
    },
    {
      label: 'Inventory Level',
      value: '2.1 months',
      change: '-0.3 months',
      changeType: 'neutral',
      description: 'Low inventory continues'
    },
    {
      label: 'New Listings',
      value: '1,247',
      change: '+8%',
      changeType: 'positive',
      description: 'Month-over-month increase'
    }
  ];

  const neighborhoodUpdates = [
    {
      name: 'Summerlin',
      priceRange: '$650K - $2M+',
      trend: 'Stable',
      avgDaysOnMarket: 25,
      inventory: 'Low',
      highlight: 'Luxury market performing well'
    },
    {
      name: 'Henderson',
      priceRange: '$485K - $1.2M',
      trend: 'Growing',
      avgDaysOnMarket: 22,
      inventory: 'Moderate',
      highlight: 'Family-friendly demand strong'
    },
    {
      name: 'North Las Vegas',
      priceRange: '$320K - $800K',
      trend: 'Hot',
      avgDaysOnMarket: 18,
      inventory: 'Very Low',
      highlight: 'New construction driving growth'
    },
    {
      name: 'Downtown Las Vegas',
      priceRange: '$280K - $600K',
      trend: 'Emerging',
      avgDaysOnMarket: 35,
      inventory: 'Moderate',
      highlight: 'Urban living gaining popularity'
    }
  ];

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
              Las Vegas Real Estate Market Updates
            </h1>
            <p className='text-xl lg:text-2xl text-amber-100 leading-relaxed'>
              Stay informed with the latest market trends, statistics, and opportunities 
              from Dr. Janet Duffy, your Premier Good To Know REALTOR®
            </p>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Current Market Statistics
            </h2>
            <p className='text-xl text-gray-600'>
              January 2025 Las Vegas Real Estate Market Overview
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {marketStats.map((stat, index) => (
              <div key={index} className='bg-gray-50 rounded-2xl p-6 text-center'>
                <div className='text-3xl font-bold text-gray-900 mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-600 mb-2'>
                  {stat.label}
                </div>
                <div className={`text-sm font-semibold ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </div>
                <div className='text-xs text-gray-500 mt-1'>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Market Update */}
      <section className='py-16'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Latest Market Insights
            </h2>
            <p className='text-xl text-gray-600'>
              Expert analysis and trends from the Las Vegas real estate market
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Featured Article */}
            <div className='lg:col-span-2'>
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative h-64 lg:h-80'>
                  <Image
                    src={marketUpdates[0].image}
                    alt={marketUpdates[0].title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      {marketUpdates[0].category}
                    </span>
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center text-sm text-gray-500 mb-4'>
                    <span>{marketUpdates[0].date}</span>
                    <span className='mx-2'>•</span>
                    <span>{marketUpdates[0].readTime}</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    {marketUpdates[0].title}
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    {marketUpdates[0].excerpt}
                  </p>
                  <Link
                    href={`/blog/market-updates/${marketUpdates[0].id}`}
                    className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    Read Full Report →
                  </Link>
                </div>
              </article>
            </div>

            {/* Other Updates */}
            {marketUpdates.slice(1).map((update) => (
              <article key={update.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative h-48'>
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      {update.category}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span>{update.date}</span>
                    <span className='mx-2'>•</span>
                    <span>{update.readTime}</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {update.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    {update.excerpt}
                  </p>
                  <Link
                    href={`/blog/market-updates/${update.id}`}
                    className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm'
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Updates */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Neighborhood Market Updates
            </h2>
            <p className='text-xl text-gray-600'>
              How different Las Vegas areas are performing in the current market
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {neighborhoodUpdates.map((neighborhood, index) => (
              <div key={index} className='bg-gray-50 rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {neighborhood.name}
                </h3>
                <div className='space-y-3'>
                  <div>
                    <div className='text-sm text-gray-600'>Price Range</div>
                    <div className='font-semibold text-gray-900'>{neighborhood.priceRange}</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600'>Market Trend</div>
                    <div className={`font-semibold ${
                      neighborhood.trend === 'Hot' ? 'text-red-600' :
                      neighborhood.trend === 'Growing' ? 'text-green-600' :
                      neighborhood.trend === 'Stable' ? 'text-blue-600' : 'text-purple-600'
                    }`}>
                      {neighborhood.trend}
                    </div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600'>Avg. Days on Market</div>
                    <div className='font-semibold text-gray-900'>{neighborhood.avgDaysOnMarket} days</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600'>Inventory</div>
                    <div className='font-semibold text-gray-900'>{neighborhood.inventory}</div>
                  </div>
                  <div className='pt-2 border-t border-gray-200'>
                    <div className='text-sm text-gray-600'>Highlight</div>
                    <div className='text-sm font-medium text-gray-800'>{neighborhood.highlight}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA Section */}
      <section className='py-16 bg-gradient-to-r from-amber-50 to-yellow-50'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <AssessmentCTA type="buyer-readiness" />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Stay Informed
            </h2>
            <p className='text-xl text-gray-600'>
              Additional resources to help you make informed real estate decisions
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-gray-50 rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl'>📊</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Market Reports
              </h3>
              <p className='text-gray-600 mb-6'>
                Detailed monthly market analysis and neighborhood reports
              </p>
              <Link
                href='/reports'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                View Reports →
              </Link>
            </div>

            <div className='bg-gray-50 rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl'>📝</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Blog & Insights
              </h3>
              <p className='text-gray-600 mb-6'>
                Expert real estate advice and market insights
              </p>
              <Link
                href='/blog'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Read Blog →
              </Link>
            </div>

            <div className='bg-gray-50 rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl'>🏘️</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Property Search
              </h3>
              <p className='text-gray-600 mb-6'>
                Search current Las Vegas listings with market insights
              </p>
              <Link
                href='/listings'
                className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
              >
                Search Properties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Ready to Make Your Move?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Stay ahead of the market with personalized updates and expert guidance 
            from Dr. Janet Duffy, your Premier Good To Know REALTOR®
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
              Get Market Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



