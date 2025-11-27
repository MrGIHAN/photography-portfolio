import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '📸',
      title: 'Portrait Sessions',
      description: 'Professional portrait photography that captures personality and emotion in stunning detail',
      price: '$299',
      features: ['1 Hour Session', '20 Edited Photos', 'Online Gallery', 'Print Release'],
      popular: false
    },
    {
      icon: '💒',
      title: 'Wedding Photography',
      description: 'Capture your special day with beautiful, timeless wedding photography that tells your story',
      price: '$1,299',
      features: ['8 Hours Coverage', '300+ Edited Photos', 'Premium Album', 'Engagement Session'],
      popular: true
    },
    {
      icon: '🏢',
      title: 'Commercial Shoots',
      description: 'Professional photography for businesses and commercial projects that elevate your brand',
      price: '$499',
      features: ['2 Hour Session', '50 Edited Photos', 'Brand Guidelines', 'Fast Delivery'],
      popular: false
    },
    {
      icon: '🌅',
      title: 'Landscape Art',
      description: 'Stunning landscape photography for art and decoration that transforms your space',
      price: '$199',
      features: ['Sunrise/Sunset', '10 High-Res Prints', 'Digital Copies', 'Frame Options'],
      popular: false
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border border-gray-200">
            <span className="text-accent">🎯</span>
            <span>Professional Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Photography</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive photography services tailored to your unique needs and creative vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                service.popular 
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 scale-105' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 text-center">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span className="text-accent">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  <span className="text-gray-500 text-sm block">starting from</span>
                </div>
                <button className={`btn-secondary text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  service.popular 
                    ? 'bg-amber-500 text-white hover:bg-amber-600' 
                    : 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white'
                }`}>
                  Book Now
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-4">Need a Custom Package?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Tell us about your specific requirements and we'll create a personalized package just for you.
            </p>
            <button className="btn-primary px-8 py-4 rounded-full font-semibold">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;