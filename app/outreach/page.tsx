import type { Metadata } from "next";
import { GearBackground } from "@/components/sections/GearBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OutreachImpactStats } from "@/components/outreach/OutreachImpactStats";
import { OutreachParallaxBlocks } from "@/components/outreach/OutreachParallaxBlocks";
import { synapticBody, autodeskBody, outreachSubtitle } from "@/data/impact";
import { TeamFoundedCard } from "@/components/outreach/TeamFoundedCard";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Outreach & Impact",
  description:
    "International camps, community events, collaborations, and programs beyond the field.",
};

export default function OutreachPage() {
  return (
    <>
      <section className="grain-dark relative min-h-[70vh] overflow-hidden bg-[#0D0D0D] px-4 pb-20 pt-32 md:px-8 lg:px-16 lg:pt-36">
        <GearBackground />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionLabel>Outreach &amp; Community</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(56px,13vw,120px)] text-offwhite">
            Impact Beyond the Field
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[clamp(15px,2vw,18px)] text-text-primary">
            {outreachSubtitle}
          </p>
        </div>
      </section>

      <section id="overview" className="scroll-mt-28 bg-[#0D0D0D] py-16 md:py-20">
        <OutreachImpactStats />
      </section>

      <SectionDivider />

      <OutreachParallaxBlocks />

      <SectionDivider />

      <section id="programs" className="scroll-mt-28 bg-[#0d0d0d] py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="rounded-card border border-[rgba(255,210,8,0.2)] bg-surface p-8 md:p-14">
            <h2 className="font-display text-[clamp(40px,6vw,64px)] text-gold">Synaptic Solutions</h2>
            <p className="mt-6 font-space text-sm uppercase tracking-[0.12em] text-offwhite">
              Innovation for neurodiversity
            </p>
            <p className="mt-6 font-body text-[clamp(15px,2vw,18px)] text-text-primary">
              {synapticBody}
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-heading text-[clamp(24px,4vw,32px)] font-medium text-offwhite">
              Teams We&apos;ve Built
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "OSS Loose Screws",
                  subtitle: "FTC 22012",
                  description: "State Championships in rookie year.",
                },
                {
                  title: "Short Circuit",
                  subtitle: "FTC 24085",
                  description: "Student-led build culture off the FRC floor.",
                },
                {
                  title: "Fractal Fusion",
                  subtitle: "FTC 27188",
                  description: "Team award with state advancement in rookie year.",
                },
                {
                  title: "FLL Ultra Orcas",
                  subtitle: "Mentored weekly",
                  description: "Sustained mentorship for elementary competitive robotics.",
                },
                {
                  title: "Unofficial Kickoff + Scrimmage Host",
                  subtitle: "7 FTC teams",
                  description: "Convening Central Florida programs for shared readiness.",
                },
                {
                  title: "Aerospace Engineering Club",
                  subtitle: "30+ members · 50+ interested",
                  description: "Expanded pathway for aviation and spacecraft engineering.",
                },
              ].map((t) => (
                <SpotlightCard
                  key={t.title}
                  className="rounded-card"
                  spotlightColor="rgba(123, 28, 28, 0.06)"
                  lift={6}
                >
                  <TeamFoundedCard {...t} />
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-card border border-[rgba(255,210,8,0.15)] bg-surface p-10">
            <h3 className="font-display text-[clamp(36px,5vw,52px)] text-offwhite">
              Autodesk Certification
            </h3>
            <p className="mt-6 font-body text-[clamp(15px,2vw,18px)] text-text-primary">
              {autodeskBody}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
