import { cn } from "@/lib/utils";

export default function CurrentSession() {
  return (
    <span
      className={cn(
        "flex flex-row px-1.5 py-0.5 tracking-wider uppercase text-[10px] text-asm-success bg-asm-success/10 rounded gap-1 items-center font-bold",
      )}
    >
      <span
        className={cn(
          "w-1.5 aspect-square rounded-full bg-asm-success animate-pulse",
        )}
      ></span>
      <span>Этот сеанс</span>
    </span>
  );
}
