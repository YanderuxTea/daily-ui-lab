"use client";
import { Colors } from "@/data/color-swatch-palette/colorSwatchPaletteData";
import { jetbrains_mono, onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import PreviewColors from "./PreviewColors";
import SelectorColor from "./SelectorColor";
import TabColors from "./TabColors";

export default function CSPPage() {
  const [selectColor, setSelectColor] = useState<Colors>("violet");
  const [copyColors, setCopyColors] = useState<string>("");
  const [copyFlag, setCopyFlag] = useState<boolean>(false);
  const [previewColors, setPreviewColors] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    requestAnimationFrame(() => {
      setCopyColors("");
    });
  }, [selectColor]);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCopyFlag(false);
    }, 2000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [copyFlag, copyColors]);
  return (
    <main
      className={cn(
        "flex w-full min-h-screen bg-csp-bg text-violet-300 p-2.5 items-center justify-center select-none overflow-clip",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col gap-2.5 max-w-xl w-full")}>
        <TabColors
          selectColor={selectColor}
          setSelectColor={setSelectColor}
        />
        <PreviewColors
          selectColor={selectColor}
          copyColors={copyColors}
          previewColor={previewColors}
        />
        <SelectorColor
          setCopyFlag={setCopyFlag}
          selectColor={selectColor}
          setCopyColors={setCopyColors}
          setPreviewColors={setPreviewColors}
          copyColors={copyColors}
        />
        <p
          className={cn(
            "text-center text-xs",
            copyFlag ? "text-csp-toast-active" : "text-csp-toast-idle",
            jetbrains_mono.className,
          )}
        >
          {copyFlag
            ? `Скопировано: ${copyColors}`
            : "Нажми на цвет - скопирует HEX"}
        </p>
      </div>
    </main>
  );
}
