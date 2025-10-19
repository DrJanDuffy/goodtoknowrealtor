import { Metadata } from 'next';
import { BuyerReadinessQuiz } from '@/components/assessments/BuyerReadinessQuiz';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vegas Home Buyer Readiness Assessment | Dr. Janet Duffy',
  description: 'Take our free 3-minute assessment to discover if you\'re ready to buy a home in Las Vegas. Get personalized insights and next steps from Premier Good To Know REALTOR® Dr. Janet Duffy.',
  keywords: 'Las Vegas home buyer assessment, am I ready to buy a home, Vegas real estate quiz, first time home buyer Las Vegas, Dr. Janet Duffy',
  openGraph: {
    title: 'Vegas Home Buyer Readiness Assessment | Dr. Janet Duffy',
    description: 'Take our free 3-minute assessment to discover if you\'re ready to buy a home in Las Vegas. Get personalized insights and next steps.',
    images: ['/images/buyer-assessment-og.jpg'],
  },
};

export default function BuyerReadinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hook */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Are You Ready to Buy Your Dream Home in Las Vegas?
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Answer 15 questions to find out your readiness score and what to do next
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Take this assessment to measure and improve:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Financial Readiness</h3>
                    <p className="text-blue-100">Credit score, down payment, budget clarity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Market Knowledge</h3>
                    <p className="text-blue-100">Vegas trends, neighborhoods, timing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lifestyle Fit</h3>
                    <p className="text-blue-100">Pools, HOAs, desert living</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100 text-sm">Families Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-blue-100 text-sm">Underestimate Costs</div>
                </div>
              </div>
              <p className="text-blue-100">
                <strong>Dr. Janet Duffy</strong>, Premier Good To Know REALTOR®, has helped hundreds of families 
                navigate the Las Vegas real estate market. Recent research shows 85% of first-time buyers 
                underestimate costs by 15-20% - this assessment helps you avoid that mistake.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl inline-block shadow-lg">
                Start the Assessment
              </div>
              <div className="text-blue-100 space-y-1">
                <p>✓ Only 3 minutes to complete</p>
                <p>✓ Completely free</p>
                <p>✓ Get immediate personalized recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Component */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BuyerReadinessQuiz />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Take This Assessment?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
                <p className="text-gray-600 text-sm">Results tailored to your specific situation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant</h3>
                <p className="text-gray-600 text-sm">Get your results immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600 text-sm">Your information is safe and private</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Dr. Janet Duffy is here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
