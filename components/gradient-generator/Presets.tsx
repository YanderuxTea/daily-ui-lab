import { gradientData } from "@/data/gradient-generator/gradientGeneratorData";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { ConfigHsl, hslToHex } from "./page";

export default function Presets({
  setConfig,
}: {
  setConfig: Dispatch<SetStateAction<ConfigHsl>>;
}) {
  return (
    <div className={cn("flex flex-col gap-2")}>
      <p
        className={cn(
          "text-gg-muted uppercase text-[11px] font-medium tracking-[0.08em]",
        )}
      >
        Пресеты
      </p>
      <div className={cn("flex flex-row gap-2")}>
        {gradientData.map((item, index) => {
          const from = hslToHex(
            item.firstColor.h,
            item.firstColor.s,
            item.firstColor.l,
          );
          const to = hslToHex(
            item.secondColor.h,
            item.secondColor.s,
            item.secondColor.l,
          );
          const angle = item.angle;
          return (
            <div
              onClick={() => setConfig(item)}
              key={`preset-${index}`}
              style={{
                background: `linear-gradient(${angle}deg,${from}, ${to})`,
              }}
              className={cn(
                "w-7 aspect-square rounded-lg origin-center transition-transform duration-150 cursor-pointer hover:scale-115",
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
