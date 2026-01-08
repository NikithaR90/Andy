
import React, { useState } from 'react';
import { 
  Copy, 
  QrCode, 
  Share2, 
  Zap, 
  ChevronRight, 
  Link as LinkIcon, 
  Gavel, 
  Trophy,
  ArrowLeft
} from 'lucide-react';

const ReferAndEarn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'activity' | 'rewards'>('activity');

  const rewardsActivity = [
    { source: 'Referral: John D.', date: 'Oct 26, 2023', amount: 50.00, status: 'Available', type: 'credit' },
    { source: 'Protest Fee Credit', date: 'Sep 15, 2023', amount: -25.00, status: 'Redeemed', type: 'debit' },
    { source: 'Referral: Jane S.', date: 'Aug 01, 2023', amount: 50.00, status: 'Available', type: 'credit' },
    { source: 'Welcome Bonus', date: 'Jul 20, 2023', amount: 75.00, status: 'Available', type: 'credit' },
    { source: 'Early Sign-up Credit', date: 'Jun 05, 2023', amount: -25.00, status: 'Expired', type: 'debit' },
  ];

  return (
    <section id="refer" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button className="p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-on-surface">
            <span className="text-primary">Refer</span> and <span className="text-primary">Earn</span>
          </h1>
          <div className="w-10"></div> {/* Spacer for symmetry */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Earn Card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[2.5rem] p-10 bg-gradient-to-br from-[#E6FFE6] via-[#F0FDF4] to-[#FFFBEB] border border-outline shadow-sm">
            <div className="relative z-10">
              <span className="text-primary font-bold text-lg mb-2 block">Earn</span>
              <h2 className="text-6xl font-black text-primary mb-6">$50 Credits</h2>
              <p className="text-on-surface-variant text-sm mb-10 max-w-sm font-medium">
                For each friend who successfully protests their property tax with us.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white rounded-2xl border border-outline flex items-center px-4 py-3 shadow-sm">
                  <input 
                    readOnly 
                    value="andy.com/invite/a1b2c3d4" 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface text-sm font-medium"
                  />
                  <button className="bg-primary hover:bg-andy-hover text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all">
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </button>
                </div>
                <button className="p-3 bg-white border border-outline rounded-2xl hover:bg-surface-variant transition-colors shadow-sm">
                  <QrCode className="w-5 h-5 text-on-surface" />
                </button>
                <button className="p-3 bg-white border border-outline rounded-2xl hover:bg-surface-variant transition-colors shadow-sm">
                  <Share2 className="w-5 h-5 text-on-surface" />
                </button>
              </div>
            </div>
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* Stats & Badges Column */}
          <div className="space-y-6">
            {/* Referrals Stats Card */}
            <div className="bg-white border border-outline rounded-[2rem] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-on-surface">128</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Total Referrals</div>
                </div>
                <div className="w-px h-10 bg-outline"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">2</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Successful</div>
                </div>
              </div>
              <div className="w-full bg-surface-variant h-2.5 rounded-full overflow-hidden mb-3">
                <div className="bg-primary h-full w-[15%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-center text-on-surface-variant font-medium leading-relaxed">
                3 more successful referrals to unlock the 'Influencer' badge!
              </p>
            </div>

            {/* Badges Card */}
            <div className="bg-white border border-outline rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-sm font-bold text-on-surface mb-6">Your Badges</h3>
              <div className="flex justify-between items-center gap-2">
                {[
                  { name: 'Starter', icon: '🥉', color: 'text-amber-700' },
                  { name: 'Connector', icon: '🥈', color: 'text-slate-400' },
                  { name: 'Influencer', icon: '🥇', color: 'text-yellow-500' },
                  { name: 'Champion', icon: '🏆', color: 'text-purple-600' }
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-xl shadow-inner ${i > 1 ? 'opacity-40 grayscale' : ''}`}>
                      {badge.icon}
                    </div>
                    <span className={`text-[10px] font-bold ${i > 1 ? 'text-on-surface-variant' : 'text-primary'}`}>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Total Rewards Summary Bar */}
        <div className="bg-[#F7F8FA] border border-outline rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-outline">
              <Zap className="w-6 h-6 text-primary fill-primary" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Total Rewards Summary</div>
              <div className="text-3xl font-black text-on-surface">$150.00</div>
            </div>
          </div>
          <div className="text-[11px] font-medium text-on-surface-variant max-w-[240px] text-center md:text-right">
            Credits are automatically applied to your eligible transactions at checkout.
          </div>
        </div>

        {/* Rewards Activity Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex p-1.5 bg-surface-variant rounded-full border border-outline">
              <button 
                onClick={() => setActiveTab('activity')}
                className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === 'activity' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Rewards Activity
              </button>
              <button 
                onClick={() => setActiveTab('rewards')}
                className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === 'rewards' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                My Rewards
              </button>
            </div>

            <div className="flex items-center gap-2">
              {['All', 'Available', 'Redeemed', 'Expired'].map((filter) => (
                <button 
                  key={filter} 
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all ${filter === 'All' ? 'bg-primary border-primary text-white' : 'bg-white border-outline text-on-surface-variant hover:border-primary'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-outline overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-variant border-b border-outline">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Reward Source</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">Date Earned</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">Amount</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline">
                  {rewardsActivity.map((row, i) => (
                    <tr key={i} className="hover:bg-surface-variant/30 transition-colors">
                      <td className="px-8 py-5 text-sm font-bold text-on-surface">{row.source}</td>
                      <td className="px-8 py-5 text-sm font-medium text-on-surface-variant text-center">{row.date}</td>
                      <td className={`px-8 py-5 text-sm font-black text-center ${row.amount > 0 ? 'text-primary' : 'text-red-500'}`}>
                        {row.amount > 0 ? '+' : '-'}${Math.abs(row.amount).toFixed(2)}
                      </td>
                      <td className="px-8 py-5 text-right">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          row.status === 'Available' ? 'bg-on-primary-container text-primary' :
                          row.status === 'Redeemed' ? 'bg-surface-variant text-on-surface-variant' :
                          'bg-red-50 text-red-400'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-on-surface mb-3">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-on-surface-variant font-medium">Invite Friends, Get Rewarded</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step Numbers Background */}
            <div className="hidden lg:block">
              <div className="absolute top-0 left-[5%] text-[10rem] font-black text-primary/5 leading-none">1</div>
              <div className="absolute top-0 left-[40%] text-[10rem] font-black text-primary/5 leading-none">2</div>
              <div className="absolute top-0 right-[5%] text-[10rem] font-black text-primary/5 leading-none">3</div>
            </div>

            {[
              { 
                step: 1, 
                title: 'Share Your Link', 
                desc: 'Share your unique referral link with friends via social media or messengers.', 
                icon: <LinkIcon className="w-6 h-6 text-white" />, 
                bg: 'bg-orange-400' 
              },
              { 
                step: 2, 
                title: 'They File a Protest', 
                desc: 'Your friend uses your link to sign up and file their property tax protest.', 
                icon: <Gavel className="w-6 h-6 text-white" />, 
                bg: 'bg-orange-500' 
              },
              { 
                step: 3, 
                title: 'You Earn Rewards', 
                desc: 'Once their protest is Filed, you get rewarded with 50$ credits.', 
                icon: <Trophy className="w-6 h-6 text-white" />, 
                bg: 'bg-orange-600' 
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-white border border-outline rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 shadow-lg rotate-12`}>
                  <div className="-rotate-12">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-4">{item.title}</h4>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-andy-hover transition-all">
              Terms and Conditions
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferAndEarn;
