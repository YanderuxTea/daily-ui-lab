import { ChartLine, LucideIcon, Rocket, ShieldCheck } from "lucide-react";

export type TiltCardData = {
  icon: string;
  classname: string;
  title: string;
  description: string;
  tag: string;
};
export const iconsTiltCard: Record<string, LucideIcon> = {
  Rocket: Rocket,
  ChartLine: ChartLine,
  ShiledCheck: ShieldCheck,
};
export const deployData: TiltCardData = {
  icon: "Rocket",
  title: "Быстрый деплой",
  description:
    "Автоматическое развёртывание за секунды с нулевым простоем сервиса",
  classname: "bg-tc-violet-dim text-tc-violet",
  tag: "CI/CD",
};
export const analiticData: TiltCardData = {
  icon: "ChartLine",
  title: "Аналитика",
  description: "Подробные метрики и отчёты в реальном времени по всем событиям",
  classname: "bg-tc-blue-dim text-tc-blue",
  tag: "Real-Time",
};
export const safeData: TiltCardData = {
  icon: "ShiledCheck",
  title: "Безопасность",
  description: "Шифрование данных и двухфакторная аутентификация из коробки",
  classname: "bg-tc-green-dim text-tc-green",
  tag: "E2E",
};
