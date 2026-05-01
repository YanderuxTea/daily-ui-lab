import { v4 as uuid } from "uuid";
export type MusicPlayerData = {
  id: string;
  name: string;
  bg: string;
  author: string;
  like: boolean;
  duration: number;
};
function fullTime(minutes: number, seconds: number): number {
  return minutes * 60 + seconds;
}
export const musicPlayerData: MusicPlayerData[] = [
  {
    id: uuid(),
    name: "Neon Dreams",
    author: "Synthwave Artists",
    bg: "bg-linear-135 from-mp-accent to-mp-like",
    like: false,
    duration: fullTime(0, 17),
  },
  {
    id: uuid(),
    name: "Midnight Coast",
    author: "Lo-fi Collective",
    bg: "bg-linear-135 from-[#06b6d4] to-[#6366f1]",
    like: false,
    duration: fullTime(3, 34),
  },
  {
    id: uuid(),
    name: "Golden Hour",
    author: "Chill Beats",
    bg: "bg-linear-135 from-[#f59e0b] to-[#ef4444]",
    like: false,
    duration: fullTime(3, 3),
  },
  {
    id: uuid(),
    name: "Static Rain",
    author: "Ambient Works",
    bg: "bg-linear-135 from-[#10b981] to-[#3b82f6]",
    like: false,
    duration: fullTime(4, 1),
  },
];
