"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { generateGearPath } from "@/components/sections/GearBackground";
import { internationalCountryCards } from "@/data/international-countries";
import { communityOutreachEvents } from "@/data/outreach-events";
import { collaborations } from "@/data/collaborations";
import {
  internationalProgramBody,
  communityProgramBody,
  collaborationsIntro,
} from "@/data/impact";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { EventCard } from "@/components/outreach/EventCard";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function WorldMapBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        fill="none"
        stroke="var(--color-maroon)"
        strokeWidth={0.6}
        strokeOpacity={0.15}
        strokeDasharray="3 6"
        d="M120 140 C220 90 380 100 480 130 S720 110 880 160 M100 260 C260 220 420 240 540 280 S760 260 920 300 M160 360 C340 320 520 340 680 380 S840 360 940 340"
      />
      <path
        fill="none"
        stroke="var(--color-maroon)"
        strokeWidth={0.5}
        strokeOpacity={0.12}
        strokeDasharray="25"
        d="M200 180 Q400 120 600 160 T800 200 M150 320 Q400 280 650 300"
      />
    </svg>
  );
}

function GearMeshBg() {
  const gears: ReactNode[] = [];
  let k = 0;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 10; col++) {
      const cx = 60 + col * 95;
      const cy = 50 + row * 85;
      const outer = 22;
      const inner = 17;
      const d = generateGearPath(cx, cy, outer, inner, 10, outer * 0.14);
      gears.push(
        <path
          key={k++}
          d={d}
          fill="none"
          stroke="var(--color-maroon)"
          strokeOpacity={0.06}
          strokeWidth={0.4}
        />,
      );
    }
  }
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 650"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {gears}
    </svg>
  );
}

function StickyProgramSection({
  id,
  sectionLabel,
  title,
  description,
  visual,
  children,
}: {
  id: string;
  sectionLabel: string;
  title: string;
  description: string;
  visual: ReactNode;
  children: ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 769px)", false);
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "30%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.5],
    reduce ? ["0%", "0%"] : ["0%", "-20%"],
  );

  if (!isDesktop) {
    return (
      <section id={id} className="scroll-mt-28 bg-[#0D0D0D] py-16">
        <div className="grain-dark relative px-4 md:px-8 lg:px-16">
          <SectionLabel>{sectionLabel}</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(36px,6vw,72px)] text-offwhite">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-[clamp(15px,2vw,18px)] text-text-primary">
            {description}
          </p>
          <div className="relative mt-10 min-h-[200px] overflow-hidden rounded-2xl border border-[rgba(201,151,58,0.12)]">
            {visual}
          </div>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative scroll-mt-28 bg-[#0D0D0D]"
      style={{ position: "relative" }}
    >
      <div
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
        style={{ overflow: "clip" }}
      >
        <motion.div
          className="absolute inset-0 bg-[#0a0a0a]"
          style={{ y: backgroundY, opacity }}
        >
          {visual}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 lg:px-16">
          <motion.div style={{ y: headingY }}>
            <SectionLabel>{sectionLabel}</SectionLabel>
            <h2 className="mt-4 text-center font-display text-[clamp(48px,7vw,80px)] tracking-[0.03em] text-offwhite md:text-left">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center font-body text-[clamp(15px,2vw,18px)] text-text-primary md:mx-0 md:text-left">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 -mt-[30vh] pb-[10vh] pt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">{children}</div>
      </div>
    </section>
  );
}

export function OutreachParallaxBlocks() {
  return (
    <>
      <StickyProgramSection
        id="international"
        sectionLabel="International Outreach"
        title="WINDING UP THE WORLD"
        description={internationalProgramBody}
        visual={<WorldMapBg />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {internationalCountryCards.map((c, i) => (
            <SpotlightCard
              key={c.name}
              className="rounded-xl border border-[rgba(201,151,58,0.12)] bg-surface p-6"
              spotlightColor="rgba(201, 151, 58, 0.08)"
              lift={6}
            >
              <span className="text-2xl">{c.flag}</span>
              <h3 className="mt-3 font-ui text-lg text-offwhite">{c.name}</h3>
              <p className="mt-2 font-body text-sm text-text-muted">{c.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </StickyProgramSection>

      <StickyProgramSection
        id="community"
        sectionLabel="Community Engagement"
        title="MAKING THE COMMUNITY TICK"
        description={communityProgramBody}
        visual={<GearMeshBg />}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communityOutreachEvents.map((e) => (
            <SpotlightCard
              key={e.title}
              className="rounded-xl"
              spotlightColor="rgba(123, 28, 28, 0.06)"
              lift={6}
            >
              <EventCard event={e} />
            </SpotlightCard>
          ))}
        </div>
      </StickyProgramSection>

      <StickyProgramSection
        id="collaborations"
        sectionLabel="Collaborations"
        title="MESHING WITH PUBLIC FIGURES"
        description={collaborationsIntro}
        visual={
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(123,28,28,0.2)_0%,transparent_65%)]"
            aria-hidden
          />
        }
      >
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {collaborations.map((c) => (
            <SpotlightCard
              key={c.title}
              className="min-w-0 flex-1 rounded-xl border border-[rgba(201,151,58,0.12)] bg-surface p-6 md:min-w-[280px]"
              spotlightColor="rgba(201, 151, 58, 0.08)"
              lift={6}
            >
              <h3 className="font-ui text-lg text-offwhite">{c.title}</h3>
              <p className="mt-3 font-body text-sm text-text-muted">{c.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </StickyProgramSection>
    </>
  );
}
