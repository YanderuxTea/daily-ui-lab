"use client";
import { space_grotesk } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { useState } from "react";
import ClockFace from "./ClockFace";

export default function CTPage() {
  const [timer, setTimer] = useState<number>(5 * 60);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isReset, setIsReset] = useState<boolean>(false);
  const timers = [30, 60, 5 * 60, 25 * 60];
  return (
    <main
      className={cn(
        "bg-ct-bg flex-1 w-full flex items-center justify-center p-2.5 flex-col gap-6 text-ct-text",
        space_grotesk.className,
      )}
    >
      <ClockFace
        setPaused={setIsPaused}
        timer={timer}
        isPaused={isPaused}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <div className={cn("flex flex-row gap-2")}>
        {timers.map((time) => {
          const isMinute = time >= 60;
          const timeText = isMinute ? time / 60 : time;
          return (
            <button
              onClick={() => {
                setIsPaused(true);
                setTimer(time);
              }}
              key={`time-button-${time}`}
              className={cn(
                "text-xs font-medium py-1.5 px-3.25 border rounded-lg cursor-pointer transition-colors duration-150",
                time === timer
                  ? "bg-ct-preset-active-bg border-ct-preset-active-border text-ct-preset-active-text"
                  : "text-ct-preset-text bg-ct-surface border-ct-border hover:text-ct-preset-text-hover hover:border-ct-preset-active-border",
              )}
            >
              {timeText} {isMinute ? "мин" : "сек"}
            </button>
          );
        })}
      </div>
      <div
        className={cn(
          "flex flex-row gap-2.5 text-sm font-semibold max-w-xs w-full",
        )}
      >
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className={cn(
            "py-3 rounded-xl cursor-pointer transition-all duration-150 text-white flex-1 hover:opacity-85 hover:scale-102 active:scale-97",
            isPaused ? "bg-ct-btn-primary" : "bg-ct-btn-paused",
          )}
        >
          {isPaused ? "Старт" : "Пауза"}
        </button>
        <button
          onClick={() => {
            setIsReset(true);
            setIsPaused(true);
          }}
          className={cn(
            "py-3 rounded-xl cursor-pointer transition-all duration-150 text-ct-btn-reset-text bg-ct-btn-reset-bg border border-ct-border w-22.5 hover:opacity-85 hover:scale-102 active:scale-97",
          )}
        >
          Сброс
        </button>
      </div>
    </main>
  );
}
