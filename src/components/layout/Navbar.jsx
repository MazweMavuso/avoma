import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  // Apply theme class on mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-8 py-4 ${
          scrolled ? 'top-2' : 'top-0'
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-[24px] ${
            scrolled 
              ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex justify-between h-20 items-center px-6 sm:px-10">
            {/* Logo Container */}
            <div className="flex-1 flex justify-start items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center"
              >
                <Link to="/">
                  <img 
                    className="h-12 w-auto hover:scale-105 transition-transform duration-300" 
                    src="/avoma-pharma-logo.png" 
                    alt="Avoma Pharma Logo" 
                  />
                </Link>
              </motion.div>
            </div>
            
            {/* Desktop Nav Links - Centered */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.0
                    }
                  }
                }}
                className="flex items-center space-x-10"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="relative text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 text-[13px] font-black uppercase tracking-[0.15em] transition-colors group whitespace-nowrap"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className={`relative text-[13px] font-black uppercase tracking-[0.15em] transition-colors group whitespace-nowrap ${
                          location.pathname === link.href 
                            ? 'text-orange-600 dark:text-orange-500' 
                            : 'text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full ${location.pathname === link.href ? 'w-full' : 'w-0'}`}></span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Actions Container - Right aligned */}
            <div className="flex-1 flex justify-end items-center space-x-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="hidden lg:flex items-center space-x-6"
              >
                <button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-500 transition-all duration-300 border border-transparent hover:border-orange-200 dark:hover:border-orange-500/30"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 text-white font-black text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-2xl hover:shadow-[0_10px_20px_rgba(234,88,12,0.2)] transition-all"
                >
                  Sign Up
                </motion.button>
              </motion.div>

              {/* Mobile menu trigger */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="lg:hidden flex items-center space-x-2"
              >
                <button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-xl text-gray-800 dark:text-gray-200"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <Menu size={24} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-950 z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-gray-100 dark:border-gray-900">
                <img 
                  className="h-8 w-auto" 
                  src="/avoma-pharma-logo.png" 
                  alt="Logo" 
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-8 px-6">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    link.href.startsWith('/#') ? (
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all"
                      >
                        <span className="text-lg font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                          {link.name}
                        </span>
                        <ArrowRight size={18} className="text-gray-300 dark:text-gray-700 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="group flex items-center justify-between p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all cursor-pointer"
                        >
                          <span className={`text-lg font-black uppercase tracking-widest group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors ${
                            location.pathname === link.href ? 'text-orange-600 dark:text-orange-500' : 'text-gray-800 dark:text-gray-200'
                          }`}>
                            {link.name}
                          </span>
                          <ArrowRight size={18} className="text-gray-300 dark:text-gray-700 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                        </motion.div>
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gray-50 dark:bg-gray-900/50">
                <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-900/10 text-base uppercase tracking-widest mb-8">
                  Sign Up Now
                </button>
                
                <div className="flex justify-center space-x-6 text-gray-400 dark:text-gray-600">
                  <FaFacebook size={20} />
                  <FaTwitter size={20} />
                  <FaLinkedin size={20} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navbar;
