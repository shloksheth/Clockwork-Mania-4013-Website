export type SponsorTier = {
  id: string;
  name: string;
  range: string;
  benefits: string[];
  variant: "diamond" | "default";
};

export const sponsorTiers: SponsorTier[] = [
  {
    id: "diamond",
    name: "Diamond",
    range: "$10,000+",
    variant: "diamond",
    benefits: [
      "Your name becomes part of the official team name",
      "Personalized Clockwork shirt with your name & logo",
      "All Platinum benefits",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    range: "$5,000–$9,999",
    variant: "default",
    benefits: ["Logo displayed on competition robot", "All Gold benefits"],
  },
  {
    id: "gold",
    name: "Gold",
    range: "$2,000–$4,999",
    variant: "default",
    benefits: ["Logo on team T-shirts", "All Silver benefits"],
  },
  {
    id: "silver",
    name: "Silver",
    range: "$500–$1,999",
    variant: "default",
    benefits: ["Logo on pit banner", "All Friends of Clockwork benefits"],
  },
  {
    id: "friends",
    name: "Friends of Clockwork",
    range: "Up to $499",
    variant: "default",
    benefits: [
      "Name/logo on printed media",
      "Social media promotion",
      "Personal thank-you letter",
    ],
  },
];
