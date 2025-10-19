import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Las Vegas First-Time Buyer Challenges & Solutions | Dr. Janet Duffy',
  description: 'Navigate Las Vegas housing affordability crisis with expert guidance. Dr. Janet Duffy helps first-time buyers overcome down payment, income gaps, and market challenges.',
  keywords: 'Las Vegas first-time buyer challenges, housing affordability crisis, down payment assistance Nevada, Home Is Possible program, Dr. Janet Duffy',
  openGraph: {
    title: 'Las Vegas First-Time Buyer Challenges & Solutions | Dr. Janet Duffy',
    description: 'Navigate Las Vegas housing affordability crisis with expert guidance. Dr. Janet Duffy helps first-time buyers overcome down payment, income gaps, and market challenges.',
    images: ['/images/first-time-buyer-challenges-og.jpg'],
  },
};

export default function FirstTimeBuyerChallengesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vegas First-Time Buyer Challenges
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              The Real Challenges You Face & How to Overcome Them
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                "At current prices, only 19.8% of Las Vegas homes are affordable to families earning the median income. But there ARE solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The 10 Biggest Challenges for Vegas First-Time Buyers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ranked by impact - these are the real hurdles you need to overcome to achieve homeownership in Las Vegas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenge 1 - Affordability Crisis */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔴</span>
                  <h3 className="text-xl font-bold text-gray-900">1. The Affordability Crisis</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Median home price:</strong> $449,000<br/>
                    <strong>Required income:</strong> $113,839<br/>
                    <strong>Actual median income:</strong> $75,065<br/>
                    <strong>Gap:</strong> $38,774
                  </p>
                  <p className="text-sm text-gray-600">
                    Only 19.8% of Las Vegas homes are affordable to families earning the local median income.
                  </p>
                </div>
              </div>

              {/* Challenge 2 - Down Payment */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💰</span>
                  <h3 className="text-xl font-bold text-gray-900">2. Down Payment Mountain</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>20% down on $480K home:</strong> $96,000<br/>
                    <strong>3.5% FHA on $480K:</strong> $16,800<br/>
                    <strong>Plus closing costs:</strong> $5,000-10,000
                  </p>
                  <p className="text-sm text-gray-600">
                    Even with FHA loans, you need significant cash reserves.
                  </p>
                </div>
              </div>

              {/* Challenge 3 - Cash Buyers */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏃</span>
                  <h3 className="text-xl font-bold text-gray-900">3. Competing with Cash Buyers</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Real estate investors have scooped up thousands of properties since the pandemic, turning single-family homes into rentals.
                  </p>
                  <p className="text-sm text-gray-600">
                    You're not just competing with other families anymore - you're up against investors with cash.
                  </p>
                </div>
              </div>

              {/* Challenge 4 - Rising Costs */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📈</span>
                  <h3 className="text-xl font-bold text-gray-900">4. Rising Faster Than Wages</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Rent increase (2016-2025):</strong> 40%+<br/>
                    <strong>Wage growth:</strong> Lagging behind
                  </p>
                  <p className="text-sm text-gray-600">
                    If you're in hospitality or service (Vegas's backbone), your wages haven't kept pace with housing costs.
                  </p>
                </div>
              </div>

              {/* Challenge 5 - Interest Rates */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-xl font-bold text-gray-900">5. Interest Rate Squeeze</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Current rates:</strong> ~6.34%<br/>
                    <strong>Monthly payment:</strong> $2,472<br/>
                    <strong>Rent equivalent:</strong> $1,586<br/>
                    <strong>Difference:</strong> $886/month
                  </p>
                  <p className="text-sm text-gray-600">
                    That's $886 more monthly than renting the same property.
                  </p>
                </div>
              </div>

              {/* Challenge 6 - California Competition */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🌴</span>
                  <h3 className="text-xl font-bold text-gray-900">6. California Competition</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Las Vegas attracts transplants from California, Arizona, and other high-cost states with higher incomes or equity from previous sales.
                  </p>
                  <p className="text-sm text-gray-600">
                    They see Vegas as "affordable" while locals get priced out.
                  </p>
                </div>
              </div>

              {/* Challenge 7 - Limited Inventory */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏠</span>
                  <h3 className="text-xl font-bold text-gray-900">7. Limited Starter Home Inventory</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Significantly less development focused on entry-level homes or affordable multifamily housing.
                  </p>
                  <p className="text-sm text-gray-600">
                    Most new builds target the luxury market to protect developer margins.
                  </p>
                </div>
              </div>

              {/* Challenge 8 - Credit Requirements */}
              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📋</span>
                  <h3 className="text-xl font-bold text-gray-900">8. Credit Score Requirements</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Most programs:</strong> 640+ credit scores<br/>
                    <strong>Conventional loans:</strong> 700+<br/>
                    <strong>Home First program:</strong> 660 minimum
                  </p>
                  <p className="text-sm text-gray-600">
                    Building credit takes time many don't have.
                  </p>
                </div>
              </div>

              {/* Challenge 9 - Program Confusion */}
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤔</span>
                  <h3 className="text-xl font-bold text-gray-900">9. Program Confusion</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Nevada has multiple assistance programs (Home Is Possible, Home First, Home at Last, etc.) each with different requirements, income limits, and application processes.
                  </p>
                  <p className="text-sm text-gray-600">
                    It's overwhelming to navigate alone.
                  </p>
                </div>
              </div>

              {/* Challenge 10 - Market Timing */}
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⏰</span>
                  <h3 className="text-xl font-bold text-gray-900">10. Market Timing Anxiety</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Zillow forecasts a 1.2% decrease in home values over the next year.
                  </p>
                  <p className="text-sm text-gray-600">
                    Buyers wonder: Should I wait? Will prices drop more? What if rates go higher instead?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Silver Lining: Proven Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nevada offers multiple assistance programs specifically designed to help first-time buyers overcome these challenges
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Down Payment Help */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">💰</span>
                  <h3 className="text-2xl font-bold text-gray-900">Down Payment Assistance</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-gray-900">Home Is Possible Program</h4>
                    <p className="text-gray-700">Up to 5% of total home loan value</p>
                    <p className="text-sm text-gray-600">On a $150K mortgage = up to $7,500 for down payment and closing costs</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900">Home First Program</h4>
                    <p className="text-gray-700">Down payment assistance up to $15,000</p>
                    <p className="text-sm text-gray-600">Teachers get $7,500 extra assistance!</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900">FHA Loans</h4>
                    <p className="text-gray-700">Require only 3.5% down payment</p>
                    <p className="text-sm text-gray-600">Much more accessible than traditional 20% down</p>
                  </div>
                </div>
              </div>

              {/* Monthly Payment Relief */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">📊</span>
                  <h3 className="text-2xl font-bold text-gray-900">Monthly Payment Relief</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-gray-900">Nevada Mortgage Credit Certificate</h4>
                    <p className="text-gray-700">Federal income tax credit of 20% of interest paid each year</p>
                    <p className="text-sm text-gray-600">Up to $2,000 maximum annual credit</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900">Seller Credits</h4>
                    <p className="text-gray-700">Negotiate seller-paid closing costs</p>
                    <p className="text-sm text-gray-600">Can reduce your out-of-pocket expenses significantly</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900">Rate Buydowns</h4>
                    <p className="text-gray-700">Temporary or permanent interest rate reductions</p>
                    <p className="text-sm text-gray-600">Can make payments more manageable in early years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Reality Check
              </h2>
              <p className="text-xl text-gray-600">
                What you actually need to buy a home in Las Vegas today
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                At Current Prices, You Need:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Annual Income:</span>
                    <span className="text-lg font-bold text-blue-600">$114,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Minimum Down Payment:</span>
                    <span className="text-lg font-bold text-green-600">$16,800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Closing Costs:</span>
                    <span className="text-lg font-bold text-purple-600">$5,000-10,000</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Credit Score:</span>
                    <span className="text-lg font-bold text-orange-600">640+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Reserves:</span>
                    <span className="text-lg font-bold text-red-600">6 months</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Median Income Gap:</span>
                    <span className="text-lg font-bold text-red-600">$38,774</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Why Having the Right Realtor is CRITICAL
              </h4>
              <p className="text-gray-700 mb-4">
                That's why having the right realtor who knows every program, every lender trick, and exactly which neighborhoods still have opportunity is CRITICAL.
              </p>
              <p className="text-gray-700 font-semibold">
                Last week, I helped a couple making $82K secure a $385K home in Rhodes Ranch using Home Is Possible plus seller credits - they moved in with just $8,500 out of pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Real Success Story
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="text-left space-y-4">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold">Rhodes Ranch Success</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Client Profile:</h4>
                    <ul className="space-y-1 text-green-100">
                      <li>• Combined income: $82,000</li>
                      <li>• First-time buyers</li>
                      <li>• Limited down payment funds</li>
                      <li>• Wanted Rhodes Ranch area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Solution Applied:</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Home Is Possible program</li>
                      <li>• Seller credits negotiated</li>
                      <li>• FHA loan with 3.5% down</li>
                      <li>• Strategic offer strategy</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-lg mb-2">Result:</h4>
                  <p className="text-xl font-semibold">
                    $385,000 home purchased with only $8,500 out of pocket!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Tackle These Challenges Together?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Let's find YOUR path to homeownership. I'll navigate every hurdle with you, 
            leveraging every available program and strategy to make your dream home a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="tel:702-222-1964"
              className="bg-white text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200 shadow-lg"
            >
              📞 Call (702) 222-1964
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-800 transition-colors duration-200"
            >
              Get Your Free Consultation
            </Link>
          </div>
          <p className="text-red-100 mt-6 text-lg font-semibold">
            Your advocate through every hurdle, Dr. Jan 🏠
          </p>
        </div>
      </section>
    </div>
  );
}
