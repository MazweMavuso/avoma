import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productData } from '../../../data/products';
import { Package, ChevronRight } from 'lucide-react';

const ConsumableList = () => {
  const [activeCategory, setActiveCategory] = useState(productData[0].category);

  const activeItems = productData.find(cat => cat.category === activeCategory)?.items || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-red-600 rounded-2xl text-white shadow-lg shadow-red-200">
            <Package size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Our Products</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">High-quality medical supplies and equipment</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {productData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-300 border-2 ${
              activeCategory === cat.category
                ? 'bg-red-600 border-red-600 text-white shadow-xl shadow-red-200'
                : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-red-200'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeItems.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-900 p-8 rounded-[32px] border-2 border-gray-50 dark:border-gray-800 shadow-xl shadow-gray-100 dark:shadow-none transition-all hover:border-red-500/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <Package className="text-red-600" size={24} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
                  In Stock
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-8">
                {item.description}
              </p>
              <button className="flex items-center text-gray-900 dark:text-white font-black uppercase tracking-widest text-[11px] hover:text-red-600 transition-colors">
                View Details
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ConsumableList;
