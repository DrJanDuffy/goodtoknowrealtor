import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostsWithCache } from '@/lib/blog/cache';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { MarketInsightsGrid } from '@/components/MarketInsights/MarketInsightsGrid';
import { fetchMarketInsights } from '@/lib/rss-fetcher';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { getFeaturedCategories, getCategoryColorClass } from '@/lib/blog-categories';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  keywords: PAGE_SEO.blog.keywords,
  url: '/blog',
  image: '/images/dr-janet-duffy-blog-og.jpg',
});

// Enable ISR with 6-hour revalidation
export const revalidate = 21600;

export default async function BlogPage() {
  const posts = await getPostsWithCache();
  const marketInsights = await fetchMarketInsights(6);
  const categories = getFeaturedCategories();
  
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Las Vegas Real Estate Blog', url: '/blog' },
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
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section - Dr. Jan Duffy Branding */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-12 lg:py-16 relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='container relative'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='mb-4'>
              <span className='inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide'>
                Dr. Janet Duffy Real Estate
              </span>
            </div>
            <h1 className='text-3xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg'>
              Las Vegas Real Estate
              <span className='block text-blue-100'>Insights & Updates</span>
            </h1>
            <p className='text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto'>
              Stay ahead of the market with expert insights, neighborhood
              guides, and valuable tips for buying and selling real estate in
              Las Vegas
            </p>
            <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <Link
                href='tel:702-222-1964'
                className='bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors duration-200 shadow-lg'
              >
                <Image
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=20&h=20&q=80'
                  alt='Phone'
                  width={20}
                  height={20}
                  className='inline-block w-5 h-5 mr-2'
                />{' '}
                (702) 222-1964
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-6 py-2 rounded-lg font-semibold text-base hover:bg-white hover:text-blue-800 transition-colors duration-200'
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <section className='py-12 bg-white border-b border-gray-200'>
        <div className='container'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-bold text-gray-900 text-center mb-8'>
              Explore by Category
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className={`group text-center p-6 rounded-xl bg-gradient-to-br ${getCategoryColorClass(category.color)} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <div className='text-lg mb-3 group-hover:scale-110 transition-transform font-bold'>
                    {category.icon}
                  </div>
                  <h3 className='font-bold text-lg group-hover:text-white transition-colors'>
                    {category.name}
                  </h3>
                  <p className='text-sm text-white/80 mt-2 line-clamp-2'>
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className='container py-8 lg:py-12'>
        {/* Market Insights Section */}
        {marketInsights.length > 0 && (
          <div className='mb-16'>
            <MarketInsightsGrid insights={marketInsights} />
          </div>
        )}

        {/* WordPress Blog Posts */}
        {posts.length > 0 ? (
          <div>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Dr. Janet Duffy&apos;s Good To Know Real Estate Blog
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Expert insights, neighborhood guides, and valuable tips for Las Vegas real estate from your Premier Good To Know REALTOR®
              </p>
            </div>
            <BlogGrid posts={posts} />
          </div>
        ) : (
          <div className='text-center py-12'>
            <div className='max-w-md mx-auto'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                Stay Tuned for Updates!
              </h2>
              <p className='text-gray-600 text-base mb-6'>
                We&apos;re working on bringing you the latest real estate insights
                from across Las Vegas.
              </p>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                <h3 className='font-semibold text-blue-800 mb-2'>
                  Want to stay updated?
                </h3>
                <p className='text-blue-700 mb-3 text-sm'>
                  Get the latest market insights delivered to your inbox.
                </p>
                <Link
                  href='/contact'
                  className='inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm'
                >
                  Subscribe to Updates
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call-to-Action Section */}
      {posts.length > 0 && (
        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12'>
          <div className='container text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold mb-3'>
              Ready to Make Your Real Estate Move?
            </h2>
            <p className='text-lg text-blue-100 mb-6 max-w-2xl mx-auto'>
              Dr. Janet Duffy has helped hundreds of families find their dream
              homes in Las Vegas. Let her expertise guide your next real estate
              decision.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <Link
                href='tel:702-222-1964'
                className='bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors duration-200 shadow-lg'
              >
                <Image
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=20&h=20&q=80'
                  alt='Phone'
                  width={20}
                  height={20}
                  className='inline-block w-5 h-5 mr-2'
                />{' '}
                Call (702) 222-1964
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-blue-800 transition-colors duration-200'
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
