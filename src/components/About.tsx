import React, { useState, useEffect } from 'react';
import { ScrollText, Feather, Mountain, Star } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setVisibleSections(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const getVisibilityClass = (sectionId) => {
    return visibleSections[sectionId]
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-10';
  };

  // Separate classes for right and left aligned icons
  const getRightIconClass = () => `
    absolute
    top-0
    left-0
    md:top-1/2
    md:-translate-y-1/2
    md:-translate-x-1/2
    bg-white rounded-full p-2 md:p-3 shadow-lg
    w-10 h-10 md:w-14 md:h-14
    flex items-center justify-center
    z-10
  `;

  const getLeftIconClass = () => `
    absolute
    top-0
    left-0
    md:top-1/2
    md:-translate-y-1/2
    md:-translate-x-1/2
    md:left-[calc(100%)]
    bg-white rounded-full p-2 md:p-3 shadow-lg
    w-10 h-10 md:w-14 md:h-14
    flex items-center justify-center
    z-10
  `;

  return (
    <div id="about" className="relative min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-amber-100/50 -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-orange-100/50 -bottom-48 -right-48 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 scroll-section" id="header">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
            <span className="block mb-2">Reviving the Ancient</span>
            <span className="block text-amber-700">Flavors of Bharat</span>
          </h1>
          <div className="w-32 md:w-40 h-1 bg-amber-600 mx-auto my-6 md:my-8 transition-all duration-500 hover:scale-x-150"></div>
        </div>

        {/* Story sections */}
        <div className="space-y-16 md:space-y-32 relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-600 to-transparent hidden md:block"></div>

          {[
            {
              id: 'section1',
              icon: <ScrollText className="w-6 h-6 text-amber-600" />,
              title: "The Meaning of Swadik",
              content: "A harmonious fusion of 'Swad' (taste) and 'Vedic' (ancient wisdom), our name embodies the perfect blend of flavor and tradition, carrying forward the legacy of ancient Indian culinary arts.",
              align: 'right'
            },
            {
              id: 'section2',
              icon: <Feather className="w-6 h-6 text-amber-600" />,
              title: "Vedic Heritage",
              content: "In the Vedic era, spices were more than ingredients—they were treasures of health and wellness. Each blend was crafted with care, guided by ancient texts that celebrated nature's bounty.",
              align: 'left'
            },
            {
              id: 'section3',
              icon: <Mountain className="w-6 h-6 text-amber-600" />,
              title: "Our Sacred Mission",
              content: "We're dedicated to delivering authentic, natural, and chemical-free spices that enhance every dish with the taste of ancient wisdom, bringing timeless recipes back to life in modern kitchens.",
              align: 'right'
            },
            {
              id: 'section4',
              icon: <Star className="w-6 h-6 text-amber-600" />,
              title: "Our Promise",
              content: "Experience the purity of Swadik Spices today! We bring the timeless flavors of India to your kitchen, ensuring every spice tells a story of tradition and excellence.",
              align: 'left'
            }
          ].map((section) => (
            <div key={section.id} className="scroll-section relative" id={section.id}>
              <div className={`
                relative
                md:w-1/2
                ${section.align === 'right' ? 'md:ml-auto md:pl-12' : 'md:pr-12'}
                transform transition-all duration-700
                ${getVisibilityClass(section.id)}
              `}>
                {/* Icon container with different classes for left/right alignment */}
                <div className={section.align === 'right' ? getRightIconClass() : getLeftIconClass()}>
                  {section.icon}
                </div>

                {/* Content */}
                <div className="pl-12 md:pl-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="scroll-section text-center mt-16 md:mt-32" id="footer">
          <p className={`text-2xl sm:text-3xl md:text-4xl font-serif text-amber-800 italic transform transition-all duration-700 ${getVisibilityClass('footer')}`}>
            "Taste the Wisdom of Vedic Times"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;