import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function Header({ count }: { count: number }) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center border-b pb-4 border-asm-border/60",
      )}
    >
      <div className={cn("flex flex-col gap-0.5")}>
        <p className={cn("tracking-tight font-bold text-base")}>
          Активные сессии
        </p>
        <p className={cn("text-xs text-asm-text-muted")}>
          Устройства, на которых выполнен вход в ваш аккаунт
        </p>
      </div>
      <span
        className={cn(
          "px-2.5 py-0.5 font-semibold text-xs font-mono bg-asm-border rounded-full",
          jetbrains_mono.className,
        )}
      >
        {count}
      </span>
    </div>
  );
}
