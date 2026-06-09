import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Card from "./Card";
import {
  backendData,
  devOpsData,
  frontendData,
} from "@/data/flip-card/flipCardData";

export default function FCPage() {
  return (
    <main
      className={cn(
        "flex-1 flex items-center justify-center p-2.5 bg-fc-bg text-fc-text",
        inter.className,
      )}
    >
      <div
        className={cn("flex flex-wrap gap-3 w-full justify-center max-w-2xl")}
      >
        <Card props={frontendData} />
        <Card props={backendData} />
        <Card props={devOpsData} />
      </div>
    </main>
  );
}
