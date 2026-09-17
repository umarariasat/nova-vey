
"use client";

import Link from "next/link";
import {
  Mail,
  ShieldCheck,
  Share2,
  Camera,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const phoneNumber = "923245586365";

    const message = encodeURIComponent(
      "Hi NovaVey Tech, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-200 bg-white text-slate-900">
      {/* =====================================================
          BACKGROUND PRECISION GRID
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft Blue Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">

        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-slate-200 pb-12 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-5 lg:gap-12 lg:pb-14">

          {/* =================================================
              BRAND & MISSION
          ================================================= */}
          <div className="col-span-2 space-y-4 lg:col-span-2">

            {/* System Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-md border-l-2 border-blue-600 bg-blue-50 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <span className="shrink-0 text-[10px] text-blue-500">
                [SYS_OK]
              </span>

              <span className="truncate">
                NOVAVEY_TECH
              </span>
            </div>

            {/* Brand Name */}
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              NOVAVEY TECH
            </h3>

            {/* Description */}
            <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
              Engineering high-performance web applications, robust mobile
              systems, and scalable AI infrastructure for modern enterprises.
            </p>

            {/* System Status */}
            <div className="flex items-center gap-3 pt-2">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />

              <span className="text-[10px] font-mono text-slate-500 sm:text-[11px]">
                All Core Systems Operational
              </span>
            </div>
          </div>

          {/* =================================================
              SOLUTIONS
          ================================================= */}
          <div className="col-span-1 space-y-4">

            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              // Solutions
            </h4>

            <ul className="space-y-3 text-xs font-medium">

              <li>
                <Link
                  href="#services"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Web Development
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Mobile App Systems
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Artificial Intelligence
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Cloud & DevOps
                  </span>
                </Link>
              </li>

            </ul>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div className="col-span-1 space-y-4">

            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              // Navigation
            </h4>

            <ul className="space-y-3 text-xs font-medium">

              <li>
                <Link
                  href="#services"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Core Services
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="#vision"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Vision & System
                  </span>
                </Link>
              </li>

              <li>
                <a
                  href="mailto:Novaveytech1@gmail.com"
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
                >
                  <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>

                  <span>
                    Direct Contact
                  </span>
                </a>
              </li>

            </ul>
          </div>

          {/* =================================================
              CONNECT
          ================================================= */}
          <div className="col-span-2 space-y-4 lg:col-span-1">

            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              // Connect
            </h4>

            <div className="flex flex-col gap-3">

              {/* Email */}
              <a
                href="mailto:Novaveytech1@gmail.com"
                className="inline-flex w-fit max-w-full items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-mono text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50 hover:text-slate-900"
              >
                <Mail
                  size={14}
                  className="shrink-0 text-blue-600"
                />

                <span className="truncate">
                  Novaveytech1@gmail.com
                </span>
              </a>

              {/* =================================================
                  SOCIAL BUTTONS
                  SAME DESIGN / SAME COLORS
              ================================================= */}
              <div className="flex items-center gap-2 pt-1">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/malaika-aamir-50248a294"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                >
                  <Share2 size={16} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/novaveytech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                >
                  <Camera size={16} />
                </a>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  aria-label="Contact NovaVey Tech on WhatsApp"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                >
                  <MessageCircle size={16} />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM BAR
        ===================================================== */}
        <div className="mt-8 flex flex-col gap-4 text-center font-mono text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-xs">

          {/* Copyright */}
          <div>
            © {currentYear} NovaVey Tech. All rights reserved.
          </div>

          {/* Status */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">

            <span className="flex items-center gap-1.5">
              <ShieldCheck
                size={14}
                className="shrink-0 text-blue-600"
              />

              Secure Node
            </span>

            <span className="hidden sm:inline">
              •
            </span>

            <span>
              Engineered with Precision
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
}