"use client";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";
import { Note } from "./Widget";
type Props = {
  setNotes: Dispatch<SetStateAction<Note[]>>;
};
export default function Main({ setNotes }: Props) {
  const [content, setContent] = useState<string>("");
  return (
    <div className={cn("flex flex-col gap-2.5")}>
      <div
        className={cn(
          "px-4 py-3.5 text-qn-text flex w-full bg-qn-surface-light rounded-[18px] border transition-colors duration-250 border-qn-border focus-within:border-qn-accent focus-within:ring-4 focus-within:ring-qn-accent/12",
        )}
      >
        <textarea
          placeholder={"Напиши заметку..."}
          value={content}
          rows={2}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (!e.shiftKey && e.key === "Enter") {
              e.preventDefault();
              if (content.trim().length > 0) {
                setNotes((prev) => {
                  return [
                    ...prev,
                    {
                      content: content,
                      isPinned: false,
                      id: uuid(),
                      time: new Date(),
                    },
                  ];
                });
                setContent("");
              }
            }
          }}
          id="inputNoteContent"
          className={cn(
            "resize-none w-full outline-none border-none text-[15px] font-normal",
          )}
        ></textarea>
      </div>
      <div className={cn("text-xs text-qn-text-muted flex flex-col gap-1")}>
        <p>Enter — сохранить</p>
        <p>Shift + Enter — перенос строки</p>
      </div>
    </div>
  );
}
