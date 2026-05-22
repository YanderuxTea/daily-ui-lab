"use client";

import {
  mapColor,
  mapSize,
  ToggleSwitch,
} from "@/data/toggle-switch/toggleSwitchData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Switcher({ props }: { props: ToggleSwitch }) {
  const { disabled, checked, color, size } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  return (
    <div
      onClick={
        disabled
          ? undefined
          : () => {
              setIsChecked((prev) => !prev);
            }
      }
      className={cn(
        "relative border items-center flex rounded-full transition-colors duration-150",
        disabled ? "cursor-default" : "cursor-pointer",
        isChecked ? mapColor[color] : "bg-ts-dark-3 border-ts-primary",
      )}
      style={{
        width: mapSize[size].trackWidth,
        height: mapSize[size].trackHeight,
      }}
    >
      <motion.div
        initial={{
          left: isChecked
            ? mapSize[size].trackWidth - mapSize[size].sizeDot - 4
            : 4,
        }}
        animate={{
          left: isChecked
            ? mapSize[size].trackWidth - mapSize[size].sizeDot - 4
            : 4,
        }}
        transition={{
          type: "spring",
          duration: 0.3,
          bounce: 0.4,
          damping: 20,
          stiffness: 300,
        }}
        className={cn(
          "pointer-events-none absolute aspect-square bg-white rounded-full",
        )}
        style={{ width: mapSize[size].sizeDot }}
      ></motion.div>
    </div>
  );
}
