'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, SlidersHorizontal, ShoppingCart, Eye, Zap, ShieldCheck } from 'lucide-react';
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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf8] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#0a0f16] flex items-center justify-center p-8 border border-stone-800"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/500')] opacity-20 mix-blend-luminosity bg-cover bg-center"></div>
            <div className="w-32 h-32 border-4 border-[#00f5ff] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(0,245,255,0.4)] relative z-10 bg-[#0a0f16]/80 backdrop-blur-sm">
              <span className="text-5xl font-black text-[#00f5ff] tracking-widest">AI</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-[#1a1a1a]">
            Our Mission:<br />
            Making Shopping<br />
            Smarter
          </motion.h1>
          <motion.p variants={fadeUpVariants} className="text-lg text-stone-500 mb-8 max-w-lg leading-relaxed">
            Revolutionizing commerce through a vision of AI-driven intelligence and personalized experiences. We believe shopping shouldn&apos;t be a chore, but an optimized journey.
          </motion.p>
          <motion.button variants={fadeUpVariants} className="px-8 py-4 bg-[#ffe8e0] text-[#ff5a1f] rounded-lg font-bold hover:bg-[#ffd1c2] transition-colors shadow-sm">
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="sticky top-32"
        >
          <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-6 text-[#1a1a1a]">
            Our Story
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-stone-500 mb-6 leading-relaxed">
            The journey of SHOP.AI began with a simple yet powerful idea: the 3-agent pipeline. We envisioned a system where specialized AI agents collaborate seamlessly to handle discovery, comparison, and procurement.
          </motion.p>
          <motion.p variants={fadeUpVariants} className="text-stone-500 leading-relaxed">
            By dividing the complex cognitive load of shopping into these distinct phases, we ensure every purchase is optimized for value, speed, and personal relevance. What started in a small lab is now redefining the global retail landscape.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100"
          >
            <div className="w-10 h-10 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-4">
              <Search size={18} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1a1a1a]">Discovery Agent</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Unearths exactly what you&apos;re looking for across the entire web.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100"
          >
            <div className="w-10 h-10 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-4">
              <SlidersHorizontal size={18} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1a1a1a]">Comparison Agent</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Analyzes price, quality, and shipping to find the best deal.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100"
          >
            <div className="w-10 h-10 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-4">
              <ShoppingCart size={18} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1a1a1a]">Procurement Agent</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Handles the checkout process securely and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-black mb-4 text-[#1a1a1a]"
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-stone-500 mb-16 max-w-2xl mx-auto"
          >
            The principles that guide our innovation
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Transparency</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                We are open about how our AI makes decisions, ensuring you always know why a product is recommended.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Efficiency</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                Saving you hours of research. Our agents work in parallel to deliver results in seconds, not hours.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#fff0eb] text-[#ff5a1f] flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Security</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                Your data is yours. We use bank-grade encryption to protect your identity and financial information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full bg-[#111827] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-4xl font-black mb-4">
              Meet the Team
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-stone-400">
              The visionaries behind SHOP.AI
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO", img: "https://picsum.photos/seed/alex/400/400" },
              { name: "Sarah Jenkins", role: "CTO & Lead Architect", img: "https://picsum.photos/seed/sarah/400/400" },
              { name: "Marcus Thorne", role: "Head of AI Research", img: "https://picsum.photos/seed/marcus/400/400" },
              { name: "Elena Rodriguez", role: "Lead UX Designer", img: "https://picsum.photos/seed/elena/400/400" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-stone-800 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                  <Image src={member.img} alt={member.name} fill className="object-cover" unoptimized />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-xs text-[#ff5a1f] font-bold tracking-wider uppercase mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#fdfaf8] py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#fff0eb] rounded-[3rem] p-8 md:p-12 lg:p-20 text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
            Ready to join the future of<br />shopping?
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto">
            Experience the power of the 3-agent pipeline today. Save time, save money, and shop smarter with SHOP.AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#ff5a1f] text-white rounded-lg font-bold hover:bg-[#e04812] transition-colors shadow-lg shadow-[#ff5a1f]/20">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-white text-stone-900 rounded-lg font-bold hover:bg-stone-50 transition-colors shadow-sm border border-stone-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#fdfaf8] py-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#ff5a1f] rounded-full flex items-center justify-center text-white">
              <Search size={12} />
            </div>
            <span className="font-black text-sm tracking-wide text-[#1a1a1a]">SHOP.AI</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-stone-500">
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">Contact</a>
          </div>
          
          <div className="text-[10px] text-stone-400">
            © 2024 SHOP.AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
