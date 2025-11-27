import { useEffect, useRef } from 'react';
import { initAnimations, animateNavbar } from '../utils/animations';

export const useScrollAnimation = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        initAnimations();
      }, 100);
      initialized.current = true;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      animateNavbar(isScrolled);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};