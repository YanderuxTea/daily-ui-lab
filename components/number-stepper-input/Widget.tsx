"use client";
import {
  iconsStepperData,
  StepperData,
} from "@/data/number-stepper-input/numberStepperData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Widget({ props }: { props: StepperData }) {
  const { icon, title, description, step, min, max, measure } = props;
  const Icon = iconsStepperData[icon];
  const [currentValue, setCurrentValue] = useState<{
    val: number;
    direct: number;
  }>({ val: min, direct: 1 });
  const variants = {
    enter: (direction: number) => ({ y: 4 * direction, opacity: 0 }),
    center: () => ({ y: 0, opacity: 1 }),
    exit: (direction: number) => ({ y: 4 * -direction, opacity: 0 }),
  };
  return (
    <div
      className={cn(
        "flex flex-row justify-between w-full bg-nsi-card px-4 py-3.5 border border-nsi-border rounded-[14px] items-center",
      )}
    >
      <div className={cn("flex flex-row gap-3 items-center")}>
        <span className={cn("text-nsi-muted")}>
          <Icon size={20} />
        </span>
        <div className={cn("flex flex-col gap-0.5")}>
          <p className={cn("text-sm font-medium")}>{title}</p>
          <p className={cn("text-xs text-nsi-hint")}>{description}</p>
        </div>
      </div>
      <div
        className={cn(
          "flex flex-row border rounded-lg border-nsi-border overflow-clip",
        )}
      >
        <button
          disabled={currentValue.val === min}
          onClick={
            currentValue.val === min
              ? undefined
              : () => {
                  setCurrentValue((prev) => {
                    return { val: Math.max(min, prev.val - step), direct: -1 };
                  });
                }
          }
          className={cn(
            "flex items-center justify-center transition-all duration-200 origin-center w-9.5 aspect-square text-[#a1a1aa]",
            currentValue.val === min
              ? "disabled:opacity-25 cursor-default"
              : "hover:text-white hover:bg-white/5 active:scale-88 cursor-pointer",
          )}
        >
          <Minus size={16} />
        </button>
        <div
          className={cn(
            "w-17.5 text-center select-none border-x border-white/8 flex items-center justify-center font-medium text-[13px]",
          )}
        >
          <AnimatePresence
            mode={"wait"}
            initial={false}
            custom={currentValue.direct}
          >
            <motion.p
              custom={currentValue.direct}
              key={currentValue.val}
              variants={variants}
              initial={"enter"}
              animate={"center"}
              exit={"exit"}
              transition={{ duration: 0.15 }}
            >
              {currentValue.val}
              {measure}
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          disabled={currentValue.val === max}
          onClick={
            currentValue.val === max
              ? undefined
              : () => {
                  setCurrentValue((prev) => {
                    return { val: Math.min(max, prev.val + step), direct: 1 };
                  });
                }
          }
          className={cn(
            "flex items-center justify-center cursor-pointer transition-all duration-200 origin-center w-9.5 aspect-square text-[#a1a1aa]",
            currentValue.val === max
              ? "disabled:opacity-25 cursor-default"
              : "hover:text-white hover:bg-white/5 active:scale-88 cursor-pointer",
          )}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
