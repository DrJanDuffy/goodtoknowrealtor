'use client';

import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

const CARDS: { title: string; description: string; icon: IconSymbolKey }[] = [
  {
    title: 'Trusted Brand',
    description: "Backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched financial stability.",
    icon: '🏛️',
  },
  {
    title: 'Global Network',
    description: '50,000+ agents worldwide for seamless referrals and relocations.',
    icon: '🌐',
  },
  {
    title: 'Market Expertise',
    description: 'Serving Las Vegas since 2008, $127M+ in closed transactions.',
    icon: '📊',
  },
  {
    title: 'Full Service',
    description: 'Buying, selling, luxury, investment, relocation—we do it all.',
    icon: '✨',
  },
];

const QUOTE =
  'When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you\'re not just getting me—you\'re getting a global network of 50,000 agents, world-class marketing, and a brand that\'s synonymous with trust.';

export function WhyBerkshireSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Berkshire Hathaway HomeServices?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When you work with a Berkshire Hathaway HomeServices agent, you&apos;re backed by a name synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <IconSymbol symbol={card.icon} className="h-10 w-10 text-amber-500 mb-3" ariaLabel={card.title} />
              <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 italic">&ldquo;{QUOTE}&rdquo;</p>
          <cite className="mt-3 block text-gray-600 font-medium not-italic">
            — Dr. Jan Duffy, BHHS Nevada Properties
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
