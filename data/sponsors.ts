export type SponsorEntry = {
  name: string;
  tier: string;
  logo: string | null;
};

export const sponsors: SponsorEntry[] = [
  { name: "Lockheed Martin", tier: "current", logo: null },
  { name: "Disney", tier: "current", logo: null },
  { name: "Disney Imagineering", tier: "current", logo: null },
  { name: "Department of Defense", tier: "current", logo: null },
  { name: "Best Buy", tier: "current", logo: null },
  { name: "Gene Haas Foundation", tier: "current", logo: null },
];

/** @deprecated use sponsors — kept for any legacy imports */
export const sponsorLogos = sponsors.map((s) => ({
  name: s.name,
  slug: s.name.toLowerCase().replace(/\s+/g, "-"),
}));
