import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        }
      }
    );
  }, [filter]);

  const categories = ['All', 'Portrait', 'Wedding', 'Commercial', 'Event'];
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', category: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', category: 'Wedding' },
    { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600', category: 'Commercial' },
    { src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600', category: 'Wedding' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600', category: 'Event' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', category: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600', category: 'Commercial' },
    { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600', category: 'Event' }
  ];

  const filtered = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">Explore our finest work</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((img, idx) => (
            <div 
              key={idx}
              className="gallery-item group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.category}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;