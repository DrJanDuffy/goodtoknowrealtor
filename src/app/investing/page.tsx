import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investment Properties | Dr. Janet Duffy',
  description: 'Expert guidance for real estate investment opportunities in Las Vegas.',
};

export default function InvestingPage() {
  const investmentTypes = [
    {
      title: 'Rental Properties',
      description: 'Build passive income with residential rental properties.',
      features: ['Cash flow analysis', 'Tenant screening', 'Property management'],
      icon: '🏠',
    },
    {
      title: 'Fix & Flip',
      description: 'Renovate and sell properties for quick profits.',
      features: ['Market analysis', 'Renovation guidance', 'Exit strategy'],
      icon: '🔨',
    },
    {
      title: 'Commercial Real Estate',
      description: 'Invest in commercial properties for long-term growth.',
      features: ['Location analysis', 'Tenant evaluation', 'ROI projections'],
      icon: '🏢',
    },
    {
      title: 'Multi-Family Units',
      description: 'Scale your portfolio with apartment buildings.',
      features: ['Due diligence', 'Financing options', 'Management setup'],
      icon: '🏘️',
    },
  ];

  const benefits = [
    'Market expertise in Las Vegas real estate',
    'Access to off-market investment opportunities',
    'Comprehensive due diligence and analysis',
    'Financing and partnership connections',
    'Property management recommendations',
    'Tax strategy consultation',
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Real Estate Investment
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Build wealth through strategic real estate investments in Las Vegas
            </p>
          </div>
        </div>
      </div>

      {/* Investment Types */}
      <div className='container mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
          Investment Opportunities
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {investmentTypes.map((type, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm border border-gray-100 p-6'>
              <div className='flex items-center mb-4'>
                <div className='text-3xl mr-4'>{type.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900'>{type.title}</h3>
              </div>
              <p className='text-gray-600 mb-4'>{type.description}</p>
              <ul className='space-y-2'>
                {type.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center text-sm text-gray-600'>
                    <svg className='w-4 h-4 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Dr. Duffy */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Why Choose Dr. Janet Duffy?
              </h2>
              <p className='text-lg text-gray-600 mb-6'>
                With years of experience in Las Vegas real estate, Dr. Duffy provides 
                expert guidance to help you build a profitable investment portfolio.
              </p>
              <ul className='space-y-3'>
                {benefits.map((benefit, index) => (
                  <li key={index} className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 text-blue-600 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-blue-50 rounded-lg p-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Get Started Today
              </h3>
              <p className='text-gray-600 mb-6'>
                Ready to start building your real estate investment portfolio? 
                Contact Dr. Duffy for a consultation.
              </p>
              <div className='space-y-3'>
                <Link
                  href='/contact'
                  className='block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center'
                >
                  Schedule Consultation
                </Link>
                <Link
                  href='tel:702-222-1964'
                  className='block w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center'
                >
                  (702) 222-1964
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Invest?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Let Dr. Janet Duffy help you find the perfect investment opportunities in Las Vegas.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Start Investing
            </Link>
            <Link
              href='/listings'
              className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
            >
              View Available Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
