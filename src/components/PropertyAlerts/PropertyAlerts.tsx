'use client';

import { useState } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

export interface AlertPreferences {
  id?: string;
  email: string;
  name: string;
  phone?: string;
  locations: string[];
  priceMin: number;
  priceMax: number;
  bedrooms: number;
  bathrooms: number;
  propertyTypes: string[];
  features: string[];
  maxAge: number; // days
  frequency: 'immediate' | 'daily' | 'weekly';
  status: 'active' | 'paused' | 'inactive';
}

interface PropertyAlertsProps {
  className?: string;
}

export function PropertyAlerts({ className = '' }: PropertyAlertsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<AlertPreferences>({
    email: '',
    name: '',
    phone: '',
    locations: [],
    priceMin: 0,
    priceMax: 2000000,
    bedrooms: 1,
    bathrooms: 1,
    propertyTypes: [],
    features: [],
    maxAge: 7,
    frequency: 'daily',
    status: 'active'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const propertyTypes = [
    'Single Family',
    'Condo',
    'Townhouse',
    'Multi-Family',
    'Luxury',
    'Investment'
  ];

  const popularFeatures = [
    'Pool',
    'Garage',
    'Fireplace',
    'Hardwood Floors',
    'Updated Kitchen',
    'Master Suite',
    'Garden',
    'Balcony',
    'Walk-in Closet',
    'Granite Countertops',
    'Stainless Steel Appliances',
    'Central Air',
    'Hardwood Floors'
  ];

  const lasVegasAreas = [
    'Summerlin',
    'Henderson',
    'North Las Vegas',
    'Downtown Las Vegas',
    'Green Valley',
    'Anthem',
    'Seven Hills',
    'MacDonald Ranch',
    'The Ridges',
    'Southern Highlands',
    'Spring Valley',
    'Paradise',
    'Enterprise',
    'Las Vegas Valley'
  ];

  const handleInputChange = (field: keyof AlertPreferences, value: string | number) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocationToggle = (location: string) => {
    const newLocations = preferences.locations.includes(location)
      ? preferences.locations.filter(l => l !== location)
      : [...preferences.locations, location];
    
    handleInputChange('locations', newLocations);
  };

  const handlePropertyTypeToggle = (type: string) => {
    const newTypes = preferences.propertyTypes.includes(type)
      ? preferences.propertyTypes.filter(t => t !== type)
      : [...preferences.propertyTypes, type];
    
    handleInputChange('propertyTypes', newTypes);
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = preferences.features.includes(feature)
      ? preferences.features.filter(f => f !== feature)
      : [...preferences.features, feature];
    
    handleInputChange('features', newFeatures);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      announce('Property alerts subscription created successfully', 'polite');
      setSubmitted(true);
      setIsOpen(false);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitted(false);
        setPreferences({
          email: '',
          name: '',
          phone: '',
          locations: [],
          priceMin: 0,
          priceMax: 2000000,
          bedrooms: 1,
          bathrooms: 1,
          propertyTypes: [],
          features: [],
          maxAge: 7,
          frequency: 'daily',
          status: 'active'
        });
      }, 3000);
    } catch {
      announce('Error creating property alerts subscription', 'assertive');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`btn btn-primary ${className}`}
        aria-label="Create property alerts subscription"
      >
        📧 Create Property Alerts
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create Property Alerts</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Close property alerts form"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Get notified when new properties match your criteria
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="alert-name" className="block text-base font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="alert-name"
                      type="text"
                      value={preferences.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-describedby="alert-name-help"
                    />
                    <div id="alert-name-help" className="text-sm text-gray-600 mt-1">
                      Your full name for personalized alerts
                    </div>
                  </div>

                  <div>
                    <label htmlFor="alert-email" className="block text-base font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="alert-email"
                      type="email"
                      value={preferences.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-describedby="alert-email-help"
                    />
                    <div id="alert-email-help" className="text-sm text-gray-600 mt-1">
                      Where to send your property alerts
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="alert-phone" className="block text-base font-semibold text-gray-900 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="alert-phone"
                      type="tel"
                      value={preferences.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-describedby="alert-phone-help"
                    />
                    <div id="alert-phone-help" className="text-sm text-gray-600 mt-1">
                      For urgent property notifications
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Preferences */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas of Interest *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {lasVegasAreas.map(area => (
                        <label
                          key={area}
                          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={preferences.locations.includes(area)}
                            onChange={() => handleLocationToggle(area)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Criteria */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="alert-price-min" className="block text-sm font-medium text-gray-700 mb-2">
                      Min Price
                    </label>
                    <input
                      id="alert-price-min"
                      type="number"
                      value={preferences.priceMin}
                      onChange={(e) => handleInputChange('priceMin', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="alert-price-max" className="block text-sm font-medium text-gray-700 mb-2">
                      Max Price
                    </label>
                    <input
                      id="alert-price-max"
                      type="number"
                      value={preferences.priceMax}
                      onChange={(e) => handleInputChange('priceMax', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="alert-bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Min Bedrooms
                    </label>
                    <select
                      id="alert-bedrooms"
                      value={preferences.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={0}>Any</option>
                      <option value={1}>1+</option>
                      <option value={2}>2+</option>
                      <option value={3}>3+</option>
                      <option value={4}>4+</option>
                      <option value={5}>5+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="alert-bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Min Bathrooms
                    </label>
                    <select
                      id="alert-bathrooms"
                      value={preferences.bathrooms}
                      onChange={(e) => handleInputChange('bathrooms', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={0}>Any</option>
                      <option value={1}>1+</option>
                      <option value={1.5}>1.5+</option>
                      <option value={2}>2+</option>
                      <option value={2.5}>2.5+</option>
                      <option value={3}>3+</option>
                      <option value={4}>4+</option>
                    </select>
                  </div>
                </div>

                {/* Property Types */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Types
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {propertyTypes.map(type => (
                      <label
                        key={type}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={preferences.propertyTypes.includes(type)}
                          onChange={() => handlePropertyTypeToggle(type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Must-Have Features
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {popularFeatures.map(feature => (
                      <label
                        key={feature}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={preferences.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alert Settings */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="alert-frequency" className="block text-sm font-medium text-gray-700 mb-2">
                      Alert Frequency
                    </label>
                    <select
                      id="alert-frequency"
                      value={preferences.frequency}
                      onChange={(e) => handleInputChange('frequency', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="immediate">Immediate</option>
                      <option value="daily">Daily Digest</option>
                      <option value="weekly">Weekly Summary</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="alert-max-age" className="block text-sm font-medium text-gray-700 mb-2">
                      Max Property Age (Days)
                    </label>
                    <select
                      id="alert-max-age"
                      value={preferences.maxAge}
                      onChange={(e) => handleInputChange('maxAge', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={1}>1 day</option>
                      <option value={3}>3 days</option>
                      <option value={7}>1 week</option>
                      <option value={14}>2 weeks</option>
                      <option value={30}>1 month</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Alert Summary</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• {preferences.locations.length} location(s) selected</p>
                  <p>• Price range: {formatCurrency(preferences.priceMin)} - {formatCurrency(preferences.priceMax)}</p>
                  <p>• {preferences.bedrooms}+ bedrooms, {preferences.bathrooms}+ bathrooms</p>
                  <p>• {preferences.propertyTypes.length} property type(s) selected</p>
                  <p>• {preferences.features.length} feature(s) required</p>
                  <p>• {preferences.frequency} notifications</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !preferences.name || !preferences.email || preferences.locations.length === 0}
                  className="btn btn-primary"
                >
                  {isSubmitting ? 'Creating Alerts...' : 'Create Property Alerts'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {submitted && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Property alerts created successfully!
          </div>
        </div>
      )}
    </>
  );
}
