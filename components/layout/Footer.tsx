"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "Robot" },
  { href: "/outreach", label: "Outreach" },
  { href: "/awards", label: "Awards" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

function FooterMotionLink({ href, children }: { href: string; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div whileHover={reduce ? {} : { y: -2 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="font-space text-sm text-text-muted hover:text-gold">
        {children}
      </Link>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="grain-dark border-t border-[var(--color-border)] bg-[#0D0D0D]">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8 lg:px-16">
        <div>
          <p className="font-bebas text-3xl tracking-[0.02em] text-offwhite">
            CLOCKWORK MANIA
          </p>
          <p className="mt-2 max-w-xs font-space text-sm text-text-muted">
            FRC Team 4013 — Even the smallest gear makes the clock work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="rounded-lg border border-[var(--color-border)] p-2 text-text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="rounded-lg border border-[var(--color-border)] p-2 text-text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="rounded-lg border border-[var(--color-border)] p-2 text-text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-space text-xs font-semibold uppercase tracking-[0.1em] text-gold">
            Site
          </p>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <FooterMotionLink href={l.href}>{l.label}</FooterMotionLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-space text-xs font-semibold uppercase tracking-[0.1em] text-gold">
            Contact
          </p>
          <ul className="mt-4 space-y-3 font-space text-sm text-text-muted">
            <li>
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-block hover:text-gold"
                href="mailto:Stephen.Whitfield@orlandoscience.org"
              >
                Stephen.Whitfield@orlandoscience.org
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-block hover:text-gold"
                href="mailto:frc4013.clockworkmania@gmail.com"
              >
                frc4013.clockworkmania@gmail.com
              </motion.a>
            </li>
            <li>Orlando Science High School, Orlando, FL</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-6 text-center font-space text-xs text-text-muted">
        © 2025 FRC Team 4013 Clockwork Mania. All rights reserved.
      </div>
    </footer>
  );
}
