
import React from 'react';
import { ShieldCheck, Zap, UserCheck, BarChart3, ArrowUpRight } from 'lucide-react';

interface FeaturesProps {
  onExplore: (id: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onExplore }) => {
  const features = [
    {
      id: 'advisor',
      title: 'Virtual Tax Advisor',
      desc: 'Sophisticated AI that reviews and challenges assessments with pinpoint accuracy.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      id: 'filing',
      title: 'Effortless Filing',
      desc: 'Zero paperwork. We handle the entire protest submission and follow-up automatically.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      id: 'monitoring',
      title: 'Real-time Monitoring',
      desc: 'Stay informed with instant alerts on your property value and protest status changes.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 'evidence',
      title: 'Data-Driven Evidence',
      desc: 'Powered by billions of data points to build an airtight case for your savings.',
      icon: <BarChart3 className="w-6 h-6" />,
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-primary mr-3"></span>
              The Andy Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-on-surface mb-6 tracking-tight">
              A smarter way to manage <br />
              <span className="text-on-surface-variant">your property taxes.</span>
            </h3>
          </div>
          <p className="text-base text-on-surface-variant max-w-sm mb-1 leading-relaxed">
            Andy combines cutting-edge AI with human tax expertise to ensure you never pay more than your fair share.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative">
              <div 
                className="h-full p-8 rounded-2xl bg-surface-variant border border-outline hover:border-primary/30 hover:bg-white transition-all duration-300 card-shadow cursor-pointer"
                onClick={() => onExplore(f.id)}
              >
                <div className={`w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-3 tracking-tight">{f.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{f.desc}</p>
                <div 
                  className="flex items-center text-primary text-xs font-bold group/link cursor-pointer uppercase tracking-wider mt-auto"
                >
                  <span>Explore detail</span>
                  <ArrowUpRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
