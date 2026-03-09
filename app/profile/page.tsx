'use client';

import { motion } from 'motion/react';
import { Edit2, Share2, Package, Heart, MessageSquare, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 py-12">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 mb-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-stone-100 shrink-0 border-4 border-white shadow-lg">
            <Image src="https://picsum.photos/seed/alex-avatar/200/200" alt="Alex Johnson" fill className="object-cover" unoptimized />
            <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-stone-600 shadow-md hover:text-[#111827] transition-colors">
              <Edit2 size={14} />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-3xl font-black tracking-tight text-[#111827]">Alex Johnson</h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#ffe0d4] text-[#111827] self-center md:self-auto">
                Pro Member
              </span>
            </div>
            <p className="text-stone-500 text-sm mb-6">alex.johnson@example.com</p>
            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#111827] text-white rounded-xl font-bold text-sm hover:bg-stone-800 transition-colors">
                <Edit2 size={16} />
                Edit Profile
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-stone-600 rounded-xl font-bold text-sm hover:bg-stone-50 transition-colors border border-stone-200">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#ff5a1f] mb-4">
              <Package size={20} />
            </div>
            <div className="text-4xl font-black text-[#111827] mb-1">12</div>
            <div className="text-sm text-stone-500 font-medium">Total Orders</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#ff5a1f] mb-4">
              <Heart size={20} className="fill-[#ff5a1f]" />
            </div>
            <div className="text-4xl font-black text-[#111827] mb-1">48</div>
            <div className="text-sm text-stone-500 font-medium">Saved Items</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#ff5a1f] mb-4">
              <MessageSquare size={20} className="fill-[#ff5a1f]" />
            </div>
            <div className="text-4xl font-black text-[#111827] mb-1">5</div>
            <div className="text-sm text-stone-500 font-medium">Reviews Written</div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-stone-200 mb-8">
          <button className="pb-4 text-sm font-bold text-[#111827] border-b-2 border-[#ff5a1f]">Recent Activity</button>
          <button className="pb-4 text-sm font-medium text-stone-500 hover:text-[#111827] transition-colors">Saved Collections</button>
          <Link href="/settings" className="pb-4 text-sm font-medium text-stone-500 hover:text-[#111827] transition-colors">Settings</Link>
        </div>

        {/* Activity List */}
        <div className="space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <Package size={20} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[#111827] text-sm mb-1">Order Placed: #AI-9482</div>
              <div className="text-xs text-stone-500">Modern Smart Desk Lamp & 2 others</div>
            </div>
            <div className="text-xs text-stone-400 font-medium">2 hours ago</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
              <Heart size={20} className="fill-red-500" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[#111827] text-sm mb-1">Item Saved to Wishlist</div>
              <div className="text-xs text-stone-500">Ergonomic Office Chair - White Edition</div>
            </div>
            <div className="text-xs text-stone-400 font-medium">Yesterday</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <Star size={20} className="fill-amber-500" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[#111827] text-sm mb-1">Review Posted</div>
              <div className="text-xs text-stone-500">5 stars for &quot;Minimalist Wireless Mouse&quot;</div>
            </div>
            <div className="text-xs text-stone-400 font-medium">3 days ago</div>
          </motion.div>
        </div>

        {/* Saved Items Grid */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#111827]">Saved Items</h2>
          <button className="flex items-center gap-1 text-sm font-bold text-[#111827] hover:text-[#ff5a1f] transition-colors">
            View All <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Premium Watch", price: "$299.00", rating: "4.9", image: "https://picsum.photos/seed/watch/400/400" },
            { name: "Studio Headphones", price: "$189.00", rating: "4.8", image: "https://picsum.photos/seed/headphones/400/400" },
            { name: "Aero Runners", price: "$125.00", rating: "4.7", image: "https://picsum.photos/seed/shoes/400/400" },
            { name: "Retro Cam-35", price: "$450.00", rating: "5.0", image: "https://picsum.photos/seed/camera/400/400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (i * 0.1) }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <h3 className="font-bold text-[#111827] text-sm mb-1">{item.name}</h3>
              <div className="flex items-center gap-1 text-xs text-stone-500 mb-2">
                <Star size={12} className="text-amber-400 fill-amber-400" /> {item.rating}
              </div>
              <div className="font-bold text-[#111827] text-sm">{item.price}</div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
