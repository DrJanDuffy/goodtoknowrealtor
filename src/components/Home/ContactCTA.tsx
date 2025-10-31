'use client';

import { PersonalizedCTA } from '@/components/ui/PersonalizedCTA';

export function ContactCTA() {
  return (
    <section className='py-20 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600'>
      <div className='container'>
        {/* Personalized CTA Section */}
        <PersonalizedCTA className="bg-transparent"ורים
        
        {/* Trust Indicators */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white'>
          <div>
            <div className='text-3xl font-bold mb-2'>$127M+</div>
            <div className='text-white/90 font-medium'>Luxury Sales Volume</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>Exclusive</div>
            <div className='text-white/90 font-medium'>Premium Properties</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>White-Glove</div>
            <div className='text-white/90 font-medium'>Concierge Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
