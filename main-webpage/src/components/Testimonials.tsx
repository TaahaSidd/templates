import React, { useState } from "react";
import { testimonials } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 2; // Two testimonials displayed side by side

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const prevPage = () => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#7c3aed]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:pl-32">
        
        {/* Header Block matching mockup */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#7c3aed] font-bold block">
            Client Satisfaction
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
            What Clients Say
          </h2>
          <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed font-sans opacity-90">
            Performance metrics backed by partnerships of absolute trust. Check out real feedback from our leading business collaborators.
          </p>
        </div>

        {/* Sliding Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visibleTestimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 bg-[#121212] rounded-3xl p-6 md:p-8 flex flex-col justify-between relative group/test shadow-lg hover:border-white/20 transition-colors"
            >
              <div className="absolute top-6 right-6 text-zinc-850">
                <Quote size={40} className="opacity-20 group-hover/test:scale-110 transition-transform text-[#7c3aed]" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Visual rating stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#7c3aed] text-[#7c3aed]" />
                  ))}
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-serif italic">
                  "{test.text}"
                </p>
              </div>

              {/* Client header information */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10 relative z-10">
                <img
                  src={test.avatar}
                  alt={test.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover grayscale border border-white/10 shadow-md shrink-0"
                />
                
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-sm text-[#fafafa]">
                    {test.author}
                  </h4>
                  <p className="font-mono text-[9px] text-zinc-500 font-bold tracking-widest">
                    {test.role}, {test.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer slider indicators */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4 bg-[#121212] px-5 py-2.5 rounded-full border border-white/10 select-none">
            <button
              onClick={prevPage}
              className="text-zinc-500 hover:text-white p-1 transition-colors cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="font-mono text-xs flex gap-1 text-zinc-400 font-bold">
              <span className="text-[#F5F5F5]">
                {(activePage + 1).toString().padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{totalPages.toString().padStart(2, "0")}</span>
            </div>

            <button
              onClick={nextPage}
              className="text-zinc-500 hover:text-white p-1 transition-colors cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
