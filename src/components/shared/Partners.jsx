import { motion } from 'framer-motion';
import { Reveal } from './animations/Reveal';

// Partner Logos
import disaLogo from '../../assets/partnars/disa-1500x373.png';
import elinkCareLogo from '../../assets/partnars/E-LinkCare-1500x373.png';
import hartmannLogo from '../../assets/partnars/Hartmann-1500x373.png';
import neomedicLogo from '../../assets/partnars/neomedic-1500x373.png';
import rossmaxLogo from '../../assets/partnars/rossmax-1500x373.png';

const Partners = () => {
  const logos = [
    { name: 'Disa', src: disaLogo },
    { name: 'E-LinkCare', src: elinkCareLogo },
    { name: 'Hartmann', src: hartmannLogo },
    { name: 'Neomedic', src: neomedicLogo },
    { name: 'Rossmax', src: rossmaxLogo },
  ];

  // Duplicate logos for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section id="partners" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          @media (max-width: 640px) {
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          }
          .pause-on-hover:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-widest">Our Trusted Partners</h2>
            <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 font-medium">Collaborating with world-class healthcare brands</p>
          </div>
        </Reveal>
      </div>

      <div className="relative w-full flex overflow-hidden pause-on-hover">
        {/* Left and Right Fade Masks for a cleaner look */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap py-4">
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex justify-center items-center px-8 sm:px-16 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 sm:h-12 md:h-14 w-auto object-contain drop-shadow-sm filter brightness-100 dark:brightness-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
