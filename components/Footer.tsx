'use client';

import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-primary/20 mt-12 relative overflow-hidden bg-white/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-10 opacity-60 hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
            <Sparkles size={12} />
          </div>
          <span className="font-serif font-bold text-sm tracking-widest text-stone-800">SHOP.AI</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-bold uppercase tracking-widest text-stone-500 mb-10">
          <a href="#" className="hover:text-primary-dark transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary-dark transition-colors">Terms</a>
          <a href="#" className="hover:text-primary-dark transition-colors">Sustainability</a>
          <a href="#" className="hover:text-primary-dark transition-colors">Contact</a>
        </div>
        <p className="text-xs text-stone-400 font-light tracking-wide">© 2024 SHOP.AI – All Rights Reserved. Powered by Intelligence.</p>
      </div>
    </footer>
  );
}
