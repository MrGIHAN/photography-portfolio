import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '📸' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '8+', label: 'Years Experience', icon: '🎯' },
    { number: '50+', label: 'Awards Won', icon: '🏆' }
  ];

  const services = [
    {
      title: 'Portrait Artistry',
      description: 'Capturing the unique essence and personality through artistic portrait sessions that reveal true character.',
      icon: '👤',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Studio & Outdoor', 'Professional Editing', 'Multiple Outfits']
    },
    {
      title: 'Wedding Photography',
      description: 'Documenting your special day with creative vision and meticulous attention to every emotional detail.',
      icon: '💒',
      gradient: 'from-amber-500 to-orange-500',
      features: ['Full Day Coverage', 'Album Design', 'Digital Delivery']
    },
    {
      title: 'Landscape Wonders',
      description: 'Showcasing the breathtaking beauty of natural and urban landscapes from unique, compelling perspectives.',
      icon: '🌄',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Golden Hour Shoots', '4K Resolution', 'Print Ready']
    },
    {
      title: 'Commercial Vision',
      description: 'Elevating brands with professional photography that captures attention and communicates powerful messages.',
      icon: '💎',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Product Photography', 'Brand Storytelling', 'Marketing Ready']
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-48 translate-y-48"></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent/20">
            <span className="text-lg">✨</span>
            <span>Premium Photography Studio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Creative Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where technical precision meets artistic expression to create timeless visual narratives that tell your unique story.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-white rounded-full translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Create Magic?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your vision and create stunning visual stories that will be cherished forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;