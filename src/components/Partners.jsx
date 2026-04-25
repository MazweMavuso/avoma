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

  // Duplicate logos for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id="partners" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .pause-on-hover:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-widest">Our Trusted Partners</h2>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pause-on-hover">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0 flex justify-center items-center px-12 grayscale hover:grayscale-0 transition-all duration-500 dark:brightness-125 dark:contrast-125 cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-12 sm:h-16 w-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
