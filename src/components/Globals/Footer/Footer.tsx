import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-gray-50 text-gray-900'>
      <div className='container mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='border-t border-gray-200 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Logo and Branding */}
            <div className='flex flex-col'>
              <Image
                src='/images/bhhs/logo.svg'
                alt='Berkshire Hathaway HomeServices Premier Properties'
                width={192}
                height={48}
                className='mb-2'
              />
              <p className='text-sm text-gray-600'>
                Dr. Janet Duffy, REALTOR®
                <br />
                Premier Good To Know REALTOR®
                <br />
                Premier Properties Las Vegas
              </p>
              <div className='mt-4'>
                <p className='text-sm font-semibold text-gray-900 mb-1'>Contact</p>
                <p className='text-sm text-gray-600'>(702) 222-1964</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/about'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      About Dr. Duffy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/buying'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Buying
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/selling'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Selling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/luxury'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Luxury Properties
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/investing'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Investment Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/listings'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Current Listings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Market Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/privacy-policy'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms-of-use'
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex flex-col items-end'>
              <div className='flex space-x-4 mb-4'>
                <Link
                  href='http://www.facebook.com/bhhsrealestate'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </Link>
                <Link
                  href='http://www.instagram.com/bhhsrealestate'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875s.385.875.875.875h8.558c.49 0 .875-.385.875-.875s-.385-.875-.875-.875z' />
                  </svg>
                </Link>
                <Link
                  href='https://www.linkedin.com/company/berkshire-hathaway-homeservices'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </Link>
                <Link
                  href='https://www.youtube.com/channel/UCrBKUuQDrkCNFjy4wF5ZWXw'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-200 py-6'>
          <div className='text-center'>
            <p className='text-gray-600 text-sm mb-2'>
              © 2025 BHH Affiliates, LLC.
            </p>
            <p className='text-gray-600 text-sm mb-4'>
              Real Estate Brokerage Services are offered through the network
              member franchisees of BHH Affiliates, LLC. Most franchisees are
              independently owned and operated. Berkshire Hathaway HomeServices
              and the Berkshire Hathaway HomeServices symbol are registered
              marks of Columbia Insurance Company, a Berkshire Hathaway
              affiliate.
            </p>
            <p className='text-gray-600 text-sm flex items-center justify-center'>
              Equal Housing Opportunity
              <svg
                className='w-4 h-4 ml-2'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
              </svg>
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className='border-t border-gray-200 py-4'>
          <div className='text-center'>
            <p className='text-gray-600 text-sm mb-2'>
              BHH Affiliates, LLC is a Delaware limited liability company. Its
              principal office is located at 18500 Von Karman Ave, Suite 400,
              Irvine, California 92612 USA.
            </p>
            <p className='text-gray-600 text-sm'>
              <Link
                href='/do-not-sell'
                className='text-blue-600 hover:text-blue-800 transition-colors'
              >
                Do Not Sell My Personal Information
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className='border-t border-gray-200 py-4'>
          <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
            <p className='font-semibold text-red-800 mb-2'>
              IMPORTANT NOTICE: Never trust wiring instructions sent via email.
            </p>
            <p className='text-red-700 text-sm leading-relaxed'>
              Cyber criminals are hacking email accounts and sending emails with
              fake wiring instructions. These emails are convincing and
              sophisticated. Always independently confirm wiring instructions in
              person or via a telephone call to a trusted and verified phone
              number. Never wire money without double-checking that the wiring
              instructions are correct.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
