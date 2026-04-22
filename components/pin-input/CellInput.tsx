"use client";
import { InputHTMLAttributes, RefObject } from "react";
import { ResultCheck } from "@/components/pin-input/OTPInput";
import { dm_mono } from "@/lib/font";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  cellsArrayRef: RefObject<HTMLInputElement[]>;
  code: string[];
  index: number;
  resultCheck: ResultCheck;
}
export default function CellInput({
  cellsArrayRef,
  index,
  code,
  resultCheck,
  ...props
}: Props) {
  return (
    <input
      {...props}
      ref={(el) => {
        cellsArrayRef.current[index] = el!;
      }}
      type="text"
      inputMode={"numeric"}
      maxLength={1}
      className={
        `w-13 h-15 rounded-[10px] ${dm_mono.className} font-medium text-[28px] text-[#f1f5f9] border cursor-pointer` +
        " outline-none text-center focus:bg-white/6 focus:border-[#3b82f6]" +
        ` focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out ${resultCheck === "success" ? "border-[#22c55e] shadow-[0_0_0_3px_rgba(34,197,94,0.15)] text-[#22c55e]" : resultCheck === "error" ? "border-[#ef4444] shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : code[index].length > 0 ? "bg-white/6 border-white/15" : "bg-white/4 border-white/8"}`
      }
    />
  );
}
