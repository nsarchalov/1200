import React from 'react';
import { Section } from './Section';
import { REQUIREMENTS } from '../constants';
import { FileText, UserCheck, Key } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Requirements: React.FC = () => {
  const { t } = useLanguage();

  const STEPS_ICONS = [UserCheck, FileText, Key];

  return (
    <Section id="conditions" className="bg-slate-900 text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
        <div className="lg:col-span-5">
           <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
                {t.requirements.title_1} <br/><span className="text-yellow-400">{t.requirements.title_2}</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                {t.requirements.subtitle}
              </p>
              
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
                 <h4 className="flex items-center gap-3 text-xl font-bold mb-4">
                    <FileText className="text-yellow-400" />
                    {t.requirements.docs_title}
                 </h4>
                 <ul className="space-y-4">
                    {REQUIREMENTS.map((req, idx) => (
                        <li key={req.id} className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                           </div>
                           <span className="text-slate-300">{req.text}</span>
                        </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
           {t.requirements.steps.map((step, idx) => {
             const Icon = STEPS_ICONS[idx];
             return (
               <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 flex gap-6 hover:border-yellow-400/50 transition-colors duration-300">
                   <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 text-slate-900">
                      <Icon size={32} />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-lg">{step.desc}</p>
                   </div>
               </div>
             )
           })}
        </div>
      </div>
    </Section>
  );
};