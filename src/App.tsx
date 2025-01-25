import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spices from './components/Spices';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Visit from './components/Visit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';
emailjs.init("PzWd4ZFmfbgbuywmm");
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Spices />
      <About />
      <Testimonials />
      <Visit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;