import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/Home/HeroSection';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { ContactCTA } from '@/components/Home/ContactCTA';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';
import { HomebotHomeowner } from '@/components/Home/HomebotHomeowner';
import { HomebotBuyers } from '@/components/Home/HomebotBuyers';
import { RealScoutListings } from '@/components/Home/RealScoutListings';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateReviewSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  url: '/',
  image: '/images/dr-janet-duffy-homepage-og.jpg',
});

export default function HomePage() {
  // Generate structured data for homepage
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  const faqs = generateFAQSchema([
    {
      question: 'Who is Dr. Jan Duffy?',
      answer: 'Dr. Jan Duffy is a Top 1% Las Vegas real estate agent with over 20 years of experience and $127M+ in sales volume. She specializes in luxury properties, investment properties, and first-time home buyers.',
    },
    {
      question: 'What areas does Dr. Jan Duffy serve?',
      answer: 'Dr. Jan Duffy serves the greater Las Vegas area including Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, and Green Valley. She has extensive knowledge of all Las Vegas neighborhoods.',
    },
    {
      question: 'How can I contact Dr. Jan Duffy?',
      answer: 'You can contact Dr. Jan Duffy by calling (702) 222-1964 or visiting the contact page on this website. She offers personalized consultations for all your Las Vegas real estate needs.',
    },
    {
      question: 'What services does Dr. Jan Duffy offer?',
      answer: 'Dr. Jan Duffy offers comprehensive real estate services including buying homes, selling homes, luxury real estate, investment properties, home valuations, and real estate consulting throughout Las Vegas.',
    },
  ]);

  const reviews = generateReviewSchema([
    {
      author: 'Sarah & Michael Chen',
      rating: 5,
      reviewBody: 'Dr. Duffy\'s expertise and attention to detail made our home buying process seamless. She found us the perfect home in Summerlin and negotiated an incredible deal.',
      datePublished: '2024-01-15',
      location: 'Summerlin, Las Vegas',
      community: 'Summerlin',
    },
    {
      author: 'Jennifer & Luis Rodriguez',
      rating: 5,
      reviewBody: 'Professional, responsive, and results-driven. Dr. Duffy helped us navigate a complex sale with multiple offers and achieved the best possible outcome.',
      datePublished: '2024-02-20',
      location: 'Henderson, Nevada',
      community: 'Henderson',
    },
    {
      author: 'David Thompson',
      rating: 5,
      reviewBody: 'As a first-time home buyer, I was nervous about the process. Dr. Duffy guided me through every step and found me an amazing investment property in North Las Vegas.',
      datePublished: '2024-03-10',
      location: 'North Las Vegas, Nevada',
      community: 'North Las Vegas',
    },
  ]);

  const services = generateServiceSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqs),
        }}
      />
      {reviews.map((review, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(review),
          }}
        />
      ))}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(services),
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof - Move testimonials up early */}
      <TestimonialsSection />

      {/* Home Value & Tracking Widgets */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
                Track Your Home's Value
              </h2>
              <p className='text-xl text-gray-600'>
                Get instant valuations and ongoing equity tracking for your Las Vegas property
              </p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
              {/* Home Value Widget */}
              <div className='bg-gray-50 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Instant Home Valuation</h3>
                <p className='text-gray-600 mb-6'>
                  Get an immediate estimate of your home's current market value
                </p>
                <HomeValueWidget />
              </div>
              
              {/* Homebot Homeowner */}
              <div className='bg-gray-50 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Monthly Equity Reports</h3>
                <p className='text-gray-600 mb-6'>
                  Track your home's equity growth with automated monthly updates
                </p>
                <HomebotHomeowner />
              </div>
            </div>
            
            {/* Homebot Buyers */}
            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>Dream Home Tracker</h3>
              <p className='text-gray-600 mb-6 text-center max-w-2xl mx-auto'>
                For buyers: Track your favorite neighborhoods and get alerts when homes matching your criteria become available
              </p>
              <div className='max-w-md mx-auto'>
                <HomebotBuyers />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Lead Generation - High engagement */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center mb-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Find Out If You're Ready
            </h2>
            <p className='text-xl text-gray-600'>
              Take our free 3-minute assessment to discover your readiness level for buying or selling in Las Vegas.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
            {/* Buyer Assessment Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-blue-600 text-2xl'>🏠</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Buyer Readiness Assessment</h3>
                <p className='text-gray-600 mb-6'>
                  Discover your readiness to buy a home in Las Vegas. Get personalized insights on financing, market knowledge, and next steps.
                </p>
                <div className='inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                  Only 3 minutes
                </div>
                <Link
                  href='/assessments/buyer-readiness'
                  className='block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md'
                >
                  Start Buyer Assessment
                </Link>
              </div>
            </div>

            {/* Seller Assessment Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-green-600 text-2xl'>💰</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Seller Readiness Assessment</h3>
                <p className='text-gray-600 mb-6'>
                  Find out if you're ready to sell your Las Vegas home. Get insights on market timing, preparation needs, and pricing strategy.
                </p>
                <div className='inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                  Only 3 minutes
                </div>
                <Link
                  href='/assessments/seller-readiness'
                  className='block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md'
                >
                  Start Seller Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Build credibility */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-5xl font-bold text-blue-600 mb-2'>500+</div>
              <p className='text-lg text-gray-700'>Happy Clients</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-blue-600 mb-2'>$127M+</div>
              <p className='text-lg text-gray-700'>Sales Volume</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-blue-600 mb-2'>20+</div>
              <p className='text-lg text-gray-700'>Years Experience</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-blue-600 mb-2'>98%</div>
              <p className='text-lg text-gray-700'>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Live MLS Data */}
      <RealScoutListings />

      {/* Services Overview - Educational value */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
              How We Help You
            </h2>
            <p className='text-xl text-gray-600'>
              Comprehensive real estate services tailored to your needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300'>
              <span className='text-blue-600 text-4xl mb-6 block'>🏠</span>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Buying Homes</h3>
              <p className='text-gray-600 mb-6'>
                Expert guidance for first-time buyers, luxury homes, and investment properties.
              </p>
              <Link href='/buying' className='text-blue-600 hover:text-blue-700 font-semibold'>
                Learn More →
              </Link>
            </div>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300'>
              <span className='text-green-600 text-4xl mb-6 block'>💰</span>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Selling Homes</h3>
              <p className='text-gray-600 mb-6'>
                Maximize your sale price with strategic marketing and negotiation.
              </p>
              <Link href='/selling' className='text-green-600 hover:text-green-700 font-semibold'>
                Learn More →
              </Link>
            </div>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300'>
              <span className='text-purple-600 text-4xl mb-6 block'>📈</span>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Investing in Real Estate</h3>
              <p className='text-gray-600 mb-6'>
                Identify high-potential investment opportunities in the Las Vegas market.
              </p>
              <Link href='/investing' className='text-purple-600 hover:text-purple-700 font-semibold'>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Strong close */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-4'>
            Ready to Make Your Move?
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Take our free assessments to discover your readiness level.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link
                  href='/assessments/buyer-readiness'
                  className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md'
                >
                  Buyer Assessment
                </Link>
                <Link
                  href='/assessments/seller-readiness'
                  className='bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md'
                >
                  Seller Assessment
                </Link>
          </div>
          
          <div className='text-blue-100 space-y-2'>
            <div className='flex items-center justify-center'>
              Call (702) 222-1964
            </div>
            <div className='flex items-center justify-center'>
              Text (702) 222-1964
            </div>
            <div className='flex items-center justify-center'>
              Available 7 days a week
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Final conversion */}
      <ContactCTA />
    </>
  );
}