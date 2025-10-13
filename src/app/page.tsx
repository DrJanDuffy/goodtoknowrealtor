import { HeroSection } from '@/components/Home/HeroSection';
import { AboutSection } from '@/components/Home/AboutSection';
import { ServicesSection } from '@/components/Home/ServicesSection';
import { RealScoutListings } from '@/components/Home/RealScoutListings';
import { HomeValueSection } from '@/components/Home/HomeValueSection';
import { ReportsSection } from '@/components/Home/ReportsSection';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { ContactCTA } from '@/components/Home/ContactCTA';

export default function HomePage() {
  return (
    <>
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
