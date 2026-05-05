"use client";

import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TagsInput from "./TagsInput";

export default function Card() {
  const [choiseTag, setChoiseTag] = useState<string[]>([]);
  const [isError, setIsError] = useState<string>("");
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setIsError("");
    }, 2000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [isError]);
  return (
    <div
      className={cn(
        "border rounded-2xl max-w-115 w-full flex flex-col px-6 pt-6.5 pb-5.5 border-ti-border bg-ti-bg",
      )}
    >
      <div className={cn("flex flex-col mb-5")}>
        <div
          className={cn(
            "flex flex-row justify-between items-start",
            jetbrains_mono.className,
          )}
        >
          <p
            className={cn(
              "text-[10px] tracking-widest uppercase text-ti-text-muted",
            )}
          >
            Стек проекта
          </p>
          <p
            className={cn(
              "text-xs bg-ti-surface-alt border border-ti-border-light rounded-[7px] py-1 px-2.5 text-ti-text-muted",
            )}
          >
            {choiseTag.length}/8
          </p>
        </div>
        <div className={cn("flex flex-col")}>
          <p
            className={cn(
              "text-lg font-medium -tracking-widest text-ti-text-primary",
            )}
          >
            Теги
          </p>
          <p className={cn("text-xs text-ti-text-muted")}>
            Enter - добавить тег
          </p>
        </div>
      </div>
      <TagsInput
        isError={isError}
        setIsError={setIsError}
        choiseTags={choiseTag}
        setChoiseTags={setChoiseTag}
      />
      <div
        className={cn(
          "my-2.5 text-transparent text-xs flex items-center min-h-4",
        )}
      >
        <AnimatePresence>
          {isError.trim().length > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "text-xs text-ti-error z-0 relative",
                jetbrains_mono.className,
              )}
            >
              {isError}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div
        className={cn(
          "border-t border-ti-border flex flex-row items-center justify-center pt-3.75 gap-2 mt-5",
        )}
      >
        <div className={cn("flex flex-row gap-1 items-center")}>
          <span
            className={cn(
              "text-[10px] text-ti-accent py-0.5 px-1.75 bg-ti-surface-alt rounded-sm border border-ti-border-light select-none",
              jetbrains_mono.className,
            )}
          >
            ↑↓
          </span>
          <span className={cn("text-[11px] text-ti-text-muted")}>
            навигация
          </span>
        </div>
        <div className={cn("flex flex-row gap-1 items-center")}>
          <span
            className={cn(
              "text-[10px] text-ti-accent py-0.5 px-1.75 bg-ti-surface-alt rounded-sm border border-ti-border-light select-none",
              jetbrains_mono.className,
            )}
          >
            ⌫
          </span>
          <span className={cn("text-[11px] text-ti-text-muted")}>
            удалить последний
          </span>
        </div>
        <div className={cn("flex flex-row gap-1 items-center")}>
          <span
            className={cn(
              "text-[10px] text-ti-accent py-0.5 px-1.75 bg-ti-surface-alt rounded-sm border border-ti-border-light select-none",
              jetbrains_mono.className,
            )}
          >
            Esc
          </span>
          <span className={cn("text-[11px] text-ti-text-muted")}>сбросить</span>
        </div>
      </div>
    </div>
  );
}
