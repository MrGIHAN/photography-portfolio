import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Hero animations with timeline
  const heroTl = gsap.timeline();
  heroTl
    .fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.4, 
        ease: 'power3.out',
        stagger: 0.2
      }
    )
    .fromTo('.hero-subtitle', 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: 'power2.out' 
      }, '-=0.8'
    )
    .fromTo('.hero-btn', 
      { scale: 0, opacity: 0, rotation: -10 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 0.8, 
        ease: 'back.out(1.7)' 
      }, '-=0.5'
    )
    .fromTo('.scroll-indicator',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3'
    );

  // About section animations
  gsap.utils.toArray('.fade-in-up').forEach((element, index) => {
    gsap.fromTo(element,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Service cards animation
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card,
      { y: 100, opacity: 0, rotationX: 15 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.9,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Gallery item animations with staggered effect
  gsap.utils.toArray('.gallery-item').forEach((item, index) => {
    gsap.fromTo(item,
      { y: 120, opacity: 0, rotationY: 20 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Contact form animation
  gsap.fromTo('.contact-form',
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    }
  );

  // Floating elements in Three.js scene
  gsap.to('.floating-element', {
    y: '+=15',
    rotation: '+=3',
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
};

export const animateNavbar = (isScrolled) => {
  gsap.to('.navbar', {
    backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
    paddingTop: isScrolled ? '0.5rem' : '1rem',
    paddingBottom: isScrolled ? '0.5rem' : '1rem',
    duration: 0.4,
    ease: 'power2.out'
  });
};