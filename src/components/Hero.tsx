import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://sumitjha.sirv.com/assets/1.jpeg",
    title: "Authentic Spices for Authentic Flavors",
    subtitle: "Unmatched Quality in Every Grain"
  },
  {
    image: "https://sumitjha.sirv.com/assets/3.jpeg",
    title: "Where Authenticity Meets Taste",
    subtitle: "Carefully Crafted for Your Wellness"
  },
  {
    image: "https://sumitjha.sirv.com/assets/2.jpeg",
    title: "The Essence of Tradition in Every Dish",
    subtitle: "Sourced with Love and Integrity"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      id="hero"
      className="
        relative
        h-[50vh]
        sm:h-screen
        mt-[100px]  // Match the navbar height exactly
        sm:mt-0     // Remove margin on larger screens
      "
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Rest of the component remains the same as before */}
          {/* Mobile-specific container */}
          <div className="absolute inset-0 sm:hidden">
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
              <h1 className="text-xl font-serif mb-2">
                {slide.title}
              </h1>
              <p className="text-sm mb-4">{slide.subtitle}</p>
              <button
                onClick={() => scrollToSection('spices')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm transition-colors duration-300 transform hover:scale-105"
              >
                Explore Our Collection
              </button>
            </div>
          </div>

          {/* Desktop full-screen version */}
          <div className="hidden sm:block absolute inset-0">
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-2xl md:text-4xl font-serif mb-4 text-center">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <button
                onClick={() => scrollToSection('spices')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300 transform hover:scale-105"
              >
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons and slide indicators remain the same */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
