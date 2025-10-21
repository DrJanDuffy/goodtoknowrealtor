'use client';

import { useEffect, useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (window.customElements.get('realscout-office-listings')) {
          setIsLoaded(true);
          return true;
        }
      }
      return false;
    };

    // Initial check
    if (checkRealScoutLoaded()) {
      return;
    }

    // Poll for RealScout to load
    const interval = setInterval(() => {
      if (checkRealScoutLoaded()) {
        clearInterval(interval);
      }
    }, 100);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!checkRealScoutLoaded()) {
        setHasError(true);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (hasError) {
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Property Listings Temporarily Unavailable</h3>
            <p className="text-red-600 mb-4">We're experiencing technical difficulties with our property listings.</p>
            <a 
              href="/listings" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>
    );
  }

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
          {!isLoaded && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading property listings...</p>
            </div>
          )}
          
          <div style={{ display: isLoaded ? 'block' : 'none' }}>
            <style dangerouslySetInnerHTML={{__html: `
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
