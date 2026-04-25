import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';

// System Prompt for Avoma Pharma
const SYSTEM_PROMPT = `STRICT FORMATTING RULES (MANDATORY):
1. NEVER use Markdown tables.
2. DO NOT use bolding (NO double asterisks like **text**). Use plain text only.
3. DO NOT use decorative characters or separators like |, ---, or ===.
4. Use only plain text and simple bullet points (using - or •) for lists.
5. Keep the output clean: well-spaced paragraphs and simple text ONLY.
6. NO special formatting symbols.

You are the official AI assistant for Avoma Pharma, a leading pharmaceutical company in Eswatini. 
Your goal is to be professional, helpful, and knowledgeable about the company.

Company Background:
- Established: Since 2010.
- Core Values: Commitment to Quality, Innovation, and Bridging the gap between medical breakthroughs and patients.
- Mission: Health is the foundation of a fulfilling life. We ensure every product adheres to the highest global standards.

Focus Areas & Expertise:
1. Pharmaceutical Products: Both general and specialized medicines.
2. Medical Consumables: Essential supplies for healthcare facilities.
3. Diagnostics & Laboratory Equipment: Advanced tools for medical testing.
4. Surgical Instruments: High-quality instruments for medical procedures.

Core Focus Pillars:
- Quality Assurance: Rigorous testing and international standards compliance.
- Innovation: Investing in R&D for the latest medical advancements.
- Global Distribution: Robust supply chain ensuring timely delivery across borders.

Contact Details:
- Address: Plot 943, Mshini Rd, Sidwashini, Mbabane, H100, Eswatini
- Phone: +268 2422 0013 / 14 or +268 2422 0034
- Email: info@avomapharma.com
- Working Hours: 08:00 AM - 04:00 PM (Monday to Friday), Closed on weekends.

Tone: Professional, expert, clinical yet accessible, and efficient. 
If asked about medical advice, always include a disclaimer that you are an AI assistant and users should consult a healthcare professional.
Keep responses concise and helpful.`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Avoma Pharma assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const idRef = useRef(2);

  // Responsive state
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const quickActions = [
    { label: "About Us", query: "Tell me about Avoma Pharma" },
    { label: "Products", query: "What products do you offer?" },
    { label: "Contact", query: "How can I contact you?" },
    { label: "Hours", query: "What are your working hours?" }
  ];

  const handleSend = async (e, customQuery = null) => {
    if (e) e.preventDefault();
    const input = customQuery || message;
    if (!input.trim()) return;

    const userMessageId = idRef.current++;
    const userMessage = { id: userMessageId, text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    if (!customQuery) setMessage('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      
      // Debug check (will show in console)
      console.log('Chatbot: Checking API Key configuration...');

      if (!apiKey || apiKey === 'your_openrouter_api_key_here') {
        throw new Error('MISSING_KEY');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin, // Required for OpenRouter
          'X-Title': 'Avoma Pharma AI' // Optional for OpenRouter
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: "user", content: input }
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('OpenRouter API Error:', data);
        throw new Error(data.error?.message || 'API request failed');
      }

      const botMessageId = idRef.current++;
      const botResponse = { 
        id: botMessageId, 
        text: data.choices[0].message.content, 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chatbot Error Details:', error);
      
      let errorMessage = "I'm having trouble connecting right now. Please try again later.";
      
      if (error.message === 'MISSING_KEY') {
        errorMessage = "Configuration Error: The VITE_OPENROUTER_API_KEY is missing. Please add it to your .env file and restart the server.";
      } else if (error.message.includes('API request failed')) {
        errorMessage = "I couldn't reach the AI service. Please check your OpenRouter credits or API key validity.";
      }

      const errorId = idRef.current++;
      setMessages(prev => [...prev, {
        id: errorId,
        text: errorMessage,
        sender: 'bot'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed z-[100] font-sans transition-all duration-300 ${
      isMobile && isOpen ? 'inset-0' : 'bottom-6 left-6'
    }`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom left' }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`
              bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/20 dark:border-white/10 overflow-hidden flex flex-col
              ${isMobile ? 'w-full h-full rounded-none' : 'mb-4 w-[380px] h-[450px] rounded-[32px]'}
            `}
          >
            {/* Header - More Minimal & Modern */}
            <div className={`p-5 flex items-center justify-between border-b border-gray-100/50 dark:border-gray-800/50 ${isMobile ? 'pt-12' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/20">
                    <Bot className="text-white" size={20} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-950 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.1em]">Avoma Assistant</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">Powered by AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-400"
              >
                {isMobile ? <X size={24} /> : <Minimize2 size={18} />}
              </button>
            </div>

            {/* Messages - Softer Bubbles */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide"
            >
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-[22px] text-sm font-medium whitespace-pre-wrap break-words ${
                    msg.sender === 'user' 
                      ? 'bg-orange-600 text-white rounded-br-none shadow-lg shadow-orange-600/10' 
                      : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleSend(null, action.query)}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 rounded-lg border border-orange-100 dark:border-orange-500/20 hover:bg-orange-600 hover:text-white transition-all"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100/80 dark:bg-gray-800/80 p-4 rounded-[22px] rounded-bl-none">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input - Sleeker Integration */}
            <div className={`p-5 ${isMobile ? 'pb-10' : ''}`}>
              <form onSubmit={handleSend} className="relative group">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-sm font-medium px-5 py-4 rounded-2xl border border-transparent focus:bg-white dark:focus:bg-gray-800 focus:border-orange-600/30 focus:ring-4 focus:ring-orange-600/5 outline-none transition-all pr-12"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-orange-600 hover:text-orange-700 disabled:text-gray-300 dark:disabled:text-gray-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Liquid Style */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl bg-orange-600 text-white hover:shadow-orange-600/20 transition-all duration-500"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
