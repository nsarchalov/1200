import React from 'react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';
import { RegistrationForm } from './RegistrationForm';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex items-center pt-24 md:pt-20 overflow-hidden bg-slate-900">
      {/* Dynamic Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Taxi background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-400 text-sm font-black uppercase tracking-wider mb-8 backdrop-blur-sm">
               <ShieldCheck size={18} />
               {t.hero.partner}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1] mb-6 md:mb-8">
              {t.hero.title_1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                {t.hero.title_2}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed font-light border-l-4 border-yellow-500 pl-6">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
              <Button href={WHATSAPP_LINK} variant="primary" className="h-14 md:h-16 px-8 md:px-10 text-lg font-bold shadow-yellow-400/20">
                <MessageCircle className="w-6 h-6 mr-2" />
                {t.hero.whatsapp}
              </Button>
              <Button 
                href="#conditions" 
                variant="glass" 
                className="h-14 md:h-16 px-8 md:px-10 text-lg"
              >
                {t.hero.details}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Form visual */}
          <div className="flex justify-center lg:justify-end">
             <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};