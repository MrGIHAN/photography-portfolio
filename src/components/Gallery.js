import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Portrait', 'Wedding', 'Landscape', 'Commercial', 'Street'];

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=600', category: 'Portrait' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&w=600', category: 'Wedding' },
    { id: 3, src: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&w=600', category: 'Landscape' },
    { id: 4, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&w=600', category: 'Event' },
    { id: 5, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&w=600', category: 'Commercial' },
    { id: 6, src: '/images/gallery6.jpg', category: 'Street' },
    { id: 7, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&w=600', category: 'Portrait' },
    { id: 8, src: '/images/gallery8.jpg', category: 'Fine Art' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-primary to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="fade-in text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Portfolio
          </h2>
          <p className="fade-in text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            A curated selection of our favorite captures that showcase the diversity and depth of our photography style.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
            >
              <img 
                src={image.src} 
                alt={`${image.category} photography`}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent font-bold text-lg">{image.category}</span>
                  <div className="w-12 h-0.5 bg-accent mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              
              {/* Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  👁️
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button className="btn-primary bg-accent border-accent hover:bg-amber-600 hover:border-amber-600 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;