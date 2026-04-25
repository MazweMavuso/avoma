import { motion } from 'framer-motion';
import { consumableItems } from '../data/products';
import { FaFlask } from 'react-icons/fa';

const ConsumableList = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="mb-32">
      <div className="flex items-center space-x-4 mb-12">
        <div className="p-3 bg-orange-100 dark:bg-orange-950/30 rounded-2xl text-orange-600">
          <FaFlask size={28} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Medical Consumables</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {consumableItems.map((item) => (
          <motion.span
            key={item}
            variants={fadeInUp}
            className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-bold hover:border-orange-500 hover:text-orange-600 transition-all cursor-default shadow-sm"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default ConsumableList;
