"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Mode } from "./Card";

type Props = {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
  mode: Mode;
};
export default function HeaderCard({ isOn, setIsOn, mode }: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-start")}>
      <div className={cn("flex flex-col gap-1")}>
        <p className={cn("text-white font-bold text-xl")}>Климат</p>
        <p className={cn("text-sdc-text-mute text-sm")}>
          Гостиная • {isOn ? "Активен" : "Спит"}
        </p>
      </div>
      <div
        onClick={() => {
          setIsOn((prev) => !prev);
        }}
        className={cn(
          "flex items-start p-1 w-14 h-8 flex-row rounded-full cursor-pointer transition-colors duration-200",
          isOn ? "justify-end" : "justify-start ",
          isOn && mode === "cool"
            ? "bg-sdc-accent"
            : mode === "heat"
              ? "bg-sdc-orange"
              : mode === "auto"
                ? "bg-[#22c55e]"
                : "bg-[#3f3f46]",
        )}
      >
        <motion.div
          layout
          className={cn("bg-white w-6 aspect-square rounded-full")}
        ></motion.div>
      </div>
    </div>
  );
}
