import {
  Activity,
  CircleDollarSign,
  Folder,
  LucideIcon,
  Users,
} from "lucide-react";

export type StatData = {
  icon: string;
  classnameIcon: string;
  delta: string;
  classnameDelta: string;
  targetValue: number;
  lastChar?: string;
  description: string;
};
export const iconsStatData: Record<string, LucideIcon> = {
  Folder: Folder,
  Users: Users,
  CircleDollarSign: CircleDollarSign,
  Activity: Activity,
};
export const projectData: StatData = {
  icon: "Folder",
  classnameIcon: "bg-asc-violet-dim text-asc-violet",
  delta: "+12%",
  classnameDelta: "text-asc-green",
  targetValue: 1247,
  description: "Проектов",
};
export const usersData: StatData = {
  icon: "Users",
  classnameIcon: "bg-asc-blue-dim text-asc-blue",
  delta: "+28%",
  classnameDelta: "text-asc-green",
  targetValue: 48392,
  description: "Пользователей",
};
export const moneyData: StatData = {
  icon: "CircleDollarSign",
  classnameIcon: "bg-asc-green-dim text-asc-green",
  delta: "+7%",
  classnameDelta: "text-asc-green",
  targetValue: 284500,
  lastChar: " ₽",
  description: "Выручка",
};
export const activityData: StatData = {
  icon: "Activity",
  classnameIcon: "bg-asc-amber-dim text-asc-amber",
  delta: "стабильно",
  classnameDelta: "text-asc-hint",
  targetValue: 99.9,
  lastChar: "%",
  description: "Аптайм",
};
