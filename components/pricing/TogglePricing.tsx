"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import usePricingContext from "./usePricingContext";

export default function TogglePricing() {
  const { isYearly, setIsYearly } = usePricingContext();
  return (
    <div className={cn("flex flex-row gap-3 items-center")}>
      <p
        className={cn(
          "text-[13px] transition-colors",
          isYearly && "text-pc-btn-default-text",
        )}
      >
        Ежемесячно
      </p>
      <div
        className={cn(
          "flex border items-center rounded-full w-10 cursor-pointer relative shrink-0 h-5.5 px-0.5 bg-white/8 border-white/10 transition-colors duration-200",
          isYearly
            ? "justify-end bg-pc-btn-highlighted-bg/30 border-pc-btn-highlighted-bg/40"
            : "justify-start",
        )}
        onClick={() => setIsYearly((prev) => !prev)}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn("w-4 h-4 rounded-full bg-white")}
        ></motion.div>
      </div>
      <p
        className={cn(
          "text-[13px] transition-colors",
          !isYearly && "text-pc-btn-default-text",
        )}
      >
        Ежегодно
      </p>
      <span
        className={cn(
          "text-pc-success bg-pc-success-bg text-[10px] font-semibold px-1.5 py-0.5 rounded-md",
        )}
      >
        -20%
      </span>
    </div>
  );
}
