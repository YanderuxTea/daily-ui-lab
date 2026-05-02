import { fira_code } from "@/lib/font";
import { cn } from "@/lib/utils";
type Props = {
  color: string;
  title: string;
  count: number;
};
export default function TasksBoardHeader({ color, title, count }: Props) {
  return (
    <div className={cn("flex flex-row justify-between items-center mb-2.75")}>
      <div className={cn("flex flex-row gap-2 items-center")}>
        <div className={cn("rounded-full w-1.75 aspect-square", color)}></div>
        <p
          className={cn(
            "text-[10px] uppercase text-kb-text-secondary font-semibold tracking-[0.8px]",
          )}
        >
          {title}
        </p>
      </div>
      <span
        className={cn(
          "py-px px-1.5 rounded-sm text-[10px] text-kb-text-secondary bg-kb-surface-alt border border-kb-border font-normal leading-none",
          fira_code.className,
        )}
      >
        {count}
      </span>
    </div>
  );
}
