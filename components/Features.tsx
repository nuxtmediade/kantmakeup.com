import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
           <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-stone-900">
               The KANT Philosophy
             </h2>
             <p className="text-lg text-stone-500 font-light">
               We believe beauty is an art form, and your face is the canvas. Our approach is grounded in three core principles.
             </p>
           </div>
           <div className="hidden md:block">
              <span className="text-rose-400 font-serif italic text-xl">Since 2024</span>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`group p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2
                ${index === 0 ? 'bg-stone-900 text-white md:col-span-2' : 'bg-stone-50 text-stone-900'}
                ${index === 3 ? 'md:col-span-2 bg-rose-50' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-full ${index === 0 ? 'bg-white/10 text-white' : 'bg-white text-stone-900 shadow-sm'}`}>
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className={`text-sm font-medium tracking-widest uppercase opacity-50 ${index === 0 ? 'text-white' : 'text-stone-900'}`}>
                  0{index + 1}
                </span>
              </div>
              
              <h3 className={`text-2xl font-serif font-medium mb-4 ${index === 0 ? 'text-white' : 'text-stone-900'}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${index === 0 ? 'text-stone-300' : 'text-stone-500'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;