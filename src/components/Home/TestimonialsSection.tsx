import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Duffy helped us buy our dream home in Summerlin for $850K in March 2024. Despite multiple competing offers, her negotiation skills got us the house at asking price. The entire process took just 18 days from offer to closing.",
      author: "Sarah & Mike Johnson",
      location: "First-Time Homebuyers",
      community: "Summerlin - $850K Purchase",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      quote: "We sold our Henderson home for $125K over asking price in just 6 days on market. Dr. Duffy's staging recommendations and pricing strategy attracted 8 offers. Her expertise turned our retirement fund into our dream home budget.",
      author: "Robert & Diane Chen",
      location: "Retirees",
      community: "Henderson - $125K Over Asking",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      quote: "Built a $2.3M rental portfolio with Dr. Duffy's guidance. She identified undervalued properties in emerging neighborhoods, and our cash flow has increased 340% since starting in 2022. Her market timing is impeccable.",
      author: "Alex Martinez",
      location: "Real Estate Investor",
      community: "$2.3M Investment Portfolio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      quote: "Found our $1.2M luxury home in The Ridges in November 2023. Dr. Duffy's connections in the luxury market gave us access to off-market properties. We got exactly what we wanted without the bidding wars.",
      author: "Jennifer & David Thompson",
      location: "Luxury Home Buyers",
      community: "The Ridges - $1.2M Purchase",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      quote: "Sold our North Las Vegas home for $95K above our target price in January 2024. Dr. Duffy's marketing strategy included professional photography and virtual tours that attracted buyers from California. Closed in 14 days.",
      author: "Maria Rodriguez",
      location: "First-Time Seller",
      community: "North Las Vegas - $95K Over Target",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 6,
      quote: "Dr. Duffy helped us acquire 3 investment properties in 2024 with a combined value of $1.8M. Her due diligence process saved us from two problematic deals. Our portfolio now generates $8,500 monthly passive income.",
      author: "James & Lisa Park",
      location: "Investment Property Buyers",
      community: "$8,500/Month Passive Income",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results from Real Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Dr. Janet Duffy&apos;s expertise translates into measurable success stories. 
            From luxury purchases to investment portfolios, our clients achieve exceptional outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.community}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="mt-6 flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$127M+</div>
              <div className="text-gray-600">Total Sales Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">22 Days</div>
              <div className="text-gray-600">Average Days to Sell</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Top 1%</div>
              <div className="text-gray-600">Las Vegas Agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
