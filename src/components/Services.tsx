
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Terminal,
  Cpu,
  Database,
  CloudRain,
} from "lucide-react";

type ServiceDetail = {
  num: string;
  title: string;
  category: string;
  desc: string;
  stack: string[];
};

const services: ServiceDetail[] = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    category: "WEB & SAAS",
    desc: "We build fast, responsive websites, SaaS platforms, and custom web applications that turn complex ideas into clear, intuitive digital experiences.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "MOBILE DEVELOPMENT",
    category: "MOBILE PRODUCTS",
    desc: "From startup MVPs to production-ready apps, we create reliable mobile experiences for iOS and Android with thoughtful interfaces and smooth performance.",
    stack: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    num: "03",
    title: "AI & AUTOMATION",
    category: "AI SOLUTIONS",
    desc: "We integrate practical AI into products and workflows — from intelligent assistants and document processing to automated operations and data-driven experiences.",
    stack: ["Python", "LLMs", "OpenAI", "LangChain"],
  },
  {
    num: "04",
    title: "BACKEND ENGINEERING",
    category: "APIs & DATA",
    desc: "We design the systems behind your product — secure APIs, databases, authentication, and business logic built to stay reliable as your application grows.",
    stack: ["Node.js", "PostgreSQL", "REST APIs", "Authentication"],
  },
  {
    num: "05",
    title: "CLOUD & DEVOPS",
    category: "CLOUD & DELIVERY",
    desc: "We take products from development to production with dependable hosting, automated deployments, monitoring, and infrastructure that is ready to scale.",
    stack: ["Vercel", "AWS", "Docker", "CI/CD"],
  },
  {
    num: "06",
    title: "SECURITY & RELIABILITY",
    category: "SECURE BY DESIGN",
    desc: "Security is considered from the beginning — protecting accounts, APIs, data, and application infrastructure without compromising the user experience.",
    stack: ["OAuth", "JWT", "Encryption", "Security Reviews"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We understand your idea, users, business goals, and technical requirements before defining the solution.",
  },
  {
    num: "02",
    title: "PLAN",
    desc: "We turn the requirements into a clear product roadmap, system architecture, technology stack, and delivery plan.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "We design and develop the product in focused iterations, keeping you involved throughout the process.",
  },
  {
    num: "04",
    title: "LAUNCH & GROW",
    desc: "We deploy, test, optimize, and continue improving your product as your users, business, and requirements evolve.",
  },
];

const architectureLayers = [
  "EXPERIENCE",
  "INTELLIGENCE",
  "DATA",
  "INFRASTRUCTURE",
];

const architecturePrinciples = [
  {
    num: "01",
    title: "Clean separation",
    desc: "Each layer has a clear responsibility.",
  },
  {
    num: "02",
    title: "API-driven",
    desc: "Systems communicate through reliable interfaces.",
  },
  {
    num: "03",
    title: "Ready to evolve",
    desc: "New features can grow without rebuilding the core.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceDetail>(
    services[0]
  );

  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 font-sans text-slate-900 sm:py-28"
    >
      {/* =========================================================
          LIGHTWEIGHT BACKGROUND
      ========================================================= */}

  

    
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-md border-l-2 border-[#0052FF] bg-blue-50/80 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0A1128]">
            <span className="text-[10px] text-[#0052FF]">[SYS_OK]</span>
            <span>NOVAVEY_TECH_HOUSE</span>
          </div>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-[#0A1128] sm:text-4xl md:text-5xl">
            We engineer what{" "}
            <span className="bg-gradient-to-r from-[#0052FF] via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              comes next.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Web platforms, intelligent systems, mobile products, and
            infrastructure — designed to work together from the start.
          </p>
        </div>

        {/* =========================================================
            SERVICE EXPERIENCE
        ========================================================= */}

        <div className="relative w-full overflow-hidden">
          {/* =======================================================
              AI FACE — STATIC / LIGHTWEIGHT
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-40px]
              top-[80px]
              z-0
              hidden
              h-[330px]
              w-[330px]
              items-center
              justify-center
              opacity-25
              sm:right-[-60px]
              sm:top-[70px]
              sm:flex
              sm:h-[400px]
              sm:w-[400px]
              sm:opacity-30
              lg:right-[-70px]
              lg:top-[40px]
              lg:h-[620px]
              lg:w-[620px]
              lg:opacity-60
              xl:right-[-90px]
              xl:h-[720px]
              xl:w-[720px]
            "
          >
       

            {/* Static technical rings */}
            <div className="absolute inset-[20px] rounded-full border border-blue-500/[0.12]" />

            <div className="absolute inset-[70px] rounded-full border border-dashed border-indigo-500/[0.12]" />

            <div className="absolute inset-[120px] rounded-full border border-sky-500/[0.08]" />

            {/* AI FACE */}
            <div className="absolute inset-[55px] z-10 flex items-center justify-center lg:inset-[65px]">
              <Image
                src="/images/ai-face.png"
                alt=""
                width={800}
                height={800}
                loading="lazy"
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 500px, 400px"
                className="h-full w-full object-contain opacity-50 contrast-125"
              />
            </div>

            {/* Static data points */}
            <span className="absolute left-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2" />

            <span className="absolute bottom-[25%] right-[10%] h-1.5 w-1.5 rounded-full bg-indigo-500 sm:h-2 sm:w-2" />

            <span className="absolute right-[5%] top-[48%] h-1.5 w-1.5 rounded-full bg-sky-400" />

            <span className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-blue-400" />
          </div>

          {/* =======================================================
              SERVICE LIST
          ======================================================= */}

          <div className="relative z-20 w-full max-w-5xl border-t border-slate-200 lg:pr-72">
            {services.map((srv) => {
              const isActive = activeService.num === srv.num;

              return (
                <div
                  key={srv.num}
                  onMouseEnter={() => setActiveService(srv)}
                  onClick={() => setActiveService(srv)}
                  className={`group relative w-full cursor-pointer border-b border-l-2 transition-colors duration-150 ${
                    isActive
                      ? "border-l-blue-600 bg-blue-50/20"
                      : "border-slate-200 border-l-transparent hover:border-slate-300"
                  }`}
                >
                  {/* SERVICE HEADER */}

                  <div className="flex w-full flex-col justify-between gap-3 px-0 py-5 sm:flex-row sm:items-center sm:gap-4 sm:py-7">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-6">
                      <span
                        className={`shrink-0 font-mono text-[10px] font-bold tracking-wider sm:text-xs ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {srv.num}
                      </span>

                      <h3
                        className={`min-w-0 text-lg font-extrabold leading-tight tracking-tight transition-colors duration-150 sm:text-2xl md:text-3xl ${
                          isActive
                            ? "text-[#0A1128]"
                            : "text-slate-500 group-hover:text-slate-900"
                        }`}
                      >
                        {srv.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 pl-7 sm:pl-0">
                      <span
                        className={`font-mono text-[8px] uppercase tracking-widest sm:text-[9px] ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {srv.category}
                      </span>

                      {isActive && (
                        <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-emerald-500 sm:text-[9px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      SERVICE DETAILS
                  ================================================= */}

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-7 pr-3 sm:pb-7 sm:pl-12 sm:pr-4">
                        <p className="mb-5 max-w-2xl text-xs font-light leading-5 text-slate-600 sm:text-base sm:leading-relaxed">
                          {srv.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="mr-1 shrink-0 font-mono text-[8px] uppercase tracking-widest text-slate-400 sm:text-[9px]">
                            STACK
                          </span>

                          {srv.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-blue-100 bg-blue-50/70 px-2 py-1 font-mono text-[9px] font-medium text-blue-700 sm:px-2.5 sm:text-[10px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SYSTEM ARCHITECTURE
        ========================================================= */}

        <div className="relative mt-20 border-y border-slate-200 py-12">
          {/* Lightweight blueprint dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(#2563eb 0.7px, transparent 0.7px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            {/* =====================================================
                ARCHITECTURE HEADER
            ===================================================== */}

            <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-8">
                <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span className="text-[#0052FF]">[SYS_ARCH]</span>
                  <span className="h-px w-8 bg-blue-200" />
                  <span>NOVAVEY ENGINEERING</span>
                </div>

                <h3 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#0A1128] sm:text-5xl md:text-6xl">
                  Built as a system.
                  <span className="mt-2 block bg-gradient-to-r from-[#0052FF] via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                    Designed to scale.
                  </span>
                </h3>

                <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base">
                  Every NovaVey product is designed as a connected technical
                  system — from the interface users see to the infrastructure
                  running behind it.
                </p>
              </div>

              {/* SYSTEM LAYERS */}

              <div className="lg:col-span-4">
                <div className="relative min-h-[190px] border-l border-slate-200 pl-7">
                  <div className="absolute left-[-1px] top-0 h-16 w-[2px] bg-[#0052FF]" />

                  <div className="font-mono text-[72px] font-black leading-none tracking-[-0.08em] text-blue-600/10 sm:text-[90px]">
                    04
                  </div>

                  <div className="absolute left-7 top-8">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-600">
                      SYSTEM LAYERS
                    </span>

                    <div className="mt-4 space-y-2">
                      {architectureLayers.map((layer, index) => (
                        <div
                          key={layer}
                          className="flex items-center gap-3"
                        >
                          <span className="font-mono text-[9px] text-slate-400">
                            0{index + 1}
                          </span>

                          <span className="font-mono text-[10px] font-bold tracking-wider text-slate-700">
                            {layer}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-7 right-0 flex items-center justify-between border-t border-slate-200 pt-3">
                    <span className="font-mono text-[8px] tracking-widest text-slate-400">
                      ARCHITECTURE / 2026
                    </span>

                    <span className="font-mono text-[8px] tracking-widest text-blue-600">
                      MODULAR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                ARCHITECTURE FLOW
            ===================================================== */}

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              {/* LEFT */}

              <div className="space-y-6 lg:col-span-4">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-blue-600">
                    SYSTEM OVERVIEW
                  </span>

                  <h4 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                    One foundation.
                    <span className="block text-slate-400">
                      Multiple capabilities.
                    </span>
                  </h4>
                </div>

                <p className="text-sm font-light leading-relaxed text-slate-600">
                  Our architecture keeps the experience layer, application
                  logic, intelligence, data, and infrastructure connected
                  without creating unnecessary complexity.
                </p>

                <div className="space-y-3">
                  {architecturePrinciples.map((item) => (
                    <div
                      key={item.num}
                      className="flex gap-3 border-b border-slate-200 py-3"
                    >
                      <span className="pt-1 font-mono text-[9px] font-bold text-blue-600">
                        {item.num}
                      </span>

                      <div>
                        <h5 className="text-xs font-bold text-slate-900">
                          {item.title}
                        </h5>

                        <p className="mt-1 text-[11px] text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — SYSTEM MAP */}

              <div className="lg:col-span-8">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  {/* Lightweight grid */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px)
                      `,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="relative z-10 mb-7 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />

                      <span className="font-mono text-[9px] font-bold tracking-widest text-slate-500">
                        NOVAVEY SYSTEM MAP
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-slate-400">
                      v1.0 / ACTIVE
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3">
                    {/* EXPERIENCE */}

                    <div className="flex items-center justify-between gap-4 rounded-xl border border-blue-200 bg-white px-4 py-4 transition-colors duration-150 hover:border-blue-500">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Terminal size={16} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-blue-600">
                              01
                            </span>

                            <span className="font-mono text-xs font-bold text-slate-900">
                              EXPERIENCE
                            </span>
                          </div>

                          <p className="text-[10px] text-slate-400">
                            Web · Mobile · Interfaces
                          </p>
                        </div>
                      </div>

                      <div className="hidden gap-1.5 sm:flex">
                        {["Next.js", "React", "Flutter"].map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[8px] text-slate-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-5 w-px bg-blue-300" />
                    </div>

                    {/* CORE */}

                    <div className="relative overflow-hidden rounded-xl border border-blue-600 bg-slate-950 px-5 py-5 text-white">
                      <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-600/10" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/20">
                            <Cpu size={16} className="text-blue-400" />
                          </div>

                          <div>
                            <span className="font-mono text-[8px] tracking-widest text-blue-400">
                              02 / CORE
                            </span>

                            <h4 className="font-mono text-xs font-black tracking-wider">
                              NOVAVEY ENGINE
                            </h4>
                          </div>
                        </div>

                        <span className="hidden font-mono text-[8px] text-slate-500 sm:block">
                          LOGIC · SERVICES · WORKFLOWS
                        </span>
                      </div>
                    </div>

                    {/* BRANCH */}

                    <div className="relative h-7">
                      <div className="absolute left-1/2 top-0 h-3.5 w-px bg-blue-300" />

                      <div className="absolute left-[25%] right-[25%] top-3.5 h-px bg-blue-300" />

                      <div className="absolute left-[25%] top-3.5 h-3.5 w-px bg-blue-300" />

                      <div className="absolute right-[25%] top-3.5 h-3.5 w-px bg-blue-300" />
                    </div>

                    {/* INTELLIGENCE + DATA */}

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-indigo-200 bg-white p-4 transition-colors duration-150 hover:border-indigo-500">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <Cpu size={14} />
                          </div>

                          <div>
                            <span className="font-mono text-[8px] text-indigo-600">
                              03A
                            </span>

                            <h4 className="font-mono text-[10px] font-bold text-slate-900">
                              INTELLIGENCE
                            </h4>
                          </div>
                        </div>

                        <p className="mt-3 text-[10px] text-slate-500">
                          AI · Python · Automation
                        </p>
                      </div>

                      <div className="rounded-xl border border-blue-200 bg-white p-4 transition-colors duration-150 hover:border-blue-500">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <Database size={14} />
                          </div>

                          <div>
                            <span className="font-mono text-[8px] text-blue-600">
                              03B
                            </span>

                            <h4 className="font-mono text-[10px] font-bold text-slate-900">
                              DATA & API
                            </h4>
                          </div>
                        </div>

                        <p className="mt-3 text-[10px] text-slate-500">
                          Node.js · PostgreSQL · REST
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-5 w-px bg-sky-300" />
                    </div>

                    {/* INFRASTRUCTURE */}

                    <div className="flex items-center justify-between gap-4 rounded-xl border border-sky-200 bg-white px-4 py-4 transition-colors duration-150 hover:border-sky-500">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                          <CloudRain size={16} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-sky-600">
                              04
                            </span>

                            <span className="font-mono text-xs font-bold text-slate-900">
                              INFRASTRUCTURE
                            </span>
                          </div>

                          <p className="text-[10px] text-slate-400">
                            Deployment · Scaling · Reliability
                          </p>
                        </div>
                      </div>

                      <div className="hidden gap-1.5 sm:flex">
                        {["AWS", "Docker", "Vercel", "CI/CD"].map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-sky-100 bg-sky-50 px-2 py-1 font-mono text-[8px] text-sky-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MAP FOOTER */}

                  <div className="relative z-10 mt-7 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="font-mono text-[9px] text-slate-400">
                      STACK: FULL-STACK & CLOUD INTEGRATED
                    </span>

                    <span className="font-mono text-[9px] font-bold text-blue-600">
                      SECURE & SCALABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DELIVERY PROCESS
        ========================================================= */}

        <div className="relative mx-auto mt-12 w-full max-w-6xl overflow-hidden">
          {/* =======================================================
              BACKGROUND
          ======================================================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(37,99,235,0.15) 0.7px, transparent 0.7px)",
              backgroundSize: "18px 18px",
            }}
          />

         
          {/* Architectural frame */}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

          <div className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-blue-100/50 lg:block" />

          <div className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-px bg-blue-100/50 lg:block" />

          {/* Corner markers */}

          <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-blue-300/50" />

          <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-blue-300/50" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-blue-300/50" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-blue-300/50" />

          {/* =======================================================
              CONTENT
          ======================================================= */}

          <div className="relative z-10 px-3 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
            {/* HEADER */}

            <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-12">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-blue-600 sm:text-[10px] sm:tracking-[0.18em]">
                  [DELIVERY_METHODOLOGY]
                </span>

                <span className="hidden h-px w-6 bg-blue-200 sm:block" />

                <span className="hidden font-mono text-[8px] tracking-widest text-slate-400 sm:block">
                  NOVAVEY PROCESS
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.035em] text-[#0A1128] sm:text-3xl md:text-4xl">
                How we build{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  together.
                </span>
              </h3>

              <p className="mx-auto mt-3 max-w-xl px-2 text-[10px] font-light leading-relaxed text-slate-500 sm:px-0 sm:text-sm">
                A clear, predictable process from your initial idea to
                deployment and ongoing growth.
              </p>
            </div>

            {/* =====================================================
                PROCESS GRID
            ===================================================== */}

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {processSteps.map((step, idx) => {
                const isCurrent = activeProcess === idx;

                return (
                  <div
                    key={step.num}
                    onMouseEnter={() => setActiveProcess(idx)}
                    onClick={() => setActiveProcess(idx)}
                    className={`group relative min-h-[215px] w-full cursor-pointer overflow-hidden border bg-white/80 p-3 transition-[transform,border-color,box-shadow] duration-200 sm:min-h-[215px] sm:p-5 lg:min-h-[225px] ${
                      isCurrent
                        ? "border-blue-400 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/10"
                        : "border-slate-200/80 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                    }`}
                  >
                    {/* Active glow */}

                    {isCurrent && (
                      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-100/60 sm:-right-16 sm:-top-16 sm:h-40 sm:w-40" />
                    )}

                    {/* Active side line */}

                    <div
                      className={`absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-blue-600 transition-transform duration-200 ${
                        isCurrent ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    {/* Background number */}

                    <span
                      className={`pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[48px] font-black leading-none tracking-[-0.08em] transition-colors duration-200 sm:-top-4 sm:text-[80px] ${
                        isCurrent
                          ? "text-blue-600/[0.07]"
                          : "text-slate-900/[0.025]"
                      }`}
                    >
                      {step.num}
                    </span>

                    {/* STEP HEADER */}

                    <div className="relative z-10 mb-5 flex items-center justify-between sm:mb-8">
                      <span
                        className={`font-mono text-[9px] font-black tracking-[0.12em] sm:text-[11px] sm:tracking-[0.15em] ${
                          isCurrent
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {step.num}
                      </span>

                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                          isCurrent
                            ? "bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                            : "bg-slate-200"
                        }`}
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="relative z-10 min-w-0">
                      <div className="mb-2 flex min-w-0 items-center gap-1.5 sm:gap-2">
                        <span className="h-px w-4 shrink-0 bg-blue-200 transition-all duration-200 group-hover:w-6 sm:w-5 sm:group-hover:w-8" />

                        <span
                          className={`truncate font-mono text-[6px] font-bold uppercase tracking-[0.12em] sm:text-[8px] sm:tracking-[0.16em] ${
                            isCurrent
                              ? "text-blue-600"
                              : "text-slate-400"
                          }`}
                        >
                          Phase {step.num}
                        </span>
                      </div>

                      <h4
                        className={`break-words text-[13px] font-black leading-tight tracking-[-0.02em] sm:text-lg ${
                          isCurrent
                            ? "text-[#0A1128]"
                            : "text-slate-800"
                        }`}
                      >
                        {step.title}
                      </h4>

                      <p className="mt-2 max-w-sm break-words text-[9px] font-light leading-[1.55] text-slate-500 sm:text-xs sm:leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* BOTTOM METADATA */}

                    <div className="absolute bottom-0 left-3 right-3 flex items-center justify-between gap-1 border-t border-slate-100 py-2.5 sm:left-5 sm:right-5 sm:py-3">
                      <span className="min-w-0 truncate font-mono text-[5.5px] uppercase tracking-[0.1em] text-slate-400 sm:text-[8px] sm:tracking-[0.16em]">
                        NOVAVEY / {step.num}
                      </span>

                      <span
                        className={`shrink-0 font-mono text-[5.5px] uppercase tracking-[0.1em] sm:text-[8px] sm:tracking-[0.15em] ${
                          isCurrent
                            ? "text-blue-600"
                            : "text-slate-300"
                        }`}
                      >
                        {isCurrent ? "● SELECTED" : "READY"}
                      </span>
                    </div>

                    {/* Bottom active indicator */}

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-blue-600 transition-transform duration-200 ${
                        isCurrent ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* FOOTER */}

            <div className="mt-6 flex items-center justify-center gap-2 sm:mt-7 sm:gap-3">
              <span className="h-px w-6 bg-slate-200 sm:w-12" />

              <span className="whitespace-nowrap font-mono text-[6px] uppercase tracking-[0.14em] text-slate-400 sm:text-[8px] sm:tracking-[0.2em]">
                IDEA → STRATEGY → BUILD → GROW
              </span>

              <span className="h-px w-6 bg-slate-200 sm:w-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
