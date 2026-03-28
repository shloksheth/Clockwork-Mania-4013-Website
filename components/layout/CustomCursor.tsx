"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 28 });
  const springY = useSpring(y, { stiffness: 500, damping: 28 });
  const scale = hovering ? 2 : 1;
  const transform = useMotionTemplate`translate(-50%, -50%) translate(${springX}px, ${springY}px) scale(${scale})`;

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const updateMq = () => setEnabled(mq.matches);
    updateMq();
    mq.addEventListener("change", updateMq);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const clickable = t.closest(
        "a, button, [role='button'], input, select, textarea, [data-cursor-hover]",
      );
      setHovering(!!clickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      mq.removeEventListener("change", updateMq);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-maroon mix-blend-normal"
      style={{ transform }}
    />
  );
}
