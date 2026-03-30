"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  useReducedMotion,
} from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

function buildVariants(reduce: boolean): Record<string, Variants> {
  const b = reduce ? "blur(0px)" : "blur(10px)";
  const z = "blur(0px)";
  return {
    up: {
      hidden: { opacity: 0, y: 44, filter: b },
      visible: { opacity: 1, y: 0, filter: z },
    },
    left: {
      hidden: { opacity: 0, x: -44, filter: b },
      visible: { opacity: 1, x: 0, filter: z },
    },
    right: {
      hidden: { opacity: 0, x: 44, filter: b },
      visible: { opacity: 1, x: 0, filter: z },
    },
    none: {
      hidden: { opacity: 0, filter: b },
      visible: { opacity: 1, filter: z },
    },
  };
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();
  const variantMap = useMemo(() => buildVariants(!!reduce), [reduce]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantMap[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
