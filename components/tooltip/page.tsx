import {
  delayData,
  positionData,
  variantData,
} from "@/data/tooltip/tooltipData";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import ButtonTooltip from "./ButtonTooltip";

export default function TPage() {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex flex-col gap-10 items-center justify-center p-2.5 bg-t-base text-t-accent",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col gap-5")}>
        <p
          className={cn(
            "uppercase font-medium text-[11px] tracking-[0.08em] text-center",
          )}
        >
          Позиции
        </p>
        <div className={cn("flex flex-wrap gap-5 justify-center")}>
          {positionData.map((data, index) => {
            return (
              <ButtonTooltip
                key={`position-${index}`}
                tooltipData={data}
              />
            );
          })}
        </div>
      </div>
      <div className={cn("flex flex-col gap-5")}>
        <p
          className={cn(
            "uppercase font-medium text-[11px] tracking-[0.08em] text-center",
          )}
        >
          Варианты
        </p>
        <div className={cn("flex flex-wrap gap-5 justify-center")}>
          {variantData.map((data, index) => {
            return (
              <ButtonTooltip
                key={`variant-${index}`}
                tooltipData={data}
              />
            );
          })}
        </div>
      </div>
      <div className={cn("flex flex-col gap-5 justify-center")}>
        <p
          className={cn(
            "uppercase font-medium text-[11px] tracking-[0.08em] text-center",
          )}
        >
          Задержка появления
        </p>
        <div className={cn("flex flex-wrap gap-5 justify-center")}>
          {delayData.map((data, index) => {
            return (
              <ButtonTooltip
                key={`delay-${index}`}
                tooltipData={data}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
