import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function WWPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 min-h-screen w-full bg-ww-bg-primary text-ww-text-main",
        inter.className,
      )}
    >
      <Widget />
    </main>
  );
}
