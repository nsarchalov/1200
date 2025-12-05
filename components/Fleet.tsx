import React from 'react';
import { Section } from './Section';
import { CARS, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';
import { Check, Fuel, Settings, Gauge } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Fleet: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="fleet" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase">{t.fleet.title}</h2>
          <p className="text-xl text-slate-500">
            {t.fleet.subtitle}
          </p>
        </div>
        <div className="hidden md:block pb-2">
            <span className="inline-block h-1 w-24 bg-yellow-400 rounded-full"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CARS.map((car) => (
          <div key={car.id} className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
            {/* Image Section */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 z-20">
                {car.tag && (
                  <span className="bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    {car.tag}
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                 <h3 className="text-3xl font-bold text-white mb-1">{car.name}</h3>
                 <p className="text-slate-300 font-medium">Comfort +</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-3 rounded-xl text-center shadow-sm border border-slate-100">
                   <Fuel className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                   <div className="text-xs text-slate-500 font-semibold uppercase">{t.fleet.fuel}</div>
                   <div className="font-bold text-slate-900">Газ</div>
                </div>
                <div className="bg-white p-3 rounded-xl text-center shadow-sm border border-slate-100">
                   <Settings className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                   <div className="text-xs text-slate-500 font-semibold uppercase">{t.fleet.transmission}</div>
                   <div className="font-bold text-slate-900">Автомат</div>
                </div>
                <div className="bg-white p-3 rounded-xl text-center shadow-sm border border-slate-100">
                   <Gauge className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                   <div className="text-xs text-slate-500 font-semibold uppercase">{t.fleet.consumption}</div>
                   <div className="font-bold text-slate-900">Эконом</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                 <div>
                    <span className="block text-sm text-slate-500 font-bold uppercase tracking-wide">План</span>
                    <div className="flex items-baseline gap-1">
                       <span className="text-3xl font-black text-slate-900">{car.price}</span>
                       <span className="text-lg text-slate-600 font-medium">{t.fleet.price_suffix}</span>
                    </div>
                 </div>
                 <Button href={WHATSAPP_LINK} variant="primary" className="px-8">
                    {t.fleet.book}
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};