'use client';

export function InvestmentListings() {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Las Vegas Investment Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover high-potential investment opportunities in Las Vegas with Dr. Jan Duffy, the Premier Good To Know REALTOR&reg;
          </p>
        </div>

        {/* RealScout Widget - Investment Filtered */}
        <div className='max-w-7xl mx-auto overflow-x-hidden'>
          <realscout-office-listings
            agent-encoded-id='QWdlbnQtMjI1MDUw'
            sort-order='PRICE_LOW'
            listing-status='For Sale'
            property-types=',SFR'
            price-min='200000'
            price-max='600000'
            className='w-full'
          ></realscout-office-listings>
        </div>

        {/* Additional CTA */}
        <div className='text-center mt-12'>
          <a
            href='/contact'
            className='inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors duration-200 shadow-lg'
          >
            Get Investment Analysis
          </a>
        </div>
      </div>
    </section>
  );
}

