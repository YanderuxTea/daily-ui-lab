import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className={cn("flex flex-col gap-1")}>
      <p className={cn("text-2xl font-bold text-qn-text -tracking-[0.96px]")}>
        ✦ Быстрые заметки
      </p>
      <p className={cn("text-sm text-qn-text-muted")}>
        Сохраняй мысли пока не забыл
      </p>
    </div>
  );
}
