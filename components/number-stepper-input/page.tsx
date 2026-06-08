import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Widget from "./Widget";
import { stepperData } from "@/data/number-stepper-input/numberStepperData";

export default function NSIPage() {
  return (
    <main
      className={cn(
        "flex-1 flex items-center justify-center p-2.5 bg-nsi-bg text-nsi-text",
        inter.className,
      )}
    >
      <div className={cn("flex flex-col gap-2 max-w-md w-full")}>
        {stepperData.map((v) => {
          return (
            <Widget
              key={v.id}
              props={v}
            />
          );
        })}
      </div>
    </main>
  );
}
