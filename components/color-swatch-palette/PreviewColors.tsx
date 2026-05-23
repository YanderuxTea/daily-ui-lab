import {
  Colors,
  colorsSwatchData,
} from "@/data/color-swatch-palette/colorSwatchPaletteData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  copyColors: string;
  previewColor: string;
  selectColor: Colors;
};
export default function PreviewColors({
  copyColors,
  previewColor,
  selectColor,
}: Props) {
  const selectColors = colorsSwatchData[selectColor];
  const textColors =
    previewColor.length > 0
      ? selectColors.colors.find((c) => c.hex === previewColor)
      : selectColors.colors.find((c) => c.hex === copyColors);
  return (
    <div
      className={cn(
        "flex items-center justify-end px-4 border h-16 border-white/6 rounded-[14px] w-full gap-2.5 transition-colors duration-150",
      )}
      style={{
        backgroundColor: previewColor.length > 0 ? previewColor : copyColors,
      }}
    >
      <p className={cn("text-csp-preview-name text-[13px] font-semibold")}>
        {textColors?.tailwind}
      </p>
      <p
        className={cn("text-csp-preview-hex text-xs", jetbrains_mono.className)}
      >
        {textColors?.hex}
      </p>
    </div>
  );
}
