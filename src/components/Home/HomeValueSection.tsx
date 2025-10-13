'use client';

import { useState } from 'react';

export function HomeValueSection() {
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      setIsSubmitted(true);
      // Handle home value request logic here
      console.log('Getting home value for:', address);
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
            Sell Smarter with the Premier Good To Know REALTOR®
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Sell your Las Vegas home smarter with expert guidance from Dr. Jan
            Duffy, nationally recognized for helping agents sell homes. Get your
            free home value report from your trusted Berkshire Hathaway
            HomeServices Premier Properties agent.
          </p>
          <h4 className='text-2xl font-semibold text-gray-900 mt-8 mb-6'>
            Get Your Free Las Vegas Home Value Report
          </h4>
        </div>

        {/* Home Value Form */}
        <div className='max-w-2xl mx-auto mb-16'>
          <form onSubmit={handleSubmit} className='bg-gray-50 rounded-2xl p-8'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder='Enter your home address'
                className='flex-1 px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                required
              />
              <button
                type='submit'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors whitespace-nowrap'
              >
                Get Report
              </button>
            </div>
            {isSubmitted && (
              <div className='mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                Thank you! Your home value report request has been submitted.
                We&apos;ll contact you within 24 hours.
              </div>
            )}
          </form>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='mb-4 flex justify-center'>
                <img
                  src={feature.icon}
                  alt={feature.title}
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
