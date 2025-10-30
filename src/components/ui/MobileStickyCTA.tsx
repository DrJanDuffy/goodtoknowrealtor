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
              <span className='text-blue-600 text-lg'>📞</span>
            </Link>
            <Link
              href='sms:702-222-1964'
              className='bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center'
              aria-label='Text Dr. Janet Duffy'
            >
              <span className='text-white text-lg'>💬</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
