'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';

const HIGHLIGHT_STATS = [
  {
    label: 'Average Days on Market',
    value: '6',
    helper: 'vs. city average of 27',
  },
  {
    label: 'Over Asking Achieved',
    value: '$125K+',
    helper: 'for luxury listings in 2024',
  },
  {
    label: 'Client Satisfaction',
    value: '4.97/5',
    helper: 'from 500+ verified reviews',
  },
];

const HERO_TESTIMONIAL = {
  quote:
    '“Dr. Duffy sold our Summerlin estate in six days with eight offers—$132K over list. Her team delivers the most polished marketing we have ever seen.”',
  name: 'Alicia & Marcus Bennett',
  location: 'The Ridges • Summerlin',
};

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white'>
      {/* Background overlays */}
      <div className='pointer-events-none absolute inset-0 opacity-70 mix-blend-screen'>
        <div className='absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-amber-500/40 blur-[160px]' />
        <div className='absolute right-[-180px] top-1/2 h-[520px] w-[520px] rounded-full bg-blue-500/40 blur-[160px]' />
      </div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0)_60%)]' />

      <div className='container relative z-10 mx-auto px-4 py-16 sm:py-20 lg:py-24'>
        <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
          {/* Left rail */}
          <div className='space-y-8 text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-lg shadow-lg shadow-blue-900/30'>
              <IconSymbol symbol='🏆' className='h-4 w-4 text-amber-300' ariaLabel='Award icon' />
              <span>Top 1% • Berkshire Hathaway Premier</span>
            </div>

            <div className='space-y-5'>
              <h1 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl'>
                Concierge real estate for <span className='bg-gradient-to-r from-amber-300 via-white to-amber-200 bg-clip-text text-transparent'>Las Vegas luxury</span> buyers, sellers, & investors.
              </h1>
              <p className='mx-auto max-w-2xl text-base text-blue-100 sm:text-lg lg:text-xl'>
                Unlock private inventory, command $50K–$125K over asking, and build wealth with the only Las Vegas advisor who combines doctoral market research with 20+ years of negotiation mastery.
              </p>
            </div>

            {/* Stats */}
            <dl className='grid gap-4 sm:grid-cols-3'>
              {HIGHLIGHT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-blue-900/10 backdrop-blur-lg'
                >
                  <dd className='text-2xl font-semibold text-amber-200 sm:text-3xl'>{stat.value}</dd>
                  <dt className='mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70'>
                    {stat.label}
                  </dt>
                  <p className='mt-2 text-[11px] text-blue-100/80'>{stat.helper}</p>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start'>
              <a
                href='tel:702-222-1964'
                className='group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-600/40 transition-all duration-300 hover:translate-y-[-2px] hover:from-green-600 hover:to-emerald-700 sm:w-auto'
              >
                <IconSymbol symbol='📞' className='h-5 w-5' ariaLabel='Phone icon' />
                Call (702) 222-1964
              </a>
              <Link
                href='/contact'
                className='inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/30 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:w-auto'
              >
                <IconSymbol symbol='🛡️' className='h-5 w-5 text-amber-200' ariaLabel='Shield icon' />
                Schedule Consultation
              </Link>
            </div>

            {/* Search */}
            <div className='mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-900/30 backdrop-blur-lg lg:mx-0'>
              <div className='mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/70'>
                <span>Find your next address</span>
                <span className='rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80'>Powered by RealScout</span>
              </div>
              <RealScoutSimpleSearch />
            </div>
          </div>

          {/* Right rail card */}
          <div className='relative mx-auto w-full max-w-lg lg:mx-0'>
            <div className='relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-2xl'>
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80'
                  alt='Las Vegas luxury skyline'
                  fill
                  className='h-full w-full object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent' />
                <div className='absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-900 shadow-lg'>
                  <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold'>JD</span>
                  <div>
                    Dr. Jan Duffy
                    <p className='text-xs font-medium text-blue-600'>Premier REALTOR® • CRS • CLHMS</p>
                  </div>
                </div>
              </div>

              <div className='space-y-6 px-6 py-7'>
                <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100'>
                  <IconSymbol symbol='💬' className='h-4 w-4 text-amber-300' ariaLabel='Testimonial icon' />
                  <span>Client spotlight</span>
                </div>
                <blockquote className='text-sm text-blue-50 md:text-base'>
                  {HERO_TESTIMONIAL.quote}
                </blockquote>
                <div className='flex items-center justify-between text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em]'>{HERO_TESTIMONIAL.name}</p>
                    <p className='mt-1 text-[11px]'>{HERO_TESTIMONIAL.location}</p>
                  </div>
                  <div className='flex items-center gap-1 text-amber-300'>
                    {[...Array(5)].map((_, index) => (
                      <IconSymbol key={index} symbol='⭐' className='h-3 w-3 text-amber-300' ariaLabel='Star rating' />
                    ))}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>2024 Buyer Wins</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>$2.3M Portfolio</p>
                    <p className='text-[11px]'>Cash flows $8.2K/mo across three units.</p>
                  </div>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>Seller Wins</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>$132K Over Ask</p>
                    <p className='text-[11px]'>Summerlin estate closed in only six days.</p>
                  </div>
                </div>

                <Link
                  href='/why-list-with-us'
                  className='inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/20'
                >
                  Discover the playbook
                  <IconSymbol symbol='→' className='h-4 w-4' ariaLabel='Arrow right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}