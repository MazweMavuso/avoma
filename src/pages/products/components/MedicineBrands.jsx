import { motion } from 'framer-motion';
import { medicineBrands } from '../../../data/products';
import { FaPills } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

const MedicineBrands = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="mb-32">
      <div className="flex items-center space-x-4 mb-12">
        <div className="p-3 bg-orange-100 dark:bg-orange-950/30 rounded-2xl text-orange-600">
          <FaPills size={28} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Pharmaceutical Brands</h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {medicineBrands.map((brand) => (
          <motion.a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
              {brand.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
              {brand.specialty}
            </p>
            <div className="flex items-center text-orange-600 text-sm font-bold uppercase tracking-widest">
              View Website <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default MedicineBrands;
