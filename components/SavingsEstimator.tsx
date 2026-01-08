import React, { useState } from 'react';
import { estimatePropertySavings } from '../geminiService';
import { TrendingDown, Calculator, X, ChevronRight, CheckCircle, Shield, AlertCircle, Landmark } from 'lucide-react';

interface EstimatorProps {
  initialAddress: string;
  onClose: () => void;
}

const SavingsEstimator: React.FC<EstimatorProps> = ({ initialAddress, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  React.useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const result = await estimatePropertySavings(initialAddress);
        setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchEstimate();
  }, [initialAddress]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-brand-deep/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-500 border border-outline">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-lg transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {loading ? (
          <div className="p-16 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">Analyzing market potential...</h3>
              <p className="text-on-surface-variant text-sm px-10 leading-relaxed font-medium">Cross-referencing historical data for <span className="text-on-surface font-bold">{initialAddress}</span></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                <Calculator className="w-4 h-4" />
                <span>AI Projection Report</span>
              </div>
              
              <h3 className="text-3xl font-bold text-on-surface mb-1 leading-tight tracking-tight pr-10">{initialAddress}</h3>
              <p className="text-on-surface-variant text-base mb-10 font-medium">Automated savings estimation</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-variant p-6 rounded-xl border border-outline">
                  <span className="text-on-surface-variant font-bold uppercase tracking-wider text-[10px] block mb-2">Market Value Est.</span>
                  <span className="text-2xl font-bold text-on-surface">${data?.marketValue?.toLocaleString()}</span>
                </div>
                <div className="bg-on-primary-container p-6 rounded-xl border border-primary/20">
                  <span className="text-primary font-bold uppercase tracking-wider text-[10px] block mb-2">Projected Savings</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-primary">${data?.estimatedSavings?.toLocaleString()}</span>
                    <span className="text-primary/70 text-xs font-bold uppercase tracking-wider">/ yr</span>
                  </div>
                </div>
              </div>

              <div className="mb-10 p-5 rounded-xl bg-surface-variant/50 border border-outline flex gap-4">
                <div className="shrink-0 pt-1">
                  {data?.protestLikelihood === 'High' ? (
                    <div className="w-10 h-10 bg-andy-success rounded-lg flex items-center justify-center text-white shadow-sm">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold text-on-surface text-base">{data?.protestLikelihood} Success Likelihood</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-sm italic">
                    "{data?.analysis}"
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button className="flex-1 bg-primary hover:bg-andy-hover text-on-primary py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-primary/10">
                  <span>Start My Protest</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-surface-variant text-on-surface-variant font-semibold text-xs border border-outline">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  <span>No upfront payment</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsEstimator;