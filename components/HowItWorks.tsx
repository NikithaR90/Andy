
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
          <div className="hidden lg:block absolute top-[52px] left-[15%] w-[70%] h-[1.5px] bg-outline/50 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="relative mb-10 transition-all duration-500 group-hover:scale-110">
                  {/* Icon Container: Soft Squircle based on screenshot */}
                  <div className="w-28 h-28 bg-white text-primary shadow-[0_12px_30px_-5px_rgba(0,0,0,0.08)] rounded-[2.5rem] flex items-center justify-center border border-outline/30 group-hover:border-primary/20 group-hover:shadow-primary/10 transition-all duration-500">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { 
                      strokeWidth: 2, 
                      className: "w-11 h-11" 
                    })}
                  </div>
                  
                  {/* Badge: Circular dark background with white number */}
                  <div className="absolute -top-1 -right-1 w-9 h-9 bg-[#111827] text-white rounded-full flex items-center justify-center font-bold text-sm border-[4px] border-white shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                
                <h4 className="text-2xl font-black text-on-surface mb-4 tracking-tighter text-center">{step.title}</h4>
                <p className="text-center text-on-surface-variant text-sm leading-relaxed px-6 font-medium opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
