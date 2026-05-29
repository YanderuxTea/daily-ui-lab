import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function APIWPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 flex-1 bg-ai-bg-main text-ai-text-primary",
        inter.className,
      )}
    >
      <Widget />
    </main>
  );
}
