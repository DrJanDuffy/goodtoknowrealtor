import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { RealScoutSearch } from '@/components/PropertySearch/RealScoutSearch';
import { RealScoutListings } from '@/components/Home/RealScoutListings';
import { PageHero } from '@/components/ui/PageHero';
import { ConsultationCTA } from '@/components/ui/ConsultationCTA';
import { TrustBadges } from '@/components/Globals/TrustBadges/TrustBadges';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { generatePageMetadata, generateBreadcrumbSchema, generatePropertySchema } from '@/lib/seo';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-advanced-search': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Property Listings | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Browse exclusive Las Vegas property listings from Premier Good To Know REALTOR® Dr. Janet Duffy. Luxury homes, investment properties, and first-time buyer homes in Summerlin, Henderson, and more.',
  keywords: ['Las Vegas property listings', 'Las Vegas homes for sale', 'Summerlin homes', 'Henderson homes', 'Las Vegas real estate listings'],
  url: '/listings',
  image: '/images/las-vegas-listings-og.jpg',
});

export default function ListingsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Property Listings', url: '/listings' },
  ]);

  // Sample property data for schema (replace with real data from your listings API)
  const properties = generatePropertySchema([
    {
      name: 'Luxury Home in Summerlin',
      description: 'Stunning 4-bedroom luxury home in prestigious Summerlin with mountain views, gourmet kitchen, and resort-style backyard.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '850000',
      address: '123 Summerlin Drive, Summerlin, NV',
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3200,
      lotSize: '0.25 acres',
      yearBuilt: 2018,
      propertyType: 'Single Family Residence',
      listingStatus: 'For Sale',
      mlsNumber: 'LV123456',
    },
    {
      name: 'Modern Condo in Henderson',
      description: 'Contemporary 2-bedroom condo in Henderson with city views, updated kitchen, and access to community amenities.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '425000',
      address: '456 Henderson Blvd, Henderson, NV',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1450,
      yearBuilt: 2020,
      propertyType: 'Condominium',
      listingStatus: 'For Sale',
      mlsNumber: 'LV789012',
    },
    {
      name: 'Investment Property in North Las Vegas',
      description: 'Great investment opportunity! 3-bedroom home in North Las Vegas with rental potential and strong cash flow.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '285000',
      address: '789 North Vegas Way, North Las Vegas, NV',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1850,
      lotSize: '0.18 acres',
      yearBuilt: 2015,
      propertyType: 'Single Family Residence',
      listingStatus: 'For Sale',
      mlsNumber: 'LV345678',
    },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      {properties.map((property, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(property),
          }}
        />
      ))}
      <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <PageHero
        title='Luxury Las Vegas Property Listings'
        subtitle={'Discover premier homes in Las Vegas\'s most prestigious neighborhoods. From luxury estates to exclusive gated communities, access exceptional properties with expert guidance.'}
        backgroundImageUrl='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1973&q=80'
        gradientFromClassName='from-amber-900'
        gradientToClassName='to-amber-800'
      >
        <ConsultationCTA variant='primary' source='listings-page-hero' showPhone={false} className='bg-white text-amber-900 hover:bg-amber-50 border-2 border-white' />
        <Link
          href='/listings'
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors duration-200'
        >
          Browse All Listings
        </Link>
      </PageHero>
      <TrustBadges />

      {/* RealScout Advanced Search Section */}
      <section id='advanced-search' className='py-20 bg-gradient-to-br from-amber-50 to-yellow-50'>
        <div className='container'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                <IconSymbol symbol='🔍' className='mr-2 h-4 w-4 text-amber-700' ariaLabel='Search icon' />
                Advanced Property Search
              </div>
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
                Find Your Dream Home
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Use our advanced search tools to find properties that match your exact criteria in Las Vegas&apos;s most desirable neighborhoods
              </p>
            </div>
            
            <div className='bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100'>
              <div className='flex justify-center'>
                <div className='w-full max-w-3xl'>
                  <RealScoutSearch />
                </div>
              </div>
              
              {/* Quick Search Options */}
              <div className='mt-8 pt-8 border-t border-gray-200'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4 text-center'>Quick Search Options</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  <Link
                    href='/areas/summerlin'
                    className='card p-4 text-center'
                  >
                    <IconSymbol symbol='🏔️' className='mx-auto mb-2 h-8 w-8 text-amber-700' ariaLabel='Mountain icon' />
                    <div className='font-semibold text-gray-900'>Summerlin</div>
                    <div className='text-sm text-gray-600'>Luxury Homes</div>
                  </Link>
                  <Link
                    href='/areas/henderson'
                    className='card p-4 text-center'
                  >
                    <IconSymbol symbol='🏘️' className='mx-auto mb-2 h-8 w-8 text-amber-700' ariaLabel='Community icon' />
                    <div className='font-semibold text-gray-900'>Henderson</div>
                    <div className='text-sm text-gray-600'>Family Homes</div>
                  </Link>
                  <Link
                    href='/areas/north-las-vegas'
                    className='card p-4 text-center'
                  >
                    <IconSymbol symbol='🏠' className='mx-auto mb-2 h-8 w-8 text-amber-700' ariaLabel='Home icon' />
                    <div className='font-semibold text-gray-900'>North Las Vegas</div>
                    <div className='text-sm text-gray-600'>New Construction</div>
                  </Link>
                  <Link
                    href='/areas/downtown'
                    className='card p-4 text-center'
                  >
                    <IconSymbol symbol='🏙️' className='mx-auto mb-2 h-8 w-8 text-amber-700' ariaLabel='City skyline icon' />
                    <div className='font-semibold text-gray-900'>Downtown</div>
                    <div className='text-sm text-gray-600'>Urban Living</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live MLS Listings */}
      <RealScoutListings />

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
            <div className='card overflow-hidden'>
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
                  href='/listings'
                  className='btn btn-outline'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                   width="24" height="24">
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
            <div className='card overflow-hidden'>
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
                  href='/listings'
                  className='btn btn-outline'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                   width="24" height="24">
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
            <div className='card overflow-hidden'>
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
                  href='/listings'
                  className='btn btn-outline'
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                   width="24" height="24">
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
              href='/listings'
              className='btn btn-primary'
            >
              View All Properties
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
               width="24" height="24">
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
            <Link href='/listings' className='group'>
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-amber-50'>
                <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors'>
                  <IconSymbol symbol='🔍' className='h-8 w-8 text-amber-700' ariaLabel='Search icon' />
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
                   width="24" height="24">
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
                  <IconSymbol symbol='⭐' className='h-8 w-8 text-amber-700' ariaLabel='Featured star icon' />
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
                   width="24" height="24">
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
                  <IconSymbol symbol='👑' className='h-8 w-8 text-amber-700' ariaLabel='Crown icon' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Luxury Collection
                </h3>
                <p className='text-gray-600 mb-6'>
                  Exclusive luxury properties in Las Vegas&apos;s most prestigious
                  neighborhoods and communities.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  View Luxury Homes
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                   width="24" height="24">
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
                  <IconSymbol symbol='🏠' className='h-8 w-8 text-amber-700' ariaLabel='Home icon' />
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
                   width="24" height="24">
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
                  <IconSymbol symbol='🔑' className='h-8 w-8 text-amber-700' ariaLabel='Key icon' />
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
                   width="24" height="24">
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
                  <IconSymbol symbol='🏘️' className='h-8 w-8 text-amber-700' ariaLabel='Community icon' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Our Communities
                </h3>
                <p className='text-gray-600 mb-6'>
                  Explore Las Vegas&apos;s diverse neighborhoods and master-planned
                  communities to find your perfect location.
                </p>
                <div className='flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors'>
                  Explore Communities
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                   width="24" height="24">
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
            Can&apos;t Find What You&apos;re Looking For?
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
              <Image
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                width={24}
                height={24}
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <ConsultationCTA variant='outline' source='listings-page-cta' showPhone={false} className='border-2 border-white text-white hover:bg-white hover:text-amber-800' />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
