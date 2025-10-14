import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do Not Sell My Personal Information | Dr. Janet Duffy',
  description: 'Opt-out of the sale of personal information.',
};

export default function DoNotSellPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Do Not Sell My Personal Information</h1>
          
          <div className='bg-white rounded-lg shadow-sm p-8'>
            <p className='text-gray-600 mb-6'>Last updated: January 2025</p>
            
            <div className='prose prose-lg max-w-none'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Your Privacy Rights</h2>
              <p className='text-gray-600 mb-6'>
                Dr. Janet Duffy respects your privacy and does not sell personal information to third parties. 
                We are committed to protecting your personal information and using it only for legitimate business purposes.
              </p>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Information We Do Not Sell</h2>
              <p className='text-gray-600 mb-6'>
                We do not sell, rent, or otherwise disclose your personal information, including but not limited to:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-6 space-y-2'>
                <li>Name and contact information</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Property preferences</li>
                <li>Search history</li>
                <li>Any other personal data you provide</li>
              </ul>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>How We Use Your Information</h2>
              <p className='text-gray-600 mb-6'>
                We use your personal information only to:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-6 space-y-2'>
                <li>Provide real estate services</li>
                <li>Respond to your inquiries</li>
                <li>Send you relevant property information</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Contact Us</h2>
              <p className='text-gray-600 mb-6'>
                If you have any questions about our privacy practices or wish to exercise your privacy rights, 
                please contact us:
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
