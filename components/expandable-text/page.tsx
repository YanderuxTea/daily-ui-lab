import {
  dockerData,
  njData,
  tsData,
} from "@/data/expandable-text/expandableTextData";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function ETPage() {
  return (
    <main
      className={cn(
        "flex flex-1 items-center justify-center p-2.5 bg-et-bg text-et-text",
        inter.className,
      )}
    >
      <div className={cn("flex flex-col gap-2.5 w-full items-center")}>
        <Widget props={{ height: 60, ...tsData }} />
        <Widget props={{ height: 60, ...njData }} />
        <Widget props={{ height: 60, ...dockerData }} />
      </div>
    </main>
  );
}
