"use client";
import {
  TasksBoardData,
  tasksBoardData,
  TypeTask,
} from "@/data/tasks-board/tasksBoardData";
import { fira_code } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import TasksBoardHeader from "./TasksBoardHeader";
import TasksBottom from "./TasksBottom";
import TasksCard from "./TasksCard";

export default function TasksBoardContainer() {
  const [tasksBoard, setTasksBoard] =
    useState<TasksBoardData[]>(tasksBoardData);
  const formatter = useMemo(() => {
    return Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" });
  }, []);
  const [onOverId, setOnOverId] = useState<string>("");
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 max-w-7xl mx-auto w-full justify-center",
      )}
    >
      {tasksBoard.map((board) => {
        return (
          <div
            id={board.id}
            onDrop={() => {}}
            key={board.id}
            className={cn(
              "border border-kb-border p-3.25 rounded-[11px] bg-kb-surface flex flex-col max-w-60 w-full transition-colors duration-200",
              onOverId === board.id && "border-kb-accent",
            )}
          >
            <TasksBoardHeader
              color={board.color}
              title={board.title}
              count={board.tasks.length}
            />
            <div
              className={cn(
                "flex flex-col mb-1.75 gap-2",
                board.tasks.length === 0 &&
                  `text-[#2a2a3e] text-[10px] ${fira_code.className} py-3.5 text-center`,
              )}
            >
              {board.tasks.length > 0 ? (
                board.tasks.map((task) => {
                  return (
                    <TasksCard
                      setTasksBoard={setTasksBoard}
                      key={task.id}
                      id={task.id}
                      date={task.date}
                      tag={task.tag}
                      task={task}
                      user={task.user}
                      setOnOverId={setOnOverId}
                      taskTitle={task.title}
                    />
                  );
                })
              ) : (
                <p>пусто</p>
              )}
            </div>
            <TasksBottom
              formatter={formatter}
              setTasksBoard={setTasksBoard}
              id={board.id}
            />
          </div>
        );
      })}
    </div>
  );
}
