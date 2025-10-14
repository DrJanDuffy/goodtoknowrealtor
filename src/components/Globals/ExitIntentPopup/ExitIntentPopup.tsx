'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('exitIntentShown');
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative'>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
          aria-label='Close popup'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Content */}
        <div className='text-center'>
          <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <span className='text-2xl'>🏠</span>
          </div>
          
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>
            Don&apos;t Miss Out!
          </h3>
          
          <p className='text-gray-600 mb-6'>
            Get instant alerts for new Las Vegas properties that match your criteria. 
            Be the first to know about hot deals and price drops.
          </p>

          {/* CTA Buttons */}
          <div className='space-y-3'>
            <Link
              href='/listings'
              className='block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Set Up Property Alerts
            </Link>
            
            <Link
              href='/home-value'
              className='block w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
            >
              Get My Home Value
            </Link>
          </div>

          <p className='text-xs text-gray-500 mt-4'>
            Join 500+ Las Vegas families who found their perfect home
          </p>
        </div>
      </div>
    </div>
  );
}
