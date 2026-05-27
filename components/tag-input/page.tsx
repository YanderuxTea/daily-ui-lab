import { golos_text } from "@/lib/font";
import { cn } from "@/lib/utils";
import Card from "./Card";

export default function TIPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 bg-ti-bg flex-1 w-full",
        golos_text.className,
      )}
    >
      <Card />
    </main>
  );
}
