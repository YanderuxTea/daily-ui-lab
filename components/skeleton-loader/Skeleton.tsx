import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Skeleton({ classname }: { classname: string }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-size-[600px_100%] bg-linear-90 from-0% from-sl-bg-primary via-40% via-sl-bg-darker to-80% to-sl-bg-primary animate-shimmer",
        classname,
      )}
    ></div>
  );
}
