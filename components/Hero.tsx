import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional makeup artist applying makeup" 
          className="w-full h-full object-cover scale-105 animate-[fadeIn_1.5s_ease-out]"
        />
        {/* Modern refined overlay: subtle gradient for readability without killing the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-rose-200"></div>
             <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-medium text-rose-100">
               Est. 2024
             </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-medium leading-tight mb-8 text-white">
            Beauty, <br />
            <span className="italic font-light text-rose-100">Curated.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-lg font-light leading-relaxed">
            Elevating your natural radiance with bespoke artistry and premium care. 
            Experience makeup that feels as good as it looks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="white" className="!px-10 !py-4 text-sm tracking-widest uppercase">
              Book Appointment
            </Button>
            <Button variant="outline" className="!px-10 !py-4 text-sm tracking-widest uppercase !text-white !border-white/30 hover:!bg-white/10 hover:!border-white hover:!text-white backdrop-blur-sm">
              Our Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;