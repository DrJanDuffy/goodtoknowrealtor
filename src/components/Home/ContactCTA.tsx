'use client';

import { SecureForm } from '@/components/ui/SecureForm';

export function ContactCTA() {
  const handleContactSubmit = async (data: Record<string, string>) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': data._csrf
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message };
    }
  };

  return (
    <section className='py-20 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white'>
      <div className='container text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
          Experience Premier Luxury Real Estate Service
        </h2>
        <p className='text-xl text-white/95 mb-8 max-w-3xl mx-auto font-medium'>
          Schedule your private consultation to discover exclusive luxury properties in Las Vegas&apos;s most prestigious communities. 
          Our white-glove concierge service ensures a discreet, personalized experience tailored to your unique needs.
        </p>
        
        {/* Contact Form */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='bg-white rounded-2xl p-8 shadow-xl'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Schedule Your Private Luxury Consultation</h3>
            <SecureForm
              onSubmit={handleContactSubmit}
              fields={[
                {
                  name: 'name',
                  type: 'text',
                  label: 'Full Name',
                  required: true,
                  placeholder: 'Enter your full name',
                  maxLength: 50
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'Email Address',
                  required: true,
                  placeholder: 'Enter your email address',
                  maxLength: 254
                },
                {
                  name: 'phone',
                  type: 'tel',
                  label: 'Phone Number',
                  required: false,
                  placeholder: '(702) 555-0123',
                  maxLength: 20
                },
                {
                  name: 'message',
                  type: 'textarea',
                  label: 'How can we help you?',
                  required: true,
                  placeholder: 'Tell us about your luxury property interests and preferences...',
                  maxLength: 1000
                }
              ]}
              submitText='Schedule Private Consultation'
              className='text-left'
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
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
