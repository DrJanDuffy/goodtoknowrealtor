'use client';

import { useState } from 'react';

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada.',
  },
  {
    question: 'How long does the home buying process take?',
    answer:
      'Typically 30–45 days from accepted offer to closing. Timeline depends on financing, inspections, and your specific situation. We guide you through each step to keep the process on track.',
  },
  {
    question: 'Do you help with home valuations?',
    answer:
      'Yes. We provide data-driven home valuations and equity tracking. Use our home value tools on this site or schedule a consultation for a detailed comparative market analysis.',
  },
  {
    question: 'What makes you different from other real estate agents?',
    answer:
      'Dr. Jan Duffy combines Top 1% performance with doctoral-level market research, 20+ years of experience, and the Berkshire Hathaway HomeServices network. You get white-glove service and proven results.',
  },
  {
    question: 'Can you help with investment properties?',
    answer:
      'Yes. We work with investors on single-family, multifamily, and luxury investment properties across Las Vegas and Henderson, including ROI analysis and off-market opportunities.',
  },
  {
    question: 'What are your fees?',
    answer:
      'Commission structure is discussed during your consultation and depends on the type of transaction. As a seller, you typically pay a commission at closing; buyer representation is often at no direct cost to you.',
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our real estate services
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100/80 transition-colors"
                aria-expanded={openIndex === index ? 'true' : 'false'}
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 text-2xl text-amber-600 transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 pt-0 text-gray-600 border-t border-gray-100">
                  <p className="pt-3">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
