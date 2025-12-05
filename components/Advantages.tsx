import React from 'react';
import { Section } from './Section';
import { Clock, Gift, Coins, Trophy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Advantages: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Clock, Coins, Trophy];

  return (
    <Section id="advantages" className="bg-slate-50 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text */}
        <div className="order-2 lg:order-1">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-bold text-xs uppercase tracking-wider mb-6">
              <Trophy size={14} />
              {t.advantages.title}
           </div>
           
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-[1.1]">
             {t.advantages.headline}
           </h2>
           
           <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
             {t.advantages.description}
           </p>

           <div className="space-y-8">
             {t.advantages.items.map((item, idx) => {
               const Icon = icons[idx];
               return (
                 <div key={idx} className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-yellow-500 shadow-sm border border-slate-100 flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors duration-300">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                 </div>
               );
             })}
           </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 relative">
           <div className="absolute inset-0 bg-yellow-400/20 rounded-[3rem] rotate-3 transform scale-105 blur-2xl opacity-50"></div>
           <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop" 
                alt="Happy Driver Team" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                 <div className="flex items-center gap-3">
                    <div className="flex -space-x-4">
                       <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt=""/>
                       <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt=""/>
                       <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt=""/>
                    </div>
                    <span className="text-white font-bold text-sm">+2500 водителей</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};