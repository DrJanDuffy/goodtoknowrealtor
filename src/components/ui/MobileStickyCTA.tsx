'use client';

import Link from 'next/link';

export function MobileStickyCTA() {
  return (
    <div className='lg:hidden fixed bottom-4 left-4 right-4 z-50'>
      <div className='bg-blue-600 rounded-xl shadow-2xl p-4'>
        <div className='flex items-center justify-between space-x-3'>
          <div className='flex-1'>
            <p className='text-white text-sm font-semibold'>
              Ready to start your real estate journey?
            </p>
            <p className='text-blue-100 text-xs'>
              Get expert guidance from Dr. Janet Duffy
            </p>
          </div>
          <div className='flex space-x-2'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center'
              aria-label='Call Dr. Janet Duffy'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
            </Link>
            <Link
              href='sms:702-222-1964'
              className='bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center'
              aria-label='Text Dr. Janet Duffy'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
