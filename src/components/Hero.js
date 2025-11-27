import React from 'react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-primary">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white container-custom">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
          Vision<span className="text-accent">Frame</span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Capturing life's most beautiful moments through the lens of creativity and passion
        </p>
        <button className="hero-btn btn-primary">
          View Gallery
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;