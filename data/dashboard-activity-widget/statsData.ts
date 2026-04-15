type StatsData = {
  title: string;
  value: number;
  color: string;
};
export const statsData: Record<"month" | "week", StatsData[]> = {
  week: [
    { title: "Разработка", color: "from-indigo-500 to-cyan-400", value: 85 },
    { title: "Дизайн", color: "from-fuchsia-500 to-pink-500", value: 40 },
    { title: "Тестирование", color: "from-amber-400 to-orange-500", value: 25 },
  ],
  month: [
    { title: "Разработка", color: "from-indigo-500 to-cyan-400", value: 95 },
    { title: "Дизайн", color: "from-fuchsia-500 to-pink-500", value: 75 },
    { title: "Тестирование", color: "from-amber-400 to-orange-500", value: 60 },
  ],
};
