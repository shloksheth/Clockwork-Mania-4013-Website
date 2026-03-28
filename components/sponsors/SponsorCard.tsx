import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { SponsorEntry } from "@/data/sponsors";

export function SponsorCard({ sponsor }: { sponsor: SponsorEntry }) {
  return (
    <SpotlightCard
      className="rounded-xl border border-[rgba(201,151,58,0.1)] bg-[var(--color-surface)]"
      spotlightColor="rgba(201, 151, 58, 0.08)"
      lift={6}
    >
      <div className="flex flex-col items-center gap-4 px-8 py-10 md:py-12">
        {/* TODO: Replace with <Image> of actual sponsor logo */}
        <div className="flex h-16 w-32 items-center justify-center rounded bg-[rgba(255,255,255,0.06)]" />
        <p className="text-center font-space text-base font-medium text-[rgba(245,240,235,0.7)]">
          {sponsor.name}
        </p>
      </div>
    </SpotlightCard>
  );
}
