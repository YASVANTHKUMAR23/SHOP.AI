'use client';

import Image from 'next/image';
import { Search, ShoppingBag, User, Sparkles, Clock, ArrowRight, Activity, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const floatingVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.5,
    }
  })
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden mesh-gradient text-stone-900 selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 max-w-[90rem] mx-auto w-full px-6 md:px-12 pb-12 lg:pb-24 pt-4 lg:pt-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] text-stone-900 tracking-tight">
            Stop <span className="italic text-primary-dark font-light">Comparing.</span><br />
            Start <span className="italic text-primary-dark font-light relative inline-block mt-2">
              Deciding.
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full blur-sm"></div>
            </span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mt-8 max-w-xl">
            <p className="text-xl md:text-2xl text-stone-800 font-medium leading-snug mb-4">
              AI that analyzes products, reviews, and prices across multiple marketplaces — and recommends the best choice instantly.
            </p>
            <p className="text-base text-stone-500 leading-relaxed font-light">
              Online shopping is full of noise: endless reviews, conflicting ratings, and too many options. SHOP.AI analyzes real product data, compares specifications, evaluates user reviews, and delivers one clear recommendation with transparent reasoning.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-10">
            <button className="group px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-800 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-stone-900/20">
              Start Smart Comparison
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-card text-stone-900 rounded-full font-semibold hover:bg-white/60 transition-all duration-300">
              See How It Works
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full max-w-md h-px bg-gradient-to-r from-primary/40 to-transparent mt-16 mb-8"></motion.div>
        </motion.div>

        {/* Right Column - Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square max-w-[650px] mx-auto lg:ml-auto mt-12 lg:mt-0 order-1 lg:order-2 flex items-center justify-center"
        >
          {/* Concentric Circles Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[100%] h-[100%] rounded-full border border-primary/20 absolute animate-[spin_40s_linear_infinite] border-dashed"></div>
            <div className="w-[80%] h-[80%] rounded-full border border-primary/30 absolute animate-pulse"></div>
            <div className="w-[60%] h-[60%] rounded-full border border-primary/40 absolute"></div>
            {/* Glowing Orb */}
            <div className="absolute w-[50%] h-[50%] bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          </div>

          {/* Center Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[55%] h-[55%] rounded-full overflow-hidden shadow-2xl shadow-primary/20 z-10 border-4 border-white/50 bg-white/80 backdrop-blur-sm"
          >
            <Image 
              src="https://png.pngtree.com/png-vector/20241022/ourmid/pngtree-boy-thinking-png-image_14133097.png" 
              alt="Thinking Boy" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply pointer-events-none"></div>
          </motion.div>

          {/* Floating Cards */}
          {/* Top Left - Watch */}
          <motion.div
            custom={1}
            variants={floatingVariants}
            animate="animate"
            className="absolute top-[-2%] left-[0%] w-[30%] z-20"
          >
            <div className="glass-card p-3 rounded-[1.5rem] shadow-xl rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white">
                <Image src="https://smartphones24.org/wp-content/uploads/2025/04/samsung-galaxy-s26-ultra-2-1024x576.webp" alt="Galaxy S26 Ultra" fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="mt-3 mb-1 text-center">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-800">Galaxy S26 Ultra</h3>
                <p className="text-[9px] italic text-primary-dark mt-0.5 font-serif">Titanium Design</p>
              </div>
            </div>
          </motion.div>

          {/* Top Right - Bag */}
          <motion.div
            custom={2}
            variants={floatingVariants}
            animate="animate"
            className="absolute top-[2%] right-[2%] w-[28%] z-20"
          >
            <div className="glass-card p-3 rounded-[1.5rem] shadow-xl rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                <Image src="https://assets.gadgetandgear.com/upload/media/samsung-galaxy-s26-ultra-gold444.png" alt="Galaxy S26 Ultra Gold" fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="mt-3 mb-1 text-center">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-800">Titanium Gold</h3>
                <p className="text-[9px] italic text-primary-dark mt-0.5 font-serif">Premium Finish</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left - Silk */}
          <motion.div
            custom={3}
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-[-2%] left-[5%] w-[30%] z-20"
          >
            <div className="glass-card p-3 rounded-[1.5rem] shadow-xl rotate-[10deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white">
                <Image src="https://www.techspecs.info/_next/image/?url=https:%2F%2Fwww.techspecs.info%2Fuploads%2FSAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png&w=3840&q=75" alt="Galaxy S26 Ultra 5G" fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="mt-3 mb-1 text-center">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-800">S-Pen Integration</h3>
                <p className="text-[9px] italic text-primary-dark mt-0.5 font-serif">Ultimate Productivity</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right - Glasses */}
          <motion.div
            custom={4}
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-[2%] right-[2%] w-[30%] z-20"
          >
            <div className="glass-card p-3 rounded-[1.5rem] shadow-xl rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white">
                <Image src="https://bacakoran.co/upload/42b8fe5172108aa18c03a3e71f2e2777.png" alt="Galaxy S26 Ultra Render" fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="mt-3 mb-1 text-center">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-800">Next-Gen Camera</h3>
                <p className="text-[9px] italic text-primary-dark mt-0.5 font-serif">Pro-Grade Lenses</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>

      {/* Infinite Marquee */}
      <div className="w-full py-8 border-y border-primary/20 bg-white/20 backdrop-blur-md overflow-hidden flex relative z-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-stone-800"><Sparkles size={14} className="text-primary-dark"/> Real-Time Analysis</span>
              <span className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-stone-800"><Sparkles size={14} className="text-primary-dark"/> Unbiased Recommendations</span>
              <span className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-stone-800"><Sparkles size={14} className="text-primary-dark"/> Smart Price Tracking</span>
              <span className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-stone-800"><Sparkles size={14} className="text-primary-dark"/> Aesthetic Matching</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid - How it Works */}
      <section className="max-w-[90rem] mx-auto w-full px-6 md:px-12 py-24 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-6">Intelligence at Work</h2>
          <p className="text-stone-500 text-lg font-light">How our AI cuts through the noise to find your perfect match.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 glass-card rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-1000"></div>
            <Activity size={32} className="text-primary-dark mb-6" />
            <h3 className="font-serif text-3xl text-stone-900 mb-3">Deep Data Analysis</h3>
            <p className="text-stone-600 font-light max-w-md">We scan thousands of verified reviews, technical specifications, and historical pricing data across the web in milliseconds.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-stone-900/5 rounded-full blur-[40px] transition-transform group-hover:scale-150 duration-1000"></div>
            <BarChart3 size={32} className="text-stone-800 mb-6" />
            <h3 className="font-serif text-3xl text-stone-900 mb-3">Smart Comparison</h3>
            <p className="text-stone-600 font-light">Weighing pros, cons, and hidden trade-offs instantly.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 glass-card rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-primary/10 rounded-full blur-[50px] transition-transform group-hover:scale-y-150 duration-1000"></div>
            <div className="max-w-xl relative z-10">
              <CheckCircle2 size={32} className="text-primary-dark mb-6" />
              <h3 className="font-serif text-3xl text-stone-900 mb-3">The Final Verdict</h3>
              <p className="text-stone-600 font-light text-lg">No more analysis paralysis. We deliver one clear, definitive recommendation tailored to your exact needs, backed by transparent reasoning.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-stone-900/20">
                Try it now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-[90rem] mx-auto w-full px-6 md:px-12 py-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Curated for Your Essence</h2>
            <p className="text-stone-500 mt-4 text-lg font-light">AI-driven selections based on your visual history.</p>
          </div>
          <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-dark border-b-2 border-primary-dark pb-1 hover:text-stone-900 hover:border-stone-900 transition-colors">
            View Collection
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden glass-card p-2">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image src="https://picsum.photos/seed/architecture/600/800" alt="The Sculptural Series" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Hover Reveal Content */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 shadow-2xl">
                  <p className="text-xs font-bold text-stone-900 tracking-widest uppercase">The Sculptural Series</p>
                  <p className="text-[11px] text-primary-dark font-serif italic mt-1.5">Spring 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden glass-card p-2">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image src="https://picsum.photos/seed/texture/600/800" alt="Monochrome Palette" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Hover Reveal Content */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 shadow-2xl">
                  <p className="text-xs font-bold text-stone-900 tracking-widest uppercase">Monochrome Palette</p>
                  <p className="text-[11px] text-primary-dark font-serif italic mt-1.5">Essential Layering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden glass-card p-2">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image src="https://picsum.photos/seed/minimal/600/800" alt="Object Intelligence" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Hover Reveal Content */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 shadow-2xl">
                  <p className="text-xs font-bold text-stone-900 tracking-widest uppercase">Object Intelligence</p>
                  <p className="text-[11px] text-primary-dark font-serif italic mt-1.5">Smart Living</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-primary/20 mt-12 relative overflow-hidden">
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
    </div>
  );
}
