import { motion } from 'framer-motion';

export const StaggerContainer = ({ children, delayChildren = 0, staggerChildren = 0.1, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={className}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delayChildren, staggerChildren }
      }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
