import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  keywords: PAGE_SEO.about.keywords,
  url: '/about',
  image: '/images/dr-janet-duffy-about-og.jpg',
});

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Dr. Janet Duffy', url: '/about' },
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
      <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <PageHero
        title='About Dr. Janet Duffy'
        subtitle='Your trusted Las Vegas real estate expert with over 15 years of experience helping clients achieve their property goals.'
      />

      {/* About Section */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                A Passion for Real Estate Excellence
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed'>
                Dr. Janet Duffy brings unparalleled expertise and dedication to
                every real estate transaction, helping clients navigate the Las
                Vegas market with confidence and success.
              </p>
            </div>

            <div className='prose prose-lg max-w-none mx-auto text-gray-700'>
              <p className='text-lg leading-relaxed mb-6'>
                With over 15 years of experience in the Las Vegas real estate
                market, Dr. Janet Duffy has built a reputation as one of the
                area&apos;s most trusted and successful real estate professionals.
                Her deep understanding of local market trends, neighborhood
                dynamics, and investment opportunities has helped hundreds of
                clients achieve their property goals.
              </p>

              <p className='text-lg leading-relaxed mb-6'>
                Dr. Duffy&apos;s approach combines market expertise with personalized
                service, ensuring each client receives the attention and
                guidance they deserve. Whether you&apos;re a first-time homebuyer,
                seasoned investor, or looking to sell your current property, she
                provides the strategic insight and professional support needed
                to make informed decisions.
              </p>

              <p className='text-lg leading-relaxed mb-8'>
                Her commitment to excellence is reflected in her impressive
                track record of successful transactions, satisfied clients, and
                recognition within the real estate community. Dr. Duffy stays
                current with market trends, technology, and best practices to
                provide clients with the most effective representation possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Experience & Expertise
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Professional qualifications and areas of specialization
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='🎓' className='h-8 w-8 text-amber-600' ariaLabel='Education icon' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Education & Certifications
              </h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Licensed Nevada Real Estate Broker</li>
                <li>• Certified Residential Specialist (CRS)</li>
                <li>• Accredited Buyer&apos;s Representative (ABR)</li>
                <li>• Graduate, Realtor Institute (GRI)</li>
                <li>• Continuing education in market trends</li>
              </ul>
            </div>

            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='🏆' className='h-8 w-8 text-amber-600' ariaLabel='Awards icon' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Recognition & Awards
              </h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Top 1% of Las Vegas Realtors (2023, 2024)</li>
                <li>• $127M+ in Total Sales Volume</li>
                <li>• Berkshire Hathaway Circle of Excellence</li>
                <li>• Luxury Property Specialist (LPS)</li>
                <li>• 5-Star Client Rating Average</li>
              </ul>
            </div>

            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='🎯' className='h-8 w-8 text-amber-600' ariaLabel='Specializations icon' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Specializations
              </h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• First-time homebuyers</li>
                <li>• Luxury property sales</li>
                <li>• Investment properties</li>
                <li>• New construction</li>
                <li>• Relocation services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              My Values & Approach
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The principles that guide every client interaction and transaction
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Client-First Philosophy
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Every decision is made with your best interests in mind. I
                    take the time to understand your unique needs, goals, and
                    timeline to provide personalized guidance throughout the
                    entire process.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Market Expertise
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Deep knowledge of Las Vegas neighborhoods, market trends,
                    and investment opportunities allows me to provide strategic
                    advice and help you make informed decisions.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Transparent Communication
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Clear, honest communication is the foundation of every
                    successful real estate transaction. You&apos;ll always know what
                    to expect and be informed every step of the way.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Results-Driven Service
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    My goal is to exceed your expectations and deliver
                    exceptional results. Whether buying or selling, I&apos;m
                    committed to achieving the best possible outcome for you.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
                  alt='Dr. Janet Duffy working with clients'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Community Involvement
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Giving back to the Las Vegas community that I&apos;m proud to call home
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='🏠' className='h-10 w-10 text-white' ariaLabel='Habitat for Humanity' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Habitat for Humanity
              </h3>
              <p className='text-gray-600'>
                Volunteer and supporter of affordable housing initiatives in Las
                Vegas
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='🎓' className='h-10 w-10 text-white' ariaLabel='Education Foundation' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Education Foundation
              </h3>
              <p className='text-gray-600'>
                Active supporter of local schools and educational programs
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='🌱' className='h-10 w-10 text-white' ariaLabel='Environmental initiatives' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Environmental Initiatives
              </h3>
              <p className='text-gray-600'>
                Promoting sustainable living and green building practices
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='🤝' className='h-10 w-10 text-white' ariaLabel='Local business network' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Local Business Network
              </h3>
              <p className='text-gray-600'>
                Supporting local businesses and economic development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Ready to Work Together?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Let&apos;s discuss your real estate goals and how I can help you achieve
            them in the Las Vegas market.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <Image
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                width={24}
                height={24}
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
