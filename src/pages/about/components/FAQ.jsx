import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What regions does AVOMA Pharma serve?",
    answer: "We primarily operate across Southern Africa, with established distribution networks in Eswatini and Mozambique, serving both urban and rural healthcare facilities."
  },
  {
    question: "Are your products internationally certified?",
    answer: "Yes, all our pharmaceutical products and medical consumables meet rigorous international standards including GMP (Good Manufacturing Practice), CE approval, and FDA standards where applicable."
  },
  {
    question: "Who are your primary clients?",
    answer: "We serve a wide range of clients including private hospitals, corporate clinics, NGOs, government health departments, and independent pharmacies."
  },
  {
    question: "Do you supply surgical equipment as well?",
    answer: "Absolutely. In addition to medicines and consumables, we specialize in the distribution of high-quality surgical instruments and state-of-the-art diagnostic equipment."
  },
  {
    question: "How can I partner with AVOMA Pharma?",
    answer: "We are always looking for strategic global partnerships. You can reach out through our contact page or email us directly at info@avomapharma.com for collaboration inquiries."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-gray-900 dark:text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-orange-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:text-orange-600'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-50 dark:bg-orange-950/20 rounded-full mb-6">
            <HelpCircle size={18} className="text-orange-600" />
            <span className="text-sm font-bold uppercase tracking-widest text-orange-700 dark:text-orange-400">Questions?</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-medium">
            Find quick answers to common inquiries about our services and standards.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900/50 rounded-[40px] p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
