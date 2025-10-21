import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Dr. Jan Duffy
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              As a top-performing agent at Berkshire Hathaway HomeServices Premier Properties, 
              Dr. Jan Duffy has facilitated over $127 million in real estate transactions across Las Vegas.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With deep expertise in luxury properties, investment real estate, and first-time home buying, 
              Dr. Duffy delivers results that consistently exceed expectations. Her data-driven approach, 
              combined with personalized service, has helped hundreds of families achieve their real estate goals 
              while building wealth through strategic property investments.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Top 1% Producer</h4>
                  <p className="text-sm text-gray-600">$127M+ Sales Volume</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Las Vegas Expert</h4>
                  <p className="text-sm text-gray-600">15+ Years Local Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Investment Specialist</h4>
                  <p className="text-sm text-gray-600">Portfolio Building Expert</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Berkshire Hathaway</h4>
                  <p className="text-sm text-gray-600">Premier Properties Agent</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/about" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More About Dr. Duffy
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Dr. Jan Duffy - Premier Good To Know REALTOR®"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">22 Days</div>
                <div className="text-sm">Avg. Days to Sell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
