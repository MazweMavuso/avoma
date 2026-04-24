import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Avoma Pharma. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      icon: <Phone className="text-orange-600" size={24} />,
      title: 'Phone',
      info: '+268 2422 0013 / 14',
      subInfo: '+268 2422 0034'
    },
    {
      icon: <Mail className="text-orange-600" size={24} />,
      title: 'Email',
      info: 'info@avomapharma.com',
      subInfo: 'Online support 24/7'
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      title: 'Office',
      info: 'Plot 943, Mshini Rd, Sidwashini',
      subInfo: 'Mbabane, H100, Eswatini'
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: 'Working Hours',
      info: '08:00 AM - 04:00 PM',
      subInfo: 'Sat - Sun: Closed'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl"
          >
            Get In Touch
          </motion.h2>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 font-medium">
            Have questions? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-[32px] shadow-2xl shadow-gray-200 dark:shadow-none p-10 border border-gray-50 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-600 outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-600 outline-none transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl hover:bg-orange-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-orange-200 dark:shadow-none text-lg"
              >
                <span>Send Message</span>
                <Send size={22} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-5 p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-50 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-bold mt-1">{item.info}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed */}
            <div className="flex-grow rounded-[32px] overflow-hidden shadow-2xl h-64 lg:h-auto min-h-[350px] transition-all duration-500 border-8 border-gray-50 dark:border-gray-900 grayscale hover:grayscale-0">
              <iframe
                title="Avoma Pharma Location"
                src="https://maps.google.com/maps?q=-26.294871579431916,31.087697711283386&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
