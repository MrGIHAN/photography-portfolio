import React, { useEffect } from 'react';
import { HiCamera, HiUsers, HiTrophy, HiHeart, HiArrowRight } from 'react-icons/hi2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const stats = [
    { icon: HiCamera, value: '500+', label: 'Projects Done' },
    { icon: HiUsers, value: '300+', label: 'Happy Clients' },
    { icon: HiTrophy, value: '50+', label: 'Awards Won' },
    { icon: HiHeart, value: '98%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="about-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Our <span className="text-amber-500">Studio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate photographers dedicated to capturing authentic moments and creating timeless memories.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="about-card text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
            >
              <stat.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800"
              alt="Photography Studio"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="about-card space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Our Story</h3>

            <p className="text-gray-600 leading-relaxed">
              Founded in 2015, FrameCraft has grown from a passion project into a full-service studio
              specializing in capturing the essence of every moment.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team combines years of experience, creative vision, and technical expertise to deliver stunning
              photographs that tell your unique story.
            </p>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
              Learn More <HiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
