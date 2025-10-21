import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recent Press | Dr. Jan Duffy Media Coverage | Las Vegas Real Estate Expert',
  description: 'Recent press coverage and media appearances featuring Dr. Jan Duffy, Top 1% Las Vegas Real Estate Agent. Expert insights on luxury real estate market.',
  keywords: 'Dr. Jan Duffy recent press, Las Vegas real estate news, luxury real estate expert, media coverage',
  openGraph: {
    title: 'Recent Press | Dr. Jan Duffy Media Coverage | Las Vegas Real Estate Expert',
    description: 'Recent press coverage and media appearances featuring Dr. Jan Duffy, Top 1% Las Vegas Real Estate Agent. Expert insights on luxury real estate market.',
    type: 'website',
  },
};

export default function RecentPressPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Recent Press Coverage
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Latest media coverage and press mentions featuring Dr. Jan Duffy&apos;s 
              expertise in Las Vegas luxury real estate.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Media Inquiries
              </Link>
              <Link
                href='/press'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                View All Press
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Articles */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Latest Press Coverage
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Recent media coverage highlighting Dr. Jan Duffy&apos;s insights 
                on Las Vegas luxury real estate market trends and opportunities.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Las Vegas luxury real estate market trends'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Las Vegas Luxury Market Trends 2025</h3>
                  <p className='text-gray-600 mb-4'>
                    Expert analysis of luxury real estate trends and 
                    investment opportunities in Las Vegas.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Real estate investment strategies'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Investment Strategies for Luxury Properties</h3>
                  <p className='text-gray-600 mb-4'>
                    Comprehensive guide to luxury real estate investment 
                    strategies and market analysis.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Real estate market insights'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Market Insights and Predictions</h3>
                  <p className='text-gray-600 mb-4'>
                    Expert predictions and market insights for Las Vegas 
                    luxury real estate market.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-amber-600'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h2 className='text-4xl font-bold mb-6'>
              Media Inquiries & Expert Commentary
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              For media inquiries, expert commentary, or speaking engagements 
              about Las Vegas luxury real estate, contact Dr. Jan Duffy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Contact for Media
              </Link>
              <Link
                href='/press'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                View All Press
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
