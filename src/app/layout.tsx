import { Inter } from 'next/font/google';

import '@/app/globals.css';

import { Navigation } from '@/components/Globals/Navigation/Navigation';
import { Footer } from '@/components/Globals/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      <body className={`${inter.className} h-full flex flex-col`}>
        <Navigation />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
