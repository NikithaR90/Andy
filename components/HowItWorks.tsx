import React from 'react';
import { Home, Search, FileText, Activity } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: 'Add Property', desc: 'Enter property using ZIP or address to locate your home details instantly.', icon: <Home /> },
    { title: 'Review Details', desc: 'See current county assessments and identify hidden overpayments.', icon: <Search /> },
    { title: 'File Protest', desc: 'Prepare and submit your protest with Andy\'s automated AI toolkit.', icon: <FileText /> },
    { title: 'Track Progress', desc: 'Monitor your status and watch your savings materialize.', icon: <Activity /> },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Our Simple Process</h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-on-surface mb-4 tracking-tight">Save in <span className="text-primary">four easy steps.</span></h3>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto font-medium">We take the complexity out of property tax protests so you can focus on what matters.</p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] w-[76%] h-[2px] bg-outline z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="relative mb-8 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-20 h-20 bg-primary text-on-primary shadow-lg rounded-2xl flex items-center justify-center border-4 border-on-primary-container">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-on-surface text-surface rounded-lg flex items-center justify-center font-bold text-sm border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-3 tracking-tight">{step.title}</h4>
                <p className="text-center text-on-surface-variant text-sm leading-relaxed px-2 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;