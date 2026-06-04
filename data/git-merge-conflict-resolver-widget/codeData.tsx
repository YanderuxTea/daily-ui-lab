import { cn } from "@/lib/utils";

export const firstCode = (
  <>
    <span className={cn("text-xs text-gcr-text-muted")}>1</span>
    <span className={cn("text-blue-400")}>export const</span>
    <span className={cn("text-amber-300")}>Button</span>
    <span className={cn("text-blue-400")}>=</span>
    <span>{"({ label })"}</span>
    <span className={cn("text-blue-400")}>{"=> {"}</span>
  </>
);
export const secondCodeFirstChoice = (
  <>
    <div className={cn("text-gray-400")}>
      <span>return </span>
      <span className={cn("text-blue-400")}>{"<"}</span>
      <span className={cn("text-pink-400")}>button </span>
      <span className={cn("text-yellow-200")}>className</span>
      <span className={cn("text-blue-400")}>=</span>
      <span className={cn("text-green-300")}>{'"bg-blue-600 px-4 py-2"'}</span>
      <span className={cn("text-blue-400")}>{">"}</span>
      <span>{"{label}"}</span>
      <span className={cn("text-blue-400")}>{"</"}</span>
      <span className={cn("text-pink-400")}>button</span>
      <span className={cn("text-blue-400")}>{">"}</span>
    </div>
  </>
);
export const thirdCodeSecondChoice = (
  <>
    <div className={cn("text-gray-400")}>
      <span>return </span>
      <span className={cn("text-blue-400")}>{"<"}</span>
      <span className={cn("text-pink-400")}>button </span>
      <span className={cn("text-yellow-200")}>className</span>
      <span className={cn("text-blue-400")}>=</span>
      <span className={cn("text-green-300")}>
        {'"bg-blue-600 shadow-xl scale-105"'}
      </span>
      <span className={cn("text-blue-400")}>{">"}</span>
      <span>{"{label}"}</span>
      <span className={cn("text-blue-400")}>{"</"}</span>
      <span className={cn("text-pink-400")}>button</span>
      <span className={cn("text-blue-400")}>{">"}</span>
    </div>
  </>
);
