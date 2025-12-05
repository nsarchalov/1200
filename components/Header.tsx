import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CarTaxiFront, Globe } from 'lucide-react';
import { NAV_LINKS_KEYS, COMPANY_PHONE } from '../constants';
import { Button } from './Button';
import { useLanguage } from '../LanguageContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'ru' ? 'ky' : 'ru');
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl transition-colors ${isScrolled ? 'bg-yellow-400 text-slate-900' : 'bg-yellow-400 text-slate-900'}`}>
              <CarTaxiFront size={26} strokeWidth={2.5} />
            </div>
            <a href="/" className="group">
               <div className={`text-2xl font-black tracking-tighter leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  1200<span className="text-yellow-400">.KG</span>
               </div>
               <div className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`}>
                  Partner
               </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS_KEYS.map((key) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className={`text-sm font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {/* @ts-ignore */}
                {t.nav[key]}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-1 font-bold uppercase text-sm px-2 py-1 rounded transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <Globe size={16} />
              {language === 'ru' ? 'KG' : 'RU'}
            </button>

            <Button 
               href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} 
               variant="primary" 
               className={`!py-2.5 !px-5 text-sm font-bold ${isScrolled ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {COMPANY_PHONE}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLang}
                className={`font-black uppercase text-sm px-2 py-1 rounded border ${isScrolled ? 'border-slate-200 text-slate-900' : 'border-white/20 text-white'}`}
            >
                {language === 'ru' ? 'KG' : 'RU'}
            </button>
            <button 
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col pt-32 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-6 flex flex-col">
            {NAV_LINKS_KEYS.map((key) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors border-b border-white/10 pb-4"
                onClick={handleNavClick}
              >
                {/* @ts-ignore */}
                {t.nav[key]}
              </a>
            ))}
            <div className="pt-6">
              <Button href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} fullWidth className="h-14 text-lg">
                <Phone className="w-5 h-5 mr-3" />
                {t.nav.call}
              </Button>
            </div>
          </div>
      </div>
    </header>
  );
};