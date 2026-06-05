import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function ASSMPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 bg-asm-bg-main flex-1 text-asm-text-primary",
        inter.className,
      )}
    >
      <Widget />
    </main>
  );
}
