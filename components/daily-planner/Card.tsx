"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Task } from "./page";
type Props = {
  task: Task;
  setTasks: Dispatch<SetStateAction<Task[]>>;
};
export default function Card({ task, setTasks }: Props) {
  const { isCompleted, title, id } = task;
  return (
    <motion.div
      layout={"y"}
      exit={{ x: 12, opacity: 0 }}
      className={cn(
        "flex flex-row justify-between px-3.5 py-3 border border-dp-border rounded-xl items-center bg-dp-surface transition-[opacity,color] duration-300",
        isCompleted
          ? "text-dp-text-faint opacity-45"
          : "hover:border-dp-border-hover text-dp-text-task",
      )}
    >
      <div className={cn("items-center flex flex-row gap-3 text-sm")}>
        <div className={cn("relative flex")}>
          <input
            checked={isCompleted}
            onChange={() =>
              setTasks((prev) => {
                return prev.map((t) => {
                  if (t.id === id) {
                    return { ...t, isCompleted: !t.isCompleted };
                  }
                  return t;
                });
              })
            }
            type="checkbox"
            id={`check-${id}`}
            className={cn(
              "appearance-none border w-5 h-5 rounded-md checked:border-dp-accent checked:bg-dp-accent cursor-pointer border-dp-border-hover transition-all duration-200 peer shrink-0",
            )}
          />
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center pointer-events-none text-transparent peer-checked:text-white transition-colors duration-200",
            )}
          >
            <Check
              size={12}
              strokeWidth={4}
            />
          </span>
        </div>
        <span
          className={cn(
            "transition-colors duration-200",
            isCompleted && "line-through text-dp-text-faint",
          )}
        >
          {title}
        </span>
      </div>
      <button
        onClick={() => setTasks((prev) => prev.filter((t) => t.id !== id))}
        className={cn(
          "w-4.75 aspect-square flex items-center justify-center text-dp-ring-track transition-colors duration-300 hover:text-dp-danger cursor-pointer shrink-0",
        )}
      >
        <X size={15} />
      </button>
    </motion.div>
  );
}
