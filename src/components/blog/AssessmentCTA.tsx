'use client';

import Link from 'next/link';

interface AssessmentCTAProps {
  type: 'buyer-readiness' | 'seller-readiness' | 'neighborhood-match' | 'investment-roi';
  title?: string;
  description?: string;
  className?: string;
}

export function AssessmentCTA({ 
  type, 
  title, 
  description, 
  className = '' 
}: AssessmentCTAProps) {
  const assessmentConfig = {
    'buyer-readiness': {
      title: title || 'Are You Ready to Buy in Las Vegas?',
      description: description || 'Take our free 3-minute assessment to discover your readiness score and get personalized next steps.',
      link: '/assessments/buyer-readiness',
      icon: 'Home',
      color: 'blue'
    },
    'seller-readiness': {
      title: title || 'Is Now the Right Time to Sell?',
      description: description || 'Find out if you\'re ready to sell your Vegas home and maximize your profit.',
      link: '/assessments/seller-readiness',
      icon: 'Sell',
      color: 'green'
    },
    'neighborhood-match': {
      title: title || 'Find Your Perfect Vegas Neighborhood',
      description: description || 'Discover which Las Vegas community matches your lifestyle and budget.',
      link: '/assessments/neighborhood-match',
      icon: 'Location',
      color: 'purple'
    },
    'investment-roi': {
      title: title || 'Is Vegas Real Estate Investing Right for You?',
      description: description || 'Calculate your investment potential and get personalized strategies.',
      link: '/assessments/investment-roi',
      icon: 'Chart',
      color: 'orange'
    }
  };

  const config = assessmentConfig[type];
  const colorClasses = {
    blue: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
    green: 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    purple: 'from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700',
    orange: 'from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
  };

  return (
    <div className={`bg-gradient-to-r ${colorClasses[config.color as keyof typeof colorClasses]} text-white rounded-xl p-6 shadow-lg ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="text-2xl mb-4 font-bold">{config.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{config.title}</h3>
          <p className="text-white/90 mb-4">{config.description}</p>
          <Link
            href={config.link}
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Take Assessment →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Compact version for blog articles
export function AssessmentCTASmall({ type }: { type: AssessmentCTAProps['type'] }) {
  const config = {
    'buyer-readiness': {
      title: 'Ready to Buy?',
      link: '/assessments/buyer-readiness',
      icon: 'Home'
    },
    'seller-readiness': {
      title: 'Ready to Sell?',
      link: '/assessments/seller-readiness',
      icon: 'Sell'
    },
    'neighborhood-match': {
      title: 'Find Your Neighborhood',
      link: '/assessments/neighborhood-match',
      icon: 'Location'
    },
    'investment-roi': {
      title: 'Investment Ready?',
      link: '/assessments/investment-roi',
      icon: 'Chart'
    }
  };

  const assessment = config[type];

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{assessment.icon}</span>
          <div>
            <h4 className="font-semibold text-gray-900">{assessment.title}</h4>
            <p className="text-sm text-gray-600">Take our free 3-minute assessment</p>
          </div>
        </div>
        <Link
          href={assessment.link}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}
