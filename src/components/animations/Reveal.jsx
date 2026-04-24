import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "w-full", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={`${width} will-change-transform`}
    >
      {children}
    </motion.div>
  );
};
