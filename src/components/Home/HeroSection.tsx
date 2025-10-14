'use client';

import { useState, useRef } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';
import Link from 'next/link';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSqft, setMinSqft] = useState('');
  const [maxSqft, setMaxSqft] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
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
            propertyType,
            minPrice,
            maxPrice,
            minSqft,
            maxSqft,
            beds,
            baths,
            _csrf: csrfToken
          })
        });
        
        const result = await response.json();
        
        if (result.success) {
          announce(`Found ${result.totalResults} properties matching "${searchQuery}"`, 'polite');
          // Handle successful search results
        } else {
          announce(`Search failed: ${result.message}`, 'assertive');
        }
      } catch (error) {
        announce('Search request failed. Please try again.', 'assertive');
        // Search error occurred
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
    <section className='relative bg-white text-gray-900 py-16 lg:py-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h1 className='text-4xl lg:text-6xl font-bold mb-6 leading-tight'>
            Dr. Janet Duffy Group
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            is one of the leading real estate teams in the Las Vegas, NV area. Top 1% of Realtors
          </p>
        </div>

        {/* Search Component */}
        <div className='max-w-6xl mx-auto'>
          <div className='bg-gray-50 rounded-2xl shadow-lg p-6 lg:p-8'>
            {/* Search Type Tabs */}
            <div className='mb-6'>
              <div className='flex flex-wrap gap-2 justify-center'>
                {[
                  { id: 'buy', label: 'Buy' },
                  { id: 'sell', label: 'Sell' },
                  { id: 'rent', label: 'Rent' },
                ].map(tab => (
                <button
                  key={tab.id}
                    onClick={() => handleSearchTypeChange(tab.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] ${
                      searchType === tab.id
                      ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              </div>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='search-area' className='block text-sm font-medium text-gray-700 mb-2'>
                    Search by area
                  </label>
                <input
                    ref={searchInputRef}
                    id='search-area'
                    type='text'
                  value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search by area'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base'
                    aria-describedby='search-help'
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor='search-address' className='block text-sm font-medium text-gray-700 mb-2'>
                    Search by address
                  </label>
                  <input
                    id='search-address'
                    type='text'
                    placeholder='Search by address'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base'
                  />
                </div>
              </div>

              {/* Property Filters */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div>
                  <label htmlFor='property-type' className='block text-sm font-medium text-gray-700 mb-2'>
                    Property Type
                  </label>
                  <select
                    id='property-type'
                    value={propertyType}
                    onChange={e => setPropertyType(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Property Types</option>
                    <option value='single-family'>Single Family Home</option>
                    <option value='condo'>Condo</option>
                    <option value='townhouse'>Townhouse</option>
                    <option value='manufactured'>Manufactured</option>
                    <option value='multi-family'>Multi-Family</option>
                    <option value='lots-land'>Lots and Land</option>
                    <option value='commercial'>Commercial</option>
                  </select>
              </div>

                <div>
                  <label htmlFor='min-price' className='block text-sm font-medium text-gray-700 mb-2'>
                    Min Price
                  </label>
                  <select
                    id='min-price'
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Min Price</option>
                    <option value='100000'>$100,000+</option>
                    <option value='200000'>$200,000+</option>
                    <option value='300000'>$300,000+</option>
                    <option value='500000'>$500,000+</option>
                    <option value='750000'>$750,000+</option>
                    <option value='1000000'>$1,000,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='max-price' className='block text-sm font-medium text-gray-700 mb-2'>
                    Max Price
                  </label>
                  <select
                    id='max-price'
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Max Price</option>
                    <option value='300000'>Up to $300,000</option>
                    <option value='500000'>Up to $500,000</option>
                    <option value='750000'>Up to $750,000</option>
                    <option value='1000000'>Up to $1,000,000</option>
                    <option value='1500000'>Up to $1,500,000</option>
                    <option value='2000000'>Up to $2,000,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='min-sqft' className='block text-sm font-medium text-gray-700 mb-2'>
                    Min Sq Ft
                  </label>
                  <input
                    id='min-sqft'
                    type='number'
                    value={minSqft}
                    onChange={e => setMinSqft(e.target.value)}
                    placeholder='min. sqft'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div>
                  <label htmlFor='max-sqft' className='block text-sm font-medium text-gray-700 mb-2'>
                    Max Sq Ft
                  </label>
                  <input
                    id='max-sqft'
                    type='number'
                    value={maxSqft}
                    onChange={e => setMaxSqft(e.target.value)}
                    placeholder='max. sqft'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                </div>

                <div>
                  <label htmlFor='beds' className='block text-sm font-medium text-gray-700 mb-2'>
                    Beds
                  </label>
                  <select
                    id='beds'
                    value={beds}
                    onChange={e => setBeds(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Beds</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='baths' className='block text-sm font-medium text-gray-700 mb-2'>
                    Baths
                  </label>
                  <select
                    id='baths'
                    value={baths}
                    onChange={e => setBaths(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value=''>Baths</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                  </select>
                </div>

                <div className='flex items-end'>
                  <button
                    type='button'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors'
                  >
                    Clear
                  </button>
              </div>
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  Search Properties
                </button>
              </div>
            </form>
              </div>
            </div>

        {/* Description */}
        <div className='max-w-4xl mx-auto text-center mt-12'>
          <p className='text-lg text-gray-600 leading-relaxed'>
            <strong>Dr. Janet Duffy Group</strong> is your digital resource for buying and selling homes in the <strong>Las Vegas, NV</strong> area with real-time updates of all properties for sale so you have direct access to everything you need to know including all current market statistics and listings.
          </p>
        </div>
      </div>
    </section>
  );
}