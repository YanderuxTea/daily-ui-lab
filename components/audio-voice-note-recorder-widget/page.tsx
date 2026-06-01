"use client";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
export type Step = 1 | 2 | 3;
export default function AVNRWPage() {
  const [time, setTime] = useState<number>(0);
  const [step, setStep] = useState<Step>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const stepMap: Record<Step, ReactNode> = {
    1: <FirstStep setStep={setStep} />,
    2: (
      <SecondStep
        setTime={setTime}
        time={time}
        timerRef={timerRef}
        setStep={setStep}
      />
    ),
    3: (
      <ThirdStep
        setStep={setStep}
        time={time}
        timerRef={timerRef}
        setTime={setTime}
      />
    ),
  };
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 flex-1 text-white bg-avr-bg-main",
        inter.className,
      )}
    >
      <div
        className={cn(
          "border p-4 rounded-2xl border-avr-border bg-avr-bg-card flex flex-row max-w-100 w-full shadow-lg shadow-black",
        )}
      >
        {stepMap[step]}
      </div>
    </main>
  );
}
