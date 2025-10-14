'use client';

import { useState } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

export function HeroSection() {
  const [searchType, setSearchType] = useState('buy');
  const { announce } = useScreenReaderAnnouncements();

  const handleSearchTypeChange = (type: string) => {
    setSearchType(type);
    announce(`Search type changed to ${type}`, 'polite');
  };

  return (
    <section className='relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 py-16 lg:py-20'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlMGU3ZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className='container relative z-10 mx-auto px-4'>
        <div className='max-w-5xl mx-auto text-center mb-12'>
          <div className='inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
            🏆 Top 1% Las Vegas Real Estate Team
          </div>
          <h1 className='text-4xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Dr. Janet Duffy Group
          </h1>
          <p className='text-xl lg:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Your premier destination for <span className='font-semibold text-blue-600'>buying</span>, <span className='font-semibold text-blue-600'>selling</span>, and <span className='font-semibold text-blue-600'>investing</span> in Las Vegas real estate
          </p>
          
          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-8'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>500+ Happy Clients</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>$127M+ Sales Volume</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>15+ Years Experience</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12'>
            {/* Search Type Tabs */}
            <div className='mb-8'>
              <div className='flex flex-wrap gap-3 justify-center'>
                {[
                  { id: 'buy', label: 'Buy a Home', icon: '🏠' },
                  { id: 'sell', label: 'Sell Your Home', icon: '💰' },
                  { id: 'rent', label: 'Rent a Property', icon: '🔑' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleSearchTypeChange(tab.id)}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[56px] flex items-center gap-3 ${
                      searchType === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                    }`}
                  >
                    <span className='text-xl'>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RealScout Widget Container */}
            <div className='flex justify-center'>
              <div className='w-full max-w-2xl'>
                <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
              </div>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200'>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors'>22</div>
                <div className='text-sm text-gray-600 font-medium'>Avg Days to Sell</div>
              </div>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors'>102%</div>
                <div className='text-sm text-gray-600 font-medium'>List to Sale Price</div>
              </div>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors'>500+</div>
                <div className='text-sm text-gray-600 font-medium'>Properties Sold</div>
              </div>
              <div className='text-center group'>
                <div className='text-3xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors'>Top 1%</div>
                <div className='text-sm text-gray-600 font-medium'>Las Vegas Agents</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='max-w-4xl mx-auto text-center mt-12'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='tel:702-222-1964'
              className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3'
            >
              <span className='text-xl'>📞</span>
              Call (702) 222-1964
            </a>
            <a
              href='sms:702-222-1964'
              className='bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 border border-gray-200'
            >
              <span className='text-xl'>💬</span>
              Send Text
            </a>
          </div>
          <p className='text-sm text-gray-500 mt-4'>
            Available 7 days a week • Free consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}