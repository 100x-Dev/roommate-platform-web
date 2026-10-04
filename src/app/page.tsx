"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Home, Users, ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Glows */}
      <div className="glow-bg top-[-30%] left-[-15%] bg-indigo-500/20"></div>
      <div className="glow-bg bottom-[-20%] right-[-10%] bg-purple-500/20"></div>

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">NestQuest</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Find a Room</a>
          <a href="#" className="hover:text-white transition-colors">Find a Roommate</a>
          <a href="#" className="hover:text-white transition-colors">List Property</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer">Log in</button>
          <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 cursor-pointer">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
          <span className="text-xs font-medium text-zinc-300">Marketplace MVP is live</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight max-w-4xl"
        >
          Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">people.</span><br />
          Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">place.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
        >
          The smartest way to discover PGs, shared flats, and compatible roommates in your city. Verified listings, genuine people.
        </motion.p>

        {/* Floating Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-3xl glass rounded-full p-2 flex flex-col md:flex-row items-center gap-2 relative z-20"
        >
          <div className="flex-1 flex items-center gap-3 px-5 py-3 w-full border-b md:border-b-0 md:border-r border-white/10 group">
            <MapPin className="w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
            <input 
              type="text" 
              placeholder="City or Locality..." 
              className="bg-transparent border-none outline-none text-white placeholder:text-zinc-500 w-full font-medium"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 px-5 py-3 w-full group">
            <Home className="w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
            <select defaultValue="" className="bg-transparent border-none outline-none text-zinc-300 w-full appearance-none font-medium cursor-pointer">
              <option value="" disabled className="text-zinc-500 bg-zinc-900">Looking for...</option>
              <option value="room" className="bg-zinc-900 text-white">Private Room</option>
              <option value="pg" className="bg-zinc-900 text-white">PG Bed</option>
              <option value="flat" className="bg-zinc-900 text-white">Entire Flat</option>
              <option value="roommate" className="bg-zinc-900 text-white">A Roommate</option>
            </select>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative z-10"
        >
          <div className="glass p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 hover:-translate-y-2 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer border-t border-white/10 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <ShieldCheck className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified Users</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Every profile and listing goes through strict verification to ensure safety.</p>
            </div>
          </div>
          
          <div className="glass p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 hover:-translate-y-2 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer border-t border-white/10 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <Users className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Our rule-based algorithm finds roommates that perfectly match your lifestyle.</p>
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem] flex flex-col items-center text-center gap-5 hover:-translate-y-2 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer border-t border-white/10 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
              <Star className="w-7 h-7 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Connect directly with owners and tenants. We don't charge any brokerage.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
