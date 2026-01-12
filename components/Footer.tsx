import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">KANT</h2>
            <p className="text-sm leading-relaxed mb-6 text-stone-400">
              Redefining beauty with professional artistry, premium products, and a personalized approach to every face we touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-rose-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-rose-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Bridal Packages</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Event Makeup</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Masterclasses</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Photoshoot Styling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6">Information</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">+1 (262) 294-6279</a></li>
              <li>
                <address>
                  7176 W APPLETON AVE, MILWAUKEE, WI, 53216
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Stay in the Know</h3>
            <p className="text-sm mb-4 text-stone-400">Subscribe for beauty tips and 10% off your first booking.</p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-500 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:border-rose-500 text-sm text-white placeholder-stone-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-rose-600 text-white py-3 rounded-lg font-medium hover:bg-rose-500 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} KANT Beauty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;