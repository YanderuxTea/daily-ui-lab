"use client";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";
import CardTask from "./CardTask";
import { Task } from "./page";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  selectDate: Date;
  formatterHeader: Intl.DateTimeFormat;
  formatterSubHeader: Intl.DateTimeFormat;
};
export default function TasksAdder({
  tasks,
  setTasks,
  selectDate,
  formatterHeader,
  formatterSubHeader,
}: Props) {
  const convertedText = formatterHeader
    .format(selectDate)
    .split(" ")
    .map((w, index) => {
      if (index === 1) {
        return w;
      }
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
  const colors = [
    "bg-mec-violet",
    "bg-mec-success",
    "bg-mec-warning",
    "bg-mec-danger",
    "bg-mec-info",
  ];
  const colorsMap: Record<string, string> = {
    "bg-mec-violet": "bg-mec-violet/9 border-mec-violet/20 text-mec-violet/9",
    "bg-mec-success":
      "bg-mec-success/9 border-mec-success/20 text-mec-success/9",
    "bg-mec-warning":
      "bg-mec-warning/9 border-mec-warning/20 text-mec-warning/9",
    "bg-mec-danger": "bg-mec-danger/9 border-mec-danger/20 text-mec-danger/9",
    "bg-mec-info": "bg-mec-info/9 border-mec-info/20 text-mec-info/9",
  };
  const [selectColor, setSelectColor] = useState<string>("bg-mec-violet");
  const [value, setValue] = useState<string>("");
  function addTask() {
    if (value.trim().length === 0) return;
    const task: Task = {
      id: uuid(),
      color: selectColor,
      colorCard: colorsMap[selectColor],
      date: selectDate,
      task: value.trim(),
    };
    setTasks((prev) => [...prev, task]);
    setSelectColor("bg-mec-violet");
    setValue("");
  }

  return (
    <div className={cn("flex flex-col flex-1 gap-2.5 min-w-40")}>
      <div className={cn("flex flex-col gap-0.5")}>
        <p className={cn("text-[15px] font-semibold")}>{convertedText}</p>
        <p
          className={cn("text-[11px] text-mec-deep", jetbrains_mono.className)}
        >
          {formatterSubHeader.format(selectDate)}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 h-85 overflow-y-auto overflow-x-clip px-2.5 -mx-2.5",
          tasks.length === 0 && "justify-center items-center",
        )}
      >
        {tasks.length > 0 ? (
          <AnimatePresence mode={"popLayout"}>
            {tasks.map((task) => {
              return (
                <CardTask
                  key={task.id}
                  task={task}
                  setTasks={setTasks}
                />
              );
            })}
          </AnimatePresence>
        ) : (
          <p className={cn("text-mec-mid text-[13px]")}>
            Нет событий - добавьте первое
          </p>
        )}
      </div>
      <div className={cn("flex w-full relative")}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          type="text"
          id={"task-adder"}
          placeholder={"Добавить событие..."}
          className={cn(
            "w-full pl-3 pr-12.5 pt-2.5 pb-9.25 placeholder:text-mec-mid text-[13px] outline-none border border-mec-dark rounded-[14px] bg-mec-ink transition-colors duration-200 focus:border-mec-accent",
          )}
        />
        <div
          className={cn(
            "flex flex-row gap-1.5 items-center uppercase absolute bottom-2.5 left-3",
          )}
        >
          <p
            className={cn(
              "mr-0.5 text-mec-mid font-medium text-[11px] tracking-[0.06em]",
            )}
          >
            Цвет
          </p>
          {colors.map((color) => {
            const isCurrentColor = color === selectColor;
            return (
              <div
                onClick={() => setSelectColor(color)}
                key={color}
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-125 origin-center",
                  color,
                  isCurrentColor && "ring-2 ring-mec-info/30",
                )}
              ></div>
            );
          })}
        </div>
        <button
          onClick={() => addTask()}
          className={cn(
            "flex items-center justify-center cursor-pointer absolute right-3 top-2.5 w-7.5 aspect-square bg-mec-violet rounded-lg transition-all duration-200 hover:bg-mec-accent hover:scale-106 active:scale-94 origin-center",
          )}
        >
          <Plus
            size={16}
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  );
}
