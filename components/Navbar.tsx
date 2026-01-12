import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-serif font-bold tracking-widest ${scrolled ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
          KANT
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`text-sm font-medium hover:text-rose-400 transition-colors ${scrolled ? 'text-stone-600' : 'text-white/90'}`}
            >
              {link.label}
            </a>
          ))}
          <Button variant={scrolled ? 'primary' : 'white'} className="!py-2 !px-6 text-xs">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className={`${scrolled ? 'text-stone-900' : 'text-stone-900'} p-2`}>
             <Calendar className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-stone-900' : 'text-stone-900'} focus:outline-none`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-stone-800 text-lg font-medium hover:text-rose-500"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button fullWidth onClick={() => setIsOpen(false)}>
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;