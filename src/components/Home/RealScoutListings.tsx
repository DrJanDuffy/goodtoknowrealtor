'use client';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-office-listings': HTMLElement & {
      'agent-encoded-id': string;
      'sort-order': string;
      'listing-status': string;
      'property-types': string;
      'price-min': string;
      'price-max': string;
    };
  }
}

export function RealScoutListings() {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Featured Las Vegas Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover exceptional homes in Las Vegas's most desirable
            neighborhoods with Dr. Jan Duffy, the Premier Good To Know REALTOR®
          </p>
        </div>

        {/* RealScout Widget */}
        <div className='max-w-7xl mx-auto overflow-x-hidden'>
          <style dangerouslySetInnerHTML={{__html: `
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
            realscout-office-listings img {
              max-width: 100%;
              height: auto;
            }
          `}} />
          <realscout-office-listings
            agent-encoded-id='QWdlbnQtMjI1MDUw'
            sort-order='PRICE_LOW'
            listing-status='For Sale'
            property-types=',SFR'
            price-min='500000'
            price-max='600000'
            className='w-full'
          ></realscout-office-listings>
        </div>

        {/* Additional CTA */}
        <div className='text-center mt-12'>
          <a
            href='/listings'
            className='inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg'
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}