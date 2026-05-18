import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Color, ConfigHsl } from "./page";
type Props = {
  value: number;
  setConfig: Dispatch<SetStateAction<ConfigHsl>>;
  firstKey: keyof Omit<ConfigHsl, "angle">;
  secondKey: keyof Color;
  min: number;
  max: number;
  background: string;
  label: string;
};
export default function Picker({
  value,
  setConfig,
  firstKey,
  secondKey,
  min,
  max,
  background,
  label,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1")}>
      <p
        className={cn(
          "text-[11px] uppercase tracking-[0.08em] font-medium text-gg-muted",
        )}
      >
        {label}
      </p>
      <input
        style={{ background: background }}
        className={cn(
          "appearance-none accent-white h-2 rounded-full cursor-pointer",
        )}
        type="range"
        min={min}
        max={max}
        onChange={(e) =>
          setConfig((prev) => {
            return {
              ...prev,
              [firstKey]: {
                ...prev[firstKey],
                [secondKey]: Number(e.target.value),
              },
            };
          })
        }
        value={value}
      />
    </div>
  );
}
