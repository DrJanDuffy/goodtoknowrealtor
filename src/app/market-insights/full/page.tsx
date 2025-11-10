'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { MarketInsightsSection } from '@/components/MarketInsights/MarketInsightsSection';
import { MarketVisualizations } from '@/components/MarketData/MarketVisualizations';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Metadata } from 'next';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Market Insights | Dr. Jan Duffy - Real Estate Expert',
  description: 'Comprehensive Las Vegas real estate market insights, trends, and analysis from Dr. Jan Duffy, your Premier Good To Know REALTOR®',
  keywords: ['Las Vegas market insights', 'real estate trends', 'market analysis', 'Dr. Jan Duffy', 'Las Vegas real estate news'],
  url: '/market-insights/full',
  image: '/images/market-insights-og.jpg',
});

export default function MarketInsightsFullPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Market Insights', url: '/market-insights' },
    { name: 'Full Market Analysis', url: '/market-insights/full' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <PageHero
          title='Las Vegas Real Estate Market Insights'
          subtitle='Comprehensive market analysis, trends, and data-driven insights from Dr. Jan Duffy, your Premier Good To Know REALTOR®'
        />

        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200 py-4'>
          <div className='container mx-auto px-4'>
            <nav className='flex items-center space-x-2 text-sm'>
              <a href='/' className='text-blue-600 hover:text-blue-700'>Home</a>
              <span className='text-gray-400'>›</span>
              <a href='/market-insights' className='text-blue-600 hover:text-blue-700'>Market Insights</a>
              <span className='text-gray-400'>›</span>
              <span className='text-gray-600'>Full Market Analysis</span>
            </nav>
          </div>
        </div>

        {/* KCM iFrame Embed */}
        <section className='py-8'>
          <div className='container mx-auto px-4'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200'>
                <h2 className='text-xl font-bold text-gray-900 mb-2'>
                  Live Market Insights Dashboard
                </h2>
                <p className='text-gray-600'>
                  Real-time market data and analysis powered by Simplifying the Market
                </p>
              </div>
              
              <div className='p-0'>
                <iframe 
                  src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18" 
                  scrolling="yes" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  height="800px" 
                  width="100%" 
                  allowFullScreen
                  title="Las Vegas Market Insights Dashboard"
                  className='w-full border-0'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className='py-12 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Need Personalized Market Analysis?
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Dr. Jan Duffy provides customized market insights tailored to your specific neighborhood and property type
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>Free Market Consultation</h3>
                  <p className='text-gray-600 mb-4'>
                    Get a personalized market analysis for your specific area and property type
                  </p>
                  <a 
                    href='/contact'
                    className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                  >
                    Schedule Consultation
                  </a>
                </div>
                
                <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>Home Value Analysis</h3>
                  <p className='text-gray-600 mb-4'>
                    Discover your home's current market value with our advanced valuation tools
                  </p>
                  <a 
                    href='/home-value'
                    className='inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors'
                  >
                    Get Home Value
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className='py-12 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-2xl font-bold text-gray-900 mb-8'>
                Why Trust Dr. Jan Duffy's Market Analysis?
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconSymbol symbol='📊' className='text-blue-600 text-2xl' ariaLabel='Market data icon' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Data-Driven Insights</h3>
                  <p className='text-gray-600'>
                    Analysis based on real market data, not speculation
                  </p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconSymbol symbol='🏆' className='text-green-600 text-2xl' ariaLabel='Awards icon' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Top 1% Agent</h3>
                  <p className='text-gray-600'>
                    $127M+ in sales volume with 20+ years of Las Vegas experience
                  </p>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconSymbol symbol='🎯' className='text-purple-600 text-2xl' ariaLabel='Target icon' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Local Expertise</h3>
                  <p className='text-gray-600'>
                    Deep knowledge of every Las Vegas neighborhood and market trend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}