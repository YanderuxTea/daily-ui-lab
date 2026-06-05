import { Grid2X2, Laptop, LucideIcon, Smartphone } from "lucide-react";

export type SessionType = {
  id: string;
  icon: LucideIcon;
  device: string;
  isCurrentSession: boolean;
  browser: string;
  ip: string;
  country: string;
  timeAgo?: string;
};
export const sessionsData: SessionType[] = [
  {
    id: "s-1",
    icon: Laptop,
    device: "MacBook Pro 16",
    isCurrentSession: true,
    browser: "Safari",
    ip: "192.168.1.45",
    country: "(Берлин, Германия)",
  },
  {
    id: "s-2",
    icon: Grid2X2,
    device: "Рабочий ПК (Windows 11)",
    isCurrentSession: false,
    browser: "Google Chrome",
    ip: "95.24.112.8",
    country: "(Москва, РФ)",
    timeAgo: "Активен 2 часа назад",
  },
  {
    id: "s-3",
    icon: Smartphone,
    device: "iPhone 15 Pro",
    isCurrentSession: false,
    browser: "Yandex Browser",
    ip: "46.180.4.12",
    country: "(Казань, РФ)",
  },
];
