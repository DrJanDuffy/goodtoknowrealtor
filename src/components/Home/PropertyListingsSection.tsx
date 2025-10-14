'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Property {
  id: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: string;
  mlsNumber: string;
}

export function PropertyListingsSection() {
  const [activeTab, setActiveTab] = useState('las-vegas');

  // Mock data - replace with real data from your API
  const mockProperties: Property[] = [
    {
      id: '1',
      address: '123 Summerlin Drive, Summerlin, NV',
      price: '$850,000',
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV123456'
    },
    {
      id: '2',
      address: '456 Henderson Blvd, Henderson, NV',
      price: '$425,000',
      beds: 2,
      baths: 2,
      sqft: 1450,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV789012'
    },
    {
      id: '3',
      address: '789 North Vegas Way, North Las Vegas, NV',
      price: '$285,000',
      beds: 3,
      baths: 2,
      sqft: 1850,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV345678'
    },
    {
      id: '4',
      address: '321 Downtown Ave, Las Vegas, NV',
      price: '$650,000',
      beds: 3,
      baths: 2,
      sqft: 2100,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV901234'
    },
    {
      id: '5',
      address: '654 Green Valley Rd, Henderson, NV',
      price: '$525,000',
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV567890'
    },
    {
      id: '6',
      address: '987 Paradise Pkwy, Las Vegas, NV',
      price: '$375,000',
      beds: 3,
      baths: 2,
      sqft: 1650,
      image: 'https://images.unsplash.com/photo-1600566753190-17f63baa73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'For Sale',
      mlsNumber: 'LV234567'
    }
  ];

  const tabs = [
    { id: 'las-vegas', label: 'Las Vegas', properties: mockProperties.slice(0, 3) },
    { id: 'featured', label: 'Featured Listings', properties: mockProperties.slice(3, 6) }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            HOME LISTINGS
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='bg-gray-100 rounded-lg p-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {activeTabData?.properties.map((property) => (
            <div key={property.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='relative h-48'>
                <Image
                  src={property.image}
                  alt={property.address}
                  fill
                  className='object-cover'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {property.status}
                  </span>
                </div>
              </div>
              
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {property.price}
                </h3>
                <p className='text-gray-600 mb-4'>
                  {property.address}
                </p>
                
                <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-gray-400'>
                    MLS: {property.mlsNumber}
                  </span>
                  <Link
                    href={`/listings/${property.id}`}
                    className='text-blue-600 hover:text-blue-800 font-semibold text-sm'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Properties Button */}
        <div className='text-center mt-8'>
          <Link
            href='/listings'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            See More Properties
            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
