import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // Calculate scroll percentage
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle Properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            {/* Progress Circle Background */}
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r={radius}
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                className="text-gray-200 dark:text-gray-800 transition-colors"
              />
              {/* Active Progress Circle */}
              <motion.circle
                cx="28"
                cy="28"
                r={radius}
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                className="text-red-600"
              />
            </svg>

            {/* Icon Button */}
            <div className="absolute inset-0 m-2 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg group-hover:bg-red-600 transition-all duration-300">
              <ChevronUp 
                className="text-red-600 group-hover:text-white transition-colors duration-300" 
                size={24} 
              />
            </div>
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-2 py-1 bg-gray-900 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Back to Top
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
