import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SEO_CONFIG } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import Image from 'next/image';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {
  NEIGHBORHOOD_SLUGS,
  getNeighborhoodBySlug,
} from '@/data/neighborhoods';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) return { title: 'Not Found' };

  const title = `${name} Real Estate | Dr. Jan Duffy - Premier Good To Know REALTOR®`;
  const description = `Find your dream home in ${name}, Las Vegas Valley. Premier Good To Know REALTOR® Dr. Jan Duffy specializes in ${name} homes for sale, luxury properties, and family communities.`;
  const canonical = `${SEO_CONFIG.siteUrl}/areas/${slug}`;

  return {
    title,
    description,
    keywords: `${name} real estate, ${name} homes for sale, Las Vegas real estate, Dr. Jan Duffy`,
    openGraph: {
      title: `${name} Real Estate | Dr. Jan Duffy`,
      description: `Find your dream home in ${name} with Premier Good To Know REALTOR® Dr. Jan Duffy.`,
      url: canonical,
    },
    alternates: { canonical },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) notFound();

  return (
    <div className="min-h-screen">
      <PageHero
        title={`${name} Real Estate`}
        subtitle={`Discover homes for sale in ${name}. Dr. Jan Duffy, Premier Good To Know REALTOR®, brings expert local knowledge to your ${name} search.`}
        gradientFromClassName="from-blue-900"
        gradientToClassName="to-blue-800"
      >
        <Link
          href="/listings#advanced-search"
          className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
        >
          View {name} Listings
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200"
        >
          Get Free Consultation
        </Link>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose {name}?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {name} is one of the Las Vegas Valley&apos;s sought-after
                communities. As the Premier Good To Know REALTOR®, Dr. Jan Duffy
                specializes in helping buyers and sellers navigate {name} real
                estate with local expertise and personalized service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <IconSymbol
                    symbol="✓"
                    className="text-green-500 mr-3 h-5 w-5"
                    ariaLabel="Highlight"
                  />
                  <span className="text-gray-700">
                    Expert knowledge of {name} and surrounding areas
                  </span>
                </li>
                <li className="flex items-center">
                  <IconSymbol
                    symbol="✓"
                    className="text-green-500 mr-3 h-5 w-5"
                    ariaLabel="Highlight"
                  />
                  <span className="text-gray-700">
                    Full MLS access and neighborhood market insights
                  </span>
                </li>
                <li className="flex items-center">
                  <IconSymbol
                    symbol="✓"
                    className="text-green-500 mr-3 h-5 w-5"
                    ariaLabel="Highlight"
                  />
                  <span className="text-gray-700">
                    Top-rated schools and community amenities
                  </span>
                </li>
                <li className="flex items-center">
                  <IconSymbol
                    symbol="✓"
                    className="text-green-500 mr-3 h-5 w-5"
                    ariaLabel="Highlight"
                  />
                  <span className="text-gray-700">
                    Luxury homes and family-friendly neighborhoods
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt={`Luxury homes in ${name}`}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {name} Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Get current market insights for {name} real estate. Dr. Jan Duffy
              can provide a personalized market analysis for your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/listings"
              className="text-blue-600 font-semibold hover:underline"
            >
              Search {name} listings
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Request a free home value report
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your {name} Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Jan Duffy, the Premier Good To Know REALTOR®, help you find
            your perfect home in {name}. With deep expertise across the Las Vegas
            Valley, she&apos;ll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
