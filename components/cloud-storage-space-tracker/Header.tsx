import { cn } from "@/lib/utils";
import { Cloud } from "lucide-react";
type Props = {
  mediaSize: number;
  docSize: number;
  cacheSize: number;
  maxSizeStorage: number;
};
export default function Header({
  mediaSize,
  docSize,
  cacheSize,
  maxSizeStorage,
}: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <div className={cn("flex flex-col gap-0.5")}>
        <p
          className={cn(
            "font-bold uppercase tracking-wider text-cst-text-muted text-xs",
          )}
        >
          Хранилище
        </p>
        <p className={cn("text-xs text-cst-text-muted font-semibold")}>
          <span className={cn("text-2xl text-cst-text-primary font-extrabold")}>
            {(mediaSize + docSize + cacheSize).toFixed(1)}{" "}
          </span>
          ГБ из {maxSizeStorage} ГБ
        </p>
      </div>
      <div className={cn("text-cst-text-muted/40")}>
        <Cloud size={22} />
      </div>
    </div>
  );
}
