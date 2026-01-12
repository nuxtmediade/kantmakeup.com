import React, { useState } from 'react';
import { FAQS } from '../constants';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about our products and mission."
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-rose-200 bg-rose-50/10' : 'bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-rose-600' : 'text-stone-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 text-stone-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-rose-500' : ''}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-stone-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;