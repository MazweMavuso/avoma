import { motion } from 'framer-motion';
import { businessInfo } from '../../../data/businessInfo';

const AboutHero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24"
    >
      <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Our Identity</span>
      <h1 className="mt-4 text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
        Excellence in <span className="text-orange-600">Healthcare</span>
      </h1>
      <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
        {businessInfo.name} is more than a distributor. We are a dedicated partner in the healthcare ecosystem, committed to bridging the gap between medical innovation and patient care.
      </p>
    </motion.div>
  );
};

export default AboutHero;
