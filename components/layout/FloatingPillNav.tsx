"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type PillItem = { id: string; label: string };

const ROUTE_SECTIONS: Record<string, PillItem[]> = {
  "/": [
    { id: "stats", label: "Stats" },
    { id: "about", label: "About" },
    { id: "outreach", label: "Outreach" },
    { id: "robot", label: "Robot" },
    { id: "news", label: "News" },
    { id: "sponsors", label: "Sponsors" },
  ],
  "/about": [
    { id: "intro", label: "Intro" },
    { id: "mission", label: "Mission" },
    { id: "subteams", label: "Subteams" },
    { id: "history", label: "History" },
  ],
  "/robot": [
    { id: "overview", label: "Overview" },
    { id: "cad-view", label: "CAD" },
    { id: "gallery", label: "Gallery" },
    { id: "specs", label: "Specs" },
  ],
  "/outreach": [
    { id: "overview", label: "Overview" },
    { id: "international", label: "Global" },
    { id: "community", label: "Community" },
    { id: "collaborations", label: "Partners" },
    { id: "programs", label: "Programs" },
  ],
  "/awards": [
    { id: "highlights", label: "Highlights" },
    { id: "timeline", label: "Achievements" },
    { id: "press", label: "Press" },
  ],
  "/sponsors": [
    { id: "current-sponsors", label: "Sponsors" },
    { id: "tiers", label: "Tiers" },
    { id: "become-a-sponsor", label: "Partner" },
  ],
};

export function FloatingPillNav() {
  const pathname = usePathname();
  const items = ROUTE_SECTIONS[pathname];
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => !!items && pastHero && !nearFooter,
    [items, pastHero, nearFooter],
  );

  useEffect(() => {
    const heroThreshold = window.innerHeight;
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const bottom = doc.scrollHeight - window.innerHeight - y;
      setPastHero(y > heroThreshold + 8);
      setNearFooter(bottom < 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!items?.length) return;
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (!visibleEntries.length) return;
        const top = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        const id = top.target.getAttribute("id");
        if (id) setActive(id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.05, 0.25, 0.5, 0.75] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items, pathname]);

  if (!items?.length) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 z-50 max-w-[calc(100vw-32px)] -translate-x-1/2 px-2"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 8,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      aria-hidden={!visible}
    >
      <nav
        className="scrollbar-hide flex max-w-[90vw] gap-1 overflow-x-auto rounded-full border border-[rgba(201,151,58,0.25)] bg-[rgba(26,26,26,0.9)] px-3 py-1.5 backdrop-blur-[20px]"
        aria-label="Section navigation"
      >
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <Link
              key={item.id}
              href={`${pathname}#${item.id}`}
              data-cursor-hover
              className={`whitespace-nowrap rounded-full px-2.5 py-1.5 font-space text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${
                isActive
                  ? "bg-maroon text-gold"
                  : "text-text-muted hover:bg-[rgba(123,28,28,0.25)] hover:text-offwhite"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}
