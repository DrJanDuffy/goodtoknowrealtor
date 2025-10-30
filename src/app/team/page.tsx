import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = generatePageMetadata({
  title: 'Meet Our Team | Dr. Jan Duffy - Top 1% Las Vegas Real Estate Team',
  description: 'Meet Dr. Jan Duffy and her expert real estate team. Top 1% Las Vegas agents with $127M+ sales volume and 20+ years of experience.',
  keywords: ['Las Vegas real estate team', 'Dr. Jan Duffy team', 'top real estate agents', 'Las Vegas realtors', 'premier properties team'],
  url: '/team',
  image: '/images/team-og.jpg',
});

export const alternates = { canonical: `${SEO_CONFIG.siteUrl}/team` } as const;

export default function TeamPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Team', url: '/team' },
  ]);

  const teamMembers = [
    {
      name: 'Dr. Jan Duffy',
      title: 'Principal Agent & Team Leader',
      credentials: 'REALTOR®, Top 1% Agent',
      experience: '20+ Years',
      specialties: ['Luxury Properties', 'Investment Real Estate', 'First-Time Buyers', 'Market Analysis'],
      bio: 'Dr. Jan Duffy leads Las Vegas\'s premier real estate team with $127M+ in sales volume and 500+ successful transactions. Her expertise spans luxury properties, investment real estate, and first-time buyer guidance.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      achievements: [
        'Top 1% Las Vegas Real Estate Agent',
        '$127M+ Total Sales Volume',
        '500+ Successful Transactions',
        '98% Client Satisfaction Rate'
      ],
      contact: {
        phone: '(702) 222-1964',
        email: 'jan@goodtoknowrealtor.com'
      }
    },
    {
      name: 'Sarah Martinez',
      title: 'Senior Buyer Specialist',
      credentials: 'REALTOR®, Buyer Agent',
      experience: '8+ Years',
      specialties: ['First-Time Buyers', 'Luxury Homes', 'New Construction', 'Relocation Services'],
      bio: 'Sarah specializes in guiding first-time buyers through the Las Vegas market. Her attention to detail and market knowledge help clients find their perfect home.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      achievements: [
        '200+ First-Time Buyer Transactions',
        'Luxury Home Specialist',
        'New Construction Expert',
        'Relocation Services Certified'
      ],
      contact: {
        phone: '(702) 222-1965',
        email: 'sarah@goodtoknowrealtor.com'
      }
    },
    {
      name: 'Michael Chen',
      title: 'Investment Property Specialist',
      credentials: 'REALTOR®, Investment Advisor',
      experience: '12+ Years',
      specialties: ['Investment Properties', 'Rental Analysis', 'Portfolio Building', 'Market Timing'],
      bio: 'Michael helps clients build wealth through strategic real estate investments. His analytical approach and market insights guide successful investment decisions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      achievements: [
        '$50M+ Investment Sales Volume',
        'Portfolio Building Expert',
        'Rental Property Specialist',
        'Market Analysis Certified'
      ],
      contact: {
        phone: '(702) 222-1966',
        email: 'michael@goodtoknowrealtor.com'
      }
    },
    {
      name: 'Jennifer Rodriguez',
      title: 'Luxury Property Specialist',
      credentials: 'REALTOR®, Luxury Specialist',
      experience: '10+ Years',
      specialties: ['Luxury Estates', 'High-End Condos', 'Golf Course Homes', 'Exclusive Communities'],
      bio: 'Jennifer specializes in luxury properties and exclusive communities. Her discretion and market knowledge serve high-net-worth clients throughout Las Vegas.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      achievements: [
        'Luxury Property Expert',
        'Exclusive Community Specialist',
        'High-Net-Worth Client Advisor',
        'Discretion & Privacy Certified'
      ],
      contact: {
        phone: '(702) 222-1967',
        email: 'jennifer@goodtoknowrealtor.com'
      }
    }
  ];

  const teamStats = [
    {
      number: '$127M+',
      label: 'Total Sales Volume',
      description: 'Combined team sales volume'
    },
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Successful transactions completed'
    },
    {
      number: '20+',
      label: 'Years Experience',
      description: 'Combined team experience'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Client satisfaction rate'
    }
  ];

  const values = [
    {
      title: 'Client-First Approach',
      description: 'Every decision is made with our clients\' best interests at heart',
      icon: '❤️',
    },
    {
      title: 'Market Expertise',
      description: 'Deep knowledge of Las Vegas real estate market and trends',
      icon: '📊',
    },
    {
      title: 'Integrity & Trust',
      description: 'Honest communication and transparent business practices',
      icon: '🤝',
    },
    {
      title: 'Results-Driven',
      description: 'Committed to achieving exceptional outcomes for every client',
      icon: '🎯',
    },
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
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='container py-4'>
            <Breadcrumbs />
          </div>
        </div>

        {/* Hero Section */}
        <PageHero
          title="Meet Our Expert Team"
          subtitle="Las Vegas's premier real estate team with $127M+ in sales volume and unmatched expertise"
          gradientFromClassName='from-blue-900'
          gradientToClassName='to-indigo-800'
        >
          <Link
            href='/contact'
            className='bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
          >
            Work With Our Team
          </Link>
          <Link
            href='tel:702-222-1964'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors'
          >
            Call (702) 222-1964
          </Link>
        </PageHero>

        {/* Team Stats */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Team's Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven results that speak to our expertise and commitment to client success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Expert Team Members
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the professionals who make up Las Vegas's most successful real estate team
              </p>
            </div>

            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative w-80 h-80 mx-auto lg:mx-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <div className="text-xl text-blue-600 mb-2">{member.title}</div>
                      <div className="text-lg text-gray-600 mb-4">{member.credentials} • {member.experience}</div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{member.bio}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="text-green-500 mr-3 text-xl">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={`tel:${member.contact.phone}`}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                        >
                          Call {member.contact.phone}
                        </Link>
                        <Link
                          href={`mailto:${member.contact.email}`}
                          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                        >
                          Email {member.contact.email}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do for our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Team?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team approach ensures you get the expertise of multiple specialists working together for your success. Each team member brings unique skills and knowledge to provide comprehensive support.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">👥</span>
                    <span className="text-gray-700">Collaborative team approach with specialized expertise</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">🎯</span>
                    <span className="text-gray-700">Dedicated specialists for different property types</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">⚡</span>
                    <span className="text-gray-700">Faster response times with multiple team members</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">🛡️</span>
                    <span className="text-gray-700">Backup support ensures continuity of service</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Work With Our Team →
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Las Vegas real estate team collaboration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Work With Las Vegas's Top Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference that comes from working with Las Vegas's most successful real estate team. Get personalized service from specialists who understand your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </Link>
              <Link
                href="tel:702-222-1964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
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