"use client";
import { speedDialFabData } from "@/data/speed-dial-fab/speedDialFabData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Button() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [choise, setChoise] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setChoise("");
    }, 2000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [choise]);
  useEffect(() => {
    function handleClose(e: PointerEvent) {
      if (!buttonRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("pointerdown", handleClose);
    return () => {
      window.removeEventListener("pointerdown", handleClose);
    };
  }, []);
  return (
    <div className={cn("flex flex-col relative items-end gap-3")}>
      <AnimatePresence>
        {choise.trim().length > 0 && (
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            className={cn(
              "px-4 py-2.5 border bg-sd-child-bg text-[13px] border-white/10 text-sd-label-text rounded-xl flex flex-row items-center gap-1 absolute -top-2.5 -translate-y-full text-nowrap",
            )}
          >
            <Check size={12} />
            {choise}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "w-14 aspect-square rounded-[18px] cursor-pointer z-5 bg-sd-fab-bg flex items-center justify-center transition-all duration-300 hover:scale-107",
          isOpen
            ? "bg-sd-fab-bg-open rotate-45"
            : "active:scale-97 hover:bg-sd-fab-bg-hover",
        )}
      >
        <Plus
          size={30}
          className={cn("transition-all duration-150", isOpen && "rotate-45")}
        />
      </button>
      <div
        onPointerDown={(e) => e.stopPropagation()}
        className={cn(
          "flex flex-col gap-4 absolute bottom-0 -translate-y-1/3 overflow-clip select-none p-2.5 -m-2.5",
        )}
      >
        <AnimatePresence>
          {speedDialFabData.map((item, index) => {
            const Icon = item.icon;
            return (
              isOpen && (
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    delay: 0.15 * index,
                  }}
                  key={item.id}
                  className={cn(
                    "flex flex-row gap-3 items-center text-[13px] justify-end",
                  )}
                >
                  <div
                    className={cn(
                      "px-3 py-1.5 border text-sd-label-text font-medium border-white/8 rounded-[10px] whitespace-nowrap bg-sd-child-bg",
                    )}
                  >
                    {item.title}
                  </div>
                  <button
                    onClick={() => {
                      setChoise(item.title);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex items-center justify-center py-px px-1.5 border rounded-[13px] border-white/8 w-11.5 aspect-square cursor-pointer shrink-0 bg-sd-child-bg transition-all duration-150 hover:bg-sd-child-bg-hover hover:scale-110 text-sd-icon active:scale-93",
                    )}
                  >
                    <Icon size={20} />
                  </button>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
