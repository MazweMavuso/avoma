import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => finishLoading(), 500);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[1000] bg-white dark:bg-gray-950 flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Animated Logo Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <img src="/avoma-pharma-logo.png" alt="Logo" className="h-16 w-auto" />
        </motion.div>

        {/* Percentage Text */}
        <div className="mb-4 text-center">
          <span className="text-4xl font-black text-gray-900 dark:text-white tabular-nums">
            {Math.round(progress)}%
          </span>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mt-2">
            Initializing Quality Care
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-orange-600"
          />
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
    </motion.div>
  );
};

export default Loader;
