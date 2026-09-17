"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Brain,
  Hammer,
  Layers,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: <Brain size={17} />,
    title: "Think Differently",
    text: "We question assumptions, explore new possibilities, and look for smarter ways to solve meaningful problems.",
  },
  {
    icon: <Hammer size={17} />,
    title: "Build With Purpose",
    text: "We turn ideas into practical digital products designed to solve real problems and create lasting value.",
  },
  {
    icon: <Layers size={17} />,
    title: "Keep It Simple",
    text: "Complex technology should result in simple, intuitive experiences that people can actually use.",
  },
  {
    icon: <Sparkles size={17} />,
    title: "Create What Matters",
    text: "We focus on building useful products, thoughtful experiences, and technology that moves ideas forward.",
  },
];

const operatingPrinciples = [
  {
    number: "01",
    title: "DISCOVER",
    text: "Understand the problem, explore possibilities, and identify what is actually worth building.",
  },
  {
    number: "02",
    title: "CREATE",
    text: "Combine technology, design, and creativity to turn ideas into meaningful digital experiences.",
  },
  {
    number: "03",
    title: "DELIVER",
    text: "Refine, test, and launch products that are useful, reliable, and built for the real world.",
  },
];

export default function About() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-4 py-16 font-sans text-slate-900 sm:px-6 sm:py-20 md:py-28 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[15%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-200/40 via-indigo-100/30 to-cyan-100/20 blur-[130px] sm:h-[550px] sm:w-[550px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-cyan-200/30 via-blue-100/20 to-transparent blur-[130px] sm:h-[550px] sm:w-[550px]"
        />

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-blue-500 blur-[1px]"
        />

        <motion.div
          animate={{
            y: [20, -20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-2/3 h-2.5 w-2.5 rounded-full bg-indigo-500 blur-[1px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-3 text-center sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-semibold text-blue-700 shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
            <Compass className="text-blue-600" size={14} />

            <span className="font-mono uppercase tracking-widest">
              THE NOVAVEY STORY // 01
            </span>
          </div>

          <h2 className="text-3xl font-black leading-[1.1] tracking-[-0.04em] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            We Build Ideas Into{" "}
            <span className="text-blue-600">Digital Reality.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            NovaVey is a technology company focused on building modern
            software, intelligent systems, and digital experiences that solve
            real-world problems.
          </p>
        </motion.div>

        {/* ================= COMPANY STORY ================= */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 sm:gap-7 lg:grid-cols-12">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.3)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-30px_rgba(37,99,235,0.2)] sm:rounded-[1.75rem] sm:p-9 lg:col-span-7"
          >
            <div>
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                  Why NovaVey Exists
                </div>

                <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-700 sm:px-2.5 sm:py-1 sm:text-[11px]">
                  EST. 2026
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl md:text-3xl">
                Technology should turn ambitious ideas into something real.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base">
                NovaVey was created with a simple belief: technology is most
                valuable when it helps people turn ideas into useful products,
                better experiences, and meaningful solutions.
              </p>

              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                We bring together software development, artificial
                intelligence, creative technology, and modern digital
                experiences to build products that are practical, scalable,
                and designed around people.
              </p>

              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                We are still at the beginning of our journey. Our focus is on
                building strong foundations, creating meaningful products, and
                continuously exploring what technology can make possible.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 sm:mt-8 sm:pt-6">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 sm:text-[11px]">
                  FOUNDED BY
                </span>

                <span className="mt-0.5 block text-xs font-bold text-slate-900 sm:text-sm">
                  Malaika × Saad
                </span>
              </div>

              <a
                href="#founders"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                <span>Meet the Founders</span>

                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={14}
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-5">
            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="flex flex-1 flex-col justify-between space-y-5 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(37,99,235,0.15)] sm:space-y-6 sm:rounded-3xl sm:p-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] font-mono text-blue-600">
                  WHAT WE DO
                </p>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Software
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    We design and develop modern web applications and digital
                    products built around real user needs.
                  </p>
                </div>

                <div className="h-px w-full bg-slate-100" />

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Artificial Intelligence
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    We explore AI to create smarter workflows, intelligent
                    applications, and new digital possibilities.
                  </p>
                </div>

                <div className="h-px w-full bg-slate-100" />

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Digital Experiences
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    We combine technology and design to create experiences
                    that feel clear, purposeful, and effortless to use.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.a
              href="#vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="group relative flex min-h-[120px] items-center justify-between overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-5 text-white shadow-lg sm:min-h-[140px] sm:rounded-3xl sm:p-6"
            >
              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-500/30 blur-2xl sm:h-32 sm:w-32"
              />

              <div className="relative z-10 max-w-[72%] space-y-1 sm:max-w-[70%]">
                <span className="block text-[10px] font-mono font-semibold uppercase tracking-widest text-blue-400">
                  OUR VISION
                </span>

                <h4 className="text-sm font-bold tracking-wide text-white sm:text-base">
                  Building What Comes Next
                </h4>

                <p className="text-[11px] font-light leading-relaxed text-slate-300 sm:text-xs">
                  We want to create technology that is useful today and opens
                  the door to what is possible tomorrow.
                </p>
              </div>

              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12"
        >
          <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />

                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-[10px]">
                  NOVAVEY / HOW WE WORK
                </span>
              </div>

              <h3 className="text-xl font-black tracking-[-0.025em] text-slate-900 sm:text-2xl md:text-3xl">
                From idea to{" "}
                <span className="text-blue-600">real product.</span>
              </h3>
            </div>

            <span className="text-[8px] font-mono uppercase tracking-[0.18em] text-slate-400">
              03 PRINCIPLES / OUR APPROACH
            </span>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm md:grid-cols-3">
            {operatingPrinciples.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgba(239,246,255,0.45)",
                }}
                className={`group relative p-4 transition-colors duration-300 sm:p-5 ${
                  index !== 0
                    ? "border-t border-slate-200 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-blue-600">
                    {item.number}
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-widest text-slate-300 transition-colors group-hover:text-blue-400">
                    0{index + 1} / PROCESS
                  </span>
                </div>

                <h4 className="text-sm font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-base">
                  {item.title}
                </h4>

                <p className="mt-2 max-w-xs text-[11px] leading-5 text-slate-500 sm:text-xs">
                  {item.text}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-px w-8 bg-blue-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-500" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-300">
                    NOVAVEY
                  </span>
                </div>

                <span className="pointer-events-none absolute -right-1 -top-3 font-mono text-[64px] font-black leading-none tracking-[-0.08em] text-blue-600/[0.035] transition-all duration-300 group-hover:text-blue-600/[0.07]">
                  {item.number}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ================= COMPANY VALUES ================= */}
          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                }}
                className="group bg-white/75 p-3.5 transition-colors duration-300 sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <span className="font-mono text-[7px] font-bold tracking-widest text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="mt-3 text-xs font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-sm">
                  {item.title}
                </h4>

                <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-slate-400 sm:text-[11px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Status */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />

              <span className="text-[7px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-[8px]">
                NOVAVEY / BUILDING
              </span>
            </div>

            <span className="text-[7px] font-mono uppercase tracking-[0.18em] text-slate-300 sm:text-[8px]">
              DISCOVER → CREATE → DELIVER
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}