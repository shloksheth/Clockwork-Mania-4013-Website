import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { achievements } from "@/data/awards";
import { pressItems } from "@/data/press";
import { Trophy, Star, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Achievements",
  description: "Championship qualifications, press, and program milestones.",
};

const achievementCardClass =
  "mb-6 break-inside-avoid rounded-[12px] border border-[rgba(13,13,13,0.08)] border-t-2 border-t-[rgba(201,151,58,0.2)] bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-200 ease-out hover:border-t-[rgba(201,151,58,0.9)] hover:shadow-[0_-2px_12px_rgba(201,151,58,0.15)]";

export default function AwardsPage() {
  return (
    <>
      <section className="grain-dark min-h-[50vh] bg-[#0D0D0D] px-5 pb-20 pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Awards &amp; Achievements</SectionLabel>
          <h1 className="mt-4 font-bebas text-[clamp(3rem,8vw,5.5rem)] text-offwhite">
            A Record of Excellence
          </h1>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-28 bg-[#0d0d0d] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          <SpotlightCard className="rounded-[12px]">
            <Card goldTop className="flex flex-col items-start gap-4 p-8">
              <Trophy className="h-10 w-10 text-gold" aria-hidden />
              <p className="font-bebas text-5xl text-offwhite">5</p>
              <p className="font-space text-sm text-text-muted">
                World Championship qualifications — sustained excellence across seasons.
              </p>
            </Card>
          </SpotlightCard>
          <SpotlightCard className="rounded-[12px]">
            <Card goldTop className="flex flex-col items-start gap-4 p-8">
              <Star className="h-10 w-10 text-gold" aria-hidden />
              <p className="font-bebas text-5xl text-offwhite">12+</p>
              <p className="font-space text-sm text-text-muted">
                Consecutive seasons of competition from 2012 through today.
              </p>
            </Card>
          </SpotlightCard>
          <SpotlightCard className="rounded-[12px] sm:col-span-2 lg:col-span-1">
            <Card goldTop className="flex flex-col items-start gap-4 p-8">
              <GraduationCap className="h-10 w-10 text-gold" aria-hidden />
              <p className="font-bebas text-5xl text-offwhite">100%</p>
              <p className="font-space text-sm text-text-muted">
                College acceptance — alumni pathways spanning top research universities.
              </p>
            </Card>
          </SpotlightCard>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-28 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-space text-4xl font-bold text-[#0d0d0d]">Achievements</h2>
          <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
            {achievements.map((a) => (
              <SpotlightCard
                key={a.title}
                className="rounded-[12px]"
                spotlightColor="rgba(123, 28, 28, 0.06)"
              >
                <div className={achievementCardClass}>
                  <p className="font-space text-xs font-semibold uppercase tracking-[0.1em] text-maroon">
                    {a.year ?? "Milestone"}
                  </p>
                  <h3 className="mt-2 font-space text-lg font-semibold text-[#0d0d0d]">
                    {a.title}
                  </h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#3d3835]">
                    {a.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-space text-4xl font-bold text-offwhite">In the Press</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pressItems.map((p) => (
              <SpotlightCard key={p.headline} className="rounded-[12px]">
                <Card className="p-8">
                  <p className="font-space text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                    {p.outlet}
                  </p>
                  <h3 className="mt-3 font-space text-xl font-semibold text-offwhite">
                    {p.headline}
                  </h3>
                  <time className="mt-2 block font-space text-xs text-text-muted">{p.date}</time>
                  <p className="mt-4 font-inter text-sm leading-relaxed text-text-muted">
                    {p.description}
                  </p>
                  <div className="mt-6">
                    <MagneticButton
                      type="button"
                      variant="ghost"
                      disabled
                      ariaLabel={`View coverage — ${p.headline} (URL TBD)`}
                    >
                      View Coverage →
                    </MagneticButton>
                  </div>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
