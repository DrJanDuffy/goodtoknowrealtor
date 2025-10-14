import { Metadata } from 'next';
import Link from 'next/link';
import { MarketInsightsGrid } from '@/components/MarketInsights/MarketInsightsGrid';
import { fetchMarketInsights } from '@/lib/rss-fetcher';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Real Estate Market Insights | Dr. Janet Duffy',
  description: 'Stay informed with the latest Las Vegas real estate market trends, data, and insights from Dr. Janet Duffy, Premier Good To Know REALTOR®.',
  keywords: ['Las Vegas real estate market', 'Las Vegas market trends', 'real estate insights', 'market data', 'Dr. Janet Duffy'],
  url: '/market-insights',
  image: '/images/las-vegas-market-insights-og.jpg',
});

// Enable ISR with 2-hour revalidation for fresh market data
export const revalidate = 7200;

export default async function MarketInsightsPage() {
  const marketInsights = await fetchMarketInsights(12);
  
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Market Insights', url: '/market-insights' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16 lg:py-20'>
          <div className='container'>
            <div className='text-center max-w-4xl mx-auto'>
              <div className='mb-4'>
                <span className='inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide'>
                  Dr. Janet Duffy - Good To Know REALTOR®
                </span>
              </div>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg'>
                Las Vegas Real Estate
                <span className='block text-blue-100'>Good To Know Market Insights</span>
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto'>
                Stay ahead of the market with data-driven insights, trends, and analysis 
                from Dr. Janet Duffy, your Premier Good To Know REALTOR®
              </p>
              <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link
                  href='tel:702-222-1964'
                  className='bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
                >
                  📞 Call (702) 222-1964
                </Link>
                <Link
                  href='/contact'
                  className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
                >
                  Get Market Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights Content */}
        <div className='container py-12 lg:py-16'>
          <MarketInsightsGrid insights={marketInsights} />
        </div>

        {/* Why Market Insights Matter */}
        <div className='bg-white py-16'>
          <div className='container'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Why Market Insights Matter
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Understanding market trends helps you make informed real estate decisions
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl'>📈</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Price Trends
                </h3>
                <p className='text-gray-600'>
                  Track home price movements and identify the best times to buy or sell in Las Vegas
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl'>🏘️</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Inventory Levels
                </h3>
                <p className='text-gray-600'>
                  Understand supply and demand dynamics that affect your buying or selling strategy
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl'>⏱️</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Market Timing
                </h3>
                <p className='text-gray-600'>
                  Learn when market conditions favor buyers, sellers, or investors in Las Vegas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16'>
          <div className='container text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              Ready to Navigate the Las Vegas Market with Dr. Janet Duffy?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Dr. Janet Duffy combines market insights with local expertise to help you 
              make confident real estate decisions. Get personalized market analysis for your specific needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='tel:702-222-1964'
                className='bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
              >
                📞 Call (702) 222-1964
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
              >
                Schedule Market Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

