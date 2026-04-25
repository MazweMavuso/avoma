import { motion } from 'framer-motion';
import { consumableItems, medicineBrands } from '../data/products';
import { FaPills, FaFlask, FaShieldAlt } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

const ProductsPage = () => {
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
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Our Catalog</span>
          <h1 className="mt-4 text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
            Healthcare <span className="text-orange-600">Solutions</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            We provide a comprehensive range of pharmaceutical products, medical consumables, and surgical equipment to healthcare providers across Southern Africa.
          </p>
        </motion.div>

        {/* Medicines Section */}
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

        {/* Consumables Section */}
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

        {/* Certifications / Trust Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-orange-600 rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <FaShieldAlt size={16} />
                <span className="text-sm font-bold uppercase tracking-widest">Certified Standards</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Internationally Certified Quality</h2>
              <p className="text-xl text-orange-100 font-medium">
                We stock certified international generics from Europe and India, ensuring every product meets GMP, CE, and FDA approved standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              {['GMP Certified', 'CE Approved', 'FDA Approved', 'ISO Standards'].map((cert) => (
                <div key={cert} className="px-8 py-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center font-bold">
                  {cert}
                </div>
              ))}
            </div>
          </div>
          {/* Accent circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-700 rounded-full blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
