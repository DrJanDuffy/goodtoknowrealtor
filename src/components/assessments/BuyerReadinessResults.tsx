'use client';

import Link from 'next/link';

interface BuyerReadinessResultsProps {
  score: number;
  resultsData: {
    level: string;
    color: string;
    title: string;
    message: string;
    emoji: string;
    nextStepTitle: string;
    nextStepDescription: string;
    ctaText: string;
    ctaLink: string;
    ctaPhone: boolean;
    urgent?: boolean;
  };
  insights: string[];
  answers: Record<string, string>;
}

export function BuyerReadinessResults({ 
  score, 
  resultsData, 
  insights, 
  answers 
}: BuyerReadinessResultsProps) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{resultsData.emoji}</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Readiness Score</h2>
              
              {/* Speedometer */}
              <div className="relative w-48 h-24 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  {/* Background arc */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  
                  {/* Progress arc */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke={
                      score >= 71 ? '#10b981' : 
                      score >= 41 ? '#f59e0b' : '#ef4444'
                    }
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                    className="transition-all duration-1000"
                  />
                  
                  {/* Score text */}
                  <text
                    x="100"
                    y="70"
                    textAnchor="middle"
                    className={`text-4xl font-bold ${getScoreColor()}`}
                  >
                    {score}%
                  </text>
                </svg>
              </div>

              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getScoreBgColor()} ${getScoreColor()}`}>
                {score >= 71 ? 'Ready to Buy!' : score >= 41 ? 'Getting There' : 'Building Foundation'}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Personalized Insights</h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
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
              {resultsData.ctaPhone ? (
                <Link
                  href="tel:702-222-1964"
                  className={`flex-1 text-center px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 ${
                    resultsData.urgent
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                  }`}
                >
                  📞 {resultsData.ctaText}
                </Link>
              ) : (
                <Link
                  href={resultsData.ctaLink}
                  className="flex-1 text-center px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200"
                >
                  {resultsData.ctaText}
                </Link>
              )}
              
              <Link
                href="/contact"
                className="flex-1 text-center px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Get More Information
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📖 Buyer Guide</h3>
              <p className="text-gray-600 mb-4">Complete step-by-step guide to buying in Las Vegas</p>
              <Link href="/buyer-guide" className="text-blue-600 font-semibold hover:text-blue-700">
                Read Guide →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 Home Value</h3>
              <p className="text-gray-600 mb-4">Get instant valuation of any Las Vegas property</p>
              <Link href="/home-value" className="text-blue-600 font-semibold hover:text-blue-700">
                Check Value →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🗺️ Neighborhoods</h3>
              <p className="text-gray-600 mb-4">Explore Las Vegas communities and find your perfect match</p>
              <Link href="/communities" className="text-blue-600 font-semibold hover:text-blue-700">
                Explore Areas →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Your Results?</h2>
            <p className="text-blue-100 mb-6">
              Dr. Janet Duffy is here to help you navigate the Las Vegas real estate market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:702-222-1964"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                📞 Call (702) 222-1964
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
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
