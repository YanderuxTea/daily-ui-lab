import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import Button from "./Button";

export default function SDFABPage() {
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 flex-1 w-full text-sd-text bg-sd-bg",
        onest.className,
      )}
    >
      <Button />
    </main>
  );
}
