"use client";
import {
  mapColorsTooltip,
  mapPositionTooltip,
  TooltipData,
} from "@/data/tooltip/tooltipData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ButtonTooltip({
  tooltipData,
}: {
  tooltipData: TooltipData;
}) {
  const { position, variant, delay, title, description } = tooltipData;
  const [isHover, setIsHover] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <div
      onMouseEnter={() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setIsHover(true);
        }, delay);
      }}
      onMouseLeave={() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsHover(false);
      }}
      className={cn(
        "relative cursor-pointer bg-t-bg py-2.5 px-5 transition-colors duration-150 font-medium text-[13px] rounded-xl border flex justify-center items-center",
        mapColorsTooltip[variant].colorsContainer,
      )}
    >
      <span>{title}</span>
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              x: mapPositionTooltip[position].x,
              y: mapPositionTooltip[position].y,
            }}
            exit={{ opacity: 0, x: 0, y: 0 }}
            className={cn(
              "absolute text-nowrap text-xs font-medium rounded-[9px] py-1.75 px-3 border pointer-events-none",
              mapColorsTooltip[variant].colorsPopup,
              mapPositionTooltip[position].position,
            )}
          >
            <span>{description}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
