import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Media Kit | Dr. Jan Duffy Press Resources | Las Vegas Real Estate Expert',
  description: 'Download Dr. Jan Duffy\'s media kit including high-resolution photos, bio, credentials, and press materials for Las Vegas luxury real estate coverage.',
  keywords: 'Dr. Jan Duffy media kit, Las Vegas real estate expert bio, press materials, high-res photos',
  openGraph: {
    title: 'Media Kit | Dr. Jan Duffy Press Resources | Las Vegas Real Estate Expert',
    description: 'Download Dr. Jan Duffy\'s media kit including high-resolution photos, bio, credentials, and press materials for Las Vegas luxury real estate coverage.',
    type: 'website',
  },
};

export default function MediaKitPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>
              Media Kit & Press Resources
            </h1>
            <p className='text-xl text-gray-300 mb-8'>
              Download high-resolution photos, bio, credentials, and press materials 
              for Dr. Jan Duffy, Las Vegas luxury real estate expert.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
              >
                Request Media Kit
              </Link>
              <Link
                href='/press'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                View All Press
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit Downloads */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Download Press Materials
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Professional photos, bio, credentials, and press materials 
                for media coverage and publications.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Dr. Jan Duffy professional headshot'
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Professional Headshots</h3>
                  <p className='text-gray-600 mb-4'>
                    High-resolution professional photos suitable for 
                    print and digital media coverage.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Download Photos →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Professional bio and credentials'
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Bio & Credentials</h3>
                  <p className='text-gray-600 mb-4'>
                    Professional biography, credentials, and achievements 
                    for press releases and articles.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Download Bio →
                  </Link>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  alt='Press materials and logos'
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Logos & Branding</h3>
                  <p className='text-gray-600 mb-4'>
                    Official logos, branding materials, and visual assets 
                    for media coverage and publications.
                  </p>
                  <Link
                    href='/contact'
                    className='text-amber-600 font-semibold hover:text-amber-700'
                  >
                    Download Assets →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-amber-600'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h2 className='text-4xl font-bold mb-6'>
              Need Additional Press Materials?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              For custom press materials, interviews, or additional resources, 
              contact Dr. Jan Duffy&apos;s media team.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Contact Media Team
              </Link>
              <Link
                href='/press'
                className='border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors'
              >
                View All Press
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
