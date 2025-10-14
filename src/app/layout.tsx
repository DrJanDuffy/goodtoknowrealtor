import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import '@/app/globals.css';

import { Navigation } from '@/components/Globals/Navigation/Navigation';
import { Footer } from '@/components/Globals/Footer/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';
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
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #ffffff;
              --rs-as-button-color: rgb(35, 93, 137);
              --rs-as-widget-width: 500px !important;
            }
            realscout-simple-search {
              --rs-ss-font-primary-color: #6a6d72;
              --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
            }
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
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
        <MobileStickyCTA />
        </ScreenReaderAnnouncementsProvider>
      </body>
    </html>
  );
}
