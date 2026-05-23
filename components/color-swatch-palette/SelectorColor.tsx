import {
  Colors,
  colorsSwatchData,
} from "@/data/color-swatch-palette/colorSwatchPaletteData";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
type Props = {
  selectColor: Colors;
  setCopyColors: Dispatch<SetStateAction<string>>;
  setPreviewColors: Dispatch<SetStateAction<string>>;
  copyColors: string;
  setCopyFlag: Dispatch<SetStateAction<boolean>>;
};
export default function SelectorColor({
  selectColor,
  setCopyColors,
  setPreviewColors,
  copyColors,
  setCopyFlag,
}: Props) {
  return (
    <div className={cn("flex flex-wrap gap-2")}>
      {colorsSwatchData[selectColor].colors.map((color) => {
        return (
          <div
            onClick={() => {
              setCopyColors(color.hex);
              setCopyFlag(true);
              navigator.clipboard.writeText(color.hex);
            }}
            onMouseEnter={() => {
              setPreviewColors(color.hex);
            }}
            onMouseLeave={() => {
              setPreviewColors("");
            }}
            key={`color-selector-${color.hex}`}
            className={cn(
              "rounded-lg flex-1 aspect-square cursor-pointer transition-all relative hover:scale-108 origin-center group flex justify-center border-3 border-csp-bg",
              copyColors === color.hex && "ring-2",
            )}
            style={{ backgroundColor: color.hex, color: color.hex }}
          >
            <div
              className={cn(
                "flex flex-col px-2.5 py-1.25 border absolute text-[11px] rounded-lg bg-csp-tooltip-bg border-csp-tooltip-border text-nowrap bottom-full opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:-translate-y-2.25 pointer-events-none text-csp-tooltip-text",
              )}
            >
              <p>{color.tailwind}</p>
              <p>{color.hex}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
