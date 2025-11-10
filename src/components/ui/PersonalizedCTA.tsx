'use client';

import { useState } from 'react';
import { PersonalizedForm } from './PersonalizedForm';
import { trackEvent } from '@/lib/analytics';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

export type PersonaType = 'seller' | 'buyer' | 'investor' | 'exploring';

interface PersonaOption {
  id: PersonaType;
  icon: IconSymbolKey;
  headline: string;
  description: string;
  buttonText: string;
  trustText: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

const personaOptions: PersonaOption[] = [
  {
    id: 'seller',
    icon: '🏡',
    headline: 'Selling Your Home?',
    description: 'Discover your home\'s true market value with a free comprehensive analysis. Get expert pricing strategies and learn how to maximize your sale price.',
    buttonText: 'Get Free Market Analysis',
    trustText: 'Free report • No obligations • Accurate pricing',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-yellow-600',
    borderColor: 'border-amber-500',
  },
  {
    id: 'buyer',
    icon: '🔑',
    headline: 'Buying a Home?',
    description: 'Access off-market properties, get personalized buyer strategy, and expert guidance through the entire purchase process.',
    buttonText: 'Get Buyer Strategy',
    trustText: 'Free consultation • Insider access • Expert guidance',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    borderColor: 'border-blue-500',
  },
  {
    id: 'investor',
    icon: '📈',
    headline: 'Investing in Real Estate?',
    description: 'Get investment criteria tailored to your goals. Review cash flow analysis, ROI projections, and build your portfolio with confidence.',
    buttonText: 'Get Investment Criteria',
    trustText: 'Free analysis • Portfolio building • Cash flow insights',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600',
    borderColor: 'border-green-500',
  },
  {
    id: 'exploring',
    icon: '💭',
    headline: 'Not Sure Where to Start?',
    description: 'Schedule a free strategy call to discuss your real estate goals. No pressure—just expert guidance to help you make informed decisions.',
    buttonText: 'Schedule Free Strategy Call',
    trustText: 'Free consultation • No pressure • Expert guidance',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    borderColor: 'border-purple-500',
  },
];

interface PersonalizedCTAProps {
  onPersonaSelect?: (persona: PersonaType) => void;
  className?: string;
}

export function PersonalizedCTA({ onPersonaSelect, className = '' }: PersonalizedCTAProps) {
  const [selectedPersona, setSelectedPersona] = useState<PersonaType | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handlePersonaSelect = (persona: PersonaType) => {
    setSelectedPersona(persona);
    setShowForm(true);
    
    // Track persona selection
    trackEvent('persona_selected', {
      action: 'persona_selected',
      category: 'lead_generation',
      persona,
      timestamp: new Date().toISOString(),
    });

    // Call optional callback
    if (onPersonaSelect) {
      onPersonaSelect(persona);
    }

    // Scroll to form smoothly
    setTimeout(() => {
      const formElement = document.getElementById('personalized-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedPersona(null);
  };

  if (showForm && selectedPersona) {
    return (
      <div className={className}>
        <PersonalizedForm 
          persona={selectedPersona}
          onBack={handleFormClose}
          onSuccess={handleFormClose}
        />
      </div>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Where Are You in Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your situation, and we'll provide personalized guidance tailored to your specific needs. No generic advice—just expert help for where you are right now.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {personaOptions.map((persona) => (
            <button
              key={persona.id}
              onClick={() => handlePersonaSelect(persona.id)}
              className={`
                group relative bg-white rounded-2xl p-6 shadow-lg
                hover:shadow-2xl transition-all duration-300
                border-2 ${persona.borderColor} hover:border-opacity-100
                border-opacity-30 text-left
                transform hover:-translate-y-2
                focus:outline-none focus:ring-4 focus:ring-offset-2
                focus:ring-opacity-50
              `}
              aria-label={`Select ${persona.headline}`}
            >
              {/* Icon */}
              <IconSymbol
                symbol={persona.icon}
                className="mb-4 h-12 w-12 text-amber-600 transform group-hover:scale-110 transition-transform duration-300"
                ariaLabel={`${persona.headline} icon`}
              />

              {/* Headline */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-opacity-90">
                {persona.headline}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {persona.description}
              </p>

              {/* Button */}
              <div className={`
                inline-flex items-center px-4 py-2 rounded-lg
                bg-gradient-to-r ${persona.gradientFrom} ${persona.gradientTo}
                text-white font-semibold text-sm
                group-hover:shadow-lg transition-shadow duration-300
                transform group-hover:scale-105
              `}>
                <span>{persona.buttonText}</span>
                <IconSymbol symbol='→' className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" ariaLabel='Arrow right' />
              </div>

              {/* Trust Text */}
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                {persona.trustText}
              </p>

              {/* Hover Effect Gradient Overlay */}
              <div className={`
                absolute inset-0 rounded-2xl
                bg-gradient-to-br ${persona.gradientFrom} ${persona.gradientTo}
                opacity-0 group-hover:opacity-5 transition-opacity duration-300
                pointer-events-none
              `} />
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-4 flex-wrap">
            <span className="flex items-center">
              <IconSymbol symbol='✓' className="h-4 w-4 text-green-500 mr-2" ariaLabel='Free consultation' />
              Free Consultation
            </span>
            <span className="flex items-center">
              <IconSymbol symbol='✓' className="h-4 w-4 text-green-500 mr-2" ariaLabel='No obligations' />
              No Obligations
            </span>
            <span className="flex items-center">
              <IconSymbol symbol='✓' className="h-4 w-4 text-green-500 mr-2" ariaLabel='Expert guidance' />
              Expert Guidance
            </span>
            <span className="flex items-center">
              <IconSymbol symbol='✓' className="h-4 w-4 text-green-500 mr-2" ariaLabel='Confidential' />
              Confidential Support
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Dr. Jan Duffy • Top 1% Las Vegas Agent • $127M+ Sales Volume
          </p>
        </div>
      </div>
    </section>
  );
}

