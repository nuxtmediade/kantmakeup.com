import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Curated Services" 
          subtitle="Bespoke packages designed for your most memorable moments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                {service.tag && (
                  <span className="absolute top-6 left-6 bg-white/90 backdrop-blur text-stone-900 text-xs font-bold tracking-widest uppercase py-2 px-4 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 {/* Floating Price Pill */}
                 <div className="absolute -top-6 right-8 bg-stone-900 text-white py-3 px-6 rounded-full shadow-lg">
                    <span className="font-serif italic text-lg">{service.price}</span>
                 </div>

                <div className="mb-2">
                   {service.duration && (
                      <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
                        {service.duration}
                      </span>
                   )}
                </div>
                
                <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-stone-500 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <button className="w-full py-4 border border-stone-200 rounded-xl text-sm font-medium tracking-widest uppercase hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;