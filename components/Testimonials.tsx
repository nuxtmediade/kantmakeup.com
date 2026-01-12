import React from 'react';
import { TESTIMONIALS } from '../constants';
import SectionHeading from './SectionHeading';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Client Love" 
          centered={false}
          subtitle="Stories from the women we've had the privilege to work with."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className={`flex-1 flex flex-col justify-between ${idx === 1 ? 'lg:mt-12' : idx === 2 ? 'lg:mt-24' : ''}`}
            >
              <div>
                <div className="text-6xl text-rose-100 font-serif mb-6">"</div>
                <p className="text-xl md:text-2xl font-serif text-stone-800 leading-normal mb-8">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm tracking-wide uppercase">{testimonial.name}</h4>
                  <span className="text-xs text-stone-400 tracking-wider">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;