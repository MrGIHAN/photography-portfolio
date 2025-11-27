import React from 'react';

const Footer = () => {
  const socialLinks = {
    'Instagram': 'https://instagram.com',
    'Facebook': 'https://facebook.com', 
    'Twitter': 'https://twitter.com'
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Vision<span className="text-accent">Frame</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Capturing life's beautiful moments with creativity, passion, and technical excellence.
            </p>
            <div className="flex space-x-4">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in">
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@visionframe.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Photography Studio, Creative District</p>
              <p>🌍 New York, NY 10001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center fade-in">
          <p className="text-gray-400">
            © 2024 VisionFrame Photography. All rights reserved. | Crafted with passion and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;