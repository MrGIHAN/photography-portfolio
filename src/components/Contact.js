import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', text: 'hello@framecraft.com' },
    { icon: FaPhone, title: 'Phone', text: '076 7252211' },
    { icon: FaMapMarkerAlt, title: 'Location', text: '123 Kandy Rode, Yakkala' },
    { icon: FaClock, title: 'Hours', text: 'Mon-Fri: 9AM - 6PM' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <item.icon className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Send Message <FaPaperPlane className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
