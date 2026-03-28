"use client";

import { motion } from "framer-motion";

function generateGearPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  numTeeth: number,
  toothWidth: number,
): string {
  const pts: string[] = [];
  const angleStep = (2 * Math.PI) / numTeeth;
  for (let i = 0; i < numTeeth; i++) {
    const angle = i * angleStep;
    const halfTooth = toothWidth / 2 / outerR;
    const a1 = angle - halfTooth;
    const a2 = angle + halfTooth;
    const a3 = angle + angleStep / 2 - halfTooth * 0.7;
    const a4 = angle + angleStep / 2 + halfTooth * 0.7;
    if (i === 0) {
      pts.push(
        `M ${cx + outerR * Math.cos(a1)} ${cy + outerR * Math.sin(a1)}`,
      );
    }
    pts.push(`L ${cx + outerR * Math.cos(a2)} ${cy + outerR * Math.sin(a2)}`);
    pts.push(`L ${cx + innerR * Math.cos(a3)} ${cy + innerR * Math.sin(a3)}`);
    pts.push(`L ${cx + innerR * Math.cos(a4)} ${cy + innerR * Math.sin(a4)}`);
    pts.push(
      `L ${cx + outerR * Math.cos((i + 1) * angleStep - halfTooth)} ${cy + outerR * Math.sin((i + 1) * angleStep - halfTooth)}`,
    );
  }
  pts.push("Z");
  return pts.join(" ");
}

const GEAR_CONFIG = [
  {
    id: 1,
    cx: "8%",
    cy: "15%",
    outerR: 180,
    innerR: 140,
    teeth: 16,
    dir: 1,
    duration: 80,
    opacity: 0.07,
  },
  {
    id: 2,
    cx: "5%",
    cy: "70%",
    outerR: 100,
    innerR: 78,
    teeth: 12,
    dir: -1,
    duration: 45,
    opacity: 0.05,
  },
  {
    id: 3,
    cx: "92%",
    cy: "10%",
    outerR: 140,
    innerR: 108,
    teeth: 14,
    dir: -1,
    duration: 65,
    opacity: 0.06,
  },
  {
    id: 4,
    cx: "95%",
    cy: "60%",
    outerR: 220,
    innerR: 172,
    teeth: 18,
    dir: 1,
    duration: 95,
    opacity: 0.08,
  },
  {
    id: 5,
    cx: "50%",
    cy: "90%",
    outerR: 160,
    innerR: 124,
    teeth: 16,
    dir: -1,
    duration: 70,
    opacity: 0.04,
  },
  {
    id: 6,
    cx: "20%",
    cy: "45%",
    outerR: 72,
    innerR: 56,
    teeth: 10,
    dir: 1,
    duration: 35,
    opacity: 0.035,
  },
  {
    id: 7,
    cx: "75%",
    cy: "85%",
    outerR: 88,
    innerR: 68,
    teeth: 10,
    dir: -1,
    duration: 40,
    opacity: 0.04,
  },
  {
    id: 8,
    cx: "60%",
    cy: "20%",
    outerR: 56,
    innerR: 44,
    teeth: 8,
    dir: 1,
    duration: 28,
    opacity: 0.03,
  },
] as const;

function pctToPx(pct: string, dim: number) {
  return (parseFloat(pct) / 100) * dim;
}

function AnimatedGear({
  gear,
}: {
  gear: (typeof GEAR_CONFIG)[number];
}) {
  const cx = pctToPx(gear.cx, 1440);
  const cy = pctToPx(gear.cy, 900);
  const toothW = gear.outerR * 0.14;
  const d = generateGearPath(
    cx,
    cy,
    gear.outerR,
    gear.innerR,
    gear.teeth,
    toothW,
  );
  const hubR = gear.outerR * 0.22;
  const target = gear.dir === 1 ? 360 : -360;

  return (
    <motion.g
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      animate={{ rotate: target }}
      transition={{ duration: gear.duration, repeat: Infinity, ease: "linear" }}
    >
      <path
        d={d}
        fill="var(--color-maroon)"
        fillOpacity={gear.opacity}
        stroke="var(--color-gold)"
        strokeOpacity={gear.opacity * 0.5}
        strokeWidth={1}
      />
      <circle
        cx={cx}
        cy={cy}
        r={hubR}
        fill="var(--color-maroon)"
        fillOpacity={gear.opacity}
        stroke="var(--color-gold)"
        strokeOpacity={gear.opacity * 0.5}
        strokeWidth={1}
      />
    </motion.g>
  );
}

export function GearBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {GEAR_CONFIG.map((g) => (
          <AnimatedGear key={g.id} gear={g} />
        ))}
      </svg>
    </div>
  );
}

export { generateGearPath };
