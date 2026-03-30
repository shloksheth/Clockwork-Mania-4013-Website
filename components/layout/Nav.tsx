"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/robot", label: "Robot" },
  { href: "/outreach", label: "Outreach" },
  { href: "/awards", label: "Awards" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

function GearLogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 4l2.2 4.1 4.6-.9 2.8 3.9 4.4 1.5-1 4.6 3.3 3.5-3.5 3.3-4.6-1-1.5 4.4-3.9 2.8.9 4.6-4.1 2.2-4.1-2.2-4.6.9-2.8-3.9-4.4-1.5 1-4.6-3.3-3.5 3.5-3.3 4.6 1 1.5-4.4 3.9-2.8-.9-4.6 4.1-2.2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const showLine = active || hover;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative pb-1 font-space text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
        active ? "text-gold" : "text-text-muted hover:text-offwhite"
      }`}
    >
      {label}
      <motion.span
        className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full bg-gold"
        initial={false}
        animate={{
          scaleX: showLine ? 1 : 0,
          opacity: showLine ? 1 : 0,
        }}
        transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </Link>
  );
}

export function Nav({
  setNavHeight,
}: { setNavHeight: (height: number) => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (headerRef.current) {
        setNavHeight(headerRef.current.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNavHeight);
    };
  }, [setNavHeight]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[rgba(13,13,13,0.92)] backdrop-blur-[16px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-16">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label="Clockwork Mania home"
          >
            <GearLogoIcon className="h-9 w-9 text-gold transition-colors group-hover:text-gold-light" />
            <div className="leading-tight flex-shrink-0">
              <span className="block font-bebas text-2xl tracking-[0.02em] text-offwhite">
                CLOCKWORK MANIA
              </span>
              <span className="block font-space text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                FRC 4013
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <NavLink key={l.href} href={l.href} label={l.label} active={active} />
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex rounded-lg border border-[var(--color-border)] p-2 text-offwhite md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[rgba(13,13,13,0.97)] backdrop-blur-[20px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            aria-modal="true"
            role="dialog"
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-lg border border-[var(--color-border)] p-3 text-offwhite"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-7 w-7" />
            </button>
            <div className="flex h-full flex-col items-center justify-center gap-4 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduce ? false : { opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.35 }}
                >
                  <Link
                    href={l.href}
                    className="block text-center font-bebas text-[clamp(36px,12vw,48px)] tracking-[0.02em] text-offwhite"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
