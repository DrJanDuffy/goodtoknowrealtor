'use client';

import Image from 'next/image';
// useState import removed - not used in this component
import { SecureForm } from '@/components/ui/SecureForm';

export function HomeValueSection() {
  const handleHomeValueSubmit = async (data: Record<string, string>) => {
    const response = await fetch('/api/home-value', {
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

  const features = [
    {
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Our ProValue Estimate',
      description:
        'Get the most accurate estimate, powered by the same technology used by lenders.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Comparable Sales',
      description:
        'See what other homes are being sold for in and around your neighborhood.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Price History',
      description: 'See sale dates and prices from years past.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
      title: 'Local Market Snapshots',
      description: 'Get the scoop on sale prices within your ZIP code.',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Discover Your Home's True Market Value
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Get a comprehensive market analysis that reveals your property&apos;s true worth. 
            Dr. Jan Duffy&apos;s data-driven approach combines local market trends, comparable sales, 
            and neighborhood insights to give you the most accurate valuation available.
          </p>
          <h4 className='text-2xl font-semibold text-gray-900 mt-8 mb-6'>
            Get Your Free Las Vegas Home Value Report
          </h4>
        </div>

        {/* Home Value Form */}
        <div className='max-w-2xl mx-auto mb-16'>
          <div className='bg-gray-50 rounded-2xl p-8 shadow-lg'>
            <SecureForm
              onSubmit={handleHomeValueSubmit}
              fields={[
                {
                  name: 'address',
                  type: 'text',
                  label: 'Property Address',
                  required: true,
                  placeholder: 'Enter your complete home address',
                  maxLength: 200
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
                  name: 'name',
                  type: 'text',
                  label: 'Your Name',
                  required: true,
                  placeholder: 'Enter your full name',
                  maxLength: 50
                }
              ]}
              submitText='Get Free Home Value Report'
              className='text-left'
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='mb-4 flex justify-center'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className='w-8 h-8 rounded-lg'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
