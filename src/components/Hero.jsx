import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/images/backgroundimage.png';
import { Reveal } from './animations/Reveal';
import { Parallax } from './animations/Parallax';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Parallax offset={100}>
          <img 
            src={backgroundImage} 
            alt="Pharmaceutical Background" 
            className="w-full h-full object-cover object-right lg:object-center scale-110"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:to-white/20 dark:from-gray-950 dark:via-gray-950/95 dark:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
              <span className="text-orange-700 dark:text-orange-400 text-sm font-bold tracking-wide">Leading East Africa's Pharma Innovation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight font-black text-gray-900 dark:text-white leading-[1.1]">
              Quality Care <br />
              <span className="text-orange-600 underline decoration-blue-600/30">Through Excellence</span>
            </h1>
            
            <p className="mt-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-medium">
              Avoma Pharma is dedicated to providing high-quality healthcare products and innovative medical solutions across Eswatini and beyond.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-10 py-4.5 bg-orange-600 text-white font-black rounded-2xl shadow-2xl shadow-orange-200 dark:shadow-none transition-all text-lg group"
              >
                Our Products
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-10 py-4.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-orange-600 hover:text-orange-600 transition-all text-lg group"
              >
                Learn More
                <ArrowRight className="ml-2 text-gray-400 group-hover:text-orange-600 transition-colors" size={22} />
              </motion.button>
            </div>

            {/* Quick Stats/Trust Indicators */}
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-10 border-t border-gray-100 dark:border-gray-800 pt-10">
              <div>
                <p className="text-4xl font-black text-gray-900 dark:text-white">100+</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest mt-1">Quality Products</p>
              </div>
              <div>
                <p className="text-4xl font-black text-gray-900 dark:text-white">24/7</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest mt-1">Partner Support</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-4xl font-black text-gray-900 dark:text-white">ISO</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest mt-1">Certified Standards</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Accent element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-orange-600/5 rounded-tl-[120px] -z-0 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
