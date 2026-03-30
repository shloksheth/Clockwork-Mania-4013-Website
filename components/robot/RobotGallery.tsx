"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const placeholders = Array.from({ length: 9 }, (_, i) => i);

export function RobotGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
      {placeholders.map((i) => (
        <button
          key={i}
          type="button"
          aria-label={`Open gallery image ${i + 1}`}
          onClick={() => setOpen(i)}
          className="mb-4 break-inside-avoid w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {/* TODO: Add actual robot photos */}
          <div className="aspect-[4/5] overflow-hidden rounded-card bg-gradient-to-br from-maroon-dark to-black transition-transform duration-300 hover:scale-[1.02]">
            <span className="flex h-full items-center justify-center p-4 text-center font-space text-[10px] uppercase tracking-[0.12em] text-text-muted">
              {/* TODO: Robot photo */}
              {`// IMAGE: Robot photo ${i + 1}`}
            </span>
          </div>
        </button>
      ))}

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-card border border-[var(--color-border)] bg-surface shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-lg border border-[var(--color-border)] bg-black/40 p-2 text-offwhite hover:border-gold"
                onClick={() => setOpen(null)}
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video min-h-[40vh] w-full bg-gradient-to-br from-maroon-dark to-black md:aspect-[16/10]">
                <span className="flex h-full items-center justify-center p-8 text-center font-space text-sm text-text-muted">
                  {/* TODO: Full-size robot photo */}
                  {`// IMAGE: Full-size robot photo ${open + 1}`}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
