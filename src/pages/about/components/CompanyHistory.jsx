import { motion } from 'framer-motion';
import { Calendar, Award, Building, Users } from 'lucide-react';

const CompanyHistory = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Foundations',
      desc: 'Avoma Life and Avoma Strategy commenced trading, establishing the group\'s initial presence in healthcare and strategic consulting.',
      icon: <Building size={24} />,
    },
    {
      year: '2019',
      title: 'Pharma Division Established',
      desc: 'In September 2019, AVOMA Pharma was launched to focus specifically on pharmaceutical wholesale, distribution, and surgical equipment.',
      icon: <Award size={24} />,
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      desc: 'Significant growth in distribution networks across Eswatini and Mozambique, serving a diverse portfolio of private and government clients.',
      icon: <Users size={24} />,
    },
    {
      year: 'Today',
      title: 'A Trusted Partner',
      desc: 'Continuing to innovate and expand our product range, providing critical healthcare solutions with a team of dedicated experts.',
      icon: <Calendar size={24} />,
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">Our Journey</h2>
        <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-100 dark:bg-gray-800 hidden md:block"></div>

        <div className="space-y-12 md:space-y-0">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-orange-500/20 transition-all group">
                  <span className="text-orange-600 font-black text-xl mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {/* Central Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-600 rounded-2xl hidden md:flex items-center justify-center text-white shadow-lg shadow-orange-600/30 z-10">
                {item.icon}
              </div>

              {/* Placeholder for spacing */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
