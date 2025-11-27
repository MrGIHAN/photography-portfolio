import { useEffect, useRef } from 'react';
import { initAnimations, animateNavbar } from '../utils/animations';

export const useScrollAnimation = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Wait for components to mount
      const timer = setTimeout(() => {
        initAnimations();
        initialized.current = true;
      }, 500);
      
      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      animateNavbar(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};