import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Real Estate Market Trends 2025 | Dr. Jan Duffy Expert Analysis',
  description: 'Get expert insights on Las Vegas real estate market trends for 2025. Dr. Jan Duffy analyzes price movements, inventory levels, and investment opportunities.',
  keywords: ['Las Vegas real estate trends 2025', 'Las Vegas housing market', 'Las Vegas home prices', 'Las Vegas real estate forecast', 'Dr. Jan Duffy market analysis'],
  url: '/blog/las-vegas-real-estate-market-trends-2025',
  image: '/images/las-vegas-market-trends-2025-og.jpg',
});

export default function LasVegasMarketTrends2025Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Market Updates', url: '/blog/category/market-updates' },
    { name: 'Las Vegas Market Trends 2025', url: '/blog/las-vegas-real-estate-market-trends-2025' },
  ]);

  const marketInsights = [
    {
      title: 'Price Appreciation Continues',
      description: 'Las Vegas home prices continue to show steady appreciation, with luxury properties leading the growth.',
      data: '+8.5% YoY',
      trend: 'up',
    },
    {
      title: 'Inventory Levels Stabilizing',
      description: 'After months of low inventory, we\'re seeing more balanced market conditions.',
      data: '2.1 months supply',
      trend: 'stable',
    },
    {
      title: 'Days on Market Decreasing',
      description: 'Well-priced properties are selling faster as buyer demand remains strong.',
      data: '22 days average',
      trend: 'down',
    },
    {
      title: 'Investment Activity Rising',
      description: 'Investors are increasingly targeting Las Vegas for rental property opportunities.',
      data: '+15% investment sales',
      trend: 'up',
    },
  ];

  const neighborhoodAnalysis = [
    {
      name: 'Summerlin',
      priceRange: '$650K - $2.5M',
      trend: 'Strong Growth',
      highlights: ['Master-planned community', 'Top-rated schools', 'Golf course access', 'Luxury amenities'],
      growth: '+12%',
    },
    {
      name: 'Henderson',
      priceRange: '$400K - $1.2M',
      trend: 'Steady Appreciation',
      highlights: ['Family-friendly', 'Growing tech sector', 'Lake communities', 'Recreation facilities'],
      growth: '+9%',
    },
    {
      name: 'North Las Vegas',
      priceRange: '$300K - $600K',
      trend: 'Rapid Growth',
      highlights: ['New construction', 'Affordable entry point', 'Job growth', 'Infrastructure development'],
      growth: '+15%',
    },
    {
      name: 'The Ridges',
      priceRange: '$1.5M - $8M',
      trend: 'Luxury Market Leader',
      highlights: ['Strip views', 'Custom estates', 'Exclusive community', 'High-end amenities'],
      growth: '+18%',
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='container py-4'>
            <Breadcrumbs />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm font-semibold text-blue-200 mb-4">MARKET ANALYSIS • JANUARY 2025</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Las Vegas Real Estate Market Trends 2025
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                Expert analysis of Las Vegas housing market trends, price movements, and investment opportunities from Dr. Jan Duffy
              </p>
              <div className="flex items-center justify-center text-blue-200">
                <span className="text-sm">By Dr. Jan Duffy • Top 1% Las Vegas Agent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  As we move through 2025, the Las Vegas real estate market continues to demonstrate remarkable resilience and growth. With 20+ years of experience in this dynamic market, I'm excited to share my analysis of the key trends shaping Las Vegas real estate this year.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Las Vegas market has evolved significantly, with new opportunities emerging for buyers, sellers, and investors alike. Whether you're considering your first home purchase, planning to sell your current property, or looking to build an investment portfolio, understanding these trends is crucial for making informed decisions.
                </p>
              </div>

              {/* Market Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Overview: A Balanced Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Las Vegas real estate market in 2025 presents a more balanced landscape compared to the extreme seller's market we experienced in recent years. While demand remains strong, we're seeing healthier inventory levels and more sustainable price growth patterns.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Market Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">$485K</div>
                      <div className="text-sm text-gray-600">Median Home Price</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">22 Days</div>
                      <div className="text-sm text-gray-600">Average Days on Market</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">2.1 Months</div>
                      <div className="text-sm text-gray-600">Inventory Supply</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">98.5%</div>
                      <div className="text-sm text-gray-600">List to Sale Price Ratio</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Insights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Market Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {marketInsights.map((insight, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{insight.title}</h3>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          insight.trend === 'up' ? 'bg-green-100 text-green-800' :
                          insight.trend === 'down' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {insight.data}
                        </span>
                      </div>
                      <p className="text-gray-600">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood Analysis */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhood Performance Analysis</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Different Las Vegas neighborhoods are showing varying performance patterns. Here's my analysis of the key areas and what's driving their growth:
                </p>
                
                <div className="space-y-6">
                  {neighborhoodAnalysis.map((neighborhood, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">{neighborhood.growth}</div>
                          <div className="text-sm text-gray-600">{neighborhood.trend}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">{neighborhood.priceRange}</div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {neighborhood.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Opportunities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Opportunities in 2025</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Las Vegas continues to attract investors seeking strong returns and portfolio diversification. The market offers several compelling opportunities:
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Investment Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Rental Properties</h4>
                      <p className="text-sm text-gray-600 mb-2">Strong rental demand with 8-12% annual returns</p>
                      <div className="text-sm text-green-600 font-semibold">Best Areas: North Las Vegas, Henderson</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fix & Flip</h4>
                      <p className="text-sm text-gray-600 mb-2">Opportunities in emerging neighborhoods</p>
                      <div className="text-sm text-green-600 font-semibold">Best Areas: Downtown, East Las Vegas</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Luxury Rentals</h4>
                      <p className="text-sm text-gray-600 mb-2">High-end short-term rental market</p>
                      <div className="text-sm text-green-600 font-semibold">Best Areas: Summerlin, The Ridges</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">New Construction</h4>
                      <p className="text-sm text-gray-600 mb-2">Pre-construction opportunities</p>
                      <div className="text-sm text-green-600 font-semibold">Best Areas: North Las Vegas, Henderson</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Predictions */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Market Predictions</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Based on current trends and market fundamentals, here are my predictions for the remainder of 2025:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">📈</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Price Growth Will Moderate</h4>
                      <p className="text-gray-600">Expect 6-8% annual appreciation, down from double-digit growth in recent years.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">🏠</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inventory Will Continue Growing</h4>
                      <p className="text-gray-600">New construction and existing inventory will provide more options for buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">💰</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Activity Will Increase</h4>
                      <p className="text-gray-600">Las Vegas will remain attractive to investors seeking diversification.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Luxury Market Will Lead Growth</h4>
                      <p className="text-gray-600">High-end properties will continue to outperform the overall market.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Advice */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Advice for 2025</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Buyers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Get pre-approved before starting your search</li>
                    <li>• Consider emerging neighborhoods for better value</li>
                    <li>• Work with an experienced agent who knows the market</li>
                    <li>• Be prepared to move quickly on well-priced properties</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Sellers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Price competitively to attract multiple offers</li>
                    <li>• Invest in professional staging and photography</li>
                    <li>• Consider timing your sale for peak market conditions</li>
                    <li>• Work with a top-performing agent for best results</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Investors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Focus on cash flow over appreciation</li>
                    <li>• Consider rental property management services</li>
                    <li>• Diversify across different neighborhoods</li>
                    <li>• Stay informed about local market trends</li>
                  </ul>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Las Vegas real estate market in 2025 presents both opportunities and challenges. While the market has cooled from its peak frenzy, it remains fundamentally strong with steady growth prospects. The key to success in this market is working with experienced professionals who understand local dynamics and can guide you through the process.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're buying, selling, or investing, the Las Vegas market offers compelling opportunities for those who approach it strategically. With proper preparation, realistic expectations, and expert guidance, you can achieve your real estate goals in this dynamic market.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Navigate the Las Vegas Market?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized market insights and expert guidance from Dr. Jan Duffy, Las Vegas's Top 1% real estate agent with $127M+ in sales volume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Market Consultation
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (702) 222-1964
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
