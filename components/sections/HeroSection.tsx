"use client";

import { motion, useAnimate, useReducedMotion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GearBackground } from "@/components/sections/GearBackground";
import { AmbientField } from "@/components/ui/AmbientField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { usePocketWatchInteraction } from "@/components/context/PocketWatchContext";


const CX = 421;
    const CY = 421;

function HeroPocketWatch() {
  const [scope, animate] = useAnimate();
  const reduce = useReducedMotion();
  const [time, setTime] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { isHoveringPocketWatch, setIsHoveringPocketWatch } = usePocketWatchInteraction();
  const watchRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for tilt effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!watchRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = watchRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = (clientX - centerX) / width; // -0.5 to 0.5
    const offsetY = (clientY - centerY) / height; // -0.5 to 0.5

    // Apply a tilt effect (adjust multiplier for intensity)
    rotateY.set(offsetX * 60); // Rotate around Y-axis based on X position
    rotateX.set(offsetY * -60); // Rotate around X-axis based on Y position (inverted)
  };

  const handleMouseLeave = () => {
    setIsHoveringPocketWatch(false);
  };

  const handleToggleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    setMounted(true);
    if (scope.current) {
      watchRef.current = scope.current as HTMLDivElement;
    }
    const isOpen = isClicked;
    if (reduce || !isOpen) {
      setTime(new Date());
      return;
    }
    const id = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [reduce, isClicked, scope]);

  useEffect(() => {
    if (reduce) {
      void animate(scope.current, { opacity: 1, scale: 1 });
      return;
    }
    let cancelled = false;
    void (async () => {
      await animate(
        scope.current,
        { scale: [0.82, 1], rotate: [-6, 0] },
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
    const rO = 175;
    const rI = i % 3 === 0 ? 140 : 155;
    const x1 = CX + rO * Math.cos(rad);
    const y1 = CY + rO * Math.sin(rad);
    const x2 = CX + rI * Math.cos(rad);
    const y2 = CY + rI * Math.sin(rad);
    const sw = i % 3 === 0 ? 2.3 : 1.5;
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
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      aria-hidden
      onMouseEnter={() => setIsHoveringPocketWatch(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleToggleClick}
    >
      <svg
          className="relative z-[99] block h-[842px] w-[842px] touch-none select-none overflow-visible will-change-transform"
          viewBox="0 0 842 842"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroWatchCase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#600000" stopOpacity="0.5" />
          </linearGradient>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.5)" />
          </filter>
          <path id="mottoPath" d={`M ${CX}, ${CY - 190} A 190,190 0 1,1 ${CX}, ${CY + 190} A 190,190 0 1,1 ${CX}, ${CY - 190}`} />
        </defs>



        {/* Bow + stem */}
        <g transform={`translate(${253}, ${77})`}>
          <path
              d="M 168 23 C 131 23 131 63 148 77 L 148 94 C 148 105 158 111 168 111 C 178 111 189 105 189 94 L 189 77 C 206 63 206 23 168 23 Z"
              fill="var(--color-gold)"
              fillOpacity={0.5}
              strokeWidth={8}
            />
          <circle
            cx={168}
            cy={47}
            r={8}
            fill="none"
            strokeWidth={5}
          />
          <line
            x1={168}
            y1={55}
            x2={168}
            y2={88}
            stroke="var(--color-gold)"
            strokeOpacity={0.3}
            strokeWidth={2.1}
          />
        </g>
        <circle
          cx={CX}
          cy={CY}
          r={253}
          fill="var(--color-maroon)"
            fillOpacity={0.1}
            strokeWidth={8}
        />
        <circle
          cx={CX}
          cy={CY}
          r={145}
          fill="none"
            strokeWidth={5}
        />

        {/* Dial */}
        <circle cx={CX} cy={CY} r={180} fill="#0a0a0a" fillOpacity={0.88} stroke="var(--color-maroon-light)" strokeOpacity={0.35} strokeWidth={1.4} />

        {ticks}

        <g
          transform={`translate(${CX}, ${CY})`}
          transform-origin={`${CX} ${CY}`}
          className="group"
        >
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="var(--color-gold)"
            fontSize="20"
            fontWeight="bold"
          >
            4013
          </text>
        </g>

        {/* Motto (visible only when clicked, does not rotate) */}
        {isClicked && (
          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            fill="#D4AF37" // Metallic gold color
            fontSize="14"
          >
            <textPath href="#mottoPath" startOffset="50%" textAnchor="middle">
              Even the smallest gear makes the clock work
            </textPath>
          </motion.text>
        )}

        {/* Crown */}
        <rect
          x={CX + 245}
          y={CY - 12}
          width={16}
          height={23}
          rx={3.6}
          fill="var(--color-maroon)"
          fillOpacity={0.2}
          strokeWidth={1.2}
        />

        {/* Hands — mechanical tick (second jumps each second) */}
        {mounted && isHoveringPocketWatch && (
          <>
            <g transform={`rotate(${hourDeg} ${CX} ${CY})`}>
              <line
                x1={CX}
                y1={CY}
                x2={CX}
                y2={CY - 70}
                stroke="var(--color-gold)"
                strokeOpacity={0.75}
                strokeWidth={8.5}
                strokeLinecap="round"
              />
            </g>
            <g transform={`rotate(${minuteDeg} ${CX} ${CY})`}>
              <line
                x1={CX}
                y1={CY}
                x2={CX}
                y2={CY - 106}
                stroke="var(--color-offwhite)"
                strokeOpacity={0.55}
                strokeWidth={5.6}
                strokeLinecap="round"
              />
            </g>
            <g transform={`rotate(${secondDeg} ${CX} ${CY})`}>
              <line
                x1={CX}
                y1={CY + 15}
                x2={CX}
                y2={CY - 117}
                stroke="var(--color-gold-light)"
                strokeOpacity={0.85}
                strokeWidth={3.3}
                strokeLinecap="round"
              />
            </g>
            <circle cx={CX} cy={CY} r={9} fill="var(--color-maroon-light)" fillOpacity={0.85} stroke="var(--color-gold)" strokeOpacity={0.4} strokeWidth={2.2} />
          </>
        )}
          {/* Lid (case) - rendered last so it covers everything when closed */}
          <motion.g
            style={{ transformOrigin: `${CX - 253}px ${CY}px` }} // Pivot point (left edge of the watch)
          animate={{ rotateY: isClicked ? -180 : 0, rotateZ: isClicked ? -10 : 0, translateY: isClicked ? -100 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
          <path
            d={`M ${CX} ${CY - 253} A 253 253 0 1 1 ${CX} ${CY + 253} A 253 253 0 1 1 ${CX} ${CY - 253} Z`} // Main circle for the watch body
            fill="var(--color-maroon)"
            strokeWidth={10}
            filter="url(#dropShadow)"
          />

          </motion.g>
        </svg>
    </motion.div>
  );
}

const lineEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 z-0">
        <GearBackground />
      </div>
      <AmbientField variant="hero" className="z-[1]" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(99,11,12,0.18)_0%,rgba(8,8,8,0)_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_3px)]"
        aria-hidden
      />

      <div className="relative z-[4] mx-auto flex min-h-[100svh] max-w-[1600px] flex-col items-center justify-start gap-10 px-4 py-20 md:px-8 lg:px-16 lg:pb-32 lg:pt-20">
          <div className="flex max-w-3xl flex-col items-center justify-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
            className="flex flex-wrap items-center justify-start gap-3"
          >
            <span className="section-label-line" aria-hidden />
            <span className="font-space text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Est. 2012 · Orlando, FL
            </span>
            <span className="section-label-line" aria-hidden />
          </motion.div>

          <div className="mt-5 font-display text-[clamp(106px,13vw,210px)] font-black leading-[1.12] text-offwhite tracking-[0.1em]"
            style={{
              textShadow: "0 0 10px rgba(245,240,235,0.4), 0 2px 48px rgba(99,11,12,0.25)",
            }}
          >
            <div className="relative">
              <div className="-my-[0.14em] overflow-hidden py-[0.14em]">
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
                  Clockwork
                </motion.span>
              </div>
              <motion.div className="absolute bottom-[0%] right-[0%] z-10 w-fit font-['Steamwreck'] text-[clamp(90px,11vw,140px)] font-black uppercase leading-[0.8] text-offwhite/100 tracking-[0.1em] lg:bottom-[0%] lg:right-[0%] lg:text-[clamp(90px,11vw,140px)]">
                <div className="relative -my-[0.14em] overflow-hidden py-[0.14em]">
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
                    <span className="relative inline-block pb-[0.08em]">
                      <span
                        className="block text-transparent"
                        style={{
                          WebkitTextStroke: "2px var(--color-maroon-light)",
                          textShadow: "0 4px 40px rgba(99,11,12,0.35)",
                        }}
                        aria-hidden
                      >
                        MANIA
                      </span>
                      <motion.span
                        className="absolute left-0 top-0 block pb-[0.08em] text-maroon"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{
                          duration: reduce ? 0 : 0.9,
                          delay: reduce ? 0 : 1.2,
                          ease: "easeOut",
                        }}
                        style={{
                          textShadow: "0 4px 40px rgba(99,11,12,0.35)",
                        }}
                      >
                        MANIA
                      </motion.span>
                    </span>
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-[300px] items-center justify-center">
          <HeroPocketWatch />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-space text-[10px] uppercase tracking-[0.2em] text-gold">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-gold/25">
          <div className="animate-scroll-line absolute inset-x-0 top-0 h-full w-full bg-gold" />
        </div>
      </div>
      </div>
    </section>
  );
}
