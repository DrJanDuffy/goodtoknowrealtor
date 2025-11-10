'use client';

import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: IconSymbolKey;
  verification?: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: '1',
    title: 'Top 1% Luxury Agent',
    description: 'Premier luxury real estate specialist with exclusive market access',
    icon: '🏆',
    verification: 'Verified by Berkshire Hathaway'
  },
  {
    id: '2',
    title: '20+ Years Experience',
    description: 'Expert knowledge of luxury Las Vegas market and exclusive communities',
    icon: '⭐',
    verification: 'Licensed REALTOR®'
  },
  {
    id: '3',
    title: '$127M+ Luxury Sales',
    description: 'Proven track record in high-end properties and exclusive listings',
    icon: '💰',
    verification: 'MLS verified statistics'
  },
  {
    id: '4',
    title: 'White-Glove Service',
    description: 'Discreet, personalized concierge service for discerning clients',
    icon: '✨',
    verification: 'Client testimonials available'
  },
  {
    id: '5',
    title: 'Berkshire Hathaway',
    description: 'Premier Properties - Luxury Real Estate Network',
    icon: '🏢',
    verification: 'Official franchise member'
  },
  {
    id: '6',
    title: 'Exclusive Access',
    description: 'Off-market properties and pre-market listings',
    icon: '🔑',
    verification: 'Network verified'
  }
];

export function TrustBadges() {
  return (
    <div className='bg-gradient-to-br from-amber-50 to-yellow-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Why Choose Dr. Jan Duffy for Luxury Real Estate?
          </h2>
          <p className='text-lg text-gray-700 font-medium max-w-3xl mx-auto'>
            Premier luxury specialist trusted by discerning clients. Exclusive access, white-glove service, and proven expertise in Las Vegas&apos;s most prestigious properties.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200'
            >
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center'>
                    <IconSymbol symbol={badge.icon} className='h-6 w-6 text-amber-700' ariaLabel={badge.title} />
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {badge.title}
                  </h3>
                  <p className='text-gray-700 mb-2 font-medium'>
                    {badge.description}
                  </p>
                  {badge.verification && (
                    <p className='text-sm text-amber-700 font-semibold flex items-center gap-2'>
                      <IconSymbol symbol='✓' className='h-4 w-4' ariaLabel='Verified' />
                      {badge.verification}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className='mt-12 text-center'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600'>
            <div className='flex items-center space-x-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Secured' />
              <span>SSL Secured</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Licensed' />
              <span>Licensed & Insured</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Protected' />
              <span>Privacy Protected</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Support' />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
