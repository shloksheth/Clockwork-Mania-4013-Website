import type { Metadata } from "next";
import { GearBackground } from "@/components/sections/GearBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Card } from "@/components/ui/Card";
import { introParagraph, missionQuoteAttribution } from "@/data/impact";
import { subteams } from "@/data/subteams";
import { SubteamIcon } from "@/components/about/SubteamIcon";
import { TeamHierarchyDiagram } from "@/components/about/TeamHierarchyDiagram";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet FRC 4013 Clockwork Mania — subteams, mission, and history since 2012.",
};

const technicalTags = [
  "CAD (Onshape / Fusion 360)",
  "Machining / CAM",
  "Programming (JavaScript)",
  "Public Speaking",
  "Sponsorship / Grant Writing",
  "Imagery / Industrial Design",
  "Brand Development",
];

const lifeTags = [
  "Teamwork & Collaboration",
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Time Management",
  "Adaptability",
];

export default function AboutPage() {
  return (
    <>
      <section className="grain-dark relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-[#0D0D0D] px-5 pb-16 pt-36 lg:px-8">
        <GearBackground />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="font-bebas text-[clamp(3.5rem,10vw,6rem)] tracking-[0.02em] text-offwhite">
            About the Team
          </h1>
          <p className="mt-4 font-space text-lg text-gold">
            Orlando Science High School · Since 2012
          </p>
        </div>
      </section>

      <section id="intro" className="scroll-mt-28 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <RevealOnScroll>
            <p className="font-inter text-[17px] leading-[1.75] text-[#3d3835]">
              {introParagraph}
            </p>
            <p className="mt-6 font-inter text-sm text-[#5c534c]">
              For program details and outreach depth, continue to{" "}
              <Link href="/outreach" className="text-maroon underline">
                Outreach &amp; Impact
              </Link>
              .
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05} direction="right">
            <ImageReveal direction="right" delay={0.05} className="aspect-[4/5] rounded-2xl">
              <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-maroon-dark to-black p-6 text-center font-space text-xs uppercase tracking-[0.12em] text-text-muted md:min-h-full">
                {/* TODO: Replace with official team photo */}
                {"// IMAGE: Team photo"}
              </div>
            </ImageReveal>
          </RevealOnScroll>
        </div>
      </section>

      <section id="mission" className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
          <blockquote className="relative border-l-[3px] border-gold py-2 pl-7 pr-4 md:pl-7">
            <span
              className="font-editorial pointer-events-none absolute -left-[10px] -top-5 text-[120px] leading-none text-maroon opacity-60"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="font-editorial relative z-[1] text-[22px] italic leading-snug text-[rgba(245,240,235,0.7)]">
              Everybody has to be able to participate in a future that they want to live for.
              That&apos;s what technology can do.
            </p>
            <footer className="mt-6 font-space text-sm font-semibold uppercase tracking-[0.1em] text-gold">
              — {missionQuoteAttribution}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="grain-dark bg-[#0D0D0D] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-space text-4xl font-bold text-offwhite">What We Teach</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-space text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                Technical Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {technicalTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-maroon-light bg-[rgba(123,28,28,0.3)] px-3 py-1.5 font-space text-sm text-offwhite"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-space text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                Life Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {lifeTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-maroon-light bg-[rgba(123,28,28,0.3)] px-3 py-1.5 font-space text-sm text-offwhite"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-14 max-w-3xl border-l-4 border-gold py-2 pl-6 font-space text-lg text-offwhite">
            Decade-long 100% college acceptance rate — MIT, Georgia Tech, Stanford and more.
          </p>
        </div>
      </section>

      <section id="subteams" className="scroll-mt-28 bg-[#0d0d0d] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>People</SectionLabel>
          <h2 className="mt-3 font-space text-4xl font-bold text-offwhite">Our Subteams</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subteams.map((s) => (
              <SpotlightCard key={s.name} className="rounded-[12px]">
                <Card goldTop className="h-full p-6">
                  <SubteamIcon icon={s.icon} />
                  <h3 className="mt-4 font-space text-lg font-semibold text-offwhite">{s.name}</h3>
                  <p className="mt-1 font-space text-xs text-gold">Captain: {s.captain}</p>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-text-muted">
                    {s.description}
                  </p>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-space text-4xl font-bold text-[#0d0d0d]">Team Structure</h2>
          <p className="mt-6 max-w-3xl font-inter text-[17px] leading-[1.75] text-[#3d3835]">
            Clockwork Mania organizes into two primary divisions — the Robot Division and the
            Logistics Division — each owning a distinct slice of season execution. Subteams plug
            into those divisions through a five-step formation model: recruit interest, define
            charter and deliverables, assign mentors, establish check-in cadence, and measure
            outcomes against competition and outreach milestones.
          </p>
          <div className="mt-14">
            <TeamHierarchyDiagram />
          </div>
        </div>
      </section>

      <HistoryTimeline />
    </>
  );
}
