import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/Home/HeroSection';
import { HeroTestimonialCarousel } from '@/components/Home/HeroTestimonialCarousel';
import { WhyBerkshireSection } from '@/components/Home/WhyBerkshireSection';
import { MarketSnapshotSection } from '@/components/Home/MarketSnapshotSection';
import { NeighborhoodsSection } from '@/components/Home/NeighborhoodsSection';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { TrustBadges } from '@/components/Globals/TrustBadges/TrustBadges';
import { TransformationSection } from '@/components/Home/TransformationSection';
import { HomeFAQSection } from '@/components/Home/HomeFAQSection';
import { ContactCTA } from '@/components/Home/ContactCTA';
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

      {/* 1. Hero */}
      <HeroSection />
      <HeroTestimonialCarousel />

      {/* 2. Why Choose Berkshire Hathaway HomeServices */}
      <WhyBerkshireSection />

      {/* 3. Market snapshot */}
      <MarketSnapshotSection />

      {/* 4. Featured Properties */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-3'>
              Featured Properties
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
              Discover exceptional homes in Las Vegas and Henderson.
            </p>
            <Link
              href='/listings'
              className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors'
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Neighborhoods We Serve */}
      <NeighborhoodsSection />

      {/* 6. Why Choose Us (6 benefits) */}
      <TrustBadges />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Transformation / persona stories */}
      <TransformationSection />

      {/* Home Value & Assessments teasers */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-3'>
              Track Your Home&apos;s Value
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
              Get instant valuations, equity tracking, and buyer alerts for Las Vegas properties.
            </p>
            <Link
              href='/home-value'
              className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors'
            >
              Get Home Value & Tools
            </Link>
          </div>
        </div>
      </section>
      <section className='py-12 bg-gradient-to-br from-amber-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-3'>
              Find Out If You&apos;re Ready
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
              Free 3-minute buyer or seller readiness assessments—personalized next steps for Las Vegas.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/assessments/buyer-readiness'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-amber-700 transition-colors'
              >
                Buyer Assessment
              </Link>
              <Link
                href='/assessments/seller-readiness'
                className='inline-flex items-center justify-center gap-2 rounded-xl border-2 border-amber-600 px-6 py-3 font-semibold text-amber-700 hover:bg-amber-50 transition-colors'
              >
                Seller Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
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

      {/* Services */}
      <section className='py-12 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-2'>
              Premier Luxury Services
            </h2>
            <p className='text-lg text-gray-700'>
              White-glove concierge real estate for discerning clients.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/luxury' className='rounded-xl bg-white px-6 py-3 font-semibold text-amber-700 shadow-md border border-amber-100 hover:shadow-lg transition-shadow'>
              Luxury Properties
            </Link>
            <Link href='/services' className='rounded-xl bg-white px-6 py-3 font-semibold text-amber-700 shadow-md border border-amber-100 hover:shadow-lg transition-shadow'>
              All Services
            </Link>
            <Link href='/contact' className='rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-amber-700 transition-colors'>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFAQSection />

      {/* Final CTA - Realtor style */}
      <section className='py-16 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-4'>
            Ready to Work with Berkshire Hathaway HomeServices?
          </h2>
          <p className='text-xl text-white/95 mb-8 font-medium'>
            Whether you&apos;re buying, selling, or investing in Las Vegas real estate, Dr. Jan Duffy is here to help.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl'
            >
              Call (702) 222-1964
            </Link>
            <Link
              href='/contact'
              className='bg-amber-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors shadow-xl border-2 border-amber-800'
            >
              Send a Message
            </Link>
          </div>
          <p className='text-white/95 font-medium'>
            Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties
          </p>
          <div className='text-white/95 font-medium'>
            Concierge service available 7 days • Confidential &amp; discreet transactions
          </div>
        </div>
      </section>

      {/* Contact CTA - Final conversion */}
      <ContactCTA />
    </>
  );
}