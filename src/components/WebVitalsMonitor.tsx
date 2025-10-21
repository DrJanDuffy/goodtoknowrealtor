'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function WebVitalsMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Function to send metrics to Google Analytics
    const sendToGoogleAnalytics = (metric: WebVitalsMetric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Function to send metrics to custom endpoint
    const sendToCustomEndpoint = async (metric: WebVitalsMetric) => {
      try {
        await fetch('/api/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        });
      } catch (error) {
        console.warn('Failed to send web vitals:', error);
      }
    };

    // Import and initialize web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToGoogleAnalytics);
      getFID(sendToGoogleAnalytics);
      getFCP(sendToGoogleAnalytics);
      getLCP(sendToGoogleAnalytics);
      getTTFB(sendToGoogleAnalytics);

      // Also send to custom endpoint for additional analysis
      getCLS(sendToCustomEndpoint);
      getFID(sendToCustomEndpoint);
      getFCP(sendToCustomEndpoint);
      getLCP(sendToCustomEndpoint);
      getTTFB(sendToCustomEndpoint);
    });
  }, []);

  return null; // This component doesn't render anything
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
