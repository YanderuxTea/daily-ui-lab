"use client";
import {
  Colors,
  colorsSwatchData,
} from "@/data/color-swatch-palette/colorSwatchPaletteData";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
type Props = {
  selectColor: Colors;
  setSelectColor: Dispatch<SetStateAction<Colors>>;
};
export default function TabColors({ selectColor, setSelectColor }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-1.5")}>
      {Object.entries(colorsSwatchData).map(([key, color]) => {
        return (
          <div
            onClick={() => setSelectColor(key as Colors)}
            key={`color-selector-${color.title}`}
            className={cn(
              "text-csp-tab-text text-xs font-medium py-1.25 px-3.25 border bg-csp-tab-bg border-csp-tab-border cursor-pointer rounded-lg transition-colors duration-150",
              selectColor === key
                ? "bg-csp-tab-active-bg border-csp-tab-active-border text-csp-tab-active-text"
                : "hover:border-csp-tab-active-border hover:text-csp-tab-active-text",
            )}
          >
            {color.title}
          </div>
        );
      })}
    </div>
  );
}
