import Link from 'next/link';
import { IconSymbol } from '@/components/ui/IconSymbol';

export function PainSolutionBenefitServices() {
  return (
    <section className='py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
            How We Help You Win
          </h2>
          <p className='text-xl text-gray-700 font-medium'>
            We solve the real problems you face—not just list services.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {/* Service 1: Luxury Home Buying */}
          <div className='bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col'>
            <IconSymbol symbol='🏛️' className='text-amber-600 mb-4 h-10 w-10' ariaLabel='Luxury home buying' />
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Luxury Home Buying</h3>
            
            {/* PAIN */}
            <div className='mb-4 pb-4 border-b border-gray-200'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-2'>The Problem</p>
              <p className='text-gray-700 text-sm leading-relaxed'>
                Most luxury home shoppers compete blindly in bidding wars. You find the perfect property, only to lose it to someone who overpaid—or you&apos;re forced to overpay yourself just to compete.
              </p>
            </div>
            
            {/* SOLUTION */}
            <div className='mb-4 pb-4 border-b border-gray-200 flex-grow'>
              <p className='text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2'>Dr. Jan&apos;s Approach</p>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                With Dr. Jan, you access off-market listings and pocket listings before they hit the MLS. Her network gives you first look at properties in Summerlin, The Ridges, Lake Las Vegas, and exclusive gated communities—no competition, no bidding wars.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Off-market property access</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>First offer accepted (often under asking)</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>$50K+ savings vs. competitive bidding</span>
                </li>
              </ul>
            </div>
            
            {/* PROOF */}
            <div className='mb-4 pb-2'>
              <p className='text-xs text-gray-600 italic mb-1'>&ldquo;Avoided bidding wars on luxury homes. Dr. Jan&apos;s connections gave us access to off-market properties in The Ridges.&rdquo;</p>
              <p className='text-xs font-semibold text-gray-800'>— Jennifer & David Thompson, The Ridges</p>
            </div>
            
            <Link 
              href='/luxury' 
              className='block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-auto'
            >
              Get Buyer Strategy
            </Link>
          </div>

          {/* Service 2: Luxury Home Selling */}
          <div className='bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col'>
            <IconSymbol symbol='💎' className='text-amber-600 mb-4 h-10 w-10' ariaLabel='Luxury selling' />
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Luxury Home Selling</h3>
            
            {/* PAIN */}
            <div className='mb-4 pb-4 border-b border-gray-200'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-2'>The Problem</p>
              <p className='text-gray-700 text-sm leading-relaxed'>
                Most sellers don&apos;t know their home is worth $100K+ more than online estimates. You worry about pricing too high and sitting on the market—or pricing too low and leaving money on the table.
              </p>
            </div>
            
            {/* SOLUTION */}
            <div className='mb-4 pb-4 border-b border-gray-200 flex-grow'>
              <p className='text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2'>Dr. Jan&apos;s Approach</p>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                We market your home to serious, pre-qualified buyers only—no open houses, no tire-kickers. Luxury staging and strategic pricing create urgency. The result? Multiple competitive offers in days, not months.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Discreet marketing to qualified buyers</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>8+ offers in 6 days (average)</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>$50K-$125K over asking price</span>
                </li>
              </ul>
            </div>
            
            {/* PROOF */}
            <div className='mb-4 pb-2'>
              <p className='text-xs text-gray-600 italic mb-1'>&ldquo;Worried we&apos;d sit on market for months. Dr. Jan&apos;s staging and pricing strategy: 8 offers in 6 days, $125K over asking.&rdquo;</p>
              <p className='text-xs font-semibold text-gray-800'>— Robert & Diane Chen, Henderson</p>
            </div>
            
            <Link 
              href='/selling' 
              className='block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-auto'
            >
              Get Home Valuation
            </Link>
          </div>

          {/* Service 3: Concierge Services */}
          <div className='bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col'>
            <IconSymbol symbol='⭐' className='text-amber-600 mb-4 h-10 w-10' ariaLabel='Concierge services' />
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Concierge Services</h3>
            
            {/* PAIN */}
            <div className='mb-4 pb-4 border-b border-gray-200'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-2'>The Problem</p>
              <p className='text-gray-700 text-sm leading-relaxed'>
                High-net-worth clients need privacy and convenience. You don&apos;t have time to manage property showings, coordinate vendors, or handle the dozens of details that come with buying or selling luxury real estate.
              </p>
            </div>
            
            {/* SOLUTION */}
            <div className='mb-4 pb-4 border-b border-gray-200 flex-grow'>
              <p className='text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2'>Dr. Jan&apos;s Approach</p>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                Full white-glove concierge service handles everything: private showings on your schedule, confidential transactions, property management, and lifestyle support. You get the result without the hassle.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Private showings (no public open houses)</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Confidential transactions & NDAs</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Property management & vendor coordination</span>
                </li>
              </ul>
            </div>
            
            {/* PROOF */}
            <div className='mb-4 pb-2'>
              <p className='text-xs text-gray-600 italic mb-1'>Available 7 days a week. Discreet service for executives, celebrities, and high-profile clients.</p>
            </div>
            
            <Link 
              href='/contact' 
              className='block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-auto'
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Service 4: First-Time Home Buyers */}
          <div className='bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col'>
            <IconSymbol symbol='🔑' className='text-amber-600 mb-4 h-10 w-10' ariaLabel='First-time buyers' />
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>First-Time Home Buyers</h3>
            
            {/* PAIN */}
            <div className='mb-4 pb-4 border-b border-gray-200'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-2'>The Problem</p>
              <p className='text-gray-700 text-sm leading-relaxed'>
                You feel like you&apos;ll never afford a home in Vegas. Down payments seem impossible, bidding wars are scary, and you don&apos;t know what you don&apos;t know—so you keep renting and watching prices climb.
              </p>
            </div>
            
            {/* SOLUTION */}
            <div className='mb-4 pb-4 border-b border-gray-200 flex-grow'>
              <p className='text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2'>Dr. Jan&apos;s Approach</p>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                Dr. Jan shows you first-time buyer programs (down payment assistance, grants, FHA loans). She walks you through every step, finds homes within your budget, and helps you avoid overpaying in competitive markets.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Down payment assistance programs</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Step-by-step guidance (pre-approval to closing)</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>First home found in 30-60 strict days</span>
                </li>
              </ul>
            </div>
            
            {/* PROOF */}
            <div className='mb-4 pb-2'>
              <p className='text-xs text-gray-600 italic mb-1'>&ldquo;Dr. Duffy made buying our first home in Las Vegas so seamless. Her knowledge helped us find the perfect home in Summerlin.&rdquo;</p>
              <p className='text-xs font-semibold text-gray-800'>— Sarah & Mike Johnson, Summerlin</p>
            </div>
            
            <Link 
              href='/buying' 
              className='block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-auto'
            >
              Get First-Time Buyer Guide
            </Link>
          </div>

          {/* Service 5: Real Estate Investors */}
          <div className='bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col'>
            <IconSymbol symbol='📊' className='text-amber-600 mb-4 h-10 w-10' ariaLabel='Investor services' />
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Real Estate Investors</h3>
            
            {/* PAIN */}
            <div className='mb-4 pb-4 border-b border-gray-200'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-2'>The Problem</p>
              <p className='text-gray-700 text-sm leading-relaxed'>
                You want to build wealth through Vegas real estate, but you&apos;re buying properties that don&apos;t cash flow. You&apos;re guessing on ROI, cap rates, and which neighborhoods will appreciate—gambling instead of investing strategically.
              </p>
            </div>
            
            {/* SOLUTION */}
            <div className='mb-4 pb-4 border-b border-gray-200 flex-grow'>
              <p className='text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2'>Dr. Jan&apos;s Approach</p>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                Dr. Jan provides investment-grade analysis: ROI projections, cap rate calculations, rental market data, and portfolio strategies. She finds off-market deals, identifies emerging neighborhoods, and builds your portfolio systematically.
              </p>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>ROI & cap rate analysis before you buy</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Off-market investment deals</span>
                </li>
                <li className='flex items-start'>
                  <IconSymbol symbol='✓' className='text-amber-600 mr-2 h-4 w-4 mt-0.5' ariaLabel='Included' />
                  <span>Portfolio growth strategies</span>
                </li>
              </ul>
            </div>
            
            {/* PROOF */}
            <div className='mb-4 pb-2'>
              <p className='text-xs text-gray-600 italic mb-1'>&ldquo;Built a $2.3M rental portfolio with Dr. Jan&apos;s guidance. Cash flow increased 340% since 2022.&rdquo;</p>
              <p className='text-xs font-semibold text-gray-800'>— Alex Martinez, Las Vegas</p>
            </div>
            
            <Link 
              href='/investing' 
              className='block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-auto'
            >
              Get Investment Strategy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

