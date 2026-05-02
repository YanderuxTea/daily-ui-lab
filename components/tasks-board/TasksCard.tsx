"use client";
import { TasksBoardData, TypeTask } from "@/data/tasks-board/tasksBoardData";
import { fira_code } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
type Props = {
  taskTitle: string;
  id: string;
  tag: string;
  date: string;
  user: string;
  task: TypeTask | null;
  setTasksBoard: Dispatch<SetStateAction<TasksBoardData[]>>;
  setOnOverId: Dispatch<SetStateAction<string>>;
};
export default function TasksCard({
  taskTitle,
  task,
  id,
  tag,
  date,
  user,
  setOnOverId,
  setTasksBoard,
}: Props) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragTask, setDragTask] = useState<TypeTask | null>(null);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileDrag={{ zIndex: 100 }}
      animate={{ scale: isDragging ? 0.9 : 1, opacity: isDragging ? 0.5 : 1 }}
      drag
      dragSnapToOrigin={true}
      dragMomentum={false}
      onDragStart={() => {
        setIsDragging(true);
        setDragTask(task);
      }}
      onDrag={(e, info) => {
        const elements = document.elementsFromPoint(
          info.point.x,
          info.point.y - 50,
        );
        const findElemnt = elements.find((elemnt) => elemnt.hasAttribute("id"));
        if (findElemnt) {
          const id = findElemnt.getAttribute("id");
          setOnOverId(id || "");
        }
      }}
      onDragEnd={(e, info) => {
        const elements = document.elementsFromPoint(
          info.point.x,
          info.point.y - 50,
        );
        const findElemnt = elements.find((elemnt) => elemnt.hasAttribute("id"));
        if (findElemnt) {
          const id = findElemnt.getAttribute("id");
          setTasksBoard((prev) => {
            return prev.map((boardPr) => {
              if (id === boardPr.id && dragTask) {
                return {
                  ...boardPr,
                  tasks: Array.from(new Set([...boardPr.tasks, dragTask])),
                };
              }
              return {
                ...boardPr,
                tasks: boardPr.tasks.filter((task) => task.id !== dragTask?.id),
              };
            });
          });
        }
        setOnOverId("");
        setIsDragging(false);
        setDragTask(null);
      }}
      className={cn(
        "flex flex-col gap-3 border relative p-2.5 rounded-[9px] border-kb-border bg-kb-surface-alt cursor-grab transition-colors duration-200 hover:border-kb-border-light",
        isDragging && "cursor-grabbing",
      )}
    >
      <p
        className={cn(
          "pr-1.25 leading-[1.4px] font-medium text-[13px] wrap-break-word",
        )}
      >
        {taskTitle}
      </p>
      <div
        className={cn(
          "flex flex-row justify-between items-center",
          fira_code.className,
        )}
      >
        <span
          className={cn(
            "text-kb-todo bg-kb-todo-bg py-0.5 px-1.5 font-medium rounded-sm text-[9px]",
          )}
        >
          {tag}
        </span>
        <div className={cn("flex flex-row gap-1 items-center")}>
          <div
            className={cn(
              "w-1.25 h-1.25 rounded-full bg-kb-priority-med shrink-0",
            )}
          ></div>
          <p
            className={cn(
              "text-[9px] text-kb-text-muted leading-none",
              fira_code.className,
            )}
          >
            {date}
          </p>
          <div
            className={cn(
              "text-[6px] bg-kb-surface-hover w-4.5 h-4.5 rounded-full flex items-center justify-center border font-bold border-kb-border-light text-kb-text-secondary",
            )}
          >
            {user}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setTasksBoard((prev) => {
            return prev.map((board) => {
              return {
                ...board,
                tasks: board.tasks.filter((task) => task.id !== id),
              };
            });
          });
        }}
        className={cn(
          "absolute top-1 right-1 cursor-pointer text-kb-border-light transition-colors duration-200 hover:text-kb-priority-high",
        )}
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
