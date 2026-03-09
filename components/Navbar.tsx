'use client';

import { motion } from 'motion/react';
import { Sparkles, Search, ShoppingBag, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 md:px-12 py-4 flex items-center justify-between glass-card border-b border-primary/20 bg-white/50 backdrop-blur-md">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <Sparkles size={16} />
          </div>
          <span className="font-serif font-bold text-xl tracking-wide text-stone-900">SHOP.AI</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
          <Link href="/features" className="hover:text-primary-dark transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-primary-dark transition-colors">Pricing</Link>
          <Link href="/reviews" className="hover:text-primary-dark transition-colors">Reviews</Link>
          <Link href="/about" className="hover:text-primary-dark transition-colors">About Us</Link>
          <Link href="/blogs" className="hover:text-primary-dark transition-colors">Blogs</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative hidden md:block group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary-dark transition-colors" />
          <input 
            type="text" 
            placeholder="Search your aesthetic..." 
            className="pl-11 pr-4 py-2.5 bg-white/50 border border-primary/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 text-stone-800 placeholder:text-stone-400 transition-all backdrop-blur-sm"
          />
        </div>
        <Link href="/signin" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#ff5a1f] text-white rounded-full text-sm font-bold hover:bg-[#e04812] transition-colors shadow-md shadow-[#ff5a1f]/20">
          Get Started <ArrowRight size={16} />
        </Link>
        <Link href="/profile" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white overflow-hidden shadow-md shadow-primary/20 hover:scale-105 transition-transform shrink-0">
          <User size={18} />
        </Link>
      </div>
    </header>
  );
}
