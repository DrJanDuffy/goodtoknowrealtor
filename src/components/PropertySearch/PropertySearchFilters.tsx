'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

export interface PropertyFilters {
  location: string;
  priceMin: string;
  priceMax: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  sqftMin: string;
  sqftMax: string;
  features: string[];
}

interface PropertySearchFiltersProps {
  onFiltersChange: (filters: PropertyFilters) => void;
  initialFilters?: Partial<PropertyFilters>;
}

export function PropertySearchFilters({ onFiltersChange, initialFilters = {} }: PropertySearchFiltersProps) {
  const [filters: _filters, setFilters] = useState<PropertyFilters>({
    location: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    sqftMin: '',
    sqftMax: '',
    features: [],
    ...initialFilters
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const featureOptions = [
    'Pool',
    'Garage',
    'Fireplace',
    'Hardwood Floors',
    'Updated Kitchen',
    'Master Suite',
    'Garden',
    'Balcony',
    'Walk-in Closet',
    'Granite Countertops'
  ];

  const propertyTypes = [
    'Single Family',
    'Condo',
    'Townhouse',
    'Multi-Family',
    'Luxury',
    'Investment'
  ];

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const handleFilterChange = (key: keyof PropertyFilters, value: string | string[]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Announce filter changes to screen readers
    if (typeof value === 'string') {
      announce(`Filter updated: ${key} set to ${value || 'any'}`, 'polite');
    } else {
      announce(`Features updated: ${value.length} features selected`, 'polite');
    }
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    
    handleFilterChange('features', newFeatures);
  };

  const clearAllFilters = () => {
    const clearedFilters: PropertyFilters = {
      location: '',
      priceMin: '',
      priceMax: '',
      bedrooms: '',
      bathrooms: '',
      propertyType: '',
      sqftMin: '',
      sqftMax: '',
      features: []
    };
    setFilters(clearedFilters);
    announce('All filters cleared', 'polite');
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    Array.isArray(value) ? value.length > 0 : value !== ''
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
          Search Filters
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-secondary"
            aria-expanded={isExpanded.toString()}
            aria-controls="advanced-filters"
          >
            {isExpanded ? 'Hide' : 'Show'} Advanced Filters
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="btn btn-secondary"
              aria-label="Clear all search filters"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Basic Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            id="location-filter"
            type="text"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="City, neighborhood, or ZIP"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-describedby="location-help"
          />
          <div id="location-help" className="text-xs text-gray-500 mt-1">
            Enter city, neighborhood, or ZIP code
          </div>
        </div>

        <div>
          <label htmlFor="price-min-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Min Price
          </label>
          <select
            id="price-min-filter"
            value={filters.priceMin}
            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="100000">$100,000+</option>
            <option value="200000">$200,000+</option>
            <option value="300000">$300,000+</option>
            <option value="500000">$500,000+</option>
            <option value="750000">$750,000+</option>
            <option value="1000000">$1,000,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="price-max-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Max Price
          </label>
          <select
            id="price-max-filter"
            value={filters.priceMax}
            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="300000">Up to $300,000</option>
            <option value="500000">Up to $500,000</option>
            <option value="750000">Up to $750,000</option>
            <option value="1000000">Up to $1,000,000</option>
            <option value="1500000">Up to $1,500,000</option>
            <option value="2000000">Up to $2,000,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="property-type-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <select
            id="property-type-filter"
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any Type</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Bedroom/Bathroom Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label htmlFor="bedrooms-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <select
            id="bedrooms-filter"
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div>
          <label htmlFor="bathrooms-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Bathrooms
          </label>
          <select
            id="bathrooms-filter"
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="1.5">1.5+</option>
            <option value="2">2+</option>
            <option value="2.5">2.5+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label htmlFor="sqft-min-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Min Sq Ft
          </label>
          <input
            id="sqft-min-filter"
            type="number"
            value={filters.sqftMin}
            onChange={(e) => handleFilterChange('sqftMin', e.target.value)}
            placeholder="Any"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-describedby="sqft-help"
          />
          <div id="sqft-help" className="text-xs text-gray-500 mt-1">
            Minimum square footage
          </div>
        </div>

        <div>
          <label htmlFor="sqft-max-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Max Sq Ft
          </label>
          <input
            id="sqft-max-filter"
            type="number"
            value={filters.sqftMax}
            onChange={(e) => handleFilterChange('sqftMax', e.target.value)}
            placeholder="Any"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Advanced Filters */}
      <div 
        id="advanced-filters"
        className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        aria-hidden={!isExpanded}
      >
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Features & Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {featureOptions.map(feature => (
              <label
                key={feature}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
              >
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  aria-describedby={`${feature.toLowerCase().replace(/\s+/g, '-')}-help`}
                />
                <span className="text-sm text-gray-700">{feature}</span>
                <div id={`${feature.toLowerCase().replace(/\s+/g, '-')}-help`} className="sr-only">
                  {feature} feature filter
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {filters.location && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                Location: {filters.location}
                <button
                  onClick={() => handleFilterChange('location', '')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  aria-label={`Remove location filter: ${filters.location}`}
                >
                  ×
                </button>
              </span>
            )}
            {filters.priceMin && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                Min: ${parseInt(filters.priceMin).toLocaleString()}
                <button
                  onClick={() => handleFilterChange('priceMin', '')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  aria-label={`Remove minimum price filter`}
                >
                  ×
                </button>
              </span>
            )}
            {filters.priceMax && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                Max: ${parseInt(filters.priceMax).toLocaleString()}
                <button
                  onClick={() => handleFilterChange('priceMax', '')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  aria-label={`Remove maximum price filter`}
                >
                  ×
                </button>
              </span>
            )}
            {filters.features.map(feature => (
              <span key={feature} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                {feature}
                <button
                  onClick={() => handleFeatureToggle(feature)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  aria-label={`Remove ${feature} filter`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
