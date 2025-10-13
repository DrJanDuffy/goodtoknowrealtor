'use client';

import { useState } from 'react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab] = useState('homes');
  const [searchType] = useState('buy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
    }
  };

  return (
    <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white min-h-screen flex items-center'>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60'></div>

      <div className='container relative z-10 py-20'>
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
            Dr. Jan Duffy
            <span className='block text-blue-200 text-3xl md:text-5xl lg:text-6xl mt-4'>
              Premier Good To Know REALTOR®
            </span>
            <span className='block text-blue-100 text-2xl md:text-4xl lg:text-5xl mt-2'>
              Berkshire Hathaway HomeServices
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Nationally recognized real estate expert who helps agents across the
            country sell homes. Premier Properties Las Vegas. Your trusted real
            estate expert with over 15 years of experience helping clients buy
            and sell properties with personalized service and expert guidance.
          </p>
        </div>

        {/* Search Component */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8'>
            {/* Search Type Tabs */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {[
                { id: 'buy', label: 'Buy a Home' },
                { id: 'sell', label: 'Sell Your Home' },
                { id: 'rent', label: 'Rent' },
                { id: 'invest', label: 'Investment' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSearchType(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    searchType === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className='space-y-4'>
              <div className='relative'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder='Enter city, neighborhood, or address'
                  className='w-full px-4 py-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                />
                <button
                  type='submit'
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Search
                </button>
              </div>

              {/* Advanced Filters */}
              {activeTab === 'homes' && (
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                    aria-label='Minimum price'
                  >
                    <option value=''>Min Price</option>
                    <option value='100000'>$100,000+</option>
                    <option value='200000'>$200,000+</option>
                    <option value='300000'>$300,000+</option>
                    <option value='500000'>$500,000+</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                    aria-label='Maximum price'
                  >
                    <option value=''>Max Price</option>
                    <option value='300000'>Up to $300,000</option>
                    <option value='500000'>Up to $500,000</option>
                    <option value='750000'>Up to $750,000</option>
                    <option value='1000000'>Up to $1,000,000</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                    aria-label='Number of bedrooms'
                  >
                    <option value=''>Bedrooms</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                  </select>
                  <select
                    className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
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
                <div className='text-2xl font-bold text-blue-600'>500+</div>
                <div className='text-sm text-gray-600'>Happy Clients</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>15+</div>
                <div className='text-sm text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>98%</div>
                <div className='text-sm text-gray-600'>Client Satisfaction</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>Premier</div>
                <div className='text-sm text-gray-600'>Good To Know REALTOR®</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
