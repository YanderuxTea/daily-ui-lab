import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";

export default function GMCRWPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 bg-gcr-bg-main text-gcr-text-code font-mono flex-1",
        jetbrains_mono.className,
      )}
    >
      <Widget />
    </main>
  );
}
