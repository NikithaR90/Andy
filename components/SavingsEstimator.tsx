
import React, { useState, useEffect } from 'react';
import { estimatePropertySavings } from '../geminiService';
import { 
  TrendingDown, 
  Calculator, 
  X, 
  ChevronRight, 
  CheckCircle, 
  AlertCircle, 
  Home, 
  Key, 
  Compass, 
  LogIn,
  Zap,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Map as MapIcon,
  Skull,
  Activity,
  DollarSign,
  Lock,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  BarChart3,
  Percent,
  History,
  Info
} from 'lucide-react';

interface EstimatorProps {
  initialAddress: string;
  onClose: () => void;
  onLoginSuccess: (data: any) => void;
}

type UserRole = 'owner' | 'renter' | 'explorer';
type FlowStep = 'role-selection' | 'analyzing' | 'results' | 'securing' | 'sign-in' | 'final-success';

const SavingsEstimator: React.FC<EstimatorProps> = ({ initialAddress, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState<FlowStep>('role-selection');
  const [role, setRole] = useState<UserRole | null>(null);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'financials' | 'safety' | 'neighborhood'>('financials');
  const [loadingText, setLoadingText] = useState('Initializing Andy-Brain...');

  useEffect(() => {
    if (step === 'analyzing') {
      const texts = [
        "Initializing Andy-Brain...",
        "Querying Central Appraisal District...",
        "Scraping GIS parcel boundaries...",
        "Extracting 10-year valuation trends...",
        "Benchmarking neighborhood tax rates...",
        "Calculating statistical variance...",
        "Finalizing intel briefing dossier..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setLoadingText(texts[i]);
      }, 700);
      return () => clearInterval(interval);
    }
  }, [step]);

  const startAnalysis = async (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep('analyzing');
    try {
      const result = await estimatePropertySavings(initialAddress, selectedRole);
      setData(result);
      setTimeout(() => setStep('results'), 4000);
    } catch (e) {
      console.error(e);
      setStep('results');
    }
  };

  const initiateAuth = () => {
    setStep('securing');
    setTimeout(() => setStep('sign-in'), 1200);
  };

  const handleAuthCallback = (provider: string) => {
    setStep('final-success');
  };

  const handleGoToDashboard = () => {
    onLoginSuccess({ ...data, address: initialAddress });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-brand-deep/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-surface w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-500 border border-outline flex flex-col max-h-[90vh]">
        
        {/* Header (Exact Style from Image) */}
        <div className="p-7 md:p-9 border-b border-outline flex items-center justify-between shrink-0 bg-white sticky top-0 z-20">
          <div className="flex items-center space-x-5">
            {step !== 'role-selection' && step !== 'analyzing' && step !== 'final-success' && (
              <button 
                onClick={() => setStep(step === 'sign-in' ? 'results' : 'role-selection')}
                className="p-2 -ml-2 hover:bg-surface-variant rounded-xl text-on-surface-variant transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <div className="w-16 h-16 rounded-[1.25rem] bg-[#E8F5E9] flex items-center justify-center border border-[#C8E6C9] p-2">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" 
                className="w-full h-full object-contain" 
                alt="Andy"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-[1.85rem] font-[900] text-[#111827] leading-none tracking-tight">
                {step === 'sign-in' ? 'Secure Login' : "Andy's Intel Briefing"}
              </h3>
              <p className="text-[0.7rem] md:text-[0.75rem] font-[800] text-[#94A3B8] uppercase tracking-[0.1em] mt-2.5">
                PROPERTY ANALYSIS: {initialAddress}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-surface-variant px-4 py-2 rounded-full border border-outline">
               <div className="w-2 h-2 rounded-full bg-andy-success animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Live Data Link</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-2xl transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar bg-[#F8FAFC]">
          {/* Step 1: Role Selection */}
          {step === 'role-selection' && (
            <div className="p-10 md:p-16 bg-white h-full">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4 border border-primary/20">
                   <MessageCircle className="w-3 h-3 text-primary" />
                   <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Context Discovery</span>
                </div>
                <h3 className="text-3xl font-black text-on-surface mb-3 tracking-tighter">"I'm ready when you are!"</h3>
                <p className="text-on-surface-variant font-medium text-base opacity-70">Statistical modeling requires context. What's your connection to this address?</p>
              </div>

              <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                {[
                  { id: 'owner', label: 'I own this home', icon: <Home className="w-6 h-6" />, desc: 'Deep-dive into tax saving vectors and GIS security logs.' },
                  { id: 'renter', label: 'I rent here', icon: <Key className="w-6 h-6" />, desc: 'Energy efficiency metrics and historical safety records.' },
                  { id: 'explorer', label: 'Property Explorer', icon: <Compass className="w-6 h-6" />, desc: 'General market velocity and neighborhood liquidity.' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => startAnalysis(item.id as UserRole)}
                    className="flex items-center gap-6 p-8 rounded-[2rem] bg-white border-2 border-outline hover:border-primary hover:bg-primary/5 transition-all text-left group shadow-sm hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-surface-variant rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors p-3">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-black text-on-surface mb-0.5 tracking-tight">{item.label}</div>
                      <div className="text-sm text-on-surface-variant font-medium opacity-60">{item.desc}</div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Analyzing */}
          {step === 'analyzing' && (
            <div className="p-16 flex flex-col items-center justify-center space-y-12 min-h-[500px] bg-white">
              <div className="relative">
                <div className="w-40 h-40 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 p-3 bg-white rounded-[2rem] shadow-2xl border border-outline floating">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                   </div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-black text-on-surface tracking-tighter">{loadingText}</h3>
                <div className="flex justify-center gap-2">
                   {[0,1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{animationDelay: `${i*0.15}s`}}></div>)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md w-full">
                 <div className="bg-surface-variant p-4 rounded-2xl border border-outline flex items-center gap-3">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">648 Data Points</span>
                 </div>
                 <div className="bg-surface-variant p-4 rounded-2xl border border-outline flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Real-time sync</span>
                 </div>
              </div>
            </div>
          )}

          {/* Step 3: Results (Enhanced Data) */}
          {step === 'results' && (
            <div className="p-8 pb-32">
              {/* Statistical Summary Bar */}
              <div className="bg-white rounded-[2.5rem] border border-outline p-8 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <BarChart3 className="w-32 h-32 text-primary" />
                 </div>
                 <div className="flex items-center gap-6 relative z-10">
                    <div className="w-20 h-20 bg-[#E8F5E9] rounded-[1.5rem] flex items-center justify-center border border-[#C8E6C9] p-2 shrink-0">
                       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                    </div>
                    <div>
                       <h4 className="text-2xl font-black text-on-surface tracking-tighter">Analysis Confirmed</h4>
                       <p className="text-sm font-medium text-on-surface-variant opacity-60">"I've computed a 9.2% valuation variance for your property."</p>
                    </div>
                 </div>
                 <div className="flex gap-4 relative z-10">
                    <div className="text-center px-6 border-r border-outline">
                       <div className="text-3xl font-black text-primary">$1,420</div>
                       <div className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-40">Est. Delta</div>
                    </div>
                    <div className="text-center px-6">
                       <div className="text-3xl font-black text-on-surface">94%</div>
                       <div className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-40">Confidence</div>
                    </div>
                 </div>
              </div>

              {/* Enhanced Tab Navigation */}
              <div className="flex bg-white p-2 rounded-[2rem] border border-outline mb-8 shadow-sm">
                <button 
                  onClick={() => setActiveTab('financials')}
                  className={`flex-1 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${activeTab === 'financials' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-variant'}`}
                >
                  <DollarSign className="w-4 h-4" />
                  Tax Financials
                </button>
                <button 
                  onClick={() => setActiveTab('neighborhood')}
                  className={`flex-1 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${activeTab === 'neighborhood' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-variant'}`}
                >
                  <MapIcon className="w-4 h-4" />
                  Neighborhood Comps
                </button>
                <button 
                  onClick={() => setActiveTab('safety')}
                  className={`flex-1 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${activeTab === 'safety' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-variant'}`}
                >
                  <ShieldAlert className="w-4 h-4" />
                  Risk Intel
                </button>
              </div>

              {activeTab === 'financials' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: 'Market Value', val: `$${data?.marketValue?.toLocaleString()}`, sub: '+4.2% YoY' },
                      { label: 'Assessed Value', val: `$${data?.assessedValue?.toLocaleString()}`, sub: 'Cap: 10%' },
                      { label: 'Projected Tax', val: `$${data?.totalTaxBill?.toLocaleString()}`, sub: 'Rate: 2.15%' },
                      { label: 'Est. Savings', val: `$${data?.estimatedSavings?.toLocaleString()}`, sub: 'High Potential', highlight: true }
                    ].map((stat, i) => (
                      <div key={i} className={`p-6 rounded-[2rem] border border-outline shadow-sm ${stat.highlight ? 'bg-primary text-white' : 'bg-white'}`}>
                        <div className={`text-[9px] font-black uppercase tracking-widest mb-1 ${stat.highlight ? 'text-white/60' : 'text-on-surface-variant opacity-40'}`}>{stat.label}</div>
                        <div className="text-2xl font-black mb-1">{stat.val}</div>
                        <div className={`text-[9px] font-bold ${stat.highlight ? 'text-white/40' : 'text-primary'}`}>{stat.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tax Jurisdiction Breakdown */}
                  <div className="bg-white rounded-[2.5rem] border border-outline p-10">
                     <div className="flex items-center gap-3 mb-8">
                        <Percent className="w-5 h-5 text-primary" />
                        <h5 className="font-black text-lg tracking-tighter">Jurisdictional Tax Breakdown</h5>
                     </div>
                     <div className="space-y-6">
                        {[
                           { name: 'AUSTIN ISD', pct: 48, amt: '$4,704' },
                           { name: 'CITY OF AUSTIN', pct: 24, amt: '$2,352' },
                           { name: 'TRAVIS COUNTY', pct: 18, amt: '$1,764' },
                           { name: 'ACC & CENTRAL HEALTH', pct: 10, amt: '$980' },
                        ].map((tax, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                 <span className="text-on-surface">{tax.name}</span>
                                 <span className="text-on-surface-variant">{tax.amt} ({tax.pct}%)</span>
                              </div>
                              <div className="h-3 bg-surface-variant rounded-full overflow-hidden">
                                 <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${tax.pct}%` }}></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-brand-deep rounded-[2.5rem] p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles className="w-24 h-24" /></div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center p-1 border border-primary/20">
                         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                      </div>
                      <h4 className="font-black text-xl tracking-tighter">Andy's Professional Analysis</h4>
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed font-medium italic mb-8">
                      "Your assessment has outpaced the neighborhood median by 8.4%. By challenging the school district component, we can drive your bill back down to the block average."
                    </p>
                    <div className="flex items-center justify-between py-6 border-t border-white/5">
                      <div className="flex items-center gap-2">
                         <CheckCircle2 className="w-4 h-4 text-primary" />
                         <span className="text-xs font-black uppercase tracking-widest">Protest Recommendation: High</span>
                      </div>
                      <div className="bg-primary px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Verified Evidence Ready</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'neighborhood' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Valuation Benchmark */}
                  <div className="bg-white rounded-[2.5rem] border border-outline p-10">
                     <div className="flex items-center justify-between mb-10">
                        <div>
                           <h5 className="font-black text-xl tracking-tighter">Neighborhood Valuation Benchmark</h5>
                           <p className="text-xs font-medium text-on-surface-variant opacity-60">Price per Square Foot Comparison</p>
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-black text-primary">$242/sqft</div>
                           <div className="text-[9px] font-black uppercase tracking-widest opacity-40">Your Property</div>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 bg-surface-variant rounded-[2rem] border border-outline text-center">
                           <div className="text-2xl font-black text-on-surface mb-1">$218</div>
                           <div className="text-[9px] font-black uppercase tracking-widest opacity-40">Neighborhood Median</div>
                        </div>
                        <div className="p-8 bg-surface-variant rounded-[2rem] border border-outline text-center">
                           <div className="text-2xl font-black text-on-surface mb-1">11%</div>
                           <div className="text-[9px] font-black uppercase tracking-widest opacity-40">Positive Variance</div>
                        </div>
                        <div className="p-8 bg-surface-variant rounded-[2rem] border border-outline text-center">
                           <div className="text-2xl font-black text-primary">$18.4k</div>
                           <div className="text-[9px] font-black uppercase tracking-widest opacity-40">Market Overvaluation</div>
                        </div>
                     </div>

                     <div className="mt-12 h-40 flex items-end justify-between gap-4">
                        {[40, 65, 85, 45, 95, 75, 55, 60, 35, 50].map((h, i) => (
                           <div key={i} className="flex-1 group relative">
                              <div className={`w-full rounded-t-xl transition-all duration-500 group-hover:bg-primary/40 ${i === 4 ? 'bg-primary h-[95%]' : 'bg-outline h-[' + h + '%]'}`} style={{ height: `${h}%` }}></div>
                              {i === 4 && <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[9px] font-black px-2 py-1 rounded">YOU</div>}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Comp Table */}
                  <div className="bg-white rounded-[2.5rem] border border-outline overflow-hidden shadow-sm">
                     <div className="p-10 border-b border-outline">
                        <h5 className="font-black text-xl tracking-tighter">Statistical Comparables (Comps)</h5>
                        <p className="text-xs font-medium text-on-surface-variant opacity-60">GIS proximity match within 0.5 miles</p>
                     </div>
                     <table className="w-full text-left">
                        <thead>
                           <tr className="bg-surface-variant/50">
                              <th className="px-10 py-5 text-[9px] font-black uppercase tracking-widest opacity-40">Address</th>
                              <th className="px-10 py-5 text-[9px] font-black uppercase tracking-widest opacity-40 text-center">Match %</th>
                              <th className="px-10 py-5 text-[9px] font-black uppercase tracking-widest opacity-40 text-right">Assessed Val</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-outline">
                           {[
                              { addr: '1204 East 7th St', match: '98%', val: '$432,000' },
                              { addr: '1311 San Marcos St', match: '95%', val: '$428,500' },
                              { addr: '802 Neches St', match: '92%', val: '$445,000' },
                           ].map((comp, i) => (
                              <tr key={i} className="hover:bg-primary/5 transition-colors group">
                                 <td className="px-10 py-6 text-sm font-black text-on-surface">{comp.addr}</td>
                                 <td className="px-10 py-6 text-sm font-black text-primary text-center">{comp.match}</td>
                                 <td className="px-10 py-6 text-sm font-black text-on-surface text-right">{comp.val}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-outline text-center shadow-sm">
                      <div className="text-4xl font-black text-on-surface mb-2">{data?.safety?.crimeScore}/100</div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Safety Efficiency Index</div>
                      <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                         <div className="h-full bg-andy-success rounded-full" style={{ width: `${data?.safety?.crimeScore}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-outline text-center shadow-sm">
                      <div className="text-4xl font-black text-andy-success mb-2">{data?.safety?.neighborhoodSafetyRating}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Historical Grade</div>
                      <p className="text-[10px] font-bold text-on-surface-variant opacity-60">94th Percentile Statewide</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-outline text-center shadow-sm">
                      <div className="text-4xl font-black text-red-500 mb-2">{data?.safety?.offenderCount}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">GIS Proximity Alerts</div>
                      <p className="text-[10px] font-bold text-red-500/60 uppercase tracking-widest">Actionable Intel</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-[2.5rem] border border-outline p-10">
                     <div className="flex items-center gap-3 mb-8">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <h5 className="font-black text-xl tracking-tighter">Security Incident History (Last 12 Months)</h5>
                     </div>
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                           { label: 'Theft/Burglary', val: '2.4', unit: 'per 1k pop' },
                           { label: 'Assault Risk', val: '0.8', unit: 'per 1k pop' },
                           { label: 'Emergency Response', val: '4.2', unit: 'min avg' },
                           { label: 'Street Lighting', val: '98%', unit: 'coverage' },
                        ].map((stat, i) => (
                           <div key={i} className="bg-surface-variant p-6 rounded-2xl border border-outline">
                              <div className="text-2xl font-black text-on-surface mb-1">{stat.val}</div>
                              <div className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 mb-1">{stat.label}</div>
                              <div className="text-[9px] font-bold text-primary">{stat.unit}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-red-50/50 border border-red-100 p-10 rounded-[2.5rem]">
                    <h5 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
                       Detailed Safety Log
                    </h5>
                    <p className="text-lg text-on-surface-variant leading-relaxed font-medium italic opacity-80">
                       "{data?.safety?.safetyReport}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Securing / Sign-In */}
          {step === 'securing' && (
            <div className="p-16 flex flex-col items-center justify-center min-h-[500px] space-y-8 bg-white h-full">
              <div className="w-24 h-24 p-3 bg-white rounded-[2rem] shadow-2xl border border-outline floating">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-on-surface tracking-tighter mb-2">Securing Your Space</h3>
                <p className="text-on-surface-variant font-medium text-base opacity-70">"One second! I'm verifying our secure connection to the Texas Property Database."</p>
              </div>
              <div className="flex gap-2">
                 {[0,1,2].map(i => <div key={i} className="w-3 h-3 rounded-full bg-primary/20 animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
              </div>
            </div>
          )}

          {step === 'sign-in' && (
            <div className="p-10 md:p-16 flex flex-col items-center min-h-[500px] bg-white h-full">
              <div className="mb-10 text-center">
                 <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl p-2 border border-primary/20">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                 </div>
                 <h3 className="text-3xl font-black text-on-surface mb-3 tracking-tighter">Ready to join the family?</h3>
                 <p className="text-on-surface-variant font-medium text-base opacity-70">"I just need to know who I'm working for. Sign in to lock this analysis to your account."</p>
              </div>
              
              <div className="w-full max-w-sm space-y-4">
                <button 
                  onClick={() => handleAuthCallback('Google')}
                  className="w-full bg-white border border-outline p-5 rounded-2xl font-black text-sm flex items-center justify-center gap-4 hover:bg-surface-variant transition-all hover:shadow-lg"
                >
                  <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
                  Continue with Google
                </button>
                <button 
                  onClick={() => handleAuthCallback('Apple')}
                  className="w-full bg-black text-white p-5 rounded-2xl font-black text-sm flex items-center justify-center gap-4 hover:opacity-90 transition-all hover:shadow-lg"
                >
                  <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.3-114.2-21.7-142.1zM263 102c40.3-48.4 34.4-96.1 31.8-102-47.9 2-88 28.5-104.9 50.4-30.8 38.6-26.3 84.1-23.7 93 49.3 1.2 83.1-25.5 96.8-41.4z"/></svg>
                  Continue with Apple
                </button>
                
                <div className="relative py-8">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline"></div></div>
                  <div className="relative flex justify-center"><span className="bg-surface px-6 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] opacity-40">Identity Proofing</span></div>
                </div>

                <div className="space-y-4">
                  <input type="email" placeholder="Your best email" className="w-full bg-surface-variant p-5 rounded-2xl border-2 border-transparent focus:border-primary outline-none font-bold text-sm" />
                  <button 
                    onClick={() => handleAuthCallback('Email')}
                    className="w-full bg-primary text-on-primary p-5 rounded-2xl font-black text-sm hover:bg-andy-hover transition-all shadow-xl shadow-primary/20"
                  >
                    Send Secure Magic Link
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Final Success */}
          {step === 'final-success' && (
            <div className="p-16 md:p-24 text-center space-y-12 bg-white h-full flex flex-col items-center justify-center">
              <div className="relative inline-block">
                 <div className="w-32 h-32 bg-andy-success/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-700">
                    <div className="w-20 h-20 p-2 bg-white rounded-3xl shadow-2xl border-2 border-andy-success/20">
                       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-andy-success/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter">We're verified!</h3>
                <p className="text-on-surface-variant font-medium text-xl max-w-sm mx-auto leading-relaxed opacity-70 italic">
                  "I've got your dossier ready. Let's head to the dashboard so we can start building your 2026 defense case."
                </p>
              </div>

              <button 
                onClick={handleGoToDashboard}
                className="w-full max-w-sm bg-brand-deep text-white py-6 rounded-[2rem] font-black text-xl hover:bg-on-surface transition-all shadow-2xl"
              >
                Enter My Briefing Room
              </button>
            </div>
          )}
        </div>

        {/* Action Bar (Sticky for Results) */}
        {step === 'results' && (
          <div className="absolute bottom-0 left-0 right-0 p-8 pt-0 z-30 pointer-events-none">
             <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 pointer-events-auto">
                <button 
                  onClick={initiateAuth}
                  className="flex-1 bg-primary hover:bg-andy-hover text-on-primary py-6 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_-10px_rgba(17,152,34,0.5)] border-2 border-white"
                >
                  <span>{role === 'owner' ? "Unlock My $1,420 Savings Dossier" : "Access Complete Neighborhood Dossier"}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsEstimator;
