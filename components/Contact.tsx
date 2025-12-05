import React from 'react';
import { Section } from './Section';
import { PHONE_1, PHONE_2, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="py-0 md:py-0">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="grid lg:grid-cols-2 gap-12 h-full">
             <div className="bg-white shadow-2xl rounded-b-3xl lg:rounded-3xl border border-slate-100 p-10 md:p-14 my-12 pointer-events-auto relative z-10">
                <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase">{t.contact.title}</h2>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-slate-50 text-slate-900 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.contact.office}</h4>
                      <p className="text-slate-600 text-lg">{t.contact.address}</p>
                      <p className="text-slate-400 mt-1">{t.contact.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-slate-50 text-slate-900 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.contact.phone}</h4>
                      <div className="flex flex-col">
                        <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="text-slate-600 hover:text-yellow-600 transition-colors block text-xl font-bold">
                            {PHONE_1}
                        </a>
                        <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="text-slate-600 hover:text-yellow-600 transition-colors block text-xl font-bold">
                            {PHONE_2}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-slate-50 text-slate-900 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.contact.schedule}</h4>
                      <p className="text-slate-600 text-lg">{t.contact.schedule_val}</p>
                      <p className="text-slate-400 mt-1">Без перерывов и выходных</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="w-full text-lg h-14 bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl">
                    <Phone className="w-5 h-5 mr-3" /> {t.contact.call_btn}
                  </Button>
                  <Button href={WHATSAPP_LINK} variant="whatsapp" className="w-full text-lg h-14">
                    <MessageCircle className="w-5 h-5 mr-3" /> {t.contact.wa_btn}
                  </Button>
                </div>
             </div>
          </div>
        </div>
        
        {/* Full width map background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.9774640166667!2d74.6075193!3d42.8522301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cd956329%3A0x6b49071c828230!2s62%20Yunusaliyev%20St%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1709633852999!5m2!1sen!2skg"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(85%)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};