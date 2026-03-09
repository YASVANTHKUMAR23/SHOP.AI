'use client';

import { motion } from 'motion/react';
import { Star, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const reviews = [
  {
    id: 1,
    author: "David Chen",
    type: "Verified Buyer",
    time: "2 days ago",
    title: "Nexus Pro Max 2 - Best camera ever?",
    content: "The low light performance on this model is absolutely stunning. I've been testing it for a week now and the battery life consistently...",
    helpful: 124,
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    type: "Verified Buyer",
    time: "5 days ago",
    title: "QuietSound 500 Noise Cancellation",
    content: "The active noise cancellation is top-tier. I use these on my daily commute and it completely blocks out the engine noise. The audio profil...",
    helpful: 89,
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 3,
    author: "Mark Thompson",
    type: "Tech Expert",
    time: "1 week ago",
    title: "Zephyr X-14: The Ultraportable King",
    content: "I've reviewed dozens of laptops this year, and the X-14 hits the sweet spot of power and portability. The OLED display is vivid and the...",
    helpful: 210,
    avatar: "https://picsum.photos/seed/mark/100/100"
  },
  {
    id: 4,
    author: "Michael T.",
    location: "Seattle",
    tag: "LAPTOP",
    rating: 5,
    content: "\"SHOP.AI saved me so much time. I was overwhelmed by laptop options, but the comparison agent simplified everything.\"",
    helpful: true
  },
  {
    id: 5,
    author: "Sarah L.",
    location: "New York",
    tag: "SMARTPHONE",
    rating: 5,
    content: "\"The real-time data collection is a game changer. I finally feel confident I'm getting the best price.\"",
    helpful: true
  },
  {
    id: 6,
    author: "David K.",
    location: "Austin",
    tag: "AUDIO",
    rating: 5,
    content: "\"I love the explainable AI. It's not just a recommendation; it's a justification that makes sense.\"",
    helpful: true
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/friends-shopping/800/600" 
              alt="Friends shopping together" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-[#ff5a1f] text-xs font-bold tracking-widest uppercase mb-4">Community Driven</div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#111827] mb-6 leading-[1.1]">
              Trusted by<br />Smart Shoppers
            </h1>
            <p className="text-lg text-stone-500 mb-8 leading-relaxed">
              Real reviews from the SHOP.AI community to help you make the best buying decisions. Get authentic insights on the latest tech and gadgets.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-8 py-3.5 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors">
                Write a Review
              </button>
              <button className="px-8 py-3.5 bg-white text-[#111827] rounded-xl font-bold text-sm hover:bg-stone-50 transition-colors border border-stone-200">
                Explore More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100">
            <div className="text-sm text-stone-500 font-medium mb-2">Total Comparisons</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-[#111827]">10k+</div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100">
            <div className="text-sm text-stone-500 font-medium mb-2">Average Rating</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-[#111827] flex items-center gap-2">
                4.8 <Star size={24} className="text-amber-400 fill-amber-400" />
              </div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+0.2%</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100">
            <div className="text-sm text-stone-500 font-medium mb-2">Daily Reviews</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-[#111827]">850+</div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+5%</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100">
            <div className="text-sm text-stone-500 font-medium mb-2">Community Members</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-[#111827]">24k</div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+18%</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-[#111827]">Latest Reviews</h2>
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-4 py-2 bg-[#ffe0d4] text-[#111827] rounded-full text-sm font-bold">All</button>
            <button className="px-4 py-2 bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 rounded-full text-sm font-medium transition-colors">Smartphones</button>
            <button className="px-4 py-2 bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 rounded-full text-sm font-medium transition-colors">Laptops</button>
            <button className="px-4 py-2 bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 rounded-full text-sm font-medium transition-colors">Appliances</button>
            <button className="px-4 py-2 bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 rounded-full text-sm font-medium transition-colors">Audio</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100 flex flex-col"
            >
              {review.avatar ? (
                // Detailed Review Card
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-stone-100">
                      <Image src={review.avatar} alt={review.author} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <div className="font-bold text-[#111827] text-sm">{review.author}</div>
                      <div className="text-xs text-stone-500">{review.type} • {review.time}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#111827] mb-3 leading-tight">{review.title}</h3>
                  <p className="text-sm text-stone-600 mb-6 flex-1">{review.content}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-[#111827] transition-colors">
                      <ThumbsUp size={14} /> {review.helpful} Helpful
                    </button>
                    <button className="text-xs font-bold text-[#ff5a1f] hover:text-[#e04812] transition-colors">
                      Read Full Review
                    </button>
                  </div>
                </>
              ) : (
                // Quote Review Card
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-bold text-[#111827] text-sm">{review.author}</div>
                      <div className="text-xs text-stone-500">{review.location}</div>
                    </div>
                    <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase bg-stone-100 px-2 py-1 rounded-md">
                      {review.tag}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg font-bold italic text-[#111827] mb-6 flex-1 leading-snug">
                    {review.content}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-[#111827] transition-colors">
                      <ThumbsUp size={14} /> Helpful
                    </button>
                    <button className="text-xs font-bold text-stone-400 hover:text-[#111827] transition-colors">
                      Read Full Review
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
