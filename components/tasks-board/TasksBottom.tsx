"us client";
import { TasksBoardData } from "@/data/tasks-board/tasksBoardData";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";
type Props = {
  setTasksBoard: Dispatch<SetStateAction<TasksBoardData[]>>;
  id: string;
  formatter: Intl.DateTimeFormat;
};
export default function TasksBottom({ id, setTasksBoard, formatter }: Props) {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  return (
    <div>
      {isAdd ? (
        <div className={cn("flex flex-col gap-1")}>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows={2}
            name="nameTask"
            placeholder={"Название задачи..."}
            className={cn(
              "resize-none outline-none border border-kb-border text-[16px] bg-kb-surface-hover py-1.75 px-2.25 rounded-[7px] focus:border-kb-accent transition-colors duration-200 placeholder:text-kb-text-muted",
            )}
          />
          <div className={cn("flex flex-row gap-1 text-[11px]")}>
            <button
              onClick={() => {
                if (task.trim().length === 0) {
                  setIsAdd(false);
                  return;
                }
                setTasksBoard((prev) => {
                  return prev.map((board) => {
                    if (board.id === id) {
                      return {
                        ...board,
                        tasks: [
                          ...board.tasks,
                          {
                            id: uuid(),
                            title: task,
                            tag: "Задача",
                            date: formatter.format(new Date()),
                            user: "вы",
                          },
                        ],
                      };
                    }
                    return board;
                  });
                });
                setIsAdd(false);
                setTask("");
              }}
              className={cn(
                "cursor-pointer bg-kb-accent hover:bg-kb-accent-hover py-1.25 px-2.75 leading-none rounded-md transition-colors duration-200 font-semibold",
              )}
            >
              Добавить
            </button>
            <button
              onClick={() => setIsAdd(false)}
              className={cn(
                "cursor-pointer border border-kb-border text-kb-text-secondary hover:text-kb-text-primary py-1.25 px-2.75 leading-none rounded-md transition-colors duration-200",
              )}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsAdd(true)}
          className={cn(
            "py-1.75 px-2.25 border border-dashed border-kb-border text-kb-text-muted rounded-[7px] cursor-pointer transition-colors duration-200 text-[11px] font-medium hover:border-kb-accent hover:text-kb-accent leading-none",
          )}
        >
          <p>+ Добавить задачу</p>
        </div>
      )}
    </div>
  );
}
