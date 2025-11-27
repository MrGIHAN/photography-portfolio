import React, { useState, useEffect } from 'react';
import { 
  HiCamera,
  HiBars3,
  HiXMark
} from 'react-icons/hi2';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <HiCamera className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Frame<span className="text-amber-500">Craft</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium capitalize relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 mb-4">
            {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left text-gray-300 hover:text-amber-500 transition-colors font-medium px-4 py-3 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
