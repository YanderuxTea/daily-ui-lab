"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
type Vote = {
  votes: number;
};
export default function Widget() {
  const [votes, setVotes] = useState<Record<string, Vote>>({
    "Next.js": { votes: 40 },
    "Nuxt.js": { votes: 25 },
    Remix: { votes: 30 },
    SvelteKit: { votes: 15 },
  });
  const countsVotes = useMemo(() => {
    return Object.values(votes).reduce(
      (acc, curr) => {
        acc.count += curr.votes;
        return acc;
      },
      { count: 0 },
    );
  }, [votes]);
  const [selectVote, setSelectVote] = useState<string>("");
  const [isVoted, setIsVoted] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "p-8.5 bg-pw-card border border-pw-card-border max-w-sm w-full rounded-[20px] flex flex-col",
      )}
    >
      <div className={cn("flex flex-row gap-2 mb-1 items-center")}>
        <p
          className={cn(
            "px-2 py-0.75 border leading-none text-[11px] font-medium tracking-[0.44px] uppercase text-pw-option-border-selected bg-pw-badge-bg border-pw-badge-border rounded-md",
          )}
        >
          опрос
        </p>
        <p className={cn("text-pw-option-border-hover text-[11px]")}>
          · {Object.keys(votes).length} варианта
        </p>
      </div>
      <p className={cn("mt-3 mb-5 text-[18px] font-semibold leading-[1.3]")}>
        Какой фреймворк ты используешь на основном проекте?
      </p>
      <div className={cn("flex flex-col mb-4.5 gap-2.5")}>
        {Object.keys(votes).map((framework) => {
          const percent = Math.round(
            (votes[framework].votes / countsVotes.count) * 100,
          );
          return (
            <div
              onClick={isVoted ? undefined : () => setSelectVote(framework)}
              key={framework}
              className={cn(
                "flex flex-row justify-between items-center select-none px-3.75 py-3.25 border rounded-[14px] transition-colors duration-300 cursor-pointer bg-pw-surface border-pw-option-border text-sm text-pw-text-muted relative",

                selectVote === framework
                  ? isVoted
                    ? "cursor-default border-pw-option-border-selected"
                    : "border-pw-option-border-selected"
                  : isVoted
                    ? "cursor-default"
                    : "hover:border-pw-option-border-hover",
              )}
            >
              <div className={cn("flex flex-row gap-2.5 items-center")}>
                <div
                  className={cn(
                    "w-4.5 aspect-square rounded-full border shrink-0 border-pw-dot-border relative transition-colors duration-300 flex items-center justify-center",
                    selectVote === framework && "bg-pw-option-border-selected",
                  )}
                >
                  {selectVote === framework && (
                    <div
                      className={cn(
                        "w-2 h-2 aspect-square bg-white rounded-full",
                      )}
                    ></div>
                  )}
                </div>
                {framework}
              </div>
              {isVoted && (
                <p
                  className={cn(
                    selectVote === framework
                      ? "text-pw-accent"
                      : "text-pw-text-faint",
                  )}
                >
                  {percent}%
                </p>
              )}
              <motion.div
                initial={{ width: 0 }}
                animate={isVoted ? { width: `${percent}%` } : undefined}
                className={cn(
                  "inset-y-0 rounded-xl origin-left absolute left-0",
                  selectVote === framework
                    ? "bg-pw-fill-selected"
                    : "bg-pw-fill-idle",
                )}
              ></motion.div>
            </div>
          );
        })}
      </div>
      <div className={cn("flex flex-row justify-between items-center")}>
        <p className={cn("text-xs text-pw-text-faint")}>
          {countsVotes.count} голосов
        </p>
        <button
          disabled={isVoted}
          onClick={
            selectVote.length === 0
              ? undefined
              : () => {
                  setVotes((prev) => {
                    return {
                      ...prev,
                      [selectVote]: {
                        votes: prev[selectVote].votes + 1,
                      },
                    };
                  });
                  setIsVoted(true);
                }
          }
          className={cn(
            "p-3.25 rounded-xl text-white max-w-40 text-sm w-full bg-pw-btn-voted-text cursor-pointer font-medium transition-all duration-200 items-center flex flex-row justify-center disabled:opacity-35 disabled:cursor-default disabled:bg-pw-btn-voted-bg border disabled:border-pw-btn-voted-border disabled:hover:scale-100 disabled:text-pw-accent border-pw-btn-voted-text",
            selectVote.length === 0
              ? "opacity-35 cursor-default"
              : "hover:opacity-88 hover:scale-101",
          )}
        >
          {isVoted ? (
            <>
              <Check size={16} /> Голос учтен
            </>
          ) : (
            "Проголосовать"
          )}
        </button>
      </div>
    </div>
  );
}
