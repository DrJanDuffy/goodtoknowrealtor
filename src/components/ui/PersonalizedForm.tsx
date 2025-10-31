'use client';

import { useState } from 'react';
import { PersonaType } from './PersonalizedCTA';
import { trackEvent } from '@/lib/analytics';

interface PersonalizedFormProps {
  persona: PersonaType;
  onBack?: () => void;
  onSuccess?: () => void;
}

type FieldOpt = { value: string; label: string };

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  maxLength?: number;
  options?: FieldOpt[];
}

// Field definitions for each persona
const getPersonaFields = (persona: PersonaType): FormField[] => {
  const baseFields: FormField[] = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter your full name',
      maxLength: 50,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email' as const,
      required: true,
      placeholder: 'Enter your email address',
      maxLength: 254,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel' as const,
      required: true,
      placeholder: '(702) 555-0123',
      maxLength: 20,
    },
  ];

  switch (persona) {
    case 'seller':
      return [
        ...baseFields,
        {
          name: 'homeAddress',
          label: 'Property Address',
          type: 'text' as const,
          required: true,
          placeholder: '123 Main St, Las Vegas, NV',
          maxLength: 200,
        },
        {
          name: 'currentMortgage',
          label: 'Current Mortgage Balance (Optional)',
          type: 'text' as const,
          required: false,
          placeholder: '$XXX,XXX or "Not sure"',
          maxLength: 50,
        },
        {
          name: 'timeline',
          label: 'When do you want to sell?',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'immediately', label: 'Immediately' },
            { value: '1-3-months', label: 'Within 1-3 Months' },
            { value: '3-6-months', label: 'Within 3-6 Months' },
            { value: '6-12-months', label: 'Within 6-12 Months' },
            { value: 'exploring', label: 'Just Exploring' },
          ],
        },
        {
          name: 'homeUpdates',
          label: 'Recent Updates or Improvements (Optional)',
          type: 'textarea' as const,
          required: false,
          placeholder: 'New roof, kitchen remodel, pool, etc.',
          maxLength: 500,
        },
      ];

    case 'buyer':
      return [
        ...baseFields,
        {
          name: 'budget',
          label: 'Target Budget Range',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'under-300k', label: 'Under $300K' },
            { value: '300k-500k', label: '$300K - $500K' },
            { value: '500k-750k', label: '$500K - $750K' },
            { value: '750k-1m', label: '$750K - $1M' },
            { value: 'over-1m', label: 'Over $1M' },
            { value: 'not-sure', label: 'Not Sure Yet' },
          ],
        },
        {
          name: 'areas',
          label: 'Preferred Areas / Neighborhoods',
          type: 'text' as const,
          required: false,
          placeholder: 'Summerlin, Henderson, Downtown, etc.',
          maxLength: 200,
        },
        {
          name: 'timeline',
          label: 'When do you want to buy?',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'immediately', label: 'Immediately' },
            { value: '1-3-months', label: 'Within 1-3 Months' },
            { value: '3-6-months', label: 'Within 3-6 Months' },
            { value: '6-12-months', label: 'Within 6-12 Months' },
            { value: 'exploring', label: 'Just Exploring' },
          ],
        },
        {
          name: 'propertyType',
          label: 'Property Type Interest (Optional)',
          type: 'text' as const,
          required: false,
          placeholder: 'Single family, condo, townhome, luxury, etc.',
          maxLength: 100,
        },
      ];

    case 'investor':
      return [
        ...baseFields,
        {
          name: 'portfolioSize',
          label: 'Current Portfolio Size',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'first-property', label: 'First Investment Property' },
            { value: '1-2-properties', label: '1-2 Properties Basket' },
            { value: '3-5-properties', label: '3-5 Properties' },
            { value: '6-plus-properties', label: '6+ Properties' },
            { value: 'not-disclosed', label: 'Prefer Not to Disclose' },
          ],
        },
        {
          name: 'investmentGoals',
          label: 'Primary Investment Goal',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'cash-flow', label: 'Monthly Cash Flow' },
            { value: 'appreciation', label: 'Long-term Appreciation' },
            { value: 'fix-flip', label: 'Fix and Flip' },
            { value: 'diversification', label: 'Portfolio Diversification' },
            { value: 'tax-benefits', label: 'Tax Benefits' },
            { value: 'multiple', label: 'Multiple Goals' },
          ],
        },
        {
          name: 'budgetRange',
          label: 'Investment Budget Range',
          type: 'select' as const,
          required: true,
          options: [
            { value: 'under-200k', label: 'Under $200K' },
            { value: '200k-400k', label: '$200K - $400K' },
            { value: '400k-750k', label: '$400K - $750K' },
            { value: '750k-plus', label: '$750K+' },
            { value: 'not-sure', label: 'Not Sure Yet' },
          ],
        },
        {
          name: 'propertyType',
          label: 'Preferred Property Type (Optional)',
          type: 'text' as const,
          required: false,
          placeholder: 'Single family rental, multi-family, commercial, etc.',
          maxLength: 100,
        },
      ];

    case 'exploring':
    default:
      return [
        ...baseFields,
        {
          name: 'situation',
          label: 'What brings you here today?',
          type: 'textarea' as const,
          required: false,
          placeholder: 'Tell us a bit about your situation and goals...',
          maxLength: 500,
        },
        {
          name: 'timeline',
          label: 'Timeline (Optional)',
          type: 'select' as const,
          required: false,
          options: [
            { value: 'immediately', label: 'Immediately' },
            { value: '1-3-months', label: 'Within 1-3 Months' },
            { value: '3-6-months', label: 'Within 3-6 Months' },
            { value: '6-12-months', label: 'Within 6-12 Months' },
            { value: 'just-exploring', label: 'Just Exploring Options' },
            { value: 'no-timeline', label: 'No Specific Timeline' },
          ],
        },
      ];
  }
};

const getPersonaHeadline = (persona: PersonaType): { title: string; subtitle: string; buttonText: string } => {
  switch (persona) {
    case 'seller':
      return {
        title: 'Get Your Free Market Analysis',
        subtitle: 'Discover your home\'s true market value and maximize your sale price',
        buttonText: 'Get My Free Market Analysis',
      };
    case 'buyer':
      return {
        title: 'Get Your Personalized Buyer Strategy',
        subtitle: 'Access off-market properties and expert guidance through your purchase',
        buttonText: 'Get My Buyer Strategy',
      };
    case 'investor':
      return {
        title: 'Get Your Investment Criteria',
        subtitle: 'Review cash flow analysis and build your portfolio with confidence',
        buttonText: 'Get My Investment Criteria',
      };
    case 'exploring':
    default:
      return {
        title: 'Schedule Your Free Strategy Call',
        subtitle: 'Let\'s discuss your real estate goals and find the best path forward',
        buttonText: 'Schedule My Strategy Call',
      };
  }
};

export function PersonalizedForm({ persona, onBack, onSuccess }: PersonalizedFormProps) {
  const fields = getPersonaFields(persona);
  const { title, subtitle, buttonText } = getPersonaHeadline(persona);
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      const value = formData[field.name] || '';
      
      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      
      if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[field.name] = 'Please enter a valid email address';
      }
      
      if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
        if (!phoneRegex.test(value)) {
          newErrors[field.name] = 'Please enter a valid phone number';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Track form submission
    trackEvent('personalized_form_submit', {
      action: 'personalized_form_submit',
      category: 'lead_generation',
      persona,
      timestamp: new Date().toISOString(),
    });

    // Prepare data
    const submitData = {
      ...formData,
      persona,
      _csrf: '', // Will be handled by SecureForm if needed
      message: `Persona: ${persona}\n\n` + Object.entries(formData)
        .filter(([key]) => !key.startsWith('_'))
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': '',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        
        // Track successful submission
        trackEvent('personalized_form_success', {
          action: 'personalized_form_success',
          category: 'lead_generation',
          persona,
          timestamp: new Date().toISOString(),
        });

        // Call success callback after a delay
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 3000);
        }
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'There was an error submitting your form. Please call (702) 222-1964 directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="personalized-form" className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-lg text-gray-700 mb-6">
            We've received your information and will contact you within 24 hours.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
            <p className="text-blue-800 font-semibold mb-3">What Happens Next:</p>
            <ul className="text-blue-700 space-y-2 text-sm">
              {persona === 'seller' && (
                <>
                  <li>✓ We'll prepare your free market analysis</li>
                  <li>✓ Review current Las Vegas market trends for your area</li>
                  <li>✓ Provide pricing strategies to maximize your sale</li>
                </>
              )}
              {persona === 'buyer' && (
                <>
                  <li>✓ We'll create your personalized buyer strategy</li>
                  <li>✓ Share off-market properties matching your criteria</li>
                  <li>✓ Guide you through the entire purchase process</li>
                </>
              )}
              {persona === 'investor' && (
                <>
                  <li>✓ We'll prepare investment criteria for your goals</li>
                  <li>✓ Share cash flow analysis and ROI projections</li>
                  <li>✓ Connect you with the best investment opportunities</li>
                </>
              )}
              {persona === 'exploring' && (
                <>
                  <li>✓ We'll schedule your free strategy call</li>
                  <li>✓ Discuss your real estate goals and options</li>
                  <li>✓ Provide expert guidance without any pressure</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn btn-primary px-8 py-3"
            >
              Call (702) 222-1964
            </a>
            <button
              onClick={onBack}
              className="btn btn-outline px-8 py-3"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="personalized-form" className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        {onBack && (
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 mb-4 flex items-center text-sm"
            aria-label="Go back"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to options
          </button>
        )}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-required={field.required}
                aria-invalid={!!errors[field.name]}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-required={field.required}
                aria-invalid={!!errors[field.name]}
              >
                <option value="">Select an option...</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-required={field.required}
                aria-invalid={!!errors[field.name]}
              />
            )}

            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </button>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            <span className="font-semibold">Free consultation</span> • No obligations • Expert guidance
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Dr. Jan Duffy • Top 1% Las Vegas Agent • $127M+ Sales Volume
          </p>
        </div>
      </form>
    </div>
  );
}

