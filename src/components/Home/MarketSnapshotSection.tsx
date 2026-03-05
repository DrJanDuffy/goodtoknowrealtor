'use client';

import Link from 'next/link';

/** Las Vegas market snapshot — realtor-style stats + link to full report. */

const STATS = [
  { value: '$450K', label: 'Median Home Price', sub: '+4.2% YoY' },
  { value: '28', label: 'Avg Days on Market', sub: 'Las Vegas Valley' },
  { value: '4,850', label: 'Active Listings', sub: 'Current inventory' },
  { value: '2.1', label: 'Months Inventory', sub: 'Supply indicator' },
];

export function MarketSnapshotSection() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Las Vegas Real Estate Market
          </h2>
          <p className="text-gray-600">
            Current market data from Berkshire Hathaway HomeServices Nevada Properties
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-2xl lg:text-3xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mt-1">{stat.label}</div>
              {stat.sub && <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/market-insights"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            View Full Market Report
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
