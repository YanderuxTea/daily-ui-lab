import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function MainCard({ isHide }: { isHide: boolean }) {
  return (
    <div className={cn("flex flex-col gap-4")}>
      <p
        className={cn(
          "text-lg tracking-[0.18em] font-medium font-mono",
          jetbrains_mono.className,
        )}
      >
        {isHide ? "•••• •••• •••• 4292" : "4532 7812 9024 4292"}
      </p>
      <div className={cn("flex flex-row gap-6 items-center")}>
        <div className={cn("flex flex-col")}>
          <p
            className={cn("tracking-wider text-white/50 uppercase text-[9px]")}
          >
            Срок
          </p>
          <p
            className={cn(
              "text-xs font-mono font-semibold",
              jetbrains_mono.className,
            )}
          >
            08/29
          </p>
        </div>
        <div className={cn("flex flex-col")}>
          <p
            className={cn("uppercase tracking-wider text-white/50 text-[9px]")}
          >
            cvv
          </p>
          <p
            className={cn(
              "text-xs font-mono tracking-widest font-semibold",
              jetbrains_mono.className,
            )}
          >
            {isHide ? "•••" : "743"}
          </p>
        </div>
      </div>
    </div>
  );
}
