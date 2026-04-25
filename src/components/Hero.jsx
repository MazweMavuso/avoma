import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/images/backgroundimage.png';
import backgroundImage2 from '../assets/images/backgroundimag2.png';
import { Reveal } from './animations/Reveal';
import { Parallax } from './animations/Parallax';

const slides = [
  {
    image: backgroundImage,
    subtitle: "Leading East Africa's Pharma Innovation",
    title: "Quality Care Through Excellence",
    description: "Avoma Pharma is dedicated to providing high-quality healthcare products and innovative medical solutions across Eswatini and beyond.",
    primaryBtn: "Our Products",
    secondaryBtn: "Learn More"
  },
  {
    image: backgroundImage2,
    subtitle: "Advanced Diagnostics & Laboratory",
    title: "Precision in Every Diagnosis",
    description: "Equipping healthcare providers with state-of-the-art diagnostic tools and laboratory equipment for accurate and faster medical results.",
    primaryBtn: "View Equipment",
    secondaryBtn: "Contact Us"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel - Now absolute and full height */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Parallax offset={100}>
              <img 
                src={slides[currentSlide].image} 
                alt="Healthcare Background" 
                className="w-full h-screen object-cover object-center lg:object-center scale-110"
              />
            </Parallax>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:to-white/20 dark:from-gray-950 dark:via-gray-950/95 dark:to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-orange-700 dark:text-orange-400 text-sm font-bold tracking-wide uppercase">{slides[currentSlide].subtitle}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl tracking-tight font-black text-gray-900 dark:text-white leading-[1.1]">
                {slides[currentSlide].title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-orange-600 underline decoration-blue-600/30">
                  {slides[currentSlide].title.split(' ').pop()}
                </span>
              </h1>
              
              <p className="mt-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-medium">
                {slides[currentSlide].description}
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-10 py-4.5 bg-orange-600 text-white font-black rounded-2xl shadow-2xl shadow-orange-200 dark:shadow-none transition-all text-lg group"
                >
                  {slides[currentSlide].primaryBtn}
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-10 py-4.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-orange-600 hover:text-orange-600 transition-all text-lg group"
                >
                  {slides[currentSlide].secondaryBtn}
                  <ArrowRight className="ml-2 text-gray-400 group-hover:text-orange-600 transition-colors" size={22} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Stats/Trust Indicators */}
          <Reveal>
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

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'w-10 bg-orange-600' : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-orange-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Accent element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-orange-600/5 rounded-tl-[120px] -z-0 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
