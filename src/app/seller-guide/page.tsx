import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Home Seller Guide | Dr. Janet Duffy - Premier Good To Know REALTOR®',
  description: 'Complete guide for selling your home in Las Vegas. Premier Good To Know REALTOR® Dr. Janet Duffy provides expert tips, pricing strategies, and step-by-step guidance.',
  keywords: 'home seller guide, Las Vegas home selling, home selling tips, Dr. Janet Duffy',
  openGraph: {
    title: 'Home Seller Guide | Dr. Janet Duffy',
    description: 'Complete guide for selling your home in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy.',
    images: ['/images/seller-guide-og.jpg'],
  },
};

export default function SellerGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Home Seller Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your complete guide to selling your home in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Home Selling Process</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Prepare Your Home for Sale</h3>
                  <p className="text-gray-600 mb-4">
                    First impressions matter. Preparing your home properly can significantly 
                    impact how quickly it sells and for how much.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Deep clean every room and declutter</li>
                    <li>Make necessary repairs and improvements</li>
                    <li>Stage your home to highlight its best features</li>
                    <li>Consider professional photography for online listings</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Determine Your Home&apos;s Value</h3>
                  <p className="text-gray-600 mb-4">
                    Pricing your home correctly is crucial. Too high and it won&apos;t sell; 
                    too low and you&apos;ll lose money.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Get a professional comparative market analysis (CMA)</li>
                    <li>Consider recent sales of similar homes in your area</li>
                    <li>Factor in current market conditions</li>
                    <li>Account for any unique features or improvements</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Choose the Right Real Estate Agent</h3>
                  <p className="text-gray-600 mb-4">
                    A skilled real estate agent will help you navigate the selling process 
                    and maximize your home&apos;s value.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Look for agents with local market expertise</li>
                    <li>Check their track record and client testimonials</li>
                    <li>Ensure they have a strong marketing strategy</li>
                    <li>Discuss commission rates and services included</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Market Your Home</h3>
                  <p className="text-gray-600 mb-4">
                    Effective marketing is key to attracting qualified buyers and selling quickly.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>List on multiple online platforms and MLS</li>
                    <li>Use professional photos and virtual tours</li>
                    <li>Host open houses and private showings</li>
                    <li>Leverage social media and digital marketing</li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Review and Negotiate Offers</h3>
                  <p className="text-gray-600 mb-4">
                    When offers come in, your agent will help you evaluate and negotiate 
                    the best terms.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Consider offer price, contingencies, and closing timeline</li>
                    <li>Evaluate buyer&apos;s financial qualifications</li>
                    <li>Negotiate terms that work for both parties</li>
                    <li>Don&apos;t just focus on price - consider all terms</li>
                  </ul>
                </div>

                {/* Step 6 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Handle Inspections and Appraisals</h3>
                  <p className="text-gray-600 mb-4">
                    Buyers will likely request a home inspection and their lender will 
                    require an appraisal.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Be prepared for inspection findings</li>
                    <li>Address any major issues that could affect the sale</li>
                    <li>Ensure your home appraises for the agreed-upon price</li>
                    <li>Be flexible with repairs and negotiations</li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Closing Day</h3>
                  <p className="text-gray-600 mb-4">
                    The final step is closing day, where you&apos;ll transfer ownership to the buyer.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Review all closing documents carefully</li>
                    <li>Bring required identification and documentation</li>
                    <li>Ensure all utilities are transferred</li>
                    <li>Complete the final walkthrough with the buyer</li>
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
            Ready to Sell Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let Dr. Janet Duffy, the Premier Good To Know REALTOR®, help you sell your 
            home for top dollar. With 15+ years of experience and proven marketing strategies, 
            I&apos;ll guide you through every step of the process.
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
              Get Free Home Valuation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
