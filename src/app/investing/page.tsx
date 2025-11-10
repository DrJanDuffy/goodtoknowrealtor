import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { InvestmentListings } from '@/components/Home/InvestmentListings';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Real Estate Investment | Dr. Jan Duffy - Investment Expert',
  description: 'Expert guidance for Las Vegas real estate investment opportunities with Dr. Jan Duffy. Build wealth through rental properties, fix & flip, and commercial investments.',
  keywords: ['Las Vegas real estate investment', 'investment properties Las Vegas', 'rental properties', 'fix and flip', 'commercial real estate', 'Dr. Jan Duffy', 'real estate investor'],
  url: '/investing',
  image: '/images/investment-properties-og.jpg',
});

export default function InvestingPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Investment Properties', url: '/investing' },
  ]);

  const investmentTypes = [
    {
      title: 'Rental Properties',
      description: 'Build passive income with residential rental properties in Las Vegas\'s growing market.',
      features: ['Cash flow analysis', 'Tenant screening', 'Property management', 'ROI optimization'],
      icon: '🏠',
      roi: '8-12%',
      investment: '$200K - $800K',
    },
    {
      title: 'Fix & Flip',
      description: 'Renovate and sell properties for quick profits in Las Vegas\'s active market.',
      features: ['Market analysis', 'Renovation guidance', 'Exit strategy', 'Profit maximization'],
      icon: '🔨',
      roi: '15-25%',
      investment: '$150K - $500K',
    },
    {
      title: 'Commercial Real Estate',
      description: 'Invest in commercial properties for long-term growth and stable income.',
      features: ['Location analysis', 'Tenant evaluation', 'ROI projections', 'Market trends'],
      icon: '🏢',
      roi: '6-10%',
      investment: '$500K - $5M+',
    },
    {
      title: 'Luxury Rentals',
      description: 'High-end vacation rentals and short-term rental properties.',
      features: ['Premium locations', 'Luxury amenities', 'Short-term rental optimization', 'Guest management'],
      icon: '⭐',
      roi: '10-18%',
      investment: '$400K - $2M+',
    },
    {
      title: 'Multi-Family',
      description: 'Apartment buildings and duplexes for scalable rental income.',
      features: ['Scalable income', 'Multiple units', 'Economies of scale', 'Portfolio building'],
      icon: '🏘️',
      roi: '7-12%',
      investment: '$300K - $3M+',
    },
    {
      title: 'Land Development',
      description: 'Raw land and development opportunities in growing Las Vegas areas.',
      features: ['Land analysis', 'Zoning research', 'Development planning', 'Future value'],
      icon: '🌱',
      roi: '20-40%',
      investment: '$100K - $2M+',
    },
  ];

  const investmentBenefits = [
    {
      title: 'Market Expertise',
      description: 'Deep knowledge of Las Vegas market trends, neighborhood growth, and investment opportunities.',
      icon: '📊',
    },
    {
      title: 'Due Diligence',
      description: 'Comprehensive property analysis including financial projections, market comparables, and risk assessment.',
      icon: '🔍',
    },
    {
      title: 'Network Access',
      description: 'Connections to contractors, property managers, lenders, and other investment professionals.',
      icon: '🤝',
    },
    {
      title: 'Portfolio Strategy',
      description: 'Long-term portfolio building strategies tailored to your investment goals and risk tolerance.',
      icon: '📈',
    },
  ];

  const investmentAreas = [
    {
      name: 'Downtown Las Vegas',
      description: 'Urban core with high rental demand and development potential',
      avgPrice: '$300K - $600K',
      rentalYield: '8-12%',
      growth: 'High',
    },
    {
      name: 'Henderson',
      description: 'Family-friendly area with stable rental market and appreciation',
      avgPrice: '$400K - $800K',
      rentalYield: '6-10%',
      growth: 'Moderate',
    },
    {
      name: 'North Las Vegas',
      description: 'Affordable entry point with strong rental demand',
      avgPrice: '$250K - $450K',
      rentalYield: '10-15%',
      growth: 'High',
    },
    {
      name: 'Summerlin',
      description: 'Premium area with luxury rental opportunities',
      avgPrice: '$500K - $1.2M',
      rentalYield: '5-8%',
      growth: 'Moderate',
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
        <PageHero
          title='Las Vegas Real Estate Investment'
          subtitle='Build wealth through strategic real estate investments with Dr. Jan Duffy, Top 1% Las Vegas agent with proven investment expertise'
          gradientFromClassName='from-green-900'
          gradientToClassName='to-emerald-800'
        >
          <Link
            href='/contact'
            className='bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors'
          >
            <span className='inline-flex items-center gap-2'>
              Schedule Investment Consultation
              <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
            </span>
          </Link>
          <Link
            href='tel:702-222-1964'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors'
          >
            <span className='inline-flex items-center gap-2'>
              <IconSymbol symbol='📞' className='h-5 w-5' ariaLabel='Phone icon' />
              Call (702) 222-1964
            </span>
          </Link>
        </PageHero>

        {/* Why Invest in Las Vegas */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Invest in Las Vegas Real Estate?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Las Vegas offers exceptional investment opportunities with no state income tax, growing population, diverse economy, and strong rental demand. Dr. Jan Duffy's expertise helps investors capitalize on these advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <IconSymbol symbol='💰' className='mx-auto mb-4 h-10 w-10 text-green-600' ariaLabel='No state income tax icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">No State Income Tax</h3>
                <p className="text-gray-600">Keep more of your rental income with Nevada's tax-friendly environment</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <IconSymbol symbol='📈' className='mx-auto mb-4 h-10 w-10 text-blue-600' ariaLabel='Population growth icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Population Growth</h3>
                <p className="text-gray-600">Consistent population growth driving rental demand and property appreciation</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                <IconSymbol symbol='🏢' className='mx-auto mb-4 h-10 w-10 text-purple-600' ariaLabel='Diverse economy icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diverse Economy</h3>
                <p className="text-gray-600">Tourism, tech, healthcare, and entertainment create stable economic foundation</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <IconSymbol symbol='🏠' className='mx-auto mb-4 h-10 w-10 text-amber-600' ariaLabel='Strong rental market icon' />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strong Rental Market</h3>
                <p className="text-gray-600">High rental demand with competitive yields and low vacancy rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Types */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Investment Strategies We Specialize In
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From rental properties to fix & flip, Dr. Jan Duffy provides expert guidance for all types of real estate investments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <IconSymbol symbol={type.icon as IconSymbolKey} className='h-10 w-10 mb-4 text-green-600' ariaLabel={`${type.title} icon`} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="font-semibold text-green-800">Expected ROI</div>
                        <div className="text-green-600">{type.roi}</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="font-semibold text-blue-800">Investment Range</div>
                        <div className="text-blue-600">{type.investment}</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <IconSymbol symbol='✓' className='text-green-600 mr-2 h-4 w-4' ariaLabel='Feature included' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                    >
                      <span className='inline-flex items-center gap-2'>
                        Learn More
                        <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Areas */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Top Investment Areas in Las Vegas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategic locations with strong investment potential and rental demand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investmentAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">Avg Price</div>
                      <div className="text-sm text-gray-600">{area.avgPrice}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">Rental Yield</div>
                      <div className="text-sm text-gray-600">{area.rentalYield}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">Growth</div>
                      <div className="text-sm text-gray-600">{area.growth}</div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <span className='inline-flex items-center gap-2'>
                      Explore {area.name}
                      <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy for Investment */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy for Real Estate Investment?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy brings unique expertise to real estate investment, combining market knowledge with investment strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <IconSymbol symbol={benefit.icon as IconSymbolKey} className='mx-auto mb-4 h-10 w-10 text-green-600' ariaLabel={`${benefit.title} icon`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Listings */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Featured Investment Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover current investment opportunities in Las Vegas with strong rental potential and growth prospects
              </p>
            </div>
            <InvestmentListings />
          </div>
        </section>

        {/* Investment Process */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Investment Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to successful real estate investment in Las Vegas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive market analysis, property evaluation, and investment strategy development
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Search</h3>
                <p className="text-gray-600">
                  Targeted property search based on your investment criteria and market opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Due Diligence</h3>
                <p className="text-gray-600">
                  Detailed property inspection, financial analysis, and risk assessment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Management</h3>
                <p className="text-gray-600">
                  Ongoing support with property management, tenant relations, and portfolio optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Our Investment Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Success stories from real estate investors who achieved their financial goals with Dr. Jan Duffy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy helped us build a portfolio of 5 rental properties. Her market knowledge and investment strategy are incredible."
                </p>
                <div className="font-semibold text-gray-900">David Thompson</div>
                <div className="text-sm text-gray-600">Real Estate Investor</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy's fix & flip guidance helped us achieve 25% ROI on our first project. Her contractor network is invaluable."
                </p>
                <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                <div className="text-sm text-gray-600">Fix & Flip Investor</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy found us the perfect commercial property. Her due diligence process saved us from a bad investment."
                </p>
                <div className="font-semibold text-gray-900">James Chen</div>
                <div className="text-sm text-gray-600">Commercial Investor</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Real Estate Investment Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for personalized investment guidance in Las Vegas. With $127M+ in sales volume and investment expertise, we help you build wealth through real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <span className='inline-flex items-center gap-2'>
                  Schedule Investment Consultation
                  <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
                </span>
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                <span className='inline-flex items-center gap-2'>
                  <IconSymbol symbol='📞' className='h-5 w-5' ariaLabel='Phone icon' />
                  Call (702) 222-1964
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}