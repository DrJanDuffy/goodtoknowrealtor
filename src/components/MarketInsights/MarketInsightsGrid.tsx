'use client';

import { MarketInsight, formatDate, getExcerpt } from '@/lib/rss-fetcher';

interface MarketInsightsGridProps {
  insights: MarketInsight[];
  showTitle?: boolean;
}

export function MarketInsightsGrid({ insights, showTitle = true }: MarketInsightsGridProps) {
  if (!insights || insights.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-600'>No market insights available at this time.</p>
      </div>
    );
  }

  return (
    <div>
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
            className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col'
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
                <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors'>
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
                   width="24" height="24">
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

      {/* Source Attribution */}
      <div className='mt-12 text-center'>
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
  );
}

