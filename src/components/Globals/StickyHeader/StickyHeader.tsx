'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 transform transition-transform duration-300 ease-in-out'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='flex items-center justify-center w-6 h-6 bg-blue-600 rounded text-white text-xs font-bold'>
              BHHS
            </div>
            <div className='text-blue-600 font-bold text-sm'>
              Dr. Jan Duffy
            </div>
          </div>

          {/* Contact Info */}
          <div className='flex items-center space-x-4 text-sm'>
            <Link
              href='tel:702-222-1964'
              className='flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors min-h-[44px] px-3'
            >
              <span className='text-lg'>📞</span>
              <span className='hidden sm:inline'>(702) 222-1964</span>
            </Link>
            
            <Link
              href='/home-value'
              className='bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] flex items-center'
            >
              <span className='text-sm'>Get Home Value</span>
            </Link>
            
            <Link
              href='/listings'
              className='bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors min-h-[44px] flex items-center'
            >
              <span className='text-sm'>View Listings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
