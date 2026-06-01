"use client";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Pause, Play, Send, Trash } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PropsRecorderWithTimer } from "./SecondStep";

export default function ThirdStep({
  timerRef,
  time,
  setStep,
  setTime,
}: PropsRecorderWithTimer) {
  const [timePlay, setTimePlay] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const convertedTime = useMemo(() => {
    return (
      Math.trunc(time / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      (time % 60).toString().padStart(2, "0")
    );
  }, [time]);
  const convertedPlayTime =
    Math.trunc(timePlay / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (timePlay % 60).toString().padStart(2, "0");
  const [isSend, setIsSend] = useState<boolean>(false);
  useEffect(() => {
    if (!isSend) return;
    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setStep(1);
      setTimePlay(0);
      setTime(0);
    }, 1500);
  }, [isSend, setStep, setTime, timerRef]);
  return (
    <div className={cn("flex flex-row gap-3.5 w-full items-center")}>
      <button
        onClick={() => {
          if (isPaused) {
            if (timerRef.current) clearInterval(timerRef.current);
            timerRef.current = setInterval(() => {
              setTimePlay((prev) => {
                if (prev + 1 > time) {
                  if (timerRef.current) clearInterval(timerRef.current);
                  setIsPaused(true);
                  return 0;
                }
                return prev + 1;
              });
            }, 1000);
            setIsPaused(false);
          } else {
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            setIsPaused(true);
          }
        }}
        className={cn(
          "flex items-center justify-center bg-avr-accent cursor-pointer w-9 aspect-square rounded-xl transition-all duration-150 active:scale-95 hover:bg-avr-accent/90",
        )}
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>
      <div className={cn("flex flex-col gap-1 flex-1")}>
        <div className={cn("w-full relative rounded-full bg-avr-border h-1")}>
          <motion.div
            layout
            animate={{ width: `${(timePlay / time) * 100}%` }}
            transition={{ duration: timePlay === 0 ? 0.2 : 1, ease: "linear" }}
            className={cn(
              "bg-avr-accent h-1 rounded-full origin-left absolute left-0",
            )}
          ></motion.div>
        </div>
        <div
          className={cn(
            "flex flex-row justify-between text-[10px] font-mono items-center text-avr-text-muted",
            jetbrains_mono.className,
          )}
        >
          <p>{convertedPlayTime}</p>
          <p>{convertedTime}</p>
        </div>
      </div>
      <div className={cn("flex flex-row gap-2")}>
        <button
          onClick={() => {
            setStep(1);
            if (timerRef.current) clearInterval(timerRef.current);
            setTimePlay(0);
            setTime(0);
          }}
          className={cn(
            "w-9 border aspect-square rounded-xl flex items-center justify-center cursor-pointer transition-all duration-150 border-avr-border text-avr-text-muted hover:text-avr-danger hover:bg-avr-danger/5",
          )}
        >
          <Trash size={16} />
        </button>
        <button
          disabled={isSend}
          onClick={() => setIsSend(true)}
          className={cn(
            "w-9 aspect-square rounded-xl flex items-center justify-center cursor-pointer transition-all duration-150",
            isSend
              ? "bg-avr-success"
              : "bg-avr-accent hover:bg-avr-accent/90 active:scale-95 shadow-avr-accent/30 shadow-[0_4px_14px]",
          )}
        >
          {isSend ? <Check size={16} /> : <Send size={16} />}
        </button>
      </div>
    </div>
  );
}
