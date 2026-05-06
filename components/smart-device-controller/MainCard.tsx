"use client";

import { unbounded } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
type Props = {
  isOn: boolean;
};
export default function MainCard({ isOn }: Props) {
  const [temperature, setTemperature] = useState<number>(22);

  return (
    <div className={cn("flex flex-col gap-8 items-center")}>
      <div className={cn("flex flex-row gap-1 leading-none relative")}>
        <AnimatePresence
          mode={"wait"}
          initial={false}
        >
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            key={temperature}
            animate={{ y: isOn ? 0 : 10, opacity: isOn ? 1 : 0.5 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ type: "tween", duration: 0.15 }}
            className={cn(
              "text-[100px] text-white font-bold",
              unbounded.className,
            )}
          >
            {temperature}
          </motion.p>
        </AnimatePresence>

        <p className={cn("text-2xl text-white/30 absolute -right-7.5")}>°C</p>
      </div>
      <div className={cn("flex flex-row gap-6")}>
        <button
          onClick={() => setTemperature((prev) => Math.max(16, prev - 1))}
          disabled={!isOn}
          className={cn(
            "border border-white/10 rounded-[20px] transition-all duration-200 cursor-pointer flex items-center justify-center text-white w-14.5 aspect-square disabled:cursor-not-allowed disabled:opacity-20 disabled:scale-85 hover:bg-white/5 active:scale-90 disabled:bg-transparent",
          )}
        >
          <Minus size={24} />
        </button>
        <button
          onClick={() => setTemperature((prev) => Math.min(30, prev + 1))}
          disabled={!isOn}
          className={cn(
            "border border-white/10 rounded-[20px] transition-all duration-200 cursor-pointer flex items-center justify-center text-white w-14.5 aspect-square disabled:cursor-not-allowed disabled:opacity-20 disabled:scale-85 hover:bg-white/5 active:scale-90 disabled:bg-transparent",
          )}
        >
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}
