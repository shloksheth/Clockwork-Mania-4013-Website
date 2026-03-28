import type { SponsorTier } from "@/data/sponsor-tiers";

export function TierCard({ tier }: { tier: SponsorTier }) {
  if (tier.variant === "diamond") {
    return (
      <div className="tier-diamond-ring h-full min-w-[260px] shrink-0 sm:min-w-[280px]">
        <div className="flex h-full flex-col rounded-2xl bg-surface p-8">
          <h3 className="font-bebas text-4xl tracking-[0.02em] text-offwhite">
            {tier.name}
          </h3>
          <p className="mt-2 font-space text-sm font-semibold text-gold">
            {tier.range}
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 font-space text-sm leading-relaxed text-text-muted">
            {tier.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-w-[240px] shrink-0 flex-col rounded-2xl border border-[rgba(201,151,58,0.15)] bg-surface p-7 sm:min-w-[260px]">
      <h3 className="font-bebas text-4xl tracking-[0.02em] text-offwhite">
        {tier.name}
      </h3>
      <p className="mt-2 font-space text-sm font-semibold text-gold">{tier.range}</p>
      <ul className="mt-6 list-disc space-y-3 pl-5 font-space text-sm leading-relaxed text-text-muted">
        {tier.benefits.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
