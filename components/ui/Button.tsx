import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "ghost";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-7 py-3 font-space text-xs font-semibold uppercase tracking-[0.1em] transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-maroon text-gold hover:scale-[1.02] hover:bg-maroon-light active:scale-[0.99]",
  ghost:
    "border border-gold text-gold hover:bg-[rgba(201,151,58,0.1)] active:scale-[0.99]",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      href,
      variant = "primary",
      type = "button",
      className = "",
      ariaLabel,
      disabled,
      onClick,
    },
    ref,
  ) => {
    const cn = `${base} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={cn} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={`${cn} ${disabled ? "pointer-events-none opacity-45" : ""}`}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
