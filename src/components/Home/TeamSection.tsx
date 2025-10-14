'use client';

import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  license: string;
  image: string;
  bio?: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Janet Duffy',
      title: 'REALTOR®',
      phone: '(702) 222-1964',
      email: 'janet@goodtoknowrealtor.com',
      license: 'S.0192488',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Premier Good To Know REALTOR® with over 15 years of experience in Las Vegas real estate.'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'REALTOR®',
      phone: '(702) 555-0123',
      email: 'sarah@goodtoknowrealtor.com',
      license: 'S.0199643',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Specializing in luxury properties and first-time homebuyers.'
    },
    {
      id: '3',
      name: 'Michael Chen',
      title: 'REALTOR®',
      phone: '(702) 555-0456',
      email: 'michael@goodtoknowrealtor.com',
      license: 'S.0199407',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Investment property specialist with expertise in Las Vegas market trends.'
    },
    {
      id: '4',
      name: 'Lisa Rodriguez',
      title: 'REALTOR®',
      phone: '(702) 555-0789',
      email: 'lisa@goodtoknowrealtor.com',
      license: 'S.0202786',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'New construction specialist helping clients find their dream homes.'
    }
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            MEET OUR TEAM
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member) => (
            <div key={member.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='relative h-64'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover'
                />
              </div>
              
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                  {member.name}
                </h3>
                <p className='text-blue-600 font-semibold mb-4'>
                  {member.title}
                </p>
                
                <div className='space-y-2 text-sm text-gray-600 mb-4'>
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
                
                {member.bio && (
                  <p className='text-sm text-gray-600 mb-4'>
                    {member.bio}
                  </p>
                )}
                
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
          ))}
        </div>

        {/* View All Agents Button */}
        <div className='text-center mt-8'>
          <Link
            href='/team'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold'
          >
            view all agents
            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
