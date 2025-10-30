'use client';

import Link from 'next/link';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';

export function HeroSection() {
  return (
    <section className='bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 py-16 lg:py-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          {/* Credibility Badge */}
          <div className='inline-block bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border border-amber-200'>
            Premier Luxury Real Estate Specialist
          </div>
          
          {/* Emotional Hook Headline */}
          <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight'>
            Exceptional Luxury Homes in Las Vegas
          </h1>
          
          {/* Problem/Solution Subheadline */}
          <p className='text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium'>
            Discover prestigious properties in Summerlin, Henderson, Lake Las Vegas, and exclusive gated communities. Expert guidance for discerning buyers and sellers.
          </p>
          
          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mb-12'>
            <div className='flex items-center gap-2 bg-white/90 px-5 py-3 rounded-full shadow-md border border-gray-100'>
              <span className='font-semibold'>$127M+ Luxury Sales</span>
            </div>
            <div className='flex items-center gap-2 bg-white/90 px-5 py-3 rounded-full shadow-md border border-gray-100'>
              <span className='font-semibold'>Premium Properties</span>
            </div>
            <div className='flex items-center gap-2 bg-white/90 px-5 py-3 rounded-full shadow-md border border-gray-100'>
              <span className='font-semibold'>White-Glove Service</span>
            </div>
            <div className='flex items-center gap-2 bg-white/90 px-5 py-3 rounded-full shadow-md border border-gray-100'>
              <span className='font-semibold'>Exclusive Communities</span>
            </div>
          </div>

          {/* Property Search Widget */}
          <div className='mb-8'>
            <RealScoutSimpleSearch />
          </div>

          {/* Primary Value Proposition */}
          <div className='bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 rounded-2xl p-10 text-white mb-8 shadow-2xl border border-amber-400'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Luxury―Real Estate Specialized Service</h2>
            <p className='text-white text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium'>
              Discreet marketing, white-glove concierge services, and exclusive access to Las Vegas&apos;s most prestigious properties. Experience the difference of working with a premier luxury specialist.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-6'>
                <Link
                  href='/luxury'
                  className='bg-white text-amber-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl border-2 border-white'
                >
                  Browse Luxury Properties
                </Link>
                <Link
                  href='/contact'
                  className='bg-amber-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-xl border-2 border-amber-800'
                >
                  Schedule Private Consultation
                </Link>
            </div>
            {/* Trust Statement inside CTA box */}
            <p className='text-white/95 text-base lg:text-lg mt-4 font-semibold'>
              Concierge Service • Private Showings • Confidential Transactions • Licensed REALTOR®
            </p>
          </div>
          
          {/* Direct Contact CTAs */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='tel:702-222-1964'
              className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3'
            >
              Call (702) 222-1964
            </a>
            <a
              href='sms:702-222-1964'
              className='bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 border border-gray-200'
            >
              Send Text
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}