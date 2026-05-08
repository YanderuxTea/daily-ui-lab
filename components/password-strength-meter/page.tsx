import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function PSMPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 w-full min-h-screen bg-psm-bg text-psm-text",
        onest.className,
      )}
    >
      <Widget />
    </main>
  );
}
