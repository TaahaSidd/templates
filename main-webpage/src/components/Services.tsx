import React, { useState } from "react";
import { services } from "../data";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { ArrowUpRight, Check, X, Clock, HelpCircle, DollarSign } from "lucide-react";

interface ServicesProps {
  onOpenContact: () => void;
  onOpenServiceDetail: (service: Service) => void;
}

// Icon mapper to dynamically look up lucide icons
const IconRenderer = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Activity size={size} className={className} />;
  return <IconComponent size={size} className={className} />;
};

export default function Services({ onOpenContact, onOpenServiceDetail }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Header Grid matching screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#7c3aed] font-bold mb-2 block">
              What We Do
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
              Our Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed font-sans opacity-95">
              Our digital marketing services accelerate conversion output through advanced data targeting, search dominance, and multi-channel creative loops.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#F5F5F5] hover:text-[#7c3aed] transition-colors cursor-pointer"
            >
              <span>Schedule Discussion</span>
              <span className="text-[#7c3aed] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </button>
          </div>
        </div>

        {/* 6 Services Grid with global rounded-3xl corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-white/10 bg-[#121212] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-black/30 transition-all duration-300 relative group"
            >
              {/* Card visual elements */}
              <div className="space-y-6">
                
                {/* Icons wrap matching purple colors and rounded-xl corners */}
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] border border-[#7c3aed]/25">
                  <IconRenderer name={service.iconName} size={18} />
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans font-black text-lg md:text-xl text-[#fafafa] tracking-tight group-hover:text-[#7c3aed] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* What is included query trigger */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenServiceDetail(service)}
                    className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 font-bold cursor-pointer"
                  >
                    <HelpCircle size={13} className="text-[#7c3aed]" />
                    <span>What is included in service?</span>
                  </button>
                </div>
              </div>

              {/* Card action link exactly matching layout */}
              <div className="border-t border-white/10 mt-8 pt-4 flex items-center justify-between">
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Build Proposal</span>
                  <span className="text-[#7c3aed] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
