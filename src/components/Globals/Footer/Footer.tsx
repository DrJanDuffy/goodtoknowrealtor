'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export function Footer() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
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
                      href='/buying'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Buying
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/selling'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Selling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/luxury'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Luxury Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/services'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-semibold text-gray-900 mb-3'>Resources</p>
                <ul className='space-y-2 mb-6'>
                  <li>
                    <Link
                      href='/press'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Press & Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/vendors'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Preferred Vendors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/investing'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Investment Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Market Insights
                    </Link>
                  </li>
                </ul>
                <p className='font-semibold text-gray-900 mb-3'>Legal</p>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/privacy-policy'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms-of-use'
                      className='text-gray-600 hover:text-amber-600 transition-colors'
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

        {/* Consultation CTA Block */}
        <div className='border-t border-gray-200 py-8'>
          <div className='bg-blue-600 rounded-2xl p-8 text-center text-white'>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4'>
              Ready to Start Your Real Estate Journey?
            </h3>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Schedule a free consultation with Dr. Jan Duffy, Las Vegas&apos;s Top 1% real estate agent. 
              Get expert guidance tailored to your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className='btn btn-primary bg-white text-blue-600 hover:bg-gray-100'
              >
                Schedule Your Free Consultation
              </button>
              <Link
                href='tel:702-222-1964'
                className='btn btn-outline border-2 border-white text-white hover:bg-white hover:text-blue-600'
              >
                Call (702) 222-1964
              </Link>
            </div>
            <div className='mt-6 flex items-center justify-center space-x-6 text-sm text-blue-100'>
              <span>✓ Free Consultation</span>
              <span>✓ No Obligation</span>
              <span>✓ Expert Guidance</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-200 py-6'>
          <div className='text-center'>
            <p className='text-gray-700 text-base mb-2 font-medium'>
              © 2025 BHH Affiliates, LLC.
            </p>
            <p className='text-gray-700 text-base mb-4 leading-relaxed max-w-4xl mx-auto'>
              Real Estate Brokerage Services are offered through the network
              member franchisees of BHH Affiliates, LLC. Most franchisees are
              independently owned and operated. Berkshire Hathaway HomeServices
              and the Berkshire Hathaway HomeServices symbol are registered
              marks of Columbia Insurance Company, a Berkshire Hathaway
              affiliate.
            </p>
            <p className='text-gray-700 text-base flex items-center justify-center font-medium'>
              Equal Housing Opportunity
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className='border-t border-gray-200 py-4'>
          <div className='text-center'>
            <p className='text-gray-700 text-base mb-2 leading-relaxed max-w-4xl mx-auto'>
              BHH Affiliates, LLC is a Delaware limited liability company. Its
              principal office is located at 18500 Von Karman Ave, Suite 400,
              Irvine, California 92612 USA.
            </p>
            <p className='text-gray-700 text-base'>
              <Link
                href='/do-not-sell'
                className='text-blue-600 hover:text-blue-800 transition-colors font-medium'
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
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        source="footer"
      />
    </footer>
  );
}
