'use client';

import { useEffect, useState } from 'react';

export function RealScoutSimpleSearch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        if (window.customElements.get('realscout-simple-search')) {
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
          <h3 className="text-lg font-semibold text-red-800 mb-2">Search Temporarily Unavailable</h3>
          <p className="text-red-600 mb-4">We're experiencing technical difficulties with our search tool.</p>
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
    <div className="w-full max-w-2xl mx-auto">
      {!isLoaded && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search tool...</p>
        </div>
      )}
      
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `
          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 100% !important;
          }
          realscout-simple-search img {
            max-width: 100%;
            height: auto;
          }
        `}} />
        <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
      </div>
    </div>
  );
}

