// Services.js - New component
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '📸',
      title: 'Portrait Sessions',
      description: 'Professional portrait photography that captures personality and emotion',
      price: '$299'
    },
    {
      icon: '💒',
      title: 'Wedding Photography',
      description: 'Capture your special day with beautiful, timeless wedding photography',
      price: '$1,299'
    },
    {
      icon: '🏢',
      title: 'Commercial Shoots',
      description: 'Professional photography for businesses and commercial projects',
      price: '$499'
    },
    {
      icon: '🌅',
      title: 'Landscape Art',
      description: 'Stunning landscape photography for art and decoration',
      price: '$199'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="fade-in-up text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive photography services tailored to your unique needs and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="fade-in-up card-hover group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                <button className="btn-secondary text-sm px-4 py-2">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;