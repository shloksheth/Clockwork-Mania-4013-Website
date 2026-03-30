"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { HotspotMarker } from "@/components/robot/HotspotMarker";
import { robotAnnotations } from "@/data/robot-annotations";
import type { RobotAnnotation } from "@/data/robot-annotations";

function useIsMd() {
  const [md, setMd] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setMd(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return { isMd: md, mounted };
}

export function RobotAnnotationView() {
  const [active, setActive] = useState<RobotAnnotation | null>(null);
  const { isMd, mounted } = useIsMd();
  const desktop = mounted && isMd;

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* TODO: Replace with actual CAD render image — should be a high-res PNG/WebP of the robot CAD, ideally on transparent or dark background */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card border border-border bg-gradient-to-br from-maroon-dark via-[#0f0f0f] to-black">
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center font-space text-sm uppercase tracking-[0.12em] text-text-muted">
          {/* TODO: High-res robot CAD render */}
          {"// IMAGE: High-res robot CAD render (PNG/WebP)"}
        </div>

        {robotAnnotations.map((a) => (
          <HotspotMarker
            key={a.id}
            label={a.label}
            xPct={a.x}
            yPct={a.y}
            selected={active?.id === a.id}
            onSelect={() => setActive(a)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <>
            {!desktop && (
              <motion.button
                type="button"
                className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                aria-label="Close annotation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
              />
            )}

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="annotation-title"
              className="fixed bottom-0 left-0 right-0 z-[70] max-h-[60vh] overflow-y-auto rounded-t-[3px] border-t border-[var(--color-border)] bg-surface-raised p-6 pb-8 shadow-2xl md:absolute md:bottom-auto md:left-auto md:right-3 md:top-1/2 md:max-h-[85%] md:w-[30%] md:min-w-[300px] md:-translate-y-1/2 md:rounded-card md:border md:border-[var(--color-border)] md:p-6"
              initial={
                desktop
                  ? { x: 300, opacity: 0, y: 0 }
                  : { y: "100%", opacity: 0, x: 0 }
              }
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={
                desktop
                  ? { x: 300, opacity: 0, y: 0 }
                  : { y: "100%", opacity: 0, x: 0 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="annotation-title"
                  className="font-space text-xl font-bold text-offwhite md:text-2xl"
                >
                  {active.label}
                </h3>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="shrink-0 rounded-lg border border-[var(--color-border)] p-2 text-text-muted hover:border-gold hover:text-gold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 font-space text-sm text-gold">{active.description}</p>
              <p className="mt-5 font-inter text-base leading-relaxed text-text-muted">
                {active.detailText}
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
