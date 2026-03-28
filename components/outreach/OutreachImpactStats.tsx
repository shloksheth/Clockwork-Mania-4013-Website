"use client";

import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items: {
  n: number;
  suffix: string;
  label: string;
  prefix?: string;
  formatThousands?: boolean;
}[] = [
  { n: 200, suffix: "+", label: "Children reached in Uzbekistan summer camps" },
  {
    n: 2500,
    suffix: "+",
    label: "Visitors engaged at Otronicon",
    formatThousands: true,
  },
  {
    n: 11000,
    prefix: "$",
    suffix: "+",
    label: "Raised through FLL summer camps",
    formatThousands: true,
  },
  { n: 6, suffix: "", label: "FIRST teams mentored / founded" },
  { n: 5, suffix: "+", label: "Countries reached through international outreach" },
];

export function OutreachImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-2 lg:grid-cols-5 lg:px-16"
    >
      {items.map((s) => (
        <SpotlightCard
          key={s.label}
          className="rounded-[12px]"
          spotlightColor="rgba(201, 151, 58, 0.08)"
          lift={4}
        >
          <Card goldTop className="h-full border-0 p-6 text-center shadow-none">
            <div className="stat-number-gradient flex justify-center text-[clamp(40px,6vw,72px)]">
              {inView ? (
                <CountUp
                  target={s.n}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix}
                  formatThousands={s.formatThousands ?? false}
                />
              ) : (
                "0"
              )}
            </div>
            <p className="mt-3 font-space text-xs font-medium leading-snug text-text-muted md:text-sm">
              {s.label}
            </p>
          </Card>
        </SpotlightCard>
      ))}
    </div>
  );
}
