"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ConditionsType } from "./Widget";
type Props = {
  setCondtions: Dispatch<SetStateAction<ConditionsType>>;
  countCheck: number;
};
export default function Input({ setCondtions, countCheck }: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const length = /^.{8,}$/;
    const upLetter = /[A-ZА-Я]/;
    const dch = /[a-zA-Z0-9]/;
    const spec = /[^a-zA-Z0-9]/;
    setCondtions((prev) => {
      return {
        ...prev,
        length: length.test(password),
        upLetter: upLetter.test(password),
        dch: dch.test(password),
        specS: spec.test(password),
      };
    });
  }, [password, setCondtions]);
  return (
    <div className={cn("flex flex-col gap-5")}>
      <div className={cn("relative flex items-center")}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          type={visible ? "text" : "password"}
          autoComplete={"off"}
          id={"pass-input"}
          placeholder={"Введите пароль"}
          className={cn(
            "outline-none border w-full py-3 pl-4 pr-12 rounded-xl border-psm-border transition-all duration-300 focus:ring-3 focus:ring-psm-accent/30 placeholder:text-psm-muted",
          )}
        />
        <button
          className={cn(
            "absolute right-3 text-psm-cross cursor-pointer transition-colors duration-300 hover:text-psm-text",
          )}
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
      <div
        className={cn(
          "flex flex-row justify-between gap-1.5 transition-opacity duration-200",
          password.trim().length > 0 ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className={cn(
            "h-3 rounded-full flex-1 bg-psm-cross/30 transition-colors duration-200",
            countCheck === 1
              ? "bg-psm-weak"
              : countCheck === 2
                ? "bg-psm-fair"
                : countCheck === 3
                  ? "bg-psm-good"
                  : countCheck === 4 && "bg-psm-strong",
          )}
        ></div>
        <div
          className={cn(
            "h-3 rounded-full flex-1 bg-psm-cross/30 transition-colors duration-200",
            countCheck === 2
              ? "bg-psm-fair"
              : countCheck === 3
                ? "bg-psm-good"
                : countCheck === 4 && "bg-psm-strong",
          )}
        ></div>
        <div
          className={cn(
            "h-3 rounded-full flex-1 bg-psm-cross/30 transition-colors duration-200",
            countCheck === 3
              ? "bg-psm-good"
              : countCheck === 4 && "bg-psm-strong",
          )}
        ></div>
        <div
          className={cn(
            "h-3 rounded-full flex-1 bg-psm-cross/30 transition-colors duration-200",
            countCheck === 4 && "bg-psm-strong",
          )}
        ></div>
      </div>
    </div>
  );
}
