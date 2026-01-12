import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-stone-850 text-white hover:bg-stone-700 focus:ring-stone-850 shadow-lg hover:shadow-xl",
    secondary: "bg-rose-100 text-stone-900 hover:bg-rose-200 focus:ring-rose-200",
    outline: "border-2 border-stone-850 text-stone-850 hover:bg-stone-50 focus:ring-stone-850",
    white: "bg-white text-stone-900 hover:bg-gray-100 focus:ring-white shadow-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;