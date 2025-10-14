import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Real Estate Services | Dr. Janet Duffy',
  description: 'Comprehensive real estate services including buying, selling, luxury properties, and investment properties in Las Vegas.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Buying a Home',
      description: 'Expert guidance through the entire home buying process in Las Vegas.',
      href: '/buying',
      icon: '🏠',
    },
    {
      title: 'Selling Your Home',
      description: 'Maximize your home\'s value with our proven selling strategies.',
      href: '/selling',
      icon: '🏡',
    },
    {
      title: 'Luxury Properties',
      description: 'Premium real estate services for luxury homes and estates.',
      href: '/luxury',
      icon: '👑',
    },
    {
      title: 'Investment Properties',
      description: 'Build your real estate portfolio with strategic investments.',
      href: '/investing',
      icon: '📈',
    },
    {
      title: 'Home Valuation',
      description: 'Get an accurate estimate of your home\'s current market value.',
      href: '/home-value',
      icon: '💰',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Real Estate Services
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Comprehensive real estate solutions tailored to your needs in Las Vegas
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className='group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-100 hover:border-blue-200'
            >
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                {service.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contact Dr. Janet Duffy for personalized real estate services in Las Vegas.
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
