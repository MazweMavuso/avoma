import React from 'react';
import { motion } from 'framer-motion';

// Partner Logos
import disaLogo from '../assets/partnars/disa-1500x373.png';
import elinkCareLogo from '../assets/partnars/E-LinkCare-1500x373.png';
import hartmannLogo from '../assets/partnars/Hartmann-1500x373.png';
import neomedicLogo from '../assets/partnars/neomedic-1500x373.png';
import rossmaxLogo from '../assets/partnars/rossmax-1500x373.png';

const Partners = () => {
  const logos = [
    { name: 'Disa', src: disaLogo },
    { name: 'E-LinkCare', src: elinkCareLogo },
    { name: 'Hartmann', src: hartmannLogo },
    { name: 'Neomedic', src: neomedicLogo },
    { name: 'Rossmax', src: rossmaxLogo },
  ];

  return (
    <section id="partners" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-widest">Our Trusted Partners</h2>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 dark:brightness-125 dark:contrast-125"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-12 w-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
