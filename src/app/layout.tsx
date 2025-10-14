import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import '@/app/globals.css';

import { Navigation } from '@/components/Globals/Navigation/Navigation';
import { Footer } from '@/components/Globals/Footer/Footer';
import { ScreenReaderAnnouncementsProvider } from '@/components/ui/ScreenReaderAnnouncements';
import { SEO_CONFIG, generateRealEstateAgentSchema, generateLocalBusinessSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords.join(', '),
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.default}`,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [`${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.default}`],
    creator: '@drjanduffy',
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang='en' className='h-full'>
      <head>
        <script
          src='https://em.realscout.com/widgets/realscout-web-components.umd.js'
          type='module'
          async
        ></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
          `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateAgentSchema),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.className} h-full flex flex-col`}>
        <ScreenReaderAnnouncementsProvider>
          {/* Skip Navigation Links */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to main content
          </a>
          <a 
            href="#navigation" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to navigation
          </a>
          <Navigation />
          <main id="main-content" className='flex-1'>{children}</main>
          <Footer />
        </ScreenReaderAnnouncementsProvider>
      </body>
    </html>
  );
}
