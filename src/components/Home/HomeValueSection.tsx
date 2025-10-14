'use client';

import Image from 'next/image';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-home-value': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

export function HomeValueSection() {
  const features = [
    {
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Our ProValue Estimate',
      description:
        'Get the most accurate estimate, powered by the same technology used by lenders.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Comparable Sales',
      description:
        'See what other homes are being sold for in and around your neighborhood.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Price History',
      description: 'See sale dates and prices from years past.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Local Market Snapshots',
      description: 'Get the scoop on sale prices within your ZIP code.',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Discover Your Home&apos;s True Market Value
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Get a comprehensive market analysis that reveals your property&apos;s true worth.
            Dr. Jan Duffy&apos;s data-driven approach combines local market trends, comparable sales,
            and neighborhood insights to give you the most accurate valuation available.
          </p>
          <h4 className='text-2xl font-semibold text-gray-900 mt-8 mb-6'>
            Get Your Free Las Vegas Home Value Report
          </h4>
        </div>

        {/* Home Value Widget */}
        <div className='max-w-2xl mx-auto mb-16'>
          <div className='bg-gray-50 rounded-2xl p-8 shadow-lg'>
            <div className='flex justify-center'>
              <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='mb-4 flex justify-center'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className='w-8 h-8 rounded-lg'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
