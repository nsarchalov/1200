import React from 'react';
import { CarTaxiFront } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-yellow-400">
              <CarTaxiFront size={24} />
            </div>
            <span className="text-xl font-bold text-white">1200<span className="text-yellow-400">.kg</span></span>
          </div>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} 1200.kg. Все права защищены.</p>
          <p className="mt-1">Официальный партнер Яндекс Такси в Бишкеке.</p>
        </div>
      </div>
    </footer>
  );
};