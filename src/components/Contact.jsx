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
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-widest">Get In Touch</h2>
            <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
              Have questions or need assistance? Our team is dedicated to providing you with the best support.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900/50 rounded-[40px] p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="Inquiry about services"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl hover:bg-orange-700 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-orange-600/20 text-base uppercase tracking-widest"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Info and Map */}
          <div className="flex flex-col space-y-8 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactDetails.map((item, index) => (
                <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:border-orange-200 dark:hover:border-orange-500/30 transition-all group">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-orange-950/20 rounded-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(item.icon, { size: 20, className: "transition-colors duration-300" })}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <p className="text-gray-900 dark:text-white font-black text-sm">{item.info}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map Container - Flex grow to fill space */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-grow rounded-[40px] overflow-hidden border border-gray-100 dark:border-gray-800 min-h-[300px] shadow-sm relative group"
            >
              <div className="absolute inset-0 bg-gray-950/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
              <iframe
                title="Avoma Pharma Location"
                src="https://maps.google.com/maps?q=-26.294871579431916,31.087697711283386&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
