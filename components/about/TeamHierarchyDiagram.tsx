"use client";

import { motion } from "framer-motion";

const node =
  "rounded-card border border-[rgba(255,210,8,0.25)] bg-[#1a1a1a] px-4 py-3 text-center font-space text-sm font-semibold uppercase tracking-[0.08em] text-offwhite";

export function TeamHierarchyDiagram() {
  return (
    <div className="mx-auto max-w-4xl rounded-card border border-[rgba(13,13,13,0.08)] bg-white p-10 shadow-sm">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className={node}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Team
        </motion.div>
        <div className="h-8 w-px bg-maroon" aria-hidden />
        <div className="flex w-full flex-col justify-center gap-6 md:flex-row md:gap-10">
          <motion.div
            className={`${node} flex-1`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            Robot Division
          </motion.div>
          <motion.div
            className={`${node} flex-1`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            Logistics Division
          </motion.div>
        </div>
        <div className="hidden h-8 w-px bg-maroon md:block" aria-hidden />
        <motion.p
          className="max-w-xl text-center font-inter text-sm text-[#3d3835]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Subteams — mechanical, design, software, electrical, business, media, outreach, and
          strategy — roll up into the division that owns their primary deliverables while staying
          connected through integrated design reviews.
        </motion.p>
      </div>
    </div>
  );
}
