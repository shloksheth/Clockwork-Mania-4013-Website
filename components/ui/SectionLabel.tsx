"use client";

import { AnimatedSVGUnderline } from "@/components/ui/AnimatedSVGUnderline";

type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`font-space flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gold md:justify-start ${className}`}
    >
      <span className="section-label-line" aria-hidden />
      <AnimatedSVGUnderline
        textClassName="font-space text-[11px] font-medium uppercase tracking-[0.18em] text-gold"
        strokeWidth={2.5}
        gap={1}
        drawTransition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </AnimatedSVGUnderline>
      <span className="section-label-line" aria-hidden />
    </p>
  );
}
