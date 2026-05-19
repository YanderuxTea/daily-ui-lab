"use client";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import localforage from "localforage";
import { useEffect, useMemo, useState } from "react";
import Calendar from "./Calendar";
import TasksAdder from "./TasksAdder";
export type Task = {
  id: string;
  color: string;
  colorCard: string;
  date: Date;
  task: string;
};
export default function MECPage() {
  const [selectDate, setSelectDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0)),
  );
  const [tasks, setTasks] = useState<Task[]>([]);
  const formatterHeaderCalendar = useMemo(() => {
    return new Intl.DateTimeFormat("ru-RU", {
      month: "long",
      year: "numeric",
    });
  }, []);
  const formatterHeaderAdder = useMemo(() => {
    return new Intl.DateTimeFormat("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }, []);
  const formatterSubHeaderAdder = useMemo(() => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }, []);
  useEffect(() => {
    async function loadTasks() {
      try {
        const task =
          (await localforage.getItem<Task[]>("tasks-dayli-ui")) || [];
        setTasks(task);
      } catch (e) {
        console.log(e);
      }
    }
    loadTasks();
  }, []);
  useEffect(() => {
    async function saveTasks() {
      try {
        await localforage.setItem("tasks-dayli-ui", tasks);
      } catch (e) {
        console.log(e);
      }
    }
    saveTasks();
  }, [tasks]);
  const tasksCurrentDay = useMemo(() => {
    return tasks.filter((task) => task.date.getTime() === selectDate.getTime());
  }, [selectDate, tasks]);
  return (
    <main
      className={cn(
        "flex justify-center min-h-screen w-full bg-mec-black px-2.5 py-5 text-mec-light",
        onest.className,
      )}
    >
      <div
        className={cn("flex flex-wrap gap-5 max-w-xl w-full justify-center")}
      >
        <Calendar
          tasks={tasks}
          setSelectDate={setSelectDate}
          selectDate={selectDate}
          formatterHeader={formatterHeaderCalendar}
        />
        <TasksAdder
          setTasks={setTasks}
          tasks={tasksCurrentDay}
          selectDate={selectDate}
          formatterHeader={formatterHeaderAdder}
          formatterSubHeader={formatterSubHeaderAdder}
        />
      </div>
    </main>
  );
}
