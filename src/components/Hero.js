import React, { useEffect, useState } from 'react';
import { HiChevronDoubleDown, HiPlay } from 'react-icons/hi2';
import { gsap } from 'gsap';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for the slider
  const backgroundImages = [
    'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1920',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920'
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo('.hero-title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
    );
    gsap.fromTo('.hero-cta',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.9 }
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <ThreeScene />
      
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="hero-title mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Frame<span className="text-amber-500">Craft</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <p className="hero-subtitle text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Capturing Life's Beautiful Moments Through Our Lens
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() =>
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <HiPlay className="w-5 h-5" />
            View Portfolio
          </button>
          
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Book a Session
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <HiChevronDoubleDown className="w-8 h-8 text-amber-500" />
      </div>
    </section>
  );
};

export default Hero;