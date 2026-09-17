"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Shield,
  CalendarDays,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

// Company Metadata Object
export const techHouse = {
  brand: "NovaVey Tech",
  founded: 2026,
  focus: "Technology & Innovation",
  founders: ["Malaika", "Saad"],
};

export default function Hero() {
  // Gentle mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 12);
    mouseY.set((clientY / innerHeight - 0.5) * 12);
  };

  const cardParallaxX = useTransform(mouseX, (val) => val * 0.3);
  const cardParallaxY = useTransform(mouseY, (val) => val * 0.3);
  const laptopParallaxX = useTransform(mouseX, (val) => val * 0.15);
  const laptopParallaxY = useTransform(mouseY, (val) => val * 0.15);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-white text-slate-900 py-12 sm:py-20 lg:py-28"
    >
      {/* Light Grid Pattern with Pixel Touch */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,82,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,82,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Primary Brand Blue Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px] pointer-events-none"
      />

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[70px] font-black tracking-[12px] bg-gradient-to-r from-[#0A1128]/5 via-[#0052FF]/10 to-[#2563EB]/5 bg-clip-text text-transparent sm:text-[160px] md:text-[200px] lg:text-[260px]"
        style={{
          filter: "drop-shadow(0px 10px 25px rgba(0, 82, 255, 0.08))",
        }}
      >
        NOVAVEY
      </motion.h2>

      {/* Top & Bottom Soft Vignette Transitions */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Headline & Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-50/80 border-l-2 border-[#0052FF] py-1 pl-3 pr-3.5 text-xs font-mono font-bold tracking-wider text-[#0A1128] uppercase"
            >
              <span className="text-[10px] text-[#0052FF]">●</span>
              <span>EST. 2026 • TECHNOLOGY &amp; INNOVATION</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 max-w-4xl text-3xl font-black tracking-tight leading-[1.1] text-[#0A1128] sm:text-5xl lg:text-[3.75rem]"
            >
              Turning Ideas Into
              <span className="block bg-gradient-to-r from-[#0A1128] via-[#0052FF] to-[#2563EB] bg-clip-text text-transparent">
                Digital Reality.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              NovaVey Tech is a technology and education studio building digital products, intelligent software, and practical learning experiences for the next generation of businesses and creators.
            </motion.p>

            {/* Small capability line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono font-semibold tracking-wide text-slate-500"
            >
              <span className="text-[#0052FF]">WEB</span>
              <span>•</span>
              <span className="text-[#0052FF]">SOFTWARE</span>
              <span>•</span>
              <span className="text-[#0052FF]">AI</span>
              <span>•</span>
              <span className="text-[#0052FF]">EDUCATION</span>
            </motion.div>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 sm:mt-7 flex flex-wrap gap-4 items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 sm:px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/40"
              >
                Start a Project <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 sm:px-7 py-3 text-sm font-bold text-[#0A1128] backdrop-blur-md transition-all hover:bg-blue-50 hover:border-blue-300 hover:text-[#0052FF]"
              >
                Explore What We Do
              </a>
            </motion.div>

            {/* Metrics Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 sm:mt-8 flex w-full max-w-xl flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 rounded-3xl border border-blue-100 bg-white/90 p-4 sm:p-5 backdrop-blur-xl shadow-xl shadow-blue-500/5"
            >
              {[
               
  { value: "2026", label: "Founded", icon: CalendarDays },
  { value: "360°", label: "Digital Solutions", icon: Layers },
  { value: "∞", label: "Ideas Engineered", icon: Zap },

              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3.5 w-full sm:w-auto">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF] border border-blue-100">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0A1128]">{item.value}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {item.label}
                      </p>
                    </div>
                    {index !== 2 && (
                      <div className="hidden sm:block ml-auto h-8 w-px bg-slate-200" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Hero Graphic, Neon Circles, Technical Nodes & 5 Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center py-8 sm:py-12 min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] w-full overflow-visible"
          >
            {/* Vibrant Neon Light Circles & Glowing Background Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full border border-blue-500/30 shadow-[0_0_30px_rgba(0,82,255,0.25)] animate-pulse" />
              <div className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full border border-cyan-400/20 shadow-[0_0_40px_rgba(6,182,212,0.15)]" />
              <div className="absolute h-[480px] w-[480px] sm:h-[560px] sm:w-[560px] rounded-full border border-blue-600/10" />
            </div>

            {/* Technical Node Network Lines & Glowing Dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 500 500" fill="none">
              <path d="M50 90 L250 250 L450 110" stroke="rgba(0, 82, 255, 0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M70 410 L250 250 L430 390" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
              <circle cx="50" cy="90" r="4" fill="#0052FF" className="shadow-[0_0_8px_#0052FF]" />
              <circle cx="450" cy="110" r="4" fill="#06B6D4" />
              <circle cx="70" cy="410" r="4" fill="#0052FF" />
              <circle cx="430" cy="390" r="4" fill="#2563EB" />
              <circle cx="250" cy="250" r="6" fill="#0052FF" fillOpacity="0.8" />
            </svg>

            {/* Laptop Image (Fully visible on all viewports, absolute center) */}
            <motion.div
              style={{ x: laptopParallaxX, y: laptopParallaxY }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 scale-105 sm:scale-110 lg:scale-125 px-4 sm:px-0"
            >
              <Image
                src="/images/laptop.png"
                alt="NovaVey Tech Digital Solutions"
                width={520}
                height={520}
                priority
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,82,255,0.25)] max-w-full h-auto"
              />
            </motion.div>

            {/* Parallax Container for the 5 Floating Cards (Fully responsive: stacks/scales smoothly on mobile & tablet instead of disappearing) */}
            <motion.div 
              style={{ x: cardParallaxX, y: cardParallaxY }}
              className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
            >
              {/* FLOATING CARD 1: Code Window with Founders (Malaika & Saad) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1 sm:left-4 lg:-left-6 top-2 sm:top-4 lg:top-2 w-48 sm:w-56 lg:w-64 rounded-2xl border border-blue-200/60 bg-white/95 backdrop-blur-2xl p-3 shadow-xl shadow-blue-500/15 pointer-events-auto scale-[0.85] sm:scale-95 lg:scale-[1.12] origin-top-left"
              >
                <div className="mb-2 flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[9px] sm:text-[10px] font-mono text-[#0052FF] font-semibold">const novaVey = {"{"}</p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-slate-700">
                  company: <span className="text-emerald-600 font-medium">&quot;{techHouse.brand}&quot;</span>,
                </p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-slate-700">
                  founded: <span className="text-indigo-600 font-medium">{techHouse.founded}</span>,
                </p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-slate-700">
                  focus: <span className="text-[#0052FF] font-medium">&quot;{techHouse.focus}&quot;</span>,
                </p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-slate-700">
                  founders: <span className="text-amber-600 font-medium">[&quot;Malaika&quot;, &quot;Saad&quot;]</span>
                </p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-[#0052FF] font-semibold">{"}"}</p>
              </motion.div>

              {/* FLOATING CARD 2: Smart Development Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1 sm:right-4 lg:-right-6 top-4 sm:top-6 lg:top-8 rounded-2xl border border-blue-200/60 bg-white/95 backdrop-blur-xl p-2.5 sm:p-3 shadow-xl shadow-blue-500/15 pointer-events-auto scale-[0.85] sm:scale-95 lg:scale-[1.12] origin-top-right"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl bg-blue-50 p-2 text-[#0052FF]">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0A1128]">Smart Development</h3>
                    <p className="text-[10px] text-slate-500">Modern tech stack</p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: Initializing Technology Widget */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1 sm:left-4 lg:-left-6 bottom-2 sm:bottom-4 lg:bottom-4 w-48 sm:w-52 lg:w-56 rounded-2xl border border-blue-200/60 bg-white/95 backdrop-blur-2xl p-2.5 sm:p-3 shadow-xl shadow-blue-500/15 pointer-events-auto scale-[0.85] sm:scale-95 lg:scale-[1.12] origin-bottom-left overflow-hidden"
              >
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400">System State</p>
                      <div className="mt-0.5 flex items-center gap-1.5">
                        <h3 className="text-[11px] sm:text-xs font-mono font-bold text-[#0A1128]">Initializing Tech</h3>
                        <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7px] sm:text-[8px] font-bold text-[#0052FF] border border-blue-200">
                          Live
                        </span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-[#0052FF]">
                      <Zap size={14} />
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0052FF] to-blue-400"
                    />
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 4: Secure Cloud */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1 sm:right-4 lg:-right-6 bottom-4 sm:bottom-6 lg:bottom-6 rounded-2xl border border-blue-200/60 bg-white/95 backdrop-blur-xl p-2.5 sm:p-3 shadow-xl shadow-blue-500/15 pointer-events-auto scale-[0.85] sm:scale-95 lg:scale-[1.12] origin-bottom-right"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl bg-blue-50 p-2 text-[#0052FF]">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0A1128]">Security First</h3>
                    <p className="text-[10px] text-slate-500">Built with safety</p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 5: Center Tech Badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-blue-500/15 pointer-events-auto scale-90 sm:scale-100 lg:scale-[1.12]"
              >
                <span className="h-2 w-2 rounded-full bg-[#0052FF] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#0A1128]">NovaVey Core Engine</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <ChevronDown size={22} className="text-blue-600" />
      </motion.div>
    </section>
  );
}