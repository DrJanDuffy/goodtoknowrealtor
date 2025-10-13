import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Complete guide for first-time home buyers in Las Vegas. Premier Good To Know REALTOR® Dr. Janet Duffy provides expert tips, financing options, and step-by-step guidance.',
  keywords: 'first-time home buyer guide, Las Vegas home buying, home buyer tips, Dr. Janet Duffy',
  openGraph: {
    title: 'First-Time Home Buyer Guide | Dr. Janet Duffy',
    description: 'Complete guide for first-time home buyers in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy.',
    images: ['/images/buyer-guide-og.jpg'],
  },
};

export default function BuyerGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              First-Time Home Buyer Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your complete guide to buying your first home in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Home Buying Process</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Get Pre-Approved for a Mortgage</h3>
                  <p className="text-gray-600 mb-4">
                    Before you start looking at homes, it's crucial to get pre-approved for a mortgage. 
                    This will help you understand your budget and show sellers that you're a serious buyer.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check your credit score and improve if necessary</li>
                    <li>Gather financial documents (pay stubs, tax returns, bank statements)</li>
                    <li>Compare mortgage rates from multiple lenders</li>
                    <li>Get pre-approval letter from your chosen lender</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Find the Right Real Estate Agent</h3>
                  <p className="text-gray-600 mb-4">
                    A good real estate agent will guide you through the entire process and help you 
                    find the perfect home within your budget.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Look for agents with local market expertise</li>
                    <li>Check reviews and testimonials from past clients</li>
                    <li>Ensure they're licensed and experienced</li>
                    <li>Choose someone who communicates well and understands your needs</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Start House Hunting</h3>
                  <p className="text-gray-600 mb-4">
                    With your budget and agent in place, it's time to start looking at homes. 
                    Be prepared to view multiple properties before finding the right one.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Make a list of must-have features vs. nice-to-have features</li>
                    <li>Consider location, schools, commute times, and neighborhood amenities</li>
                    <li>Take notes and photos during home tours</li>
                    <li>Don't rush the decision - this is a major investment</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Make an Offer</h3>
                  <p className="text-gray-600 mb-4">
                    Once you find the perfect home, your agent will help you craft a competitive offer.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Research comparable sales in the area</li>
                    <li>Consider market conditions (buyer's vs. seller's market)</li>
                    <li>Include contingencies for inspection and financing</li>
                    <li>Be prepared for negotiations</li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Home Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    After your offer is accepted, schedule a professional home inspection to 
                    identify any potential issues.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Hire a licensed and experienced home inspector</li>
                    <li>Attend the inspection to ask questions</li>
                    <li>Review the inspection report carefully</li>
                    <li>Negotiate repairs or price adjustments if needed</li>
                  </ul>
                </div>

                {/* Step 6 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Finalize Your Mortgage</h3>
                  <p className="text-gray-600 mb-4">
                    Work with your lender to complete the mortgage application and secure your loan.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Provide any additional documentation requested by your lender</li>
                    <li>Lock in your interest rate</li>
                    <li>Review and understand all loan terms</li>
                    <li>Complete the loan application process</li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Closing Day</h3>
                  <p className="text-gray-600 mb-4">
                    The final step is closing day, where you'll sign all the paperwork and 
                    officially become a homeowner.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Review all closing documents before signing</li>
                    <li>Bring a valid ID and any required documentation</li>
                    <li>Bring a cashier's check for closing costs</li>
                    <li>Do a final walkthrough of the property</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Janet Duffy, the Premier Good To Know REALTOR®, guide you through 
            your first home purchase. With 15+ years of experience helping first-time 
            buyers, I'll make the process smooth and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:702-222-1964" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (702) 222-1964
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
