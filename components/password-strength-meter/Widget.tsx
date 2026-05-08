"use client";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import Conditions from "./Conditions";
import Input from "./Input";
export type ConditionsType = {
  length: boolean;
  upLetter: boolean;
  dch: boolean;
  specS: boolean;
};
export default function Widget() {
  const [conditions, setConditions] = useState<ConditionsType>({
    length: false,
    upLetter: false,
    dch: false,
    specS: false,
  });
  const countCheck = useMemo(() => {
    return Object.values(conditions).reduce(
      (acc, curr) => {
        if (curr) {
          acc.count += 1;
        }
        return acc;
      },
      { count: 0 },
    );
  }, [conditions]);
  return (
    <div
      className={cn(
        "flex flex-col text-center border max-w-md w-full gap-6 rounded-2xl border-psm-border bg-psm-surface p-6 shadow-2xl",
      )}
    >
      <h1 className={cn("font-bold text-2xl")}>Индикатор силы пароля</h1>
      <Input
        countCheck={countCheck.count}
        setCondtions={setConditions}
      />
      <Conditions
        conditions={conditions}
        countCond={countCheck.count}
      />
    </div>
  );
}
