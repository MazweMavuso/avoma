import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

const FocusAreas = () => {
  const areas = [
    {
      title: 'Quality Assurance',
      desc: 'Rigorous testing and international standards compliance for every product.',
      icon: <ShieldCheck className="text-orange-600" size={32} />,
    },
    {
      title: 'Innovation',
      desc: 'Investing in R&D to bring the latest medical advancements to market.',
      icon: <Zap className="text-orange-600" size={32} />,
    },
    {
      title: 'Global Distribution',
      desc: 'A robust supply chain ensuring timely delivery across borders.',
      icon: <Globe className="text-orange-600" size={32} />,
    },
  ];

  return (
    <section id="focus" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
              Our Core Focus Areas
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 font-medium">
              Driven by excellence, committed to your health.
            </p>
          </div>
        </Reveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {areas.map((area) => (
            <StaggerItem key={area.title}>
              <motion.div
                whileHover={{ y: -15 }}
                className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700 transition-all hover:border-orange-200 dark:hover:border-orange-500/30 h-full"
              >
                <div className="mb-6 inline-block p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{area.desc}</p>
                <div className="mt-6 flex items-center text-orange-600 dark:text-orange-500 font-bold cursor-pointer group">
                  Read More 
                  <div className="ml-2 transform group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FocusAreas;
