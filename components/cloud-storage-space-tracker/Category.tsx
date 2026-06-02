import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
type Props = {
  classname: string;
  title: string;
  size: string;
};
export default function Category({ classname, title, size }: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-center text-xs")}>
      <div className={cn("flex flex-row gap-2 items-center")}>
        <span
          className={cn(
            "w-2 aspect-square rounded-full transition-colors duration-150",
            classname,
          )}
        ></span>
        <p>{title}</p>
      </div>
      <p
        className={cn(
          "text-cst-text-muted font-mono",
          jetbrains_mono.className,
        )}
      >
        {size}
      </p>
    </div>
  );
}
