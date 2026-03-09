'use client';

import { motion } from 'motion/react';
import { User, Settings as SettingsIcon, CreditCard, Shield, LogOut, Star, Edit2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-stone-900 font-sans selection:bg-[#ff5a1f]/30">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <h1 className="text-3xl font-black tracking-tight text-[#111827] mb-2">Settings</h1>
          <p className="text-sm text-stone-500 mb-8">Manage your shopping experience</p>

          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#ffe0d4] text-[#111827] font-bold text-sm transition-colors text-left">
              <User size={18} />
              Account
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-100 text-stone-600 font-medium text-sm transition-colors text-left">
              <SettingsIcon size={18} />
              Preferences
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-100 text-stone-600 font-medium text-sm transition-colors text-left">
              <CreditCard size={18} />
              Subscription
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-100 text-stone-600 font-medium text-sm transition-colors text-left">
              <Shield size={18} />
              Security
            </button>
            
            <div className="h-px bg-stone-200 my-4"></div>
            
            <Link href="/signout" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500 font-medium text-sm transition-colors text-left">
              <LogOut size={18} />
              Sign Out
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Account Information */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-[#111827]">
                <User size={16} />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Account Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-stone-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Alex Designer" 
                  className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="alex.designer@example.com" 
                  className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827]"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-stone-500 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  defaultValue="••••••••••••" 
                  className="w-full px-4 py-3 bg-stone-50 border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/20 text-[#111827]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#111827] transition-colors">
                  <Edit2 size={16} />
                </button>
              </div>
            </div>

            <button className="px-6 py-3 bg-[#ffe0d4] text-[#111827] rounded-xl font-bold text-sm hover:bg-[#ffd1c2] transition-colors">
              Save Account Changes
            </button>
          </motion.section>

          {/* Preferences */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-[#111827]">
                <SettingsIcon size={16} />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Preferences</h2>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-stone-100">
              <div>
                <div className="font-bold text-[#111827] text-sm mb-1">Currency</div>
                <div className="text-xs text-stone-500">Set your preferred shopping currency</div>
              </div>
              <select className="bg-stone-50 border border-stone-200 text-[#111827] text-sm rounded-lg focus:ring-[#ff5a1f] focus:border-[#ff5a1f] block p-2.5 font-medium outline-none">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-stone-100">
              <div>
                <div className="font-bold text-[#111827] text-sm mb-1">Push Notifications</div>
                <div className="text-xs text-stone-500">Receive alerts about your orders</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff5a1f]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <div className="font-bold text-[#111827] text-sm mb-1">Email Newsletters</div>
                <div className="text-xs text-stone-500">Marketing and personalized recommendations</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff5a1f]"></div>
              </label>
            </div>
          </motion.section>

          {/* Pro Member */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#fff0eb] rounded-3xl p-6 md:p-8 shadow-sm border border-[#ffe0d4] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffe0d4] flex items-center justify-center text-[#111827]">
                <Star size={24} className="fill-[#111827]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-1">Pro Member</h3>
                <p className="text-sm text-stone-600 mb-2">Your subscription renews on Nov 12, 2024</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Active
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-[#111827] rounded-xl font-bold text-sm hover:bg-stone-50 transition-colors border border-stone-200">
                Manage Billing
              </button>
              <button className="px-6 py-3 bg-[#111827] text-white rounded-xl font-bold text-sm hover:bg-stone-800 transition-colors">
                View Perks
              </button>
            </div>
          </motion.section>

          {/* Delete Account */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stone-200"
          >
            <div>
              <h3 className="font-bold text-red-500 text-sm mb-1">Delete Account</h3>
              <p className="text-xs text-stone-500">Permanently remove all your data and order history</p>
            </div>
            <button className="px-6 py-2.5 bg-white text-red-500 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors border border-red-200">
              Delete My Account
            </button>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
