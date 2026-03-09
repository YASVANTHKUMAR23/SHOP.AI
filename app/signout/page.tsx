'use client';

import { motion } from 'motion/react';
import { ShoppingBag, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function SignOutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      {/* Minimal Header */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ffe0d4] rounded-lg flex items-center justify-center text-[#111827]">
            <ShoppingBag size={16} />
          </div>
          <span className="font-black text-lg tracking-wide text-[#111827]">SHOP.AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#111827]">
          <Link href="/features" className="hover:text-[#ff5a1f] transition-colors">Shop</Link>
          <Link href="/pricing" className="hover:text-[#ff5a1f] transition-colors">Deals</Link>
          <Link href="/about" className="hover:text-[#ff5a1f] transition-colors">Support</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-[#fff0eb] rounded-full flex items-center justify-center text-[#111827] mb-8 shadow-sm">
            <LogOut size={32} strokeWidth={2.5} className="ml-2" />
          </div>
          
          <div className="text-[#ff5a1f] text-xs font-bold tracking-widest uppercase mb-4">Session Ended</div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111827] mb-6 leading-[1.1]">
            You have been signed out.<br />See you again soon!
          </h1>
          
          <p className="text-stone-500 mb-12 leading-relaxed">
            Thank you for shopping with us. Your account is secure and your preferences are saved for your next visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link href="/signin" className="w-full sm:w-auto px-8 py-3.5 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors">
              Sign In Again
            </Link>
            <Link href="/" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-stone-200 text-[#111827] rounded-xl font-bold text-sm hover:bg-stone-50 transition-colors">
              Go to Home
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-8 text-center">
        <div className="flex items-center justify-center gap-6 text-xs font-bold text-stone-500 mb-4">
          <a href="#" className="hover:text-[#111827] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#111827] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#111827] transition-colors">Help Center</a>
        </div>
        <div className="text-[10px] text-stone-400 uppercase tracking-widest">
          © 2024 SHOP.AI. Built with intelligence for your style.
        </div>
      </footer>
    </div>
  );
}
