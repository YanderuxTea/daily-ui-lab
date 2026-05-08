import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { ConditionsType } from "./Widget";
type Props = {
  countCond: number;
  conditions: ConditionsType;
};
export default function Conditions({ countCond, conditions }: Props) {
  const cond = [
    "Минимум 8 символов",
    "Заглавная буква",
    "Цифра/буква",
    "Специальный символ",
  ];
  return (
    <div className={cn("flex flex-col")}>
      <p
        className={cn(
          "text-center text-sm transition-all duration-200",
          countCond === 0 ? "opacity-0 text-transparent" : "opacity-100",
          countCond === 1
            ? "text-psm-weak"
            : countCond === 2
              ? "text-psm-fair"
              : countCond === 3
                ? "text-psm-good"
                : countCond === 4 && "text-psm-strong",
        )}
      >
        {countCond === 1
          ? "Слабый"
          : countCond === 2
            ? "Средний"
            : countCond === 3
              ? "Хороший"
              : countCond === 4
                ? "Надежный"
                : "Введите пароль"}
      </p>
      <div className={cn("flex flex-col gap-3")}>
        {cond.map((item, index) => {
          const check =
            (index === 0 && conditions["length"]) ||
            (index === 1 && conditions["upLetter"]) ||
            (index === 2 && conditions["dch"]) ||
            (index === 3 && conditions["specS"]);
          return (
            <div
              key={item + index}
              className={cn("flex flex-row gap-3 text-psm-muted items-center")}
            >
              <span className={cn(check && "text-psm-check scale-115")}>
                {check ? <Check size={20} /> : <X size={20} />}
              </span>
              <p className={cn("text-sm")}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
