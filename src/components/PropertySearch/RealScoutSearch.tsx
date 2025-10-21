'use client';

import { useEffect, useState } from 'react';

export function RealScoutSearch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (window.customElements.get('realscout-advanced-search')) {
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
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Advanced Search Temporarily Unavailable</h3>
          <p className="text-red-600 mb-4">We're experiencing technical difficulties with our advanced search tool.</p>
          <a 
            href="/listings" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All Properties
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!isLoaded && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading advanced search...</p>
        </div>
      )}
      
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: rgb(35, 93, 137);
            --rs-as-widget-width: 100% !important;
          }
          realscout-advanced-search img {
            max-width: 100%;
            height: auto;
          }
        `}} />
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </div>
    </div>
  );
}
