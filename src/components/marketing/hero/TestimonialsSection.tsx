import React, { useState, useEffect } from 'react';

// Testimonials section with carousel
export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
        quote: "SCS² has completely transformed how our team collaborates on projects. The seamless file sharing and version control are game-changers for our workflow.",
        author: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9dc8995?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "As a freelance designer, I need reliable storage that I can access from anywhere. SCS² gives me peace of mind knowing my files are secure and always available.",
        author: "Michael Chen",
        role: "Independent Designer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "The search functionality in SCS² is incredibly powerful. I can find any document in seconds, even with thousands of files stored in our company account.",
        author: "Priya Patel",
        role: "CTO at StartupX",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by professionals and teams worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <svg className="h-12 w-12 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl text-gray-600 italic mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}