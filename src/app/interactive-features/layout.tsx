import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Interactive Real Estate Tools & Features | Dr. Jan Duffy',
  description: 'Explore advanced interactive real estate tools: property search, mortgage calculator, virtual tours, neighborhood maps, and market visualizations. Powerful tools for Las Vegas property buyers and sellers.',
  keywords: ['Las Vegas real estate tools', 'property search tools', 'mortgage calculator', 'virtual tours Las Vegas', 'neighborhood maps', 'real estate calculators'],
  url: '/interactive-features',
  image: '/images/interactive-features-og.jpg',
});

export default function InteractiveFeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

