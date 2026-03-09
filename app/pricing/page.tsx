'use client';

import { motion } from 'motion/react';
import { Check, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] mb-6"
          >
            Flexible Plans for Everyone
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-stone-500"
          >
            Choose the plan that fits your needs. Scale as you grow with our transparent pricing and dedicated support for teams of all sizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Free</h3>
            <p className="text-stone-500 text-sm mb-8 h-10">Perfect for individuals just getting started.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-[#111827]">₹0</span>
              <span className="text-stone-500 font-medium">/mo</span>
            </div>
            <button className="w-full py-3.5 bg-stone-50 text-[#111827] rounded-xl font-bold text-sm hover:bg-stone-100 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 flex-1">
              {['Basic features access', '1 Active User', '5GB Shared Storage', 'Community Forum Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-stone-200/50 border-2 border-[#ffe0d4] flex flex-col relative transform md:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffe0d4] text-[#111827] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Pro</h3>
            <p className="text-stone-500 text-sm mb-8 h-10">Advanced features for power users.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-[#111827]">₹299</span>
              <span className="text-stone-500 font-medium">/mo</span>
            </div>
            <button className="w-full py-3.5 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors mb-8">
              Try Pro Free
            </button>
            <ul className="space-y-4 flex-1">
              {['All Basic features included', 'Unlimited Projects', '50GB Cloud Storage', 'Priority Email Support', 'Advanced Analytics'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-2">Enterprise</h3>
            <p className="text-stone-500 text-sm mb-8 h-10">Custom solutions for large organizations.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-[#111827]">Custom</span>
              <span className="text-stone-500 font-medium">Pricing</span>
            </div>
            <button className="w-full py-3.5 bg-stone-50 text-[#111827] rounded-xl font-bold text-sm hover:bg-stone-100 transition-colors mb-8">
              Contact Sales
            </button>
            <ul className="space-y-4 flex-1">
              {['Dedicated Account Manager', 'Full API Access & Webhooks', 'Custom SSO Integration', 'Unlimited Storage', '99.9% Uptime SLA'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100">
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                <h4 className="font-bold text-[#111827]">Can I cancel my subscription?</h4>
                <ChevronDown size={16} className="text-[#ff5a1f] rotate-180" />
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">
                Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of the current billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100 flex items-center justify-between cursor-pointer">
              <h4 className="font-bold text-[#111827]">What payment methods do you accept?</h4>
              <ChevronDown size={16} className="text-[#ff5a1f]" />
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100 flex items-center justify-between cursor-pointer">
              <h4 className="font-bold text-[#111827]">Is there a free trial for the Pro plan?</h4>
              <ChevronDown size={16} className="text-[#ff5a1f]" />
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100 flex items-center justify-between cursor-pointer">
              <h4 className="font-bold text-[#111827]">Do you offer discounts for non-profits?</h4>
              <ChevronDown size={16} className="text-[#ff5a1f]" />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 border-t border-stone-200 bg-white mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ff5a1f] rounded-full opacity-50"></div>
            <span className="font-black text-sm tracking-wide text-[#111827]">SHOP.AI</span>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-medium text-stone-500">
            <a href="#" className="hover:text-[#111827] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#111827] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#111827] transition-colors">Help Center</a>
          </div>

          <div className="text-xs text-stone-400">
            © 2024 SHOP.AI Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
