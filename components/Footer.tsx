import React from 'react';
import { Landmark, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deep text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-primary p-2 rounded-lg">
                <Landmark className="text-on-primary w-5 h-5" />
              </div>
              <span className="text-2xl font-bold">Andy<span className="text-primary">App</span></span>
            </div>
            <p className="text-on-primary-container/50 leading-relaxed mb-8 text-sm font-medium max-w-xs">
              Empowering Texas homeowners with AI-driven property tax protests. Fair assessments for every property, guaranteed.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest">About</h4>
            <ul className="space-y-4">
              {['How it works', 'Pricing', 'FAQs', 'Affiliate Program', 'Refer a Friend'].map((item) => (
                <li key={item}><a href="#" className="text-on-primary-container/40 hover:text-primary transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="text-on-primary-container/40 hover:text-primary transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-on-primary-container/40 text-sm font-medium">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>marketing@theandyapp.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>(512) 956-1160</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>(469) 748-4860</span>
              </li>
              <li className="pt-6">
                <div className="bg-white/5 p-4 rounded-xl flex items-center space-x-4 border border-white/5">
                  <div className="bg-white p-1 rounded-md">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=40x40&data=AndyApp" alt="QR Code" className="w-10 h-10" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Scan for <br />mobile app</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs text-on-primary-container/30 font-bold uppercase tracking-[0.2em]">
          <p>© 2024 The Andy App. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;