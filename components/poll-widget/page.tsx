import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function PWPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center w-full min-h-screen p-2.5 bg-pw-bg text-pw-text",
        onest.className,
      )}
    >
      <Widget />
    </main>
  );
}
