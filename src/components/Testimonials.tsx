import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The turmeric powder from Swadik Spices has become an essential part of my daily wellness routine. The quality and purity are unmatched!',
    role: 'Health Coach'
  },
  {
    name: 'Rajesh Patel',
    image: 'https://images.unsplash.com/photo-1580988088112-915bdd158045?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'As a chef, I\'ve tried many brands, but Swadik\'s red chili powder offers the perfect balance of heat and flavor. It\'s simply exceptional.',
    role: 'Professional Chef'
  },
  {
    name: 'Meera Kapoor',
    image: 'https://images.unsplash.com/photo-1669659033487-203d254e35a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGluZGlhbiUyMHNtaWxlJTIwZmFjZXxlbnwwfHwwfHx8Mg%3D%3D',
    text: 'The aroma of their coriander powder is incredible! It adds such authentic flavor to my dishes. My family can taste the difference.',
    role: 'Food Blogger'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Customer Stories</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8 relative">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-amber-200" />
                      <div className="text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <p className="text-xl text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-amber-600' : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;