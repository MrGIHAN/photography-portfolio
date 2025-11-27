import React, { useState, useEffect } from 'react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Portrait Artistry',
      subtitle: 'Capturing the essence of human emotion'
    },
    {
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      title: 'Wedding Stories',
      subtitle: 'Timeless memories of your special day'
    },
    {
      image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80',
      title: 'Landscape Wonders',
      subtitle: 'Nature\'s beauty through our lens'
    },
    {
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Event Photography',
      subtitle: 'Every moment tells a story'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          </div>
        ))}
      </div>

      {/* Three.js Overlay */}
      <div className="absolute inset-0 z-5">
        <ThreeScene />
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 transform translate-y-10">
            Frame<span className="text-accent">Craft</span>
          </h1>
          
          {/* Animated Text Slider */}
          <div className="h-24 md:h-32 mb-8 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
                  {slide.subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent">
                  {slide.title}
                </h2>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-photo-primary text-lg px-8 py-4 group relative overflow-hidden">
              <span className="relative z-10">Explore Portfolio</span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105">
              Book Session
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 animate-pulse">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;