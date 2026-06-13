"use client";
import {
  activityData,
  moneyData,
  projectData,
  usersData,
} from "@/data/animated-stat-counter/statCounterData";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import Card from "./Card";

export default function ASCPage() {
  const [trigger, setTrigger] = useState<number>(0);
  return (
    <main
      className={cn(
        "flex flex-col gap-5 items-center justify-center flex-1 bg-asc-bg text-asc-text",
        inter.className,
      )}
    >
      <div className={cn("flex flex-wrap gap-2.5 justify-center")}>
        <Card
          trigger={trigger}
          duration={1500}
          data={projectData}
        />
        <Card
          trigger={trigger}
          duration={1500}
          data={usersData}
        />
        <Card
          trigger={trigger}
          duration={1500}
          data={moneyData}
        />
        <Card
          trigger={trigger}
          duration={1500}
          data={activityData}
        />
      </div>
      <button
        className={cn(
          "flex flex-row cursor-pointer px-5 py-2 border border-white/12 text-[13px] gap-1.5 rounded-lg bg-transparent items-center text-asc-muted transition-all duration-150 hover:bg-white/5 hover:text-white active:scale-97",
        )}
        onClick={() => setTrigger((prev) => prev + 1)}
      >
        <RefreshCw size={16} /> Запустить снова
      </button>
    </main>
  );
}
