'use client';

import { useState } from 'react';
import Link from 'next/link';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-advanced-search': HTMLElement & {
      'agent-encoded-id': string;
    };
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

export function PropertyListingsSection() {
  const [activeTab, setActiveTab] = useState('las-vegas');

  const tabs = [
    { 
      id: 'las-vegas', 
      label: 'Las Vegas', 
      widget: (
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="PRICE_LOW" 
          listing-status="For Sale" 
          property-types=",SFR" 
          price-min="300000" 
          price-max="800000"
        ></realscout-office-listings>
      )
    },
    { 
      id: 'featured', 
      label: 'Featured Listings', 
      widget: (
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="PRICE_LOW" 
          listing-status="For Sale" 
          property-types=",SFR" 
          price-min="500000" 
          price-max="600000"
        ></realscout-office-listings>
      )
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
            🔍 Advanced Property Search
          </div>
          <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
            HOME LISTINGS
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Find your perfect Las Vegas home with our advanced search tools and expert guidance
          </p>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Search Properties
              </h3>
              <p className='text-gray-600'>
                Use our advanced search to find properties that match your exact criteria
              </p>
            </div>
            <div className='flex justify-center'>
              <div className='w-full max-w-2xl'>
                <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='bg-white rounded-xl p-2 shadow-lg border border-gray-200'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* RealScout Office Listings Widget */}
        <div className='max-w-7xl mx-auto'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {activeTabData?.label} Properties
              </h3>
              <p className='text-gray-600'>
                Browse our curated selection of {activeTabData?.label.toLowerCase()} properties
              </p>
            </div>
            <div className='overflow-x-hidden'>
              {activeTabData?.widget}
            </div>
          </div>
        </div>

        {/* See More Properties Button */}
        <div className='text-center mt-12'>
          <Link
            href='/listings'
            className='inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            See More Properties
            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' width="24" height="24">
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
