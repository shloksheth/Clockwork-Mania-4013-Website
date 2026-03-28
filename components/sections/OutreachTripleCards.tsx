"use client";

import { motion } from "framer-motion";
import { OutreachProgramCard } from "@/components/outreach/OutreachProgramCard";

export function OutreachTripleCards() {
  return (
    <motion.div
      className="mt-14 grid gap-8 lg:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {[
        {
          title: "🌐 Winding Up the World",
          description:
            "International outreach — camps, kit programs, and partnerships that carry STEM beyond Central Florida.",
        },
        {
          title: "🏘️ Making the Community Tick",
          description:
            "School demos, science-center events, and mentorship pipelines that meet families where they gather.",
        },
        {
          title: "🤝 Meshing with Public Figures",
          description:
            "Leaders, industry labs, and media partners who amplify student work with real-world stakes.",
        },
      ].map((c) => (
        <motion.div
          key={c.title}
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
          }}
        >
          <OutreachProgramCard title={c.title} description={c.description} />
        </motion.div>
      ))}
    </motion.div>
  );
}
