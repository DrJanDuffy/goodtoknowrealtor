import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Real Estate Resources | Dr. Jan Duffy - Expert Guides',
  description: 'Comprehensive real estate resources for Las Vegas buyers and sellers. Expert guides, market insights, and tools from Dr. Jan Duffy.',
  keywords: ['Las Vegas real estate resources', 'home buying guide', 'selling guide', 'market insights', 'Dr. Jan Duffy', 'real estate tools'],
  url: '/resources',
  image: '/images/resources-og.jpg',
});

export default function ResourcesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]);

  const resourceCategories = [
    {
      title: 'Buyer Resources',
      description: 'Everything you need to know about buying a home in Las Vegas',
      icon: '🏠',
      resources: [
        {
          title: 'First-Time Buyer Guide',
          description: 'Complete guide for first-time home buyers in Las Vegas',
          href: '/buyer-guide',
          type: 'Guide',
        },
        {
          title: 'First-Time Buyer Challenges',
          description: 'Common challenges and solutions for first-time buyers',
          href: '/first-time-buyer-challenges',
          type: 'Article',
        },
        {
          title: 'Buyer Readiness Assessment',
          description: 'Free assessment to determine your readiness to buy',
          href: '/assessments/buyer-readiness',
          type: 'Tool',
        },
        {
          title: 'Las Vegas Neighborhoods',
          description: 'Explore different neighborhoods and communities',
          href: '/communities',
          type: 'Guide',
        },
      ],
    },
    {
      title: 'Seller Resources',
      description: 'Expert guidance for selling your Las Vegas home',
      icon: '💰',
      resources: [
        {
          title: 'Home Seller Guide',
          description: 'Complete guide to selling your home in Las Vegas',
          href: '/seller-guide',
          type: 'Guide',
        },
        {
          title: 'Seller Readiness Assessment',
          description: 'Free assessment to determine your readiness to sell',
          href: '/assessments/seller-readiness',
          type: 'Tool',
        },
        {
          title: 'Why List With Us',
          description: 'Discover why Dr. Jan Duffy delivers exceptional results',
          href: '/why-list-with-us',
          type: 'Article',
        },
        {
          title: 'Home Value Tool',
          description: 'Get instant home valuation and equity tracking',
          href: '/home-value',
          type: 'Tool',
        },
      ],
    },
    {
      title: 'Investment Resources',
      description: 'Build wealth through Las Vegas real estate investment',
      icon: '📈',
      resources: [
        {
          title: 'Investment Properties',
          description: 'Guide to real estate investment in Las Vegas',
          href: '/investing',
          type: 'Guide',
        },
        {
          title: 'Luxury Properties',
          description: 'Premium real estate services for luxury homes',
          href: '/luxury',
          type: 'Guide',
        },
        {
          title: 'Market Insights',
          description: 'Current market trends and analysis',
          href: '/market-insights',
          type: 'Tool',
        },
        {
          title: 'Property Search',
          description: 'Advanced search tools for Las Vegas properties',
          href: '/listings',
          type: 'Tool',
        },
      ],
    },
  ];

  const tools = [
    {
      title: 'Home Value Calculator',
      description: 'Get instant home valuation and track equity growth',
      href: '/home-value',
      icon: '🏡',
    },
    {
      title: 'Buyer Readiness Assessment',
      description: 'Determine your readiness to buy a home',
      href: '/assessments/buyer-readiness',
      icon: '📋',
    },
    {
      title: 'Seller Readiness Assessment',
      description: 'Evaluate your readiness to sell your home',
      href: '/assessments/seller-readiness',
      icon: '📊',
    },
    {
      title: 'Property Search',
      description: 'Advanced search tools for Las Vegas properties',
      href: '/listings',
      icon: '🔍',
    },
  ];

  const guides = [
    {
      title: 'Complete Buyer Guide',
      description: 'Everything you need to know about buying a home in Las Vegas',
      href: '/buyer-guide',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      readTime: '15 min read',
    },
    {
      title: 'Complete Seller Guide',
      description: 'Expert guidance for selling your Las Vegas home',
      href: '/seller-guide',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      readTime: '12 min read',
    },
    {
      title: 'Investment Properties Guide',
      description: 'Build wealth through Las Vegas real estate investment',
      href: '/investing',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      readTime: '18 min read',
    },
    {
      title: 'Luxury Properties Guide',
      description: 'Premium real estate services for luxury homes',
      href: '/luxury',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      readTime: '20 min read',
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Las Vegas Real Estate Resources
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                Comprehensive guides, tools, and insights to help you navigate the Las Vegas real estate market with confidence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Expert Consultation
                </Link>
                <Link
                  href="tel:702-222-1964"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
                >
                  Call (702) 222-1964
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Resource Library
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert guidance, tools, and insights for every aspect of Las Vegas real estate
              </p>
            </div>

            <div className="space-y-12">
              {resourceCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.resources.map((resource, idx) => (
                      <Link
                        key={idx}
                        href={resource.href}
                        className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {resource.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Interactive Tools & Assessments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Free tools to help you make informed real estate decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth guides covering all aspects of Las Vegas real estate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        Guide
                      </span>
                      <span className="text-xs text-gray-500">{guide.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Stay Informed with Market Insights
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get the latest Las Vegas real estate market trends, analysis, and insights from Dr. Jan Duffy's 20+ years of experience.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">📊</span>
                    <span className="text-gray-700">Monthly market reports and analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">📈</span>
                    <span className="text-gray-700">Price trends and neighborhood insights</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">🎯</span>
                    <span className="text-gray-700">Investment opportunities and timing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">⚡</span>
                    <span className="text-gray-700">Market predictions and forecasts</span>
                  </li>
                </ul>
                <Link
                  href="/market-insights"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Market Insights →
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Las Vegas real estate market insights"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              While our resources provide valuable information, nothing beats personalized guidance from Las Vegas's Top 1% real estate agent. Get expert consultation tailored to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
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