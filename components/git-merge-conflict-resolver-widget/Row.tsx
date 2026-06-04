import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "px-8 flex flex-row gap-3 py-2 items-center transition-colors duration-200 hover:bg-gcr-border/20",
      )}
    >
      {children}
    </div>
  );
}
