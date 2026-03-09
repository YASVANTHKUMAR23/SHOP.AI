'use client';

import { motion } from 'motion/react';
import { ShoppingBag, Plus, History, Settings, Mic, ArrowRight, TrendingUp, Laptop, Gift, Sparkles, CheckCircle2, Truck, Star, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <div className="min-h-screen flex bg-[#fdfaf8] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 bg-white border-r border-stone-100 flex-col h-screen sticky top-0 shrink-0">
        {/* Logo */}
        <div className="p-6 pb-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ff5a1f] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#ff5a1f]/20">
              <ShoppingBag size={20} />
            </div>
            <div>
              <div className="font-black text-lg tracking-wide text-[#111827] leading-none mb-1">SHOP.AI</div>
              <div className="text-[10px] text-stone-500 font-medium tracking-wide">Personal Shopper</div>
            </div>
          </Link>
        </div>

        {/* New Chat Button */}
        <div className="px-6 py-4">
          <button className="w-full py-3.5 bg-[#ff5a1f] text-white rounded-xl font-bold text-sm hover:bg-[#e04812] transition-colors shadow-md shadow-[#ff5a1f]/20 flex items-center justify-center gap-2">
            <Plus size={18} />
            New Chat
          </button>
        </div>

        {/* Recent Searches */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase px-2 mb-4">
            Recent Searches
          </div>
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-stone-100 text-[#111827] text-sm font-medium transition-colors text-left">
                <History size={16} className="text-stone-400 shrink-0" />
                <span className="truncate">Winter Coats 2024</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors text-left">
                <History size={16} className="text-stone-400 shrink-0" />
                <span className="truncate">Minimalist Running Shoes</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors text-left">
                <History size={16} className="text-stone-400 shrink-0" />
                <span className="truncate">Father&apos;s Day Gift Ideas</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors text-left">
                <History size={16} className="text-stone-400 shrink-0" />
                <span className="truncate">Mechanical Keyboards</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-stone-100">
          <Link href="/settings" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors text-left mb-2">
            <Settings size={18} className="text-stone-400" />
            Settings
          </Link>
          
          <Link href="/profile" className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100 cursor-pointer hover:bg-stone-100 transition-colors">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#ffe0d4] shrink-0">
              <Image src="https://picsum.photos/seed/alex-avatar/100/100" alt="Alex Johnson" fill className="object-cover" unoptimized />
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-[#111827] truncate">Alex Johnson</div>
              <div className="text-[10px] text-stone-500 font-medium truncate">Pro Member</div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl flex flex-col items-center text-center"
        >
          {/* Center Icon */}
          <div className="w-16 h-16 bg-[#ff5a1f] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#ff5a1f]/20 mb-8">
            <ShoppingBag size={32} />
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] mb-4">
            How can I help you shop today?
          </h1>
          <p className="text-lg md:text-xl text-stone-500 mb-12">
            Search products, compare prices, or find the perfect gift.
          </p>

          {/* Search Box */}
          <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-100 p-2 mb-8 flex flex-col">
            <div className="flex items-center px-4 py-3">
              <Search size={20} className="text-stone-400 shrink-0" />
              <input 
                type="text" 
                placeholder="I&apos;m looking for a waterproof camera under $300..." 
                className="flex-1 bg-transparent border-none focus:outline-none text-lg px-4 text-stone-800 placeholder:text-stone-400"
              />
              <button className="p-2 text-stone-400 hover:text-[#111827] transition-colors shrink-0">
                <Mic size={20} />
              </button>
              <button className="w-12 h-12 bg-[#ff5a1f] rounded-xl flex items-center justify-center text-white hover:bg-[#e04812] transition-colors ml-2 shrink-0 shadow-md shadow-[#ff5a1f]/20">
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Suggestions */}
            <div className="flex flex-wrap items-center gap-2 px-4 pb-4 pt-2 border-t border-stone-50 mt-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 rounded-lg text-xs font-medium text-stone-600 transition-colors border border-stone-100">
                <TrendingUp size={14} className="text-stone-400" />
                Summer Dresses
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 rounded-lg text-xs font-medium text-stone-600 transition-colors border border-stone-100">
                <Laptop size={14} className="text-stone-400" />
                Tech Gadgets
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 rounded-lg text-xs font-medium text-stone-600 transition-colors border border-stone-100">
                <Gift size={14} className="text-stone-400" />
                Gift for Mom
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 rounded-lg text-xs font-medium text-stone-600 transition-colors border border-stone-100">
                <Sparkles size={14} className="text-stone-400" />
                Best Sneakers
              </button>
            </div>
          </div>

          {/* Features Bottom */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-2xl mt-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600">
                <CheckCircle2 size={18} />
              </div>
              <span className="text-xs font-bold text-[#111827]">Price Comparisons</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600">
                <Truck size={18} />
              </div>
              <span className="text-xs font-bold text-[#111827]">Real-time Tracking</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600">
                <Star size={18} />
              </div>
              <span className="text-xs font-bold text-[#111827]">Curated Recommendations</span>
            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
