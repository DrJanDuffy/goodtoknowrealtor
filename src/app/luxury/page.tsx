import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Luxury Properties | Dr. Janet Duffy',
  description: 'Premium luxury real estate services for high-end properties in Las Vegas.',
};

export default function LuxuryPage() {
  const luxuryAreas = [
    {
      name: 'Summerlin',
      description: 'Premier master-planned community with luxury estates',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Henderson',
      description: 'Exclusive neighborhoods with stunning mountain views',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Lake Las Vegas',
      description: 'Waterfront luxury with resort-style living',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'The Ridges',
      description: 'Ultra-luxury homes with Strip and valley views',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const services = [
    {
      title: 'Discrete Representation',
      description: 'Confidential service for high-profile clients',
      icon: '🤐',
    },
    {
      title: 'White-Glove Service',
      description: 'Personalized attention to every detail',
      icon: '🧤',
    },
    {
      title: 'Global Network',
      description: 'Access to international luxury markets',
      icon: '🌍',
    },
    {
      title: 'Market Expertise',
      description: 'Deep knowledge of luxury property values',
      icon: '📊',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Luxury Real Estate
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Premium properties and exceptional service for discerning clients in Las Vegas
            </p>
          </div>
        </div>
      </div>

      {/* Luxury Areas */}
      <div className='container mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
          Premier Luxury Locations
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {luxuryAreas.map((area, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100'>
              <div className='relative h-48'>
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{area.name}</h3>
                <p className='text-gray-600'>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Luxury Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl mb-4'>{service.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>{service.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Experience Luxury Real Estate
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Discover exceptional properties and receive personalized service from Dr. Janet Duffy.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Schedule Private Consultation
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
