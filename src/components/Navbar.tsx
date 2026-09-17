"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  // Scroll Progress Setup (Thinner progress bar: h-[2px])
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

const links = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Our Story", href: "#our-story", number: "02" },
  { label: "Services", href: "#services", number: "03" },

  { label: "Vision", href: "#vision", number: "04" },

  { label: "Contact", href: "#contact", number: "05" },
];
  // Body Scroll Locking & ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };

    if (expanded) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded]);

const navContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* THIN PAGE SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-blue-500 to-[#0052FF]"
        style={{ scaleX }}
      />

      {/* MOBILE TOP BRAND HEADER */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-slate-100 bg-white/90 px-6 py-4 backdrop-blur-md md:hidden">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="relative flex items-center gap-3"
        >
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src="/images/logo-2.png"
              alt="NovaVey Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-[#0A1128]">
              NovaVey
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052FF]">
              Technology & Education
            </span>
          </div>
        </a>

        {/* ROTATING HAMBURGER ICON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#0052FF] transition-colors hover:bg-blue-50"
          aria-label="Toggle Mobile Drawer"
          aria-expanded={expanded}
          aria-controls="navigation-drawer"
        >
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {expanded ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* DESKTOP FIXED VERTICAL STRIP (w-24) */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 z-50 w-24 flex-col items-center justify-between border-r border-slate-200/80 bg-white/95 py-8 backdrop-blur-xl">
        {/* LOGO NODE */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="group relative flex items-center justify-center"
        >
          <div className="absolute h-12 w-12 rounded-full bg-blue-500/15 blur-lg group-hover:bg-blue-500/30 transition-all duration-500" />
          <div className="relative h-11 w-11 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo-2.png"
              alt="NovaVey Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* VERTICAL ROTATED TEXT / HAMBURGER */}
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#0052FF] transition-colors hover:bg-[#0052FF] hover:text-white"
            aria-label="Toggle Side Drawer"
            aria-expanded={expanded}
            aria-controls="navigation-drawer"
          >
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {expanded ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>

          <span className="rotate-180 font-mono text-[16px] font-bold tracking-[0.25em] text-slate-400 uppercase [writing-mode:vertical-lr]">
          NOVAVEY
          </span>
        </div>

        {/* BOTTOM ACTION NODE */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-[#0052FF] opacity-20 blur-sm transition-all group-hover:opacity-60" />
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1128] text-white transition-all hover:bg-[#0052FF] hover:scale-105"
            title="Start a Project"
          >
            <ArrowUpRight size={22} />
          </a>
        </div>
      </aside>

      {/* EXPANDABLE OFF-CANVAS DRAWER */}
      <AnimatePresence>
        {expanded && (
          <>
            {/* Backdrop Dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(false)}
              className="fixed inset-0 z-40 bg-[#0A1128]/20 backdrop-blur-sm"
            />

            {/* Slide-out Panel */}
            <motion.div
              id="navigation-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 z-50 flex w-full max-w-md flex-col justify-between border-r border-slate-200/80 bg-white/95 p-8 pt-20 md:left-24 md:pt-8 backdrop-blur-3xl shadow-2xl overflow-y-auto no-scrollbar"
            >
              <div>
                {/* Panel Brand Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src="/images/logo-2.png"
                        alt="NovaVey Logo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black tracking-tight text-[#0A1128]">
                          NovaVey
                        </span>
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.15em] text-[#0052FF] uppercase mt-0.5">
                        Technology & Education
                      </span>
                    </div>
                  </div>

                  {/* Mobile Close Button */}
                  <button
                    onClick={() => setExpanded(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 md:hidden"
                    aria-label="Close Menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Company Status Indicator */}
                <div className="mt-6 flex items-center gap-2 px-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Accepting New Projects • Est. 2026
                  </span>
                </div>

                {/* Numbered Navigation Links */}
                <motion.nav
                  variants={navContainerVariants}
                  initial="hidden"
                  animate="show"
                  className="mt-4 flex flex-col gap-1.5"
                >
                  {links.map((item) => {
                    const isActive = activeTab === item.label;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        variants={navItemVariants}
                        onClick={(e) => {
                          handleScrollTo(e, item.href);
                          setActiveTab(item.label);
                          setExpanded(false);
                        }}
                        className={`group relative flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm md:text-base font-bold transition-all ${
                          isActive
                            ? "bg-slate-50 text-[#0052FF]"
                            : "text-slate-700 hover:bg-slate-50/60 hover:text-[#0A1128]"
                        }`}
                      >
                        {/* ACTIVE BORDER INDICATOR */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#0052FF]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}

                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0052FF] transition-colors">
                            {item.number}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight
                          size={16}
                          className={`transition-all duration-300 transform group-hover:translate-x-1 ${
                            isActive ? "opacity-100 text-[#0052FF]" : "opacity-0 group-hover:opacity-100 text-slate-400"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </motion.nav>
              </div>

              {/* Bottom CTA Card */}
              <div className="mt-8 relative rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#0052FF]">
                  Have an Idea?
                </p>
                <p className="mt-1 text-sm text-slate-600 font-medium">
                  Let&apos;s turn it into something real.
                </p>

                <div className="relative mt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      handleScrollTo(e, "#contact");
                      setExpanded(false);
                    }}
                    className="relative flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0052FF] py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}