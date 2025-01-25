import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  // State management for mobile menu and scroll tracking
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Navigation sections with their corresponding element IDs
  const navSections = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Spices', id: 'spices' },
    { label: 'About Us', id: 'about' },
    { label: 'Customer Stories', id: 'testimonials' },
    { label: 'Visit Us', id: 'visit' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    // Scroll event handler for tracking scroll position and progress
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Pixel threshold for scroll effects

      // Calculate smooth scroll progress (0 to 1)
      const progress = Math.min(scrollPosition / scrollThreshold, 1);
      setScrollProgress(progress);

      // Update scroll state for navbar background
      setIsScrolled(scrollPosition > 20);
    };

    // Add and cleanup scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling to section method
  const scrollToSection = (sectionId: string) => {
    // Find the target element
    const element = document.getElementById(sectionId);

    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensures top of section is aligned
      });

      // Close mobile menu after navigation
      setIsOpen(false);
    } else {
      // Helpful debug log if section not found
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  // Dynamic sizing calculation method
  const calculateDynamicSize = (
    maxSize: number,
    minSize: number,
    progress: number
  ) => maxSize - (progress * (maxSize - minSize));

  // Calculate current navbar and logo dimensions
  const currentHeight = calculateDynamicSize(100, 80, scrollProgress);
  const currentLogoHeight = calculateDynamicSize(120, 80, scrollProgress);
  const currentLogoWidth = calculateDynamicSize(240, 160, scrollProgress);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        bg-white shadow-md
      `}
      style={{
        height: `${currentHeight}px`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://sumitjha.sirv.com/assets/logos.png"
              alt="Swadik Spices Logo"
              style={{
                height: `${currentLogoHeight}px`,
                width: `${currentLogoWidth}px`,
                transition: 'all 0.3s ease-in-out'
              }}
              className="p-2 pt-1"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navSections.map((section) => (
                <button
                  key={section.label}
                  onClick={() => scrollToSection(section.id)}
                  className="
                    text-gray-700 hover:text-amber-600
                    px-3 py-2 rounded-md text-sm
                    font-medium transition-colors
                  "
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                inline-flex items-center justify-center
                p-2 rounded-md text-gray-700
                hover:text-amber-600
              "
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navSections.map((section) => (
              <button
                key={section.label}
                onClick={() => scrollToSection(section.id)}
                className="
                  text-gray-700 hover:text-amber-600
                  block px-3 py-2 rounded-md
                  text-base font-medium w-full text-left
                "
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;