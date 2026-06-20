import React, { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, TrendingUp, Sparkles, AlertCircle } from "lucide-react";

export default function About() {
  // Stats definitions
  const stats = [
    { label: "Client Retention", val: 90, icon: "🤝" },
    { label: "Budget Growth", val: 56, icon: "📈" },
    { label: "ROI Percentage", val: 82, icon: "💰" },
    { label: "Service Demand", val: 79, icon: "⚡" },
    { label: "Agency Growth", val: 65, icon: "🌎" },
  ];

  // Estimator State
  const [budget, setBudget] = useState(15000); // Default $15k
  const [industryFocus, setIndustryFocus] = useState("retail"); // retail, SaaS, finance, b2b

  // Estimation simulation logic
  const calculateEstimates = () => {
    let baseROI = 2.4; // 2.4x
    let baseConv = 1.8; // 1.8%
    let trafficMultiplier = 0.45;

    if (industryFocus === "saas") {
      baseROI = 3.1;
      baseConv = 2.2;
      trafficMultiplier = 0.55;
    } else if (industryFocus === "finance") {
      baseROI = 2.8;
      baseConv = 1.5;
      trafficMultiplier = 0.35;
    } else if (industryFocus === "b2b") {
      baseROI = 3.6;
      baseConv = 2.9;
      trafficMultiplier = 0.65;
    }

    const estimatedTraffic = Math.floor((budget * trafficMultiplier) * 8.5);
    const estimatedLeads = Math.floor(estimatedTraffic * (baseConv / 100));
    const projectedReturn = Math.floor(budget * baseROI);

    return {
      roi: (baseROI * 100).toFixed(0) + "%",
      traffic: estimatedTraffic.toLocaleString(),
      leads: estimatedLeads.toLocaleString(),
      revenue: projectedReturn.toLocaleString()
    };
  };

  const results = calculateEstimates();

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background soft glow lines */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Core Description Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
                About Nexlo Systems
              </h2>
              <div className="flex items-center gap-4 mt-5">
                <span className="h-[1px] w-12 bg-[#7c3aed]"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] font-mono text-[#7c3aed]">Integrity & Core Insights</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#a1a1aa] font-sans text-base md:text-lg leading-relaxed flex flex-col gap-6"
            >
              <p className="text-white font-serif italic text-lg md:text-2xl opacity-90">
                At Nexlo Systems, we specialize in high-velocity digital marketing strategies that turn raw data into explosive business growth.
              </p>
              <p className="text-sm md:text-base leading-relaxed opacity-75">
                With tailored performance structures and a commitment to measurable, conversion-focused results, we empower modern brands to dominate searches, captivate social loops, and convert audience interest with surgical precision.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 5 Stats Cards Underneath with Vertical progress fills exactly like the screenshot with global level roundess */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-white/10 bg-[#121212] rounded-2xl p-5 flex flex-col justify-between overflow-hidden relative group/stat h-64 shadow-lg hover:border-white/30 transition-colors"
            >
              {/* Background vertical progress bar */}
              <div className="absolute inset-x-0 bottom-0 top-auto bg-[#7c3aed]/10 z-0 h-0 transition-all duration-1000 group-hover/stat:bg-[#7c3aed]/15"
                   style={{ height: `${stat.val}%`, transitionDelay: `${idx * 100}ms` }} />

              <div className="flex justify-between items-start relative z-10">
                <span className="text-xl">{stat.icon}</span>
                <span className="font-mono text-[9px] text-zinc-500 font-bold tracking-widest">
                  Active
                </span>
              </div>

              {/* Progress and percentage value */}
              <div className="relative z-10 pt-12 flex flex-col gap-2">
                <div className="flex items-baseline gap-1.5 font-sans font-black text-2xl text-white">
                  <span>{stat.val}%</span>
                  <span className="text-xs text-zinc-500 font-medium">/ 100%</span>
                </div>
                <div className="font-sans font-bold tracking-tight text-xs text-zinc-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand ROI and Performance Impact Estimator (Interactive Playground Widget) styled with global roundness */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-[#121212] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle top decoration */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#7c3aed]/[0.03] blur-[80px] pointer-events-none" />

          <div className="flex flex-col xl:flex-row gap-10 items-stretch">
            {/* Form Controls on Left */}
            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1px] w-6 bg-[#7c3aed]"></span>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#7c3aed]">
                    Estimate Performance Impact
                  </span>
                </div>
                <h3 className="font-sans font-black text-3xl text-white tracking-tighter">
                  Check your target results
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2 font-sans max-w-xl">
                  Select your marketing investment size and business industry to instantly calculate projected ROI, digital traffic jumps, and lead acquisition pipelines.
                </p>
              </div>

              {/* Budget Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold tracking-widest text-zinc-400 font-sans">
                    Monthly Ad Investment
                  </label>
                  <span className="font-sans font-black text-2.5xl text-[#7c3aed]">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="2500"
                    max="100000"
                    step="2500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#7c3aed]"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-zinc-500 px-1 pt-2">
                    <span>$2.5k / mo</span>
                    <span>$50k / mo</span>
                    <span>$100k / mo</span>
                  </div>
                </div>
              </div>

              {/* Industry / Focus Select Buttons with global roundness */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest text-zinc-400 font-sans block">
                  Industry Focus Vertical
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "retail", label: "E-Commerce / Retail" },
                    { id: "saas", label: "SaaS & Tech Product" },
                    { id: "finance", label: "Finance & Fintech" },
                    { id: "b2b", label: "Professional B2B" },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setIndustryFocus(ind.id)}
                      className={`text-xs px-3 py-3 rounded-full border font-bold tracking-wider transition-all cursor-pointer ${
                        industryFocus === ind.id
                          ? "bg-[#7c3aed] border-[#7c3aed] text-white"
                          : "bg-black/30 border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Board on Right (styled like a luxury stats readout) with roundness */}
            <div className="w-full xl:w-[480px] bg-black/60 rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[9px] font-mono tracking-widest text-[#7c3aed] font-bold block border-b border-white/10 pb-4">
                  Prospective KPI Forecast
                </span>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric Box 1 */}
                  <div className="bg-[#121212] p-4 border border-white/10 rounded-2xl">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">
                      Target ROI
                    </span>
                    <span className="font-sans font-black text-2.5xl lg:text-3xl text-[#7c3aed] block mt-1">
                      {results.roi}
                    </span>
                  </div>

                  {/* Metric Box 2 */}
                  <div className="bg-[#121212] p-4 border border-white/10 rounded-2xl">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">
                      New Leads / mo
                    </span>
                    <span className="font-sans font-black text-2.5xl lg:text-3xl text-white block mt-1">
                      +{results.leads}
                    </span>
                  </div>

                  {/* Metric Box 3 */}
                  <div className="bg-[#121212] p-4 border border-white/10 rounded-2xl">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">
                      Organic Traffic
                    </span>
                    <span className="font-sans font-black text-2.5xl lg:text-3xl text-white/50 block mt-1">
                      +{results.traffic}
                    </span>
                  </div>

                  {/* Metric Box 4 */}
                  <div className="bg-[#121212] p-4 border border-white/10 rounded-2xl">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">
                      Sales Forecast
                    </span>
                    <span className="font-sans font-black text-2.5xl lg:text-3xl text-white block mt-1">
                      ${results.revenue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estimate disclaimer */}
              <div className="flex gap-2 items-start text-[10px] text-zinc-500 leading-relaxed mt-6 bg-[#161616] border border-white/5 p-4 rounded-xl">
                <AlertCircle size={14} className="text-[#7c3aed] shrink-0 mt-0.5" />
                <span>
                  Estimates are simulated based on average benchmark performances across our typical client roster. Real performance depends on campaign maturity and budget consistency.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
