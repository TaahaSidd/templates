import React from "react";
import { projects } from "../data";
import { Project } from "../types";
import { motion } from "motion/react";
import { TrendingUp, ArrowRight, Layers, Award } from "lucide-react";

interface WorkProps {
  onOpenProjectDetail: (project: Project) => void;
  onOpenContact: () => void;
}

export default function Work({ onOpenProjectDetail, onOpenContact }: WorkProps) {
  return (
    <section id="work" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[#7c3aed]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:pl-32">
        
        {/* Header Block matching mockup */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#7c3aed] font-bold mb-2 block">
              Case Studies
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
              Our Work
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed font-sans mt-3 opacity-90">
              Innovative partnerships executing high-velocity campaign structures that drive actual digital metrics and organic conversion scale.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#fafafa] hover:text-[#7c3aed] transition-all cursor-pointer"
            >
              <span>Show More</span>
              <span className="text-[#7c3aed] group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Dynamic alternating row layout exactly matching screen */}
        <div id="projects" className="space-y-40">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                
                {/* Text Block */}
                <div
                  className={`space-y-8 lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-5">
                    {/* Category Pill Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/10 rounded-full">
                      <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-300">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-2xl sm:text-3.5xl md:text-4.5xl leading-tight text-white group hover:text-[#7c3aed] tracking-tighter transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-serif italic opacity-90">
                      "{project.description}"
                    </p>
                  </div>

                  {/* Highlights and details */}
                  <div className="flex flex-col sm:flex-row items-start gap-6 pt-2">
                    {/* Percentage Callout Overlay with rounded border */}
                    <div className="px-5 py-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col gap-1 shrink-0">
                      <span className="font-sans font-black text-3xl sm:text-4xl text-[#7c3aed] tracking-tighter">
                        {project.metric}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-widest text-[#a1a1aa]">
                        {project.metricLabel}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-2 text-[10px] text-zinc-500 font-bold uppercase font-mono tracking-wider">
                        <span>Client: {project.clientName}</span>
                        <span>•</span>
                        <span>Year: {project.year}</span>
                      </div>
                      <button
                        onClick={() => onOpenProjectDetail(project)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Analyze Performance KPIs</span>
                        <ArrowRight size={14} className="text-[#7c3aed]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Banner Asset Image Block with generous global level roundness */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => onOpenProjectDetail(project)}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-[#121212] cursor-pointer group shadow-2xl"
                  >
                    {/* Glassy overlay frame elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-750"
                    />

                    {/* Hover interactive CTA trigger element */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-black/90 border border-white/15 flex items-center justify-center text-[#7c3aed]">
                        <TrendingUp size={16} />
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
