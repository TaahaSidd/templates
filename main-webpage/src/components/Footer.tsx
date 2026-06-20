import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Separated Ready to Launch CTA Section */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-[#121212]/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          {/* Subtle glowing ambient lights */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#7c3aed]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#7c3aed]/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full" />
              <span className="font-mono text-[9px] font-bold tracking-widest text-indigo-300 uppercase">
                Collaboration Engine
              </span>
            </div>

            <h3 className="font-sans font-black text-3.5xl sm:text-5xl md:text-5.5xl text-white leading-[1.08] tracking-tighter">
              Ready to launch your next project?
            </h3>
            
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto font-sans leading-relaxed">
              Let's craft high-velocity conversion layers, custom conversational bots, and marketing platforms mapped directly to your revenue targets.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2.5 px-8 py-3.5 bg-[#7c3aed] text-white hover:bg-white hover:text-black hover:scale-[1.02] text-xs font-bold tracking-wider rounded-full shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <Mail size={14} className="group-hover:rotate-6 transition-transform" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Mega Footer in Primary Color */}
      <footer 
        className="bg-gradient-to-b from-[#7c3aed] to-[#3b0764] text-white relative pt-24 pb-12 overflow-hidden border-t border-white/10 rounded-t-[40px] md:rounded-t-[80px]"
      >
        {/* Decorative circular shapes & spotlights */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[300px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[200px] bg-black/[0.15] blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Main Footer Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 pb-16 border-b border-white/10">
            
            {/* Column 1: Brand Identifier */}
            <div className="col-span-2 md:col-span-4 space-y-6">
              <a href="#home" className="inline-flex items-center group" aria-label="Home">
                <div className="w-10 h-10 bg-white text-[#7c3aed] rounded-full flex items-center justify-center font-black text-lg transition-transform duration-200 group-hover:scale-105 shadow-md">
                  N
                </div>
              </a>
              <p className="text-indigo-100/70 text-xs sm:text-sm leading-relaxed max-w-xs font-sans">
                Next-generation marketing technology architectures. We build highly scalable discovery funnels, custom conversation automation interfaces, and automated digital performance setups.
              </p>
              <div className="pt-2 flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-widest text-indigo-200 uppercase opacity-60">Status</span>
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-405 bg-emerald-400 animate-pulse" />
                  Accepting Q3 Engagements
                </span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-[11px] font-bold tracking-widest text-white uppercase border-b border-white/10 pb-2">
                Navigator
              </h4>
              <ul className="space-y-3 text-indigo-100/70 text-xs font-medium">
                <li>
                  <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors duration-155">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" onClick={(e) => scrollToSection(e, "#work")} className="hover:text-white transition-colors duration-155">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={(e) => scrollToSection(e, "#projects")} className="hover:text-white transition-colors duration-155">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-white transition-colors duration-155">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Conversational Category */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-[11px] font-bold tracking-widest text-white uppercase border-b border-white/10 pb-2">
                Conversational
              </h4>
              <ul className="space-y-3 text-indigo-100/70 text-xs font-medium">
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    WhatsApp Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    AI Chatbots (Gemini)
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    Automated Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Design & Development Category */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-[11px] font-bold tracking-widest text-white uppercase border-b border-white/10 pb-2">
                Build & Design
              </h4>
              <ul className="space-y-3 text-indigo-100/70 text-xs font-medium">
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    Web & App Development
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    Brand Strategy
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors duration-155">
                    Creative & Content
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Channels & Connect */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-[11px] font-bold tracking-widest text-white uppercase border-b border-white/10 pb-2">
                Connect
              </h4>
              <ul className="space-y-3 text-indigo-100/70 text-xs font-medium">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-155 flex items-center gap-1.5">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={11} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-155 flex items-center gap-1.5">
                    <span>Instagram</span>
                    <ArrowUpRight size={11} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-155 flex items-center gap-1.5">
                    <span>Twitter</span>
                    <ArrowUpRight size={11} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-155 flex items-center gap-1.5">
                    <span>Facebook</span>
                    <ArrowUpRight size={11} className="opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Huge Typographic Watermark */}
          <div className="py-8 md:py-12 text-center select-none overflow-hidden relative">
            <h2 className="font-sans font-black text-[12vw] tracking-wider text-white/[0.04] leading-none select-none uppercase">
              NEXLO
            </h2>
          </div>

          {/* Legal Disclosures Row */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-indigo-200/50">
            <span>© 2026 Nexlo Systems. All Rights Reserved.</span>
            <div className="flex gap-6">
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
