'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SocialProofItem {
  id: string;
  type: 'sale' | 'client' | 'review';
  message: string;
  location: string;
  price?: string;
  time: string;
}

const socialProofData: SocialProofItem[] = [
  {
    id: '1',
    type: 'sale',
    message: 'Just sold a home in Summerlin',
    location: 'Summerlin, NV',
    price: '$850,000',
    time: '2 minutes ago'
  },
  {
    id: '2',
    type: 'client',
    message: 'New client started their home search',
    location: 'Henderson, NV',
    time: '5 minutes ago'
  },
  {
    id: '3',
    type: 'review',
    message: 'Received a 5-star review',
    location: 'Las Vegas, NV',
    time: '8 minutes ago'
  },
  {
    id: '4',
    type: 'sale',
    message: 'Listed a luxury home',
    location: 'Green Valley, NV',
    price: '$1,200,000',
    time: '12 minutes ago'
  }
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show social proof after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Rotate through items every 4 seconds
    const rotateTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % socialProofData.length);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotateTimer);
    };
  }, []);

  if (!isVisible) return null;

  const currentItem = socialProofData[currentIndex];

  return (
    <div className='fixed bottom-4 right-4 z-40 max-w-sm'>
      <div className='bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-fade-in'>
        <div className='flex items-start space-x-3'>
          <div className='flex-shrink-0'>
            {currentItem.type === 'sale' && (
              <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                <span className='text-green-600 text-sm'>🏠</span>
              </div>
            )}
            {currentItem.type === 'client' && (
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                <span className='text-blue-600 text-sm'>👥</span>
              </div>
            )}
            {currentItem.type === 'review' && (
              <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center'>
                <span className='text-yellow-600 text-sm'>⭐</span>
              </div>
            )}
          </div>
          
          <div className='flex-1 min-w-0'>
            <p className='text-sm text-gray-900 font-medium'>
              {currentItem.message}
            </p>
            <div className='flex items-center space-x-2 mt-1'>
              <span className='text-xs text-gray-500'>
                {currentItem.location}
              </span>
              {currentItem.price && (
                <>
                  <span className='text-xs text-gray-300'>•</span>
                  <span className='text-xs font-semibold text-green-600'>
                    {currentItem.price}
                  </span>
                </>
              )}
              <span className='text-xs text-gray-300'>•</span>
              <span className='text-xs text-gray-500'>
                {currentItem.time}
              </span>
            </div>
          </div>
        </div>
        
        <div className='mt-3 pt-3 border-t border-gray-100'>
          <Link
            href='/listings'
            className='text-xs text-blue-600 hover:text-blue-700 font-medium'
          >
            View active listings →
          </Link>
        </div>
      </div>
    </div>
  );
}
