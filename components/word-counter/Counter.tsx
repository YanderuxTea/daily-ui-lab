"use client";

import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  limit: number;
  count: number;
  isUnlimited: boolean;
};
export default function Counter({ limit, count, isUnlimited }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 px-5 py-4.5 border bg-wc-surface rounded-2xl border-wc-border",
      )}
    >
      <div className={cn("flex flex-col gap-0.5 overflow-clip")}>
        <div
          className={cn(
            "flex flex-row justify-between text-xs text-wc-text-muted",
          )}
        >
          <p className={cn("uppercase")}>Слова</p>
          {!isUnlimited && limit > 0 && (
            <p className={cn("", jetbrains_mono.className)}>
              {count} / {limit}
            </p>
          )}
        </div>
        <AnimatePresence
          mode={"popLayout"}
          initial={false}
        >
          <motion.p
            key={count}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "font-medium text-5xl transition-colors duration-300",
              jetbrains_mono.className,
              !isUnlimited &&
                limit > 0 &&
                (limit === count
                  ? "text-wc-bar-warning"
                  : limit < count
                    ? "text-wc-bar-danger"
                    : "text-wc-text"),
            )}
          >
            {count}
          </motion.p>
        </AnimatePresence>
      </div>
      {!isUnlimited && (
        <div
          className={cn(
            "h-1.5 rounded-full bg-wc-bar-track relative overflow-clip",
          )}
        >
          <motion.div
            style={{ width: `${(count / limit) * 100}%` }}
            className={cn(
              "h-1.5 rounded-full origin-left transition-all duration-500",
              !isUnlimited &&
                limit > 0 &&
                (limit === count
                  ? "bg-wc-bar-warning"
                  : limit < count
                    ? "bg-wc-bar-danger"
                    : "bg-wc-accent"),
            )}
          ></motion.div>
        </div>
      )}
    </div>
  );
}
