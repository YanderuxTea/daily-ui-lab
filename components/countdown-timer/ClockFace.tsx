"use client";

import { space_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
type Props = {
  timer: number;
  isPaused: boolean;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
  setPaused: Dispatch<SetStateAction<boolean>>;
};
export default function ClockFace({
  timer,
  isPaused,
  isReset,
  setIsReset,
  setPaused,
}: Props) {
  const [leftTime, setLeftTime] = useState<number>(timer);
  useEffect(() => {
    setLeftTime(timer);
  }, [timer]);
  const times = useMemo(() => {
    return { minute: Math.trunc(leftTime / 60), second: leftTime % 60 };
  }, [leftTime]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(() => {
        setLeftTime((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, leftTime, timer]);
  useEffect(() => {
    if (isReset) {
      setLeftTime(timer);
      setIsReset(false);
    }
  }, [isReset, setIsReset, timer]);

  useEffect(() => {
    if (leftTime === 0) {
      setPaused(true);
      setTimeout(() => {
        setIsReset(true);
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }, 1000);
    }
  }, [leftTime, setIsReset, setPaused]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center gap-1.5 border-6 border-ct-ring-track rounded-full w-65 aspect-square",
      )}
    >
      <div className={cn("flex flex-row")}>
        <div className={cn("flex flex-col text-center")}>
          <AnimatePresence mode={"wait"}>
            <motion.p
              key={times.minute}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn("text-[44px] font-bold", space_mono.className)}
            >
              {times.minute.toString().padStart(2, "0")}
            </motion.p>
          </AnimatePresence>
          <p
            className={cn(
              "text-ct-sep text-[10px] font-medium tracking-widest",
            )}
          >
            мин
          </p>
        </div>
        <span className={cn("text-[44px] font-bold", space_mono.className)}>
          :
        </span>
        <div className={cn("flex flex-col text-center")}>
          <AnimatePresence mode={"wait"}>
            <motion.p
              key={times.second}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn("text-[44px] font-bold", space_mono.className)}
            >
              {times.second.toString().padStart(2, "0")}
            </motion.p>
          </AnimatePresence>
          <p
            className={cn(
              "text-ct-sep text-[10px] font-medium tracking-widest",
            )}
          >
            сек
          </p>
        </div>
      </div>
      <svg
        className={cn("absolute w-70 aspect-square")}
        viewBox={"0 0 260 260"}
      >
        <circle
          cx={130}
          cy={130}
          r={118}
          strokeDasharray={741.4}
          strokeDashoffset={(741.4 / timer) * (timer - leftTime)}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          className={cn(
            "fill-none stroke-5 -rotate-90 origin-center transition-all duration-900 drop-shadow-[0_0_5px]",
            leftTime <= timer * 0.25
              ? "stroke-ct-ring-danger drop-shadow-ct-ring-danger/60"
              : leftTime <= timer / 2
                ? "stroke-ct-ring-warning drop-shadow-ct-ring-warning/60"
                : "stroke-ct-ring-accent drop-shadow-ct-ring-accent/60",
          )}
        ></circle>
      </svg>
    </div>
  );
}
