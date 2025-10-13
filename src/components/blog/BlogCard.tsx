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
    <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:-translate-y-1">
      {post.image && (
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {post.categories[0]}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4 text-sm">
          <time className="text-gray-500 font-medium">
            {formatDate(post.date)}
          </time>
          {post.readingTime && (
            <span className="text-gray-400">
              {post.readingTime} min read
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-200">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 font-medium">
            By {post.author}
          </span>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
