import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-4xl md:text-5xl font-serif font-medium mb-6 tracking-tight ${light ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed ${light ? 'text-stone-200' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;