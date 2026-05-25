import { cn } from "@/lib/utils";

export type Status = "online" | "busy" | "offline";
export default function StatusTag({ status }: { status: Status }) {
  return (
    <div
      className={cn(
        "flex flex-row gap-1.25 px-2.5 py-0.75 text-[11px] max-w-max font-medium rounded-full border items-center",
        status === "online"
          ? "text-sl-success border-sl-success/33 bg-sl-success/18"
          : status === "busy"
            ? "text-sl-warning border-sl-warning/33 bg-sl-warning/18"
            : "text-sl-muted-purple border-sl-muted-purple/33 bg-sl-muted-purple/18",
      )}
    >
      <span
        className={cn(
          "w-1.25 aspect-square rounded-full shrink-0",
          status === "online"
            ? "bg-sl-success"
            : status === "busy"
              ? "bg-sl-warning"
              : "bg-sl-muted-purple",
        )}
      ></span>
      {status === "online" ? "Онлайн" : status === "busy" ? "Занят" : "Офлайн"}
    </div>
  );
}
