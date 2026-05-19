"use client";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import HeaderCalendar from "./HeaderCalendar";
import WeekDays from "./WeekDays";
import { Task } from "./page";
type Props = {
  formatterHeader: Intl.DateTimeFormat;
  selectDate: Date;
  setSelectDate: Dispatch<SetStateAction<Date>>;
  tasks: Task[];
};
export default function Calendar({
  formatterHeader,
  selectDate,
  setSelectDate,
  tasks,
}: Props) {
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const firstDateOfMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1,
  );
  const dayOfWeek = firstDateOfMonth.getDay();
  const convertDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const gridStartDate = new Date(firstDateOfMonth);
  gridStartDate.setDate(gridStartDate.getDate() - convertDay);
  const daysInCurrentMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0,
  );
  const totalCells =
    daysInCurrentMonth.getDate() + convertDay <= 28
      ? 28
      : daysInCurrentMonth.getDate() + convertDay <= 35
        ? 35
        : 42;
  const days = Array.from({ length: totalCells }, (_, i) => {
    const day = new Date(gridStartDate);
    day.setDate(gridStartDate.getDate() + i);
    return day;
  });
  return (
    <div className={cn("flex flex-col gap-4 select-none")}>
      <HeaderCalendar
        viewDate={viewDate}
        setViewDate={setViewDate}
        formatterHeader={formatterHeader}
      />
      <WeekDays />
      <div className={"grid grid-cols-7 gap-0.5"}>
        {days.map((day) => {
          const isCurrentDay =
            new Date().setHours(0, 0, 0, 0) === day.getTime();
          const isSelectDay = selectDate.setHours(0, 0, 0, 0) === day.getTime();
          const isCurrentMonth = viewDate.getMonth() === day.getMonth();
          const allowTasks = tasks.some(
            (task) => task.date.getTime() === day.getTime(),
          );
          const tasksArray = tasks
            .filter((t) => t.date.getTime() === day.getTime())
            .slice(0, 3);
          return (
            <div
              onClick={() => setSelectDate(new Date(day.setHours(0, 0, 0, 0)))}
              key={`day-${day}`}
              className={cn(
                "flex flex-col items-center justify-center w-9.5 aspect-square rounded-[10px] cursor-pointer transition-colors duration-200",
                isSelectDay
                  ? "text-white bg-mec-violet"
                  : isCurrentDay
                    ? ""
                    : isCurrentMonth
                      ? "text-mec-muted"
                      : "text-mec-secondary",
                !isSelectDay && "hover:bg-mec-primary",
              )}
            >
              <div
                className={cn(
                  "flex flex-col items-center justify-center w-8 aspect-square rounded-[10px]",
                  isCurrentDay && "border border-mec-violet",
                )}
              >
                <p className={cn("text-[13px] font-semibold")}>
                  {day.getDate()}
                </p>
                {allowTasks && (
                  <div
                    className={cn(
                      "flex flex-row gap-0.5 w-full justify-center",
                    )}
                  >
                    {tasksArray.map((task) => {
                      return (
                        <div
                          key={`${task.id}-calendar`}
                          className={cn(
                            "rounded-full w-1 h-1 shrink-0",
                            isSelectDay ? "bg-white/70" : task.color,
                          )}
                        ></div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
