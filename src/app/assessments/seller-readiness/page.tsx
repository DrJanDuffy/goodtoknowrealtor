import { Metadata } from 'next';
import { SellerReadinessQuiz } from '@/components/assessments/SellerReadinessQuiz';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vegas Home Seller Readiness Assessment | Dr. Janet Duffy',
  description: 'Take our free 3-minute assessment to discover if you\'re ready to sell your Las Vegas home. Get personalized insights and next steps from Premier Good To Know REALTOR® Dr. Janet Duffy.',
  keywords: 'Las Vegas home seller assessment, am I ready to sell my home, Vegas real estate selling quiz, home selling Las Vegas, Dr. Janet Duffy',
  openGraph: {
    title: 'Vegas Home Seller Readiness Assessment | Dr. Janet Duffy',
    description: 'Take our free 3-minute assessment to discover if you\'re ready to sell your Las Vegas home. Get personalized insights and next steps.',
    images: ['/images/seller-assessment-og.jpg'],
  },
};

export default function SellerReadinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hook */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Feeling frustrated that your Vegas home isn't selling even though the market is hot?
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8">
                Answer 15 questions to find out why you're experiencing this frustration and what to do about it
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Take this assessment to measure and improve:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Market Timing</h3>
                    <p className="text-green-100">Current market conditions, seasonal trends, competition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Home Preparation</h3>
                    <p className="text-green-100">Staging, repairs, curb appeal, pricing strategy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Financial Readiness</h3>
                    <p className="text-green-100">Equity, closing costs, tax implications, next home</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-green-100 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-green-100 text-sm">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-green-100 text-sm">List Price Achieved</div>
                </div>
              </div>
              <p className="text-green-100">
                <strong>Dr. Janet Duffy</strong>, Premier Good To Know REALTOR®, has helped hundreds of families 
                maximize their home's value in Las Vegas. Her strategic approach helps sellers achieve 
                98% of list price on average.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl inline-block shadow-lg">
                Start the Seller Assessment
              </div>
              <div className="text-green-100 space-y-1">
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
            <SellerReadinessQuiz />
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
                <p className="text-gray-600 text-sm">Results tailored to your specific situation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant</h3>
                <p className="text-gray-600 text-sm">Get your results immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600 text-sm">Your information is safe and private</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
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
