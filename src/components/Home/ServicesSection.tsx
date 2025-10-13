import Link from 'next/link';

export function ServicesSection() {
  const services = [
    {
      title: 'First-Time Homebuyer Assistance',
      description:
        'Expert guidance through the entire buying process, from pre-approval to closing. Dr. Janet Duffy helps first-time buyers navigate the Las Vegas market with confidence.',
      category: 'Buying',
      image:
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/buying',
    },
    {
      title: 'Luxury Home Marketing',
      description:
        'Specialized marketing strategies for high-end properties in Las Vegas. Premium photography, staging, and targeted marketing to reach qualified luxury buyers.',
      category: 'Selling',
      image:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/selling',
    },
    {
      title: 'Investment Property Consulting',
      description:
        'Strategic real estate investment guidance for building wealth in the Las Vegas market. Market analysis, ROI projections, and portfolio development.',
      category: 'Investing',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/investing',
    },
  ];

  const luxuryServices = [
    {
      title: 'Las Vegas Luxury Properties',
      description:
        'Discover exclusive luxury homes in Summerlin, Henderson, and the Las Vegas Strip area. From modern estates to resort-style living.',
      category: 'Luxury',
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/luxury',
    },
    {
      title: 'Market Insights & Trends',
      description:
        "Stay informed about the Las Vegas real estate market with Dr. Janet Duffy's expert analysis, market trends, and investment opportunities.",
      category: 'Insights',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/blog',
    },
    {
      title: 'Premier Properties Showcase',
      description:
        'Explore featured luxury properties and exclusive listings in the Las Vegas area with detailed virtual tours and professional photography.',
      category: 'Showcase',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      link: '/listings',
    },
  ];

  return (
    <>
      {/* General Services Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Dr. Janet Duffy&apos;s Real Estate Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive real estate solutions in Las Vegas with personalized
              service and expert guidance
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                <div className='relative h-64'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2'>
                    {service.category}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                  >
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Services Section */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Las Vegas Luxury Real Estate
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Discover premium properties and exclusive opportunities in the Las
              Vegas luxury market
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {luxuryServices.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                <div className='relative h-64'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2'>
                    {service.category}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                  >
                    {service.category === 'blog'
                      ? 'See more'
                      : service.category === 'prestige'
                        ? 'Read more'
                        : 'see the property'}
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
