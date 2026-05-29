import { cn } from "@/lib/utils";
import { Dispatch, RefObject, SetStateAction } from "react";

export default function PromptCard({
  text,
  setText,
  promptText,
  textareaRef,
}: {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  text: string;
  promptText: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      onClick={() => {
        setText(promptText);
        textareaRef.current?.focus();
      }}
      className={cn(
        "flex flex-row rounded-full px-3 py-1.5 border bg-ai-bg-panel text-xs font-medium text-ai-text-muted border-ai-border select-none transition-colors duration-200 hover:border-ai-accent/50 hover:text-ai-text-primary cursor-pointer",
      )}
    >
      {text}
    </div>
  );
}
