'use client';

import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';

export function HeroSection() {
  return (
    <section className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8 md:py-12 lg:py-20 min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden'>
      {/* Background Visual - Simplified on mobile for performance */}
      <div className='absolute inset-0 md:opacity-10 opacity-5'>
        <div className='hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/20 via-transparent to-transparent' />
        <div className='hidden md:block absolute inset-0 bg-[linear-gradient(135deg,_transparent_0%,_rgba(255,215,0,0.05)_50%,_transparent_100%)]' />
      </div>
      
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-5xl mx-auto text-center'>
          {/* Trust Badge - Hidden on mobile for cleaner design */}
          <div className='hidden md:inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 border border-white/20'>
            <span>20+ Years</span>
            <span className='text-white/40'>|</span>
            <span>$127M+ Sales</span>
            <span className='text-white/40'>|</span>
            <span>500+ Happy Families</span>
          </div>
          
          {/* Optimized Headline - Shorter on mobile */}
          <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight tracking-tight px-2'>
            <span className='block md:hidden'>Your Vegas Real Estate Win Awaits</span>
            <span className='hidden md:block'>Your Vegas real estate win awaits</span>
          </h1>
          
          {/* Shorter Subheading on Mobile */}
          <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-2'>
            <span className='block md:hidden'>Stop leaving money on the table. Let&apos;s talk about your next move.</span>
            <span className='hidden md:block'>Stop leaving money on the table as a seller. Skip the bidding wars as a buyer. Build wealth as an investor. Let&apos;s talk about your next move.</span>
          </p>
          
          {/* Trust Element - Shorter on mobile */}
          <div className='mb-6 md:mb-8 hidden sm:block'>
            <p className='text-xs md:text-sm lg:text-base text-white/80 font-medium px-2'>
              Licensed REALTOR® • Berkshire Hathaway Premier Properties • White-Glove Service
            </p>
          </div>

          {/* Property Search Widget - Simplified on mobile */}
          <div className='mb-6 md:mb-10 max-w-2xl mx-auto'>
            <RealScoutSimpleSearch />
          </div>
          
          {/* Optimized CTAs - Better mobile stacking */}
          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto px-2'>
            {/* Primary CTA - Full width on mobile */}
            <a
              href='tel:702-222-1964'
              className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 md:px-10 py-4 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto'
            >
              <svg className='w-4 h-4 md:w-5 md:h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              <span>Call (702) 222-1964</span>
            </a>
            
            {/* Secondary CTA - Full width on mobile */}
            <a
              href='sms:702-222-1964'
              className='bg-white text-gray-900 px-6 md:px-10 py-4 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto'
            >
              <svg className='w-4 h-4 md:w-5 md:h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
              <span className='hidden sm:inline'>Send Text Message</span>
              <span className='sm:hidden'>Send Text</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}