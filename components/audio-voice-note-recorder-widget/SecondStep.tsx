"use client";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Square } from "lucide-react";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { PropsRecorder } from "./FirstStep";

export interface PropsRecorderWithTimer extends PropsRecorder {
  timerRef: RefObject<NodeJS.Timeout | null>;
  setTime: Dispatch<SetStateAction<number>>;
  time: number;
}
function randomHeight(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function SecondStep({
  setStep,
  timerRef,
  time,
  setTime,
}: PropsRecorderWithTimer) {
  const [_, setCounter] = useState<number>(0);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [setTime, timerRef]);
  const convertedTime =
    Math.trunc(time / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (time % 60).toString().padStart(2, "0");
  return (
    <div className={cn("flex flex-row justify-between w-full items-center")}>
      <div className={cn("flex flex-row gap-2.5 items-center")}>
        <div
          className={cn(
            "rounded-full w-2.5 aspect-square animate-pulse bg-avr-danger",
          )}
        ></div>
        <p
          className={cn(
            "text-sm font-mono font-semibold",
            jetbrains_mono.className,
          )}
        >
          {convertedTime}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-row gap-0.75 w-35 items-center justify-center h-6",
        )}
      >
        {Array.from({ length: 8 }, (v, i) => i).map((v) => {
          const height = randomHeight(3, 24);
          const opacity = 40 * v > 100 ? (40 * v) / 3 : 40 * v;
          return (
            <motion.div
              layout
              animate={{ height: `${height}px` }}
              transition={{ duration: 0.2, ease: "linear" }}
              onAnimationComplete={() => setCounter((prev) => prev + 1)}
              key={`voice-${v}`}
              style={{ opacity: `${opacity}%` }}
              className={cn("bg-avr-danger w-0.75 h-full rounded-full")}
            ></motion.div>
          );
        })}
      </div>
      <div className={cn("flex flex-row gap-2")}>
        <button
          onClick={() => {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              setTime(0);
              setStep(1);
            }
          }}
          className={cn(
            "px-2 py-1 text-avr-text-muted cursor-pointer transition-colors duration-150 font-medium text-xs hover:text-avr-danger",
          )}
        >
          Отмена
        </button>
        <button
          onClick={() => {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              setStep(3);
            }
          }}
          className={cn(
            "w-9 aspect-square rounded-xl flex items-center justify-center bg-avr-danger shadow-avr-danger shadow-[0_0_2px] cursor-pointer transition-all duration-150 hover:bg-avr-danger/90 active:scale-95",
          )}
        >
          <Square size={16} />
        </button>
      </div>
    </div>
  );
}
