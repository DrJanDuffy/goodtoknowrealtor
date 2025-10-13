import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center'>
      <div className='text-center max-w-md mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-6xl font-bold text-amber-600 mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            Page Not Found
          </h2>
          <p className='text-gray-600 mb-8'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been moved, deleted, or doesn&apos;t exist.
          </p>
        </div>

        <div className='space-y-4'>
          <Link
            href='/'
            className='inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200'
          >
            Go Home
          </Link>

          <div className='text-center'>
            <Link
              href='/blog'
              className='text-amber-600 hover:text-amber-700 font-medium'
            >
              Visit Our Blog
            </Link>
          </div>
        </div>

        <div className='mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6'>
          <h3 className='font-semibold text-amber-800 mb-2'>Need Help?</h3>
          <p className='text-amber-700 mb-4'>
            Contact Dr. Janet Duffy for assistance with your real estate needs.
          </p>
          <a
            href='tel:702-222-1964'
            className='inline-flex items-center bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200'
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
        </div>
      </div>
    </div>
  );
}
