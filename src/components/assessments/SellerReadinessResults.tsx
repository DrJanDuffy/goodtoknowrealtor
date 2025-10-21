'use client';

import Link from 'next/link';

interface SellerReadinessResultsProps {
  score: number;
}

export function SellerReadinessResults({ score }: SellerReadinessResultsProps) {
  const getScoreColor = () => {
    if (score >= 71) return 'text-green-600';
    if (score >= 41) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = () => {
    if (score >= 71) return 'bg-green-100';
    if (score >= 41) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getResultsData = () => {
    if (score >= 71) {
      return {
        emoji: '🎉',
        title: 'You\'re Ready to Sell!',
        message: 'Congratulations! You have excellent preparation and market knowledge. You\'re in a strong position to maximize your home\'s value.',
        nextStepTitle: 'Ready to List Your Home',
        nextStepDescription: 'You\'re well-prepared to start the selling process. Let\'s get your home on the market and achieve maximum value.',
        ctaText: 'Schedule Listing Consultation',
        ctaLink: '/contact',
        ctaPhone: false,
        urgent: true,
      };
    } else if (score >= 41) {
      return {
        emoji: '📈',
        title: 'You\'re Getting There!',
        message: 'You have a good foundation but there are some areas to improve before listing. With the right preparation, you can maximize your profit.',
        nextStepTitle: 'Let\'s Prepare Your Home for Sale',
        nextStepDescription: 'We can help you address the areas that need attention to get your home market-ready.',
        ctaText: 'Get Preparation Plan',
        ctaLink: '/contact',
        ctaPhone: false,
        urgent: false,
      };
    } else {
      return {
        emoji: '🏠',
        title: 'Let\'s Build Your Foundation',
        message: 'You have strong motivation to sell, but there are several areas that need attention first. Don\'t worry - we can help you get ready.',
        nextStepTitle: 'Create Your Selling Strategy',
        nextStepDescription: 'Let\'s work together to create a comprehensive plan to prepare your home and maximize its value.',
        ctaText: 'Schedule Strategy Session',
        ctaLink: '/contact',
        ctaPhone: false,
        urgent: false,
      };
    }
  };

  const getInsights = () => {
    if (score >= 71) {
      return [
        "Your home is well-prepared and market-ready",
        "You have a strong understanding of current market conditions",
        "Your pricing strategy is well-researched and competitive"
      ];
    } else if (score >= 41) {
      return [
        "You have good market awareness but need some preparation",
        "Your home may need minor updates or staging improvements",
        "Consider refining your pricing strategy based on recent comps"
      ];
    } else {
      return [
        "Focus on preparing your home for the market first",
        "Spend time researching current market conditions",
        "Consider professional staging and pricing consultation"
      ];
    }
  };

  const resultsData = getResultsData();
  const insights = getInsights();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-2xl mb-4">{resultsData.emoji}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {resultsData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {resultsData.message}
            </p>
          </div>

          {/* Score Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Selling Readiness Score</h2>
              
              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto mb-6">
                <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      score >= 71 ? 'bg-green-500' : 
                      score >= 41 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}%</span>
                </div>
              </div>

              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getScoreBgColor()} ${getScoreColor()}`}>
                {score >= 71 ? 'Ready to Sell!' : score >= 41 ? 'Getting There' : 'Building Foundation'}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Personalized Insights</h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {resultsData.nextStepTitle}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {resultsData.nextStepDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={resultsData.ctaLink}
                className={`flex-1 text-center px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 ${
                  resultsData.urgent
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                }`}
              >
                {resultsData.ctaText}
              </Link>
              
              <Link
                href="tel:702-222-1964"
                className="flex-1 text-center px-8 py-4 rounded-lg font-bold text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
              >
                📞 Call (702) 222-1964
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📖 Seller Guide</h3>
              <p className="text-gray-600 mb-4">Complete step-by-step guide to selling in Las Vegas</p>
              <Link href="/seller-guide" className="text-green-600 font-semibold hover:text-green-700">
                Read Guide →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 Home Value</h3>
              <p className="text-gray-600 mb-4">Get instant valuation of your Las Vegas property</p>
              <Link href="/home-value" className="text-green-600 font-semibold hover:text-green-700">
                Check Value →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Market Report</h3>
              <p className="text-gray-600 mb-4">Latest Las Vegas real estate market insights</p>
              <Link href="/market-insights" className="text-green-600 font-semibold hover:text-green-700">
                View Report →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Your Results?</h2>
            <p className="text-green-100 mb-6">
              Dr. Jan Duffy is here to help you maximize your home's value in Las Vegas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:702-222-1964"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
              >
                📞 Call (702) 222-1964
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
