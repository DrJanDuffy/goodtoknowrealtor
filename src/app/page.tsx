import { Metadata } from 'next';

import { HeroSection } from '@/components/Home/HeroSection';
import { AboutSection } from '@/components/Home/AboutSection';
import { ServicesSection } from '@/components/Home/ServicesSection';
import { RealScoutListings } from '@/components/Home/RealScoutListings';
import { HomeValueSection } from '@/components/Home/HomeValueSection';
import { ReportsSection } from '@/components/Home/ReportsSection';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { ContactCTA } from '@/components/Home/ContactCTA';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  url: '/',
  image: '/images/dr-janet-duffy-homepage-og.jpg',
});

export default function HomePage() {
  // Generate structured data for homepage
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  const faqs = generateFAQSchema([
    {
      question: 'Who is Dr. Janet Duffy?',
      answer: 'Dr. Janet Duffy is a Premier Good To Know REALTOR® with over 15 years of experience helping clients buy and sell real estate in Las Vegas. She specializes in luxury properties, investment properties, and first-time home buyers.',
    },
    {
      question: 'What areas does Dr. Janet Duffy serve?',
      answer: 'Dr. Janet Duffy serves the greater Las Vegas area including Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, and Green Valley. She has extensive knowledge of all Las Vegas neighborhoods.',
    },
    {
      question: 'How can I contact Dr. Janet Duffy?',
      answer: 'You can contact Dr. Janet Duffy by calling (702) 222-1964 or visiting the contact page on this website. She offers personalized consultations for all your Las Vegas real estate needs.',
    },
    {
      question: 'What services does Dr. Janet Duffy offer?',
      answer: 'Dr. Janet Duffy offers comprehensive real estate services including buying homes, selling homes, luxury real estate, investment properties, home valuations, and real estate consulting throughout Las Vegas.',
    },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqs),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RealScoutListings />
      <HomeValueSection />
      <ReportsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
