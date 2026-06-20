import React, { useState } from "react";
import { teamMembers } from "../data";
import { TeamMember } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Linkedin, Twitter } from "lucide-react";

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  // Helper to format slide numbering (e.g. 02/10)
  const formatIndex = (idx: number) => {
    return (idx + 1).toString().padStart(2, "0");
  };

  return (
    <section id="team" className="py-24 bg-[#0A0A0A] relative border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:pl-32">
        
        {/* Header Block with Carousel Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#7c3aed] font-bold mb-2 block">
              The Architects
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
              Meet Our Team
            </h2>
            <p className="text-[#a1a1aa] text-sm md:text-base mt-4 leading-relaxed font-sans opacity-90">
              Meet our team of passionate digital marketing strategists, coding specialists, and performance planners dedicated to commercial velocity.
            </p>
          </div>

          {/* Interactive Arrow Controller matching screenshot */}
          <div className="flex items-center gap-4 bg-[#121212] px-5 py-2.5 rounded-full border border-white/10 shrink-0 select-none">
            <button
              onClick={prevSlide}
              className="text-zinc-500 hover:text-white p-1 transition-colors cursor-pointer"
              aria-label="Previous team member"
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="font-mono text-xs flex gap-1 text-zinc-455 font-bold">
              <span className="text-[#F5F5F5]">
                {formatIndex(currentIndex)}
              </span>
              <span>/</span>
              <span>{formatIndex(teamMembers.length)}</span>
            </div>

            <button
              onClick={nextSlide}
              className="text-zinc-500 hover:text-white p-1 transition-colors cursor-pointer"
              aria-label="Next team member"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Team Members Slider Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => {
            const isHighlighted = idx === currentIndex;
            return (
              <motion.div
                key={member.id}
                animate={{
                  opacity: 1,
                  scale: isHighlighted ? 1.02 : 0.98,
                  borderColor: isHighlighted ? "#7c3aed" : "#1a1a1a",
                }}
                transition={{ duration: 0.4 }}
                className={`border bg-[#121212] rounded-3xl overflow-hidden p-3 flex flex-col justify-between group transition-all h-[420px] shadow-lg ${
                  isHighlighted ? "relative ring-1 ring-[#7c3aed]/20" : "border-white/5"
                }`}
              >
                {/* Photo Portrait Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHighlighted
                        ? "grayscale-0 contrast-100 scale-102"
                        : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                    }`}
                  />
                  {/* Subtle border outline framing */}
                  <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                </div>

                {/* Team Info block */}
                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-sm text-[#fafafa] tracking-tight group-hover:text-[#7c3aed] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[9px] text-[#7c3aed] tracking-widest font-black">
                      {member.role}
                    </p>
                  </div>

                  {/* Skills/Bio snippet on slide select */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 2).map((sk) => (
                        <span
                          key={sk}
                          className="font-mono text-[8px] text-zinc-400 bg-black border border-white/5 px-2 py-0.5 rounded-full tracking-wider font-semibold"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
