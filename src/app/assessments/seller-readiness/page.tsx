import { Metadata } from 'next';
import { SellerReadinessQuiz } from '@/components/assessments/SellerReadinessQuiz';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vegas Home Seller Readiness Assessment | Dr. Jan Duffy',
  description: 'Take our free 3-minute assessment to discover if you\'re ready to sell your Las Vegas home. Get personalized insights and next steps from Premier Good To Know REALTOR® Dr. Jan Duffy.',
  keywords: 'Las Vegas home seller assessment, am I ready to sell my home, Vegas real estate selling quiz, home selling Las Vegas, Dr. Jan Duffy',
  openGraph: {
    title: 'Vegas Home Seller Readiness Assessment | Dr. Jan Duffy',
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
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Market Timing</h3>
                    <p className="text-green-100">Current market conditions, seasonal trends, competition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Home Preparation</h3>
                    <p className="text-green-100">Staging, repairs, curb appeal, pricing strategy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💰</span>
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
                <strong>Dr. Jan Duffy</strong>, Premier Good To Know REALTOR®, has helped hundreds of families 
                maximize their home's value in Las Vegas. Her strategic approach helps sellers achieve 
                98% of list price on average.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="btn btn-primary inline-block">
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
                  <span className="text-green-600 text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
                <p className="text-gray-600 text-sm">Results tailored to your specific situation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant</h3>
                <p className="text-gray-600 text-sm">Get your results immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600 text-sm">Your information is safe and private</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📞</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Dr. Jan Duffy is here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
