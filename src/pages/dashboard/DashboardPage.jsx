import { motion } from 'framer-motion';
import { LayoutDashboard, Clock } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="pt-40 pb-20 bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-[40px] p-12 md:p-20 shadow-xl border border-gray-100 dark:border-gray-800"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-3xl mb-8">
            <LayoutDashboard size={40} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Administrative Dashboard
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-red-600 font-bold uppercase tracking-widest text-sm mb-8">
            <Clock size={18} className="animate-pulse" />
            <span>Coming Soon</span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mx-auto">
            We are currently building a powerful management interface for our administrators. Thank you for your patience as we finalize these features.
          </p>
          
          <div className="mt-12">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="h-1.5 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto overflow-hidden"
            >
              <div className="h-full w-1/3 bg-red-600 rounded-full animate-[progress_2s_infinite_ease-in-out]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
