import { Feature, Requirement, Car } from './types';
import { Fuel, CarFront, Wrench, CircleDollarSign } from 'lucide-react';

export const PHONE_1 = "0 500 110 320";
export const PHONE_2 = "0 556 110 320";
export const COMPANY_PHONE = PHONE_1; 
export const WHATSAPP_LINK = "https://wa.me/996500110320"; 

// Updated nav keys: removed 'features', kept steps, advantages, conditions, contact
export const NAV_LINKS_KEYS = ['steps', 'advantages', 'conditions', 'contact'];

export const FEATURES: Feature[] = [
  {
    id: 'price',
    title: 'Выгодный план',
    description: 'Фиксированная стоимость плана 1200 сом в сутки. Честные условия.',
    icon: CircleDollarSign
  },
  {
    id: 'gas',
    title: 'Экономия на топливе',
    description: 'Все автомобили оборудованы газовым оборудованием (ГБО).',
    icon: Fuel
  },
  {
    id: 'repair',
    title: 'Обслуживание парка',
    description: 'Ремонт, замена масла и сезонная резина — полностью наша забота.',
    icon: Wrench
  },
  {
    id: 'condition',
    title: 'Лучшие условия',
    description: 'Моментальные выплаты, свободный график, много заказов.',
    icon: CarFront
  }
];

export const REQUIREMENTS: Requirement[] = [
  { id: 'passport', text: 'Паспорт (ID)' },
  { id: 'license', text: 'Водительское удостоверение' },
  { id: 'age', text: 'Стаж от 3 лет' },
  { id: 'deposit', text: 'Депозит' },
];

export const CARS: Car[] = [];