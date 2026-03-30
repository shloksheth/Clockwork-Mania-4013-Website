"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "primary" | "ghost";

const baseInner =
  "relative z-[1] inline-flex items-center justify-center overflow-hidden rounded-card border px-8 py-3.5 font-space text-[11px] font-medium uppercase tracking-[0.12em] transition-colors";

const variantClass: Record<Variant, string> = {
  primary:
    "border-transparent bg-maroon text-gold hover:text-gold-light [.light-cta_&]:border-[rgba(8,8,8,0.12)] [.light-cta_&]:bg-[#f7f5f0] [.light-cta_&]:text-maroon [.light-cta_&]:hover:bg-white",
  ghost:
    "border border-gold/35 bg-transparent text-gold hover:border-gold/70 hover:bg-[rgba(255,210,8,0.06)] [.light-cta_&]:border-[rgba(8,8,8,0.2)] [.light-cta_&]:text-[#1a1816] [.light-cta_&]:hover:bg-[rgba(8,8,8,0.04)]",
};

const outerVariants = { rest: {}, hover: {} };

function ShimmerLayer({
  variant,
  reduced,
}: {
  variant: Variant;
  reduced: boolean | null;
}) {
  const gradient =
    variant === "primary"
      ? "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)"
      : "linear-gradient(105deg, transparent 25%, rgba(255,210,8,0.35) 50%, transparent 75%)";

  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-0 h-[200%] w-10 -skew-x-12"
      style={{ background: gradient, top: "-50%" }}
      variants={{
        rest: { x: "-160%", opacity: 0 },
        hover: {
          x: "260%",
          opacity: 1,
          transition: reduced
            ? { duration: 0 }
            : { duration: 0.5, ease: "easeInOut" },
        },
      }}
    />
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  theme?: "dark" | "light";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.3,
  variant = "primary",
  href,
  type = "button",
  disabled,
  ariaLabel,
  theme = "dark",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 };

  const updateFromEl = (
    e: React.MouseEvent,
    el: HTMLElement | null,
  ) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const innerClass = `${baseInner} ${variantClass[variant]} ${theme === "light" ? "light-cta" : ""} ${className}`;

  const innerBlock = (
    <motion.span
      variants={outerVariants}
      initial="rest"
      whileHover={disabled ? "rest" : "hover"}
      className="inline-flex"
    >
      <span className={innerClass}>
        <ShimmerLayer variant={variant} reduced={reduce} />
        <span className="relative z-[2]">{children}</span>
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <Link
        ref={linkRef}
        href={href}
        className={`inline-flex ${theme === "light" ? "light-cta" : ""}`}
        aria-label={ariaLabel}
        onMouseMove={(e) => updateFromEl(e, linkRef.current)}
        onMouseLeave={reset}
      >
        <motion.span
          animate={{ x: position.x, y: position.y }}
          transition={spring}
          whileTap={reduce ? {} : { scale: 0.96 }}
          className="inline-flex"
        >
          {innerBlock}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={(e) => updateFromEl(e, ref.current)}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={spring}
      whileTap={reduce || disabled ? {} : { scale: 0.96 }}
      className={`inline-flex border-0 bg-transparent p-0 ${theme === "light" ? "light-cta" : ""}`}
    >
      {innerBlock}
    </motion.button>
  );
}
