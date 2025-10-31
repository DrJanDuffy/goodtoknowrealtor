import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Real Results from Real Clients</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            See how Dr. Jan Duffy&apos;s expertise translates into measurable success stories. 
            From luxury purchases to investment portfolios, our clients achieve exceptional outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4 md:mb-6">
                {testimonial.image && (
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="font-bold text-sm md:text-base lg:text-lg text-gray-900 truncate">{testimonial.author}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.location}</p>
                  {testimonial.community && (
                    <p className="text-xs md:text-sm text-blue-600 font-medium truncate">{testimonial.community}</p>
                  )}
                </div>
              </div>
              
              <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                &ldquo;{testimonial.fullQuote}&rdquo;
              </blockquote>
              
              {/* Key Metrics */}
              <div className="mb-3 md:mb-4 pt-3 md:pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                  {testimonial.dollarAmount && (
                    <span className="bg-green-50 text-green-700 px-2 md:px-3 py-1 rounded-full font-semibold">
                      {testimonial.dollarAmount}
                    </span>
                  )}
                  {testimonial.timeline && (
                    <span className="bg-blue-50 text-blue-700 px-2 md:px-3 py-1 rounded-full font-semibold">
                      {testimonial.timeline}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-base md:text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$127M+</div>
              <div className="text-gray-600">Total Sales Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">22 Days</div>
              <div className="text-gray-600">Average Days to Sell</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Top 1%</div>
              <div className="text-gray-600">Las Vegas Agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
