import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. Janet Duffy',
  description: 'Privacy policy for Dr. Janet Duffy Real Estate services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Privacy Policy</h1>
          
          <div className='bg-white rounded-lg shadow-sm p-8'>
            <p className='text-gray-600 mb-6'>Last updated: January 2025</p>
            
            <div className='prose prose-lg max-w-none'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Information We Collect</h2>
              <p className='text-gray-600 mb-6'>
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and property preferences.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>How We Use Your Information</h2>
              <p className='text-gray-600 mb-6'>
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you about properties and services, and personalize your experience.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Information Sharing</h2>
              <p className='text-gray-600 mb-6'>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Data Security</h2>
              <p className='text-gray-600 mb-6'>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Contact Us</h2>
              <p className='text-gray-600 mb-6'>
                If you have any questions about this Privacy Policy, please contact us at:
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
