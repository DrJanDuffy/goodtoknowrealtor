import { Metadata } from 'next';
import { AssessmentForm } from '@/components/ui/AssessmentForm';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Buyer Readiness Assessment | Dr. Jan Duffy - Free Las Vegas Home Buyer Quiz',
  description: 'Take our free buyer readiness assessment to determine if you\'re ready to buy a home in Las Vegas. Get personalized recommendations from Dr. Jan Duffy.',
  keywords: ['buyer readiness assessment', 'Las Vegas home buyer quiz', 'first time buyer assessment', 'home buying readiness', 'Dr. Jan Duffy buyer assessment'],
  url: '/assessments/buyer-readiness',
  image: '/images/buyer-assessment-og.jpg',
});

export default function BuyerReadinessAssessmentPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assessments', url: '/assessments' },
    { name: 'Buyer Readiness', url: '/assessments/buyer-readiness' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='container py-4'>
            <Breadcrumbs />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm font-semibold text-green-200 mb-4">FREE ASSESSMENT</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Buyer Readiness Assessment
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed mb-8">
                Discover if you're ready to buy a home in Las Vegas and get personalized recommendations
              </p>
              <div className="flex items-center justify-center text-green-200">
                <span className="text-sm">By Dr. Jan Duffy • Top 1% Las Vegas Agent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-2xl mx-auto">
            <AssessmentForm type="buyer" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete this assessment to receive personalized insights and recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Readiness Score</h3>
                <p className="text-gray-600">Get a comprehensive score based on your financial readiness, timeline, and preferences</p>
              </div>
              
              <div className="text-center card p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Recommendations</h3>
                <p className="text-gray-600">Receive specific advice tailored to your situation and goals</p>
              </div>
              
              <div className="text-center card p-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Action Plan</h3>
                <p className="text-gray-600">Get a step-by-step plan to prepare for your home purchase</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Take the assessment above to get personalized guidance from Dr. Jan Duffy, Las Vegas's Top 1% real estate agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-222-1964"
                className="btn btn-primary"
              >
                Call (702) 222-1964
              </a>
              <a
                href="mailto:jan@goodtoknowrealtor.com"
                className="btn btn-outline"
              >
                Email Dr. Jan Duffy
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}