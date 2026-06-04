import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Choice({
  classname,
  children,
}: {
  classname: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col border-l-4", classname)}>{children}</div>
  );
}
