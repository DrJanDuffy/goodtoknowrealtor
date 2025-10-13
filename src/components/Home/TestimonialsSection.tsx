import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Duffy made buying our first home in Las Vegas so seamless that it felt like I was working with a family friend. Her knowledge of the market and attention to detail helped us find the perfect home in Summerlin.",
      author: "Sarah & Mike Johnson",
      location: "First-Time Homebuyers",
      community: "Summerlin, Las Vegas",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      quote: "Professional, knowledgeable, and always available. Dr. Duffy helped us sell our home for top dollar and find our dream retirement home. The entire process was stress-free thanks to her expertise.",
      author: "Robert & Diane Chen",
      location: "Retirees",
      community: "Henderson, Las Vegas",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      quote: "Excellent investment advice! Dr. Duffy helped us build a profitable real estate portfolio in Las Vegas. Her national expertise in helping agents sell properties gave us the confidence to invest strategically.",
      author: "Alex Martinez",
      location: "Real Estate Investor",
      community: "Multiple Las Vegas Properties",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      quote: "Dr. Duffy's guidance through the luxury home buying process was exceptional. She understood exactly what we were looking for and found us a stunning property that exceeded our expectations.",
      author: "Jennifer & David Thompson",
      location: "Luxury Home Buyers",
      community: "Summerlin Luxury Community",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      quote: "As a first-time seller, I was nervous about the process. Dr. Duffy made everything clear and helped us get top dollar for our home. Her marketing strategies and negotiation skills are outstanding.",
      author: "Maria Rodriguez",
      location: "First-Time Seller",
      community: "North Las Vegas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      quote: "Dr. Duffy's expertise in Las Vegas real estate is unmatched. She helped us find the perfect investment property and provided ongoing guidance. We couldn't have done it without her.",
      author: "James & Lisa Park",
      location: "Investment Property Buyers",
      community: "Las Vegas Investment Portfolio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear From Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from satisfied clients who found their dream homes and built successful 
            real estate portfolios with Dr. Janet Duffy, the Premier Good To Know REALTOR®
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
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
                "{testimonial.quote}"
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
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Premier</div>
              <div className="text-gray-600">Good To Know REALTOR®</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
