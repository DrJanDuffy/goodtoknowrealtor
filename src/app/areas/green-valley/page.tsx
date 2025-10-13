import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Green Valley Real Estate | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Find your dream home in Green Valley, Henderson. Premier Good To Know REALTOR® Dr. Janet Duffy specializes in Green Valley luxury homes, golf course properties, and family communities.',
  keywords: 'Green Valley real estate, Green Valley homes for sale, Henderson real estate, golf course homes, Dr. Janet Duffy',
  openGraph: {
    title: 'Green Valley Real Estate | Dr. Janet Duffy',
    description: 'Find your dream home in Green Valley with Premier Good To Know REALTOR® Dr. Janet Duffy.',
    images: ['/images/green-valley-real-estate-og.jpg'],
  },
};

export default function GreenValleyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Green Valley Real Estate
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover luxury living in Green Valley, Henderson's premier master-planned community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/listings?area=green-valley" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                View Green Valley Listings
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

      {/* About Green Valley */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Green Valley?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Green Valley is Henderson's premier master-planned community, offering luxury 
                living with world-class golf courses, upscale shopping, and beautiful homes. 
                As the Premier Good To Know REALTOR®, I specialize in helping clients find 
                their perfect home in this exclusive community.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Championship golf courses and country club living</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Upscale shopping at Green Valley Ranch and District</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Top-rated schools and family-friendly amenities</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Luxury homes with mountain and golf course views</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Green Valley luxury homes"
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
              Green Valley Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current market insights for Green Valley real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$750K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">48</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95</div>
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
            Ready to Find Your Green Valley Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Janet Duffy, the Premier Good To Know REALTOR®, help you find 
            your perfect home in Green Valley. With expertise in luxury properties 
            and golf course communities, I'll help you discover the best of Henderson living.
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
