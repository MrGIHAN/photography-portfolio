import React from 'react';

const About = () => {
  const services = [
    {
      title: 'Portrait Artistry',
      description: 'Capturing the unique essence and personality of individuals through artistic portrait sessions that reveal true character.',
      icon: '👤',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Landscape Wonders',
      description: 'Showcasing the breathtaking beauty of natural and urban landscapes from unique, compelling perspectives.',
      icon: '🌄',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Event Storytelling',
      description: 'Documenting your special moments with creative vision and meticulous attention to every emotional detail.',
      icon: '📅',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Commercial Vision',
      description: 'Elevating brands with professional photography that captures attention and communicates powerful messages.',
      icon: '💎',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header with modern typography */}
        <div className="text-center mb-20">
          <h2 className="fade-in text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Creative Vision
          </h2>
          <p className="fade-in text-xl text-gray-600 max-w-3xl mx-auto">
            Where technical precision meets artistic expression to create timeless visual narratives
          </p>
        </div>
        
        {/* About Content with improved layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Images with modern layout */}
          <div className="fade-in relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="/images/about1.jpg" 
                  alt="Creative photography process" 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
                <div className="bg-accent text-white p-4 rounded-2xl text-center">
                  <p className="font-semibold">8+ Years Experience</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-primary text-white p-4 rounded-2xl text-center">
                  <p className="font-semibold">500+ Projects</p>
                </div>
                <img 
                  src="/images/about2.jpg" 
                  alt="Professional photography equipment" 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10 -z-10"></div>
          </div>

          {/* Text content */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              <span>Premium Photography</span>
            </div>
            
            <h3 className="text-4xl font-bold mb-8 text-primary leading-tight">
              Crafting Visual Stories That <span className="text-accent">Inspire</span>
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                With over <span className="font-semibold text-primary">8 years</span> of professional experience, 
                I specialize in creating timeless images that tell compelling stories. My approach seamlessly 
                blends technical expertise with artistic vision to deliver exceptional, meaningful results.
              </p>
              <p>
                Every photograph is more than just an image—it's a <span className="font-semibold">memory preserved</span>, 
                an <span className="font-semibold">emotion captured</span>, and a piece of art that will be 
                cherished for generations to come.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with modern cards */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Specialized Services
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive photography solutions tailored to your unique needs and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="fade-in group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8 z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl mb-8 opacity-90">Let's discuss your vision and bring it to life</p>
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;