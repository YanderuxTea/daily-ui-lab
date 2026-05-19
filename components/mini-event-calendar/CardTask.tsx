"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Task } from "./page";

type Props = {
  task: Task;
  setTasks: Dispatch<SetStateAction<Task[]>>;
};
export default function CardTask({ task, setTasks }: Props) {
  const { color, colorCard, id, task: taskText } = task;
  return (
    <motion.div
      exit={{ x: 20, opacity: 0 }}
      layout={"y"}
      className={cn(
        "flex flex-row gap-2.5 justify-between border px-3 py-2.5 items-start rounded-[10px]",
        colorCard,
      )}
    >
      <div className={cn("w-0.75 h-full rounded-full", color)}></div>
      <span
        className={cn(
          "text-mec-lavender text-[13px] flex-1 leading-1.4 break-all",
        )}
      >
        {taskText}
      </span>
      <button
        onClick={() => setTasks((prev) => prev.filter((t) => t.id !== id))}
        className={cn(
          "text-mec-mid cursor-pointer transition-colors duration-200 hover:text-mec-danger",
        )}
      >
        <X size={13} />
      </button>
    </motion.div>
  );
}
