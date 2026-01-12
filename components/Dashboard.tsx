
import React, { useState } from 'react';
import { 
  DollarSign, 
  Map as MapIcon, 
  Calendar as CalendarIcon, 
  Activity, 
  ShieldAlert, 
  TrendingDown, 
  ChevronRight, 
  Plus, 
  Skull, 
  Clock,
  ArrowUpRight,
  User,
  CreditCard,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Sun,
  CloudSun,
  CloudRain,
  X,
  FileText,
  Lock,
  MessageSquare,
  Sparkles,
  Zap,
  ArrowRight,
  Gavel,
  Rocket,
  Coins,
  TrendingUp,
  History
} from 'lucide-react';
import ProtestWorkflow from './ProtestWorkflow';
import CompReview from './CompReview';
import AndyChatbot from './AndyChatbot';

interface DashboardProps {
  propertyData: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ propertyData, onLogout }) => {
  const [showProtestWorkflow, setShowProtestWorkflow] = useState(false);
  const [showCompsModal, setShowCompsModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [walletApplied, setWalletApplied] = useState(false);

  const [wallet, setWallet] = useState({
    available: 150.00,
    lifetime: 250.00,
  });

  const submittedProtests = [
    { 
      id: 'TX2026-8812', 
      year: 2026, 
      type: 'Residential', 
      status: 'In Review', 
      date: 'Just Now',
      savings: '$1,420',
      forms: 5
    },
    { 
      id: 'TX2025-4421', 
      year: 2025, 
      type: 'Residential', 
      status: 'Settled', 
      date: 'May 12, 2025',
      savings: '$840',
      forms: 5
    }
  ];

  const daysInMay = Array.from({ length: 31 }, (_, i) => i + 1);
  const protestDates = [2, 18, 31];

  const handleApplyCredits = () => {
    setWalletApplied(true);
    setTimeout(() => setWalletApplied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] pt-24 pb-12 font-sans">
      {walletApplied && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] animate-in slide-in-from-top-10 duration-500">
           <div className="glass bg-primary text-white px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-white/10">
              <Sparkles className="w-6 h-6" />
              <span className="font-black text-sm uppercase tracking-widest">Credits Applied to 2026 Filing!</span>
           </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2">
                 <Sparkles className="w-3 h-3 text-primary" />
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Live Advisor Active</span>
              </div>
            </div>
            <h1 className="text-4xl font-black text-on-surface tracking-tighter">Owner Central</h1>
            <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mt-1 opacity-60">
              Session Secure • {propertyData?.address || 'Austin, TX 78701'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowChatModal(true)}
              className="p-4 bg-white border border-outline rounded-2xl hover:bg-surface-variant transition-colors shadow-sm group"
            >
              <MessageSquare className="w-5 h-5 text-on-surface group-hover:text-primary transition-colors" />
            </button>
            <button 
              onClick={() => setShowProtestWorkflow(true)}
              className="bg-primary hover:bg-andy-hover text-on-primary px-8 py-5 rounded-3xl font-black flex items-center gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
              <Plus className="w-5 h-5" />
              Start 2026 Protest
            </button>
            <button 
              onClick={onLogout}
              className="px-6 py-5 bg-white border border-outline rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all font-black text-[10px] uppercase tracking-widest shadow-sm"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Andy's Daily Briefing Card */}
        <div className="mb-12 bg-gradient-to-br from-[#E6FFE6] via-white to-[#F0FDF4] rounded-[3.5rem] p-8 md:p-14 relative overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5 group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Zap className="w-80 h-80 text-primary rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-14">
            <div className="shrink-0 relative">
               <div className="w-56 h-56 bg-white rounded-[3rem] p-4 border border-primary/20 shadow-2xl shadow-primary/10 floating relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain relative z-10" alt="Andy" />
               </div>
               {/* 3D Achievement Badge Beside Profile */}
               <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-andy-success text-white px-5 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(17,152,34,0.4)] font-black text-[10px] uppercase tracking-widest border-4 border-white flex items-center gap-2 transform hover:scale-105 transition-transform">
                  <Rocket className="w-4 h-4 drop-shadow-md" />
                  Super Sharer
               </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter leading-tight">
                  Hey there! I'm <span className="text-primary italic">Andy.</span>
                </h2>
                <p className="text-on-surface-variant text-lg font-medium max-w-2xl leading-relaxed opacity-80">
                  "I've updated your 2026 evidence vault with 3 new neighborhood sales. Our case for an assessment reduction is now at a <span className="text-primary font-black">94% confidence level.</span>"
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                 <button 
                  onClick={() => setShowCompsModal(true)}
                  className="px-8 py-4 bg-white text-brand-deep rounded-2xl font-black text-sm hover:bg-primary hover:text-white transition-all shadow-md border border-outline flex items-center gap-2"
                >
                  Review Comps <ArrowRight className="w-4 h-4" />
                </button>
                 <button 
                  onClick={() => setShowChatModal(true)}
                  className="px-8 py-4 bg-white/50 text-on-surface rounded-2xl font-black text-sm hover:bg-white transition-all border border-outline"
                >
                  Ask me a question
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 w-full lg:w-auto shrink-0">
               <div className="bg-white/80 border border-primary/20 p-8 rounded-[2.5rem] text-center backdrop-blur-md shadow-sm min-w-[180px]">
                  <div className="text-primary text-3xl font-black mb-1">$1,420</div>
                  <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Est. Saving</div>
               </div>
               <div className="bg-white/80 border border-primary/20 p-8 rounded-[2.5rem] text-center backdrop-blur-md shadow-sm min-w-[180px]">
                  <div className="text-on-surface text-3xl font-black mb-1">94%</div>
                  <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Likelihood</div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Dashboard Panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[3rem] border border-outline shadow-sm p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary shadow-inner"><Gavel className="w-5 h-5" /></div>
                  <h3 className="font-black text-xl text-on-surface tracking-tighter">Submitted Protests</h3>
                </div>
              </div>
              <div className="space-y-4">
                {submittedProtests.map((protest) => (
                  <div key={protest.id} className="p-6 bg-surface-variant rounded-[2rem] border border-outline hover:border-primary/20 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-on-surface shadow-md"><FileText className="w-6 h-6" /></div>
                      <div>
                        <div className="font-black text-on-surface">{protest.year} Protest • {protest.id}</div>
                        <div className="text-[10px] font-bold text-on-surface-variant opacity-40 uppercase tracking-widest">{protest.forms} Forms Active</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-right">
                       <div className="hidden sm:block">
                         <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-0.5">Projected</div>
                         <div className="font-black text-primary">{protest.savings}</div>
                       </div>
                       <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${protest.status === 'Settled' ? 'bg-andy-success text-white' : 'bg-primary/20 text-primary animate-pulse'}`}>
                         {protest.status}
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Market Value Est.', val: propertyData?.marketValue || 450000, icon: <DollarSign className="w-4 h-4" /> },
                { label: 'Assessed (CAD)', val: propertyData?.assessedValue || 442000, icon: <TrendingDown className="w-4 h-4" /> },
                { label: 'Tax Bill Projection', val: propertyData?.totalTaxBill || 9800, icon: <CreditCard className="w-4 h-4" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-outline shadow-sm group hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-sm">
                    {stat.icon}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 mb-1">{stat.label}</div>
                  <div className="text-2xl font-black text-on-surface">${stat.val.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Widgets */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Wallet Widget Summary */}
            <div className="bg-brand-deep rounded-[3rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20 shadow-inner">
                     <Coins className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter">Credits Wallet</h3>
               </div>

               <div className="space-y-6 mb-10">
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-primary-container/40 mb-1">Available Credits</div>
                     <div className="text-5xl font-black text-white tracking-tighter">${wallet.available.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                     <TrendingUp className="w-4 h-4" />
                     Lifetime Earned: ${wallet.lifetime.toFixed(2)}
                  </div>
               </div>

               <button 
                  disabled={wallet.available === 0}
                  onClick={handleApplyCredits}
                  className="w-full bg-primary hover:bg-andy-hover text-on-primary py-5 rounded-2xl font-black text-sm transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  <Sparkles className="w-4 h-4" /> Apply Credits to Fee
               </button>
            </div>

            <div className="bg-white rounded-[3rem] border border-outline shadow-sm p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black text-lg text-on-surface tracking-tighter">Filing Schedule</h3>
                <CalendarIcon className="w-4 h-4 text-primary" />
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                  <div key={d} className="text-[9px] font-black text-on-surface-variant/30 uppercase">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-3 text-center">
                <div className="h-8"></div><div className="h-8"></div><div className="h-8"></div><div className="h-8"></div>
                {daysInMay.map(day => (
                  <div key={day} className="flex flex-col items-center justify-center relative">
                    <div className={`w-8 h-8 flex items-center justify-center text-[11px] font-bold rounded-full transition-all cursor-pointer relative z-10 ${protestDates.includes(day) ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'text-on-surface-variant/60 hover:bg-surface-variant'}`}>
                      {day}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showProtestWorkflow && <ProtestWorkflow onClose={() => setShowProtestWorkflow(false)} />}
      {showCompsModal && <CompReview onClose={() => setShowCompsModal(false)} />}
      {showChatModal && <AndyChatbot onClose={() => setShowChatModal(false)} />}
    </div>
  );
};

export default Dashboard;
