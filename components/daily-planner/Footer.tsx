"use client";

import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
type Props = {
  countTask: number;
  countTaskCompleted: number;
};
export default function Footer({ countTask, countTaskCompleted }: Props) {
  const percent = (countTaskCompleted / countTask) * 100 || 0;
  return (
    <div className={cn("flex flex-col gap-1.5")}>
      <div
        className={cn(
          "flex flex-row justify-between text-[11px] text-dp-text-faint",
        )}
      >
        <p className={cn("uppercase font-medium leading-[0.06em]")}>
          Прогресс дня
        </p>
        <p className={cn(jetbrains_mono.className)}>
          {countTaskCompleted} / {countTask}
        </p>
      </div>
      <div
        className={cn(
          "h-1.25 rounded-full overflow-clip bg-dp-bar-track relative",
        )}
      >
        <div
          style={{ width: `${percent}%` }}
          className={cn(
            "absolute h-1.25 origin-left transition-all duration-500 ease-in-out rounded-full",
            percent === 100 ? "bg-dp-success" : "bg-dp-accent",
          )}
        ></div>
      </div>
    </div>
  );
}
