import { cn } from "@/lib/utils";
import { Choice } from "./Widget";

export default function Footer({ choice }: { choice: Choice }) {
  return (
    <div
      className={cn(
        "py-2.5 px-4 flex flex-row justify-between items-center text-gcr-text-muted",
      )}
    >
      <div className={cn("flex flex-row gap-1.5 items-center text-xs")}>
        <span
          className={cn(
            "w-2 aspect-square rounded-full",
            choice === 0 || choice === 1
              ? "bg-gcr-current-border"
              : "bg-amber-500 animate-pulse",
          )}
        ></span>
        <span>
          {choice === 0 || choice === 1
            ? "Изменения успешно применены. Конфликтов нет."
            : "Ожидание разрешения конфликта слияния..."}
        </span>
      </div>
      <p className={cn("text-[11px] font-medium")}>UTF-8</p>
    </div>
  );
}
