import { cn } from "@/lib/utils";

export default function WidgetHeader() {
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const now = new Date();
  return (
    <div className={cn("flex flex-row justify-between items-center mb-6")}>
      <div className={cn("flex flex-col gap-0.5")}>
        <p className={cn("text-lg font-semibold tracking-tight")}>
          Санкт-Петербург
        </p>
        <p className={cn("text-xs text-ww-text-muted")}>
          {formatter.format(now).at(0)?.toUpperCase() +
            formatter.format(now).slice(1)}
        </p>
      </div>
      <div
        className={cn(
          "px-2.5 py-1 border items-center flex flex-row gap-1.5 border-ww-border bg-ww-accent-bg rounded-full",
        )}
      >
        <span
          className={cn(
            "w-1.5 aspect-square rounded-full bg-ww-success animate-pulse",
          )}
        ></span>
        <span
          className={cn(
            "uppercase text-[10px] font-medium tracking-wider text-ww-success",
          )}
        >
          ивв 32
        </span>
      </div>
    </div>
  );
}
