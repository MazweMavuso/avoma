import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { businessInfo } from '../../data/businessInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/avoma-pharma-logo.png" alt="Logo" className="h-10 mb-6" />
            <p className="text-gray-400">
              Leading the way in pharmaceutical excellence and innovative healthcare solutions across Southern Africa.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors font-medium">Home</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors font-medium">Products</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors font-medium">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start"><Phone size={18} className="mr-3 text-orange-500 mt-1 flex-shrink-0" /> 
                <span>{businessInfo.contact.phones[0]} / {businessInfo.contact.phones[1].split(' ').pop()}</span>
              </li>
              <li className="flex items-center"><Mail size={18} className="mr-3 text-orange-500" /> {businessInfo.contact.emails[0]}</li>
              <li className="flex items-start"><MapPin size={18} className="mr-3 text-orange-500 mt-1 flex-shrink-0" /> {businessInfo.contact.address.full}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-1"><FaFacebook size={20} /></a>
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-400 transition-all hover:-translate-y-1"><FaInstagram size={20} /></a>
              <a href={businessInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-1"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
