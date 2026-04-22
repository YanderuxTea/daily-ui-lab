"use client";
import CellInput from "@/components/pin-input/CellInput";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export type ResultCheck = "success" | "error" | "none";
export default function OTPInput() {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [resultCheck, setResultCheck] = useState<ResultCheck>("none");
  const cellsArray = useRef<HTMLInputElement[]>([]);
  function handlePaste(e: React.ClipboardEvent, index: number) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    if (pasteData.length === 6) {
    } else {
      return;
    }
    const pasteDataSplit = pasteData.split("");
    let check = true;
    for (const value of pasteDataSplit) {
      console.log(value);
      const number = Number(value);
      if (isNaN(number)) {
        check = false;
      }
    }
    if (!check) {
      return;
    } else {
      setCode((prevState) =>
        prevState.map((_, index) => {
          return pasteDataSplit[index];
        }),
      );
      cellsArray.current[index].blur();
    }
  }
  function handleInputChange(value: string, index: number) {
    if (isNaN(Number(value))) {
      return;
    }
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (index === code.length - 1) {
      cellsArray.current[index].blur();
    }
    if (value.trim().length === 0) {
      if (index - 1 < 0) {
        return;
      }
      cellsArray.current[index - 1].focus();
      cellsArray.current[index - 1].setSelectionRange(1, 1);
    } else {
      if (index + 1 > cellsArray.current.length - 1) {
        return;
      }
      cellsArray.current[index + 1].focus();
      cellsArray.current[index + 1].setSelectionRange(1, 1, "forward");
    }
  }
  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight" && index < cellsArray.current.length - 1) {
      e.preventDefault();
      cellsArray.current[index + 1].focus();
      cellsArray.current[index + 1].setSelectionRange(1, 1);
    }
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      cellsArray.current[index - 1].focus();
      cellsArray.current[index - 1].setSelectionRange(1, 1);
    }
    if (e.key === "Escape") {
      cellsArray.current[index].blur();
    }
    if (e.key === "Backspace") {
      if (index - 1 < 0 || cellsArray.current[index].value.length > 0) {
        return;
      }
      cellsArray.current[index - 1].focus();
    }
  }
  useEffect(() => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      setTimeout(() => {
        if (fullCode.trim() === "123456") {
          setResultCheck("success");
        } else {
          setResultCheck("error");
        }
      }, 300);
    }
  }, [code]);
  useEffect(() => {
    if (resultCheck === "none") {
      return;
    }
    setTimeout(() => {
      setResultCheck("none");
      setCode(new Array(6).fill(""));
      cellsArray.current[0].focus();
    }, 1200);
  }, [resultCheck]);
  return (
    <div className={"flex flex-col gap-3"}>
      <AnimatePresence mode={"wait"}>
        <motion.p
          key={resultCheck}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className={`text-center text-[13px] ${resultCheck === "success" ? "text-[#22c55e]" : resultCheck === "error" ? "text-[#ef4444]" : ""}`}
        >
          {resultCheck === "error"
            ? "Invalid code. Try again."
            : resultCheck === "success"
              ? "Verified successfully!"
              : "⠀"}
        </motion.p>
      </AnimatePresence>
      <motion.div
        animate={
          resultCheck === "error" ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={"flex flex-row gap-2.5"}
      >
        {code.map((_, index) => {
          return (
            <CellInput
              resultCheck={resultCheck}
              code={code}
              value={code[index]}
              onPaste={(e) => handlePaste(e, index)}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              id={`cell-${index}`}
              key={`cell-${index}`}
              cellsArrayRef={cellsArray}
              index={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
