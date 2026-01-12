
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Zap } from 'lucide-react';
import { getTaxAdvice } from '../geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'andy';
  timestamp: Date;
}

interface AndyChatbotProps {
  onClose: () => void;
}

const AndyChatbot: React.FC<AndyChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! I'm Andy, your virtual tax advisor. How can I help you save on property taxes today?",
      sender: 'andy',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getTaxAdvice(input);
      const andyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response || "I'm having a little trouble connecting, but don't worry—your taxes are my priority!",
        sender: 'andy',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, andyMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[500] flex items-end justify-end p-6 pointer-events-none">
      <div className="w-full max-w-md h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-outline animate-in slide-in-from-bottom-10 duration-500 pointer-events-auto">
        <div className="p-6 bg-brand-deep text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl p-1 relative shadow-lg">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-andy-success rounded-full border-2 border-brand-deep"></div>
            </div>
            <div>
              <h3 className="font-black text-sm tracking-tight">Andy Advisor</h3>
              <div className="flex items-center gap-1.5 opacity-60">
                 <Zap className="w-2 h-2 text-primary fill-primary" />
                 <span className="text-[8px] font-black uppercase tracking-widest">Always Active</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-all"><X className="w-5 h-5" /></button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-surface-variant/30">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300`}>
              <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${
                m.sender === 'user' 
                  ? 'bg-primary text-white rounded-br-none shadow-lg shadow-primary/10' 
                  : 'bg-white text-on-surface border border-outline rounded-bl-none shadow-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-3xl rounded-bl-none border border-outline shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-white border-t border-outline flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Andy anything..."
            className="flex-1 bg-surface-variant p-4 rounded-2xl text-sm font-medium border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all shadow-inner"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="w-12 h-12 bg-primary hover:bg-andy-hover text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AndyChatbot;
