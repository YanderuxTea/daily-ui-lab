import { cn } from "@/lib/utils";
import { CloudSun, Droplet, Wind } from "lucide-react";

export default function WidgetMain() {
  return (
    <div className={cn("flex flex-col gap-6 mb-6")}>
      <div className={cn("flex flex-row justify-between items-center")}>
        <div className={cn("flex flex-col gap-0.5")}>
          <div className={cn("mb-0.5 flex flex-row")}>
            <p className={cn("text-6xl font-light -tracking-[3px]")}>+18</p>
            <p className={cn("text-2xl mt-1 text-ww-accent-glow font-light")}>
              °C
            </p>
          </div>
          <p className={cn("text-sm font-medium")}>Облачно с прояснениями</p>
          <p className={cn("text-xs text-ww-text-muted")}>Ощущается как +16°</p>
        </div>
        <CloudSun size={64} />
      </div>
      <div className={cn("grid grid-cols-2 gap-2")}>
        <div
          className={cn(
            "bg-ww-accent-bg rounded-2xl border border-ww-border/50 p-3 flex flex-row gap-3 items-center",
          )}
        >
          <span className={cn("text-ww-accent-glow")}>
            <Wind size={20} />
          </span>
          <div className={cn("flex flex-col gap-0.5")}>
            <p
              className={cn(
                "text-[10px] text-ww-text-muted uppercase font-medium tracking-wider",
              )}
            >
              Ветер
            </p>
            <p className={cn("text-xs font-semibold")}>4.2 м/с, СВ</p>
          </div>
        </div>
        <div
          className={cn(
            "bg-ww-accent-bg rounded-2xl border border-ww-border/50 p-3 flex flex-row gap-3 items-center",
          )}
        >
          <span className={cn("text-ww-accent-glow")}>
            <Droplet size={20} />
          </span>
          <div className={cn("flex flex-col gap-0.5")}>
            <p
              className={cn(
                "text-[10px] text-ww-text-muted uppercase font-medium tracking-wider",
              )}
            >
              Влажность
            </p>
            <p className={cn("text-xs font-semibold")}>64%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
