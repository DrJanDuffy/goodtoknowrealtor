import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoryBySlug, getCategoryColorClass } from '@/lib/blog-categories';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords.join(', '),
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [`/images/blog-category-${category.slug}-og.jpg`],
    },
  };
}

// Mock blog posts for each category (in production, these would come from CMS)
const mockPosts = {
  'buyer-advice': [
    {
      id: '1',
      title: 'First-Time Buyer Guide: 10 Steps to Your Vegas Dream Home',
      excerpt: 'Complete step-by-step guide for first-time home buyers in Las Vegas. From pre-approval to closing day.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Vegas Neighborhood Comparison: Summerlin vs Henderson vs North Las Vegas',
      excerpt: 'Compare Las Vegas neighborhoods to find your perfect community. Schools, amenities, and lifestyle factors.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-12',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'Gaming Industry Employee Mortgage Programs in Las Vegas',
      excerpt: 'Special financing options available for casino and hospitality workers in Las Vegas.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-10',
      readTime: '5 min read'
    }
  ],
  'seller-advice': [
    {
      id: '4',
      title: 'How to Stage Your Vegas Home for Maximum Value',
      excerpt: 'Desert-specific staging tips to make your Las Vegas home irresistible to buyers.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-14',
      readTime: '7 min read'
    },
    {
      id: '5',
      title: 'Timing Your Vegas Home Sale: Convention Season vs Off-Season',
      excerpt: 'When to list your Las Vegas home for maximum exposure and profit.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-11',
      readTime: '6 min read'
    }
  ],
  'home-improvement': [
    {
      id: '6',
      title: 'Pool Installation ROI: Does a Pool Add Value in Las Vegas?',
      excerpt: 'Complete analysis of pool installation costs vs. value added in Las Vegas real estate market.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-13',
      readTime: '9 min read'
    },
    {
      id: '7',
      title: 'Desert Landscaping That Sells: Low-Water, High-Impact Design',
      excerpt: 'Create stunning desert landscapes that appeal to Vegas buyers while conserving water.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-09',
      readTime: '8 min read'
    }
  ],
  'finance': [
    {
      id: '8',
      title: 'Nevada\'s No Income Tax Advantage: How Much You Really Save',
      excerpt: 'Calculate your tax savings by moving to Nevada and how it affects your home buying power.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-16',
      readTime: '7 min read'
    },
    {
      id: '9',
      title: 'Investment Property Financing in Las Vegas: 2025 Guide',
      excerpt: 'Complete guide to financing investment properties in Las Vegas, including new programs and rates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-08',
      readTime: '10 min read'
    }
  ],
  'lifestyle': [
    {
      id: '10',
      title: 'Best Las Vegas Neighborhoods for Families: School Districts & Safety',
      excerpt: 'Comprehensive guide to family-friendly neighborhoods in Las Vegas with top-rated schools.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-17',
      readTime: '9 min read'
    },
    {
      id: '11',
      title: 'Las Vegas Living Beyond The Strip: Local Favorites & Hidden Gems',
      excerpt: 'Discover the real Las Vegas lifestyle away from tourist areas - restaurants, parks, and activities.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-07',
      readTime: '8 min read'
    }
  ],
  'market-updates': [
    {
      id: '12',
      title: 'Las Vegas Real Estate Market Report: January 2025',
      excerpt: 'Latest sales data, price trends, and market insights for Las Vegas real estate.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-18',
      readTime: '6 min read'
    },
    {
      id: '13',
      title: 'California Migration Impact on Las Vegas Home Prices',
      excerpt: 'How California transplants are affecting Las Vegas real estate prices and inventory.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025-01-06',
      readTime: '7 min read'
    }
  ]
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  const posts = mockPosts[category.slug as keyof typeof mockPosts] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Category Hero */}
      <section className={`bg-gradient-to-r ${getCategoryColorClass(category.color)} text-white py-16 lg:py-20`}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl mb-6 font-bold">{category.icon}</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      {category.assessmentType && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AssessmentCTA type={category.assessmentType} />
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest {category.name} Articles
              </h2>
              <p className="text-xl text-gray-600">
                Expert insights and practical advice for Las Vegas real estate
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  We're working on bringing you expert {category.name.toLowerCase()} content.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Notified When Available
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Explore More Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['buyer-advice', 'seller-advice', 'home-improvement', 'finance', 'lifestyle', 'market-updates']
                .filter(slug => slug !== category.slug)
                .map((slug) => {
                  const relatedCategory = getCategoryBySlug(slug);
                  if (!relatedCategory) return null;
                  
                  return (
                    <Link
                      key={slug}
                      href={`/blog/category/${slug}`}
                      className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {relatedCategory.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedCategory.name}
                      </h3>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make Your Real Estate Move?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dr. Janet Duffy has helped hundreds of families navigate the Las Vegas real estate market. 
            Let her expertise guide your next decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:702-222-1964"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call (702) 222-1964
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
