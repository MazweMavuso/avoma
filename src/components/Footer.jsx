import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/avoma-pharma-logo.png" alt="Logo" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-gray-400">
              Leading the way in pharmaceutical excellence and innovative healthcare solutions across East Africa and beyond.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors font-medium">About Us</a></li>
              <li><a href="#focus" className="hover:text-orange-500 transition-colors font-medium">Focus Areas</a></li>
              <li><a href="#partners" className="hover:text-orange-500 transition-colors font-medium">Partners</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center"><Phone size={18} className="mr-3 text-orange-500" /> +268 2422 0013 / 14</li>
              <li className="flex items-center"><Mail size={18} className="mr-3 text-orange-500" /> info@avomapharma.com</li>
              <li className="flex items-center"><MapPin size={18} className="mr-3 text-orange-500" /> Plot 943, Mshini Rd, Mbabane, Eswatini</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-1"><FaFacebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-400 transition-all hover:-translate-y-1"><FaTwitter size={20} /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-1"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Avoma Pharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
