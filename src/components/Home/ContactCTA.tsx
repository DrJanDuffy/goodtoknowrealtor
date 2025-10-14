import Link from 'next/link';
import Image from 'next/image';
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
    <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
      <div className='container text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
          Ready to Achieve Your Real Estate Goals?
        </h2>
        <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
          Stop dreaming about your ideal Las Vegas property and start making it happen. 
          Get a personalized strategy session where we'll analyze your situation, 
          identify opportunities, and create an action plan to exceed your expectations.
        </p>
        
        {/* Contact Form */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='bg-white rounded-2xl p-8 shadow-xl'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Get Your Free Consultation</h3>
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
                  placeholder: 'Tell us about your real estate goals...',
                  maxLength: 1000
                }
              ]}
              submitText='Get Free Consultation'
              className='text-left'
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <div className='text-3xl font-bold mb-2'>Nationally</div>
            <div className='text-blue-200'>Recognized Expert</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>Premier</div>
            <div className='text-blue-200'>Good To Know REALTOR®</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>Helps Agents</div>
            <div className='text-blue-200'>Sell Homes Nationwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
