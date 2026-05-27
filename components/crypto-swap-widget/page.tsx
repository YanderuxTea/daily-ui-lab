import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function CSWPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 flex-1 text-white bg-csw-bg-main",
        inter.className,
      )}
    >
      <Widget />
    </main>
  );
}
