'use client';

import { useState, useEffect, useRef } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

export interface MapMarker {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'property' | 'school' | 'amenity' | 'transportation';
  lat: number;
  lng: number;
  image?: string;
  description?: string;
  features?: string[];
}

interface NeighborhoodMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: MapMarker[];
  onMarkerClick?: () => void;
  className?: string;
}

export function NeighborhoodMap({ 
  center = { lat: 36.1699, lng: -115.1398 }, // Las Vegas coordinates
  zoom = 12,
  markers = [],
  onMarkerClick,
  className = ''
}: NeighborhoodMapProps) {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const { announce } = useScreenReaderAnnouncements();

  // Use the center and zoom parameters
  const mapCenter = center;
  const mapZoom = zoom;

  // Sample data for demonstration
  const sampleMarkers: MapMarker[] = [
    {
      id: '1',
      title: 'Luxury Home in Summerlin',
      address: '123 Summerlin Pkwy, Las Vegas, NV 89134',
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      type: 'property',
      lat: 36.1581,
      lng: -115.3061,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Pool', 'Garage', 'Fireplace']
    },
    {
      id: '2',
      title: 'Modern Condo Downtown',
      address: '456 Fremont St, Las Vegas, NV 89101',
      price: 425000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      type: 'property',
      lat: 36.1716,
      lng: -115.1391,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      title: 'Palo Verde High School',
      address: '333 S Pavilion Center Dr, Las Vegas, NV 89144',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 0,
      type: 'school',
      lat: 36.1591,
      lng: -115.3161,
      description: 'Highly rated public high school'
    },
    {
      id: '4',
      title: 'Red Rock Casino',
      address: '11011 W Charleston Blvd, Las Vegas, NV 89135',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 0,
      type: 'amenity',
      lat: 36.1581,
      lng: -115.3061,
      description: 'Entertainment and dining destination'
    },
    {
      id: '5',
      title: 'Las Vegas Strip',
      address: 'Las Vegas Blvd, Las Vegas, NV',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 0,
      type: 'amenity',
      lat: 36.1147,
      lng: -115.1728,
      description: 'World-famous entertainment corridor'
    }
  ];

  const displayMarkers = markers.length > 0 ? markers : sampleMarkers;
  const filteredMarkers = filterType === 'all' 
    ? displayMarkers 
    : displayMarkers.filter(marker => marker.type === filterType);

  const filterOptions: Array<{ value: string; label: string; icon: IconSymbolKey }> = [
    { value: 'all', label: 'All', icon: '📍' },
    { value: 'property', label: 'Properties', icon: '🏠' },
    { value: 'school', label: 'Schools', icon: '🎓' },
    { value: 'amenity', label: 'Amenities', icon: '⭐' },
    { value: 'transportation', label: 'Transport', icon: '🚌' }
  ];

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      announce('Interactive neighborhood map loaded', 'polite');
    }, 1500);

    return () => clearTimeout(timer);
  }, [announce]);

  const handleMarkerClick = (marker: MapMarker) => {
    setSelectedMarker(marker);
    announce(`Selected ${marker.title}`, 'polite');
    onMarkerClick?.(marker);
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    const count = type === 'all' 
      ? displayMarkers.length 
      : displayMarkers.filter(m => m.type === type).length;
    announce(`Filter changed to ${type}, showing ${count} items`, 'polite');
  };

  const formatCurrency = (amount: number) => {
    if (amount === 0) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getMarkerIcon = (type: string): IconSymbolKey => {
    switch (type) {
      case 'property':
        return '🏠';
      case 'school':
        return '🎓';
      case 'amenity':
        return '⭐';
      case 'transportation':
        return '🚌';
      default:
        return '📍';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'property': return 'bg-blue-500';
      case 'school': return 'bg-green-500';
      case 'amenity': return 'bg-yellow-500';
      case 'transportation': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  if (mapError) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`}>
        <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
          <IconSymbol symbol="⚠️" className="h-6 w-6" ariaLabel="Warning" />
          <span>Map Error</span>
        </div>
        <p className="text-red-700 mb-4">{mapError}</p>
        <button
          onClick={() => {
            setMapError(null);
            setIsLoading(true);
          }}
          className="btn btn-secondary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Map Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Neighborhood Map</h2>
            <p className="text-gray-600">Explore properties and local amenities</p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filterType === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={filterType === option.value ? 'true' : 'false'}
                aria-label={`Filter by ${option.label}`}
              >
                <IconSymbol symbol={option.icon} className="mr-1 h-4 w-4" ariaLabel={option.label} />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        {isLoading ? (
          <div className="h-96 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading interactive map...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Map Placeholder */}
            <div 
              ref={mapRef}
              className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Interactive neighborhood map showing properties and amenities"
              data-center-lat={mapCenter.lat}
              data-center-lng={mapCenter.lng}
              data-zoom={mapZoom}
            >
              {/* Simulated Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200"></div>
              </div>
              
              {/* Map Markers */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <IconSymbol symbol="🗺️" className="mx-auto mb-2 h-10 w-10 text-blue-700" ariaLabel="Map" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Las Vegas Neighborhood Map</h3>
                  <p className="text-gray-600">
                    Interactive map showing {filteredMarkers.length} locations
                  </p>
                </div>
              </div>

              {/* Simulated Map Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {filteredMarkers.map((marker, index) => (
                  <button
                    key={marker.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 ${getMarkerColor(marker.type)} text-white shadow-lg hover:scale-110 transition-transform`}
                    style={{
                      left: `${20 + (index * 15) % 60}%`,
                      top: `${30 + (index * 20) % 40}%`
                    }}
                    onClick={() => handleMarkerClick(marker)}
                    aria-label={`${marker.title} - Click for details`}
                  >
                    <IconSymbol symbol={getMarkerIcon(marker.type)} className="h-5 w-5" ariaLabel={marker.type} />
                  </button>
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <IconSymbol symbol="🏠" className="h-4 w-4" ariaLabel="Property" />
                  <span className="text-gray-700">Properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconSymbol symbol="🎓" className="h-4 w-4" ariaLabel="School" />
                  <span className="text-gray-700">Schools</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconSymbol symbol="⭐" className="h-4 w-4" ariaLabel="Amenity" />
                  <span className="text-gray-700">Amenities</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Marker Details Panel */}
      {selectedMarker && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selectedMarker.title}</h3>
              <p className="text-gray-600">{selectedMarker.address}</p>
            </div>
            <button
              onClick={() => setSelectedMarker(null)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-6 h-6 flex items-center justify-center"
              aria-label="Close marker details"
            >
              ×
            </button>
          </div>

          {selectedMarker.type === 'property' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(selectedMarker.price)}
                </div>
                <div className="text-xs text-gray-600">Price</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">
                  {selectedMarker.bedrooms}
                </div>
                <div className="text-xs text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">
                  {selectedMarker.bathrooms}
                </div>
                <div className="text-xs text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">
                  {selectedMarker.sqft.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600">Sq Ft</div>
              </div>
            </div>
          )}

          {selectedMarker.description && (
            <p className="text-gray-700 mb-4">{selectedMarker.description}</p>
          )}

          {selectedMarker.features && selectedMarker.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMarker.features.map(feature => (
                  <span
                    key={feature}
                    className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            {selectedMarker.type === 'property' && (
              <>
                <button className="btn btn-primary">
                  View Details
                </button>
                <button className="btn btn-secondary">
                  Schedule Showing
                </button>
              </>
            )}
            <button className="btn btn-secondary">
              Get Directions
            </button>
          </div>
        </div>
      )}

      {/* Map Statistics */}
      <div className="p-6 border-t border-gray-200 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {displayMarkers.filter(m => m.type === 'property').length}
            </div>
            <div className="text-sm text-gray-600">Properties</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {displayMarkers.filter(m => m.type === 'school').length}
            </div>
            <div className="text-sm text-gray-600">Schools</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {displayMarkers.filter(m => m.type === 'amenity').length}
            </div>
            <div className="text-sm text-gray-600">Amenities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {displayMarkers.filter(m => m.type === 'transportation').length}
            </div>
            <div className="text-sm text-gray-600">Transport</div>
          </div>
        </div>
      </div>
    </div>
  );
}
