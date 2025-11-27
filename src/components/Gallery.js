import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/gallery1.jpg', category: 'Portrait' },
    { id: 2, src: '/images/gallery2.jpg', category: 'Landscape' },
    { id: 3, src: '/images/gallery3.jpg', category: 'Event' },
    { id: 4, src: '/images/gallery4.jpg', category: 'Wedding' },
    { id: 5, src: '/images/gallery5.jpg', category: 'Commercial' },
    { id: 6, src: '/images/gallery6.jpg', category: 'Street' },
    { id: 7, src: '/images/gallery7.jpg', category: 'Travel' },
    { id: 8, src: '/images/gallery8.jpg', category: 'Fine Art' }
  ];

  return (
    <section id="gallery" className="section-padding bg-primary">
      <div className="container-custom">
        <h2 className="fade-in text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Featured Work
        </h2>
        <p className="fade-in text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A curated selection of my favorite captures that showcase the diversity and depth of my photography style.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={`${image.category} photography by VisionFrame`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent font-semibold">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <button className="btn-primary bg-white text-primary hover:bg-gray-200">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;