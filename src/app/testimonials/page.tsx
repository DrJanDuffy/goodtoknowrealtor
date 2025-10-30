import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = generatePageMetadata({
  title: 'Client Testimonials | Dr. Janet Duffy Group',
  description: 'Read real testimonials from satisfied clients of Dr. Janet Duffy Group. See why we are the top choice for Las Vegas real estate.',
  keywords: ['testimonials', 'client reviews', 'Las Vegas real estate', 'Dr. Janet Duffy'],
  url: '/testimonials',
  image: '/images/testimonials-og.jpg',
});

export default function TestimonialsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ]);

  const testimonials = [
    {
      id: 1,
      quote: "Dr. Duffy made buying our first home in Las Vegas so seamless that it felt like I was working with a family friend. Her knowledge of the market and attention to detail helped us find the perfect home in Summerlin.",
      author: "Sarah & Mike Johnson",
      location: "First-Time Homebuyers",
      community: "Summerlin, Las Vegas",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Home Buying"
    },
    {
      id: 2,
      quote: "Professional, responsive, and results-driven. Dr. Duffy helped us navigate a complex sale with multiple offers and achieved the best possible outcome. We couldn't be happier with the results.",
      author: "Jennifer & Luis Rodriguez",
      location: "Home Sellers",
      community: "Henderson, Nevada",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Home Selling"
    },
    {
      id: 3,
      quote: "As a first-time home buyer, I was nervous about the process. Dr. Duffy guided me through every step and found me an amazing investment property in North Las Vegas. Her expertise is unmatched.",
      author: "David Thompson",
      location: "Investment Buyer",
      community: "North Las Vegas, Nevada",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Investment Properties"
    },
    {
      id: 4,
      quote: "Dr. Duffy's market knowledge and negotiation skills helped us secure our dream home in Green Valley. She went above and beyond to ensure we got the best deal possible.",
      author: "Maria & Carlos Garcia",
      location: "Relocating Family",
      community: "Green Valley, Henderson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Relocation Services"
    },
    {
      id: 5,
      quote: "We sold our home in just 22 days for full asking price thanks to Dr. Duffy's marketing strategy and professional approach. She made the entire process stress-free.",
      author: "Robert & Linda Chen",
      location: "Retirees",
      community: "Las Vegas, Nevada",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Home Selling"
    },
    {
      id: 6,
      quote: "Dr. Duffy helped us find the perfect luxury home in Summerlin. Her attention to detail and understanding of our needs made all the difference in finding our forever home.",
      author: "Amanda & James Wilson",
      location: "Luxury Buyers",
      community: "Summerlin, Las Vegas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      service: "Luxury Properties"
    }
  ];

  const stats = {
    totalReviews: 127,
    averageRating: 5.0,
    responseRate: 98,
    clientSatisfaction: 100
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <PageHero
          title='What Our Clients Say'
          subtitle='Real testimonials from satisfied clients who chose Dr. Janet Duffy Group for their Las Vegas real estate needs.'
        />

        {/* Stats Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Client Satisfaction Metrics
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.totalReviews}</div>
                  <div className='text-lg text-gray-600'>Total Reviews</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.averageRating}</div>
                  <div className='text-lg text-gray-600'>Average Rating</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.responseRate}%</div>
                  <div className='text-lg text-gray-600'>Response Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stats.clientSatisfaction}%</div>
                  <div className='text-lg text-gray-600'>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Client Testimonials
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className='card p-8 flex flex-col items-center text-center'>
                    <div className='relative w-16 h-16 rounded-full overflow-hidden mb-4'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className='object-cover'
                      />
                    </div>
                    
                    <div className='flex mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' width="24" height="24">
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className='text-gray-700 leading-relaxed mb-6'>
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    <div className='mt-auto'>
                      <div className='font-semibold text-gray-900 mb-1'>
                        {testimonial.author}
                      </div>
                      <div className='text-sm text-gray-600 mb-1'>
                        {testimonial.location}
                      </div>
                      <div className='text-sm text-blue-600 font-medium'>
                        {testimonial.community}
                      </div>
                      <div className='text-xs text-gray-500 mt-2'>
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Trusted by Las Vegas Families
              </h2>
              
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>500+</div>
                  <div className='text-gray-600'>Happy Clients</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
                  <div className='text-gray-600'>Years Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>98%</div>
                  <div className='text-gray-600'>Client Satisfaction</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>Top 1%</div>
                  <div className='text-gray-600'>Las Vegas Agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Become Our Next Success Story?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Join hundreds of satisfied clients who chose Dr. Janet Duffy Group for their Las Vegas real estate needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='btn btn-primary'
              >
                Get Started Today
              </Link>
              <Link
                href='tel:702-222-1964'
                className='btn btn-outline'
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
