import { plus_jakarta_sans } from "@/lib/font";
import { cn } from "@/lib/utils";
import Card from "./Card";

export default function SDCPage() {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex items-center justify-center p-2.5 bg-sdc-bg",
        plus_jakarta_sans.className,
      )}
    >
      <Card />
    </main>
  );
}
