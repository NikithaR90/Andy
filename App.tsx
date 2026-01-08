
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ReferAndEarn from './components/ReferAndEarn';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SavingsEstimator from './components/SavingsEstimator';

const App: React.FC = () => {
  const [showEstimator, setShowEstimator] = useState(false);
  const [currentAddress, setCurrentAddress] = useState('');

  const handleEstimate = (address: string) => {
    setCurrentAddress(address);
    setShowEstimator(true);
  };

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />
      
      <main>
        <Hero onEstimate={handleEstimate} />
        
        <Features />
        
        <HowItWorks />

        {/* Brand Deep Stat Section */}
        <section className="py-24 bg-brand-deep text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <div className="text-center group">
                <div className="text-6xl font-extrabold mb-3 text-primary tracking-tighter transition-transform duration-500 group-hover:scale-105">$42M+</div>
                <div className="text-on-primary-container/40 font-bold tracking-[0.2em] uppercase text-[10px]">Taxes Saved Annually</div>
              </div>
              <div className="text-center group border-y md:border-y-0 md:border-x border-white/5 py-12 md:py-0">
                <div className="text-6xl font-extrabold mb-3 tracking-tighter transition-transform duration-500 group-hover:scale-105 text-white">120K+</div>
                <div className="text-on-primary-container/40 font-bold tracking-[0.2em] uppercase text-[10px]">Active Texas Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-extrabold mb-3 text-andy-success tracking-tighter transition-transform duration-500 group-hover:scale-105">94%</div>
                <div className="text-on-primary-container/40 font-bold tracking-[0.2em] uppercase text-[10px]">Protest Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Refer and Earn Section */}
        <ReferAndEarn />

        {/* Modern Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Real Results</h2>
              <h3 className="text-4xl font-semibold text-on-surface tracking-tight">Stories from <span className="text-on-surface-variant">your neighbors.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Lance Altman", loc: "Houston, TX", text: "Andy's automated system saved me $2,400 this year alone! I didn't have to lift a finger during the whole process.", color: "primary" },
                { name: "Sally Welch", loc: "Austin, TX", text: "The AI analysis found equity comps I never would have seen. It's the best tax investment I've made.", color: "primary" },
                { name: "Willie Mcdonagh", loc: "Dallas, TX", text: "Streamlined, professional, and effective. The $99 fee is well worth the peace of mind knowing my taxes are fair.", color: "primary" }
              ].map((t, idx) => (
                <div key={idx} className="bg-surface-variant p-10 rounded-2xl border border-outline hover:border-primary/20 transition-all duration-300 card-shadow">
                  <div className="flex text-andy-success mb-6 space-x-0.5">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
                  </div>
                  <p className="text-on-surface-variant text-base font-medium mb-10 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-sm" />
                    <div>
                      <div className="font-bold text-on-surface text-base">{t.name}</div>
                      <div className="text-[11px] text-primary font-bold uppercase tracking-wider">{t.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* App Download CTA - Primary Container Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand-deep rounded-3xl p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 border border-primary/20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 flex-1">
                <h3 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-[1.15] tracking-tight">
                  Protest on <br />
                  <span className="text-primary font-bold">the go.</span>
                </h3>
                <p className="text-on-primary-container/70 text-lg mb-10 leading-relaxed max-w-xl font-medium">
                  Experience the future of property tax management. Download Andy and join 100M+ homeowners in the movement for tax fairness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all flex items-center space-x-3 border border-white/10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-7" />
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all flex items-center space-x-3 border border-white/10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-7" />
                  </button>
                </div>
              </div>

              <div className="relative z-10 lg:w-1/3 flex flex-col items-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6 hover:scale-[1.02] transition-transform duration-500">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=AndyApp" alt="QR Code" className="w-40 h-40" />
                </div>
                <span className="text-on-primary-container/40 font-bold tracking-[0.3em] uppercase text-[10px]">Scan to download</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showEstimator && (
        <SavingsEstimator 
          initialAddress={currentAddress} 
          onClose={() => setShowEstimator(false)} 
        />
      )}
    </div>
  );
};

export default App;
