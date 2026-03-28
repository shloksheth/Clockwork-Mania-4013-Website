"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
  /** Use en-US grouping (e.g. 2,500) */
  formatThousands?: boolean;
};

export function CountUp({
  target,
  duration = 1600,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
  formatThousands = false,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: duration / 1000,
      ease: "easeOut",
      onUpdate: (v) => {
        setValue(decimals > 0 ? Number(v.toFixed(decimals)) : Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, target, duration, decimals]);

  let formatted =
    decimals > 0 ? value.toFixed(decimals) : String(value ?? 0);
  if (formatThousands && decimals === 0) {
    formatted = Math.round(value).toLocaleString("en-US");
  }

  return (
    <span ref={ref} className={className}>
      {prefix ?? ""}
      {formatted}
      {suffix}
    </span>
  );
}
