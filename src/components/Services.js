import React, { useEffect } from 'react';
import { FaCameraRetro, FaHeart, FaBriefcase, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const services = [
    {
      icon: FaCameraRetro,
      title: 'Portrait Photography',
      description: 'Professional headshots and personal portraits that capture your personality',
      price: 'From $299',
      features: ['1-2 Hour Session', '20+ Edited Photos', 'Online Gallery', 'Print Ready Files']
    },
    {
      icon: FaHeart,
      title: 'Wedding Photography',
      description: 'Complete coverage of your special day with creative storytelling',
      price: 'From $1,999',
      features: ['Full Day Coverage', '500+ Photos', 'Second Photographer', 'Premium Album'],
      popular: true
    },
    {
      icon: FaBriefcase,
      title: 'Commercial Shoots',
      description: 'Professional photography for brands and businesses',
      price: 'From $599',
      features: ['Product Photography', 'Brand Shoots', 'Fast Turnaround', 'Usage Rights']
    },
    {
      icon: FaCalendarAlt,
      title: 'Event Coverage',
      description: 'Capture every moment of your corporate or private events',
      price: 'From $499',
      features: ['Full Event Coverage', 'Multiple Photographers', 'Quick Delivery', 'Digital Gallery']
    }
  ];

  return (
    <section id="services" className="services-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`service-card relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'border-2 border-amber-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <service.icon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-amber-500 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
