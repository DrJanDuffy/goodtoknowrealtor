'use client';

import { useEffect, useState } from 'react';

export function HomeValueWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (window.customElements.get('realscout-home-value')) {
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
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Home Value Tool Temporarily Unavailable</h3>
          <p className="text-red-600 mb-4">We're experiencing technical difficulties with our home valuation tool.</p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Home Valuation
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isLoaded && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading home value tool...</p>
        </div>
      )}
      
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `
          realscout-home-value {
            --rs-hvw-background-color: #ffffff;
            --rs-hvw-title-color: #000000;
            --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
            --rs-hvw-primary-button-text-color: #ffffff;
            --rs-hvw-primary-button-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-color: #ffffff;
            --rs-hvw-widget-width: auto;
          }
          realscout-home-value img {
            max-width: 100%;
            height: auto;
          }
        `}} />
        <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
      </div>
    </div>
  );
}
