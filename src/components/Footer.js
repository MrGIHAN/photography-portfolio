import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/framecraft' },
    { name: 'Facebook', icon: '👍', url: 'https://facebook.com/framecraft' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/framecraft' },
    { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com/framecraft' },
    { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/framecraft' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Portrait Photography',
    'Wedding Photography',
    'Commercial Shoots',
    'Landscape Art',
    'Event Coverage',
    'Product Photography'
  ];

  const contactInfo = [
    { icon: '📧', text: 'hello@framecraft.com' },
    { icon: '📞', text: '+1 (555) 123-4567' },
    { icon: '📍', text: '123 Creative Studio District' },
    { icon: '🌍', text: 'New York, NY 10001' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-xl">
                📸
              </div>
              <h3 className="text-2xl font-bold">
                Frame<span className="text-accent">Craft</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Capturing life's beautiful moments with creativity, passion, and technical excellence. 
              We transform ordinary scenes into extraordinary memories.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></div>
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-accent transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <span className="group-hover:text-accent">→</span> {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></div>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  className="text-gray-300 hover:text-accent text-sm transition-colors duration-300 py-1 hover:underline"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></div>
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="text-accent text-lg">{info.icon}</span>
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-300 text-sm"
                />
                <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 FrameCraft Photography. All rights reserved. | Crafted with ❤️ and 📸
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Back to top"
        >
          <span className="text-white text-lg">↑</span>
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 opacity-10">
        <div className="text-6xl">📸</div>
      </div>
      <div className="absolute top-4 right-4 opacity-10">
        <div className="text-4xl">🌟</div>
      </div>
    </footer>
  );
};

export default Footer;