import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/shared/SEO';

const NotFoundPage = () => {
  return (
    <div className="pt-40 pb-20 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist. Return to AVOMA Pharma home page."
      />
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-9xl font-black text-red-600 mb-4"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-red-600/20"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
