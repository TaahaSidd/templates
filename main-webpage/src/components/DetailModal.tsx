import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Award, Clock, DollarSign, Target, TrendingUp } from "lucide-react";
import { Service, Project } from "../types";

interface DetailProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  project: Project | null;
}

export default function DetailModal({ isOpen, onClose, service, project }: DetailProps) {
  return (
    <AnimatePresence>
      {isOpen && (service || project) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-[#121212] border border-white/10 rounded-3xl w-full max-w-xl overflow-hidden relative z-10 shadow-2xl p-6 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2 z-30 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Displaying Service details */}
            {service && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/25 text-[9px] font-mono font-bold tracking-wider text-[#7c3aed]">
                    Service Deep Breakdown
                  </span>
                  <h3 className="font-sans font-black text-2xl text-white tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits / Deliverables list */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[9px] font-bold tracking-wider text-zinc-500 uppercase">
                    Deliverables Included
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <Check size={14} className="text-[#7c3aed] shrink-0 mt-0.5" />
                        <span className="text-zinc-350">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost / Duration Cards */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div className="bg-[#0c0c0c] p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 font-bold tracking-wider mb-2">
                      <Clock size={12} className="text-[#7c3aed]" />
                      <span>Est. Duration</span>
                    </div>
                    <span className="font-sans font-bold text-sm text-white">
                      {service.duration}
                    </span>
                  </div>

                  <div className="bg-[#0c0c0c] p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 font-bold tracking-wider mb-2">
                      <DollarSign size={12} className="text-[#7c3aed]" />
                      <span>Setup Estimate</span>
                    </div>
                    <span className="font-sans font-bold text-sm text-white">
                      {service.priceEstimate}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Displaying Case/Project details */}
            {project && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/25 text-[9px] font-mono font-bold tracking-wider text-[#7c3aed]">
                    Case Study Summary
                  </span>
                  <h3 className="font-sans font-black text-2xl text-white tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    A deep partnership with {project.clientName} established in {project.year} addressing crucial marketing goals, scaling organic conversion funnels and search volume output.
                  </p>
                </div>

                {/* High impact metric card inside */}
                <div className="bg-[#0c0c0c] p-5 rounded-2xl border border-white/10 flex justify-between items-center bg-zinc-950/40">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider block font-bold">
                      Key Value Reached
                    </span>
                    <span className="font-sans font-black text-lg text-white tracking-tight">
                      {project.metricLabel}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] font-black text-md border border-[#7c3aed]/25">
                    {project.metric}
                  </div>
                </div>

                {/* Meta list */}
                <div className="space-y-3 font-sans">
                  <h4 className="font-mono text-[9px] font-bold tracking-wide text-zinc-500 uppercase">
                    Campaign Information Sheet
                  </h4>
                  <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5 text-xs">
                    <div className="bg-[#0c0c0c] p-3.5 flex justify-between">
                      <span className="text-zinc-400">Partner Brand:</span>
                      <strong className="text-white font-sans tracking-tight">{project.clientName}</strong>
                    </div>
                    <div className="bg-[#0c0c0c] p-3.5 flex justify-between">
                      <span className="text-zinc-400">Launch Quarter:</span>
                      <strong className="text-white">Q3, {project.year}</strong>
                    </div>
                    <div className="bg-[#0c0c0c] p-3.5 flex justify-between">
                      <span className="text-zinc-400">Deployment Verticals:</span>
                      <strong className="text-[#7c3aed] font-mono tracking-wider text-[10px]">{project.category}</strong>
                    </div>
                    <div className="bg-[#0c0c0c] p-3.5 flex justify-between">
                      <span className="text-zinc-400">ROI Benchmark:</span>
                      <strong className="text-white font-sans tracking-tight">Exceeded Estimates</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accept / Done Button */}
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer text-[10px] font-bold tracking-wider"
              >
                Close Breakdown
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
