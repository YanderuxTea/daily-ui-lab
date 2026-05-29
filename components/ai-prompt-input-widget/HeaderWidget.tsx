import { promptData } from "@/data/ai-prompt-input-widget/inputWidgetData";
import { cn } from "@/lib/utils";
import PromptCard from "./PromptCard";
import { Dispatch, RefObject, SetStateAction } from "react";

export default function HeaderWidget({
  setText,
  textareaRef,
}: {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2")}>
      {promptData.map((prompt) => {
        return (
          <PromptCard
            textareaRef={textareaRef}
            promptText={prompt.promptText}
            setText={setText}
            key={prompt.id}
            text={prompt.title}
          />
        );
      })}
    </div>
  );
}
