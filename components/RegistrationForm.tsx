import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../LanguageContext';
import { ChevronRight } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-md w-full border border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
        {t.form.title}
      </h2>
      
      <a 
        href="#conditions" 
        className="flex items-center gap-2 mb-6 text-slate-600 font-medium cursor-pointer hover:text-yellow-600 transition-colors group"
      >
        <div className="bg-yellow-100 p-1 rounded-full text-yellow-600 group-hover:bg-yellow-200 transition-colors">
             <ChevronRight size={16} />
        </div>
        <span className="text-sm underline decoration-slate-300 underline-offset-4 group-hover:decoration-yellow-400">{t.form.requirements}</span>
      </a>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">{t.form.name_label} *</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900 placeholder-slate-400"
            placeholder=""
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">{t.form.phone_label} *</label>
          <div className="relative">
             <input 
                type="tel" 
                defaultValue="+996"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900"
             />
             <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
             </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">{t.form.license_label}</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900"
          />
        </div>

        <div className="flex items-center gap-3 py-2">
            <input 
              type="checkbox" 
              id="need-car" 
              className="w-6 h-6 rounded-md border-2 border-slate-300 text-yellow-400 focus:ring-yellow-400 rounded cursor-pointer" 
            />
            <label htmlFor="need-car" className="text-slate-700 font-medium cursor-pointer select-none">
              {t.form.car_needed}
            </label>
        </div>

        <p className="text-xs text-slate-400 leading-tight">
           {t.form.consent}
        </p>

        <Button variant="primary" fullWidth className="text-lg font-bold py-4 rounded-xl shadow-yellow-400/50">
           {t.form.submit}
        </Button>
      </form>
    </div>
  );
};