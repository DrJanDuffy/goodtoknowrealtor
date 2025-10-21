'use client';

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  verification?: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: '1',
    title: 'Top 1% Las Vegas Agent',
    description: 'Ranked among the highest performing agents',
    icon: '🏆',
    verification: 'Verified by Berkshire Hathaway'
  },
  {
    id: '2',
    title: '15+ Years Experience',
    description: 'Expert knowledge of Las Vegas market',
    icon: '⭐',
    verification: 'Licensed REALTOR®'
  },
  {
    id: '3',
    title: '500+ Happy Families',
    description: 'Successfully helped families find homes',
    icon: '👨‍👩‍👧‍👦',
    verification: 'Client testimonials available'
  },
  {
    id: '4',
    title: '$127M+ Sales Volume',
    description: 'Proven track record of successful sales',
    icon: '💰',
    verification: 'MLS verified statistics'
  },
  {
    id: '5',
    title: 'Berkshire Hathaway',
    description: 'Premier Properties affiliation',
    icon: '🏢',
    verification: 'Official franchise member'
  },
  {
    id: '6',
    title: '22 Days Avg. Sale Time',
    description: 'Faster than market average',
    icon: '⚡',
    verification: 'MLS market data'
  }
];

export function TrustBadges() {
  return (
    <div className='bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Why Choose Dr. Jan Duffy?
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Trusted by hundreds of Las Vegas families with a proven track record of success
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
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl'>
                    {badge.icon}
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {badge.title}
                  </h3>
                  <p className='text-gray-600 mb-2'>
                    {badge.description}
                  </p>
                  {badge.verification && (
                    <p className='text-sm text-blue-600 font-medium'>
                      ✓ {badge.verification}
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
              <span className='text-green-600 text-lg'>✓</span>
              <span>SSL Secured</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <span className='text-green-600 text-lg'>✓</span>
              <span>Licensed & Insured</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <span className='text-green-600 text-lg'>✓</span>
              <span>Privacy Protected</span>
            </div>
            
            <div className='flex items-center space-x-2'>
              <span className='text-green-600 text-lg'>✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
