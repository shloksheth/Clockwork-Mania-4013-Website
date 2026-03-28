"use client";

import { motion, useAnimate, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { GearBackground } from "@/components/sections/GearBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";

function HeroDecorGear() {
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      animate(scope.current, { opacity: 0.15, scale: 1, rotate: 0 });
      return;
    }
    let cancelled = false;
    (async () => {
      await animate(
        scope.current,
        { opacity: [0, 1], scale: [0.75, 1], rotate: [-15, 0] },
        { duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
      );
      if (cancelled || !scope.current) return;
      animate(scope.current, { rotate: 360 }, { duration: 120, repeat: Infinity, ease: "linear" });
    })();
    return () => {
      cancelled = true;
    };
  }, [animate, scope, reduce]);

  return (
    <motion.div
      ref={scope}
      className="relative mx-auto w-full max-w-[min(100%,520px)] md:max-w-none"
      style={{ opacity: 0.15 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 200 200"
        className="h-auto w-full min-w-[280px] md:min-h-[420px] md:min-w-[420px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 8l12 23 25-5 16 22 24 8-5 25 18 19-19 18-25-5-8 24-22 16 5 25-23 12-23-12-25 5-16-22-24-8 5-25-18-19 19-18 25 5 8-24 22-16-5-25 23-12z"
          fill="var(--color-maroon)"
          fillOpacity={0.15}
          stroke="var(--color-gold)"
          strokeOpacity={0.3}
          strokeWidth={1.2}
        />
        <circle
          cx="100"
          cy="100"
          r="34"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity={0.3}
          strokeWidth={1.2}
        />
        <circle
          cx="100"
          cy="100"
          r="12"
          fill="var(--color-maroon)"
          fillOpacity={0.15}
        />
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
            className="flex items-center gap-3"
          >
            <span className="h-px w-5 shrink-0 bg-gold opacity-60" aria-hidden />
            <span className="font-space text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Est. 2012 · Orlando, FL
            </span>
            <span className="h-px w-5 shrink-0 bg-gold opacity-60" aria-hidden />
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
          <HeroDecorGear />
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
