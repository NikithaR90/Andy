
import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Check, 
  DollarSign, 
  Zap, 
  AlertCircle,
  CreditCard,
  Lock,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Sparkles,
  Shield,
  Gavel,
  BadgeCheck
} from 'lucide-react';

interface ProtestWorkflowProps {
  onClose: () => void;
}

const ProtestWorkflow: React.FC<ProtestWorkflowProps> = ({ onClose }) => {
  const [step, setStep] = useState<'pricing' | 'payment' | 'success'>('pricing');

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6 bg-brand-deep/95 backdrop-blur-2xl animate-in fade-in duration-500">
      <div className="bg-white w-full max-w-4xl rounded-[3.5rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)] overflow-hidden relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-700 border border-white/20 flex flex-col max-h-[95vh]">
        
        {/* Modal Header */}
        <div className="p-10 border-b border-outline flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-4">
            {step === 'payment' && (
              <button onClick={() => setStep('pricing')} className="p-3 -ml-2 hover:bg-surface-variant rounded-2xl transition-all"><ArrowLeft className="w-6 h-6" /></button>
            )}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center p-1 border border-primary/20">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-on-surface tracking-tighter">
                  {step === 'pricing' ? 'Andy\'s Filing Recommendation' : step === 'payment' ? 'Secure Checkout' : 'Filing Confirmed'}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${step === 'pricing' ? 'bg-primary' : 'bg-outline'}`}></span>
                  <span className={`w-2 h-2 rounded-full ${step === 'payment' ? 'bg-primary' : 'bg-outline'}`}></span>
                  <span className={`w-2 h-2 rounded-full ${step === 'success' ? 'bg-primary' : 'bg-outline'}`}></span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-2xl transition-all"><X className="w-6 h-6" /></button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Step 1: Dynamic Pricing Selection */}
          {step === 'pricing' && (
            <div className="p-12 space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Guided Selection</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter leading-tight">
                  Let's lock in your <span className="text-primary italic">Tax Defense.</span>
                </h2>
                <p className="text-on-surface-variant font-medium text-lg opacity-70 italic">
                  "I've analyzed your local Travis County trends. I recommend the Performance Savings package for the highest potential ROI this cycle."
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Card 1: Fixed Fee Component */}
                <div className="relative group">
                  <div className="h-full bg-surface-variant rounded-[3rem] p-10 border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-on-surface">$99</div>
                        <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Yearly Access</div>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-black text-on-surface mb-4 tracking-tight">Active Monitoring</h4>
                    <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-8">
                      Continuous analysis of neighborhood transactions, legislative tax changes, and district appraisal adjustments 24/7.
                    </p>

                    <div className="space-y-4 mt-auto">
                      {['365-Day Market Watch', 'Automated Evidence Lockbox', 'Certified Equity Comps'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 2: Performance Component */}
                <div className="relative group">
                  <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest z-20 shadow-xl border-4 border-white">
                     Andy's Choice
                  </div>
                  <div className="absolute inset-0 bg-primary blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative h-full bg-brand-deep text-white rounded-[3rem] p-10 border border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <TrendingDown className="w-32 h-32 -rotate-12" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-primary backdrop-blur-md">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-primary">40%</div>
                        <div className="text-[10px] font-black text-on-primary-container/40 uppercase tracking-widest">Success Share</div>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Savings Guarantee</h4>
                    <p className="text-on-primary-container/60 text-sm font-medium leading-relaxed mb-8 relative z-10 italic">
                      "We only win when you win. If we don't reduce your property taxes, you don't pay us a penny in success fees."
                    </p>

                    <div className="space-y-4 mt-auto relative z-10">
                      {['End-to-End Representation', 'Informal & Formal Hearings', 'No-Win, No-Fee Commitment'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-[11px] font-bold text-on-primary-container/80 uppercase tracking-wider">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shrink-0 border border-amber-100 p-2">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                </div>
                <div>
                   <h5 className="font-black text-amber-900 mb-1">Andy's Alert: May 15th Deadline</h5>
                   <p className="text-xs font-medium text-amber-900/60 leading-relaxed">
                     Protests must be filed by May 15th. Starting your package today gives me enough time to build a robust evidence portfolio before the CAD window closes.
                   </p>
                </div>
              </div>

              <button 
                onClick={() => setStep('payment')}
                className="w-full bg-primary hover:bg-andy-hover text-on-primary py-7 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_-8px_rgba(17,152,34,0.3)] hover:scale-[1.01] active:scale-[0.98]"
              >
                Start My Defense Cycle
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Step 2: Payment Details */}
          {step === 'payment' && (
            <div className="p-16 space-y-12">
              <div className="bg-surface-variant p-10 rounded-[3rem] flex items-center justify-between border border-outline relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 opacity-5 translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
                 <div>
                   <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Active Tax Cycle</div>
                   <div className="font-black text-on-surface text-2xl">Tax Year 2026</div>
                 </div>
                 <div className="text-right">
                   <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Initial Retainer Fee</div>
                   <div className="font-black text-primary text-4xl">$99.00</div>
                 </div>
              </div>

              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2">Cardholder Name</label>
                    <input type="text" placeholder="Your full name" className="w-full bg-surface-variant p-6 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-on-surface" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2">Secure Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface-variant p-6 pl-16 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-on-surface" />
                      <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant/40" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="space-y-4 md:col-span-2">
                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2">Expiration</label>
                    <input type="text" placeholder="MM / YY" className="w-full bg-surface-variant p-6 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-on-surface" />
                  </div>
                  <div className="space-y-4 md:col-span-2">
                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2">Security Code</label>
                    <div className="relative">
                      <input type="text" placeholder="CVC" className="w-full bg-surface-variant p-6 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-on-surface" />
                      <Lock className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-surface-variant/50 rounded-[3rem] border border-outline flex items-center gap-8">
                 <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center text-on-surface-variant/40 shadow-sm shrink-0 border border-outline p-2">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain grayscale opacity-30" alt="Andy" />
                 </div>
                 <p className="text-[11px] font-bold text-on-surface-variant leading-relaxed uppercase tracking-widest opacity-60">
                   Andy uses bank-grade 256-bit encryption. Your payment data is never stored on our local servers and is processed via certified secure financial channels.
                 </p>
              </div>

              <button 
                onClick={() => setStep('success')}
                className="w-full bg-primary hover:bg-andy-hover text-on-primary py-7 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-8px_rgba(17,152,34,0.3)] transition-all active:scale-[0.98]"
              >
                Process Secure Payment
              </button>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 'success' && (
            <div className="p-20 text-center space-y-12">
              <div className="relative inline-block">
                <div className="w-40 h-40 bg-andy-success/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-700">
                   <div className="w-24 h-24 p-2 bg-white rounded-3xl shadow-2xl border-2 border-andy-success/20">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                   </div>
                </div>
                <div className="absolute inset-0 bg-andy-success/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-on-surface tracking-tighter">I'm on the case!</h3>
                <p className="text-on-surface-variant font-medium text-xl max-w-sm mx-auto leading-relaxed opacity-70 italic">
                  "Your 2026 filing is confirmed. I'll start analyzing the newest comps immediately and alert you the second I find a winning play."
                </p>
              </div>

              <div className="bg-surface-variant p-8 rounded-[2.5rem] border border-outline inline-block mx-auto">
                <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] mb-2">Filing Reference ID</div>
                <div className="text-2xl font-black text-on-surface font-mono tracking-tighter">ANDY-TX2026-{Math.floor(Math.random()*999999)}</div>
              </div>

              <button 
                onClick={onClose}
                className="w-full max-w-md bg-brand-deep text-white py-7 rounded-[2rem] font-black text-xl hover:bg-on-surface transition-all shadow-2xl"
              >
                Go to My Briefing Room
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtestWorkflow;
