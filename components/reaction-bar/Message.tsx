"use client";
import { Emoji, emojis, reactions } from "@/data/reaction-bar/reactionBarData";
import { fira_code, onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
export interface Reaction extends Emoji {
  author: string;
}
type ReactionMap = Record<string, Reaction[]>;
export default function Message() {
  const [reactionData, setReactionData] = useState<Reaction[]>(reactions);
  const [open, setOpen] = useState<boolean>(false);
  const buttonAdd = useRef<HTMLDivElement | null>(null);
  const reactionsMemo = useMemo(() => {
    return reactionData.reduce<ReactionMap>((acc, curr) => {
      if (!acc[curr.id]) {
        acc[curr.id] = [];
      }
      acc[curr.id].push(curr);

      return acc;
    }, {});
  }, [reactionData]);
  useEffect(() => {
    function handleClose(e: MouseEvent) {
      if (open && !buttonAdd.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [open]);
  function handleReaction(reaction: Emoji["id"]) {
    const emoji = emojis.find((r) => r.id === reaction);
    setReactionData((prev) => {
      if (prev.some((r) => r.id === reaction && r.author === "you")) {
        return prev.filter((r) => !(r.author === "you" && r.id === reaction));
      }
      return [
        ...prev,
        { id: reaction, author: "you", emoji: emoji?.emoji || "" },
      ];
    });
  }
  return (
    <div className={cn("flex flex-col gap-3 max-w-77 w-full sm:max-w-md")}>
      <div
        className={cn(
          "px-4 py-3.5 border text-rb-text-primary rounded-[10px] border-rb-border bg-rb-surface flex flex-col gap-1.5",
        )}
      >
        <p className={cn("text-[13px]")}>
          Запушил новый компонент — Kanban с drag & drop. Получилось чисто, без
          лишних зависимостей. Смотрите в ветке{" "}
          <span className={cn("text-xs text-rb-accent", fira_code.className)}>
            feat/kanban-board
          </span>
        </p>
        <p
          className={cn("text-[10px] text-rb-text-muted", fira_code.className)}
        >
          {"// github · aleksei · 2 часа назад"}
        </p>
      </div>
      <div
        className={cn("flex flex-wrap gap-2 text-[15px]", fira_code.className)}
      >
        <AnimatePresence
          mode={"popLayout"}
          initial={false}
        >
          {Object.entries(reactionsMemo).map(([id, item]) => {
            return (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                onClick={() => {
                  handleReaction(id as keyof Emoji);
                }}
                whileTap={{ scale: 0.9 }}
                key={id}
                className={cn(
                  "border bg-rb-surface border-rb-border px-2.5 py-1.25 leading-none flex flex-row items-center rounded-[7px] gap-1 cursor-pointer select-none transition-colors duration-200 hover:bg-rb-surface-alt hover:border-rb-border-hover",
                  item.some((r) => r.author === "you") &&
                    "bg-rb-active-bg border-rb-active-border",
                )}
              >
                {item[0].emoji}
                <AnimatePresence mode={"popLayout"}>
                  <motion.span
                    key={item.length + id}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "text-[11px] text-rb-text-muted",
                      item.some((r) => r.author === "you") && "text-rb-accent",
                    )}
                  >
                    {item.length}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            );
          })}
        </AnimatePresence>

        <div className={cn("relative")}>
          <motion.div
            layout
            ref={buttonAdd}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className={cn(
              "w-7.5 aspect-square border border-dashed bg-rb-surface text-rb-text-muted leading-none border-rb-border flex items-center justify-center select-none transition-colors duration-200 cursor-pointer rounded-[7px] hover:text-rb-accent hover:border-rb-accent",
              onest.className,
            )}
          >
            +
          </motion.div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "p-2 border absolute bottom-9 bg-rb-surface-alt border-rb-border-light rounded-[10px] grid grid-rows-[auto_1fr] grid-cols-[1fr_1fr_1fr] gap-2 right-1/2 translate-x-1/2 min-w-32.5",
                )}
              >
                <div
                  className={cn(
                    "col-span-3 text-[9px] text-rb-text-muted",
                    fira_code.className,
                  )}
                >
                  {"// выбери реакцию"}
                </div>
                {emojis
                  .filter((e) => !Object.keys(reactionsMemo).includes(e.id))
                  .map((item) => {
                    return (
                      <div
                        onClick={() => {
                          handleReaction(item.id as keyof Emoji);
                          setOpen(false);
                        }}
                        key={`${item.id}-picker`}
                        className={cn(
                          "flex items-center justify-center w-8 h-6.5 cursor-pointer transition-colors duration-200 hover:bg-rb-border text-[18px] select-none rounded-md",
                        )}
                      >
                        {item.emoji}
                      </div>
                    );
                  })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
