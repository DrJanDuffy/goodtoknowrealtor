import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Real Estate Investment Opportunities 2025 | Dr. Jan Duffy Guide',
  description: 'Discover Las Vegas real estate investment opportunities in 2025. Expert analysis from Dr. Jan Duffy on rental properties, fix & flip, and market trends.',
  keywords: ['Las Vegas real estate investment', 'Las Vegas rental properties', 'Las Vegas fix and flip', 'Las Vegas investment opportunities', 'Dr. Jan Duffy investment guide'],
  url: '/blog/las-vegas-real-estate-investment-opportunities-2025',
  image: '/images/las-vegas-investment-opportunities-2025-og.jpg',
});

export default function LasVegasInvestmentOpportunities2025Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Finance', url: '/blog/category/finance' },
    { name: 'Investment Opportunities 2025', url: '/blog/las-vegas-real-estate-investment-opportunities-2025' },
  ]);

  const investmentStrategies = [
    {
      title: 'Rental Properties',
      description: 'Build passive income through residential rental properties',
      avgROI: '8-12%',
      initialInvestment: '$200K - $500K',
      cashFlow: '$1,500 - $3,500/month',
      pros: ['Steady monthly income', 'Tax benefits', 'Appreciation potential', 'Portfolio diversification'],
      cons: ['Property management', 'Vacancy risk', 'Maintenance costs', 'Tenant issues'],
      bestAreas: ['North Las Vegas', 'Henderson', 'Green Valley'],
      timeline: 'Long-term (5+ years)',
    },
    {
      title: 'Fix & Flip',
      description: 'Purchase, renovate, and sell properties for quick profits',
      avgROI: '15-25%',
      initialInvestment: '$150K - $400K',
      cashFlow: 'One-time profit',
      pros: ['Quick returns', 'High profit potential', 'Market timing flexibility', 'Creative control'],
      cons: ['High risk', 'Market dependent', 'Renovation costs', 'Time intensive'],
      bestAreas: ['Downtown Las Vegas', 'East Las Vegas', 'North Las Vegas'],
      timeline: 'Short-term (6-12 months)',
    },
    {
      title: 'Luxury Rentals',
      description: 'High-end short-term and vacation rental properties',
      avgROI: '10-18%',
      initialInvestment: '$400K - $1M+',
      cashFlow: '$3,000 - $8,000/month',
      pros: ['Premium rates', 'Tourism market', 'Flexible usage', 'High appreciation'],
      cons: ['High initial cost', 'Seasonal demand', 'Management intensive', 'Regulatory changes'],
      bestAreas: ['Summerlin', 'The Ridges', 'Lake Las Vegas'],
      timeline: 'Medium-term (2-5 years)',
    },
    {
      title: 'Multi-Family Properties',
      description: 'Apartment buildings and duplexes for scalable income',
      avgROI: '7-12%',
      initialInvestment: '$300K - $2M+',
      cashFlow: '$2,500 - $15,000/month',
      pros: ['Scalable income', 'Multiple units', 'Economies of scale', 'Portfolio building'],
      cons: ['High initial cost', 'Complex management', 'Market dependent', 'Financing challenges'],
      bestAreas: ['North Las Vegas', 'Henderson', 'Las Vegas Valley'],
      timeline: 'Long-term (5+ years)',
    },
  ];

  const marketFactors = [
    {
      factor: 'Population Growth',
      impact: 'Positive',
      description: 'Las Vegas continues to attract new residents, driving rental demand',
      data: '+2.3% annual growth',
    },
    {
      factor: 'Job Market',
      impact: 'Positive',
      description: 'Diversifying economy with tech, healthcare, and entertainment sectors',
      data: '+15,000 new jobs annually',
    },
    {
      factor: 'Tourism Recovery',
      impact: 'Positive',
      description: 'Strong tourism rebound supporting short-term rental market',
      data: '42M+ visitors annually',
    },
    {
      factor: 'Interest Rates',
      impact: 'Mixed',
      description: 'Higher rates affect financing but create less competition',
      data: '6.5-7.5% range',
    },
    {
      factor: 'Inventory Levels',
      impact: 'Positive',
      description: 'Balanced market with opportunities for investors',
      data: '2.1 months supply',
    },
    {
      factor: 'Rental Demand',
      impact: 'Positive',
      description: 'Strong demand for both long-term and short-term rentals',
      data: '95%+ occupancy rates',
    },
  ];

  const neighborhoods = [
    {
      name: 'North Las Vegas',
      avgPrice: '$350K',
      rentalYield: '8-12%',
      growth: '+15% YoY',
      highlights: ['New construction', 'Job growth', 'Affordable entry', 'Infrastructure development'],
      investmentType: 'Rental Properties',
    },
    {
      name: 'Henderson',
      avgPrice: '$520K',
      rentalYield: '6-10%',
      growth: '+9% YoY',
      highlights: ['Family-friendly', 'Tech sector growth', 'Stable market', 'Good schools'],
      investmentType: 'Long-term Rentals',
    },
    {
      name: 'Downtown Las Vegas',
      avgPrice: '$280K',
      rentalYield: '10-15%',
      growth: '+12% YoY',
      highlights: ['Urban renewal', 'Entertainment district', 'Young professionals', 'Fix & flip opportunities'],
      investmentType: 'Fix & Flip',
    },
    {
      name: 'Summerlin',
      avgPrice: '$750K',
      rentalYield: '5-8%',
      growth: '+12% YoY',
      highlights: ['Master-planned', 'Luxury amenities', 'High-end market', 'Stable appreciation'],
      investmentType: 'Luxury Rentals',
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
        <section className="relative bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm font-semibold text-purple-200 mb-4">FINANCE • JANUARY 2025</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Las Vegas Real Estate Investment Opportunities 2025
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed mb-8">
                Expert analysis of Las Vegas investment strategies, market trends, and profit potential from Dr. Jan Duffy
              </p>
              <div className="flex items-center justify-center text-purple-200">
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
                  Las Vegas continues to be one of the most attractive real estate investment markets in the United States. With 20+ years of experience helping investors build successful portfolios, I'm excited to share the current opportunities and strategies that are working in 2025.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Las Vegas market offers unique advantages for investors: no state income tax, strong population growth, diverse economy, and robust rental demand. Whether you're looking for rental properties, fix & flip opportunities, or luxury investments, Las Vegas provides compelling options for every investment strategy.
                </p>
              </div>

              {/* Market Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Invest in Las Vegas Real Estate?</h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Investment Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tax Benefits</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• No state income tax</li>
                        <li>• Favorable property tax rates</li>
                        <li>• Business-friendly environment</li>
                        <li>• Depreciation benefits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Market Fundamentals</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Population growth (+2.3% annually)</li>
                        <li>• Job market diversification</li>
                        <li>• Tourism recovery</li>
                        <li>• Infrastructure development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Strategies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Strategies for 2025</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Each investment strategy offers different risk profiles, returns, and time commitments. Choose the approach that aligns with your goals and resources:
                </p>
                
                <div className="space-y-8">
                  {investmentStrategies.map((strategy, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{strategy.title}</h3>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">{strategy.avgROI}</div>
                          <div className="text-sm text-gray-600">Average ROI</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{strategy.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Initial Investment:</span>
                          <div className="font-semibold text-gray-900">{strategy.initialInvestment}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Monthly Cash Flow:</span>
                          <div className="font-semibold text-gray-900">{strategy.cashFlow}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Timeline:</span>
                          <div className="font-semibold text-gray-900">{strategy.timeline}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-green-600 mb-2">Pros:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {strategy.pros.map((pro, idx) => (
                              <li key={idx}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-red-600 mb-2">Cons:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {strategy.cons.map((con, idx) => (
                              <li key={idx}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Best Areas:</span> {strategy.bestAreas.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Factors */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Factors Affecting Investments</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding these key factors will help you make informed investment decisions:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {marketFactors.map((factor, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{factor.factor}</h3>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          factor.impact === 'Positive' ? 'bg-green-100 text-green-800' :
                          factor.impact === 'Negative' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {factor.impact}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{factor.description}</p>
                      <div className="text-sm font-semibold text-blue-600">{factor.data}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood Analysis */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Investment Neighborhoods</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Different neighborhoods offer varying investment opportunities based on your strategy:
                </p>
                
                <div className="space-y-6">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">{neighborhood.avgPrice}</div>
                          <div className="text-sm text-gray-600">Average Price</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Rental Yield:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.rentalYield}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Growth:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.growth}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Investment Type:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.investmentType}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {neighborhood.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Tips */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Investment Tips for 2025</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Success Strategies</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">💡</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Focus on Cash Flow</h4>
                        <p className="text-gray-700">Prioritize properties that generate positive monthly cash flow, not just appreciation potential.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">📊</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Market Research</h4>
                        <p className="text-gray-700">Thoroughly analyze neighborhood trends, rental rates, and future development plans.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">🏠</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Property Management</h4>
                        <p className="text-gray-700">Consider professional management services to maximize returns and minimize headaches.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">💰</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Financing Strategy</h4>
                        <p className="text-gray-700">Explore different financing options including portfolio loans and private lending.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">📈</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Portfolio Diversification</h4>
                        <p className="text-gray-700">Spread risk across different property types and neighborhoods.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Management Strategies</h2>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Investments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Financial Protection</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Maintain emergency reserves</li>
                        <li>• Adequate insurance coverage</li>
                        <li>• Conservative leverage ratios</li>
                        <li>• Regular cash flow analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Market Protection</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Diversify across neighborhoods</li>
                        <li>• Monitor market trends</li>
                        <li>• Exit strategy planning</li>
                        <li>• Professional property management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Las Vegas Investment Portfolio</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Las Vegas offers exceptional opportunities for real estate investors in 2025. The combination of favorable tax environment, population growth, and diverse economy creates a strong foundation for successful investments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Success in Las Vegas real estate investment requires careful planning, thorough market research, and professional guidance. Whether you're starting with your first rental property or building a diverse portfolio, the key is to focus on cash flow, manage risks effectively, and stay informed about market trends.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get personalized investment guidance from Dr. Jan Duffy, Las Vegas's Top 1% real estate agent with $127M+ in sales volume and investment expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/investing"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Investment Opportunities
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
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

