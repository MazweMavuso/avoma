import React from 'react';
import { Globe } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const TopBar = () => {
  return (
    <div className="bg-gray-950 text-white py-2 px-4 sm:px-8 border-b border-white/5 w-full relative z-[60]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Globe size={12} className="text-orange-600" />
            <span className="opacity-80">Serving: {businessInfo.countries.join(' & ')}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-8">
          <div className="flex items-center space-x-2 border-r border-white/10 pr-4 sm:pr-8">
            <span className="text-orange-500">SZ:</span>
            <a href={`tel:${businessInfo.regionalContacts.eswatini[0]}`} className="hover:text-orange-500 transition-colors">
              {businessInfo.regionalContacts.eswatini[0]}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">MZ:</span>
            <a href={`tel:${businessInfo.regionalContacts.mozambique[0]}`} className="hover:text-orange-500 transition-colors">
              {businessInfo.regionalContacts.mozambique[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
