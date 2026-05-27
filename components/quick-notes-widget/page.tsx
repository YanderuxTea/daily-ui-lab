import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function QNWPage() {
  return (
    <main
      className={cn(
        "w-full flex-1 flex items-center justify-center bg-qn-bg p-2.5 bg-radial-[circle_at_center_top] to-35% from-qn-accent/15 to-transparent",
        manrope.className,
      )}
    >
      <Widget />
    </main>
  );
}
