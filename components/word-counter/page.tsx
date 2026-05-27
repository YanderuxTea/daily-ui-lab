"use client";
import { golos_text, jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import Counter from "./Counter";
export default function WCPage() {
  const regex = /\p{L}+/gu;
  const [text, setText] = useState<string>("");
  const [countWord, setCountWord] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");
  const [isUnlimited, setIsUnlimited] = useState<boolean>(true);
  const limitInput = useRef<HTMLInputElement | null>(null);
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    setCountWord(e.target.value.match(regex)?.length || 0);
  }
  return (
    <main
      className={cn(
        "flex justify-center py-5 px-2.5 flex-1 w-full bg-wc-bg text-wc-text",
        golos_text.className,
      )}
    >
      <div className={cn("flex flex-col gap-4 max-w-3xl w-full")}>
        <div className={cn("flex flex-row justify-between items-center")}>
          <p className={cn("text-[17px] font-semibold")}>Счётчик слов</p>
          <div className={"flex flex-row gap-3"}>
            <input
              name={"limiter"}
              ref={limitInput}
              disabled={isUnlimited}
              type="text"
              value={limit}
              inputMode="numeric"
              placeholder={"Лимит..."}
              className={cn(
                "border outline-none max-w-25 w-full disabled:cursor-not-allowed px-2.75 py-1.25 text-[13px] transition-all duration-300 rounded-[10px] bg-wc-surface border-wc-border focus:border-wc-ta-focus-border placeholder:text-wc-placeholder",
                jetbrains_mono.className,
                isUnlimited ? "opacity-30" : "opacity-100",
              )}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) {
                  return;
                }
                setLimit(e.target.value.trim());
              }}
            />
            <button
              className={cn(
                "border cursor-pointer py-1.25 px-3.25 font-medium text-xs text-wc-chip-text transition-all duration-300 rounded-lg border-wc-border bg-wc-surface-hover",
                !isUnlimited &&
                  "bg-wc-chip-active-bg border-wc-chip-active-border text-wc-chip-active-text",
              )}
              onClick={() => {
                setIsUnlimited((prev) => !prev);
                requestAnimationFrame(() => {
                  limitInput.current?.focus();
                });
              }}
            >
              {isUnlimited ? "Без лимита" : "С лимитом"}
            </button>
          </div>
        </div>
        <textarea
          rows={7}
          placeholder={"Начните вводить текст..."}
          value={text}
          onChange={(e) => handleChange(e)}
          name="textInput"
          className={cn(
            "border outline-none resize-none text-[15px] leading-1.7 px-5 py-4.5 rounded-2xl bg-wc-surface border-wc-border placeholder:text-wc-placeholder transform-colors duration-300 focus:border-wc-ta-focus-border",
          )}
        />
        <Counter
          isUnlimited={isUnlimited}
          limit={Number(limit)}
          count={countWord}
        />
      </div>
    </main>
  );
}
