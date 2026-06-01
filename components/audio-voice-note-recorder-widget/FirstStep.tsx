import { cn } from "@/lib/utils";
import { Mic } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Step } from "./page";
export type PropsRecorder = {
  setStep: Dispatch<SetStateAction<Step>>;
};
export default function FirstStep({ setStep }: PropsRecorder) {
  return (
    <div className={cn("flex flex-row gap-3 w-full")}>
      <div
        className={cn(
          "text-avr-text-muted flex-1 flex items-center bg-avr-bg-inner border border-avr-border/30 px-4 text-sm rounded-xl select-none",
        )}
      >
        <p>Записать голосовое сообщение...</p>
      </div>
      <button
        onClick={() => setStep(2)}
        className={cn(
          "flex items-center justify-center w-10 aspect-square bg-avr-bg-inner border rounded-xl border-avr-border text-avr-text-muted transition-all duration-150 hover:text-white hover:border-avr-accent hover:bg-avr-accent/10 active:scale-95 cursor-pointer",
        )}
      >
        <Mic size={18} />
      </button>
    </div>
  );
}
