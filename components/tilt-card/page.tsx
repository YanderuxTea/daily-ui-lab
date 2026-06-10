import {
  analiticData,
  deployData,
  safeData,
} from "@/data/tilt-card/tiltCardData";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Card from "./Card";

export default function TCPage() {
  return (
    <main
      className={cn(
        "flex flex-1 items-center justify-center p-2.5 bg-tc-bg text-tc-text flex-wrap gap-3.5",
        inter.className,
      )}
    >
      <Card props={deployData} />
      <Card props={analiticData} />
      <Card props={safeData} />
    </main>
  );
}
