'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  features: string[];
  image: string;
  description: string;
  mlsNumber: string;
  status: 'For Sale' | 'Pending' | 'Sold';
}

interface PropertyComparisonProps {
  properties: Property[];
  onClose: () => void;
}

export function PropertyComparison({ properties, onClose }: PropertyComparisonProps) {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>(properties);
  const { announce } = useScreenReaderAnnouncements();

  const maxComparisons = 4;

  const removeProperty = (propertyId: string) => {
    const newSelection = selectedProperties.filter(p => p.id !== propertyId);
    setSelectedProperties(newSelection);
    announce(`Property removed from comparison`, 'polite');
    
    if (newSelection.length === 0) {
      onClose();
    }
  };

  const clearAll = () => {
    setSelectedProperties([]);
    announce('All properties removed from comparison', 'polite');
    onClose();
  };

  useEffect(() => {
    if (selectedProperties.length > 0) {
      announce(`Comparing ${selectedProperties.length} properties`, 'polite');
    }
  }, [selectedProperties, announce]);

  if (selectedProperties.length === 0) {
    return null;
  }

  const comparisonFields = [
    { key: 'price', label: 'Price', formatter: (value: number) => `$${value.toLocaleString()}` },
    { key: 'bedrooms', label: 'Bedrooms', formatter: (value: number) => `${value}` },
    { key: 'bathrooms', label: 'Bathrooms', formatter: (value: number) => `${value}` },
    { key: 'sqft', label: 'Square Feet', formatter: (value: number) => `${value.toLocaleString()}` },
    { key: 'lotSize', label: 'Lot Size', formatter: (value: string) => value },
    { key: 'yearBuilt', label: 'Year Built', formatter: (value: number) => `${value}` },
    { key: 'propertyType', label: 'Type', formatter: (value: string) => value },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Property Comparison ({selectedProperties.length} of {maxComparisons})
          </h2>
          <div className="flex gap-2">
            <button
              onClick={clearAll}
              className="btn btn-secondary"
              aria-label="Clear all properties from comparison"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              aria-label="Close property comparison"
            >
              Close
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full" role="table" aria-label="Property comparison table">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-medium text-gray-900 min-w-[200px]">Property</th>
                {selectedProperties.map((property, index) => (
                  <th key={property.id} className="text-center p-4 font-medium text-gray-900 min-w-[250px] relative">
                    <button
                      onClick={() => removeProperty(property.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full w-6 h-6 flex items-center justify-center"
                      aria-label={`Remove ${property.title} from comparison`}
                    >
                      ×
                    </button>
                    <div className="mt-6">
                      <div className="relative w-full h-32 mb-2">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
                        {property.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">{property.address}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        property.status === 'For Sale' 
                          ? 'bg-green-100 text-green-800'
                          : property.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFields.map((field, fieldIndex) => (
                <tr key={field.key} className={`border-b border-gray-100 ${fieldIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-4 font-medium text-gray-700">{field.label}</td>
                  {selectedProperties.map(property => (
                    <td key={property.id} className="p-4 text-center text-gray-900">
                      {field.formatter((property as any)[field.key])}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Features Row */}
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-4 font-medium text-gray-700">Features</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4">
                    <div className="space-y-1">
                      {property.features.slice(0, 5).map(feature => (
                        <span
                          key={feature}
                          className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mr-1 mb-1"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 5 && (
                        <span className="text-xs text-gray-500">
                          +{property.features.length - 5} more
                        </span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Description Row */}
              <tr className="bg-white">
                <td className="p-4 font-medium text-gray-700">Description</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 text-sm text-gray-900">
                    <p className="line-clamp-3">{property.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-6 border-t border-gray-200">
          {selectedProperties.map(property => (
            <div key={property.id} className="flex flex-col gap-2">
              <button
                className="btn btn-primary"
                aria-label={`View details for ${property.title}`}
              >
                View Details
              </button>
              <button
                className="btn btn-secondary"
                aria-label={`Schedule showing for ${property.title}`}
              >
                Schedule Showing
              </button>
              <button
                className="btn btn-secondary"
                aria-label={`Save ${property.title} to favorites`}
              >
                Save to Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hook for managing property comparison
export function usePropertyComparison() {
  const [comparisonProperties, setComparisonProperties] = useState<Property[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToComparison = (property: Property) => {
    if (comparisonProperties.find(p => p.id === property.id)) {
      return; // Already in comparison
    }
    
    if (comparisonProperties.length >= 4) {
      return; // Max 4 properties
    }

    setComparisonProperties(prev => [...prev, property]);
  };

  const removeFromComparison = (propertyId: string) => {
    setComparisonProperties(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => {
    setComparisonProperties([]);
    setIsOpen(false);
  };

  const openComparison = () => {
    if (comparisonProperties.length > 0) {
      setIsOpen(true);
    }
  };

  const closeComparison = () => {
    setIsOpen(false);
  };

  return {
    comparisonProperties,
    isOpen,
    addToComparison,
    removeFromComparison,
    clearComparison,
    openComparison,
    closeComparison,
    canAddMore: comparisonProperties.length < 4,
    hasProperties: comparisonProperties.length > 0
  };
}
