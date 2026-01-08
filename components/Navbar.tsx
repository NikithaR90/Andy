
import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#about' },
    { name: 'Refer & Earn', href: '#refer' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-4 md:px-8`}
    >
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-lg py-3 px-6 border-outline' 
          : 'bg-transparent py-4 px-2'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-primary p-2 rounded-lg shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Landmark className="text-on-primary w-5 h-5" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-on-surface' : 'text-white'
            }`}>
              Andy<span className="text-primary">App</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  scrolled ? 'text-on-surface-variant' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-andy-hover transition-all flex items-center space-x-2 active:scale-95 shadow-sm">
              <span>Client Login</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-on-surface hover:bg-surface-variant' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Glassmorphism */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-6 space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-lg font-semibold text-on-surface hover:text-primary transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-primary text-on-primary px-5 py-3.5 rounded-xl font-bold text-base shadow-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
