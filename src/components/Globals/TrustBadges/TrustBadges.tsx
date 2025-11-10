'use client';

import { TrophyIcon, StarIcon, MoneyIcon, SparklesIcon, BuildingIcon, KeyIcon } from '@/components/ui/Icons';

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number; color?: string }>;
  verification?: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: '1',
    title: 'Top 1% Luxury Agent',
    description: 'Premier luxury real estate specialist with exclusive market access',
    icon: TrophyIcon,
    verification: 'Verified by Berkshire Hathaway'
  },
  {
    id: '2',
    title: '20+ Years Experience',
    description: 'Expert knowledge of luxury Las Vegas market and exclusive communities',
    icon: StarIcon,
    verification: 'Licensed REALTOR®'
  },
  {
    id: '3',
    title: '$127M+ Luxury Sales',
    description: 'Proven track record in high-end properties and exclusive listings',
    icon: MoneyIcon,
    verification: 'MLS verified statistics'
  },
  {
    id: '4',
    title: 'White-Glove Service',
    description: 'Discreet, personalized concierge service for discerning clients',
    icon: SparklesIcon,
    verification: 'Client testimonials available'
  },
  {
    id: '5',
    title: 'Berkshire Hathaway',
    description: 'Premier Properties - Luxury Real Estate Network',
    icon: BuildingIcon,
    verification: 'Official franchise member'
  },
  {
    id: '6',
    title: 'Exclusive Access',
    description: 'Off-market properties and pre-market listings',
    icon: KeyIcon,
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
                    <badge.icon className="text-amber-600" size={24} />
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
                    <p className='text-sm text-amber-700 font-semibold flex items-center gap-1'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SSL Secured</span>
            </div>

            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Licensed & Insured</span>
            </div>

            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Privacy Protected</span>
            </div>

            <div className='flex items-center space-x-2'>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
