import Message from "@/components/reaction-bar/Message";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function RBPage() {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex items-center justify-center bg-rb-bg p-2.5",
        onest.className,
      )}
    >
      <Message />
    </main>
  );
}
