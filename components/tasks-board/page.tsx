import TasksBoardContainer from "@/components/tasks-board/TasksBoardContainer";
import { fira_code, onest } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function TBPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 w-full flex-1 bg-kb-bg text-kb-text-primary flex-col gap-3",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col")}>
        <p className={cn("text-[17px] font-bold -tracking-[0.3px]")}>
          Доска задач
        </p>
        <p
          className={cn(
            "text-[11px] mt-0.75 text-kb-priority-low",
            fira_code.className,
          )}
        >
          {"// drag & drop между колонками · кликни × чтобы удалить"}
        </p>
      </div>
      <TasksBoardContainer />
    </main>
  );
}
