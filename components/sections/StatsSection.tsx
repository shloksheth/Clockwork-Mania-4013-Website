"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { homeStats } from "@/data/stats";

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      id="stats"
      ref={ref}
      className="grain-dark scroll-mt-28 border-t border-gold bg-[#0D0D0D] py-16 md:py-24 lg:py-32"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8 lg:px-16">
        {homeStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
          >
            <SpotlightCard className="rounded-[12px]" spotlightColor="rgba(201, 151, 58, 0.08)" lift={4}>
              <Card goldTop className="h-full border-0 p-6 text-center shadow-none md:p-8">
                <div className="stat-number-gradient flex justify-center">
                  {inView ? (
                    <CountUp
                      target={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="mt-4 font-space text-sm font-medium leading-snug text-offwhite">
                  {s.label}
                </p>
              </Card>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
