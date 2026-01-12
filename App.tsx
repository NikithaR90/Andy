
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
import Dashboard from './components/Dashboard';
import AndyChatbot from './components/AndyChatbot';
import { Sparkles, Users, ArrowRight, Gift } from 'lucide-react';

const App: React.FC = () => {
  const [showEstimator, setShowEstimator] = useState(false);
  const [showReferDetail, setShowReferDetail] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentAddress, setCurrentAddress] = useState('');
  const [userSession, setUserSession] = useState<{ isLoggedIn: boolean; propertyData: any } | null>(null);

  const handleEstimate = (address: string) => {
    setCurrentAddress(address);
    setShowEstimator(true);
  };

  const handleLogin = (data: any) => {
    setUserSession({ isLoggedIn: true, propertyData: data });
    setShowEstimator(false);
  };

  const handleLogout = () => {
    setUserSession(null);
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleFeatureExplore = (id: string) => {
    switch (id) {
      case 'advisor':
        setShowChat(true);
        break;
      case 'filing':
        scrollToId('how-it-works');
        break;
      case 'monitoring':
        scrollToId('pricing');
        break;
      case 'evidence':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Optionally focus the address input here
        break;
      default:
        scrollToId('how-it-works');
    }
  };

  // If user is logged in, show the dashboard
  if (userSession?.isLoggedIn) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar isSolid={true} />
        <Dashboard 
          propertyData={userSession.propertyData} 
          onLogout={handleLogout} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />
      
      <main>
        <Hero onEstimate={handleEstimate} />
        
        <Features onExplore={handleFeatureExplore} />
        
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

        {/* Simplified Refer and Earn Teaser Section */}
        <section id="refer" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#E6FFE6] to-white rounded-[3.5rem] border border-outline p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-12">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Users className="w-80 h-80 text-primary rotate-12" />
               </div>
               
               <div className="relative z-10 flex-1 space-y-8 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Community Rewards</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-on-surface leading-tight tracking-tighter">
                    Help your neighbors, <br />
                    <span className="text-primary italic">earn rewards.</span>
                  </h3>
                  <p className="text-lg text-on-surface-variant font-medium opacity-70 max-w-lg leading-relaxed">
                    Refer a friend to Andy. When they successfully file their property tax protest, you'll both receive <span className="text-on-surface font-black">$50 in credits</span> toward your annual tax defense.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => setShowReferDetail(true)}
                      className="bg-primary hover:bg-andy-hover text-on-primary px-10 py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
                    >
                      Refer a Friend <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setShowReferDetail(true)}
                      className="bg-white border-2 border-outline px-10 py-5 rounded-2xl font-black text-sm text-on-surface hover:bg-surface-variant transition-all flex items-center justify-center gap-3"
                    >
                      Learn More <Gift className="w-5 h-5" />
                    </button>
                  </div>
               </div>

               <div className="relative z-10 lg:w-[400px] shrink-0">
                  <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-outline relative floating">
                     <div className="aspect-video bg-brand-deep rounded-3xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Neighborhood community" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                           <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-lg">
                              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" />
                           </div>
                           <div className="text-white">
                              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Andy Program</div>
                              <div className="text-sm font-black">$50 Credit Ready</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

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
          onLoginSuccess={handleLogin}
        />
      )}

      {showReferDetail && (
        <ReferAndEarn onClose={() => setShowReferDetail(false)} />
      )}

      {showChat && (
        <AndyChatbot onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default App;
