
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TabKey = "build" | "innovate" | "scale" | "expand";

type ContentItem = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

type Tab = {
  key: TabKey;
  number: string;
  title: string;
  label: string;
};

const contentMap: Record<TabKey, ContentItem> = {
  build: {
    number: "01",
    title: "BUILD",
    subtitle: "Turning ideas into intelligent products.",
    description:
      "We transform ambitious ideas into modern software, AI solutions, and digital products built to solve real-world problems and create lasting value.",
    tags: [
      "PRODUCT ENGINEERING",
      "AI SOLUTIONS",
      "DIGITAL PRODUCTS",
    ],
  },

  innovate: {
    number: "02",
    title: "INNOVATE",
    subtitle: "Building what technology makes possible.",
    description:
      "We explore artificial intelligence, emerging technologies, and new digital experiences to create smarter ways of solving complex challenges.",
    tags: [
      "ARTIFICIAL INTELLIGENCE",
      "INNOVATION",
      "EMERGING TECHNOLOGY",
    ],
  },

  scale: {
    number: "03",
    title: "SCALE",
    subtitle: "Engineering systems built for growth.",
    description:
      "We create reliable technology foundations that evolve with businesses, users, and new opportunities — from early ideas to scalable products.",
    tags: [
      "SCALABLE SYSTEMS",
      "CLOUD TECHNOLOGY",
      "PRODUCT DEVELOPMENT",
    ],
  },

  expand: {
    number: "04",
    title: "EXPAND",
    subtitle: "Growing technology beyond boundaries.",
    description:
      "We build products, partnerships, and intelligent solutions designed to extend beyond individual projects and create impact across industries and markets.",
    tags: [
      "GLOBAL TECHNOLOGY",
      "STRATEGIC PARTNERSHIPS",
      "FUTURE PRODUCTS",
    ],
  },
};

const tabs: Tab[] = [
  {
    key: "build",
    number: "01",
    title: "BUILD",
    label: "Products",
  },
  {
    key: "innovate",
    number: "02",
    title: "INNOVATE",
    label: "Technology",
  },
  {
    key: "scale",
    number: "03",
    title: "SCALE",
    label: "Systems",
  },
  {
    key: "expand",
    number: "04",
    title: "EXPAND",
    label: "Growth",
  },
];

export default function Vision() {
  const [activeTab, setActiveTab] = useState<TabKey>("build");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const current = contentMap[activeTab];

  // =====================================================
  // AUTO CHANGE TABS
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = tabs.findIndex(
        (tab) => tab.key === activeTab
      );

      const nextIndex = (currentIndex + 1) % tabs.length;

      setActiveTab(tabs[nextIndex].key);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // =====================================================
  // TYPING EFFECT
  // =====================================================

  useEffect(() => {
    const text = contentMap[activeTab].subtitle;

    setDisplayText("");
    setIsTyping(true);

    let index = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const typeNextCharacter = () => {
      if (index < text.length) {
        index += 1;

        setDisplayText(text.slice(0, index));

        timer = setTimeout(typeNextCharacter, 40);
      } else {
        setIsTyping(false);
      }
    };

    typeNextCharacter();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [activeTab]);

  return (
    <section
      className="
        relative
        w-full
        min-w-0
        overflow-hidden
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.18]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,82,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,82,255,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "clamp(32px, 5vw, 56px) clamp(32px, 5vw, 56px)",
        }}
      />

      {/* =====================================================
          TECHNOLOGY LINE — RIGHT SIDE
          DESKTOP ONLY
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
        }}
        className="
          pointer-events-none
          absolute
          right-[-140px]
          top-[5%]
          z-0
          hidden
          h-[700px]
          w-[700px]
          lg:block
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-[15%]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            h-full
            w-full
            bg-[#0052FF]
            opacity-[0.22]
          "
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
      </motion.div>

      {/* =====================================================
          TECHNOLOGY LINE — LEFT SIDE
          DESKTOP ONLY
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.88,
          rotate: 180,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 180,
        }}
        transition={{
          duration: 1.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[3%]
          left-[-180px]
          z-0
          hidden
          h-[560px]
          w-[560px]
          lg:block
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-[18%]
            rounded-full
            bg-blue-500/8
            blur-3xl
          "
        />

        <div
          className="
            relative
            h-full
            w-full
            bg-[#0052FF]
            opacity-[0.20]
          "
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
      </motion.div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          min-w-0
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            z-10
            mx-auto
            mb-8
            max-w-2xl
            text-center
            sm:mb-10
            md:mb-12
          "
        >
          <div
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#0052FF]
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#0052FF]
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              Technology // 2026+
            </span>
          </div>

          <h2
            className="
              break-words
              text-3xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-slate-950
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            We're Building
            <br />
            What's Next.
          </h2>

          <p
            className="
              mt-3
              text-xs
              font-medium
              tracking-tight
              text-slate-400
              sm:text-base
              md:text-lg
            "
          >
            Intelligent technology for the problems ahead.
          </p>
        </motion.div>

        {/* =====================================================
            MONITOR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.99,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-5xl
            min-w-0
          "
        >
          {/* Monitor Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-8
              left-1/2
              h-16
              w-[65%]
              -translate-x-1/2
              rounded-full
              bg-blue-500/10
              blur-3xl
              sm:-bottom-10
              sm:h-20
            "
          />

          {/* =================================================
              MONITOR FRAME
          ================================================= */}

          <div
            className="
              relative
              min-w-0
              rounded-[1.25rem]
              border
              border-blue-200
              bg-blue-50/40
              p-1
              shadow-[0_25px_60px_-25px_rgba(15,23,42,0.25)]
              sm:rounded-[1.75rem]
              sm:p-2
              md:rounded-[2rem]
              md:p-2.5
            "
          >
            {/* Screen */}

            <div
              className="
                min-w-0
                overflow-hidden
                rounded-[1rem]
                border
                border-blue-100
                bg-white
                sm:rounded-[1.4rem]
                md:rounded-[1.6rem]
              "
            >
              {/* =================================================
                  TOP BAR
              ================================================= */}

              <div
                className="
                  flex
                  h-9
                  items-center
                  justify-between
                  border-b
                  border-blue-100
                  px-3
                  sm:h-11
                  sm:px-5
                  md:h-12
                  md:px-6
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    sm:gap-2.5
                  "
                >
                  <div
                    className="
                      flex
                      shrink-0
                      gap-1
                      sm:gap-1.5
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-200 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2" />
                  </div>

                  <div className="h-3 w-px bg-blue-100 sm:h-3.5" />

                  <span
                    className="
                      truncate
                      font-mono
                      text-[8px]
                      font-bold
                      tracking-[0.16em]
                      text-blue-500
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    NOVAVEY
                  </span>
                </div>

                <span
                  className="
                    shrink-0
                    font-mono
                    text-[7px]
                    font-medium
                    tracking-widest
                    text-blue-300
                    sm:text-[9px]
                  "
                >
                  TECHNOLOGY / 01
                </span>
              </div>

              {/* =================================================
                  SCREEN CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  min-w-0
                  px-3.5
                  py-5
                  sm:px-6
                  sm:py-7
                  md:px-8
                  md:py-9
                  lg:px-10
                "
              >
                {/* Glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    top-10
                    h-64
                    w-64
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    sm:h-72
                    sm:w-72
                  "
                />

                {/* =================================================
                    MAIN STATEMENT
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    mb-5
                    min-w-0
                    sm:mb-7
                  "
                >
                  <div
                    className="
                      mb-2
                      flex
                      min-w-0
                      items-center
                      gap-2
                      font-mono
                      text-[8px]
                      font-bold
                      tracking-[0.16em]
                      text-slate-400
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    <span className="shrink-0 text-[#0052FF]">
                      +
                    </span>

                    <span className="truncate">
                      NOVAVEY / OUR DIRECTION
                    </span>
                  </div>

                  <div
                    className="
                      min-h-[58px]
                      max-w-3xl
                      sm:min-h-[64px]
                      md:min-h-[72px]
                    "
                  >
                    <h3
                      className="
                        break-words
                        text-lg
                        font-black
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-slate-950
                        sm:text-2xl
                        md:text-3xl
                        lg:text-4xl
                      "
                    >
                      {displayText}

                      {isTyping && (
                        <motion.span
                          animate={{
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 0.75,
                            repeat: Infinity,
                          }}
                          className="
                            ml-1
                            inline-block
                            h-[0.8em]
                            w-[2px]
                            translate-y-[2px]
                            rounded-full
                            bg-[#0052FF]
                          "
                        />
                      )}
                    </h3>
                  </div>
                </div>

                {/* Divider */}

                <div
                  className="
                    relative
                    z-10
                    mb-4
                    h-px
                    w-full
                    bg-blue-100
                    sm:mb-5
                  "
                />

                {/* =================================================
                    PILLARS
                ================================================= */}

                <div
                  className="
                    relative
                    z-20
                    grid
                    grid-cols-2
                    gap-2
                    sm:gap-2.5
                    md:grid-cols-4
                  "
                >
                  {tabs.map((tab) => {
                    const isActive =
                      activeTab === tab.key;

                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() =>
                          setActiveTab(tab.key)
                        }
                        className={`
                          group
                          relative
                          min-h-[100px]
                          min-w-0
                          overflow-hidden
                          rounded-xl
                          border
                          p-2.5
                          text-left
                          transition-all
                          duration-300
                          sm:min-h-[115px]
                          sm:p-3.5
                          md:min-h-[125px]
                          md:p-4
                          ${
                            isActive
                              ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20"
                              : "border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/50"
                          }
                        `}
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            width: isActive
                              ? "100%"
                              : "0%",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            absolute
                            left-0
                            top-0
                            h-[2px]
                            bg-[#0052FF]
                            sm:h-[3px]
                          "
                        />

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-2
                          "
                        >
                          <span
                            className={
                              isActive
                                ? "font-mono text-[8px] font-bold tracking-widest text-[#0052FF] sm:text-[9px]"
                                : "font-mono text-[8px] font-bold tracking-widest text-blue-400 sm:text-[9px]"
                            }
                          >
                            {tab.number}
                          </span>

                          <span
                            className={
                              isActive
                                ? "text-xs text-[#0052FF] sm:text-sm"
                                : "text-xs text-blue-400 transition-transform group-hover:translate-x-1 sm:text-sm"
                            }
                          >
                            →
                          </span>
                        </div>

                        <div
                          className="
                            mt-3
                            sm:mt-4
                            md:mt-5
                          "
                        >
                          <div
                            className={
                              isActive
                                ? "break-words text-[10px] font-black tracking-tight text-blue-700 sm:text-xs md:text-sm"
                                : "break-words text-[10px] font-black tracking-tight text-blue-600 sm:text-xs md:text-sm"
                            }
                          >
                            {tab.title}
                          </div>

                          <div
                            className={
                              isActive
                                ? "mt-0.5 break-words text-[8px] font-medium text-blue-500 sm:mt-1 sm:text-[10px]"
                                : "mt-0.5 break-words text-[8px] font-medium text-blue-400 sm:mt-1 sm:text-[10px]"
                            }
                          >
                            {tab.label}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* =================================================
                    ACTIVE CONTENT
                ================================================= */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      relative
                      z-10
                      mt-4
                      min-w-0
                      border-t
                      border-blue-100
                      pt-4
                      sm:mt-5
                      sm:pt-5
                    "
                  >
                    <div
                      className="
                        grid
                        min-w-0
                        gap-4
                        sm:gap-5
                        md:grid-cols-[minmax(0,1fr)_auto]
                        md:items-end
                      "
                    >
                      <div
                        className="
                          min-w-0
                          max-w-xl
                        "
                      >
                        <div
                          className="
                            mb-1.5
                            flex
                            min-w-0
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#0052FF]
                            "
                          />

                          <span
                            className="
                              truncate
                              font-mono
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-[#0052FF]
                              sm:text-[9px]
                              sm:tracking-[0.16em]
                            "
                          >
                            {current.number} /{" "}
                            {current.title}
                          </span>
                        </div>

                        <h4
                          className="
                            break-words
                            text-xs
                            font-black
                            tracking-tight
                            text-slate-950
                            sm:text-base
                            md:text-lg
                          "
                        >
                          {current.subtitle}
                        </h4>

                        <p
                          className="
                            mt-1.5
                            break-words
                            text-[10px]
                            leading-4
                            text-slate-500
                            sm:mt-2
                            sm:text-xs
                            sm:leading-5
                            md:text-sm
                            md:leading-6
                          "
                        >
                          {current.description}
                        </p>
                      </div>

                      {/* TAGS */}

                      <div
                        className="
                          flex
                          min-w-0
                          flex-wrap
                          gap-1.5
                          md:max-w-[280px]
                          md:justify-end
                        "
                      >
                        {current.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                              className="
                                max-w-full
                                break-words
                                rounded-full
                                border
                                border-blue-200
                                bg-blue-50
                                px-2
                                py-1
                                font-mono
                                text-[7px]
                                font-bold
                                tracking-wider
                                text-blue-600
                                sm:px-2.5
                                sm:text-[8px]
                              "
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  BOTTOM METADATA
              ================================================= */}

              <div
                className="
                  flex
                  min-w-0
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-blue-100
                  px-3
                  py-2
                  sm:px-5
                  sm:py-2.5
                  md:px-6
                "
              >
                <span
                  className="
                    truncate
                    font-mono
                    text-[7px]
                    font-medium
                    tracking-widest
                    text-blue-300
                    sm:text-[8px]
                  "
                >
                  NOVAVEY / TECHNOLOGY
                </span>

                <span
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-1.5
                    font-mono
                    text-[7px]
                    font-bold
                    tracking-widest
                    text-[#0052FF]
                    sm:text-[8px]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#0052FF]
                    "
                  />

                  BUILDING FORWARD
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              MONITOR STAND
          ===================================================== */}

          <div
            className="
              relative
              z-0
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                h-6
                w-10
                bg-gradient-to-b
                from-blue-100
                to-blue-200
                shadow-sm
                sm:h-9
                sm:w-16
                md:h-11
                md:w-20
              "
            />

            <div
              className="
                h-1.5
                w-20
                rounded-full
                bg-blue-300
                shadow-[0_5px_15px_-5px_rgba(37,99,235,0.35)]
                sm:h-2
                sm:w-32
                md:w-44
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            z-10
            mx-auto
            mt-8
            max-w-2xl
            px-2
            text-center
            sm:mt-10
          "
        >
          <p
            className="
              text-sm
              font-black
              tracking-tight
              text-slate-800
              sm:text-lg
              md:text-xl
            "
          >
            Technology should move ideas forward.
          </p>

          <p
            className="
              mt-1.5
              text-[10px]
              font-medium
              text-slate-400
              sm:text-xs
              md:text-sm
            "
          >
            We're building intelligent products, scalable
            systems, and new digital experiences — one idea
            at a time.
          </p>

          <div
            className="
              mx-auto
              mt-3
              h-1
              w-8
              rounded-full
              bg-[#0052FF]
              sm:mt-4
              sm:w-9
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
