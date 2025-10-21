import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Speaking Engagements | Dr. Jan Duffy Real Estate Expert | Las Vegas',
  description: 'Book Dr. Jan Duffy for speaking engagements, real estate seminars, and expert presentations on Las Vegas luxury real estate market trends.',
  keywords: 'Dr. Jan Duffy speaking, real estate expert speaker, Las Vegas real estate seminars, luxury real estate presentations',
  openGraph: {
    title: 'Speaking Engagements | Dr. Jan Duffy Real Estate Expert | Las Vegas',
    description: 'Book Dr. Jan Duffy for speaking engagements, real estate seminars, and expert presentations on Las Vegas luxury real estate market trends.',
    type: 'website',
  },
};

export default function SpeakingEngagementsPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Speaking Engagements
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Book Dr. Jan Duffy for expert presentations on Las Vegas luxury 
              real estate market trends, investment strategies, and market insights.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Book Speaking Engagement
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

      {/* Speaking Topics */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Expert Speaking Topics
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Dr. Jan Duffy delivers expert insights on luxury real estate 
                market trends, investment strategies, and Las Vegas market dynamics.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Luxury real estate market trends'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Luxury Market Trends</h3>
                  <p className='text-gray-600 mb-4'>
                    Expert analysis of luxury real estate market trends, 
                    pricing strategies, and investment opportunities.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Book This Topic →
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
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Investment Strategies</h3>
                  <p className='text-gray-600 mb-4'>
                    Comprehensive guide to luxury real estate investment 
                    strategies and market analysis techniques.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Book This Topic →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Las Vegas market insights'
                  width={400}
                  height={250}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Las Vegas Market Insights</h3>
                  <p className='text-gray-600 mb-4'>
                    Deep dive into Las Vegas luxury real estate market 
                    dynamics and emerging opportunities.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Book This Topic →
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
              Book Dr. Jan Duffy for Your Event
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              For speaking engagements, seminars, or expert presentations 
              on Las Vegas luxury real estate, contact Dr. Jan Duffy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Book Speaking Engagement
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
