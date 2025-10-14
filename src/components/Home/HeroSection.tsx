'use client';

import { useState, useRef } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';
import Link from 'next/link';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab] = useState('homes');
  const [searchType, setSearchType] = useState('buy');
  const { announce } = useScreenReaderAnnouncements();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        // Generate CSRF token for search
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        const csrfToken = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
            query: searchQuery,
            searchType,
            _csrf: csrfToken
          })
        });
        
        const result = await response.json();
        
        if (result.success) {
          announce(`Found ${result.totalResults} properties matching "${searchQuery}"`, 'polite');
          // Handle successful search results
          console.log('Search results:', result.results);
        } else {
          announce(`Search failed: ${result.message}`, 'assertive');
        }
      } catch (error) {
        announce('Search request failed. Please try again.', 'assertive');
        console.error('Search error:', error);
      }
    } else {
      announce('Please enter a location to search', 'assertive');
      searchInputRef.current?.focus();
    }
  };

  const handleSearchTypeChange = (type: string) => {
    setSearchType(type);
    announce(`Search type changed to ${type}`, 'polite');
  };

  return (
    <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white min-h-screen flex items-center'>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60'></div>

      <div className='container relative z-10 py-20'>
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4'>
            Dr. Jan Duffy
            <span className='block text-blue-200 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4'>
              Las Vegas Real Estate Expert
            </span>
            <span className='block text-blue-100 text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2'>
              Berkshire Hathaway HomeServices
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Transform your Las Vegas real estate experience with data-driven insights, 
            proven negotiation strategies, and personalized service. Whether buying, 
            selling, or investing, get results that exceed expectations with a 
            nationally recognized expert who's helped 500+ families achieve their goals.
          </p>
        </div>

        {/* Mobile CTA Buttons */}
        <div className='lg:hidden max-w-md mx-auto mb-8 space-y-4'>
          <Link
            href='tel:702-222-1964'
            className='block w-full bg-white text-blue-600 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg text-center min-h-[44px] flex items-center justify-center'
          >
            📞 Call (702) 222-1964
          </Link>
          <Link
            href='sms:702-222-1964'
            className='block w-full border-2 border-white text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center min-h-[44px] flex items-center justify-center'
          >
            💬 Send Text
          </Link>
        </div>

        {/* Search Component */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8'>
            {/* Search Type Tabs */}
            <fieldset className='mb-6'>
              <legend className='sr-only'>Select search type</legend>
              <div className='flex flex-wrap gap-2' role='radiogroup' aria-labelledby='search-type-legend'>
                {[
                  { id: 'buy', label: 'Buy a Home' },
                  { id: 'sell', label: 'Sell Your Home' },
                  { id: 'rent', label: 'Rent' },
                  { id: 'invest', label: 'Investment' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleSearchTypeChange(tab.id)}
                    className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] text-sm md:text-base ${
                      searchType === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    role='radio'
                    aria-checked={(searchType === tab.id).toString()}
                    aria-describedby={`search-type-${tab.id}-desc`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Search Form */}
            <form onSubmit={handleSearch} className='space-y-4' role='search'>
              <div className='relative'>
                <label htmlFor='property-search' className='sr-only'>
                  Search for properties
                </label>
                  <input
                    ref={searchInputRef}
                    id='property-search'
                    type='text'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Enter city, neighborhood, or address'
                    className='w-full px-4 py-4 pr-20 md:pr-24 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg min-h-[44px]'
                    aria-describedby='search-help'
                    maxLength={100}
                  />
                <button
                  type='submit'
                  className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[40px] text-sm md:text-base'
                  aria-label='Search for properties'
                >
                  Search
                </button>
              </div>
              <div id='search-help' className='sr-only'>
                Enter a city, neighborhood, or address to search for properties
              </div>

              {/* Advanced Filters */}
              {activeTab === 'homes' && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[44px] text-base'
                    aria-label='Minimum price'
                  >
                    <option value=''>Min Price</option>
                    <option value='100000'>$100,000+</option>
                    <option value='200000'>$200,000+</option>
                    <option value='300000'>$300,000+</option>
                    <option value='500000'>$500,000+</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[44px] text-base'
                    aria-label='Maximum price'
                  >
                    <option value=''>Max Price</option>
                    <option value='300000'>Up to $300,000</option>
                    <option value='500000'>Up to $500,000</option>
                    <option value='750000'>Up to $750,000</option>
                    <option value='1000000'>Up to $1,000,000</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[44px] text-base'
                    aria-label='Number of bedrooms'
                  >
                    <option value=''>Bedrooms</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[44px] text-base'
                    aria-label='Number of bathrooms'
                  >
                    <option value=''>Bathrooms</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                  </select>
                </div>
              )}
            </form>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>$127M+</div>
                <div className='text-sm text-gray-600'>Total Sales Volume</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>15+</div>
                <div className='text-sm text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>22 Days</div>
                <div className='text-sm text-gray-600'>Avg. Days to Sell</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>Top 1%</div>
                <div className='text-sm text-gray-600'>Las Vegas Agents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
