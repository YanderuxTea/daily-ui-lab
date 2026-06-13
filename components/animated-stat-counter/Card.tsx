"use client";

import {
  iconsStatData,
  StatData,
} from "@/data/animated-stat-counter/statCounterData";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Props = {
  duration: number;
  trigger?: number;
  data: StatData;
};
export default function Card({ duration, trigger, data }: Props) {
  const {
    targetValue,
    classnameDelta,
    classnameIcon,
    icon,
    delta,
    description,
    lastChar,
  } = data;
  const Icon = iconsStatData[icon];
  const [number, setNumber] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number | null>(null);
  const decPlaces = Number.isInteger(targetValue)
    ? 0
    : targetValue.toString().split(".")[1]?.length || 0;
  useEffect(() => {
    const startTime = 0;
    function animateNumber(
      targetValue: number,
      duration: number,
      startTime: number,
    ) {
      if (!startTime) startTime = Date.now();
      const currentTime = Date.now();
      const timePassed = currentTime - startTime;
      const progress = (timePassed / duration) * 100;
      if (progress >= 100) {
        setNumber(targetValue);
        return;
      } else {
        setNumber((targetValue / 100) * progress);
        animationFrame.current = requestAnimationFrame(() =>
          animateNumber(targetValue, duration, startTime),
        );
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animationFrame.current = requestAnimationFrame(() =>
          animateNumber(targetValue, duration, startTime),
        );
      }
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      observer.disconnect();
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [duration, targetValue, trigger]);
  return (
    <div
      ref={cardRef}
      className={cn(
        "flex flex-col bg-asc-card rounded-[14px] border border-asc-border px-5 py-4.5 w-50",
      )}
    >
      <div className={cn("flex flex-row justify-between items-center mb-3.5")}>
        <div
          className={cn(
            "flex items-center justify-center w-10 aspect-square rounded-lg",
            classnameIcon,
          )}
        >
          <Icon size={18} />
        </div>
        <p className={cn("text-xs font-medium", classnameDelta)}>{delta}</p>
      </div>
      <p className={cn("mb-1.25 text-[26px] font-medium leading-none")}>
        {number
          .toLocaleString("ru-RU", {
            minimumFractionDigits: decPlaces,
            maximumFractionDigits: decPlaces,
          })
          .replace(",", ".")}
        {lastChar}
      </p>
      <p className={cn("text-asc-muted text-[13px]")}>{description}</p>
    </div>
  );
}
