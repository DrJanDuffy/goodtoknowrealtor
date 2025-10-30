import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LuxuryListings } from '@/components/Home/LuxuryListings';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { SEO_CONFIG } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { TrustBadges } from '@/components/Globals/TrustBadges/TrustBadges';

export const metadata: Metadata = generatePageMetadata({
  title: 'Luxury Real Estate Las Vegas | Dr. Jan Duffy - Premier Luxury Agent',
  description: 'Discover exceptional luxury properties in Las Vegas with Dr. Jan Duffy, Top 1% agent specializing in high-end homes, estates, and exclusive communities.',
  keywords: ['luxury real estate Las Vegas', 'luxury homes Las Vegas', 'high-end properties', 'Dr. Jan Duffy', 'luxury realtor Las Vegas', 'Summerlin luxury', 'Henderson luxury', 'Lake Las Vegas'],
  url: '/luxury',
  image: '/images/luxury-real-estate-og.jpg',
});

export const alternates = { canonical: `${SEO_CONFIG.siteUrl}/luxury` } as const;

export default function LuxuryPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Properties', url: '/luxury' },
  ]);

  const luxuryAreas = [
    {
      name: 'Summerlin',
      description: 'Premier master-planned community with luxury estates',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$800K - $5M+',
      features: ['Golf course communities', 'Mountain views', 'Private amenities', 'Top-rated schools'],
    },
    {
      name: 'Henderson',
      description: 'Exclusive neighborhoods with stunning mountain views',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$600K - $3M+',
      features: ['Resort-style living', 'Lake communities', 'Hiking trails', 'Shopping centers'],
    },
    {
      name: 'Lake Las Vegas',
      description: 'Waterfront luxury with resort-style living',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$1M - $8M+',
      features: ['Waterfront properties', 'Marina access', 'Golf courses', 'Resort amenities'],
    },
    {
      name: 'The Ridges',
      description: 'Ultra-luxury homes with Strip and valley views',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$2M - $15M+',
      features: ['Strip views', 'Private golf', 'Gated security', 'Custom estates'],
    },
    {
      name: 'MacDonald Highlands',
      description: 'Exclusive gated community with panoramic views',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$1.5M - $10M+',
      features: ['Mountain views', 'Private amenities', 'Custom homes', 'Exclusive access'],
    },
    {
      name: 'Anthem Country Club',
      description: 'Golf course luxury with resort-style amenities',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '$700K - $4M+',
      features: ['Championship golf', 'Country club', 'Tennis courts', 'Fine dining'],
    },
  ];

  const luxuryFeatures = [
    {
      title: 'Discreet Marketing',
      description: 'Private showing arrangements and confidential marketing strategies for high-profile clients.',
      icon: '🔒',
    },
    {
      title: 'Luxury Staging',
      description: 'Professional staging consultation with high-end furniture and design expertise.',
      icon: '🏠',
    },
    {
      title: 'Concierge Service',
      description: 'Full-service support including property management, maintenance, and lifestyle services.',
      icon: '⭐',
    },
    {
      title: 'Investment Analysis',
      description: 'Comprehensive ROI analysis and portfolio building strategies for luxury properties.',
      icon: '📊',
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
          title='Luxury Real Estate in Las Vegas'
          subtitle='Discover exceptional luxury properties with Dr. Jan Duffy, Top 1% Las Vegas agent specializing in high-end homes, estates, and exclusive communities'
          gradientFromClassName='from-blue-900'
          gradientToClassName='to-blue-800'
          backgroundImageUrl='https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1973&q=80'
        >
          <Link
            href='/contact'
            className='bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
          >
            Schedule Private Consultation
          </Link>
          <Link
            href='tel:702-222-1964'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors'
          >
            Call (702) 222-1964
          </Link>
        </PageHero>
        <TrustBadges />

        {/* Why Choose Dr. Jan Duffy for Luxury */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy for Luxury Real Estate?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As a Top 1% Las Vegas real estate agent with $127M+ in sales volume, Dr. Jan Duffy brings unparalleled expertise to luxury property transactions. Her deep understanding of high-end markets, discretion, and attention to detail ensures exceptional results for discerning clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {luxuryFeatures.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Premier Luxury Communities in Las Vegas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore Las Vegas's most exclusive neighborhoods, each offering unique luxury amenities and lifestyle experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {luxuryAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={area.image}
                      alt={`${area.name} luxury homes`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{area.priceRange}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2 mb-6">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Explore {area.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Property Types */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Luxury Property Types We Specialize In
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From custom estates to luxury condos, Dr. Jan Duffy has expertise in all types of high-end Las Vegas properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Estates</h3>
                <p className="text-gray-600 mb-4">
                  One-of-a-kind custom homes designed by renowned architects, featuring premium finishes, smart home technology, and resort-style amenities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Architect-designed custom homes</li>
                  <li>• Premium materials and finishes</li>
                  <li>• Smart home automation</li>
                  <li>• Resort-style outdoor living</li>
                  <li>• Private amenities and services</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Condos</h3>
                <p className="text-gray-600 mb-4">
                  High-rise luxury condominiums with Strip views, concierge services, and world-class amenities in Las Vegas's most prestigious towers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strip and valley views</li>
                  <li>• Concierge services</li>
                  <li>• Resort-style amenities</li>
                  <li>• High-end finishes</li>
                  <li>• Prime locations</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Golf Course Homes</h3>
                <p className="text-gray-600 mb-4">
                  Luxury homes on championship golf courses with private access, stunning views, and exclusive country club memberships.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Championship golf courses</li>
                  <li>• Private course access</li>
                  <li>• Country club memberships</li>
                  <li>• Golf course views</li>
                  <li>• Exclusive amenities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Properties</h3>
                <p className="text-gray-600 mb-4">
                  High-end investment properties including luxury rentals, vacation homes, and commercial real estate opportunities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Luxury rental properties</li>
                  <li>• Vacation home investments</li>
                  <li>• Commercial opportunities</li>
                  <li>• Portfolio building</li>
                  <li>• ROI optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Featured Luxury Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exceptional luxury homes currently available in Las Vegas's most prestigious communities
              </p>
            </div>
            <LuxuryListings />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Our Luxury Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Testimonials from satisfied luxury property clients who experienced exceptional service and results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy's expertise in luxury properties is unmatched. She sold our Summerlin estate for $50K above asking price in just 12 days."
                </p>
                <div className="font-semibold text-gray-900">Sarah & Michael Chen</div>
                <div className="text-sm text-gray-600">Luxury Estate Sellers</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy found us the perfect luxury condo with Strip views. Her attention to detail and market knowledge made all the difference."
                </p>
                <div className="font-semibold text-gray-900">Jennifer Rodriguez</div>
                <div className="text-sm text-gray-600">Luxury Condo Buyers</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr. Duffy helped us build a portfolio of luxury investment properties. Her market insights and negotiation skills are incredible."
                </p>
                <div className="font-semibold text-gray-900">David Thompson</div>
                <div className="text-sm text-gray-600">Luxury Real Estate Investor</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Luxury Real Estate Excellence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for personalized luxury real estate services in Las Vegas. With $127M+ in sales volume and 20+ years of experience, we deliver exceptional results for discerning clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Private Consultation
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