'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { IconSymbol } from '@/components/ui/IconSymbol';

export function TestimonialsSection() {
  const [filter, setFilter] = useState<'all' | 'buyer' | 'seller' | 'investor'>('all');

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.propertyType === filter);

  const getEmotionalCallout = (propertyType: 'buyer' | 'seller' | 'investor') => {
    switch (propertyType) {
      case 'buyer':
        return "Buyer's Peace of Mind";
      case 'seller':
        return "Seller's Maximum Equity";
      case 'investor':
        return "Investor's ROI Success";
    }
  };

  const getCalloutColor = (propertyType: 'buyer' | 'seller' | 'investor') => {
    switch (propertyType) {
      case 'buyer':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'seller':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'investor':
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results from Real Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how Dr. Jan Duffy&apos;s expertise translates into measurable success stories. 
            From luxury purchases to investment portfolios, our clients achieve exceptional outcomes.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setFilter('buyer')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'buyer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Buyers
            </button>
            <button
              onClick={() => setFilter('seller')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'seller'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Sellers
            </button>
            <button
              onClick={() => setFilter('investor')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'investor'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Investors
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Emotional Callout Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${getCalloutColor(testimonial.propertyType)} w-fit`}>
                {getEmotionalCallout(testimonial.propertyType)}
              </div>

              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  {testimonial.community && (
                    <p className="text-sm text-blue-600 font-medium">{testimonial.community}</p>
                  )}
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed flex-grow mb-4">
                &ldquo;{testimonial.fullQuote}&rdquo;
              </blockquote>

              {/* Key Stats */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconSymbol key={i} symbol='⭐' className='h-4 w-4 text-amber-400' ariaLabel='Rating star' />
                  ))}
                </div>
                {testimonial.dollarAmount && (
                  <div className="text-sm font-semibold text-gray-700">
                    {testimonial.dollarAmount}
                  </div>
                )}
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
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
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
