import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Only register plugins in browser environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initAnimations = () => {
  // Safe animation initialization
  if (typeof window === 'undefined') return;

  // Hero animations
  gsap.to('.hero-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    delay: 0.8
  });

  gsap.to('.hero-btn', {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 1.2
  });

  // Section animations with safety checks
  const sections = ['about', 'services', 'gallery', 'contact'];
  
  sections.forEach(section => {
    const elements = document.querySelectorAll(`#${section} [class*="fade-in"]`);
    elements.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  });

  // Gallery item animations
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    gsap.fromTo(item,
      { y: 80, opacity: 0, rotationY: 10 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });
};

export const animateNavbar = (isScrolled) => {
  gsap.to('.navbar', {
    backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    paddingTop: isScrolled ? '0.5rem' : '1rem',
    paddingBottom: isScrolled ? '0.5rem' : '1rem',
    duration: 0.3,
    ease: 'power2.out'
  });
};