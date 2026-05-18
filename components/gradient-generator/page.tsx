"use client";
import { gradientData } from "@/data/gradient-generator/gradientGeneratorData";
import { jetbrains_mono, onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Check, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PickerCard from "./PickerCard";
import Presets from "./Presets";
export type Color = {
  h: number;
  s: number;
  l: number;
};
export type ConfigHsl = {
  firstColor: Color;
  secondColor: Color;
  angle: number;
};
type configHex = {
  firstColor: string;
  secondColor: string;
  angle: number;
};

export function hslToHex(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));

  const r = Math.round(255 * f(0));
  const g = Math.round(255 * f(8));
  const b = Math.round(255 * f(4));

  const toHex = (val: number) => val.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
export default function GGPage() {
  const [config, setConfig] = useState<ConfigHsl>(gradientData[0]);
  const { firstColor, secondColor, angle } = config;
  const hexConverted: configHex = {
    firstColor: hslToHex(firstColor.h, firstColor.s, firstColor.l),
    secondColor: hslToHex(secondColor.h, secondColor.s, secondColor.l),
    angle,
  };
  const cssProperty = `background: linear-gradient(${hexConverted.angle}deg, ${hexConverted.firstColor}, ${hexConverted.secondColor});`;
  const [copied, setCopied] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCopied(false);
    }, 1500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [copied]);
  return (
    <main
      className={cn(
        "w-full min-h-screen flex justify-center px-2.5 py-5 bg-gg-background text-gg-primary",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col gap-5 w-full max-w-md")}>
        <div
          className={cn("w-full h-32.5 rounded-[18px]")}
          style={{
            background: `linear-gradient(${hexConverted.angle}deg, ${hexConverted.firstColor}, ${hexConverted.secondColor})`,
          }}
        ></div>
        <Presets setConfig={setConfig} />
        <div className={cn("flex flex-row gap-3")}>
          <PickerCard
            key={"picker-card-1"}
            setConfig={setConfig}
            bgColor={hexConverted.firstColor}
            color={firstColor}
            keyConfig={"firstColor"}
            label={"A"}
          />
          <PickerCard
            key={"picker-card-2"}
            setConfig={setConfig}
            bgColor={hexConverted.secondColor}
            color={secondColor}
            keyConfig={"secondColor"}
            label={"B"}
          />
        </div>
        <div
          className={cn(
            "flex flex-col p-4 border w-full bg-gg-dark5 rounded-2xl border-gg-dark2 gap-2",
          )}
        >
          <p
            className={cn(
              "text-[11px] uppercase font-medium tracking-[0.08em] text-gg-muted",
            )}
          >
            Угол -{" "}
            <span className={cn("text-gg-indigo", jetbrains_mono.className)}>
              {hexConverted.angle}°
            </span>
          </p>
          <div className={cn("flex flex-row gap-2.5 items-center")}>
            <button
              onClick={() =>
                setConfig((prev) => ({
                  ...prev,
                  angle: Math.max(prev.angle - 5, 0),
                }))
              }
              className={cn(
                "border w-8 aspect-square flex items-center justify-center transition-colors duration-150 cursor-pointer bg-gg-dark3 border-gg-dark6 rounded-lg hover:bg-gg-dark4 hover:text-gg-indigo",
              )}
            >
              <Minus size={18} />
            </button>
            <input
              min={0}
              max={360}
              value={hexConverted.angle}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  angle: Number(e.target.value),
                }))
              }
              type="range"
              className={
                "appearance-none accent-white h-2 rounded-full cursor-pointer flex-1 bg-linear-to-r from-gg-dark3 from-0% to-gg-purple to-100%"
              }
            />

            <button
              onClick={() =>
                setConfig((prev) => ({
                  ...prev,
                  angle: Math.min(prev.angle + 5, 360),
                }))
              }
              className={cn(
                "border w-8 aspect-square flex items-center justify-center transition-colors duration-150 cursor-pointer bg-gg-dark3 border-gg-dark6 rounded-lg hover:bg-gg-dark4 hover:text-gg-indigo",
              )}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
        <div className={cn("flex flex-row gap-2 items-center")}>
          <div
            className={cn(
              "w-2/3 shrink-0 px-3.5 py-3 border bg-gg-dark7 rounded-xl border-gg-dark2 text-xs",
            )}
          >
            <p
              className={cn("break-all leading-1.6", jetbrains_mono.className)}
            >
              <span className={cn("text-gg-muted")}>background: </span>
              linear-gradient(
              <span className={cn("text-gg-indigo")}>{hexConverted.angle}</span>
              ,{" "}
              <span className={cn("text-gg-indigo")}>
                {hexConverted.firstColor}
              </span>
              ,{" "}
              <span className={cn("text-gg-indigo")}>
                {hexConverted.secondColor}
              </span>
              );
            </p>
          </div>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(cssProperty);
                setCopied(true);
              } catch (error) {
                console.error("Failed to copy text:", error);
              }
            }}
            className={cn(
              "w-full cursor-pointer border px-4.5 py-2.5 font-medium text-[13px] rounded-[10px] leading-none transition-all duration-150 active:scale-96 flex flex-row gap-1 items-center justify-center",
              copied
                ? "bg-gg-dark1 text-gg-success border-gg-success"
                : "bg-gg-dark3 border-gg-dark6 text-gg-indigo hover:bg-gg-dark4 hover:border-gg-purple",
            )}
          >
            {copied && <Check size={12} />}
            <span>{copied ? "Скопировано" : "Копировать"}</span>
          </button>
        </div>
      </div>
    </main>
  );
}
