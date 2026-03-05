import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Market Reports | Dr. Janet Duffy',
  description: 'Latest Las Vegas real estate market reports and trends from Dr. Janet Duffy.',
};

export default function ReportsPage() {
  const reports = [
    {
      title: 'Las Vegas Market Overview',
      description: 'Current market conditions and trends in the Las Vegas area.',
      date: 'January 2025',
      type: 'Market Report',
    },
    {
      title: 'Summerlin Market Analysis',
      description: 'Detailed analysis of the Summerlin real estate market.',
      date: 'December 2024',
      type: 'Area Report',
    },
    {
      title: 'Henderson Housing Trends',
      description: 'Latest trends and statistics for Henderson properties.',
      date: 'December 2024',
      type: 'Area Report',
    },
    {
      title: 'Luxury Market Update',
      description: 'High-end property market insights and predictions.',
      date: 'November 2024',
      type: 'Market Report',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <PageHero
        title='Market Reports'
        subtitle='Stay informed with the latest Las Vegas real estate market insights'
      />

      {/* Reports Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {reports.map((report, index) => (
            <div
              key={index}
              className='card p-6'
            >
              <div className='flex justify-between items-start mb-4'>
                <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                  {report.type}
                </span>
                <span className='text-gray-500 text-sm'>{report.date}</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {report.title}
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                {report.description}
              </p>
              <Link
                href='/contact'
                className='btn btn-outline'
              >
                Request Full Report →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Need Custom Market Analysis?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Get personalized market insights for your specific property or area of interest.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='btn btn-primary'
            >
              Request Custom Report
            </Link>
            <Link
              href='tel:702-222-1964'
              className='btn btn-outline'
            >
              (702) 222-1964
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
