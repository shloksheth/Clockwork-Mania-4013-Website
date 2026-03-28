export type Subteam = {
  name: string;
  captain: string;
  description: string;
  icon: "wrench" | "pencil" | "code" | "lightning" | "briefcase" | "camera" | "globe" | "chart";
};

export const subteams: Subteam[] = [
  {
    name: "Mechanical Team",
    captain: "Armando Collazo De Jesus",
    description:
      "Fabricates competition-critical systems, from drivetrains to end effectors, integrating CAD intent with precise machining and assembly to keep the robot reliable under match stress.",
    icon: "wrench",
  },
  {
    name: "Design Team",
    captain: "Phillip Silva",
    description:
      "Owns the full CAD pipeline—layout studies, mechanism iteration, and design for manufacturability—translating game strategy into models the shop can build with confidence.",
    icon: "pencil",
  },
  {
    name: "Programming Team",
    captain: "Chandan Kolla & Kevin Wang",
    description:
      "Delivers autonomous routines, teleop controls, and sensor fusion so the machine responds crisply on the field, with clean code reviews and measured on-robot validation.",
    icon: "code",
  },
  {
    name: "Electrical Team",
    captain: "Anum Ali",
    description:
      "Architects power distribution, signal routing, and control system integration with an emphasis on serviceability—clean looms, labeled paths, and robust test procedures.",
    icon: "lightning",
  },
  {
    name: "Business & Communications Team",
    captain: "Sanjana Nagarur",
    description:
      "Coordinates sponsorship stewardship, grant pipelines, and professional storytelling so partners see a return on investment and students learn real-world presentation skills.",
    icon: "briefcase",
  },
  {
    name: "Social & Marketing Team",
    captain: "Emily Xiao & Aarika Rao",
    description:
      "Shapes brand voice, media drops, and community-facing campaigns that turn match footage and shop milestones into narratives sponsors and families can rally behind.",
    icon: "camera",
  },
  {
    name: "Outreach Team",
    captain: "Cecily May",
    description:
      "Plans STEM activations—from school demos to international camps—so Clockwork Mania’s impact scales beyond the competition carpet and into classrooms worldwide.",
    icon: "globe",
  },
  {
    name: "Strategy Team",
    captain: "Josef Junga",
    description:
      "Bridges scouting, pick lists, and match planning with drive-coach input, distilling hours of field data into decisions that maximize alliance potential when stakes are highest.",
    icon: "chart",
  },
];
