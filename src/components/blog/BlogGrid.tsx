import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';
import Image from 'next/image';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className='text-center py-16'>
        <div className='max-w-md mx-auto'>
          <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
            <svg
              className='w-10 h-10 text-amber-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
             width="24" height="24">
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
          </div>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            No Posts Found
          </h2>
          <p className='text-gray-600 text-lg'>
            Check back soon for the latest real estate insights from Dr. Janet
            Duffy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Featured Post (First Post) */}
      {posts.length > 0 && (
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
          <div className='flex flex-col lg:flex-row gap-6 items-center'>
            <div className='lg:w-1/2'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wide'>
                  Featured
                </span>
                <time className='text-gray-600 text-sm'>
                  {new Date(posts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-3'>
                {posts[0].title}
              </h2>
              <p className='text-gray-600 text-base leading-relaxed mb-4'>
                {posts[0].excerpt}
              </p>
              <div className='flex items-center gap-3'>
                <a
                  href={`/blog/${posts[0].slug}`}
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm'
                >
                  Read Full Article
                </a>
                <a
                  href='tel:702-222-1964'
                  className='text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm'
                >
                  <Image
                    src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=20&h=20&q=80'
                    alt='Phone'
                    width={20}
                    height={20}
                    className='inline-block w-5 h-5 mr-1'
                  />{' '}
                  (702) 222-1964
                </a>
              </div>
            </div>
            {posts[0].image && (
              <div className='lg:w-1/2'>
                <div className='relative h-48 lg:h-64 rounded-lg overflow-hidden'>
                  <Image
                    src={posts[0].image}
                    alt={posts[0].imageAlt || posts[0].title}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      {posts.length > 1 && (
        <div>
          <h3 className='text-xl font-bold text-gray-900 mb-6 text-center'>
            More Real Estate Insights
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {posts.slice(1).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Attribution Notice */}
      <div className='mt-8 bg-gray-50 rounded-lg p-4 text-center'>
        <p className='text-gray-600 text-xs'>
          Content sourced from{' '}
          <a
            href='https://www.bhhscp.com/blog'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 font-semibold'
          >
            Berkshire Hathaway HomeServices California Properties
          </a>{' '}
          and curated by Dr. Janet Duffy for Las Vegas real estate insights.
        </p>
      </div>
    </div>
  );
}
