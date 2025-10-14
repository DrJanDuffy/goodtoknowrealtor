import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Dr. Janet Duffy',
  description: 'Terms of use for Dr. Janet Duffy Real Estate services.',
};

export default function TermsOfUsePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Terms of Use</h1>
          
          <div className='bg-white rounded-lg shadow-sm p-8'>
            <p className='text-gray-600 mb-6'>Last updated: January 2025</p>
            
            <div className='prose prose-lg max-w-none'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Acceptance of Terms</h2>
              <p className='text-gray-600 mb-6'>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Use License</h2>
              <p className='text-gray-600 mb-6'>
                Permission is granted to temporarily download one copy of the materials on this website 
                for personal, non-commercial transitory viewing only.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Disclaimer</h2>
              <p className='text-gray-600 mb-6'>
                The materials on this website are provided on an 'as is' basis. Dr. Janet Duffy makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Limitations</h2>
              <p className='text-gray-600 mb-6'>
                In no event shall Dr. Janet Duffy or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on this website.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Contact Information</h2>
              <p className='text-gray-600 mb-6'>
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className='bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>Dr. Janet Duffy</p>
                <p className='text-gray-700'>Phone: (702) 222-1964</p>
                <p className='text-gray-700'>Email: info@drjanduffy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
