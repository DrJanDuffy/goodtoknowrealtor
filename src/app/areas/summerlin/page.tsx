import { PageHero } from '@/components/ui/PageHero';
import { SEO_CONFIG } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import { SimpleSearch } from '@/components/PropertySearch/SimpleSearch';
import { SummerlinListings } from '@/components/Home/SummerlinListings';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-simple-search': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

export const metadata: Metadata = {
  title: 'Summerlin Real Estate | Dr. Jan Duffy - Premier Good To Know REALTOR®',
  description: 'Find your dream home in Summerlin, Las Vegas. Premier Good To Know REALTOR® Dr. Jan Duffy specializes in Summerlin luxury homes, condos, and investment properties.',
  keywords: 'Summerlin real estate, Summerlin homes for sale, Summerlin luxury homes, Las Vegas real estate, Dr. Jan Duffy',
  openGraph: {
    title: 'Summerlin Real Estate | Dr. Jan Duffy',
    description: 'Find your dream home in Summerlin, Las Vegas with Premier Good To Know REALTOR® Dr. Jan Duffy.',
    images: ['/images/summerlin-real-estate-og.jpg'],
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/areas/summerlin`,
  },
};

export default function SummerlinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title='Summerlin Real Estate'
        subtitle="Discover luxury living in Summerlin, Las Vegas's premier master-planned community"
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      >
        <a 
          href='/listings#advanced-search' 
          className='bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
        >
          View Summerlin Listings
        </a>
        <a 
          href='/contact' 
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
        >
          Get Free Consultation
        </a>
      </PageHero>

      {/* Property Search */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Search Summerlin Properties
              </h2>
              <p className="text-xl text-gray-600">
                Find your perfect home in Summerlin with our advanced search tools
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      {/* About Summerlin */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Summerlin?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Summerlin is Las Vegas&apos;s premier master-planned community, offering luxury living 
                with world-class amenities, top-rated schools, and stunning mountain views. I 
                specialize in helping clients find their perfect home in this exceptional community.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Included' />
                  <span className="text-gray-700">Master-planned community with 22,000+ acres</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Included' />
                  <span className="text-gray-700">Top-rated schools and family-friendly amenities</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Included' />
                  <span className="text-gray-700">Golf courses, parks, and recreational facilities</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Included' />
                  <span className="text-gray-700">Luxury homes with mountain and city views</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Summerlin luxury homes"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Summerlin Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current market insights for Summerlin real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$850K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">125</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">List to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Listings */}
      <SummerlinListings />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Summerlin Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Jan Duffy help you find your perfect home in Summerlin. With $127M+ 
            in sales volume and deep knowledge of luxury communities, I&apos;ll guide you 
            every step of the way to your dream property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:702-222-1964" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (702) 222-1964
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
