
import React, { useState } from 'react';
import { 
  Copy, 
  Share2, 
  ChevronDown, 
  ArrowLeft,
  X,
  Sparkles,
  Gift,
  Coins,
  CheckCircle2,
  Lock,
  Rocket,
  Users as UsersIcon,
  ShieldCheck,
  TrendingUp,
  History as HistoryIcon,
  UserPlus,
  Info,
  Medal,
  Star,
  Award,
  Crown,
  Link as LinkIcon,
  Gavel,
  Trophy,
  Mail,
  MessageSquare,
  Twitter,
  Facebook,
  QrCode,
  Zap,
  Heart,
  Shield
} from 'lucide-react';

interface ReferAndEarnProps {
  onClose: () => void;
}

const ReferAndEarn: React.FC<ReferAndEarnProps> = ({ onClose }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const copyLink = () => {
    navigator.clipboard.writeText('andy.com/invite/TX78701');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [wallet] = useState({
    available: 150.00,
    lifetime: 250.00,
    history: [
      { id: 1, date: 'Oct 26, 2023', event: 'Referral: John D.', delta: 50.00, balance: 150.00 },
      { id: 2, date: 'Sep 15, 2023', event: 'Service Fee Payment', delta: -50.00, balance: 100.00 },
      { id: 3, date: 'Aug 01, 2023', event: 'Referral: Jane S.', delta: 50.00, balance: 150.00 },
      { id: 4, date: 'Jul 20, 2023', event: 'Welcome Bonus', delta: 50.00, balance: 100.00 },
    ]
  });

  const referralFaqs = [
    { q: "When do I get my $50?", a: "Your $50 credit is applied to your Andy Wallet as soon as your neighbor successfully files their property tax protest using your link." },
    { q: "Is there a limit to how many friends I can refer?", a: "Absolutely not! We encourage you to help as many neighbors as possible. Each successful filing gets you another $50." },
    { q: "Can my friend also get a reward?", a: "Currently, our 'Referrer Reward' program focuses on rewarding existing users who grow the community. Stay tuned for future promotions that benefit both!" },
    { q: "Can I withdraw my credits to a bank account?", a: "Andy Credits are applied directly toward your service fees or success fees and cannot be withdrawn as cash." }
  ];

  const badges = [
    { 
      id: 'bronze', 
      name: 'The Trailblazer', 
      icon: <Medal className="w-8 h-8" />, 
      color: 'from-[#FF9E42] to-[#E65C00]', 
      active: true,
      desc: '1ST REFERRAL' 
    },
    { 
      id: 'amethyst', 
      name: 'Neighborhood Hero', 
      icon: <Star className="w-8 h-8" />, 
      color: 'from-[#D647FF] to-[#6200EA]', 
      active: true,
      desc: '5 REFERRALS'
    },
    { 
      id: 'sapphire', 
      name: 'Tax Titan', 
      icon: <Award className="w-8 h-8" />, 
      color: 'from-[#BFD9FF] to-[#94A3B8]', 
      active: false,
      desc: '10 REFERRALS'
    },
    { 
      id: 'ruby', 
      name: 'Andy Legend', 
      icon: <Crown className="w-8 h-8" />, 
      color: 'from-[#FFD1D1] to-[#FDA4AF]', 
      active: false,
      desc: '25 REFERRALS'
    },
  ];

  if (showTerms) {
    return (
      <div className="fixed inset-0 z-[600] bg-white overflow-y-auto font-sans animate-in slide-in-from-bottom duration-500 custom-scrollbar">
        <div className="sticky top-0 z-50 bg-white border-b border-outline px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button onClick={() => setShowTerms(false)} className="p-2 hover:bg-surface-variant rounded-full text-on-surface transition-all">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-black text-on-surface tracking-tighter">Terms & Conditions</h2>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center p-1 shadow-sm">
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-tight">
              Andy Referral Program: Official Terms & Conditions
            </h1>
            <p className="text-andy-success font-bold text-sm">Last Updated: October 26, 2023</p>
          </header>

          <div className="space-y-12 text-on-surface font-medium leading-relaxed">
            <p className="text-lg opacity-80">
              Welcome to the Andy Referral Program. These Terms and Conditions govern your participation in the program. By participating, you agree to these terms. Please read them carefully.
            </p>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">1. Program Eligibility</h3>
              <p className="opacity-70">
                To be eligible to participate in the Andy Referral Program, you must be an existing Andy user with an account in good standing. Employees, officers, directors, agents, and representatives of Andy and its affiliates are not eligible to participate.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">2. Referral Process</h3>
              <p className="opacity-70">
                A valid referral occurs when a new user signs up for a qualifying Andy service using your unique referral link and completes the required actions as specified in the program details. Self-referrals are not permitted.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">3. Rewards & Payouts</h3>
              <p className="opacity-70">
                Rewards are credited to your account after the referred user meets the eligibility criteria. Details of the current reward structure are available within the "How-it-Works" section of the app. Payouts are processed according to the schedule outlined in the program, and may be subject to a holding period.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">4. Conduct & Abuse Prevention</h3>
              <p className="opacity-70">
                Any fraudulent or abusive activity is strictly prohibited. This includes, but is not limited to, creating fake accounts, spamming referral links, or violating any applicable laws. We reserve the right to investigate any suspicious activity and disqualify any rewards deemed to be a result of fraudulent behavior.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">5. Modifications to Terms</h3>
              <p className="opacity-70">
                Andy reserves the right to modify or terminate the Referral Program and these Terms and Conditions at any time, without prior notice, at its sole discretion. Any changes will be effective immediately upon posting.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight">6. Contact Information</h3>
              <p className="opacity-70">
                For any questions regarding the Referral Program or these terms, please contact our support team at <span className="text-primary font-bold">support@andyapp.com</span>.
              </p>
            </section>
          </div>
          
          <div className="pt-16 pb-24 text-center border-t border-outline">
            <button 
              onClick={() => setShowTerms(false)} 
              className="bg-brand-deep text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-on-surface transition-all"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[500] bg-surface-variant overflow-y-auto font-sans animate-in slide-in-from-right duration-500 custom-scrollbar pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-outline px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-3 px-4 py-2 hover:bg-white rounded-xl transition-all group">
            <ArrowLeft className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface" />
            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface">Back to Dashboard</span>
          </button>
          <div className="flex items-center gap-8">
             <div className="text-right hidden sm:block">
                <div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Earned Credits</div>
                <div className="text-lg font-black text-primary">${wallet.available.toFixed(2)}</div>
             </div>
             <button onClick={onClose} className="p-2 hover:bg-white rounded-xl transition-all"><X className="w-6 h-6 text-on-surface-variant" /></button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* HERO: Overview Hub with Restored QR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Referral Program Overview</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[0.9] mb-4">
              Help Neighbors, <br />
              <span className="text-primary italic">Get Paid $50.</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-medium opacity-70 leading-relaxed max-w-xl">
              Property tax season is stressful for everyone. When you invite neighbors to use Andy, you both benefit from a stronger community and you get a $50 credit.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-[2.5rem] shadow-xl border border-outline">
              <div className="flex-1 px-6 py-3 bg-surface-variant rounded-2xl border border-outline flex items-center gap-4 w-full">
                <span className="text-sm font-bold text-on-surface-variant/60 truncate">andy.com/invite/TX78701</span>
              </div>
              <button 
                onClick={copyLink}
                className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg 
                ${copied ? 'bg-andy-success text-white' : 'bg-primary text-white hover:bg-andy-hover'}`}
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
               <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">Share on:</span>
               {[
                { icon: <MessageSquare className="w-5 h-5" />, color: 'hover:bg-green-500 hover:text-white', label: 'WhatsApp' },
                { icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-600 hover:text-white', label: 'Facebook' },
                { icon: <Twitter className="w-5 h-5" />, color: 'hover:bg-black hover:text-white', label: 'X' },
                { icon: <Mail className="w-5 h-5" />, color: 'hover:bg-rose-500 hover:text-white', label: 'Email' },
               ].map((social, i) => (
                 <button key={i} className={`w-12 h-12 rounded-xl bg-white border border-outline flex items-center justify-center text-on-surface-variant transition-all ${social.color} shadow-sm`} title={social.label}>
                   {social.icon}
                 </button>
               ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
             <div className="bg-white p-8 rounded-[3.5rem] shadow-2xl border border-outline relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-andy-success/20 rounded-[4rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] border border-outline shadow-inner flex flex-col items-center gap-6">
                   <div className="w-48 h-48 bg-surface-variant rounded-3xl flex items-center justify-center border border-outline overflow-hidden relative">
                      <QrCode className="w-32 h-32 text-on-surface/5" />
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                         <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=AndyApp" alt="QR Code" className="w-full h-full object-contain opacity-80" />
                      </div>
                   </div>
                   <div className="text-center">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 mb-1">Your Personal QR</div>
                      <div className="text-sm font-black text-on-surface">Scan to Join Andy</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* COMBINED ACHIEVEMENTS & WALLET: Match Screenshot High-Fidelity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
           {/* Achievements Section */}
           <div className="lg:col-span-8 bg-white rounded-[4rem] p-12 shadow-sm border border-outline">
              <div className="mb-12">
                 <h3 className="text-3xl font-black text-on-surface tracking-tighter">Your Achievements</h3>
                 <p className="text-sm font-medium text-on-surface-variant opacity-40">Unlock 3D gemstone badges as you help your block.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {badges.map((badge) => (
                   <div key={badge.id} className={`flex items-center gap-8 p-10 rounded-[3rem] border transition-all duration-500 group
                      ${badge.active ? 'bg-surface-variant/50 border-outline' : 'bg-white border-dashed border-outline opacity-40'}`}>
                      <div className={`w-28 h-28 rounded-[2.5rem] bg-gradient-to-br ${badge.color} flex items-center justify-center text-white shadow-xl transform transition-transform duration-500 group-hover:scale-110 relative overflow-hidden`}>
                         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         {React.cloneElement(badge.icon as React.ReactElement<any>, { strokeWidth: 3, className: "w-12 h-12 drop-shadow-md" })}
                      </div>
                      <div className="space-y-1">
                         <div className="text-xl font-black text-on-surface tracking-tight leading-none">{badge.name}</div>
                         <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">{badge.desc}</div>
                         {badge.active && (
                           <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold pt-1">
                              <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-2.5 h-2.5" />
                              </div>
                              Claimed
                           </div>
                         )}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Wallet Section (Dark Background as per image) */}
           <div className="lg:col-span-4">
              <div className="bg-[#152614] rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                 {/* Decorative Circles */}
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none translate-x-12 -translate-y-12">
                    <Coins className="w-64 h-64 text-primary" />
                 </div>
                 
                 <div className="relative z-10 pt-4">
                    <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4">YOUR WALLET</div>
                    <div className="text-[9rem] font-black tracking-tighter leading-none -ml-2 mb-2">
                       <span className="text-4xl align-top opacity-40">$</span>150
                    </div>
                    
                    <div className="mt-8 space-y-4">
                       <div className="w-full h-px bg-white/10"></div>
                       <div className="flex items-center justify-between text-xs font-bold text-white/40 pt-2">
                          <span className="uppercase tracking-widest">LIFETIME EARNED</span>
                          <span className="text-white text-lg">${wallet.lifetime}</span>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 pb-4">
                    <button className="w-full bg-primary hover:bg-andy-hover py-7 rounded-[2.5rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 transition-all active:scale-95">
                       APPLY TO FILING FEE
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="py-24 border-t border-outline">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-on-surface tracking-tighter">How It <span className="text-primary italic">Works</span></h3>
            <p className="text-lg text-on-surface-variant font-medium opacity-60 mt-2">The 3-Step Path to Rewards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="relative group">
                <div className="absolute -top-12 -left-6 text-[12rem] font-black text-primary/10 italic leading-none select-none group-hover:text-primary/20 transition-colors">1</div>
                <div className="relative bg-white rounded-[3rem] p-12 shadow-sm border border-outline flex flex-col items-center text-center h-full">
                   <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-8 shadow-inner">
                      <LinkIcon className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-black text-on-surface mb-4 tracking-tight">Share Your Link</h4>
                   <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-60">
                      Share your unique referral link with friends via social media, text, or email.
                   </p>
                </div>
             </div>

             <div className="relative group md:mt-12">
                <div className="absolute -top-12 -left-6 text-[12rem] font-black text-primary/10 italic leading-none select-none group-hover:text-primary/20 transition-colors">2</div>
                <div className="relative bg-white rounded-[3rem] p-12 shadow-sm border border-outline flex flex-col items-center text-center h-full">
                   <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-8 shadow-inner">
                      <Gavel className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-black text-on-surface mb-4 tracking-tight">They File a Protest</h4>
                   <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-60">
                      Your friend uses your link to sign up and file their property tax protest with Andy.
                   </p>
                </div>
             </div>

             <div className="relative group">
                <div className="absolute -top-12 -left-6 text-[12rem] font-black text-primary/10 italic leading-none select-none group-hover:text-primary/20 transition-colors">3</div>
                <div className="relative bg-white rounded-[3rem] p-12 shadow-sm border border-outline flex flex-col items-center text-center h-full">
                   <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-8 shadow-inner">
                      <Trophy className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-black text-on-surface mb-4 tracking-tight">You Earn Rewards</h4>
                   <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-60">
                      Once their protest is officially Filed, you get rewarded with $50 credit.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* FAQ & ACTIVITY Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
           {/* FAQ Section */}
           <div className="lg:col-span-4 bg-white rounded-[4rem] p-12 border border-outline shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                    <Info className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-black text-on-surface tracking-tighter">Referral FAQ</h4>
              </div>
              
              <div className="space-y-4">
                {referralFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-outline last:border-0 pb-6">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-2 text-left group"
                    >
                      <span className="text-sm font-black text-on-surface group-hover:text-primary transition-colors pr-8 leading-tight">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-outline transition-transform shrink-0 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <p className="text-xs text-on-surface-variant font-medium opacity-60 mt-4 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
           </div>

           {/* Activity Ledger */}
           <div className="lg:col-span-8 bg-white rounded-[4rem] border border-outline shadow-sm overflow-hidden flex flex-col">
              <div className="p-12 border-b border-outline flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <HistoryIcon className="w-6 h-6 text-on-surface-variant" />
                    <h4 className="text-xl font-black text-on-surface tracking-tighter">Activity Ledger</h4>
                 </div>
              </div>
              <div className="overflow-x-auto flex-1">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-surface-variant/50">
                          <th className="px-12 py-6 text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Date</th>
                          <th className="px-12 py-6 text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Event Source</th>
                          <th className="px-12 py-6 text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 text-center">Amount</th>
                          <th className="px-12 py-6 text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 text-right">Balance</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-outline">
                       {wallet.history.map((tx) => (
                         <tr key={tx.id} className="hover:bg-primary/5 transition-colors group">
                            <td className="px-12 py-8 text-xs font-bold text-on-surface-variant/50">{tx.date}</td>
                            <td className="px-12 py-8 font-black text-on-surface text-sm group-hover:text-primary transition-colors">{tx.event}</td>
                            <td className={`px-12 py-8 text-center font-black text-sm ${tx.delta > 0 ? 'text-primary' : 'text-rose-500'}`}>
                               {tx.delta > 0 ? '+' : ''}${tx.delta.toFixed(2)}
                            </td>
                            <td className="px-12 py-8 text-right font-black text-on-surface text-sm">${tx.balance.toFixed(2)}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        <div className="mt-24 text-center">
           <button onClick={() => setShowTerms(true)} className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] hover:text-primary transition-all">
              Program Terms & Conditions
           </button>
        </div>

      </div>
    </div>
  );
};

export default ReferAndEarn;
