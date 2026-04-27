import { motion } from 'framer-motion';
import Contact from '../home/components/Contact';
import SEO from '../../components/shared/SEO';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500">
      <SEO 
        title="Contact" 
        description="Get in touch with AVOMA Pharma. We serve Eswatini and Mozambique with offices in Sidwashini. Contact us for wholesale pharmaceutical inquiries."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Communication</span>
          <h1 className="mt-4 text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
            Connect <span className="text-red-600">With Us</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Whether you have a specific inquiry or are looking for a long-term partnership, our team is ready to provide you with the necessary support.
          </p>
        </motion.div>
        
        {/* Reuse the Contact component but without the ID/anchors if needed, 
            or just call it as is for consistency. */}
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
