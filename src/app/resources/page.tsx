import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Resources | Dr. Janet Duffy',
  description: 'Valuable resources including market reports, buyer guides, seller guides, and current listings in Las Vegas.',
};

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Market Reports',
      description: 'Latest Las Vegas real estate market trends and insights.',
      href: '/reports',
      icon: '📊',
    },
    {
      title: 'Blog & Insights',
      description: 'Expert real estate advice and market updates.',
      href: '/blog',
      icon: '📝',
    },
    {
      title: 'Current Listings',
      description: 'Browse available properties in Las Vegas.',
      href: '/listings',
      icon: '🏘️',
    },
    {
      title: 'Buyer Guide',
      description: 'Complete guide to buying a home in Las Vegas.',
      href: '/buyer-guide',
      icon: '📖',
    },
    {
      title: 'Seller Guide',
      description: 'Step-by-step guide to selling your home.',
      href: '/seller-guide',
      icon: '📋',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Real Estate Resources
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Everything you need to make informed real estate decisions in Las Vegas
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className='group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-100 hover:border-blue-200'
            >
              <div className='text-4xl mb-4'>{resource.icon}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                {resource.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Need More Information?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contact Dr. Janet Duffy for personalized assistance with your real estate needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Contact Dr. Duffy
            </Link>
            <Link
              href='tel:702-222-1964'
              className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
            >
              (702) 222-1964
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
