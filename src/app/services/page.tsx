import { Metadata } from 'next';
import Link from 'next/link';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  keywords: PAGE_SEO.services.keywords,
  url: '/services',
  image: '/images/dr-janet-duffy-services-og.jpg',
});

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Real Estate Services', url: '/services' },
  ]);

  const services: Array<{
    title: string;
    description: string;
    href: string;
    icon: IconSymbolKey;
    details: string;
  }> = [
    {
      title: 'Buying a Home',
      description: 'Expert guidance through the entire home buying process in Las Vegas.',
      href: '/buying',
      icon: '🏠',
      details: 'From first-time buyers to luxury home purchases, Dr. Jan Duffy provides comprehensive support including pre-approval assistance, market analysis, negotiation strategies, and closing coordination.',
    },
    {
      title: 'Selling Your Home',
      description: 'Maximize your home\'s value with our proven selling strategies.',
      href: '/selling',
      icon: '🏡',
      details: 'Professional marketing, strategic pricing, and expert negotiation to achieve the best possible outcome. Includes staging consultation, professional photography, and comprehensive market analysis.',
    },
    {
      title: 'Luxury Properties',
      description: 'Premium real estate services for luxury homes and estates.',
      href: '/luxury',
      icon: '👑',
      details: 'Specialized expertise in high-end properties with discreet marketing, luxury staging, and connections to qualified buyers. Experience with estates, custom homes, and exclusive communities.',
    },
    {
      title: 'Investment Properties',
      description: 'Build your real estate portfolio with strategic investments.',
      href: '/investing',
      icon: '📈',
      details: 'Market analysis, ROI calculations, and portfolio building strategies. Expertise in rental properties, fix-and-flip opportunities, and long-term investment planning.',
    },
    {
      title: 'Home Valuation',
      description: 'Get an accurate estimate of your home\'s current market value.',
      href: '/home-value',
      icon: '💰',
      details: 'Comprehensive market analysis using comparable sales, current market trends, and property condition assessment to provide accurate valuations for buying, selling, or refinancing decisions.',
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
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <PageHero
          title='Comprehensive Real Estate Services in Las Vegas'
          subtitle='Dr. Jan Duffy delivers exceptional real estate solutions with $127M+ in sales volume and 20+ years of Las Vegas market expertise'
        />

        {/* Services Overview */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                Why Choose Dr. Jan Duffy for Your Real Estate Needs?
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed'>
                As a Top 1% Las Vegas real estate agent with over 500 successful transactions, Dr. Jan Duffy provides comprehensive services tailored to your unique needs. Whether you're buying your first home, selling a luxury estate, or building an investment portfolio, our expertise ensures exceptional results.
              </p>
            </div>

            {/* Key Statistics */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
              <div className='text-center bg-blue-50 rounded-xl p-6'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>$127M+</div>
                <div className='text-lg text-gray-700'>Total Sales Volume</div>
              </div>
              <div className='text-center bg-green-50 rounded-xl p-6'>
                <div className='text-4xl font-bold text-green-600 mb-2'>500+</div>
                <div className='text-lg text-gray-700'>Happy Clients</div>
              </div>
              <div className='text-center bg-purple-50 rounded-xl p-6'>
                <div className='text-4xl font-bold text-purple-600 mb-2'>20+</div>
                <div className='text-lg text-gray-700'>Years Experience</div>
              </div>
              <div className='text-center bg-orange-50 rounded-xl p-6'>
                <div className='text-4xl font-bold text-orange-600 mb-2'>98%</div>
                <div className='text-lg text-gray-700'>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                Our Complete Range of Real Estate Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                From first-time home buyers to luxury property investors, we provide specialized expertise for every real estate need in Las Vegas
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {services.map((service, index) => (
                <div key={index} className='card p-8'>
                  <div className='flex items-start mb-6'>
                    <IconSymbol symbol={service.icon} className='h-10 w-10 mr-4 text-blue-600' ariaLabel={service.title} />
                    <div>
                      <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                        {service.title}
                      </h3>
                      <p className='text-lg text-gray-600 mb-4'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed mb-6'>
                    {service.details}
                  </p>
                  <Link
                    href={service.href}
                    className='inline-flex items-center gap-2'
                  >
                    <span>Learn More</span>
                    <IconSymbol symbol='→' className='h-4 w-4' ariaLabel='Arrow right' />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                Specialized Services & Expertise
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Beyond traditional buying and selling, Dr. Jan Duffy offers specialized services for unique real estate situations
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>First-Time Buyer Programs</h3>
                <p className='text-gray-600 mb-4'>
                  Comprehensive guidance for first-time home buyers including down payment assistance programs, first-time buyer incentives, and step-by-step process education.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Nevada Housing Division programs</li>
                  <li>• FHA and VA loan assistance</li>
                  <li>• First-time buyer workshops</li>
                </ul>
              </div>

              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Luxury Property Marketing</h3>
                <p className='text-gray-600 mb-4'>
                  Discreet marketing strategies for high-end properties including luxury staging, professional photography, and targeted marketing to qualified buyers.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Luxury staging consultation</li>
                  <li>• Professional photography</li>
                  <li>• Exclusive buyer networks</li>
                </ul>
              </div>

              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Investment Analysis</h3>
                <p className='text-gray-600 mb-4'>
                  Detailed ROI analysis, market trend evaluation, and portfolio building strategies for real estate investors.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Cash flow analysis</li>
                  <li>• Market trend reports</li>
                  <li>• Portfolio optimization</li>
                </ul>
              </div>

              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Relocation Services</h3>
                <p className='text-gray-600 mb-4'>
                  Complete relocation assistance for families and individuals moving to Las Vegas, including neighborhood research and school district information.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Neighborhood research</li>
                  <li>• School district analysis</li>
                  <li>• Relocation timeline planning</li>
                </ul>
              </div>

              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Divorce Real Estate</h3>
                <p className='text-gray-600 mb-4'>
                  Sensitive handling of real estate transactions during divorce proceedings, ensuring fair market value and smooth transitions.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Neutral market analysis</li>
                  <li>• Mediation support</li>
                  <li>• Fair value assessments</li>
                </ul>
              </div>

              <div className='card p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Estate Planning</h3>
                <p className='text-gray-600 mb-4'>
                  Assistance with real estate aspects of estate planning, including property transfers and inheritance considerations.
                </p>
                <ul className='text-sm text-gray-600 space-y-2'>
                  <li>• Property valuation</li>
                  <li>• Transfer documentation</li>
                  <li>• Tax implications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                Our Proven Process for Success
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Dr. Jan Duffy follows a systematic approach that has resulted in exceptional outcomes for hundreds of clients
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold'>
                  1
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Initial Consultation</h3>
                <p className='text-gray-600'>
                  Comprehensive needs assessment, market analysis, and goal setting to create a personalized strategy.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold'>
                  2
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Strategy Development</h3>
                <p className='text-gray-600'>
                  Custom marketing plan, pricing strategy, and timeline development based on your specific objectives.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold'>
                  3
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Execution & Marketing</h3>
                <p className='text-gray-600'>
                  Professional marketing implementation, buyer/seller coordination, and ongoing communication throughout the process.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold'>
                  4
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Closing & Follow-up</h3>
                <p className='text-gray-600'>
                  Smooth closing coordination, post-transaction support, and ongoing relationship maintenance for future needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                What Our Clients Say About Our Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Real testimonials from satisfied clients who experienced exceptional service and results
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='flex items-center mb-4'>
                  <div className='flex text-yellow-400 text-xl'>
                    {[...Array(5)].map((_, i) => (
                      <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                    ))}
                  </div>
                </div>
                <p className='text-gray-700 mb-4 italic'>
                  "Dr. Duffy's expertise in luxury properties is unmatched. She sold our Summerlin estate for $50K above asking price in just 12 days."
                </p>
                <div className='font-semibold text-gray-900'>Sarah & Michael Chen</div>
                <div className='text-sm text-gray-600'>Luxury Home Sellers</div>
              </div>

              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='flex items-center mb-4'>
                  <div className='flex text-yellow-400 text-xl'>
                    {[...Array(5)].map((_, i) => (
                      <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                    ))}
                  </div>
                </div>
                <p className='text-gray-700 mb-4 italic'>
                  "As first-time buyers, we were nervous about the process. Dr. Duffy guided us through every step and found us the perfect home."
                </p>
                <div className='font-semibold text-gray-900'>Jennifer Rodriguez</div>
                <div className='text-sm text-gray-600'>First-Time Buyers</div>
              </div>

              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='flex items-center mb-4'>
                  <div className='flex text-yellow-400 text-xl'>
                    {[...Array(5)].map((_, i) => (
                      <IconSymbol key={i} symbol='⭐' className='h-4 w-4' ariaLabel='Star rating' />
                    ))}
                  </div>
                </div>
                <p className='text-gray-700 mb-4 italic'>
                  "Dr. Duffy helped us build a portfolio of 5 investment properties. Her market knowledge and negotiation skills are incredible."
                </p>
                <div className='font-semibold text-gray-900'>David Thompson</div>
                <div className='text-sm text-gray-600'>Real Estate Investor</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              Ready to Experience Exceptional Real Estate Service?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Contact Dr. Jan Duffy today for personalized real estate services in Las Vegas. With $127M+ in sales volume and 20+ years of experience, we deliver results that exceed expectations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Schedule Consultation
              </Link>
              <Link
                href='tel:702-222-1964'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
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
