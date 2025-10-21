'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Neighborhood {
  id: string;
  name: string;
  href: string;
  image: string;
  description: string;
  avgPrice: string;
  propertiesCount: number;
}

export function NeighborhoodsSection() {
  const neighborhoods: Neighborhood[] = [
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      href: '/areas/las-vegas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'The heart of the Las Vegas Valley',
      avgPrice: '$450,000',
      propertiesCount: 1250
    },
    {
      id: 'summerlin',
      name: 'Summerlin',
      href: '/areas/summerlin',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Premier master-planned community',
      avgPrice: '$750,000',
      propertiesCount: 890
    },
    {
      id: 'henderson',
      name: 'Henderson',
      href: '/areas/henderson',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Family-friendly with great schools',
      avgPrice: '$525,000',
      propertiesCount: 1100
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      href: '/areas/north-las-vegas',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Growing community with new developments',
      avgPrice: '$350,000',
      propertiesCount: 750
    },
    {
      id: 'downtown',
      name: 'Downtown Las Vegas',
      href: '/areas/downtown',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Urban living in the city center',
      avgPrice: '$400,000',
      propertiesCount: 450
    },
    {
      id: 'green-valley',
      name: 'Green Valley',
      href: '/areas/green-valley',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Established neighborhood in Henderson',
      avgPrice: '$600,000',
      propertiesCount: 680
    }
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            EXPLORE OUR NEIGHBORHOODS
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {neighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.id}
              href={neighborhood.href}
              className='group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='relative h-32'>
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300'></div>
              </div>
              
              <div className='p-4 text-center'>
                <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors'>
                  {neighborhood.name}
                </h3>
                <p className='text-sm text-gray-600 mb-2'>
                  {neighborhood.description}
                </p>
                <div className='text-xs text-gray-500'>
                  <div className='font-semibold text-blue-600'>
                    {neighborhood.avgPrice}
                  </div>
                  <div>
                    {neighborhood.propertiesCount} properties
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Communities Button */}
        <div className='text-center mt-8'>
          <Link
            href='/communities'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            View All Communities →
          </Link>
        </div>
      </div>
    </section>
  );
}
