"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Sparkles,
  Minus,
  Plus,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    timeline: "Next 1–3 months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    "Web Development",
    "Mobile App",
    "AI & ML",
    "Software / Custom",
  ];

  const timelines = ["ASAP", "Next 1–3 months", "Exploring"];

  const faqs = [
    {
      q: "Can you build from an idea?",
      a: "Yes. We can take a concept, rough requirements, or early idea and turn it into a structured digital product through discovery, architecture, design, development, and deployment.",
    },
    {
      q: "How much does a project cost?",
      a: "Project cost depends on scope, complexity, integrations, and timeline. We first understand your requirements and then recommend an approach that fits your goals and budget.",
    },
    {
      q: "Can you work with existing code?",
      a: "Absolutely. We can audit existing systems, improve architecture, refactor code, fix technical issues, add features, or continue development on an existing product.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. After launch, we can continue with maintenance, monitoring, optimization, security improvements, new features, and scaling as your product grows.",
    },
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setValidationError("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappNumber = "923245586365";

      const text =
        `*New Project Inquiry — NovaVey Tech*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Service:* ${formData.service}\n` +
        `*Timeline:* ${formData.timeline}\n\n` +
        `*Message:*\n${formData.message}`;

      const encodedText = encodeURIComponent(text);

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      await new Promise((resolve) => setTimeout(resolve, 500));

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setIsSubmitted(true);
    } catch {
      setValidationError(
        "Failed to open WhatsApp. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* =========================================================
          GLOBAL TECHNOLOGY BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(37,99,235,0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Soft blue atmosphere */}
        <div className="absolute -top-20 right-[5%] h-[260px] w-[260px] rounded-full bg-blue-500/[0.045] blur-[80px] sm:-top-32 sm:right-[20%] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />

        <div className="absolute bottom-0 left-[-100px] h-[260px] w-[260px] rounded-full bg-indigo-500/[0.035] blur-[80px] sm:left-[-120px] sm:h-[360px] sm:w-[360px] sm:blur-[110px]" />
      </div>

      {/* =========================================================
          01 — HERO + CONTACT FORM
      ========================================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-7 overflow-hidden px-4 pb-8 pt-8 sm:gap-10 sm:px-6 sm:pb-10 sm:pt-12 lg:grid-cols-12 lg:gap-12">
        {/* =====================================================
            LEFT — INTRO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-4 sm:space-y-5 lg:col-span-5"
        >
          {/* Mobile technology PNG */}

          <div className="pointer-events-none absolute -right-20 -top-12 z-0 h-[190px] w-[190px] opacity-[0.13] sm:-right-24 sm:-top-16 sm:h-[250px] sm:w-[250px] sm:opacity-[0.15] lg:hidden">
            <div className="absolute inset-[20%] rounded-full bg-blue-600/20 blur-[45px]" />

            <div
              className="h-full w-full bg-blue-600"
              style={{
                maskImage: "url('/images/tech.png')",
                WebkitMaskImage: "url('/images/tech.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          </div>

          {/* Label */}

          <div className="relative z-10 inline-flex items-center gap-2 border border-slate-200 bg-slate-50/80 px-2.5 py-1.5 sm:px-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />

            <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-slate-600 sm:text-[9px] sm:tracking-[0.18em]">
              CONTACT / START_PROJECT
            </span>
          </div>

          {/* Heading */}

          <h1 className="relative z-10 text-3xl font-black leading-[1.03] tracking-[-0.045em] text-[#0A1128] sm:text-5xl lg:text-[52px]">
            Let&apos;s build
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h1>

          {/* Description */}

          <p className="relative z-10 max-w-md text-xs leading-5 text-slate-600 sm:text-[15px] sm:leading-6">
            Have an idea, product, or technical challenge?
            Tell us what you are building and start a direct
            conversation with NovaVey.
          </p>

          {/* Technical note */}

          <div className="relative z-10 border-t border-slate-200 pt-3 sm:pt-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-blue-100 bg-blue-50 text-blue-600 sm:h-9 sm:w-9">
                <Sparkles size={15} />
              </div>

              <p className="font-mono text-[8px] leading-4 text-slate-500 sm:text-[9px] sm:leading-5">
                DIRECT ENGINEERING ACCESS
                <br />
                RESPONSE WITHIN HOURS
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT — FORM
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="relative z-10 lg:col-span-7"
        >
          <div className="relative border border-slate-200/90 bg-white/90 p-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6">
            {/* Top technical line */}

            <div className="absolute left-0 top-0 h-[2px] w-16 bg-blue-600 sm:w-20" />

            {isSubmitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center space-y-3 text-center sm:min-h-[330px] sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 sm:h-14 sm:w-14">
                  <CheckCircle2 size={24} className="sm:h-[27px] sm:w-[27px]" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#0A1128] sm:text-xl">
                    Your message is ready.
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-[11px] leading-5 text-slate-500 sm:text-xs">
                    Your project inquiry has been prepared for
                    WhatsApp. Continue the conversation there.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);

                    setFormData({
                      name: "",
                      email: "",
                      service: "Web Development",
                      timeline: "Next 1–3 months",
                      message: "",
                    });
                  }}
                  className="border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-[8px] font-bold tracking-wider text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:px-4 sm:text-[9px]"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
                noValidate
              >
                {/* NAME + EMAIL */}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block font-mono text-[8px] font-bold tracking-wider text-slate-600 sm:text-[9px]"
                    >
                      YOUR NAME *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full border border-slate-200 bg-slate-50/60 px-2.5 py-2.5 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 sm:px-3 sm:text-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block font-mono text-[8px] font-bold tracking-wider text-slate-600 sm:text-[9px]"
                    >
                      WORK EMAIL *
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full border border-slate-200 bg-slate-50/60 px-2.5 py-2.5 text-[11px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 sm:px-3 sm:text-xs"
                    />
                  </div>
                </div>

                {/* SERVICE */}

                <div>
                  <label className="mb-1.5 block font-mono text-[8px] font-bold tracking-wider text-slate-600 sm:text-[9px]">
                    WHAT ARE YOU BUILDING?
                  </label>

                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            service: srv,
                          })
                        }
                        className={`min-w-0 border px-1.5 py-2.5 font-mono text-[8px] font-bold leading-tight transition sm:px-2 sm:text-[9px] ${
                          formData.service === srv
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-200 bg-slate-50/60 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="project-details"
                    className="mb-1.5 block font-mono text-[8px] font-bold tracking-wider text-slate-600 sm:text-[9px]"
                  >
                    PROJECT DETAILS *
                  </label>

                  <textarea
                    id="project-details"
                    rows={3}
                    placeholder="Tell us what you're building, your goals, or the problem you want to solve..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full resize-none border border-slate-200 bg-slate-50/60 p-2.5 text-[11px] leading-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 sm:p-3 sm:text-xs"
                  />
                </div>

                {/* TIMELINE */}

                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-1.5 block font-mono text-[8px] font-bold tracking-wider text-slate-600 sm:text-[9px]"
                  >
                    TIMELINE
                  </label>

                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        timeline: e.target.value,
                      })
                    }
                    className="w-full cursor-pointer border border-slate-200 bg-slate-50/60 px-2.5 py-2.5 text-[11px] text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white sm:px-3 sm:text-xs"
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ERROR */}

                {validationError && (
                  <div
                    className="border border-red-200 bg-red-50 px-2.5 py-2.5 font-mono text-[8px] leading-4 text-red-600 sm:text-[9px]"
                    role="alert"
                  >
                    {validationError}
                  </div>
                )}

                {/* SUBMIT */}

                <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="hidden font-mono text-[8px] tracking-wider text-slate-400 sm:block">
                    SECURE WHATSAPP REDIRECT
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 px-4 py-3 font-mono text-[8px] font-bold tracking-[0.1em] text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-5 sm:text-[9px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={12}
                          className="animate-spin"
                        />
                        CONNECTING...
                      </>
                    ) : (
                      <>
                        START A CONVERSATION
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          03 — FAQ / TECHNOLOGY CORE
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-slate-200/70">
        {/* =====================================================
            TECHNOLOGY BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(37,99,235,0.045) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(37,99,235,0.045) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "38px 38px",
            }}
          />

          {/* =================================================
              TECHNOLOGY CORE
              MOBILE + TABLET + DESKTOP
          ================================================= */}

          <div className="absolute -right-[115px] top-[20%] h-[300px] w-[300px] -translate-y-1/2 opacity-50 sm:-right-[105px] sm:top-[25%] sm:h-[380px] sm:w-[380px] sm:opacity-60 lg:-right-[120px] lg:top-1/2 lg:h-[520px] lg:w-[520px] lg:opacity-100">
            {/* Core glow */}

            <div className="absolute inset-[55px] rounded-full bg-blue-600/[0.075] blur-[65px] sm:inset-[80px] sm:blur-[90px]" />

            <div className="absolute inset-[105px] rounded-full bg-indigo-600/[0.045] blur-[45px] sm:inset-[145px] sm:blur-[60px]" />

            {/* Outer technical ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-blue-600/[0.16]"
            />

            {/* Dashed ring */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[32px] rounded-full border border-dashed border-indigo-600/[0.18] sm:inset-[55px]"
            />

            {/* Inner ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[65px] rounded-full border border-sky-600/[0.14] sm:inset-[110px]"
            />

            {/* =================================================
                PNG / TECHNOLOGY IMAGE
            ================================================= */}

            <div className="absolute inset-[75px] flex items-center justify-center sm:inset-[120px]">
              <div
                className="h-full w-full bg-blue-600/[0.22]"
                style={{
                  maskImage: "url('/images/tech.png')",
                  WebkitMaskImage: "url('/images/tech.png')",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>

            {/* =================================================
                CPU CORE
            ================================================= */}

            <div className="absolute inset-[90px] flex items-center justify-center sm:inset-[145px]">
              <motion.div
                animate={{
                  scale: [1, 1.035, 1],
                  opacity: [0.42, 0.58, 0.42],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <svg
                  viewBox="0 0 256 256"
                  className="h-full w-full text-blue-700 drop-shadow-[0_0_22px_rgba(37,99,235,0.25)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* CPU */}

                  <rect
                    x="72"
                    y="72"
                    width="112"
                    height="112"
                    rx="14"
                  />

                  {/* Inner */}

                  <rect
                    x="96"
                    y="96"
                    width="64"
                    height="64"
                    rx="8"
                  />

                  {/* Top pins */}

                  <path d="M96 72V48" />
                  <path d="M112 72V40" />
                  <path d="M128 72V32" />
                  <path d="M144 72V40" />
                  <path d="M160 72V48" />

                  {/* Bottom pins */}

                  <path d="M96 184V208" />
                  <path d="M112 184V216" />
                  <path d="M128 184V224" />
                  <path d="M144 184V216" />
                  <path d="M160 184V208" />

                  {/* Left pins */}

                  <path d="M72 96H48" />
                  <path d="M72 112H40" />
                  <path d="M72 128H32" />
                  <path d="M72 144H40" />
                  <path d="M72 160H48" />

                  {/* Right pins */}

                  <path d="M184 96H208" />
                  <path d="M184 112H216" />
                  <path d="M184 128H224" />
                  <path d="M184 144H216" />
                  <path d="M184 160H208" />

                  {/* Core */}

                  <circle
                    cx="128"
                    cy="128"
                    r="12"
                    className="fill-blue-600/10"
                  />

                  {/* Core connections */}

                  <path d="M128 116V104" />
                  <path d="M128 140V152" />
                  <path d="M116 128H104" />
                  <path d="M140 128H152" />
                </svg>
              </motion.div>
            </div>

            {/* =================================================
                ORBIT NODES
            ================================================= */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-600/70 shadow-[0_0_12px_rgba(37,99,235,0.6)] sm:h-2 sm:w-2" />

              <span className="absolute bottom-[-2px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-600/60 shadow-[0_0_12px_rgba(79,70,229,0.5)] sm:h-2 sm:w-2" />

              <span className="absolute left-[-2px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky-600/60 sm:h-2 sm:w-2" />

              <span className="absolute right-[-2px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-600/60 sm:h-2 sm:w-2" />
            </motion.div>

            {/* Crosshair */}

            <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent" />

            <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-600/10 to-transparent" />

            {/* Floating labels */}

            <div className="absolute right-[13%] top-[22%] font-mono text-[6px] tracking-[0.14em] text-blue-600/35 sm:text-[7px]">
              CORE_01
            </div>

            <div className="absolute bottom-[24%] left-[10%] font-mono text-[6px] tracking-[0.14em] text-indigo-600/35 sm:text-[7px]">
              NODE_ACTIVE
            </div>

            <div className="absolute bottom-[16%] right-[20%] font-mono text-[6px] tracking-[0.14em] text-slate-400/50 sm:text-[7px]">
              SYS_03
            </div>
          </div>

          {/* Desktop fade over core */}

          <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-gradient-to-r from-white via-white/60 to-transparent lg:block" />

          {/* Mobile soft fade */}

          <div className="absolute right-0 top-0 h-[55%] w-[45%] bg-gradient-to-l from-white/30 to-transparent sm:w-[40%] lg:hidden" />
        </div>

        {/* =====================================================
            FAQ CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-14">
          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 max-w-xl sm:mb-6"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[8px] font-bold tracking-[0.18em] text-blue-600 sm:text-[9px]">
                [03]
              </span>

              <span className="h-px w-5 bg-blue-300 sm:w-6" />

              <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
                FAQ / SYSTEM_CORE
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-[-0.045em] text-[#0A1128] sm:text-4xl md:text-[42px]">
              Common{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                questions.
              </span>
            </h2>

            <p className="mt-1.5 max-w-lg text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-sm">
              Straightforward answers about our technology,
              development process, and how we work with clients.
            </p>
          </motion.div>

          {/* =================================================
              FAQ + CTA
          ================================================= */}

          <div className="relative grid gap-2.5 sm:gap-3 lg:max-w-[760px]">
            {/* FAQ QUESTIONS */}

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                    }}
                    className={`group relative overflow-hidden border backdrop-blur-sm transition-all duration-300 ${
                      isOpen
                        ? "border-blue-400 bg-white/95 shadow-md shadow-blue-500/[0.07]"
                        : "border-slate-200/80 bg-white/80 hover:border-blue-300 hover:bg-white/95"
                    }`}
                  >
                    {/* Active edge */}

                    <div
                      className={`absolute left-0 top-0 h-full w-[2px] origin-top bg-blue-600 transition-transform duration-300 ${
                        isOpen
                          ? "scale-y-100"
                          : "scale-y-0 group-hover:scale-y-100"
                      }`}
                    />

                    {/* Question */}

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : idx)
                      }
                      className="flex min-h-[68px] w-full items-center justify-between gap-2 px-3 py-3 text-left sm:min-h-[76px] sm:gap-3 sm:px-4 sm:py-3.5"
                    >
                      <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                        <span
                          className={`mt-0.5 shrink-0 font-mono text-[8px] font-bold tracking-widest sm:text-[9px] ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-300"
                          }`}
                        >
                          0{idx + 1}
                        </span>

                        <span
                          className={`text-[11px] font-bold leading-5 sm:text-xs ${
                            isOpen
                              ? "text-[#0A1128]"
                              : "text-slate-700"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>

                      {/* Plus / Minus */}

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-all sm:h-6 sm:w-6 ${
                          isOpen
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={10} />
                        ) : (
                          <Plus size={10} />
                        )}
                      </span>
                    </button>

                    {/* Answer */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-3 pb-3 pl-[34px] pt-2.5 sm:px-4 sm:pb-4 sm:pl-[42px] sm:pt-3">
                            <p className="text-[10px] leading-5 text-slate-500 sm:text-[11px]">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                ASK QUESTION CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="relative overflow-hidden border border-blue-100 bg-white/80 backdrop-blur-sm"
            >
              {/* Accent */}

              <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-600" />

              <div className="flex flex-col gap-3 px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3.5">
                {/* Left content */}

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-blue-100 bg-blue-50 text-blue-600">
                    <MessageCircle size={14} />
                  </div>

                  <div>
                    <p className="font-mono text-[7px] font-bold tracking-[0.14em] text-blue-600 sm:text-[8px] sm:tracking-[0.15em]">
                      DIRECT_CHANNEL
                    </p>

                    <p className="mt-0.5 text-[11px] font-bold text-[#0A1128] sm:text-xs">
                      Still have a question?
                    </p>
                  </div>
                </div>

                {/* Right CTA */}

                <a
                  href="https://wa.me/923245586365?text=Hello%20NovaVey%20Tech%2C%20I%20have%20a%20question%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 border border-blue-200 bg-blue-50 px-3 py-2.5 font-mono text-[7px] font-bold tracking-[0.12em] text-blue-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white sm:w-auto sm:px-4 sm:text-[8px] sm:tracking-[0.14em]"
                >
                  <MessageCircle
                    size={12}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <span>ASK YOUR QUESTION</span>

                  <ArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              TECHNICAL STATUS
          ================================================= */}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-3 sm:mt-5">
            <span className="font-mono text-[6px] tracking-[0.16em] text-slate-400 sm:text-[7px] sm:tracking-[0.18em]">
              NOVAVEY / SYSTEM_CORE / FAQ_DATABASE
            </span>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="hidden font-mono text-[7px] tracking-[0.16em] text-slate-300 sm:inline">
                AI
              </span>

              <span className="hidden font-mono text-[7px] tracking-[0.16em] text-slate-300 sm:inline">
                API
              </span>

              <span className="hidden font-mono text-[7px] tracking-[0.16em] text-slate-300 sm:inline">
                CLOUD
              </span>

              <span className="flex items-center gap-1 font-mono text-[6px] font-bold tracking-[0.14em] text-blue-600 sm:gap-1.5 sm:text-[7px] sm:tracking-[0.16em]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                SYSTEM_READY
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}