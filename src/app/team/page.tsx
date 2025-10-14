import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Team | Dr. Janet Duffy Group',
  description: 'Meet the Dr. Janet Duffy Group team of experienced Las Vegas real estate professionals. Top 1% agents with proven results.',
  keywords: ['Las Vegas real estate team', 'Dr. Janet Duffy', 'real estate agents', 'Las Vegas realtors'],
  url: '/team',
  image: '/images/team-og.jpg',
});

export default function TeamPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Team', url: '/team' },
  ]);

  const teamMembers = [
    {
      id: '1',
      name: 'Dr. Janet Duffy',
      title: 'Team Leader & REALTOR®',
      phone: '(702) 222-1964',
      email: 'janet@goodtoknowrealtor.com',
      license: 'S.0192488',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Premier Good To Know REALTOR® with over 15 years of experience in Las Vegas real estate. Dr. Janet Duffy has achieved over $127M in sales volume and is recognized as a Top 1% agent in Las Vegas.',
      specialties: ['Luxury Properties', 'Investment Properties', 'First-Time Buyers', 'Relocation Services'],
      achievements: ['Top 1% Las Vegas Agent', '$127M+ Sales Volume', '500+ Happy Clients', '15+ Years Experience']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'Senior REALTOR®',
      phone: '(702) 555-0123',
      email: 'sarah@goodtoknowrealtor.com',
      license: 'S.0199643',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Specializing in luxury properties and first-time homebuyers, Sarah brings 8 years of Las Vegas real estate experience to the team.',
      specialties: ['Luxury Properties', 'First-Time Buyers', 'New Construction', 'Relocation'],
      achievements: ['Luxury Property Specialist', 'First-Time Buyer Expert', '8 Years Experience', 'Top Producer']
    },
    {
      id: '3',
      name: 'Michael Chen',
      title: 'Investment Specialist',
      phone: '(702) 555-0456',
      email: 'michael@goodtoknowrealtor.com',
      license: 'S.0199407',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'Investment property specialist with expertise in Las Vegas market trends and rental property analysis.',
      specialties: ['Investment Properties', 'Rental Analysis', 'Market Trends', 'Commercial Real Estate'],
      achievements: ['Investment Specialist', 'Rental Property Expert', 'Market Analysis', 'Commercial License']
    },
    {
      id: '4',
      name: 'Lisa Rodriguez',
      title: 'New Construction Specialist',
      phone: '(702) 555-0789',
      email: 'lisa@goodtoknowrealtor.com',
      license: 'S.0202786',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      bio: 'New construction specialist helping clients find their dream homes in Las Vegas&apos;s newest developments.',
      specialties: ['New Construction', 'Custom Homes', 'Builder Relations', 'Design Centers'],
      achievements: ['New Construction Expert', 'Builder Certified', 'Design Center Specialist', 'Custom Home Expert']
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 lg:py-20'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
                Meet Our Team
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                Experienced Las Vegas real estate professionals dedicated to delivering exceptional results for every client.
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Our Team&apos;s Track Record
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>$127M+</div>
                  <div className='text-lg text-gray-600'>Total Sales Volume</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>500+</div>
                  <div className='text-lg text-gray-600'>Happy Clients</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>22 Days</div>
                  <div className='text-lg text-gray-600'>Average Days to Sell</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>Top 1%</div>
                  <div className='text-lg text-gray-600'>Las Vegas Agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                Our Team Members
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {teamMembers.map((member) => (
                  <div key={member.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                    <div className='md:flex'>
                      <div className='md:w-1/3'>
                        <div className='relative h-64 md:h-full'>
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      </div>
                      
                      <div className='md:w-2/3 p-8'>
                        <h3 className='text-2xl font-semibold text-gray-900 mb-2'>
                          {member.name}
                        </h3>
                        <p className='text-blue-600 font-semibold mb-4'>
                          {member.title}
                        </p>
                        
                        <p className='text-gray-600 mb-6'>
                          {member.bio}
                        </p>
                        
                        <div className='space-y-3 text-sm text-gray-600 mb-6'>
                          <div className='flex items-center'>
                            <svg className='w-4 h-4 mr-2 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                            </svg>
                            <Link href={`tel:${member.phone}`} className='hover:text-blue-600'>
                              {member.phone}
                            </Link>
                          </div>
                          <div className='flex items-center'>
                            <svg className='w-4 h-4 mr-2 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                            </svg>
                            <Link href={`mailto:${member.email}`} className='hover:text-blue-600'>
                              {member.email}
                            </Link>
                          </div>
                          <div className='text-xs text-gray-500'>
                            License #{member.license}
                          </div>
                        </div>
                        
                        <div className='mb-4'>
                          <h4 className='font-semibold text-gray-900 mb-2'>Specialties:</h4>
                          <div className='flex flex-wrap gap-2'>
                            {member.specialties.map((specialty, index) => (
                              <span key={index} className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'>
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className='flex space-x-2'>
                          <Link
                            href={`/team/${member.id}`}
                            className='flex-1 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors text-center'
                          >
                            Learn More
                          </Link>
                          <Link
                            href={`/testimonials?agent=${member.id}`}
                            className='flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm font-semibold hover:bg-blue-50 transition-colors text-center'
                          >
                            Reviews
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Work With Our Team?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Contact our experienced team of Las Vegas real estate professionals for personalized service and exceptional results.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Contact Our Team
              </Link>
              <Link
                href='tel:702-222-1964'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
              >
                Call (702) 222-1964
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
