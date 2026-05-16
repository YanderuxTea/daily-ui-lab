"use client";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import localforage from "localforage";
import { useEffect, useMemo, useState } from "react";
import AdderTasks from "./AdderTasks";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  day: number;
};
export default function DPPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const countCompleted = useMemo(() => {
    return tasks.filter((task) => task.isCompleted).length;
  }, [tasks]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    async function getTasks() {
      const now = new Date();
      try {
        const data = await localforage.getItem<Task[]>("tasks");
        const updatedTasks = (data || []).filter(
          (task) => task.day === now.getDate(),
        );
        await localforage.setItem("tasks", updatedTasks);
        setTasks(updatedTasks);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
      }
    }
    getTasks();
  }, []);
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    async function saveTasks() {
      try {
        await localforage.setItem("tasks", tasks);
      } catch (e) {
        console.log(e);
      }
    }
    saveTasks();
  }, [isLoaded, tasks]);
  return (
    <main
      className={cn(
        "flex px-2.5 py-5 justify-center items-start min-h-screen w-full bg-dp-bg text-dp-text",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col max-w-lg w-full gap-5")}>
        <Header
          countTasks={tasks.length}
          countTasksCompleted={countCompleted}
        />
        <AdderTasks setTasks={setTasks} />
        <div
          className={cn(
            "flex flex-col px-2.5 -mx-2.5 h-100 max-h-100 overflow-y-auto gap-2 overflow-x-clip",
            tasks.length === 0 && "items-center justify-center",
          )}
        >
          {tasks.length === 0 ? (
            <p className={cn("text-[13px] text-dp-ring-track")}>
              Пока задач нет - добавьте первую ✦
            </p>
          ) : (
            <AnimatePresence mode={"popLayout"}>
              {tasks.map((task) => {
                return (
                  <Card
                    key={task.id}
                    task={task}
                    setTasks={setTasks}
                  />
                );
              })}
            </AnimatePresence>
          )}
        </div>
        <Footer
          countTask={tasks.length}
          countTaskCompleted={countCompleted}
        />
      </div>
    </main>
  );
}
