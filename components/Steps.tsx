import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../LanguageContext';
import { ClipboardList, Download, CarFront } from 'lucide-react';

export const Steps: React.FC = () => {
  const { t } = useLanguage();

  const icons = [ClipboardList, Download, CarFront];

  return (
    <Section id="steps" className="bg-white">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">
          {t.steps.title}
        </h2>
        <p className="text-xl text-slate-500">
          {t.steps.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.steps.items.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div key={idx} className="relative group">
              {/* Connector Line (Desktop) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-slate-100 -z-10 group-hover:bg-yellow-100 transition-colors duration-500"></div>
              )}
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-50 hover:border-yellow-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 mb-8 relative shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-500">
                   <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white">
                      {item.id}
                   </div>
                   <Icon size={40} strokeWidth={2} className="animate-pulse-slow" />
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};