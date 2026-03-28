export type PressItem = {
  outlet: string;
  headline: string;
  date: string;
  description: string;
  url?: string;
};

export const pressItems: PressItem[] = [
  {
    outlet: "FOX 35 News",
    headline: "New Seminole Orlando Science Campus opening",
    date: "—",
    description: "Coverage of campus expansion and student STEM programming.",
  },
  {
    outlet: "FOX 35 News",
    headline: "PLTW Showcase",
    date: "—",
    description: "Feature tied to Project Lead The Way student work on campus.",
  },
  {
    outlet: "ForeFront Media",
    headline: "Article & video feature",
    date: "—",
    description: "Long-form profile on team activities and student outcomes.",
  },
  {
    outlet: "SpaceCoast Daily",
    headline: "SpaceCom interview",
    date: "—",
    description: "Regional aerospace-focused coverage of student experiences.",
  },
  {
    outlet: "Orange TV",
    headline: "Regional feature",
    date: "—",
    description: "Community television segment highlighting robotics pathways.",
  },
];
