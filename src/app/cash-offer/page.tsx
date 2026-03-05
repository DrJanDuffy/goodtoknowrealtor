'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cash Offer Program | Dr. Jan Duffy - Las Vegas Real Estate Expert',
  description: 'Get a competitive cash offer for your Las Vegas home. Skip the traditional selling process with Dr. Jan Duffy\'s cash offer program.',
  keywords: ['cash offer', 'sell home fast', 'Las Vegas real estate', 'Dr. Jan Duffy', 'quick home sale'],
  url: '/cash-offer',
  image: '/images/cash-offer-og.jpg',
});

export default function CashOfferPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cash Offer', url: '/cash-offer' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 lg:py-20'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
                Get a Cash Offer for Your Las Vegas Home
              </h1>
              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                Skip the traditional selling process. Get a competitive cash offer for your Las Vegas home in as little as 24 hours with Dr. Jan Duffy's proven cash offer program.
              </p>
            </div>
          </div>
        </section>

        {/* Why Cash Offers Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
                Why Choose Dr. Jan Duffy's Cash Offer Program?
              </h2>
              <p className='text-xl text-gray-600 mb-12 text-center leading-relaxed'>
                As a Top 1% Las Vegas real estate agent with $127M+ in sales volume, Dr. Jan Duffy offers a unique cash offer program that provides homeowners with a fast, hassle-free alternative to traditional home selling.
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center bg-white rounded-xl p-8 shadow-lg'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <IconSymbol symbol='⚡' className='text-blue-600 text-2xl' ariaLabel='Fast icon' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Lightning Fast Closing</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Close in as little as 7 days instead of waiting 3-6 months for a traditional sale. Perfect for urgent situations like job relocations, divorce, or financial hardship.
                  </p>
                </div>
                
                <div className='text-center bg-white rounded-xl p-8 shadow-lg'>
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <IconSymbol symbol='🔧' className='text-green-600 text-2xl' ariaLabel='Tools icon' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>No Repairs Required</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    We buy homes in any condition - no need to fix, clean, or stage your property. Save thousands on repairs, cleaning, and staging costs.
                  </p>
                </div>
                
                <div className='text-center bg-white rounded-xl p-8 shadow-lg'>
                  <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <IconSymbol symbol='💰' className='text-purple-600 text-2xl' ariaLabel='Money icon' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Competitive Market Pricing</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Get a fair market value offer based on current Las Vegas market conditions. No lowball offers - we provide competitive pricing based on recent comparable sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Process Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
                How Dr. Jan Duffy's Cash Offer Process Works
              </h2>
              <p className='text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto'>
                Our streamlined 4-step process makes selling your home fast, simple, and stress-free. Here's exactly what to expect:
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                    1
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Submit Property Details</h3>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    Fill out our simple online form with your property address, basic details, and contact information. Takes less than 5 minutes.
                  </p>
                  <ul className='text-sm text-gray-500 text-left space-y-1'>
                    <li>• Property address</li>
                    <li>• Square footage</li>
                    <li>• Number of bedrooms/bathrooms</li>
                    <li>• Year built</li>
                    <li>• Current condition</li>
                  </ul>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                    2
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Receive Your Offer</h3>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    Get a competitive cash offer within 24 hours based on current market analysis and comparable sales in your Las Vegas neighborhood.
                  </p>
                  <ul className='text-sm text-gray-500 text-left space-y-1'>
                    <li>• Market analysis</li>
                    <li>• Comparable sales review</li>
                    <li>• Property condition assessment</li>
                    <li>• Competitive offer presentation</li>
                  </ul>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                    3
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Accept & Schedule Closing</h3>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    Accept the offer and schedule your closing. We handle all paperwork and coordinate with title companies for a smooth transaction.
                  </p>
                  <ul className='text-sm text-gray-500 text-left space-y-1'>
                    <li>• Contract execution</li>
                    <li>• Title company coordination</li>
                    <li>• Closing date scheduling</li>
                    <li>• Paperwork preparation</li>
                  </ul>
                </div>
                
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                    4
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Close & Get Paid</h3>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    Close in as little as 7 days and receive your cash payment. No waiting for buyer financing or dealing with loan contingencies.
                  </p>
                  <ul className='text-sm text-gray-500 text-left space-y-1'>
                    <li>• Fast closing process</li>
                    <li>• Cash payment receipt</li>
                    <li>• Property transfer completion</li>
                    <li>• No financing contingencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Cash Offers */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
                When Is a Cash Offer Right for You?
              </h2>
              <p className='text-xl text-gray-600 mb-12 text-center leading-relaxed'>
                Cash offers are ideal for homeowners who need to sell quickly or want to avoid the hassles of traditional home selling. Here are the most common situations:
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-white rounded-xl p-8 shadow-lg'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>Urgent Life Changes</h3>
                  <ul className='space-y-3 text-gray-600'>
                    <li className='flex items-start'>
                      <span className='text-blue-600 mr-3 mt-1'>•</span>
                      <span>Job relocation requiring immediate move</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-600 mr-3 mt-1'>•</span>
                      <span>Divorce or separation proceedings</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-600 mr-3 mt-1'>•</span>
                      <span>Elderly parent needing assisted living</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-600 mr-3 mt-1'>•</span>
                      <span>Military deployment or transfer</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-600 mr-3 mt-1'>•</span>
                      <span>Inherited property needing quick sale</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-white rounded-xl p-8 shadow-lg'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>Financial Situations</h3>
                  <ul className='space-y-3 text-gray-600'>
                    <li className='flex items-start'>
                      <span className='text-green-600 mr-3 mt-1'>•</span>
                      <span>Facing foreclosure or behind on payments</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-green-600 mr-3 mt-1'>•</span>
                      <span>Property needs extensive repairs</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-green-600 mr-3 mt-1'>•</span>
                      <span>Vacant property with ongoing costs</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-green-600 mr-3 mt-1'>•</span>
                      <span>Investment property not performing</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-green-600 mr-3 mt-1'>•</span>
                      <span>Need cash for new home purchase</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
                Cash Offer vs Traditional Sale Comparison
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full bg-white rounded-xl shadow-lg overflow-hidden'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-6 py-4 text-left text-lg font-semibold text-gray-900'>Factor</th>
                      <th className='px-6 py-4 text-center text-lg font-semibold text-blue-600'>Cash Offer</th>
                      <th className='px-6 py-4 text-center text-lg font-semibold text-gray-600'>Traditional Sale</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Time to Close</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>7-14 days</td>
                      <td className='px-6 py-4 text-center text-gray-600'>60-120 days</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Repairs Required</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>None</td>
                      <td className='px-6 py-4 text-center text-gray-600'>Often required</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Staging Costs</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>$0</td>
                      <td className='px-6 py-4 text-center text-gray-600'>$2,000-$5,000</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Financing Contingencies</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>None</td>
                      <td className='px-6 py-4 text-center text-gray-600'>Common</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Showings Required</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>None</td>
                      <td className='px-6 py-4 text-center text-gray-600'>Multiple</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 font-medium text-gray-900'>Closing Certainty</td>
                      <td className='px-6 py-4 text-center text-green-600 font-semibold'>100%</td>
                      <td className='px-6 py-4 text-center text-gray-600'>Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
                What Our Cash Offer Clients Say
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-white rounded-xl p-8 shadow-lg'>
                  <div className='flex items-center mb-4'>
                    <div className='text-yellow-400 text-xl'>
                      {[...Array(5)].map((_, i) => (
                        <IconSymbol key={i} symbol='⭐' className='h-4 w-4 text-yellow-400' ariaLabel='Star rating' />
                      ))}
                    </div>
                  </div>
                  <p className='text-gray-700 mb-6 italic leading-relaxed'>
                    "Dr. Duffy's cash offer program saved us during our divorce. We got a fair price and closed in 10 days. No stress, no repairs, no hassles."
                  </p>
                  <div className='font-semibold text-gray-900'>Maria & Carlos Rodriguez</div>
                  <div className='text-sm text-gray-600'>Divorce Settlement</div>
                </div>
                
                <div className='bg-white rounded-xl p-8 shadow-lg'>
                  <div className='flex items-center mb-4'>
                    <div className='text-yellow-400 text-xl'>
                      {[...Array(5)].map((_, i) => (
                        <IconSymbol key={i} symbol='⭐' className='h-4 w-4 text-yellow-400' ariaLabel='Star rating' />
                      ))}
                    </div>
                  </div>
                  <p className='text-gray-700 mb-6 italic leading-relaxed'>
                    "Facing foreclosure, Dr. Duffy's cash offer gave us a fresh start. We got market value and avoided the stress of a traditional sale."
                  </p>
                  <div className='font-semibold text-gray-900'>James Thompson</div>
                  <div className='text-sm text-gray-600'>Foreclosure Avoidance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              Ready to Get Your Cash Offer?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Get a competitive cash offer for your Las Vegas home today. No obligations, no fees, no hassles. Dr. Jan Duffy's cash offer program provides a fast, fair alternative to traditional home selling.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'
              >
                Get My Cash Offer
              </Link>
              <Link
                href='tel:702-222-1964'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
              >
                Call (702) 222-1964
              </Link>
            </div>
            <p className='text-blue-100 mt-6 text-sm'>
              Free consultation • No obligation • Competitive offers • Fast closing
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
