"use client";
import {
  modelData,
  ModelId,
} from "@/data/ai-prompt-input-widget/inputWidgetData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, Paperclip, Send } from "lucide-react";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function MainWidget({
  text,
  setText,
  textareaRef,
}: {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  const [openSelectMode, setOpenSelectMode] = useState<boolean>(false);
  const [selectModel, setSelectModel] = useState<ModelId>("GPT-4o");
  useEffect(() => {
    function handleClose() {
      setOpenSelectMode(false);
    }
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-ai-bg-panel rounded-2xl p-3.5 border border-ai-border transition-all duration-300 focus-within:border-ai-border-focus focus-within:shadow-[0_0_20px] shadow-ai-accent-glow",
      )}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="prompt"
        rows={3}
        className={cn(
          "resize-none border-none outline-none text-sm placeholder:text-ai-text-muted/70 selection:bg-ai-accent/30 hide-scrollbar",
        )}
        placeholder={"Задайте вопрос ИИ или выберите подсказку выше..."}
      ></textarea>
      <div className={cn("h-px w-full bg-ai-border/40")}></div>
      <div className={cn("flex flex-row justify-between items-center")}>
        <div className={cn("gap-2 flex flex-row")}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenSelectMode((prev) => !prev);
            }}
            className={cn(
              "flex items-center flex-row gap-1.5 cursor-pointer border font-medium text-xs px-3 py-2 bg-ai-bg-button transition-colors duration-150 hover:bg-ai-border/40 rounded-xl border-ai-border relative",
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full bg-ai-accent shadow-[0_0_6px] shadow-ai-accent shrink-0",
              )}
            ></span>
            <span>{selectModel}</span>
            <AnimatePresence>
              {openSelectMode && (
                <motion.div
                  initial={{ y: 4, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 4, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "flex flex-col p-1.5 bg-ai-bg-panel bottom-full absolute border border-ai-border -translate-y-2.5 shadow-xl shadow-black/10 cursor-default rounded-xl left-0",
                  )}
                >
                  {modelData.map((model) => {
                    return (
                      <div
                        key={model.id}
                        className={cn("text-nowrap")}
                      >
                        <button
                          className={cn(
                            "px-2.5 py-1.5 transition-colors cursor-pointer w-36.5 text-start rounded-lg hover:bg-ai-bg-button",
                            selectModel === model.model
                              ? "text-ai-text-primary bg-ai-bg-button"
                              : "text-ai-text-muted",
                          )}
                          onClick={() => {
                            setSelectModel(model.model);
                            setOpenSelectMode(false);
                          }}
                        >
                          {model.model}
                        </button>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className={cn(
              "cursor-pointer w-8 aspect-square flex items-center justify-center transition-colors duration-150 text-ai-text-muted hover:text-ai-text-primary hover:bg-ai-bg-button rounded-xl",
            )}
          >
            <Paperclip size={16} />
          </button>
          <button
            className={cn(
              "cursor-pointer w-8 aspect-square flex items-center justify-center transition-colors duration-150 text-ai-text-muted hover:text-ai-text-primary hover:bg-ai-bg-button rounded-xl",
            )}
          >
            <Mic size={16} />
          </button>
        </div>
        <div className={cn("gap-3 flex flex-row items-center")}>
          <p
            className={cn(
              "text-[11px] text-ai-text-muted",
              jetbrains_mono.className,
            )}
          >
            {text.length} / 1000
          </p>
          <button
            disabled={text.length === 0 || text.length > 1000}
            className={cn(
              "flex items-center justify-center w-8 aspect-square cursor-pointer disabled:cursor-not-allowed transition-all duration-200 disabled:text-ai-text-muted disabled:bg-ai-bg-button rounded-xl bg-ai-accent active:scale-95 hover:bg-ai-accent/90 shadow-[0_0_16px] shadow-ai-accent-glow disabled:shadow-none",
            )}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
