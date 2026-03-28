"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

export function ImageReveal({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  const dur = reduce ? 0 : 0.85;
  const ease = [0.76, 0, 0.24, 1] as const;

  const origin =
    direction === "left"
      ? "right center"
      : direction === "right"
        ? "left center"
        : "center bottom";

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.08 }}
        animate={
          isInView
            ? { scale: 1, transition: { duration: dur, delay, ease } }
            : { scale: 1.08 }
        }
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-maroon"
        initial={
          direction === "up"
            ? { scaleY: 1, transformOrigin: origin }
            : { scaleX: 1, transformOrigin: origin }
        }
        animate={
          isInView
            ? direction === "up"
              ? {
                  scaleY: 0,
                  transition: { duration: dur, delay: delay + 0.1, ease },
                }
              : {
                  scaleX: 0,
                  transition: { duration: dur, delay: delay + 0.1, ease },
                }
            : direction === "up"
              ? { scaleY: 1 }
              : { scaleX: 1 }
        }
        style={{ transformOrigin: origin }}
      />
    </div>
  );
}
