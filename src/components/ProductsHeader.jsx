import { motion } from 'framer-motion';

const ProductsHeader = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
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
  );
};

export default ProductsHeader;
