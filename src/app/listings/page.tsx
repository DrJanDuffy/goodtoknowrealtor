import Link from 'next/link';
import Image from 'next/image';

export default function ListingsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 lg:py-20'>
        <div className='container'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              Las Vegas Property Listings
            </h1>
            <p className='text-xl lg:text-2xl text-amber-100 leading-relaxed'>
              Discover exceptional homes in Las Vegas's most desirable
              neighborhoods. From luxury estates to first-time buyer homes, find
              your perfect property.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-gray-50 rounded-2xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                Find Your Dream Home
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Location
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500' aria-label='Location selection'>
                    <option>Any Neighborhood</option>
                    <option>Summerlin</option>
                    <option>Henderson</option>
                    <option>North Las Vegas</option>
                    <option>Downtown Las Vegas</option>
                    <option>Southwest Valley</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Price Range
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500' aria-label='Price range selection'>
                    <option>Any Price</option>
                    <option>Under $300K</option>
                    <option>$300K - $500K</option>
                    <option>$500K - $750K</option>
                    <option>$750K - $1M</option>
                    <option>Over $1M</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Bedrooms
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500' aria-label='Number of bedrooms selection'>
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Property Type
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500' aria-label='Property type selection'>
                    <option>Any Type</option>
                    <option>Single Family</option>
                    <option>Condo/Townhouse</option>
                    <option>Luxury Home</option>
                    <option>Investment Property</option>
                  </select>
                </div>
              </div>
              <div className='text-center'>
                <Link
                  href='/listings/search'
                  className='inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg'
                >
                  🔍 Search Properties
                  <svg
                    className='w-5 h-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Featured Properties
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Handpicked properties showcasing the best of Las Vegas real estate
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Featured Property 1 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
                  alt='Luxury home in Summerlin'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Featured
                </div>
                <div className='absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                  $750,000
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Luxury Home in Summerlin
                </h3>
                <p className='text-gray-600 mb-2'>
                  1234 Mountain View Dr, Summerlin, NV
                </p>
                <div className='flex items-center text-gray-600 mb-4'>
                  <span className='mr-4'>4 bed</span>
                  <span className='mr-4'>3 bath</span>
                  <span>2,850 sq ft</span>
                </div>
                <p className='text-gray-600 mb-4'>
                  Stunning luxury home in prestigious Summerlin with mountain
                  views, gourmet kitchen, and resort-style backyard.
                </p>
                <Link
                  href='/listings/search'
                  className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
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

            {/* Featured Property 2 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
                  alt='Modern home in Henderson'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  New Listing
                </div>
                <div className='absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                  $485,000
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Modern Home in Henderson
                </h3>
                <p className='text-gray-600 mb-2'>
                  5678 Green Valley Pkwy, Henderson, NV
                </p>
                <div className='flex items-center text-gray-600 mb-4'>
                  <span className='mr-4'>3 bed</span>
                  <span className='mr-4'>2 bath</span>
                  <span>1,950 sq ft</span>
                </div>
                <p className='text-gray-600 mb-4'>
                  Beautiful modern home in Henderson with open floor plan,
                  updated kitchen, and private backyard.
                </p>
                <Link
                  href='/listings/search'
                  className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
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

            {/* Featured Property 3 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt='Investment property in North Las Vegas'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Investment
                </div>
                <div className='absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                  $320,000
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Investment Property
                </h3>
                <p className='text-gray-600 mb-2'>
                  9012 Desert Inn Rd, North Las Vegas, NV
                </p>
                <div className='flex items-center text-gray-600 mb-4'>
                  <span className='mr-4'>3 bed</span>
                  <span className='mr-4'>2 bath</span>
                  <span>1,650 sq ft</span>
                </div>
                <p className='text-gray-600 mb-4'>
                  Excellent investment opportunity in growing North Las Vegas
                  area with strong rental potential.
                </p>
                <Link
                  href='/listings/search'
                  className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
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
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/listings/search'
              className='inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg'
            >
              View All Properties
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Browse by Category
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Find the perfect property type for your needs and lifestyle
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Search */}
            <Link href='/listings/search' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <span className='text-2xl'>🔍</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Search Properties
                </h3>
                <p className='text-gray-600 mb-6'>
                  Advanced search with filters for price, location, bedrooms,
                  and more to find your perfect home.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  Start Searching
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>

            {/* Featured Properties */}
            <Link href='/listings/featured' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <span className='text-2xl'>⭐</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Featured Properties
                </h3>
                <p className='text-gray-600 mb-6'>
                  Handpicked properties showcasing the best of Las Vegas real
                  estate with exceptional value and features.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  View Featured
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>

            {/* Luxury Collection */}
            <Link href='/listings/luxury' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <span className='text-2xl'>👑</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Luxury Collection
                </h3>
                <p className='text-gray-600 mb-6'>
                  Exclusive luxury properties in Las Vegas's most prestigious
                  neighborhoods and communities.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  View Luxury Homes
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>

            {/* Open Houses */}
            <Link href='/listings/open-houses' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <img
                    src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                    alt='Home'
                    className='w-8 h-8'
                  />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Open Houses
                </h3>
                <p className='text-gray-600 mb-6'>
                  Schedule a visit to upcoming open houses and get a firsthand
                  look at available properties.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  View Open Houses
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>

            {/* For Lease */}
            <Link href='/listings/lease' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <span className='text-2xl'>🔑</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  For Lease
                </h3>
                <p className='text-gray-600 mb-6'>
                  Quality rental properties available for lease in Las Vegas
                  with flexible terms and amenities.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  View Rentals
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>

            {/* Our Communities */}
            <Link href='/listings/communities' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <span className='text-2xl'>🏘️</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Our Communities
                </h3>
                <p className='text-gray-600 mb-6'>
                  Explore Las Vegas's diverse neighborhoods and master-planned
                  communities to find your perfect location.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  Explore Communities
                  <svg
                    className='w-4 h-4 ml-2'
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
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Can't Find What You're Looking For?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Let Dr. Janet Duffy help you find the perfect property. I have
            access to exclusive listings and off-market opportunities.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <img
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              Request Custom Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
