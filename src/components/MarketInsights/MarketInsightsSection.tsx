'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MarketInsight, fetchMarketInsights, formatDate, getExcerpt } from '@/lib/rss-fetcher';

interface MarketInsightsSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export function MarketInsightsSection({ limit = 3, showTitle = true }: MarketInsightsSectionProps) {
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInsights = async () => {
      try {
        setLoading(true);
        const data = await fetchMarketInsights(limit);
        setInsights(data);
        setError(null);
      } catch {
        // Log error for debugging
        setError('Unable to load market insights');
      } finally {
        setLoading(false);
      }
    };

    loadInsights();
  }, [limit]);

  if (loading) {
    return (
      <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='container'>
          <div className='text-center'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
              📊 Market Insights
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Latest Real Estate Market Insights
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
              Stay informed with the latest trends and data-driven insights from the Las Vegas real estate market
            </p>
          </div>
          
          {/* Loading Skeleton */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Array.from({ length: limit }).map((_, index) => (
              <div key={index} className='bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse'>
                <div className='p-6'>
                  <div className='h-4 bg-gray-200 rounded mb-3'></div>
                  <div className='h-4 bg-gray-200 rounded mb-3'></div>
                  <div className='h-3 bg-gray-200 rounded mb-4'></div>
                  <div className='h-3 bg-gray-200 rounded'></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || insights.length === 0) {
    return (
      <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='container'>
          <div className='text-center'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
              📊 Market Insights
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Latest Real Estate Market Insights
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
              Stay informed with the latest trends and data-driven insights from the Las Vegas real estate market
            </p>
          </div>
          
          <div className='bg-white rounded-2xl shadow-lg p-8 text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Market Insights Coming Soon
            </h3>
            <p className='text-gray-600 mb-6'>
              We&apos;re working on bringing you the latest real estate market insights and trends.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200'
            >
              Get Market Updates
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='container'>
        {showTitle && (
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
              📊 Good To Know Market Insights
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Latest Las Vegas Real Estate Market Insights
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Stay informed with the latest trends and data-driven insights from Dr. Janet Duffy, your Premier Good To Know REALTOR®
            </p>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {insights.map((insight, index) => (
            <article
              key={insight.guid || index}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group'
            >
              {/* Category Tags */}
              {insight.categories && insight.categories.length > 0 && (
                <div className='p-4 pb-0'>
                  <div className='flex flex-wrap gap-2'>
                    {insight.categories.slice(0, 2).map((category, idx) => (
                      <span
                        key={idx}
                        className='inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold'
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className='p-6 flex-1 flex flex-col'>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                    <a
                      href={insight.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      {insight.title}
                    </a>
                  </h3>

                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {getExcerpt(insight.contentSnippet, 150)}
                  </p>
                </div>

                <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                  <time className='text-sm text-gray-500'>
                    {formatDate(insight.pubDate)}
                  </time>
                  <a
                    href={insight.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm'
                  >
                    Read More
                    <svg
                      className='w-4 h-4 ml-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Insights Button */}
        <div className='text-center mt-12'>
          <Link
            href='/market-insights'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            View All Good To Know Market Insights
            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>

        {/* Source Attribution */}
        <div className='mt-8 text-center'>
          <p className='text-sm text-gray-500'>
            Market insights powered by{' '}
            <a
              href='https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-700 font-semibold'
            >
              Simplifying the Market
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

