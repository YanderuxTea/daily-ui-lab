"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import HeaderCard from "./HeaderCard";
import MainCard from "./MainCard";
import ModeSwitch from "./ModeSwitch";
export type Mode = "cool" | "heat" | "auto";
export default function Card() {
  const [isOn, setIsOn] = useState<boolean>(true);
  const [mode, setMode] = useState<Mode>("cool");
  return (
    <div
      className={cn(
        "p-8 max-w-90 w-full flex flex-col rounded-[40px] border shadow-2xl bg-sdc-card border-white/8 relative overflow-clip transition-transform duration-500 gap-10",
        isOn && "scale-102",
      )}
    >
      <div
        className={cn(
          "w-62.5 aspect-square top-0 -translate-y-1/2 -right-1/3 absolute pointer-events-none touch-none transition-colors duration-500 blur-[100px] opacity-15",
          isOn
            ? mode === "cool"
              ? "bg-sdc-accent"
              : mode === "heat"
                ? "bg-sdc-orange"
                : "bg-[#22c55e]"
            : "bg-transparent",
        )}
      ></div>
      <HeaderCard
        mode={mode}
        isOn={isOn}
        setIsOn={setIsOn}
      />
      <MainCard
        isOn={isOn}
        mode={mode}
      />
      <ModeSwitch
        isOn={isOn}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
