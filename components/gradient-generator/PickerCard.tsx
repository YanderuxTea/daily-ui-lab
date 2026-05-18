import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Color, ConfigHsl, hslToHex } from "./page";
import Picker from "./Picker";
type Props = {
  setConfig: Dispatch<SetStateAction<ConfigHsl>>;
  bgColor: string;
  color: Color;
  keyConfig: keyof Omit<ConfigHsl, "angle">;
  label: string;
};
export default function PickerCard({
  setConfig,
  bgColor,
  color,
  keyConfig,
  label,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 border w-full rounded-2xl bg-gg-dark5 border-gg-dark2 gap-2.75",
      )}
    >
      <div className={cn("flex flex-row gap-2.5 items-center mb-3.5")}>
        <div
          style={{ backgroundColor: bgColor }}
          className={cn("w-7 aspect-square rounded-lg")}
        ></div>
        <p className={cn("text-gg-lavender font-semibold text-[13px]")}>
          Цвет {label}
        </p>
      </div>

      <Picker
        background={
          "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)"
        }
        min={0}
        max={360}
        value={color.h}
        setConfig={setConfig}
        firstKey={keyConfig}
        secondKey={"h"}
        label={"Оттенок"}
      />
      <Picker
        background={`linear-gradient(to right,#fff,${hslToHex(
          color.h,
          100,
          color.l,
        )})`}
        min={0}
        max={100}
        value={color.s}
        setConfig={setConfig}
        firstKey={keyConfig}
        secondKey={"s"}
        label={"Насыщенность"}
      />
      <Picker
        background={`linear-gradient(to right,#000,#fff)`}
        min={0}
        max={100}
        value={color.l}
        setConfig={setConfig}
        firstKey={keyConfig}
        secondKey={"l"}
        label={"Яркость"}
      />
    </div>
  );
}
