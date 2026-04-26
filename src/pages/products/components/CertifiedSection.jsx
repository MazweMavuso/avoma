import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const CertifiedSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-red-600 rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <FaShieldAlt size={16} />
            <span className="text-sm font-bold uppercase tracking-widest">Certified Standards</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Internationally Certified Quality</h2>
          <p className="text-xl text-red-100 font-medium">
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
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-700 rounded-full blur-3xl opacity-50"></div>
    </motion.div>
  );
};

export default CertifiedSection;
