import { weatherData } from "@/data/weather-widget/weatherData";
import { cn } from "@/lib/utils";

export default function WidgetFooter() {
  return (
    <div className={cn("flex flex-col gap-3")}>
      <p className={cn("text-ww-text-muted text-xs font-medium")}>
        Прогноз на сегодня
      </p>
      <div className={cn("grid grid-cols-4 gap-2")}>
        {weatherData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`weather-${index}`}
              className={cn(
                "flex flex-col p-2.5 border rounded-xl items-center gap-2",
                index === 0
                  ? "bg-ww-accent-glow/10 border-ww-accent-glow/30"
                  : "bg-ww-accent-bg/40 border-ww-border/40",
              )}
            >
              <p
                className={cn(
                  "text-[11px]",
                  index === 0
                    ? "text-ww-accent-glow font-medium"
                    : "text-ww-text-muted",
                )}
              >
                {item.time}
              </p>
              <span
                className={cn(
                  index === 0 ? "text-ww-accent-glow" : "text-ww-icon",
                )}
              >
                <Icon size={20} />
              </span>
              <p className={cn("text-xs font-medium")}>{item.temp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
