'use client';

import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4 md:p-8 font-sans selection:bg-[#ff5a1f]/30">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        {/* Left Side - Image & Copy */}
        <div className="w-full md:w-1/2 relative p-12 flex flex-col justify-center text-white overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/boutique/800/1000" 
            alt="Boutique interior" 
            fill 
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <Link href="/" className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center text-white shadow-lg">
                <ShoppingBag size={20} />
              </div>
              <span className="font-black text-xl tracking-wide">SHOP.AI</span>
            </Link>

            <div>
              <h1 className="text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                Welcome Back
              </h1>
              <p className="text-lg text-white/80 mb-12 max-w-md leading-relaxed">
                Experience the future of personal shopping. Your AI-curated trends are waiting for you.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#111827] overflow-hidden relative bg-stone-200">
                    <Image src="https://picsum.photos/seed/user1/100/100" alt="User" fill className="object-cover" unoptimized />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#111827] overflow-hidden relative bg-stone-200">
                    <Image src="https://picsum.photos/seed/user2/100/100" alt="User" fill className="object-cover" unoptimized />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#111827] overflow-hidden relative bg-stone-200">
                    <Image src="https://picsum.photos/seed/user3/100/100" alt="User" fill className="object-cover" unoptimized />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#111827] bg-[#111827] text-white text-[10px] font-bold flex items-center justify-center z-10">
                    +10k
                  </div>
                </div>
                <div className="text-sm font-bold">Join 10,000+ shoppers today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-black text-[#111827] mb-2">Sign In</h2>
            <p className="text-sm text-stone-500 mb-8">Enter your credentials to access your account</p>

            <Link href="/chat" className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-stone-200 rounded-xl text-sm font-bold text-[#111827] hover:bg-stone-50 transition-colors mb-8">
              <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={18} height={18} />
              Continue with Google
            </Link>

            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200"></div>
              </div>
              <div className="relative bg-white px-4 text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                Or Email
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#111827] mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] transition-colors text-[#111827] placeholder:text-stone-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-[#111827]">Password</label>
                  <a href="#" className="text-xs font-bold text-stone-500 hover:text-[#111827] transition-colors underline underline-offset-2">Forgot Password?</a>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] transition-colors text-[#111827] placeholder:text-stone-400"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#111827] transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-stone-300 text-[#ff5a1f] focus:ring-[#ff5a1f]" />
                <label htmlFor="remember" className="text-xs text-stone-600">Keep me signed in</label>
              </div>

              <Link href="/chat" className="w-full flex items-center justify-center py-4 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors shadow-sm">
                Sign In
              </Link>
            </form>

            <div className="mt-8 text-center text-sm text-stone-500">
              Don&apos;t have an account? <a href="#" className="font-bold text-[#111827] hover:text-[#ff5a1f] transition-colors">Create account</a>
            </div>

            <div className="mt-16 text-center text-[10px] font-bold tracking-widest text-stone-400 uppercase">
              © 2024 SHOP.AI TECHNOLOGIES INC.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
