export type BlogCategory =
  | "Competition"
  | "Outreach"
  | "Event"
  | "Award"
  | "Press";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  excerpt: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-season-kickoff",
    title: "2025 Season Kickoff — What to Expect",
    date: "2026-01-08",
    category: "Competition",
    excerpt:
      "REEFSCAPE is here. Here is how we are structuring design reviews, prototyping cadence, and drive practice heading into our thirteenth season.",
    body: `The opening bell of build season sets the tempo for everything that follows—CAD reviews, machining queues, and software bring-up all compete for the same ten weeks.

This season we are prioritizing early mechanism de-risking on practice elements, tight integration between mechanical and controls, and a scouting pipeline that starts collecting structure before our first district event.

This article will expand with match narratives and iteration notes as the season progresses.`,
  },
  {
    slug: "spark-stem-fest-recap",
    title: "Recap: Spark STEM Fest at Orlando Science Center",
    date: "2025-11-14",
    category: "Outreach",
    excerpt:
      "Hands-on demos, pit walkthroughs, and student-led explanations brought FRC energy to families exploring STEM downtown.",
    body: `Spark STEM Fest gave us a packed floor of curious students and parents. We ran controlled drivetrain demos, passed game pieces through intake prototypes (where safe), and answered questions about how alliances work on the real field.

Outreach is never a side project here—it sharpens our communication skills and reminds new students why the late nights matter.`,
  },
  {
    slug: "cubesat-ieee-conference",
    title: "Our CubeSat Was Presented at IEEE Conference",
    date: "2025-08-22",
    category: "Award",
    excerpt:
      "Accenture collaboration work on our CubeSat reached a professional conference audience—proof that student engineering can meet industry standards.",
    body: `Presenting at IEEE alongside university and industry teams validated the rigor our students brought to documentation, testing narrative, and hardware storytelling.

We will keep publishing milestones as the project evolves and ties back into our aerospace club growth.`,
  },
  {
    slug: "ftc-summer-camp-cohort-1",
    title: "FTC Summer Camp Cohort 1 — A Huge Success",
    date: "2025-07-03",
    category: "Event",
    excerpt:
      "New builders prototyped mechanisms, learned CAD basics, and left with a clearer picture of what a rookie FTC season demands.",
    body: `Summer camp is one of our highest-leverage programs: students who might never touch a mill or deploy code on real hardware get a structured first taste.

Fundraising outcomes from camps directly fuel season travel and materials—this cohort set a strong foundation for the next sessions.`,
  },
  {
    slug: "featured-orange-tv",
    title: "We Were Featured on Orange TV!",
    date: "2025-02-17",
    category: "Press",
    excerpt:
      "Regional television covered our school’s STEM story—with student voices front and center.",
    body: `Broadcast segments help families understand what FRC actually looks like beyond the highlight reel: iteration, documentation, and community partnerships.

We are archiving press links as they go live so alumni and sponsors can track our story over time.`,
  },
  {
    slug: "spacecom-sian-proctor",
    title: "SpaceCom 51 — Meeting Astronaut Dr. Sian Proctor",
    date: "2024-12-02",
    category: "Event",
    excerpt:
      "A milestone moment for students exploring aerospace pathways beyond the shop.",
    body: `Meeting Dr. Proctor connected our robotics work to the broader narrative of exploration—risk management, teamwork, and communicating complex systems to the public.

Experiences like SpaceCom reinforce why we expanded aerospace programming on campus.`,
  },
];

export const blogCategories: BlogCategory[] = [
  "Competition",
  "Outreach",
  "Event",
  "Award",
  "Press",
];
