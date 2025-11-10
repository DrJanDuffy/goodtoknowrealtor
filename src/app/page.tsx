import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/Home/HeroSection';
import { HeroTestimonialCarousel } from '@/components/Home/HeroTestimonialCarousel';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { TrustBadges } from '@/components/Globals/TrustBadges/TrustBadges';
import { TransformationSection } from '@/components/Home/TransformationSection';
import { ContactCTA } from '@/components/Home/ContactCTA';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';
import { HomebotHomeowner } from '@/components/Home/HomebotHomeowner';
import { HomebotBuyers } from '@/components/Home/HomebotBuyers';
import { RealScoutListings } from '@/components/Home/RealScoutListings';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateReviewSchema, generateServiceSchema } from '@/lib/seo';
import { HomeIcon, MoneyIcon, CrownIcon } from '@/components/ui/Icons';

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
      
      {/* Hero Testimonial Carousel - Section 2 (right after hero) */}
      <HeroTestimonialCarousel />
      
      <TrustBadges />

      {/* Full Testimonials Section - Section 3 */}
      <TestimonialsSection />

      {/* Transformation Section - The Real Difference */}
      <TransformationSection />

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
      <section className='py-16 bg-gradient-to-br from-amber-50 to-yellow-50'>
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
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <HomeIcon className="text-amber-600" size={28} />
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
                  className='block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md'
                >
                  Start Buyer Assessment
                </Link>
              </div>
            </div>

            {/* Seller Assessment Card */}
            <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <MoneyIcon className="text-green-600" size={28} />
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
              <div className='text-5xl font-bold text-amber-600 mb-2'>500+</div>
              <p className='text-lg text-gray-700'>Happy Clients</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-amber-600 mb-2'>$127M+</div>
              <p className='text-lg text-gray-700'>Sales Volume</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-amber-600 mb-2'>20+</div>
              <p className='text-lg text-gray-700'>Years Experience</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-amber-600 mb-2'>98%</div>
              <p className='text-lg text-gray-700'>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Live MLS Data */}
      <RealScoutListings />

      {/* Services Overview - Luxury Focus */}
      <section className='py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Premier Luxury Services
            </h2>
            <p className='text-xl text-gray-700 font-medium'>
              White-glove concierge real estate services for discerning clients.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-amber-100'>
              <div className='flex justify-center mb-6'>
                <CrownIcon className='text-amber-600' size={48} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Luxury Home Buying</h3>
              <p className='text-gray-600 mb-6'>
                Exclusive access to prestigious properties in Summerlin, The Ridges, Lake Las Vegas, and gated communities.
              </p>
              <Link href='/luxury' className='text-amber-600 hover:text-amber-700 font-semibold'>
                Explore Properties →
              </Link>
            </div>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-amber-100'>
              <div className='flex justify-center mb-6'>
                <MoneyIcon className='text-amber-600' size={48} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Luxury Home Selling</h3>
              <p className='text-gray-600 mb-6'>
                Discreet marketing, luxury staging, and strategic pricing to maximize value for high-end properties.
              </p>
              <Link href='/luxury' className='text-amber-600 hover:text-amber-700 font-semibold'>
                Learn More →
              </Link>
            </div>
            <div className='bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-amber-100'>
              <div className='flex justify-center mb-6'>
                <svg className='w-12 h-12 text-amber-600' fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Concierge Services</h3>
              <p className='text-gray-600 mb-6'>
                Private showings, confidential transactions, property management, and lifestyle concierge support.
              </p>
              <Link href='/contact' className='text-amber-600 hover:text-amber-700 font-semibold'>
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Luxury Focus */}
      <section className='py-16 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-4'>
            Experience Premier Luxury Real Estate
          </h2>
          <p className='text-xl text-white/95 mb-8 font-medium'>
            Schedule your private consultation to discover exclusive properties and personalized service.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link
                  href='/luxury'
                  className='bg-white text-amber-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl'
                >
                  View Luxury Properties
                </Link>
                <Link
                  href='/contact'
                  className='bg-amber-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-xl border-2 border-amber-800'
                >
                  Schedule Private Consultation
                </Link>
          </div>
          
          <div className='text-white/95 space-y-2 font-medium'>
            <div className='flex items-center justify-center'>
              Call (702) 222-1964
            </div>
            <div className='flex items-center justify-center'>
              Concierge Service Available 7 Days
            </div>
            <div className='flex items-center justify-center'>
              Confidential & Discreet Transactions
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Final conversion */}
      <ContactCTA />
    </>
  );
}