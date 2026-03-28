import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { GearBackground } from "@/components/sections/GearBackground";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { blogPosts } from "@/data/blog-posts";
import { sponsors } from "@/data/sponsors";
import { introParagraph } from "@/data/impact";
import { robotTeaserCopy } from "@/data/impact";
import { Cog, Globe2, GraduationCap } from "lucide-react";
import Link from "next/link";
import { OutreachTripleCards } from "@/components/sections/OutreachTripleCards";

export const metadata: Metadata = {
  title: "Home",
  description:
    "FRC 4013 Clockwork Mania — Orlando Science High School robotics since 2012.",
};

function MarqueeRow() {
  const doubled = [...sponsors, ...sponsors];
  return (
    <div className="relative overflow-hidden py-10">
      <div className="animate-marquee flex w-max gap-16 pr-16">
        {doubled.map((s, i) => (
          <span
            key={`${s.name}-${i}`}
            className="whitespace-nowrap font-bebas text-3xl uppercase tracking-[0.08em] text-offwhite opacity-60 transition-opacity hover:opacity-100"
          >
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const featured = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <StatsSection />

      <SectionDivider />

      <section
        id="about"
        className="scroll-mt-28 bg-offwhite py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 md:grid-cols-2 md:px-8 lg:gap-16 lg:px-16">
          <RevealOnScroll direction="left">
            <div>
              <h2 className="relative inline-block font-ui text-[clamp(36px,6vw,48px)] font-bold text-[#0d0d0d]">
                Who We Are
                <span className="absolute -bottom-2 left-0 h-1 w-[60px] bg-maroon" />
              </h2>
              <p className="mt-10 max-w-xl font-body text-[clamp(15px,2vw,18px)] text-[#3d3835]">
                {introParagraph}
              </p>
              <div className="mt-8">
                <MagneticButton href="/about" variant="ghost" theme="light">
                  Meet the Full Team →
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={0.12} className="flex flex-col gap-4">
            {[
              {
                icon: Cog,
                title: "Technical Excellence",
                body: "CAD, machining, programming, electrical systems",
              },
              {
                icon: Globe2,
                title: "Global Outreach",
                body: "STEM education across five continents",
              },
              {
                icon: GraduationCap,
                title: "Student Growth",
                body: "100% college acceptance — MIT, Stanford, Georgia Tech alumni",
              },
            ].map((p) => (
              <SpotlightCard
                key={p.title}
                className="rounded-xl border border-[rgba(13,13,13,0.08)] bg-white shadow-sm"
                spotlightColor="rgba(123, 28, 28, 0.06)"
                lift={4}
              >
                <div className="flex gap-4 p-5">
                  <p.icon className="mt-1 h-6 w-6 shrink-0 text-maroon" aria-hidden />
                  <div>
                    <h3 className="font-ui text-lg text-[#0d0d0d]">{p.title}</h3>
                    <p className="mt-1 font-body text-sm text-[#3d3835]">{p.body}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider />

      <section
        id="outreach"
        className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-16 md:py-24 lg:py-32"
      >
        <GearBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionLabel>Outreach &amp; Impact</SectionLabel>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(46px,8vw,88px)] text-offwhite">
            Making the World Tick
          </h2>
          <OutreachTripleCards />
        </div>
      </section>

      <SectionDivider />

      <section id="robot" className="scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grain-dark bg-[#0D0D0D] px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <SectionLabel>2025 Robot</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(48px,10vw,96px)] text-offwhite">
              The Machine
            </h2>
            <p className="mt-6 max-w-lg font-body text-[clamp(15px,2vw,18px)] text-text-primary">
              {robotTeaserCopy}
            </p>
            <div className="mt-10">
              <MagneticButton href="/robot">View Full Showcase →</MagneticButton>
            </div>
          </div>
          <div className="flex items-center justify-center bg-offwhite p-8 md:p-16 lg:p-16">
            <ImageReveal direction="right" className="w-full max-w-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(13,13,13,0.08)] bg-gradient-to-br from-maroon/30 via-[#1a0a0a] to-black shadow-inner">
                <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-space text-xs uppercase tracking-[0.12em] text-text-muted">
                  {/* TODO: 2025 robot CAD render */}
                  {"// IMAGE: 2025 robot CAD render"}
                </span>
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section
        id="news"
        className="scroll-mt-28 bg-offwhite py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <h2 className="font-ui text-[clamp(36px,6vw,48px)] font-bold text-[#0d0d0d]">
            Latest Updates
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {featured.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-cursor-hover
                className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(13,13,13,0.08)] bg-white shadow-sm transition-all hover:border-gold md:flex-row"
              >
                <ImageReveal direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06} className="md:w-72 md:shrink-0">
                  <div className="relative aspect-video w-full bg-gradient-to-br from-maroon-dark to-black md:h-full md:min-h-[200px]">
                    <span className="absolute inset-0 flex items-center justify-center p-3 text-center font-space text-[10px] uppercase tracking-[0.12em] text-text-muted">
                      {/* TODO: Post thumbnail */}
                      {"// IMAGE: Post thumbnail"}
                    </span>
                  </div>
                </ImageReveal>
                <div className="flex flex-1 flex-col p-6">
                  <time className="font-space text-xs text-[#5c534c]" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h3 className="mt-2 font-ui text-xl text-[#0d0d0d] group-hover:text-maroon">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 font-body text-sm text-[#3d3835]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <MagneticButton href="/blog" variant="ghost" theme="light">
              All News →
            </MagneticButton>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section
        id="sponsors"
        className="grain-dark scroll-mt-28 border-t border-[var(--color-border)] bg-[#0D0D0D] py-16 md:py-24 lg:py-32"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
          <h2 className="font-ui text-[clamp(36px,6vw,48px)] font-bold text-offwhite">
            Supported By
          </h2>
          <MarqueeRow />
          <MagneticButton href="/sponsors">Become a Sponsor →</MagneticButton>
        </div>
      </section>
    </>
  );
}
