"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "./page";

type Props = {
  setTasks: Dispatch<SetStateAction<Task[]>>;
};
const now = new Date();
export default function AdderTasks({ setTasks }: Props) {
  const [value, setValue] = useState<string>("");
  async function addTask() {
    const trimValue = value.trim();
    if (trimValue.length > 0) {
      setTasks((prev) => [
        ...prev,
        {
          id: uuid(),
          title: trimValue,
          day: now.getDate(),
          isCompleted: false,
        },
      ]);
      setValue("");
    }
  }
  return (
    <div
      className={cn(
        "flex flex-row w-full relative border rounded-[14px] transition-colors duration-300 border-dp-border focus-within:border-dp-border-focus bg-dp-surface items-center",
      )}
    >
      <input
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name={"tasksInput"}
        placeholder={"Добавить задачу на сегодня..."}
        className={cn(
          "outline-none w-full pl-3.5 pr-15 py-4.5 placeholder:text-dp-ring-track text-sm",
        )}
      />
      <button
        onClick={() => {
          addTask();
        }}
        className={cn(
          "absolute right-3.5 w-9 aspect-square flex items-center justify-center rounded-[10px] cursor-pointer transition-all duration-150 bg-dp-accent hover:bg-dp-accent-hover hover:scale-105 active:scale-94",
        )}
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
