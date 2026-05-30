import { cn } from "@/lib/utils";

export default function Header({ isBlocked }: { isBlocked: boolean }) {
  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <div className={cn("flex flex-col")}>
        <p className={cn("font-semibold text-sm")}>Виртуальная карта</p>
        <p className={cn("text-[11px] text-vcm-text-muted")}>
          Цифровой счет • {isBlocked ? "Заморожена" : "Активна"}
        </p>
      </div>
      <p
        className={cn(
          "tracking-wider font-bold text-white/40 text-xs italic uppercase select-none",
        )}
      >
        Premium
      </p>
    </div>
  );
}
