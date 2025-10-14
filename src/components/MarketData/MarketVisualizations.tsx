'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

export interface MarketData {
  period: string;
  averagePrice: number;
  medianPrice: number;
  pricePerSqFt: number;
  daysOnMarket: number;
  inventoryCount: number;
  salesCount: number;
  priceChange: number; // percentage
}

export interface MarketTrend {
  month: string;
  value: number;
  category: 'price' | 'inventory' | 'sales';
}

interface MarketVisualizationsProps {
  area?: string;
  className?: string;
}

export function MarketVisualizations({ area = 'Las Vegas Valley', className = '' }: MarketVisualizationsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [selectedMetric, setSelectedMetric] = useState('price');
  const [isLoading, setIsLoading] = useState(true);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [trendData, setTrendData] = useState<MarketTrend[]>([]);
  const { announce } = useScreenReaderAnnouncements();

  // Sample market data
  const sampleMarketData: MarketData = {
    period: 'December 2024',
    averagePrice: 485000,
    medianPrice: 425000,
    pricePerSqFt: 285,
    daysOnMarket: 32,
    inventoryCount: 2847,
    salesCount: 892,
    priceChange: 8.5
  };

  const sampleTrendData: MarketTrend[] = [
    { month: 'Jan', value: 450000, category: 'price' },
    { month: 'Feb', value: 455000, category: 'price' },
    { month: 'Mar', value: 460000, category: 'price' },
    { month: 'Apr', value: 465000, category: 'price' },
    { month: 'May', value: 470000, category: 'price' },
    { month: 'Jun', value: 475000, category: 'price' },
    { month: 'Jul', value: 478000, category: 'price' },
    { month: 'Aug', value: 480000, category: 'price' },
    { month: 'Sep', value: 482000, category: 'price' },
    { month: 'Oct', value: 484000, category: 'price' },
    { month: 'Nov', value: 485000, category: 'price' },
    { month: 'Dec', value: 485000, category: 'price' },
    { month: 'Jan', value: 2100, category: 'inventory' },
    { month: 'Feb', value: 2200, category: 'inventory' },
    { month: 'Mar', value: 2400, category: 'inventory' },
    { month: 'Apr', value: 2600, category: 'inventory' },
    { month: 'May', value: 2800, category: 'inventory' },
    { month: 'Jun', value: 2900, category: 'inventory' },
    { month: 'Jul', value: 2850, category: 'inventory' },
    { month: 'Aug', value: 2800, category: 'inventory' },
    { month: 'Sep', value: 2750, category: 'inventory' },
    { month: 'Oct', value: 2700, category: 'inventory' },
    { month: 'Nov', value: 2650, category: 'inventory' },
    { month: 'Dec', value: 2847, category: 'inventory' },
    { month: 'Jan', value: 750, category: 'sales' },
    { month: 'Feb', value: 780, category: 'sales' },
    { month: 'Mar', value: 820, category: 'sales' },
    { month: 'Apr', value: 850, category: 'sales' },
    { month: 'May', value: 880, category: 'sales' },
    { month: 'Jun', value: 900, category: 'sales' },
    { month: 'Jul', value: 920, category: 'sales' },
    { month: 'Aug', value: 910, category: 'sales' },
    { month: 'Sep', value: 895, category: 'sales' },
    { month: 'Oct', value: 880, category: 'sales' },
    { month: 'Nov', value: 870, category: 'sales' },
    { month: 'Dec', value: 892, category: 'sales' }
  ];

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setMarketData(sampleMarketData);
      setTrendData(sampleTrendData);
      setIsLoading(false);
      announce(`Market data for ${area} loaded`, 'polite');
    }, 1500);

    return () => clearTimeout(timer);
  }, [area, announce, sampleMarketData, sampleTrendData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent > 0 ? '+' : ''}${percent.toFixed(1)}%`;
  };

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case 'price': return 'Average Price';
      case 'inventory': return 'Active Listings';
      case 'sales': return 'Monthly Sales';
      default: return metric;
    }
  };

  const getMetricData = (metric: string) => {
    return trendData.filter(item => item.category === metric);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    announce(`Time period changed to ${period}`, 'polite');
  };

  const handleMetricChange = (metric: string) => {
    setSelectedMetric(metric);
    announce(`Chart metric changed to ${getMetricLabel(metric)}`, 'polite');
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!marketData) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 text-center ${className}`}>
        <div className="text-2xl mb-2">📊</div>
        <p className="text-gray-600">Market data not available for this area</p>
      </div>
    );
  }

  const currentMetricData = getMetricData(selectedMetric);
  const maxValue = Math.max(...currentMetricData.map(d => d.value));
  const minValue = Math.min(...currentMetricData.map(d => d.value));

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Market Insights</h2>
            <p className="text-gray-600">{area} Real Estate Market</p>
          </div>
          
          {/* Time Period Selector */}
          <div className="flex gap-2">
            {[
              { value: '6months', label: '6 Months' },
              { value: '12months', label: '12 Months' },
              { value: '24months', label: '24 Months' }
            ].map(period => (
              <button
                key={period.value}
                onClick={() => handlePeriodChange(period.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedPeriod === period.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedPeriod === period.value}
                aria-label={`View ${period.label} data`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {formatCurrency(marketData.averagePrice)}
            </div>
            <div className="text-sm text-blue-800">Average Price</div>
            <div className={`text-xs mt-1 ${marketData.priceChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercent(marketData.priceChange)} vs last year
            </div>
          </div>

          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(marketData.medianPrice)}
            </div>
            <div className="text-sm text-green-800">Median Price</div>
            <div className="text-xs text-green-600 mt-1">
              {marketData.pricePerSqFt} per sq ft
            </div>
          </div>

          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {marketData.daysOnMarket}
            </div>
            <div className="text-sm text-yellow-800">Days on Market</div>
            <div className="text-xs text-yellow-600 mt-1">
              Average time to sell
            </div>
          </div>

          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {marketData.inventoryCount.toLocaleString()}
            </div>
            <div className="text-sm text-purple-800">Active Listings</div>
            <div className="text-xs text-purple-600 mt-1">
              {marketData.salesCount} sold this month
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Chart */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Market Trends</h3>
          
          {/* Metric Selector */}
          <div className="flex gap-2">
            {[
              { value: 'price', label: 'Price' },
              { value: 'inventory', label: 'Inventory' },
              { value: 'sales', label: 'Sales' }
            ].map(metric => (
              <button
                key={metric.value}
                onClick={() => handleMetricChange(metric.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedMetric === metric.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedMetric === metric.value}
                aria-label={`View ${metric.label} trend`}
              >
                {metric.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="h-64 flex items-end justify-between gap-2">
            {currentMetricData.map((data, index) => {
              const height = ((data.value - minValue) / (maxValue - minValue)) * 100;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="relative">
                    <div
                      className={`w-full rounded-t transition-all duration-500 hover:opacity-80 ${
                        selectedMetric === 'price' ? 'bg-blue-500' :
                        selectedMetric === 'inventory' ? 'bg-green-500' :
                        'bg-purple-500'
                      }`}
                      style={{ height: `${Math.max(height, 5)}%` }}
                      aria-label={`${data.month}: ${selectedMetric === 'price' ? formatCurrency(data.value) : data.value.toLocaleString()}`}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2 text-center">
                    <div>{data.month}</div>
                    <div className="font-medium">
                      {selectedMetric === 'price' 
                        ? formatCurrency(data.value)
                        : data.value.toLocaleString()
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart Info */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-600">📈</span>
            <span className="font-medium text-blue-900">
              {getMetricLabel(selectedMetric)} Trend Analysis
            </span>
          </div>
          <p className="text-sm text-blue-800">
            {selectedMetric === 'price' && 'Home prices have shown steady growth over the past year, with the average price increasing by 8.5%. This indicates a strong seller\'s market.'}
            {selectedMetric === 'inventory' && 'Active listings have been gradually increasing, providing more options for buyers. Inventory levels remain balanced for the current market conditions.'}
            {selectedMetric === 'sales' && 'Monthly sales activity has been consistent, showing healthy market momentum. Sales typically peak in spring and summer months.'}
          </p>
        </div>
      </div>

      {/* Market Insights */}
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">For Buyers</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Market shows moderate competition</li>
              <li>• Average time on market: {marketData.daysOnMarket} days</li>
              <li>• {marketData.inventoryCount.toLocaleString()} properties available</li>
              <li>• Price growth rate: {formatPercent(marketData.priceChange)} annually</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">For Sellers</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Strong price appreciation trend</li>
              <li>• Median price: {formatCurrency(marketData.medianPrice)}</li>
              <li>• Average price per sq ft: ${marketData.pricePerSqFt}</li>
              <li>• {marketData.salesCount} properties sold this month</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn btn-primary flex-1">
            <span className="mr-2">📊</span>
            Get Detailed Market Report
          </button>
          <button className="btn btn-secondary flex-1">
            <span className="mr-2">💬</span>
            Discuss Market with Agent
          </button>
          <button className="btn btn-secondary flex-1">
            <span className="mr-2">📧</span>
            Subscribe to Market Updates
          </button>
        </div>
      </div>

      {/* Data Disclaimer */}
      <div className="p-4 border-t border-gray-200 bg-yellow-50">
        <p className="text-xs text-yellow-800">
          <strong>Disclaimer:</strong> Market data is provided for informational purposes only and should not be considered as investment advice. 
          Real estate markets can be unpredictable and vary significantly by neighborhood and property type. 
          Consult with a qualified real estate professional for personalized market analysis.
        </p>
      </div>
    </div>
  );
}
