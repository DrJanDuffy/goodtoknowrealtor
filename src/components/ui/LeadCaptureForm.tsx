'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
  className?: string;
}

export function LeadCaptureForm({ 
  title = "Get Your Free Consultation",
  subtitle = "Expert guidance from Las Vegas's Top 1% real estate agent",
  source = "general",
  className = ""
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buyer',
    timeline: 'within-3-months',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'lead_generation',
        event_label: source,
        value: 1,
      });
    }

    // Store lead data (in a real app, this would go to your CRM)
    const leadData = {
      ...formData,
      source,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    // Simulate API call
    try {
      console.log('Lead captured:', leadData);
      
      // In a real implementation, you would send this to your CRM
      // await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(leadData),
      // });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Dr. Jan Duffy will contact you within 24 hours to discuss your real estate needs.
        </p>
        <div className="text-sm text-green-600">
          <p>📞 Call (702) 222-1964 for immediate assistance</p>
          <p>📧 Check your email for confirmation</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(702) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
              I'm interested in:
            </label>
            <select
              id="interest"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="buyer">Buying a Home</option>
              <option value="seller">Selling a Home</option>
              <option value="investor">Real Estate Investment</option>
              <option value="luxury">Luxury Properties</option>
              <option value="relocation">Relocation Services</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
              Timeline:
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="immediately">Immediately</option>
              <option value="within-1-month">Within 1 Month</option>
              <option value="within-3-months">Within 3 Months</option>
              <option value="within-6-months">Within 6 Months</option>
              <option value="just-exploring">Just Exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range:
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Budget Range</option>
              <option value="under-300k">Under $300K</option>
              <option value="300k-500k">$300K - $500K</option>
              <option value="500k-750k">$500K - $750K</option>
              <option value="750k-1m">$750K - $1M</option>
              <option value="1m-plus">$1M+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information:
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your specific needs, questions, or goals..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Consultation'}
        </button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-2">
          <span>✓ Free Consultation</span>
          <span>✓ No Obligation</span>
          <span>✓ Expert Guidance</span>
        </div>
        <p className="text-xs text-gray-400">
          Dr. Jan Duffy • Top 1% Las Vegas Agent • $127M+ Sales Volume
        </p>
      </div>
    </div>
  );
}

