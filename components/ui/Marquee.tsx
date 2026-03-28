"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const duplicated = [...items, ...items, ...items];
  const reduce = useReducedMotion();

  return (
    <div
      className="w-full overflow-hidden border-y border-[rgba(201,151,58,0.1)] py-5"
      style={{ background: "rgba(123,28,28,0.04)" }}
    >
      <motion.div
        className="flex w-max gap-16"
        animate={reduce ? {} : { x: ["0%", "-33.333%"] }}
        transition={{
          duration: 25,
          repeat: reduce ? 0 : Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicated.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-space text-[13px] font-medium uppercase tracking-[0.15em] text-[rgba(201,151,58,0.45)]"
          >
            ⚙ {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
