export type AnimatedTabsData = {
  id: number;
  title: string;
  content: string;
};
export const animatedTabsData: AnimatedTabsData[] = [
  {
    id: 1,
    title: "Overview",
    content:
      "Your workspace is running smoothly. All systems are operational and 3 active projects are on track for this sprint cycle.",
  },
  {
    id: 2,
    title: "Analytics",
    content:
      "Page views increased by 24% this week. Peak traffic occurs between 10am and 2pm, with mobile accounting for 61% of sessions.",
  },
  {
    id: 3,
    title: "Settings",
    content:
      "Customize your workspace preferences, notification rules, and integration behavior from this panel.",
  },
  {
    id: 4,
    title: "Members",
    content:
      "5 members are active in this workspace. 2 pending invitations are awaiting acceptance from new collaborators.",
  },
];
