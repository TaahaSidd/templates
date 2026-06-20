import React, { useState, useEffect } from "react";
import { ArrowRight, Bot, Zap, TrendingUp, MessageSquare, CheckCircle, Activity, Globe, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "chats" | "analytics">("chats");
  
  // Custom typing simulator for chatbot demo
  const [simStep, setSimStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-black flex flex-col items-center"
    >
      {/* Absolute Background Layer with the Colorful 3D Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Floating 3D graphics in the background on the right side */}
        <motion.div 
          animate={{
            y: [0, -18, 0],
            rotate: [0, 1.5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-8 -right-32 md:-right-12 w-[550px] sm:w-[700px] md:w-[850px] lg:w-[950px] h-[550px] sm:h-[700px] md:h-[850px] lg:h-[950px] opacity-45 md:opacity-60 saturate-[1.3] brightness-[0.75] contrast-[1.05]"
        >
          <img
            src="/src/assets/images/colorful_3d_hero_bg_1781899892392.jpg"
            alt="Vibrant 3D Graphic"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
          {/* Beautiful fading vignettes to melt the graphics into solid black */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        </motion.div>

        {/* Tech-inspired grid panel overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:44px_44px]" />
        
        {/* Glow Spheres for atmospheric depth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/[0.06] blur-[140px]" />
        <div className="absolute bottom-12 left-12 w-[350px] h-[350px] rounded-full bg-indigo-500/[0.03] blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Digital Agency Hook */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left">
            
            {/* Live Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full"
            >
              <div className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-ping" />
              <div className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full absolute" />
              <span className="font-mono text-[9px] font-bold tracking-widest text-indigo-300 uppercase pl-1">
                Next-Gen Agency Platform
              </span>
            </motion.div>

            {/* Giant Bold Statement */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-black text-4xl sm:text-5.5xl md:text-6.5xl lg:text-7.5xl leading-[1.05] tracking-tight text-white"
              >
                We build high-velocity <br />
                <span className="bg-gradient-to-r from-white via-zinc-200 to-[#7c3aed] bg-clip-text text-transparent">
                  performance channels
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-zinc-400 font-sans text-xs sm:text-sm md:text-base max-w-xl leading-relaxed"
              >
                Nexlo Systems engineers hyper-targeted WhatsApp campaign architectures, intelligent Gemini-fueled chatbot operators, and visual conversion systems mapped directly to your commercial revenue targets.
              </motion.p>
            </div>

            {/* CTA Interaction Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#7c3aed] hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#7c3aed]/20"
              >
                <span>Launch Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToAbout("#work")}
                className="w-full sm:w-auto text-center px-8 py-4 border border-white/20 hover:border-white text-white/80 hover:text-white hover:bg-white/5 font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-205 cursor-pointer"
              >
                Explore Studies
              </button>
            </motion.div>

            {/* Quick stats grid to demonstrate real outcomes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg"
            >
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl md:text-3xl text-white">
                  +142%
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                  Avg Conversion
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl md:text-3xl text-white">
                  24/7
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                  AI Autopilot
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl md:text-3xl text-white">
                  $18M+
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                  Client Pipeline
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Cockpit Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 w-full"
          >
            <div className="w-full bg-[#121212]/70 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/10 relative">
              {/* Top Bar Decoration */}
              <div className="px-5 py-3.5 bg-[#18181b]/70 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[10px] text-zinc-500 ml-2">nexlo-engine-v4.03</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity size={10} className="text-[#a1a1aa] animate-pulse" />
                  <span className="font-mono text-[9px] font-bold text-zinc-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">
                    Live Engine
                  </span>
                </div>
              </div>

              {/* Navigation tabs within the console */}
              <div className="grid grid-cols-3 border-b border-white/5 p-2 bg-black/40 gap-1.5">
                {[
                  { id: "chats", label: "AI Chatbots", icon: Bot },
                  { id: "whatsapp", label: "WhatsApp Marketing", icon: MessageSquare },
                  { id: "analytics", label: "Metrics & Lead Flow", icon: TrendingUp },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl text-[10px] font-bold tracking-tight transition-all duration-150 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-white/5 text-white border border-white/10 shadow-inner"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <Icon size={11} className={activeTab === tab.id ? "text-[#7c3aed]" : ""} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Panel Content */}
              <div className="p-5 h-[270px] relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-black/20 to-black/60">
                
                {activeTab === "chats" && (
                  <div className="space-y-4 flex flex-col h-full justify-between">
                    {/* Simulator Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#7c3aed] flex items-center gap-1">
                        <Sparkles size={10} /> Active Conversational Simulation
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">Autopilot (99.8% precision)</span>
                    </div>

                    {/* Chat Bubble Container with Staggered Interactive Steps */}
                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      <AnimatePresence mode="popLayout">
                        {simStep >= 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: -10, y: 5 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start"
                          >
                            <span className="block text-[8px] font-bold text-[#7c3aed] uppercase tracking-wider mb-0.5">Prospect</span>
                            <span className="text-[11px] text-zinc-200">"Hey! Do you support CRM setup with your automated chatbots?"</span>
                          </motion.div>
                        )}

                        {simStep >= 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10, y: 5 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            className="bg-indigo-600/10 border border-[#7c3aed]/20 p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end"
                          >
                            <span className="block text-[8px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                              <Bot size={8} /> Autonomous Agent [Gemini]
                            </span>
                            <span className="text-[11px] text-zinc-200">"Yes, absolutely. We sync deep with HubSpot & Salesforce instantly!"</span>
                          </motion.div>
                        )}

                        {simStep >= 2 && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="self-center bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 font-mono"
                          >
                            <CheckCircle size={10} />
                            <span>Prospect qualified & scheduled for strategy session</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Simulation progress indicators */}
                    <div className="flex gap-1 justify-center">
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            simStep === idx ? "w-6 bg-[#7c3aed]" : "w-2 bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "whatsapp" && (
                  <div className="space-y-4 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#7c3aed] flex items-center gap-1">
                        <MessageSquare size={10} /> Campaigns & Broadcast Systems
                      </span>
                      <span className="text-[9px] text-[#10b981] font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" /> Connection Stable
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Active campaign detail card */}
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-white block">Midsummer Launch Loop</span>
                          <span className="text-[9px] text-zinc-400 block mt-0.5">8,400 selected premium contacts</span>
                        </div>
                        <div className="text-right">
                          <span className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-[9px] font-bold font-mono px-2 py-0.5 rounded-full">
                            88.2% Deliverability
                          </span>
                        </div>
                      </div>

                      {/* Broadcast flow simulator visual */}
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: "Delivered", value: "99.2%", color: "border-white/5" },
                          { label: "Opened", value: "78.4%", color: "border-white/5RGB" },
                          { label: "Replied", value: "24.5%", color: "border-[#7c3aed]/25" },
                          { label: "Converted", value: "6.8%", color: "border-emerald-500/25 text-emerald-400" },
                        ].map((metric, i) => (
                          <div key={i} className={`bg-black/60 border rounded-lg p-2 text-center h-16 flex flex-col justify-center gap-1 ${metric.color}`}>
                            <span className="text-[8px] text-zinc-500 font-mono tracking-wide uppercase">{metric.label}</span>
                            <span className="text-[11px] font-black">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-[9px] text-center text-zinc-500">
                      Compliance framework enabled. Direct-to-app communication loop bypasses spam boxes.
                    </p>
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div className="space-y-4 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#7c3aed] flex items-center gap-1">
                        <TrendingUp size={10} /> Metrics Monitor & Flow Velocity
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">Auto-refreshed (Real-time)</span>
                    </div>

                    {/* Progress tracking conversions */}
                    <div className="space-y-3">
                      {[
                        { title: "Organic Discovery Growth", pct: 92, amt: "4,200 leads/mo", color: "bg-[#7c3aed]" },
                        { title: "Gemini Chatbot Resolution Rate", pct: 86, amt: "86.4% success", color: "bg-indigo-500" },
                        { title: "Customer Retainer Satisfaction", pct: 98, amt: "98.2% positive", color: "bg-emerald-500" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[10px]">
                            <span className="text-zinc-300 font-bold">{item.title}</span>
                            <span className="text-zinc-400 font-mono">{item.amt}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.pct}%` }}
                              transition={{ duration: 1, delay: i * 0.15 }}
                              className={`h-full rounded-full ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[9px] text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Globe size={10} /> Regional Node: US-East-1
                      </span>
                      <span>Operational latency: 24ms</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
