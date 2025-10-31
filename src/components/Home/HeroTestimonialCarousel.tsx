'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroTestimonials } from '@/data/testimonials';

export function HeroTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroTestimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentTestimonial = heroTestimonials[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroTestimonials.length) % heroTestimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroTestimonials.length);
  };

  return (
    <section 
      className="bg-white py-12 border-b border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-900 font-medium mb-6 leading-relaxed px-4">
                  &ldquo;{currentTestimonial.shortQuote}&rdquo;
                </blockquote>

                {/* Author & Location */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                  <cite className="text-base md:text-lg font-semibold text-gray-900 not-italic">
                    {currentTestimonial.author}
                  </cite>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <span className="text-sm md:text-base text-gray-600">
                    {currentTestimonial.community?.split(' - ')[0] || currentTestimonial.location}
                  </span>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 hover:text-blue-600 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 hover:text-blue-600 border border-gray-200"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {heroTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
