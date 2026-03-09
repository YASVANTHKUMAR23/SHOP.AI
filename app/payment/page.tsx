'use client';

import { motion } from 'motion/react';
import { Shield, Lock, CreditCard, Zap, CheckCircle2, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      {/* Minimal Header */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between bg-white border-b border-stone-100">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center text-white">
            <Shield size={16} />
          </div>
          <span className="font-black text-lg tracking-wide text-[#111827]">SHOP.AI Pro</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#111827]">
          <Link href="/" className="hover:text-[#ff5a1f] transition-colors">Home</Link>
          <Link href="/features" className="hover:text-[#ff5a1f] transition-colors">Features</Link>
          <Link href="/about" className="hover:text-[#ff5a1f] transition-colors">Support</Link>
          <div className="w-8 h-8 rounded-full overflow-hidden relative bg-stone-200 border border-stone-200">
            <Image src="https://picsum.photos/seed/alex-avatar/100/100" alt="User" fill className="object-cover" unoptimized />
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 py-12 lg:py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight text-[#111827] mb-3">Secure Payment</h1>
          <p className="text-stone-500">Complete your subscription to unlock premium features.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Summary */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100"
            >
              <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-6">Summary</div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#fff0eb] rounded-xl flex items-center justify-center text-[#ff5a1f]">
                  <Zap size={24} className="fill-[#ff5a1f]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] text-lg">Pro Plan</h3>
                  <div className="text-sm text-stone-500">Monthly Subscription</div>
                </div>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-stone-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="font-medium text-[#111827]">₹299.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-500">Tax (0%)</span>
                  <span className="font-medium text-[#111827]">₹0.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-[#111827] text-lg">Total Due</span>
                <span className="font-black text-[#111827] text-2xl">₹299.00</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="font-bold text-[#111827] text-sm mb-0.5">SSL SECURE</div>
                <div className="text-xs text-stone-500">Your data is fully encrypted</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <div className="font-bold text-[#111827] text-sm mb-0.5">PCI COMPLIANT</div>
                <div className="text-xs text-stone-500">Global security standards</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Payment Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-100"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#111827] mb-2">Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full px-4 py-3.5 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827] placeholder:text-stone-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#111827] mb-2">Card Number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full px-4 py-3.5 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827] placeholder:text-stone-400 transition-all font-mono"
                  />
                  <CreditCard size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#111827] mb-2">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full px-4 py-3.5 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827] placeholder:text-stone-400 transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#111827] mb-2">CVV</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="***" 
                      className="w-full px-4 py-3.5 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827] placeholder:text-stone-400 transition-all font-mono"
                    />
                    <HelpCircle size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  </div>
                </div>
              </div>

              <button type="button" className="w-full py-4 mt-4 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors shadow-sm flex items-center justify-center gap-2">
                <Lock size={16} />
                Complete Payment
              </button>

              <div className="flex items-center justify-center gap-6 pt-6 opacity-50">
                <span className="font-black italic text-lg tracking-tighter">VISA</span>
                <span className="font-bold italic text-lg tracking-tight">MasterCard</span>
                <span className="font-bold italic text-lg tracking-tight">RuPay</span>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="w-full py-8 border-t border-stone-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-stone-500">
            © 2024 SHOP.AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-stone-500">
            <a href="#" className="hover:text-[#111827] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#111827] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
