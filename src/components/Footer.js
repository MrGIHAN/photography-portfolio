import React from 'react';
import { FaCamera, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com' },
    { icon: FaFacebookF, url: 'https://www.facebook.com' },
    { icon: FaTwitter, url: 'https://www.twitter.com' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaCamera className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold">
                Frame<span className="text-amber-500">Craft</span>
              </span>
            </div>
            <p className="text-gray-400">
              Capturing life's beautiful moments with passion and precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Services', 'Gallery'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-amber-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {['Portrait Photography', 'Wedding Coverage', 'Commercial Shoots', 'Event Photography'].map(service => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FrameCraft Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
