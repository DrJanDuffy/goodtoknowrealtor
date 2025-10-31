import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Home Value Calculator | Get Free Instant Property Valuation',
  description: 'Get an instant, accurate valuation of your Las Vegas property. Free home value calculator with advanced market data and expert analysis from Dr. Jan Duffy, Top 1% agent.',
  keywords: ['Las Vegas home value', 'property valuation Las Vegas', 'home value calculator', 'Las Vegas property value', 'home equity calculator', 'Zillow estimate alternative'],
  url: '/home-value',
  image: '/images/home-value-calculator-og.jpg',
});

export default function HomeValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

