import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Posts Found</h2>
          <p className="text-gray-600 text-lg">
            Check back soon for the latest real estate insights from Dr. Janet Duffy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Post (First Post) */}
      {posts.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Featured
                </span>
                <time className="text-gray-600 text-sm">
                  {new Date(posts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {posts[0].title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`/blog/${posts[0].slug}`}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
                >
                  Read Full Article
                </a>
                <a
                  href="tel:702-222-1964"
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200"
                >
                  📞 (702) 222-1964
                </a>
              </div>
            </div>
            {posts[0].image && (
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                  <img
                    src={posts[0].image}
                    alt={posts[0].imageAlt || posts[0].title}
                    className="w-full h-full object-cover"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Real Estate Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Attribution Notice */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600 text-sm">
          Content sourced from{' '}
          <a
            href="https://www.bhhscp.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            Berkshire Hathaway HomeServices California Properties
          </a>
          {' '}and curated by Dr. Janet Duffy for Las Vegas real estate insights.
        </p>
      </div>
    </div>
  );
}
