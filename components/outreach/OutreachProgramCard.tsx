import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type Props = {
  title: string;
  description: string;
  href?: string;
};

export function OutreachProgramCard({ title, description, href = "/outreach" }: Props) {
  return (
    <SpotlightCard
      className="rounded-xl border border-[rgba(201,151,58,0.15)] bg-surface"
      spotlightColor="rgba(201, 151, 58, 0.08)"
      lift={6}
    >
      <div className="flex h-full flex-col p-8">
        <h3 className="font-ui text-2xl text-offwhite">{title}</h3>
        <p className="mt-4 flex-1 font-body text-[clamp(15px,2vw,18px)] text-text-muted">
          {description}
        </p>
        <Link
          href={href}
          data-cursor-hover
          className="mt-6 inline-flex font-space text-xs font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-light"
        >
          Explore →
        </Link>
      </div>
    </SpotlightCard>
  );
}
