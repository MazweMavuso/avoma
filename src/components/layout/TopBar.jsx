import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const TopBar = () => {
  const content = (
    <div className="flex items-center space-x-8 px-4">
      <div className="flex items-center space-x-2">
        <Globe size={12} className="text-red-600" />
        <span className="opacity-80">Serving: {businessInfo.countries.join(' & ')}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-500">SZ:</span>
        <a href={`tel:${businessInfo.regionalContacts.eswatini[0]}`} className="hover:text-red-500 transition-colors">
          {businessInfo.regionalContacts.eswatini[0]}
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-500">MZ:</span>
        <a href={`tel:${businessInfo.regionalContacts.mozambique[0]}`} className="hover:text-red-500 transition-colors">
          {businessInfo.regionalContacts.mozambique[0]}
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-950 text-white py-2 border-b border-white/5 w-full relative z-[60] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View: Infinite Marquee */}
        <div className="sm:hidden relative flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap text-[9px] font-black uppercase tracking-[0.2em]"
          >
            {content}
            {content} {/* Duplicated for seamless loop */}
          </motion.div>
        </div>

        {/* Desktop View: Static flex-row */}
        <div className="hidden sm:flex justify-between items-center px-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Globe size={12} className="text-red-600" />
              <span className="opacity-80">Serving: {businessInfo.countries.join(' & ')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 border-r border-white/10 pr-8">
              <span className="text-red-500">SZ:</span>
              <a href={`tel:${businessInfo.regionalContacts.eswatini[0]}`} className="hover:text-red-500 transition-colors">
                {businessInfo.regionalContacts.eswatini[0]}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">MZ:</span>
              <a href={`tel:${businessInfo.regionalContacts.mozambique[0]}`} className="hover:text-red-500 transition-colors">
                {businessInfo.regionalContacts.mozambique[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
