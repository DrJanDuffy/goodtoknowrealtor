import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'North Las Vegas Real Estate | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Find your dream home in North Las Vegas, Nevada. Premier Good To Know REALTOR® Dr. Janet Duffy specializes in North Las Vegas homes, new construction, and investment properties.',
  keywords: 'North Las Vegas real estate, North Las Vegas homes for sale, Nevada real estate, Dr. Janet Duffy',
  openGraph: {
    title: 'North Las Vegas Real Estate | Dr. Janet Duffy',
    description: 'Find your dream home in North Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy.',
    images: ['/images/north-las-vegas-real-estate-og.jpg'],
  },
};

export default function NorthLasVegasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              North Las Vegas Real Estate
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover affordable living and new construction in North Las Vegas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/listings?area=north-las-vegas" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                View North Las Vegas Listings
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

      {/* About North Las Vegas */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose North Las Vegas?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                North Las Vegas offers excellent value with new construction communities, 
                affordable housing options, and convenient access to the Las Vegas Strip. 
                As the Premier Good To Know REALTOR®, I help buyers find great deals and 
                investment opportunities in this growing area.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">New construction communities and master-planned developments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Affordable housing options for first-time buyers</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Close proximity to Las Vegas Strip and entertainment</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Growing job market and business opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="North Las Vegas new construction homes"
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
              North Las Vegas Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current market insights for North Las Vegas real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$420K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">32</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">195</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
              <div className="text-gray-600">List to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your North Las Vegas Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Janet Duffy, the Premier Good To Know REALTOR®, help you find 
            your perfect home in North Las Vegas. With expertise in new construction 
            and investment properties, I&apos;ll help you make the right choice.
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
