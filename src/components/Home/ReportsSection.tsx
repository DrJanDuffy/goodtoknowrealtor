import Link from 'next/link';

export function ReportsSection() {
  const reports = [
    {
      title: 'Las Vegas Market Analysis 2025',
      description:
        'Comprehensive analysis of the Las Vegas real estate market including pricing trends, inventory levels, and investment opportunities.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
      link: '/blog/las-vegas-market-analysis-2025',
      label: 'Market Report',
    },
    {
      title: 'Luxury Properties in Summerlin',
      description:
        'Explore the premium luxury market in Summerlin with insights on high-end properties, amenities, and lifestyle opportunities.',
      image:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      link: '/blog/summerlin-luxury-market',
      label: 'Luxury Guide',
    },
    {
      title: 'Investment Opportunities in Henderson',
      description:
        "Strategic insights for real estate investors looking at Henderson's growing market and development opportunities.",
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
      link: '/blog/henderson-investment-opportunities',
      label: 'Investment Guide',
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Las Vegas Market Intelligence
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Stay informed about the Las Vegas real estate market with Dr. Janet
            Duffy&apos;s expert analysis and insights
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {reports.map((report, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-64'>
                <img
                  src={report.image}
                  alt={report.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  {report.label}
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {report.title}
                </h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {report.description}
                </p>
                <Link
                  href={report.link}
                  className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                >
                  Read More
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

        <div className='text-center mt-12'>
          <Link
            href='/reports'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg'
          >
            View All Market Insights
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
