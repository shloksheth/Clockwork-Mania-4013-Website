"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const entries = [
  {
    year: "2012",
    title: "Team founded at Orlando Science School",
    body: "Clockwork Mania begins its journey as a competitive FRC program.",
  },
  {
    year: "2012–2017",
    title: "First World Championship appearances",
    body: "Early qualifications that set the tone for more than a decade of sustained excellence.",
  },
  {
    year: "2023",
    title: "Project Uzbekistan",
    body: "Summer camps for 200+ students expanding international STEM access.",
  },
  {
    year: "2023",
    title: "Featured on FOX 35 News",
    body: "Regional coverage spotlighting campus innovation and student leaders.",
  },
  {
    year: "2024",
    title: "CubeSat with Accenture — IEEE Conference",
    body: "Student aerospace work presented to a professional technical audience.",
  },
  {
    year: "2024",
    title: "Aerospace Engineering Club launched",
    body: "30+ members exploring aviation and spacecraft pathways beyond FRC season.",
  },
  {
    year: "2024",
    title: "Met Astronaut Dr. Sian Proctor at SpaceCom",
    body: "Inspiration and mentorship at the 51st SpaceCom conference.",
  },
  {
    year: "2025",
    title: "Thirteenth season · tenth Worlds",
    body: "Ten World Championship qualifications across thirteen competitive seasons.",
  },
];

export function HistoryTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="history"
      ref={ref}
      className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-20 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
        <h2 className="font-heading text-4xl font-semibold text-offwhite">Our Journey</h2>
        <div className="relative mt-16">
          <div
            className="absolute left-[50%] top-0 hidden h-full w-px -translate-x-1/2 bg-maroon md:block"
            aria-hidden
          />
          <div className="space-y-14">
            {entries.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.article
                  key={`${e.year}-${e.title}`}
                  className={`relative md:w-[calc(50%-2rem)] ${
                    left ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                  }`}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.55, ease: "easeOut" }}
                >
                  <div className="rounded-card border border-[rgba(255,210,8,0.15)] bg-surface p-6">
                    <p className="font-bebas text-5xl text-gold">{e.year}</p>
                    <h3 className="mt-2 font-space text-xl font-semibold text-offwhite">
                      {e.title}
                    </h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-text-muted">
                      {e.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
