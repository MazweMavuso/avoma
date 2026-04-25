import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const SYSTEM_PROMPT = `STRICT FORMATTING RULES (MANDATORY):
1. NEVER use Markdown tables.
2. DO NOT use bolding (NO double asterisks like **text**). Use plain text only.
3. DO NOT use decorative characters or separators like |, ---, or ===.
4. Use only plain text and simple bullet points (using - or •) for lists.
5. Keep the output clean: well-spaced paragraphs and simple text ONLY.
6. NO special formatting symbols.

You are the official AI assistant for ${businessInfo.name}, a leading pharmaceutical company in ${businessInfo.contact.address.country}. 
Your goal is to be professional, helpful, and knowledgeable about the company.`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Avoma Pharma assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const idRef = useRef(2);

  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100dvh');
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // iOS & Global Keyboard awareness logic
  useEffect(() => {
    if (!isMobile || !isOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    // Prevent background scrolling on mobile when chat is open
    document.body.style.overflow = 'hidden';

    const handleViewportChange = () => {
      if (window.visualViewport) {
        const height = window.visualViewport.height;
        const offset = window.innerHeight - height;
        
        // Update height and offset
        setViewportHeight(`${height}px`);
        setKeyboardOffset(offset);
        
        // Force scroll to bottom when keyboard appears
        if (offset > 50) {
          setTimeout(() => {
            scrollRef.current?.scrollTo({
              top: scrollRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }, 150);
        }
      }
    };

    window.visualViewport?.addEventListener('resize', handleViewportChange);
    window.visualViewport?.addEventListener('scroll', handleViewportChange);
    handleViewportChange();

    return () => {
      window.visualViewport?.removeEventListener('resize', handleViewportChange);
      window.visualViewport?.removeEventListener('scroll', handleViewportChange);
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e, customQuery = null) => {
    if (e) e.preventDefault();
    const input = customQuery || message;
    if (!input.trim()) return;

    const userMessageId = idRef.current++;
    setMessages(prev => [...prev, { id: userMessageId, text: input, sender: 'user' }]);
    if (!customQuery) setMessage('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
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
      if (!response.ok) throw new Error(data.error?.message || 'API request failed');

      setMessages(prev => [...prev, { 
        id: idRef.current++, 
        text: data.choices[0].message.content, 
        sender: 'bot' 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: idRef.current++,
        text: "I'm having trouble connecting. Please try again later.",
        sender: 'bot'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div 
      className={`fixed z-[100] font-sans transition-all duration-300 ${
        isMobile && isOpen ? 'inset-0' : 'bottom-6 left-6'
      }`}
      style={isMobile && isOpen ? { height: viewportHeight, top: 0 } : {}}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom left' }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`
              bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/20 dark:border-white/10 overflow-hidden flex flex-col
              ${isMobile ? 'w-full h-full rounded-none' : 'mb-4 w-[380px] h-[450px] rounded-[32px]'}
            `}
          >
            {/* Header */}
            <div className={`p-5 flex items-center justify-between border-b border-gray-100/50 dark:border-gray-800/50 ${isMobile ? 'pt-8' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/20">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.1em]">Avoma Assistant</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">Powered by AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-400">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide overscroll-contain">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-[22px] text-sm font-medium whitespace-pre-wrap break-words ${
                    msg.sender === 'user' 
                      ? 'bg-orange-600 text-white rounded-br-none shadow-lg' 
                      : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
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

            {/* Input - Fixed height and padding for iOS Safari */}
            <div className={`p-4 bg-white dark:bg-gray-950 border-t border-gray-100/50 dark:border-gray-800/50 ${isMobile ? 'pb-6' : ''}`}>
              <form onSubmit={handleSend} className="relative group">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-base font-medium px-5 py-4 rounded-2xl border-2 border-transparent focus:border-orange-600/30 outline-none transition-all pr-12 appearance-none"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-orange-600 disabled:text-gray-300 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl bg-orange-600 text-white"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
