"use client";

import { motion, useAnimate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { GearBackground } from "@/components/sections/GearBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedSVGUnderline } from "@/components/ui/AnimatedSVGUnderline";

const CX = 100;
const CY = 132;

function HeroPocketWatch() {
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    if (reduce) {
      setTime(new Date());
      return;
    }
    const id = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    if (reduce) {
      void animate(scope.current, { opacity: 1, scale: 1 });
      return;
    }
    let cancelled = false;
    void (async () => {
      await animate(
        scope.current,
        { opacity: [0, 1], scale: [0.82, 1], rotate: [-6, 0] },
        { duration: 1.35, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
      );
      if (cancelled || !scope.current) return;
    })();
    return () => {
      cancelled = true;
    };
  }, [animate, scope, reduce]);

  const h = time.getHours() % 12;
  const m = time.getMinutes();
  const s = time.getSeconds();
  const hourDeg = 30 * (h + m / 60 + s / 3600) - 90;
  const minuteDeg = 6 * (m + s / 60) - 90;
  const secondDeg = 6 * s - 90;

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const deg = i * 30 - 90;
    const rad = (deg * Math.PI) / 180;
    const rO = 73;
    const rI = i % 3 === 0 ? 58 : 64;
    const x1 = CX + rO * Math.cos(rad);
    const y1 = CY + rO * Math.sin(rad);
    const x2 = CX + rI * Math.cos(rad);
    const y2 = CY + rI * Math.sin(rad);
    const sw = i % 3 === 0 ? 1.4 : 0.9;
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="var(--color-gold)"
        strokeOpacity={i % 3 === 0 ? 0.45 : 0.22}
        strokeWidth={sw}
      />
    );
  });

  return (
    <motion.div
      ref={scope}
      className="relative mx-auto w-full max-w-[min(100%,520px)] md:max-w-none"
      style={{ opacity: reduce ? 1 : 0 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 200 250"
        className="h-auto w-full min-w-[280px] md:min-h-[420px] md:min-w-[420px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroWatchCase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-maroon)" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Bow + stem */}
        <path
          d="M 100 14 C 78 14 78 38 88 46 L 88 56 C 88 62 94 66 100 66 C 106 66 112 62 112 56 L 112 46 C 122 38 122 14 100 14 Z"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity={0.28}
          strokeWidth={1.2}
        />
        <circle
          cx={CX}
          cy={28}
          r={5}
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity={0.35}
          strokeWidth={1}
        />
        <line
          x1={CX}
          y1={33}
          x2={CX}
          y2={52}
          stroke="var(--color-gold)"
          strokeOpacity={0.3}
          strokeWidth={1.2}
        />

        {/* Outer case */}
        <circle
          cx={CX}
          cy={CY}
          r={93}
          fill="var(--color-maroon)"
          fillOpacity={0.1}
          stroke="url(#heroWatchCase)"
          strokeOpacity={0.55}
          strokeWidth={1.4}
        />
        <circle
          cx={CX}
          cy={CY}
          r={86}
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity={0.12}
          strokeWidth={1}
        />

        {/* Dial */}
        <circle cx={CX} cy={CY} r={78} fill="#0a0a0a" fillOpacity={0.88} stroke="var(--color-maroon-light)" strokeOpacity={0.35} strokeWidth={0.8} />

        {ticks}

        <text
          x={CX}
          y={CY + 52}
          textAnchor="middle"
          fill="var(--color-gold)"
          fillOpacity={0.35}
          fontSize="11"
          letterSpacing="0.2em"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          4013
        </text>

        {/* Crown */}
        <rect
          x={180}
          y={CY - 5}
          width={10}
          height={14}
          rx={2}
          fill="var(--color-maroon)"
          fillOpacity={0.2}
          stroke="var(--color-gold)"
          strokeOpacity={0.35}
          strokeWidth={0.8}
        />

        {/* Hands — mechanical tick (second jumps each second) */}
        <g transform={`rotate(${hourDeg} ${CX} ${CY})`}>
          <line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY - 34}
            stroke="var(--color-gold)"
            strokeOpacity={0.75}
            strokeWidth={3.2}
            strokeLinecap="round"
          />
        </g>
        <g transform={`rotate(${minuteDeg} ${CX} ${CY})`}>
          <line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY - 52}
            stroke="var(--color-offwhite)"
            strokeOpacity={0.55}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <g transform={`rotate(${secondDeg} ${CX} ${CY})`}>
          <line
            x1={CX}
            y1={CY + 8}
            x2={CX}
            y2={CY - 58}
            stroke="var(--color-gold-light)"
            strokeOpacity={0.85}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </g>
        <circle cx={CX} cy={CY} r={4} fill="var(--color-maroon-light)" fillOpacity={0.85} stroke="var(--color-gold)" strokeOpacity={0.4} strokeWidth={0.8} />
      </svg>
    </motion.div>
  );
}

const lineEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0 z-0">
        <GearBackground />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(123,28,28,0.18)_0%,rgba(13,13,13,0)_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_3px)]"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-[55%_45%] md:gap-8 md:px-8 lg:px-16 lg:py-0">
        <div className="flex max-w-3xl flex-col justify-center md:py-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
            className="flex flex-wrap items-center justify-start gap-3"
          >
            <span className="section-label-line" aria-hidden />
            <AnimatedSVGUnderline
              textClassName="font-space text-[11px] font-medium uppercase tracking-[0.18em] text-gold"
              strokeWidth={2.5}
              gap={2}
              drawTransition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
              className="items-start"
            >
              Est. 2012 · Orlando, FL
            </AnimatedSVGUnderline>
            <span className="section-label-line" aria-hidden />
          </motion.div>

          <div
            className="mt-5 font-display text-[clamp(56px,13vw,140px)] text-offwhite"
            style={{
              textShadow: "0 4px 60px rgba(123,28,28,0.35)",
            }}
          >
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.8,
                  delay: reduce ? 0 : 0.4,
                  ease: lineEase,
                }}
              >
                CLOCKWORK
              </motion.span>
            </div>
            <div className="relative overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.8,
                  delay: reduce ? 0 : 0.55,
                  ease: lineEase,
                }}
              >
                <span className="relative inline-block">
                  <span
                    className="block text-transparent"
                    style={{
                      WebkitTextStroke: "2px var(--color-maroon-light)",
                      textShadow: "0 4px 40px rgba(123, 28, 28, 0.4)",
                    }}
                    aria-hidden
                  >
                    MANIA
                  </span>
                  <motion.span
                    className="absolute left-0 top-0 block text-maroon"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                      duration: reduce ? 0 : 0.9,
                      delay: reduce ? 0 : 1.2,
                      ease: "easeOut",
                    }}
                    style={{
                      textShadow: "0 4px 40px rgba(123, 28, 28, 0.4)",
                    }}
                  >
                    MANIA
                  </motion.span>
                </span>
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.9 }}
            className="mt-4 font-space text-[14px] font-medium uppercase tracking-[0.25em] text-gold"
          >
            FRC TEAM 4013
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.1 }}
            className="mt-6 max-w-[380px] border-l-[3px] border-gold pl-4 font-editorial text-[18px] italic leading-relaxed text-[rgba(245,240,235,0.65)]"
          >
            Even the smallest gear makes the clock work.
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.25 }}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 1.3, duration: 0.45 }}
            >
              <MagneticButton href="/about">Our Story</MagneticButton>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 1.45, duration: 0.45 }}
            >
              <MagneticButton href="/robot" variant="ghost">
                View Robot
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        <div className="hidden justify-center md:flex md:justify-end md:pr-4 lg:pr-8">
          <HeroPocketWatch />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-space text-[10px] uppercase tracking-[0.2em] text-gold">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-gold/25">
          <div className="animate-scroll-line absolute inset-x-0 top-0 h-full w-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
