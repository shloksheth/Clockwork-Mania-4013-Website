import type { Metadata } from "next";
import { SponsorCard } from "@/components/sponsors/SponsorCard";
import { SponsorForm } from "@/components/sponsors/SponsorForm";
import { sponsors } from "@/data/sponsors";
import { sponsorTiers } from "@/data/sponsor-tiers";
import { Marquee } from "@/components/ui/Marquee";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Check, Gem, Crown, Award, Circle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Partners powering FRC 4013 — sponsorship tiers and inquiry form.",
};

const tierTitleClass: Record<string, string> = {
  diamond: "text-gold",
  platinum: "text-[#B4C4D4]",
  gold: "text-gold-light",
  silver: "text-[#C0C0C0]",
  friends: "text-maroon",
};

const tierIcon: Record<string, typeof Gem> = {
  diamond: Gem,
  platinum: Crown,
  gold: Award,
  silver: Circle,
  friends: Heart,
};

export default function SponsorsPage() {
  const marqueeItems = sponsors.map((s) => s.name);

  return (
    <>
      <section
        id="current-sponsors"
        className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[900px] px-4 md:px-8 lg:px-16">
          <SectionLabel>Partnership</SectionLabel>
          <h1 className="mt-4 text-center font-display text-[clamp(56px,13vw,96px)] text-offwhite md:text-left">
            Our Partners
          </h1>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section
        id="tiers"
        className="scroll-mt-28 bg-offwhite py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-16">
          <h2 className="font-ui text-[clamp(36px,6vw,48px)] font-bold text-[#0d0d0d]">
            Partnership Levels
          </h2>
          <div className="mt-12 flex flex-col gap-6">
            {sponsorTiers.map((tier, i) => {
              const Icon = tierIcon[tier.id] ?? Gem;
              const isDiamond = tier.variant === "diamond";
              return (
                <RevealOnScroll key={tier.id} delay={i * 0.1} direction="up">
                  <div
                    className={`relative flex flex-col gap-6 rounded-2xl border bg-white p-6 shadow-sm lg:flex-row lg:items-stretch lg:gap-8 lg:p-8 ${
                      isDiamond
                        ? "border-2 border-gold bg-[linear-gradient(135deg,#fff_0%,rgba(201,151,58,0.04)_100%)] shadow-[0_0_0_1px_rgba(201,151,58,0.2)]"
                        : "border border-[rgba(13,13,13,0.08)]"
                    }`}
                  >
                    {isDiamond && (
                      <span className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-1 font-space text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0d0d0d]">
                        Most Exclusive
                      </span>
                    )}
                    <div className="shrink-0 lg:w-[220px]">
                      <Icon
                        className={`h-6 w-6 ${tierTitleClass[tier.id] ?? " text-maroon"}`}
                        aria-hidden
                      />
                      <p
                        className={`mt-3 font-display text-[clamp(36px,5vw,48px)] ${tierTitleClass[tier.id]}`}
                      >
                        {tier.name}
                      </p>
                      <p className="mt-1 font-space text-sm text-[#666]">{tier.range}</p>
                    </div>
                    <ul className="flex flex-1 flex-col justify-center gap-2">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex gap-2 font-space text-[15px] text-[#333]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-maroon" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center lg:shrink-0">
                      <MagneticButton
                        href="#become-a-sponsor"
                        variant="ghost"
                        theme="light"
                        ariaLabel={`Learn more about ${tier.name}`}
                      >
                        Learn More
                      </MagneticButton>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="become-a-sponsor"
        className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8 lg:px-16">
          <h2 className="font-display text-[clamp(48px,8vw,72px)] text-offwhite">
            Partner With Us
          </h2>
          <p className="mt-4 font-editorial text-xl italic text-[rgba(245,240,235,0.65)]">
            Help us inspire the next generation of engineers, scientists, and leaders.
          </p>
          <div className="mt-12">
            <SponsorForm />
          </div>
        </div>
      </section>
    </>
  );
}
