"use client";
import { tags } from "@/data/tag-input/tagInputData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
type Props = {
  choiseTags: string[];
  setChoiseTags: Dispatch<SetStateAction<string[]>>;
  setIsError: Dispatch<SetStateAction<string>>;
  isError: string;
};
export default function TagsInput({
  choiseTags,
  setChoiseTags,
  setIsError,
  isError,
}: Props) {
  const [tag, setTag] = useState<string>("");
  const [selectIndex, setSelectIndex] = useState<number | null>(null);
  const findList = useMemo(() => {
    if (tag.trim().length > 0) {
      const filteredTags = tags.filter((tagF) => {
        const isAlready = choiseTags.some(
          (chosen) => chosen.toLowerCase() === tagF.toLowerCase(),
        );
        return !isAlready;
      });
      return filteredTags.filter((tagF) =>
        tagF.toLowerCase().includes(tag.toLowerCase()),
      );
    }
    return null;
  }, [tag, choiseTags]);
  useEffect(() => {
    requestAnimationFrame(() => {
      setSelectIndex(null);
    });
  }, [findList, tag, choiseTags]);
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setTag("");
      return;
    }
    if (tag.trim().length === 0 && e.key === "Backspace") {
      setChoiseTags((prev) => prev.slice(0, prev.length - 1));
      return;
    }
    if (e.key === "Enter" && tag.trim().length > 0) {
      if (
        choiseTags.some((chosen) => chosen.toLowerCase() === tag.toLowerCase())
      ) {
        setIsError("Тег уже существует");
        return;
      }
      if (choiseTags.length >= 8) {
        setIsError("Достигнут лимит тегов");
        return;
      }
      if (typeof selectIndex === "number" && findList) {
        setChoiseTags((prev) => [...prev, findList[selectIndex]]);
        setTag("");
        setSelectIndex(null);
        return;
      }
      setChoiseTags((prev) => [...prev, tag]);
      setTag("");
      setSelectIndex(null);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex =
        typeof selectIndex === "number"
          ? selectIndex - 1 < 0
            ? null
            : Math.max(0, selectIndex - 1)
          : null;
      setSelectIndex(newIndex);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex =
        typeof selectIndex === "number"
          ? Math.min(selectIndex + 1, (findList?.length || 0) - 1)
          : 0;
      setSelectIndex(newIndex);
      return;
    }
  }
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const variants = {
    error: {
      x: [-6, 6, -4, 4, 0],
      transition: {
        duration: 0.3,
      },
    },
    normal: {
      x: 0,
    },
  };

  return (
    <motion.div
      animate={isError.trim().length > 0 ? "error" : "normal"}
      variants={variants}
      className={cn(
        "border px-3 py-2.5 flex flex-wrap min-h-13.5 rounded-xl bg-ti-surface-alt border-ti-border gap-1.75 focus-within:border-ti-border-focus focus-within:ring-2 ring-ti-border-focus/25 transition-colors duration-200 items-center relative z-10",
        isError.trim().length > 0 &&
          "focus-within:border-ti-error focus-within:ring-ti-error-glow border-ti-error ring-ti-error-glow",
      )}
    >
      <AnimatePresence mode={"popLayout"}>
        {choiseTags.map((tag) => {
          return (
            <motion.div
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              key={tag}
              className={cn(
                "text-xs text-ti-tag-text bg-ti-tag-bg border border-ti-border rounded-[7px] py-0.75 px-2 items-center flex flex-row justify-between gap-1",
                jetbrains_mono.className,
              )}
            >
              <span>{tag}</span>
              <button
                onClick={() => {
                  setChoiseTags((prev) => prev.filter((t) => t !== tag));
                }}
                className={cn(
                  "aspect-square flex flex-row items-center justify-center text-ti-text-secondary cursor-pointer transition-colors duration-200 hover:text-ti-error",
                )}
              >
                <X size={10} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <motion.input
        autoComplete={"off"}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        layout
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        type="text"
        id={"input-techn"}
        placeholder={"Начните вводить технологию..."}
        className={cn(
          "min-w-35 text-sm text-ti-text-primary py-1 px-0.5 flex-1 placeholder:text-ti-text-muted outline-none",
        )}
      />
      <AnimatePresence>
        {isFocus &&
          findList &&
          findList.length > 0 &&
          tag.trim().length > 0 && (
            <motion.div
              initial={{ y: 4, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ top: `calc(100% + 6px)` }}
              className={cn(
                "bg-ti-surface-alt border border-ti-border shadow-md absolute z-50 inset-x-0 rounded-[11px] overflow-clip divide-y divide-[#0d0d20]",
              )}
            >
              {findList.map((tagFL, index) => {
                return (
                  <div
                    onPointerDown={(e) => e.preventDefault()}
                    onClick={() => {
                      if (
                        choiseTags.some(
                          (t) => t.toLowerCase() === tagFL.toLowerCase(),
                        )
                      ) {
                        setIsError("Тег уже существует");
                        return;
                      }
                      if (choiseTags.length >= 8) {
                        setIsError("Достигнут лимит тегов");
                        return;
                      }
                      setChoiseTags((prev) => [...prev, tagFL]);
                      setSelectIndex(null);
                      setTag("");
                    }}
                    key={`${tagFL}-search`}
                    className={cn(
                      "cursor-pointer py-2.25 px-3.5 flex flex-row gap-2 transition-colors duration-200 text-xs text-[#4a4870] hover:text-ti-tag-text hover:bg-ti-tag-bg items-center select-none",
                      jetbrains_mono.className,
                      selectIndex === index && "bg-ti-tag-bg text-ti-tag-text",
                    )}
                  >
                    <span
                      className={cn(
                        "w-1 h-1 shrink-0 bg-[#4a4870] rounded-full",

                        selectIndex !== null &&
                          index === selectIndex &&
                          "bg-ti-tag-text",
                      )}
                    ></span>
                    <span className={cn("flex flex-row gap-0.5 items-center")}>
                      {tagFL
                        .split(new RegExp(`(${tag})`, "gi"))
                        .map((part, index) => {
                          if (part.toLowerCase() === tag.toLowerCase()) {
                            return (
                              <span
                                key={`${index}-${part}`}
                                className={cn(
                                  "text-ti-tag-text rounded-[3px] bg-ti-tag-bg px-0.5",
                                )}
                              >
                                {part}
                              </span>
                            );
                          } else {
                            return part;
                          }
                        })}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>
  );
}
