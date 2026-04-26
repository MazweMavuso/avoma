import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, LogIn, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Content (Visible on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left hidden lg:block"
        >
          <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-950/20 px-4 py-2 rounded-full text-red-600 mb-6">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Secure Portal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
            Welcome Back to <span className="text-red-600">AVOMA</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl mb-8">
            Access your distribution dashboard, manage inventory requests, and track your medical supplies across Mozambique and Eswatini.
          </p>
          
          <div className="flex flex-col space-y-4 max-w-sm">
            {[
              'Secure access to order history',
              'Real-time inventory updates',
              'Dedicated account management',
              'Fast supply chain coordination'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md bg-white dark:bg-gray-900 rounded-[40px] p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden mx-auto"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="text-center lg:hidden mb-10">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-widest">Sign In</h2>
            <div className="mt-2 w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 flex items-center gap-2">
                <Mail size={12} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all font-medium"
                placeholder="email@company.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 flex items-center gap-2">
                  <Lock size={12} /> Password
                </label>
                <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 hover:underline">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all font-medium"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center space-x-2 px-1">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700"
              />
              <label htmlFor="rememberMe" className="text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-red-600/20 text-base uppercase tracking-widest"
              >
                <span>Sign In</span>
                <LogIn size={18} />
              </motion.button>
              
              <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500 font-medium">
                Don't have an account yet?{' '}
                <Link to="/signup" className="text-red-600 hover:underline font-black uppercase tracking-widest text-[11px]">
                  Join Now
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
