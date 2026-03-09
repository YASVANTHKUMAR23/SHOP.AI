'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, ArrowRight, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const blogPosts = [
  {
    id: 1,
    title: "The Future of Agentic AI in E-commerce",
    excerpt: "Exploring how autonomous agents are reshaping the online shopping experience by anticipating user needs...",
    category: "AI TRENDS",
    image: "https://picsum.photos/seed/ai-hand/600/400"
  },
  {
    id: 2,
    title: "5 Ways to Save More with SHOP.AI",
    excerpt: "Maximize your budget with these smart shopping strategies powered by our latest price-tracking AI...",
    category: "SHOPPING TIPS",
    image: "https://picsum.photos/seed/cart/600/400"
  },
  {
    id: 3,
    title: "Understanding the 3-Agent Pipeline",
    excerpt: "A deep dive into how our unique multi-agent system delivers perfect results through collaborative task...",
    category: "PRODUCT UPDATES",
    image: "https://picsum.photos/seed/dashboard2/600/400"
  },
  {
    id: 4,
    title: "The Rise of Personal Concierge AI",
    excerpt: "Why 2024 is the year everyone gets a digital personal assistant for their everyday tasks.",
    category: "AI TRENDS",
    image: "https://picsum.photos/seed/chip/600/400"
  }
];

const categories = [
  { name: "AI Trends", count: 12 },
  { name: "Shopping Tips", count: 8 },
  { name: "Product Updates", count: 5 },
  { name: "Guides & Tutorials", count: 10 },
  { name: "Customer Stories", count: 7 }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#111827] mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-stone-500">
            Insights, trends, and tips from the SHOP.AI team.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content - Blog Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {blogPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      unoptimized 
                    />
                    <div className="absolute top-4 left-4 bg-[#fff0eb] text-[#111827] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#ff5a1f] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#111827] font-bold text-xs tracking-widest uppercase mt-auto">
                    READ MORE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-20">
              <button className="w-10 h-10 rounded-lg bg-[#fff0eb] text-[#111827] font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg hover:bg-stone-100 text-stone-500 font-medium flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg hover:bg-stone-100 text-stone-500 font-medium flex items-center justify-center transition-colors">3</button>
              <button className="w-10 h-10 rounded-lg hover:bg-stone-100 text-stone-500 flex items-center justify-center transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-12">
            {/* Search */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-4">Search</h3>
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input 
                  type="text" 
                  placeholder="Search blog posts..." 
                  className="w-full pl-11 pr-4 py-3 bg-transparent border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-6">Popular Categories</h3>
              <ul className="space-y-4">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-medium text-[#111827] group-hover:text-[#ff5a1f] transition-colors">{category.name}</span>
                    <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-[#fff0eb] rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Mail size={18} className="text-[#111827]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Never miss an update</h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Get the latest AI insights and shopping hacks delivered to your inbox weekly.
              </p>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 bg-white border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 mb-3"
              />
              <button className="w-full py-3 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-8 mt-auto border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ff5a1f] rounded-full opacity-50"></div>
            <span className="font-black text-sm tracking-wide text-[#111827]">SHOP.AI</span>
            <span className="text-[10px] text-stone-400 ml-4">© 2024 SHOP.AI TECHNOLOGIES INC.</span>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-[#111827] uppercase">
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#ff5a1f] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
