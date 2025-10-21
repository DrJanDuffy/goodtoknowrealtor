'use client';

export function LuxuryListings() {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Luxury Las Vegas Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover exceptional luxury homes in Las Vegas&apos;s most prestigious neighborhoods with Dr. Jan Duffy, the Premier Good To Know REALTOR&reg;
          </p>
        </div>

        {/* RealScout Widget - Luxury Filtered */}
        <div className='max-w-7xl mx-auto overflow-x-hidden'>
          <realscout-office-listings
            agent-encoded-id='QWdlbnQtMjI1MDUw'
            sort-order='PRICE_HIGH'
            listing-status='For Sale'
            property-types=',SFR'
            price-min='1000000'
            price-max=''
            className='w-full'
          ></realscout-office-listings>
        </div>

        {/* Additional CTA */}
        <div className='text-center mt-12'>
          <a
            href='/contact'
            className='inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg'
          >
            Schedule Luxury Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

