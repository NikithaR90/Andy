
import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is there an annual fee for protesting?",
      answer: "Texas property taxes are reassessed every year. To ensure you never overpay, we provide continuous monitoring and prepare your evidence files annually so you're always ready for the protest window."
    },
    {
      question: "Do I have to protest every year?",
      answer: "While not mandatory, it is highly recommended. Values can increase annually, and a successful protest this year helps lower the baseline for future assessments."
    },
    {
      question: "What if they there is no value change?",
      answer: "Even if your value didn't change, it might still be higher than comparable homes in your neighborhood. We analyze 'Equity' in addition to 'Market Value' to find potential savings."
    },
    {
      question: "Can my protest tax go up every year?",
      answer: "Yes, tax districts can increase assessments based on market trends. However, there are caps for homestead properties. Andy helps you stay within those legal limits."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="mb-10 inline-flex items-center justify-center w-16 h-16 bg-[#F0FDF4] rounded-[1.5rem] border border-primary/10 shadow-sm">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-5xl font-black text-on-surface leading-[1.2] mb-8 tracking-tight">
              Get answers to some <br />
              <span className="text-primary">Frequently</span> <span className="text-primary">Asked</span> <br />
              Questions
            </h3>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-medium">
              Have a riddle that needs a human to crack? <span className="font-bold text-on-surface">We got you.</span>
            </p>
            <button className="text-primary font-bold flex items-center gap-3 hover:translate-x-2 transition-transform group text-sm uppercase tracking-widest">
              <span>Speak to our customer support now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (FAQ List) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F8FA] rounded-[3rem] p-4 border border-outline shadow-sm">
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`rounded-[2.5rem] transition-all duration-300 ${openIndex === i ? 'bg-white shadow-md' : 'hover:bg-white/50'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full px-10 py-8 flex items-center justify-between text-left group"
                    >
                      <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                        {faq.question}
                      </span>
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${openIndex === i ? 'bg-primary/10 rotate-180' : 'bg-outline/20'}`}>
                        <ChevronDown className={`w-5 h-5 ${openIndex === i ? 'text-primary' : 'text-on-surface-variant'}`} />
                      </div>
                    </button>
                    {openIndex === i && (
                      <div className="px-10 pb-10 text-on-surface-variant leading-relaxed font-medium text-base animate-in slide-in-from-top-4 duration-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic bottom text */}
      <div className="mt-20 text-center">
        <h2 className="text-[2.5rem] font-black text-primary tracking-tight">FAQ'S</h2>
      </div>
    </section>
  );
};

export default FAQ;
