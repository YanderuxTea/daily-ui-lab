import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function HeaderCard() {
  return (
    <div className={cn("flex flex-row justify-between items-start")}>
      <div
        className={cn(
          "flex flex-col w-9 h-7 p-1.5 justify-between border bg-white/20 border-white/10 rounded-md backdrop-blur-sm opacity-80",
        )}
      >
        <div className={cn("w-full h-0.5 rounded-full bg-white/30")}></div>
        <div className={cn("w-2/3 h-0.5 rounded-full bg-white/30")}></div>
        <div className={cn("w-full h-0.5 rounded-full bg-white/30")}></div>
      </div>
      <div className={cn("flex flex-col text-end")}>
        <p className={cn("uppercase text-white/60 text-[10px] tracking-wider")}>
          Баланс
        </p>
        <p
          className={cn(
            "font-bold text-base tracking-tight font-mono",
            jetbrains_mono.className,
          )}
        >
          142,500 ₽
        </p>
      </div>
    </div>
  );
}
