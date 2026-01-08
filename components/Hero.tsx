import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  onEstimate: (address: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onEstimate }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) onEstimate(address);
  };

  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden bg-brand-deep">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400" 
          alt="Modern Texas Real Estate" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        {/* Subtle Decorative Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-on-primary-container/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-on-primary-container/20">
            <span className="flex h-2 w-2 rounded-full bg-andy-success animate-ping"></span>
            <span className="text-on-primary-container text-[11px] font-bold tracking-[0.15em] uppercase">Property Tax AI Expert</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.15] mb-8 tracking-tight">
            Stop overpaying your <br />
            <span className="text-primary">property taxes.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-primary-container/80 mb-10 max-w-2xl leading-relaxed font-normal">
            Texas property assessments are rising. Let Andy's intelligent protest platform handle the entire process—automated filing, pinpoint accuracy, and no upfront cost.
          </p>

          <div className="relative group max-w-2xl">
            {/* Outline focus effect */}
            <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
            
            <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row items-center gap-2 bg-white p-2 rounded-2xl border border-outline shadow-2xl">
              <div className="flex-1 w-full relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-on-surface-variant" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-4 py-4 bg-transparent border-0 focus:ring-0 text-on-surface text-base placeholder:text-on-surface-variant/60"
                  placeholder="Enter your property address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-andy-hover text-on-primary px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 transition-all active:scale-[0.98] shadow-md shadow-primary/20"
              >
                <span>Check Savings</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {[
              { label: 'Success-based', sub: 'Yearly Monitoring' },
              { label: 'AI Powered', sub: 'Verified evidence' },
              { label: 'Expert Review', sub: 'Human precision' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="bg-primary/20 p-1.5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{item.label}</div>
                  <div className="text-on-primary-container/60 text-xs font-medium uppercase tracking-wider">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;