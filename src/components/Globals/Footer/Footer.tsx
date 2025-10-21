import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-gray-50 text-gray-900' role='contentinfo' aria-label='Site footer'>
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
                Dr. Jan Duffy, REALTOR®
                <br />
                Top 1% Las Vegas Agent
                <br />
                Premier Properties Las Vegas
              </p>
              <div className='mt-4'>
                <p className='text-sm font-semibold text-gray-900 mb-2'>Contact</p>
                <div className='flex flex-col space-y-2'>
                  <Link
                    href='tel:702-222-1964'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors min-h-[44px] flex items-center'
                  >
                    (702) 222-1964
                  </Link>
                  <Link
                    href='sms:702-222-1964'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors min-h-[44px] flex items-center'
                  >
                    Send Text
                  </Link>
                </div>
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
                  Facebook
                </Link>
                <Link
                  href='http://www.instagram.com/bhhsrealestate'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  Instagram
                </Link>
                <Link
                  href='https://www.linkedin.com/company/berkshire-hathaway-homeservices'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  LinkedIn
                </Link>
                <Link
                  href='https://www.youtube.com/channel/UCrBKUuQDrkCNFjy4wF5ZWXw'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  YouTube
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
