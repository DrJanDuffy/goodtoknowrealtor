import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'First-Time Home Buyer Guide Las Vegas 2025 | Dr. Jan Duffy Expert Tips',
  description: 'Complete first-time home buyer guide for Las Vegas. Expert tips from Dr. Jan Duffy on financing, neighborhoods, and the buying process.',
  keywords: ['first time home buyer Las Vegas', 'Las Vegas home buying guide', 'first time buyer tips', 'Las Vegas real estate guide', 'Dr. Jan Duffy buyer guide'],
  url: '/blog/first-time-home-buyer-guide-las-vegas-2025',
  image: '/images/first-time-buyer-guide-2025-og.jpg',
});

export default function FirstTimeBuyerGuide2025Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Buyer Advice', url: '/blog/category/buyer-advice' },
    { name: 'First-Time Buyer Guide 2025', url: '/blog/first-time-home-buyer-guide-las-vegas-2025' },
  ]);

  const steps = [
    {
      number: 1,
      title: 'Assess Your Financial Readiness',
      description: 'Evaluate your credit score, debt-to-income ratio, and savings for down payment and closing costs.',
      details: [
        'Check your credit score (aim for 620+)',
        'Calculate debt-to-income ratio (under 43%)',
        'Save for down payment (3-20% depending on loan)',
        'Budget for closing costs (2-5% of home price)',
        'Build emergency fund (3-6 months expenses)'
      ],
      timeline: '1-3 months',
    },
    {
      number: 2,
      title: 'Get Pre-Approved for a Mortgage',
      description: 'Obtain pre-approval to understand your budget and strengthen your offers.',
      details: [
        'Compare lenders and loan programs',
        'Gather required documentation',
        'Complete pre-approval application',
        'Review loan estimates',
        'Lock in interest rate if favorable'
      ],
      timeline: '1-2 weeks',
    },
    {
      number: 3,
      title: 'Find a Knowledgeable Real Estate Agent',
      description: 'Work with an experienced agent who understands first-time buyer needs.',
      details: [
        'Research agent credentials and experience',
        'Interview multiple agents',
        'Ask about first-time buyer programs',
        'Review client testimonials',
        'Ensure good communication and availability'
      ],
      timeline: '1-2 weeks',
    },
    {
      number: 4,
      title: 'Define Your Home Criteria',
      description: 'Create a clear list of must-haves, nice-to-haves, and deal-breakers.',
      details: [
        'Determine preferred neighborhoods',
        'List required features and amenities',
        'Set realistic budget range',
        'Consider future needs and resale value',
        'Prioritize location vs. features'
      ],
      timeline: '1 week',
    },
    {
      number: 5,
      title: 'Start Your Home Search',
      description: 'Begin viewing properties that meet your criteria and budget.',
      details: [
        'Set up MLS alerts for new listings',
        'Schedule property viewings',
        'Take detailed notes and photos',
        'Compare properties objectively',
        'Consider market conditions and timing'
      ],
      timeline: '2-8 weeks',
    },
    {
      number: 6,
      title: 'Make an Offer and Negotiate',
      description: 'Submit a competitive offer and negotiate terms with seller.',
      details: [
        'Research comparable sales',
        'Work with agent on offer strategy',
        'Include appropriate contingencies',
        'Be prepared for counter-offers',
        'Stay within your budget limits'
      ],
      timeline: '1-3 days',
    },
    {
      number: 7,
      title: 'Complete Due Diligence',
      description: 'Conduct inspections and verify all property details.',
      details: [
        'Schedule professional home inspection',
        'Review inspection report thoroughly',
        'Request repairs or credits if needed',
        'Verify property disclosures',
        'Confirm financing and appraisal'
      ],
      timeline: '1-2 weeks',
    },
    {
      number: 8,
      title: 'Close on Your New Home',
      description: 'Complete final paperwork and take ownership of your home.',
      details: [
        'Review closing documents',
        'Bring required funds to closing',
        'Complete final walkthrough',
        'Sign all legal documents',
        'Receive keys and ownership'
      ],
      timeline: '1 day',
    },
  ];

  const financingOptions = [
    {
      name: 'Conventional Loan',
      downPayment: '5-20%',
      creditScore: '620+',
      pros: ['Lower PMI costs', 'Flexible terms', 'No income limits'],
      cons: ['Higher down payment', 'Stricter requirements'],
      bestFor: 'Buyers with good credit and savings',
    },
    {
      name: 'FHA Loan',
      downPayment: '3.5%',
      creditScore: '580+',
      pros: ['Low down payment', 'Flexible credit requirements', 'Gift funds allowed'],
      cons: ['PMI for life of loan', 'Property restrictions'],
      bestFor: 'First-time buyers with limited savings',
    },
    {
      name: 'VA Loan',
      downPayment: '0%',
      creditScore: '580+',
      pros: ['No down payment', 'No PMI', 'Lower closing costs'],
      cons: ['Military service required', 'Funding fee'],
      bestFor: 'Active military and veterans',
    },
    {
      name: 'USDA Loan',
      downPayment: '0%',
      creditScore: '640+',
      pros: ['No down payment', 'Low interest rates', 'Rural areas'],
      cons: ['Income limits', 'Geographic restrictions'],
      bestFor: 'Buyers in rural areas with moderate income',
    },
  ];

  const neighborhoods = [
    {
      name: 'North Las Vegas',
      priceRange: '$300K - $500K',
      highlights: ['New construction', 'Affordable entry point', 'Growing job market'],
      schools: 'Good',
      commute: '15-25 minutes to Strip',
      bestFor: 'First-time buyers, young families',
    },
    {
      name: 'Henderson',
      priceRange: '$400K - $700K',
      highlights: ['Family-friendly', 'Top-rated schools', 'Parks and recreation'],
      schools: 'Excellent',
      commute: '20-30 minutes to Strip',
      bestFor: 'Families with children',
    },
    {
      name: 'Summerlin',
      priceRange: '$500K - $1M+',
      highlights: ['Master-planned', 'Luxury amenities', 'Golf courses'],
      schools: 'Excellent',
      commute: '25-35 minutes to Strip',
      bestFor: 'Upscale buyers, professionals',
    },
    {
      name: 'Green Valley',
      priceRange: '$350K - $600K',
      highlights: ['Established community', 'Shopping centers', 'Good schools'],
      schools: 'Good',
      commute: '20-30 minutes to Strip',
      bestFor: 'Established families, professionals',
    },
  ];

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
              <div className="text-sm font-semibold text-green-200 mb-4">BUYER ADVICE • JANUARY 2025</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Complete First-Time Home Buyer Guide: Las Vegas 2025
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed mb-8">
                Everything you need to know about buying your first home in Las Vegas, from financing to closing
              </p>
              <div className="flex items-center justify-center text-green-200">
                <span className="text-sm">By Dr. Jan Duffy • Top 1% Las Vegas Agent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Buying your first home in Las Vegas is an exciting milestone, but it can also feel overwhelming. With 20+ years of experience helping first-time buyers achieve their homeownership dreams, I've created this comprehensive guide to walk you through every step of the process.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Las Vegas offers incredible opportunities for first-time buyers, from affordable starter homes to luxury properties. The key to success is understanding the process, being prepared, and working with experienced professionals who can guide you through this important decision.
                </p>
              </div>

              {/* Quick Start Checklist */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start Checklist</h2>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Before You Start Looking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Check your credit score</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Calculate your budget</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Save for down payment</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Get pre-approved</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Find a real estate agent</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Research neighborhoods</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Define your criteria</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">Start your search</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8-Step Home Buying Process</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Follow this proven process to navigate your first home purchase successfully:
                </p>
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700 mb-4">{step.description}</p>
                          <div className="text-sm text-green-600 font-semibold mb-4">Timeline: {step.timeline}</div>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-16">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-3 text-sm">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financing Options */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Options for First-Time Buyers</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding your financing options is crucial for first-time buyers. Here are the most common loan programs:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {financingOptions.map((option, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{option.name}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Down Payment:</span>
                          <div className="font-semibold text-gray-900">{option.downPayment}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Credit Score:</span>
                          <div className="font-semibold text-gray-900">{option.creditScore}</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-green-600 mb-2">Pros:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {option.pros.map((pro, idx) => (
                            <li key={idx}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-red-600 mb-2">Cons:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {option.cons.map((con, idx) => (
                            <li key={idx}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Best for:</span> {option.bestFor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Las Vegas Neighborhoods */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Las Vegas Neighborhoods for First-Time Buyers</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Each Las Vegas neighborhood offers unique advantages for first-time buyers. Consider these factors when choosing your location:
                </p>
                
                <div className="space-y-6">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{neighborhood.name}</h3>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">{neighborhood.priceRange}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Schools:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.schools}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Commute to Strip:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.commute}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Best For:</span>
                          <div className="font-semibold text-gray-900">{neighborhood.bestFor}</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {neighborhood.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common First-Time Buyer Mistakes to Avoid</h2>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Don't Make These Mistakes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Skipping Pre-Approval</h4>
                        <p className="text-gray-700">Without pre-approval, you won't know your true budget and may miss out on properties.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Not Getting Pre-Approved</h4>
                        <p className="text-gray-700">Pre-approval strengthens your offers and speeds up the process.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ignoring Additional Costs</h4>
                        <p className="text-gray-700">Factor in property taxes, insurance, HOA fees, and maintenance costs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Skipping Home Inspection</h4>
                        <p className="text-gray-700">A professional inspection can save you thousands in unexpected repairs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Making Major Purchases</h4>
                        <p className="text-gray-700">Avoid large purchases or credit applications during the home buying process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* First-Time Buyer Programs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nevada First-Time Buyer Programs</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available Assistance Programs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Nevada Housing Division</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Down payment assistance up to $15,000</li>
                        <li>• Low interest rates</li>
                        <li>• Income limits apply</li>
                        <li>• First-time buyer requirement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Las Vegas Down Payment Assistance</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Up to $10,000 in assistance</li>
                        <li>• Must be Las Vegas resident</li>
                        <li>• Income and purchase price limits</li>
                        <li>• Forgivable after 5 years</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Path to Homeownership</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Buying your first home in Las Vegas is an achievable goal with proper preparation and guidance. The key is to start early, stay organized, and work with experienced professionals who understand the local market.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Remember, this is likely the largest financial decision you'll make, so take your time, ask questions, and don't hesitate to seek expert advice. With the right approach, you'll be holding the keys to your new Las Vegas home before you know it.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from Dr. Jan Duffy, Las Vegas's Top 1% real estate agent. Take our free buyer readiness assessment to determine your next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessments/buyer-readiness"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Take Buyer Assessment
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Call (702) 222-1964
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

