import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Henderson Real Estate | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Find your dream home in Henderson, Nevada. Premier Good To Know REALTOR® Dr. Janet Duffy specializes in Henderson luxury homes, family communities, and investment properties.',
  keywords: 'Henderson real estate, Henderson homes for sale, Henderson luxury homes, Nevada real estate, Dr. Janet Duffy',
  openGraph: {
    title: 'Henderson Real Estate | Dr. Janet Duffy',
    description: 'Find your dream home in Henderson, Nevada with Premier Good To Know REALTOR® Dr. Janet Duffy.',
    images: ['/images/henderson-real-estate-og.jpg'],
  },
};

export default function HendersonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Henderson Real Estate
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover family-friendly living in Henderson, Nevada&apos;s second-largest city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/listings?area=henderson" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                View Henderson Listings
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Henderson */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Henderson?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Henderson offers the perfect blend of suburban tranquility and urban convenience. 
                As Nevada&apos;s second-largest city, it provides excellent schools, beautiful parks, 
                and a strong sense of community. As the Premier Good To Know REALTOR®, I help 
                families and investors find their ideal properties in this thriving city.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Top-rated schools and family-friendly neighborhoods</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Beautiful parks and recreational facilities</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Growing business district and job opportunities</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Diverse housing options from starter homes to luxury estates</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Henderson family homes"
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
              Henderson Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current market insights for Henderson real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$520K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">38</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">285</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">List to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Henderson Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Janet Duffy, the Premier Good To Know REALTOR®, help you find 
            your perfect home in Henderson. With deep knowledge of the Nevada market 
            and 15+ years of experience, I&apos;ll guide you to the right neighborhood and property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:702-222-1964" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
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
