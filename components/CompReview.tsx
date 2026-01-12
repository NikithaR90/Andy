
import React from 'react';
import { X, MapPin, TrendingDown, Sparkles, ArrowUpRight } from 'lucide-react';

interface CompReviewProps {
  onClose: () => void;
}

const CompReview: React.FC<CompReviewProps> = ({ onClose }) => {
  const comps = [
    {
      address: "1204 East 7th St",
      price: "$485,000",
      sqft: "1,850",
      year: "2018",
      similarity: "98%",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400"
    },
    {
      address: "1311 San Marcos St",
      price: "$472,000",
      sqft: "1,790",
      year: "2019",
      similarity: "95%",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=400"
    },
    {
      address: "802 Neches St",
      price: "$498,000",
      sqft: "1,920",
      year: "2017",
      similarity: "92%",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-brand-deep/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-5xl rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-500 border border-white/10">
        <div className="p-10 border-b border-outline flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center p-1 border border-primary/20 shadow-lg">
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" className="w-full h-full object-contain" alt="Andy" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-on-surface tracking-tighter">Equity Comp Analysis</h3>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">Found 12 Matching Properties</p>
            </div>
          </div>
          <button onClick={onClose} className="p-4 hover:bg-surface-variant rounded-2xl transition-all"><X className="w-6 h-6" /></button>
        </div>

        <div className="p-10 overflow-y-auto custom-scrollbar flex-1">
          <div className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10 flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-2xl shrink-0 border border-primary/10">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <p className="text-on-surface-variant font-medium text-lg italic opacity-80 leading-relaxed">
              "I've identified these properties as your strongest evidence. They share similar architectural profiles but are assessed significantly lower per square foot."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comps.map((comp, i) => (
              <div key={i} className="group relative">
                <div className="h-full bg-white rounded-[2.5rem] border border-outline p-6 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative shadow-md">
                    <img src={comp.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={comp.address} />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-primary shadow-xl border border-primary/10">
                      {comp.similarity} Match
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-on-surface mb-2 tracking-tight">{comp.address}</h4>
                  <div className="flex items-center gap-2 text-on-surface-variant opacity-60 text-sm font-medium mb-6">
                    <MapPin className="w-4 h-4" /> Travis County District
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface-variant p-4 rounded-2xl">
                       <div className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Price</div>
                       <div className="font-black text-on-surface text-sm">{comp.price}</div>
                    </div>
                    <div className="bg-surface-variant p-4 rounded-2xl">
                       <div className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Sq Ft</div>
                       <div className="font-black text-on-surface text-sm">{comp.sqft}</div>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-brand-deep text-white font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
                    Include in Evidence <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-outline bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-on-surface-variant/40">
             <TrendingDown className="w-5 h-5" />
             <span className="text-[10px] font-black uppercase tracking-widest">Total Estimated Reduction: $1,420</span>
          </div>
          <button onClick={onClose} className="bg-primary hover:bg-andy-hover text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 transition-all active:scale-95">
            Accept All Evidence
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompReview;
