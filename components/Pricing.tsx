import React from 'react';
import { Check, Info, Zap, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-surface-variant relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Transparent Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-on-surface tracking-tight">Pay only when <br /><span className="text-primary">you save money.</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Success Fee Card */}
          <div className="bg-white p-8 rounded-2xl border border-outline card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary text-on-primary text-2xl font-bold px-4 py-2 rounded-lg">60%</div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface">Success Fee</h4>
                  <p className="text-on-surface-variant text-sm font-medium">Of actual tax savings</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                If we don't save you money, you don't pay us a success fee. We are fully aligned with your goals—reducing your burden.
              </p>
            </div>
            <div className="bg-surface-variant p-4 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0" />
              <p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider italic">Only payable after your protest is settled.</p>
            </div>
          </div>

          {/* Annual Monitoring Card */}
          <div className="bg-white p-8 rounded-2xl border border-outline card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-on-surface text-surface text-2xl font-bold px-4 py-2 rounded-lg">$99</div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface uppercase tracking-wider">Annual Access</h4>
                  <p className="text-on-surface-variant text-sm font-medium">Billed yearly</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Covers your year-round property monitoring, automated evidence folder generation, and neighborhood community equity analysis.
              </p>
            </div>
            <div className="bg-surface-variant p-4 rounded-xl flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary shrink-0" />
              <p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider italic">Ensures you're always ready for the window.</p>
            </div>
          </div>

          {/* Full Service High-Impact Card */}
          <div className="bg-primary-container text-on-primary-container p-8 rounded-2xl shadow-xl shadow-primary-container/20 flex flex-col border border-primary/20">
            <div className="mb-8">
              <span className="bg-primary text-on-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">Best Value</span>
              <h3 className="text-3xl font-bold mb-2">Full Managed Service</h3>
              <p className="text-on-primary-container/70 text-sm font-medium">Complete end-to-end protest suite.</p>
            </div>
            
            <div className="space-y-4 mb-10 flex-grow">
              {[
                'Automated Comp Generation',
                'Professional Evidence Pack',
                'E-Filing Submission',
                'Expert Human Representation',
                'Equity & Market Analysis'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-primary p-1 rounded-md">
                    <Check className="w-3.5 h-3.5 text-on-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-primary hover:bg-andy-hover text-on-primary py-4 rounded-xl font-bold text-base shadow-lg transition-all active:scale-[0.98]">
              Join 120k+ Texans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;