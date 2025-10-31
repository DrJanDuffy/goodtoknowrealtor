'use client';

import { useState, useEffect } from 'react';
import { PrimaryPhoneCTA, SecondaryTextCTA } from '@/components/ui/StandardCTA';

/**
 * MobileStickyCTA - Minimal fixed bottom bar for mobile devices
 * Icon-only buttons that auto-hide/show based on scroll direction
 * Only shows after scrolling past hero section
 */
export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Only show after scrolling past 200px
      if (scrollTop > 200) {
        // Show when scrolling up, hide when scrolling down
        if (scrollTop < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <div className='lg:hidden fixed bottom-0 left-0 right-0 z-50'>
      <div className='bg-white border-t border-gray-200 shadow-lg'>
        <div className='flex items-center justify-around h-14'>
          <Link
            href='tel:702-222-1964'
            className='flex-1 flex items-center justify-center h-full hover:bg-gray-50 active:bg-gray-100 transition-colors'
            aria-label='Call Dr. Janet Duffy (702) 222-1964'
          >
            <svg className='w-6 h-6 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
          </Link>
          <div className='w-px h-8 bg-gray-300' />
          <Link
            href='sms:702-222-1964'
            className='flex-1 flex items-center justify-center h-full hover:bg-gray-50 active:bg-gray-100 transition-colors'
            aria-label='Text Dr. Janet Duffy (702) 222-1964'
          >
            <svg className='w-6 h-6 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
