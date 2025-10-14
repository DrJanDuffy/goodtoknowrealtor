'use client';

import Link from 'next/link';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-home-value': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

export default function HomeValuePage() {
  const features = [
    {
      title: 'Accurate Valuation',
      description: 'Get the most precise estimate using advanced market data.',
      icon: '🎯',
    },
    {
      title: 'Market Comparison',
      description: 'See how your home compares to similar properties.',
      icon: '📊',
    },
    {
      title: 'Price History',
      description: 'View historical price trends in your neighborhood.',
      icon: '📈',
    },
    {
      title: 'Free Report',
      description: 'Complete home value report delivered to your inbox.',
      icon: '📧',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Get Your Home Value
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Discover what your Las Vegas home is worth with our professional valuation
            </p>
          </div>
        </div>
      </div>

      {/* Home Value Widget */}
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Free Home Value Report
            </h2>
            <div className='flex justify-center'>
              <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Why Choose Our Home Valuation?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='text-center'>
                <div className='text-2xl mb-4'>{feature.icon}</div>
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
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Sell Your Home?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Get expert guidance from Dr. Janet Duffy to maximize your home&apos;s value and achieve a successful sale.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Schedule Consultation
            </Link>
            <Link
              href='tel:702-222-1964'
              className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
            >
              (702) 222-1964
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
