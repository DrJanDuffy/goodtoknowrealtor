import Link from 'next/link';
import Image from 'next/image';

export function ContactCTA() {
  return (
    <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
      <div className='container text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
          Ready to Achieve Your Real Estate Goals?
        </h2>
        <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
          Stop dreaming about your ideal Las Vegas property and start making it happen. 
          Get a personalized strategy session where we'll analyze your situation, 
          identify opportunities, and create an action plan to exceed your expectations.
        </p>
        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
          <Link
            href='tel:702-222-1964'
            className='bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg'
          >
            <Image
              src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
              alt='Phone icon for calling Dr. Janet Duffy'
              width={24}
              height={24}
              className='inline-block w-6 h-6 mr-2'
            />{' '}
            Get Free Market Analysis
          </Link>
          <Link
            href='/contact'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors'
          >
            Book Strategy Session
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <div className='text-3xl font-bold mb-2'>Nationally</div>
            <div className='text-blue-200'>Recognized Expert</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>Premier</div>
            <div className='text-blue-200'>Good To Know REALTOR®</div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-2'>Helps Agents</div>
            <div className='text-blue-200'>Sell Homes Nationwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
