"use client";

type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`font-space flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gold md:justify-start ${className}`}
    >
      <span className="section-label-line" aria-hidden />
      <span>{children}</span>
      <span className="section-label-line" aria-hidden />
    </p>
  );
}
