"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        className="min-h-[50vh]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
