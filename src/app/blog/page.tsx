import { Metadata } from 'next';
import Link from 'next/link';
import { getPostsWithCache } from '@/lib/blog/cache';
import { BlogGrid } from '@/components/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Dr. Janet Duffy',
  description: 'Stay updated with the latest real estate insights, market trends, and home buying tips from Dr. Janet Duffy, your trusted Las Vegas real estate expert.',
  openGraph: {
    title: 'Real Estate Blog | Dr. Janet Duffy',
    description: 'Stay updated with the latest real estate insights, market trends, and home buying tips.',
    images: [
      {
        url: '/images/dr-jan-duffy-blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Janet Duffy Real Estate Blog',
      },
    ],
  },
};

// Enable ISR with 6-hour revalidation
export const revalidate = 21600;

export default async function BlogPage() {
  const posts = await getPostsWithCache();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Hero Section - Dr. Jan Duffy Branding */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Dr. Janet Duffy Real Estate
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Las Vegas Real Estate
              <span className="block text-yellow-200">Insights & Updates</span>
            </h1>
            <p className="text-xl lg:text-2xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
              Stay ahead of the market with expert insights, neighborhood guides, and valuable tips for buying and selling real estate in Las Vegas
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="tel:702-222-1964"
                className="bg-white text-amber-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg"
              >
                📞 (702) 222-1964
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-12 lg:py-16">
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Tuned for Updates!</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're working on bringing you the latest real estate insights from across Las Vegas.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-amber-800 mb-2">Want to stay updated?</h3>
                <p className="text-amber-700 mb-4">Get the latest market insights delivered to your inbox.</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
                >
                  Subscribe to Updates
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call-to-Action Section */}
      {posts.length > 0 && (
        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Make Your Real Estate Move?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Dr. Janet Duffy has helped hundreds of families find their dream homes in Las Vegas. 
              Let her expertise guide your next real estate decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="tel:702-222-1964"
                className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg"
              >
                📞 Call (702) 222-1964
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
