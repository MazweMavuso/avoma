import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/backgroundimage.png';
import backgroundImage2 from '../../../assets/images/backgroundimag2.png';
import { Reveal } from '../../../components/shared/animations/Reveal';
import { Parallax } from '../../../components/shared/animations/Parallax';

const slides = [
  {
    image: backgroundImage,
    subtitle: "Leading East Africa's Pharma Innovation",
    title: "Quality Care Through Excellence",
    description: "Avoma Pharma is dedicated to providing high-quality healthcare products and innovative medical solutions across Eswatini and beyond.",
    primaryBtn: "Our Products",
    primaryLink: "/products",
    secondaryBtn: "Learn More",
    secondaryLink: "/about"
  },
  {
    image: backgroundImage2,
    subtitle: "Advanced Diagnostics & Laboratory",
    title: "Precision in Every Diagnosis",
    description: "Equipping healthcare providers with state-of-the-art diagnostic tools and laboratory equipment for accurate and faster medical results.",
    primaryBtn: "View Equipment",
    primaryLink: "/products",
    secondaryBtn: "Contact Us",
    secondaryLink: "/contact"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      } 
    }
  };

  return (
    <section className="relative h-screen h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Carousel - Strictly constrained to 100vh */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Healthcare Background" 
              className="w-full h-full object-cover object-right lg:object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:from-white lg:via-white/95 lg:to-white/10 dark:from-gray-950/90 dark:via-gray-950/40 dark:to-transparent lg:dark:from-gray-950 lg:dark:via-gray-950/95 lg:dark:to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-44 pb-10">
        <div className="lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-6xl tracking-tight font-black text-gray-900 dark:text-white leading-none sm:leading-[1.1] uppercase">
                {slides[currentSlide].title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-red-600">
                  {slides[currentSlide].title.split(' ').pop()}
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-medium line-clamp-3">
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div variants={itemVariants} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={slides[currentSlide].primaryLink} className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: '#c0392b' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center px-8 py-3.5 bg-red-600 text-white font-black rounded-2xl shadow-xl shadow-red-200 dark:shadow-none transition-all text-sm uppercase tracking-widest group"
                  >
                    {slides[currentSlide].primaryBtn}
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.button>
                </Link>
                
                <Link to={slides[currentSlide].secondaryLink} className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-red-600 hover:text-red-600 transition-all text-sm uppercase tracking-widest"
                  >
                    {slides[currentSlide].secondaryBtn}
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 mt-6 sm:mt-8">
                <span className="flex h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-red-700 dark:text-red-400 text-[10px] font-black tracking-widest uppercase">{slides[currentSlide].subtitle}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Trust Indicators - Condensed */}
          <Reveal>
            <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-gray-100 dark:border-gray-800 pt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">100+</p>
                <p className="text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.2em] mt-1">Products</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">24/7</p>
                <p className="text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.2em] mt-1">Support</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">ISO</p>
                <p className="text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.2em] mt-1">Certified</p>
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
              currentSlide === index ? 'w-10 bg-red-600' : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-red-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Accent element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-red-600/5 rounded-tl-[120px] -z-0 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
