import { golos_text } from "@/lib/font";
import { cn } from "@/lib/utils";
import Switcher from "./Switcher";

export default function IWSSPage() {
  return (
    <main
      className={cn(
        "bg-[#0F172A] flex-1 w-full flex items-center justify-center p-2.5",
        golos_text.className,
      )}
    >
      <Switcher />
    </main>
  );
}
