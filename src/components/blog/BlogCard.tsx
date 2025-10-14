import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className='group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200'>
      {post.image && (
        <div className='relative h-48 overflow-hidden'>
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-300'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          {post.categories.length > 0 && (
            <div className='absolute top-3 left-3'>
              <span className='bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium'>
                {post.categories[0]}
              </span>
            </div>
          )}
        </div>
      )}

      <div className='p-4'>
        <div className='flex justify-between items-center mb-3 text-xs'>
          <time className='text-gray-500 font-medium'>
            {formatDate(post.date)}
          </time>
          {post.readingTime && (
            <span className='text-gray-400'>{post.readingTime} min read</span>
          )}
        </div>

        <h2 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200'>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className='text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3'>
          {post.excerpt}
        </p>

        <div className='flex items-center justify-between pt-3 border-t border-gray-50'>
          <span className='text-xs text-gray-500 font-medium'>
            By {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className='text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-200'
          >
            Read More
            <svg
              className='w-3 h-3'
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
    </article>
  );
}
