import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { businessInfo } from '../../../data/businessInfo';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical Professional" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px] border-8 border-gray-50 dark:border-gray-900"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 rounded-3xl shadow-xl hidden sm:block">
                <p className="text-white font-black text-2xl">Established</p>
                <p className="text-orange-100 font-bold uppercase tracking-widest text-sm">Since {businessInfo.established.pharma}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl mb-8 leading-tight">
              Commitment to <br />
              <span className="text-orange-600">Quality & Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
              At Avoma Pharma, we believe that health is the foundation of a fulfilling life. Our team of experts works tirelessly to ensure that every product meeting our name adheres to the highest global standards.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
              Through strategic partnerships and continuous innovation, we bridge the gap between medical breakthroughs and patients who need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black px-10 py-4.5 rounded-2xl shadow-xl transition-all flex items-center justify-center"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
