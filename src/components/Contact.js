import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="fade-in-up text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold text-primary mb-8">Let's Start Your Project</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">Email Us</h4>
                  <p className="text-gray-600">hello@visionframe.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">Studio Location</h4>
                  <p className="text-gray-600">123 Photography Studio</p>
                  <p className="text-gray-600">Creative District, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Weekends: By appointment only</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-primary mb-4">Follow Our Work</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-gray-100 hover:bg-amber-500 hover:text-white text-gray-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form fade-in-up">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project, event, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Send Message
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                We'll get back to you within 24 hours. Your privacy is important to us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;