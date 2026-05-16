import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
type Props = {
  countTasks: number;
  countTasksCompleted: number;
};
const formatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const now = new Date();

export default function Header({ countTasks, countTasksCompleted }: Props) {
  const percent = Math.trunc((countTasksCompleted / countTasks) * 100) || 0;
  return (
    <div className={cn("flex flex-row justify-between")}>
      <div className={cn("flex flex-col gap-1")}>
        <p
          className={cn(
            "uppercase text-[11px] text-dp-text-faint tracking-[0.08em]",
            jetbrains_mono.className,
          )}
        >
          {formatter.format(now).replace("г.", "")}
        </p>
        <p className={cn("font-semibold text-[22px]")}>Мой день</p>
      </div>
      <div
        className={cn(
          "relative flex items-center justify-center w-13 aspect-square",
        )}
      >
        <svg
          width={52}
          height={52}
          viewBox="0 0 52 52"
          fill="none"
          className={cn("absolute")}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={26}
            cy={26}
            strokeWidth={4}
            r={24}
            strokeDasharray={150.8}
            className={cn("stroke-dp-bar-track")}
          ></circle>
          <circle
            cx={26}
            cy={26}
            strokeWidth={4}
            r={24}
            strokeDasharray={150.8}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeDashoffset={150.8 - (150.8 * percent) / 100}
            className={cn(
              "transition-all duration-200 ease-linear stroke-dp-accent -rotate-90 origin-center",
              countTasks > 0 &&
                (percent === 100
                  ? "stroke-dp-success"
                  : percent >= 75
                    ? "stroke-dp-accent-mid"
                    : "stroke-dp-accent"),
            )}
          ></circle>
        </svg>
        <span
          className={cn(
            "text-[11px] font-medium text-dp-text-muted",
            jetbrains_mono.className,
          )}
        >
          {percent}%
        </span>
      </div>
    </div>
  );
}
