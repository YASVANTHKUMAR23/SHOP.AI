'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, SlidersHorizontal, CheckCircle2, Check, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf8] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUpVariants} className="bg-[#ffe8e0] text-[#ff5a1f] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff5a1f]"></div>
            PLATFORM UPDATE V2.4
          </motion.div>
          <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[#1a1a1a]">
            Every Feature,<br />
            <span className="text-[#ff5a1f]">Intentionally</span><br />
            Built
          </motion.h1>
          <motion.p variants={fadeUpVariants} className="text-lg text-stone-500 mb-8 max-w-lg leading-relaxed">
            Experience the next generation of AI-driven commerce where precision meets performance. We&apos;ve rebuilt the shopping experience from the ground up.
          </motion.p>
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 bg-[#ff5a1f] text-white rounded-lg font-semibold hover:bg-[#e04812] transition-colors shadow-lg shadow-[#ff5a1f]/20">
              Explore Architecture
            </button>
            <button className="px-6 py-3 bg-[#e8eaf0] text-stone-700 rounded-lg font-semibold hover:bg-[#d1d5e0] transition-colors">
              View Demo
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#e3f0e5] flex items-center justify-center p-8"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="https://picsum.photos/seed/plant/800/600" alt="Core Architecture" fill className="object-cover" unoptimized />
          </div>
        </motion.div>
      </section>

      {/* Pipeline Architecture */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-black mb-4 text-[#1a1a1a]"
          >
            The 3-Agent Pipeline Architecture
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-stone-500 mb-16 max-w-2xl mx-auto"
          >
            Our proprietary autonomous chain handles the heavy lifting from query to checkout.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[#ff5a1f]/30 to-transparent -translate-y-1/2 z-0"></div>

            {/* Agent 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Search Agent</h3>
              <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                Scans millions of products across thousands of stores in milliseconds to find perfect matches.
              </p>
              <div className="mt-auto text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase">
                Step 01: Discovery
              </div>
            </motion.div>

            {/* Agent 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-[#ff5a1f] relative z-10 flex flex-col items-center text-center transform md:-translate-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff5a1f] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#ff5a1f]/30">
                <SlidersHorizontal size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Comparison Agent</h3>
              <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                Aggregates specs, historical pricing, and verified reviews to weigh pros and cons dynamically.
              </p>
              <div className="mt-auto text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase">
                Step 02: Analysis
              </div>
            </motion.div>

            {/* Agent 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Decision Agent</h3>
              <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                Selects the single best option based on your preference profile and applies hidden coupons.
              </p>
              <div className="mt-auto text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase">
                Step 03: Execution
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 flex flex-col gap-32">
        
        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-stone-100 aspect-[4/3] shadow-xl"
          >
            <Image src="https://picsum.photos/seed/dashboard/800/600" alt="Live Data Stream" fill className="object-cover" unoptimized />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              Synchronized Commerce
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Live Data Stream
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              Prices and stock levels fluctuate every second. Our engine stays synced with over 50,000 retailers globally, ensuring you never click an &quot;Out of Stock&quot; button again.
            </motion.p>
            <motion.ul variants={fadeUpVariants} className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium text-stone-700">
                <div className="w-5 h-5 rounded-full bg-[#ff5a1f] flex items-center justify-center text-white shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                Sub-second price delta detection
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-stone-700">
                <div className="w-5 h-5 rounded-full bg-[#ff5a1f] flex items-center justify-center text-white shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                Global currency auto-conversion
              </li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              Autonomous Logic
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Multi-Stage Reasoning
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              Unlike simple filters, our 3-Agent pipeline reasons through trade-offs just like a professional personal shopper would, but at machine speed.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="bg-[#fff0eb] p-6 rounded-xl border-l-4 border-[#ff5a1f]">
              <p className="italic text-stone-700 text-sm leading-relaxed">
                &quot;The comparison agent found a lower price, but the decision agent noted the store has 15% lower shipping reliability, recommending the original choice instead.&quot;
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-[#45a29e] aspect-[4/3] shadow-xl flex items-center justify-center"
          >
            <Image src="https://picsum.photos/seed/cloud/800/600" alt="Cloud Reasoning" fill className="object-cover mix-blend-overlay opacity-50" unoptimized />
            <div className="text-white text-6xl font-black relative z-10 drop-shadow-lg">CLOUD</div>
          </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-[#fceae3] aspect-[4/3] shadow-xl flex items-center justify-center p-12"
          >
            <Image src="https://picsum.photos/seed/explain/800/600" alt="Explainable AI" fill className="object-cover opacity-60 mix-blend-multiply" unoptimized />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              No Black Boxes
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Explainable AI
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              Every recommendation comes with a &quot;Why This?&quot; breakdown. We show you the logic behind the choice, from price history to technical specs comparison.
            </motion.p>
            <motion.a variants={fadeUpVariants} href="#" className="inline-flex items-center gap-2 text-[#ff5a1f] font-bold text-sm hover:gap-3 transition-all">
              View Example Logic <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Feature 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              Instant Results
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Warp Speed Processing
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              Traditional search takes minutes of manual browsing. SHOP.AI delivers a curated list and a final decision in under 1.4 seconds on average.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex gap-8">
              <div className="bg-[#f4f7f9] p-4 rounded-xl flex-1">
                <div className="text-2xl font-black text-[#ff5a1f] mb-1">1.4s</div>
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Avg Response</div>
              </div>
              <div className="bg-[#f4f7f9] p-4 rounded-xl flex-1">
                <div className="text-2xl font-black text-[#ff5a1f] mb-1">50k+</div>
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Sources Scanned</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-stone-200 aspect-[4/3] shadow-xl"
          >
            <Image src="https://picsum.photos/seed/car/800/600" alt="Speed" fill className="object-cover" unoptimized />
          </motion.div>
        </div>

        {/* Feature 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-[#111827] aspect-[4/3] shadow-xl flex flex-col items-center justify-center text-white"
          >
            <ShieldCheck size={80} className="text-[#34d399] mb-6" strokeWidth={1} />
            <div className="text-4xl font-light tracking-widest">Security</div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              Bank-Grade Protection
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Privacy-First Checkout
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              We use ephemeral tokens for payments. Retailers never see your actual credit card or sensitive data. Your shopping profile is encrypted at rest and in transit.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a1a1a]">
                <Lock size={14} className="text-[#ff5a1f]" /> AES-256
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a1a1a]">
                <ShieldCheck size={14} className="text-[#ff5a1f]" /> SSL Secured
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants} className="text-[10px] font-bold tracking-widest text-[#ff5a1f] uppercase mb-4">
              Fairness Index
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
              Transparent Scoring
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-500 mb-8 leading-relaxed">
              Every product gets a &quot;Value Score&quot; from 1-100. This score is objectively calculated based on market averages, longevity reports, and genuine user sentiment.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ecfdf5] text-[#10b981] font-bold flex items-center justify-center text-lg border border-[#a7f3d0]">
                92
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a] text-sm">Great Value</div>
                <div className="text-xs text-stone-500">8% below average market price</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-[#fceae3] aspect-[4/3] shadow-xl flex items-center justify-center p-8"
          >
            <div className="w-full max-w-[240px] bg-white rounded-2xl shadow-2xl h-[320px] p-6 flex flex-col">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">SCORING</div>
              <div className="space-y-4">
                <div className="h-2 bg-stone-100 rounded-full w-full"></div>
                <div className="h-2 bg-stone-100 rounded-full w-5/6"></div>
                <div className="h-2 bg-stone-100 rounded-full w-4/6"></div>
              </div>
              <div className="mt-auto w-12 h-12 rounded-full bg-[#ff5a1f]/20 mx-auto flex items-center justify-center text-[#ff5a1f] font-bold text-sm">
                92
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#ff5a1f] py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to upgrade your shopping?
          </h2>
          <p className="text-[#ffe8e0] text-lg mb-10">
            Join 100,000+ shoppers using SHOP.AI to save time and money every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#ff5a1f] rounded-lg font-bold hover:bg-stone-100 transition-colors shadow-xl">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#fdfaf8] py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[#ff5a1f] rounded-full flex items-center justify-center text-white">
                  <Search size={12} />
                </div>
                <span className="font-black text-lg tracking-wide text-[#1a1a1a]">SHOP.AI</span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed mb-6">
                The world&apos;s most advanced AI-driven commerce platform. Built for the modern consumer.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#ff5a1f] hover:text-white transition-colors cursor-pointer">
                  <span className="text-xs font-bold">X</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#ff5a1f] hover:text-white transition-colors cursor-pointer">
                  <span className="text-xs font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-sm text-[#1a1a1a] mb-6">Product</h4>
              <ul className="space-y-4 text-xs text-stone-500">
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Chrome Extension</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm text-[#1a1a1a] mb-6">Company</h4>
              <ul className="space-y-4 text-xs text-stone-500">
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm text-[#1a1a1a] mb-6">Support</h4>
              <ul className="space-y-4 text-xs text-stone-500">
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#ff5a1f] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-200 text-center text-[10px] text-stone-400">
            © 2024 SHOP.AI Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
