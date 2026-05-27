import {
  colorsGroup,
  settingsGroup,
  sizeGroup,
} from "@/data/toggle-switch/toggleSwitchData";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import Switcher from "./Switcher";

export default function TSPage() {
  return (
    <main
      className={cn(
        "flex flex-col gap-5 items-center justify-center p-2.5 flex-1 w-full bg-ts-dark-2 text-ts-dark-1",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col gap-2.5 max-w-md w-full")}>
        <p
          className={cn("uppercase text-[11px] font-medium tracking-[0.08em]")}
        >
          Настройки уведомлений
        </p>
        <div className={cn("flex flex-col gap-2")}>
          {settingsGroup.map((item, index) => {
            return (
              <div
                key={`settings-${index}`}
                className={cn(
                  "flex flex-row justify-between transition-colors duration-150 border px-4 py-3.5 border-ts-dark-5 rounded-[14px] bg-ts-dark-4",
                  item.disabled ? "opacity-40" : "hover:border-ts-primary",
                )}
              >
                <div className={cn("flex flex-col")}>
                  <p className={cn("text-ts-light-purple font-medium text-sm")}>
                    {item.title}
                  </p>
                  <p className={cn("text-ts-muted text-[11px]")}>
                    {item.description}
                  </p>
                </div>
                <Switcher props={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={cn("flex flex-col gap-2.5 max-w-md w-full")}>
        <p
          className={cn("uppercase text-[11px] font-medium tracking-[0.08em]")}
        >
          Размеры
        </p>
        <div className={cn("flex flex-row gap-5 items-center")}>
          {sizeGroup.map((item, index) => {
            return (
              <div
                className={cn("flex flex-row gap-2.5 items-center")}
                key={`size-${index}`}
              >
                <Switcher props={item} />
                <p className={cn("text-xs text-ts-muted")}>{item.size}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cn("flex flex-col gap-2.5 max-w-md w-full")}>
        <p
          className={cn("uppercase text-[11px] font-medium tracking-[0.08em]")}
        >
          Цвета
        </p>
        <div className={cn("flex flex-wrap gap-4")}>
          {colorsGroup.map((item, index) => {
            return (
              <Switcher
                props={item}
                key={`color-${index}`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
