'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PersonaCard {
  id: string;
  persona: 'buyers' | 'sellers' | 'investors';
  headline: string;
  painPoint: string;
  approach: string;
  result: {
    headline: string;
    details: string;
  };
  client: {
    name: string;
    location: string;
    quote: string;
    image: string;
    rating: number;
  };
  stats: {
    partiallyHighlighted: string;
    full: string;
  }[];
  cta: {
    text: string;
    link: string;
  };
  icon: string;
}

const personas: PersonaCard[] = [
  {
    id: 'buyers',
    persona: 'buyers',
    headline: 'Stop Losing Homes to Higher Offers',
    painPoint: 'I searched 3 homes but lost every offer to higher bids. I kept getting outbid, paying above asking, or watching my dream home go to cash buyers. I was stuck in bidding wars with no advantage.',
    approach: 'Dr. Jan leverages her Top 1% agent network to give you access to off-market properties that never hit public listings. She uses insider market knowledge to craft winning offers without overpaying. Her negotiation strategy helps clients secure homes at asking price—not above it.',
    result: {
      headline: 'First offer accepted, $850K home in Summerlin, 18 days to closing—UNDER asking price.',
      details: '$850K Purchase | 18 Days to Close'
    },
    client: {
      name: 'Sarah & Mike Johnson',
      location: 'Summerlin',
      quote: 'Lost 3 homes to higher offers. Dr. Jan found us an off-market property—first offer accepted, UNDER asking price.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    },
    stats: [
      { partiallyHighlighted: '40%', full: 'of buyer clients secure off-market properties' },
      { partiallyHighlighted: '$25K-$50K', full: 'average savings vs. competitive bidding' },
      { partiallyHighlighted: '22 days', full: 'average time to close (vs. industry 35-45 days)' }
    ],
    cta: {
      text: 'See Off-Market Properties →',
      link: '/exclusive'
    },
    icon: '🏠'
  },
  {
    id: 'sellers',
    persona: 'sellers',
    headline: "Don't Leave $50K-$125K on the Table",
    painPoint: "Online estimate said $450K but felt low. I worried about pricing too high and sitting on the market for months, or pricing too low and leaving money behind. I didn't know which upgrades would actually pay off.",
    approach: "Dr. Jan's data-driven pricing strategy analyzes 200+ comparable properties, not just automated estimates. She uses professional staging and targeted marketing to attract 8+ qualified offers. Her approach maximizes your sale price while minimizing time on market.",
    result: {
      headline: 'Sold for $125K over asking in just 6 days. Eight competing offers. Closed in 14 days total.',
      details: '$125K Over Asking | 6 Days on Market'
    },
    client: {
      name: 'Robert & Diane Chen',
      location: 'Henderson',
      quote: "Worried we'd sit on market for months. Dr. Jan's staging and pricing strategy: 8 offers in 6 days, $125K over asking.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    },
    stats: [
      { partiallyHighlighted: '22 days', full: 'average time to sell (vs. market 45+ days)' },
      { partiallyHighlighted: '8-15%', full: 'average premium above target price' },
      { partiallyHighlighted: '73%', full: 'receive multiple offers within first week' }
    ],
    cta: {
      text: 'Get Free Market Analysis →',
      link: '/home-value'
    },
    icon: '💰'
  },
  {
    id: 'investors',
    persona: 'investors',
    headline: 'Build Wealth, Not Regrets',
    painPoint: "My last 2 deals looked good but weren't. I bought properties that seemed profitable on paper, but hidden costs, poor locations, and market timing issues killed my returns. I needed someone who could identify real opportunities, not just listings.",
    approach: "Dr. Jan combines market data with investment analysis to identify undervalued properties in emerging neighborhoods. She performs rigorous due diligence to avoid problematic deals. Her portfolio strategy focuses on cash flow, appreciation, and long-term wealth building—not just quick flips.",
    result: {
      headline: '$2.3M rental portfolio built. Cash flow increased 340% since 2022. Saved from 2 bad deals.',
      details: '$2.3M Portfolio | 340% Cash Flow Increase'
    },
    client: {
      name: 'Alex Martinez',
      location: 'Las Vegas',
      quote: "Built a $2.3M rental portfolio with Dr. Jan's guidance. Cash flow increased 340% since 2022.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5
    },
    stats: [
      { partiallyHighlighted: '12-18%', full: 'annual returns for portfolio clients' },
      { partiallyHighlighted: '$500K+', full: 'saved from bad investments via due diligence' },
      { partiallyHighlighted: '$1.5M-$3M', full: 'average portfolio built over 2-3 years' }
    ],
    cta: {
      text: 'Discuss Investment Strategy →',
      link: '/investing'
    },
    icon: '📈'
  }
];

export function TransformationSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Three Types of Clients. One Proven Track Record.
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            See how Dr. Jan Duffy transforms real estate challenges into measurable results for buyers, sellers, and investors across Las Vegas.
          </p>
        </div>

        {/* Three Persona Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {personas.map((persona) => (
            <div
              key={persona.id}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                hoveredCard === persona.id ? 'border-amber-400 scale-105' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredCard(persona.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon & Headline */}
              <div className='text-center mb-6'>
                <div className='text-5xl mb-4'>{persona.icon}</div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {persona.headline}
                </h3>
              </div>

              {/* Pain Point */}
              <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg'>
                <p className='text-sm font-semibold text-red-900 mb-2'>THE PROBLEM:</p>
                <p className='text-gray-700 italic leading-relaxed'>{persona.painPoint}</p>
              </div>

              {/* Dr. Jan's Approach */}
              <div className='mb-6'>
                <p className='text-sm font-semibold text-blue-900 mb-2'>DR. JAN'S APPROACH:</p>
                <p className='text-gray-700 leading-relaxed'>{persona.approach}</p>
              </div>

              {/* Result */}
              <div className='mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg'>
                <p className='text-sm font-semibold text-green-900 mb-2'>THE RESULT:</p>
                <p className='text-lg font-bold text-green-900 mb-2'>{persona.result.headline}</p>
                <p className='text-sm text-green-700 font-semibold'>{persona.result.details}</p>
              </div>

              {/* Client Proof */}
              <div className='mb-6 p-4 bg-gray-50 rounded-lg'>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0'>
                    <Image
                      src={persona.client.image}
                      alt={persona.client.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-gray-900'>{persona.client.name}</h4>
                    <p className='text-sm text-gray-600'>{persona.client.location}</p>
                    <div className='flex text-amber-400 mt-1'>
                      {[...Array(persona.client.rating)].map((_, i) => (
                        <span key={i} className='text-sm'>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className='text-gray-700 text-sm italic leading-relaxed'>
                  &ldquo;{persona.client.quote}&rdquo;
                </blockquote>
                <Link
                  href='/testimonials'
                  className='text-xs text-blue-600 hover:text-blue-800 font-semibold mt-2 inline-block'
                >
                  Read full story →
                </Link>
              </div>

              {/* Supporting Stats */}
              <div className='mb-6 space-y-2'>
                {persona.stats.map((stat, index) => (
                  <div key={index} className='flex items-start gap-2 text-sm'>
                    <span className='text-green-600 font-bold'>✓</span>
                    <span className='text-gray-700'>
                      <span className='font-bold text-gray-900'>{stat.partiallyHighlighted}</span>{' '}
                      {stat.full}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={persona.cta.link}
                className='block w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center shadow-md hover:shadow-lg'
              >
                {persona.cta.text}
              </Link>
            </div>
          ))}
        </div>

        {/* Master CTA */}
        <div className='text-center bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-12'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Ready to Transform Your Real Estate Experience?
          </h3>
          <p className='text-lg text-gray-700 mb-8 max-w-2xl mx-auto'>
            Whether you're buying, selling, or investing, Dr. Jan Duffy delivers results that exceed expectations.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl'
            >
              Schedule Consultation
            </Link>
            <a
              href='tel:7022221964'
              className='bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl'
            >
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
