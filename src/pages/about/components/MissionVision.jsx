import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../../data/businessInfo';

const MissionVision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-50 dark:bg-gray-900 p-12 rounded-[40px] border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-600/20">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              To provide high-quality healthcare products and innovative medical solutions, ensuring accessible healthcare for all across {businessInfo.countries.join(' and ')} by maintaining the highest standards of pharmaceutical distribution.
            </p>
          </div>
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-colors"></div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-900 text-white p-12 rounded-[40px] relative overflow-hidden group transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-8 shadow-lg shadow-white/10">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h2>
            <p className="text-lg text-orange-100/80 font-medium leading-relaxed">
              To be the leading pharmaceutical distribution partner in Africa, recognized for excellence, reliability, and our unwavering commitment to improving lives through medical innovation and strategic global partnerships.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
        </motion.div>
      </div>

      {/* Core Values / Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-8 bg-orange-50 dark:bg-orange-900/10 rounded-[32px] border border-orange-100 dark:border-orange-900/30 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
          <ShieldCheck size={24} />
        </div>
        <p className="text-gray-700 dark:text-gray-300 font-bold text-center md:text-left">
          Every product we distribute adheres to the highest global standards, reflecting our dedication to quality assurance and patient safety at {businessInfo.name}.
        </p>
      </motion.div>
    </section>
  );
};

export default MissionVision;
