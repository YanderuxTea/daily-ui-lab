import { Cloud, LucideIcon, Moon, Sun } from "lucide-react";

type WeatherData = {
  time: string;
  icon: LucideIcon;
  temp: string;
};

export const weatherData: WeatherData[] = [
  { time: "Сейчас", icon: Cloud, temp: "+18°" },
  { time: "15:00", icon: Sun, temp: "+19°" },
  { time: "18:00", icon: Cloud, temp: "+16°" },
  { time: "21:00", icon: Moon, temp: "+13°" },
];
