import { Card } from '@/components/ui/card';
import {
  Calculator,
  FlaskConical,
  Globe,
  HeartPulse,
  Landmark,
  Palette,
} from 'lucide-react';
import React from 'react';

const iconMap = {
  Matematicas: Calculator,
  Artes: Palette,
  Ciencias: FlaskConical,
  'Ciencias Sociales': Globe,
  Gobierno: Landmark,
  Medicina: HeartPulse,
};

const colorMap = {
  Matematicas: 'bg-blue-50 text-blue-600',
  Artes: 'bg-purple-50 text-purple-600',
  Ciencias: 'bg-green-50 text-green-600',
  'Ciencias Sociales': 'bg-orange-50 text-orange-600',
  Gobierno: 'bg-red-50 text-red-600',
  Medicina: 'bg-pink-50 text-pink-600',
};

const CardHome = ({ category, title, description }) => {
  console.log(category, iconMap[category]);
  const Icon = iconMap[category];
  const colorClass = colorMap[category];
  return (
    // <article className=" border-[0.5px] shadow-md group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-secondaryOrange cursor-pointer h-72 w-56 rounded-md overflow-hidden ">
    <Card className="h-72 w-56">
      <div className=" h-full w-full px-3 py-2 rounded-sm bg-opacity-70 hover:bg-opacity-20 transition-all duration-700">
        <div className="flex gap-3">
          <div className={`${colorClass}`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-black ">{category}</span>
        </div>
        <div className="h-[90%] gap-2 flex flex-col justify-end items-start">
          <h4 className="text-lg text-black">{title}</h4>
          <p className="text-base text-black">{description}</p>
        </div>
      </div>
    </Card>
    // </article>
  );
};

export default CardHome;
