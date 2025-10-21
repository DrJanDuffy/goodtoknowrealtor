'use client';

import Link from 'next/link';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';

export function HeroSection() {
  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          {/* Credibility Badge */}
          <div className='inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm'>
            Top 1% Las Vegas Real Estate Team
          </div>
          
          {/* Emotional Hook Headline */}
          <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight'>
            Tired of Missing Out on Las Vegas Homes?
          </h1>
          
          {/* Problem/Solution Subheadline */}
          <p className='text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Get the insider knowledge and negotiation power that helped <strong>500+ families</strong> buy their dream homes in Vegas - even in this competitive market
          </p>
          
          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mb-12'>
            <div className='flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm'>
              <span className='font-medium'>500+ Happy Families</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm'>
              <span className='font-medium'>$127M+ Sales Volume</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm'>
              <span className='font-medium'>20+ Years Experience</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm'>
              <span className='font-medium'>98% Client Satisfaction</span>
            </div>
          </div>

          {/* Property Search Widget */}
          <div className='mb-8'>
            <RealScoutSimpleSearch />
          </div>

          {/* Primary Value Proposition */}
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8 shadow-xl'>
            <h2 className='text-2xl font-bold mb-4'>Discover Your Vegas Home Readiness</h2>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Take our free 3-minute assessment to find out exactly what's holding you back and get a personalized action plan
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/assessments/buyer-readiness'
                  className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md'
                >
                  Am I Ready to Buy?
                </Link>
                <Link
                  href='/assessments/seller-readiness'
                  className='bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md'
                >
                  Am I Ready to Sell?
                </Link>
            </div>
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
          
          {/* Trust Statement */}
          <p className='text-sm text-gray-500 mt-6'>
            Available 7 days a week • Free consultation • No obligation • Licensed REALTOR®
          </p>
        </div>
      </div>
    </section>
  );
}