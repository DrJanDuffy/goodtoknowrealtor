import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">Dr. Janet Duffy</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted Las Vegas real estate expert with over 15 years of experience helping clients buy and sell properties.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">📞 (702) 222-1964</p>
              <p className="flex items-center gap-2">✉️ janet@goodtoknowrealtor.com</p>
              <p className="flex items-center gap-2">📍 Las Vegas, NV</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/buying" className="text-gray-300 hover:text-amber-400 transition-colors">Home Buying</Link></li>
              <li><Link href="/selling" className="text-gray-300 hover:text-amber-400 transition-colors">Home Selling</Link></li>
              <li><Link href="/listings" className="text-gray-300 hover:text-amber-400 transition-colors">Property Search</Link></li>
              <li><Link href="/market-analysis" className="text-gray-300 hover:text-amber-400 transition-colors">Market Analysis</Link></li>
              <li><Link href="/home-valuation" className="text-gray-300 hover:text-amber-400 transition-colors">Home Valuation</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors">Real Estate Blog</Link></li>
              <li><Link href="/buying/guide" className="text-gray-300 hover:text-amber-400 transition-colors">Buyer's Guide</Link></li>
              <li><Link href="/selling/guide" className="text-gray-300 hover:text-amber-400 transition-colors">Seller's Guide</Link></li>
              <li><Link href="/market-reports" className="text-gray-300 hover:text-amber-400 transition-colors">Market Reports</Link></li>
              <li><Link href="/calculator" className="text-gray-300 hover:text-amber-400 transition-colors">Mortgage Calculator</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Facebook</Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Instagram</Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">LinkedIn</Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">YouTube</Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-3">
                Get the latest market insights and property updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-amber-400 focus:outline-none"
                />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Dr. Janet Duffy Real Estate. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Accessibility</Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Site Map</Link>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm font-medium">
                Broker DRE#1234567 | Licensed in Nevada
              </p>
              <p className="text-gray-400 text-sm">
                Equal Housing Opportunity
              </p>
            </div>
          </div>

            {/* BHHS Branding */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-amber-800 text-lg mb-2">BERKSHIRE HATHAWAY HOMESERVICES</h5>
                  <p className="text-amber-700 text-sm">
                    California Properties | Broker DRE#00411894
                  </p>
                  <p className="text-amber-700 text-sm">
                    600 Deep Valley Dr., Rolling Hills Estates, CA, 90274
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-amber-700 text-sm font-semibold">© 2025 BHH Affiliates, LLC.</p>
                  <p className="text-amber-600 text-xs mt-1">
                    An independently owned and operated franchisee of BHH Affiliates, LLC.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 bg-red-900/20 border border-red-800 rounded-lg p-4">
              <p className="font-semibold text-red-300 mb-2">⚠️ Important Security Notice</p>
              <p className="text-red-200 text-sm leading-relaxed">
                Never trust wiring instructions sent via email. Cyber criminals are hacking email accounts and sending emails with fake wiring instructions. These emails are convincing and sophisticated. Always independently confirm wiring instructions in person or via a telephone call to a trusted and verified phone number. Never wire money without double-checking that the wiring instructions are correct.
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
