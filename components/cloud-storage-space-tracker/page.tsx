import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function CSSTPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center flex-1 p-2.5 bg-cst-bg-main text-cst-text-primary",
        manrope.className,
      )}
    >
      <Widget />
    </main>
  );
}
