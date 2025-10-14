import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBlogPost, getPostsWithCache } from '@/lib/blog/cache';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Dr. Janet Duffy',
    };
  }

  const title = `${post.title} | Dr. Janet Duffy Real Estate Blog`;
  const description =
    post.excerpt ||
    `Read ${post.title} by Premier Good To Know REALTOR® Dr. Janet Duffy, your trusted Las Vegas real estate expert.`;

  const keywords = [
    'Las Vegas real estate',
    'Dr. Janet Duffy',
    'Premier Good To Know REALTOR',
    'Las Vegas real estate blog',
    ...(post.categories || []),
    ...(post.tags || [])
  ];

  return generatePageMetadata({
    title,
    description,
    keywords,
    url: `/blog/${slug}`,
    image: post.image,
    type: 'article',
  });
}

// Enable ISR with 6-hour revalidation
export const revalidate = 21600;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
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
      {/* Breadcrumb */}
      <nav className='bg-white border-b border-gray-200'>
        <div className='container py-4'>
          <div className='flex items-center space-x-2 text-sm'>
            <Link
              href='/'
              className='text-amber-600 hover:text-amber-700 font-medium'
            >
              Home
            </Link>
            <span className='text-gray-400'>/</span>
            <Link
              href='/blog'
              className='text-amber-600 hover:text-amber-700 font-medium'
            >
              Blog
            </Link>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-600 font-medium truncate'>
              {post.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className='container py-8 lg:py-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Post Meta */}
          <div className='mb-8'>
            {post.categories.length > 0 && (
              <div className='mb-4'>
                <span className='bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
                  {post.categories[0]}
                </span>
              </div>
            )}

            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              {post.title}
            </h1>

            <div className='flex flex-wrap items-center gap-6 text-gray-600 mb-8'>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>By {post.author}</span>
              </div>
              <div className='flex items-center gap-2'>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              {post.readingTime && (
                <div className='flex items-center gap-2'>
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className='mb-8'>
              <div className='relative h-64 lg:h-96 rounded-xl overflow-hidden'>
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                  priority
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className='prose prose-lg max-w-none'>
            <div
              className='text-gray-700 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call-to-Action */}
          <div className='mt-12 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8 text-center'>
            <h2 className='text-2xl lg:text-3xl font-bold mb-4'>
              Ready to Explore Las Vegas Real Estate?
            </h2>
            <p className='text-xl text-amber-100 mb-6 max-w-2xl mx-auto'>
              Dr. Janet Duffy is here to help you navigate the Las Vegas real
              estate market with confidence and expertise.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
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
              </a>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Attribution */}
          <div className='mt-12 bg-gray-50 rounded-lg p-6'>
            <p className='text-gray-600 text-sm text-center'>
              This content was originally published on{' '}
              <a
                href={post.originalUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-amber-600 hover:text-amber-700 font-semibold'
              >
                Berkshire Hathaway HomeServices California Properties Blog
              </a>{' '}
              and is curated by Dr. Janet Duffy for Las Vegas real estate
              insights.
            </p>
          </div>

          {/* Back to Blog */}
          <div className='mt-8 text-center'>
            <Link
              href='/blog'
              className='inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
      </div>
    </>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  const posts = await getPostsWithCache();

  return posts.slice(0, 10).map(post => ({
    slug: post.slug,
  }));
}
