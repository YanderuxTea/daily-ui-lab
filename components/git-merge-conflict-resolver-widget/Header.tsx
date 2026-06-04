import { cn } from "@/lib/utils";
import { ArrowLeftRight, Check, Code } from "lucide-react";
import { Choice } from "./Widget";

export default function Header({ choice }: { choice: Choice }) {
  return (
    <div
      className={cn(
        "px-4 py-3 flex flex-row divide-x divide-gcr-border items-center text-xs select-none",
      )}
    >
      <div
        className={cn(
          "flex-1 flex flex-row justify-between pr-4 items-center gap-2.5",
        )}
      >
        <div className={cn("flex flex-row gap-1.5")}>
          <div
            className={cn(" w-3 aspect-square rounded-full bg-[#EF4444]/80")}
          ></div>
          <div
            className={cn(" w-3 aspect-square rounded-full bg-[#F59E0B]/80")}
          ></div>
          <div
            className={cn(" w-3 aspect-square rounded-full bg-[#10B981]/80")}
          ></div>
        </div>
        <div className={cn("flex flex-row gap-2 items-center")}>
          <Code
            size={14}
            className={"text-blue-400"}
          />
          <p className={cn("text-gcr-text-code/80 font-medium")}>Button.tsx</p>
          <span
            className={cn(
              "ml-1 px-1 py-0.5 text-nowrap text-[10px] rounded font-bold flex flex-row gap-0.5 items-center",
              choice === null
                ? "bg-amber-500/10 text-amber-500"
                : "bg-emerald-500/20 text-emerald-400",
            )}
          >
            {choice === null ? (
              "1 Конфликт"
            ) : (
              <>
                <Check size={10} /> Решено
              </>
            )}
          </span>
        </div>
      </div>
      <div
        className={cn(
          "flex-1 pl-4 text-[11px] items-center flex flex-row justify-end gap-2.5",
        )}
      >
        <span
          className={cn(
            "flex flex-row items-center gap-2.5 text-gcr-text-muted",
          )}
        >
          main <ArrowLeftRight size={11} />
        </span>
        <span className={cn("text-gcr-incoming-border")}>
          feature/ui-upgrade
        </span>
      </div>
    </div>
  );
}
