"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useTransform,
} from "framer-motion";

type Variant = "hero" | "subtle";

const spring = { stiffness: 32, damping: 20, mass: 0.55 };

export function AmbientField({
  variant = "hero",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, spring);
  const smy = useSpring(my, spring);

  const rangeX = variant === "hero" ? 420 : 280;
  const rangeY = variant === "hero" ? 280 : 180;
  const px = variant === "hero" ? 24 : 14;
  const py = variant === "hero" ? 18 : 10;

  const parallaxX = useTransform(smx, [-rangeX, rangeX], [-px, px]);
  const parallaxY = useTransform(smy, [-rangeY, rangeY], [-py, py]);
  const orb2x = useTransform(parallaxX, (v) => v * -0.62);
  const orb2y = useTransform(parallaxY, (v) => v * -0.52);
  const orb3x = useTransform(parallaxX, (v) => v * 0.48);
  const orb3y = useTransform(parallaxY, (v) => v * 0.52);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const vw = window.innerWidth / 2;
      const vh = window.innerHeight / 2;
      mx.set(e.clientX - vw);
      my.set(e.clientY - vh);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my, reduce]);

  const o = variant === "hero" ? 1 : 0.55;
  const blur = variant === "hero" ? 100 : 80;

  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.4] mix-blend-soft-light"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 210, 8, 0.042) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 210, 8, 0.042) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 42%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 42%, black 0%, transparent 72%)",
        }}
      />

      <motion.div
        className="absolute left-[-8%] top-[12%] rounded-full bg-maroon"
        style={{
          width: "min(58vw, 520px)",
          height: "min(58vw, 520px)",
          filter: `blur(${blur}px)`,
          opacity: 0.24 * o,
          mixBlendMode: "screen",
          x: parallaxX,
          y: parallaxY,
        }}
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.06, 0.98, 1],
                rotate: [0, 5, -4, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-12%] top-[10%] rounded-full bg-gold"
        style={{
          width: "min(48vw, 440px)",
          height: "min(48vw, 440px)",
          filter: `blur(${blur + 14}px)`,
          opacity: 0.11 * o,
          mixBlendMode: "soft-light",
          x: orb2x,
          y: orb2y,
        }}
        animate={reduce ? {} : { scale: [1, 0.95, 1.04, 1] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-8%] left-[20%] rounded-full bg-maroon-light"
        style={{
          width: "min(42vw, 380px)",
          height: "min(42vw, 380px)",
          filter: `blur(${blur}px)`,
          opacity: 0.15 * o,
          mixBlendMode: "screen",
          x: orb3x,
          y: orb3y,
        }}
        animate={reduce ? {} : { scale: [1, 1.05, 0.96, 1] }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {!reduce && variant === "hero" && (
        <motion.div
          className="absolute left-[8%] right-[8%] top-[40%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}
