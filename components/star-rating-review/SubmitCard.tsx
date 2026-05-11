"use client";

import { cormorant_garamond } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
type Props = {
  sumbitStar: number;
};
export default function SubmitCard({ sumbitStar }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween" }}
      className={cn(
        "flex items-center justify-center max-w-sm w-full border border-sr-border bg-sr-card rounded-[20px] p-9",
      )}
    >
      <div
        className={cn(
          "py-6 flex items-center justify-center text-center w-full flex-col",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={
            "flex items-center justify-center w-15 aspect-square rounded-full bg-sr-success-bg text-sr-success-icon border border-sr-success-border mb-4.5 origin-center"
          }
        >
          <Check size={24} />
        </motion.div>
        <p
          className={cn(
            "mb-2 text-[26px] font-semibold",
            cormorant_garamond.className,
          )}
        >
          Спасибо за отзыв
        </p>
        <p className={cn("mb-5 text-[13px] text-sr-subtext")}>
          Ваша оценка помогает нам становиться лучше
        </p>
        <div className={cn("flex flex-row gap-1")}>
          {Array.from({ length: 5 }).map((_, i) => {
            const currentRate = i + 1;
            return (
              <Star
                key={`submit-star-${i}`}
                strokeWidth={0}
                fill={sumbitStar >= currentRate ? "#f59e0b" : "#292119"}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
