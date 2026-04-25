import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup logic
    console.log('Signup Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white dark:bg-gray-900 rounded-[40px] p-12 text-center border border-gray-100 dark:border-gray-800 shadow-xl"
        >
          <div className="w-20 h-20 bg-orange-50 dark:bg-orange-950/20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-orange-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-widest mb-4">Registration Successful!</h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-8">
            Thank you for joining AVOMA Pharma. We've sent a verification email to <span className="text-orange-600">{formData.email}</span>.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-orange-600/20 uppercase tracking-widest"
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
            Join the <span className="text-orange-600">Pharma</span> Network
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 mb-8">
            Create an account to access our wholesale catalog, track orders, and manage your pharmaceutical distribution across Southern Africa.
          </p>
          
          <div className="hidden lg:grid grid-cols-2 gap-6 max-w-md">
            {[
              { title: 'Wholesale Access', desc: 'Exclusive B2B pricing' },
              { title: 'Priority Support', desc: 'Dedicated account manager' },
              { title: 'Real-time Tracking', desc: 'Monitor every shipment' },
              { title: 'Partner Network', desc: 'Connect with global brands' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-[40px] p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-600/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 flex items-center gap-2">
                  <User size={12} /> Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="Enter your name"
                />
              </div>
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
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="email@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 flex items-center gap-2">
                <Building size={12} /> Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                placeholder="e.g. HealthCare Solutions Ltd"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 flex items-center gap-2">
                  <Lock size={12} /> Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 flex items-center gap-2">
                  <Lock size={12} /> Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 outline-none transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl hover:bg-orange-700 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-orange-600/20 text-base uppercase tracking-widest"
              >
                <span>Create Account</span>
                <ArrowRight size={18} />
              </motion.button>
              
              <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500 font-medium">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-600 hover:underline font-black uppercase tracking-widest text-[11px]">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
