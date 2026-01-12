
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  isSolid?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled state or the isSolid prop to determine visual style
  const showScrolledStyle = scrolled || isSolid;

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
        showScrolledStyle 
          ? 'glass shadow-lg py-3 px-6 border-outline' 
          : 'bg-transparent py-4 px-2'
      }`}>
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={(e) => scrollToSection(e, '#')}
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 border border-outline">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png" 
                alt="Andy Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              showScrolledStyle ? 'text-on-surface' : 'text-white'
            }`}>
              Andy<span className="text-primary">App</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {!isSolid && navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  showScrolledStyle ? 'text-on-surface-variant' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={(e) => !isSolid && scrollToSection(e, '#')}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-andy-hover transition-all flex items-center space-x-2 active:scale-95 shadow-sm"
            >
              <span>{isSolid ? 'Briefing Active' : 'Client Login'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${showScrolledStyle ? 'text-on-surface hover:bg-surface-variant' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Glassmorphism */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-6 space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {!isSolid && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-lg font-semibold text-on-surface hover:text-primary transition-colors" 
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="w-full bg-primary text-on-primary px-5 py-3.5 rounded-xl font-bold text-base shadow-md active:scale-95 transition-transform"
            onClick={(e) => scrollToSection(e, '#')}
          >
            {isSolid ? 'Back to Dashboard' : 'Get Started'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
