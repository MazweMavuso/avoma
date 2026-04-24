import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bell } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden bg-gray-900 px-6 py-16 sm:py-20 sm:px-16 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-orange-600 opacity-10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-blue-600 opacity-10 blur-[100px]"></div>

          <div className="relative lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-orange-600/20 rounded-xl border border-orange-600/30">
                  <Bell className="text-orange-500" size={24} />
                </div>
                <span className="text-orange-500 font-black tracking-widest uppercase text-xs">Stay Informed</span>
              </div>
              <h2 className="text-4xl font-black text-white sm:text-5xl leading-tight">
                Get the latest <span className="text-orange-500">medical insights</span> in your inbox.
              </h2>
              <p className="mt-6 text-xl text-gray-400 font-medium">
                Join our community of healthcare professionals and stay updated with pharmaceutical trends.
              </p>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-5/12">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all font-medium text-lg backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`flex items-center justify-center px-8 py-5 border border-transparent text-lg font-black rounded-2xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none transition-all transform hover:scale-105 active:scale-95 disabled:opacity-70 shadow-xl shadow-orange-900/20 ${status === 'success' ? 'bg-green-500' : ''}`}
                >
                  {status === 'loading' ? (
                    <div className="h-6 w-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : status === 'success' ? (
                    'Subscribed!'
                  ) : (
                    <>
                      Join Now
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500 font-medium">
                By subscribing, you agree to our <a href="#" className="text-gray-400 underline hover:text-orange-500 transition-colors">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
