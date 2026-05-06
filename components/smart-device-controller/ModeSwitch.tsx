"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Mode } from "./Card";

type Props = {
  isOn: boolean;
  setMode: Dispatch<SetStateAction<Mode>>;
  mode: Mode;
};
export default function ModeSwitch({ isOn, setMode, mode }: Props) {
  return (
    <div
      className={cn(
        "p-1.5 rounded-full bg-black/40 flex flex-row transition-opacity duration-500 select-none",
        !isOn && "opacity-25",
      )}
    >
      <div
        onClick={
          isOn
            ? () => {
                setMode("cool");
              }
            : undefined
        }
        className={cn(
          "flex items-center justify-center relative flex-1 cursor-pointer",
          mode === "cool" ? "text-white" : "text-sdc-text-mute",
          !isOn && "cursor-not-allowed",
        )}
      >
        <p
          className={cn(
            "uppercase relative z-2 font-bold text-[10px] transition-colors duration-500 py-3 leading-none",
          )}
        >
          cool
        </p>
        {mode === "cool" && (
          <motion.div
            layout
            layoutId={"indicator"}
            className={cn(
              "rounded-full absolute inset-0 bg-white/10 border border-white/10",
            )}
          ></motion.div>
        )}
      </div>
      <div
        onClick={
          isOn
            ? () => {
                setMode("heat");
              }
            : undefined
        }
        className={cn(
          "flex items-center justify-center relative flex-1 cursor-pointer",
          mode === "heat" ? "text-white" : "text-sdc-text-mute",
          !isOn && "cursor-not-allowed",
        )}
      >
        <p
          className={cn(
            "uppercase relative z-2 font-bold text-[10px] transition-colors duration-500 py-3 leading-none",
          )}
        >
          heat
        </p>
        {mode === "heat" && (
          <motion.div
            layout
            layoutId={"indicator"}
            className={cn(
              "rounded-full absolute inset-0 bg-white/10 border border-white/10",
            )}
          ></motion.div>
        )}
      </div>
      <div
        onClick={
          isOn
            ? () => {
                setMode("auto");
              }
            : undefined
        }
        className={cn(
          "flex items-center justify-center relative flex-1 cursor-pointer",
          mode === "auto" ? "text-white" : "text-sdc-text-mute",
          !isOn && "cursor-not-allowed",
        )}
      >
        <p
          className={cn(
            "uppercase relative z-2 font-bold text-[10px] transition-colors duration-500 py-3 leading-none",
          )}
        >
          auto
        </p>
        {mode === "auto" && (
          <motion.div
            layout
            layoutId={"indicator"}
            className={cn(
              "rounded-full absolute inset-0 bg-white/10 border border-white/10",
            )}
          ></motion.div>
        )}
      </div>
    </div>
  );
}
