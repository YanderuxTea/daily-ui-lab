import {
  bashData,
  jsonData,
  tsData,
} from "@/data/code-snippet-block/codeSnippetData";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Card from "./Card";

export default function CSBPage() {
  return (
    <main
      className={cn(
        "flex flex-1 items-center justify-center bg-csb-bg text-csb-text p-2.5",
        inter.className,
      )}
    >
      <div className={cn("flex flex-col gap-2.5 w-full items-center")}>
        <Card props={tsData} />
        <Card props={bashData} />
        <Card props={jsonData} />
      </div>
    </main>
  );
}
