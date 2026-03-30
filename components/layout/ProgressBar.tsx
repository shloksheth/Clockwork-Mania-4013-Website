"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ProgressBar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    setTick((t) => t + 1);
  }, [pathname, reduce]);

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden"
      aria-hidden
    >
      <motion.div
        key={tick}
        className="h-full w-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full bg-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "0% 50%" }}
        />
      </motion.div>
    </div>
  );
}
