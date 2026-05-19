import { cn } from "@/lib/utils";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export default function WeekDays() {
  return (
    <div className={cn("grid grid-cols-7 gap-0.5")}>
      {weekDays.map((day, index) => (
        <div
          key={day}
          className={cn("w-9.5 flex items-center justify-center py-1")}
        >
          <p
            className={cn(
              "uppercase text-mec-mid font-semibold text-[10px] tracking-[0.06em]",
              index >= 5 && "text-mec-yellow",
            )}
          >
            {day}
          </p>
        </div>
      ))}
    </div>
  );
}
