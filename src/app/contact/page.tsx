import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 lg:py-20'>
        <div className='container'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
              Contact Dr. Janet Duffy
            </h1>
            <p className='text-xl lg:text-2xl text-amber-100 leading-relaxed'>
              Ready to start your Las Vegas real estate journey? I&apos;m here to
              help you achieve your property goals with personalized service and
              expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Multiple ways to reach me for your real estate needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {/* Phone */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48&q=80'
                  alt='Phone'
                  width={48}
                  height={48}
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Call Me Directly
              </h3>
              <p className='text-gray-600 mb-6'>
                For immediate assistance or urgent questions, call me directly.
              </p>
              <Link
                href='tel:702-222-1964'
                className='inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200'
              >
                (702) 222-1964
              </Link>
            </div>

            {/* Email */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-3xl'>✉️</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Send an Email
              </h3>
              <p className='text-gray-600 mb-6'>
                For detailed inquiries or to schedule a consultation.
              </p>
              <Link
                href='mailto:janet@goodtoknowrealtor.com'
                className='inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200'
              >
                Send Email
              </Link>
            </div>

            {/* Text Message */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-3xl'>💬</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Text Message
              </h3>
              <p className='text-gray-600 mb-6'>
                Quick questions? Send me a text message for fast responses.
              </p>
              <Link
                href='sms:702-222-1964'
                className='inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200'
              >
                Send Text
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Send a Message
              </h2>
              <p className='text-xl text-gray-600'>
                Fill out the form below and I&apos;ll get back to you within 24 hours
              </p>
            </div>

            <div className='bg-gray-50 rounded-2xl p-8 shadow-lg'>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      First Name *
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Last Name *
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='service'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Service Needed *
                  </label>
                  <select
                    id='service'
                    name='service'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  >
                    <option value=''>Select a service</option>
                    <option value='buying'>Buying a Home</option>
                    <option value='selling'>Selling a Home</option>
                    <option value='investment'>Investment Properties</option>
                    <option value='valuation'>Home Valuation</option>
                    <option value='consultation'>General Consultation</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='budget'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  >
                    <option value=''>Select budget range</option>
                    <option value='under-300k'>Under $300,000</option>
                    <option value='300k-500k'>$300,000 - $500,000</option>
                    <option value='500k-750k'>$500,000 - $750,000</option>
                    <option value='750k-1m'>$750,000 - $1,000,000</option>
                    <option value='over-1m'>Over $1,000,000</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    required
                    placeholder='Tell me about your real estate goals and how I can help...'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  ></textarea>
                </div>

                <div className='text-center'>
                  <button
                    type='submit'
                    className='bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors duration-200 shadow-lg'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Office Information
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Visit my office or learn more about my services
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Office Location
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <span className='text-amber-600 mr-4 mt-1'>📍</span>
                    <div>
                      <p className='font-semibold text-gray-900'>
                        Dr. Janet Duffy Real Estate
                      </p>
                      <p className='text-gray-600'>Las Vegas, Nevada</p>
                      <p className='text-gray-600'>
                        Serving all Las Vegas Valley communities
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <span className='text-amber-600 mr-4 mt-1'>🕒</span>
                    <div>
                      <p className='font-semibold text-gray-900'>
                        Office Hours
                      </p>
                      <p className='text-gray-600'>
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className='text-gray-600'>
                        Saturday: 9:00 AM - 5:00 PM
                      </p>
                      <p className='text-gray-600'>Sunday: By Appointment</p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <Image
                      src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                      alt='Phone'
                      width={24}
                      height={24}
                      className='w-6 h-6 mr-4 mt-1'
                    />
                    <div>
                      <p className='font-semibold text-gray-900'>Contact</p>
                      <p className='text-gray-600'>Phone: (702) 222-1964</p>
                      <p className='text-gray-600'>
                        Email: janet@goodtoknowrealtor.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/about'
                    className='inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    Learn More About My Services
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
                  alt='Las Vegas office location'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Areas I Serve
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive real estate services throughout the Las Vegas Valley
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🏘️</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Summerlin
              </h3>
              <p className='text-gray-600'>Master-planned luxury community</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Home'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Henderson
              </h3>
              <p className='text-gray-600'>Family-friendly neighborhoods</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🏢</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                North Las Vegas
              </h3>
              <p className='text-gray-600'>Growing investment opportunities</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌆</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Downtown Las Vegas
              </h3>
              <p className='text-gray-600'>Urban revitalization area</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🏡</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Southwest Valley
              </h3>
              <p className='text-gray-600'>New construction communities</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌵</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                All Las Vegas Valley
              </h3>
              <p className='text-gray-600'>Comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Need Immediate Assistance?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            For urgent real estate matters or time-sensitive transactions, don&apos;t
            hesitate to call me directly.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-222-1964'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <Image
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone'
                width={24}
                height={24}
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 222-1964
            </Link>
            <Link
              href='sms:702-222-1964'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              💬 Send Text
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
