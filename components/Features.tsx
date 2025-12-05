import React from 'react';
import { Section } from './Section';
import { FEATURES } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="features" className="bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          {t.features.title_pre} <span className="text-yellow-500">{t.features.title_highlight}</span> {t.features.title_post}
        </h2>
        <p className="text-xl text-slate-600">
          {t.features.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
            >
              <div className="flex items-center justify-between mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-yellow-400 group-hover:text-slate-900 flex items-center justify-center transition-colors duration-300">
                   <Icon size={28} strokeWidth={2} />
                 </div>
                 <span className="text-6xl font-black text-slate-100 group-hover:text-slate-50 transition-colors select-none">
                    0{idx + 1}
                 </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};