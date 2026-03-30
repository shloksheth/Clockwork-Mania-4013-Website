export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export const homeStats: StatItem[] = [
  {
    value: 5,
    label: "World Championship Appearances",
  },
  {
    value: 13,
    label: "Seasons of Competition",
  },
  {
    value: 100,
    suffix: "%",
    label: "College Acceptance Rate",
  },
  {
    value: 6,
    label: "FIRST Teams Mentored / Founded",
  },
];
