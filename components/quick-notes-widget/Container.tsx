"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useMemo } from "react";
import CardNote from "./CardNote";
import { Note } from "./Widget";

type Props = {
  setNotes: Dispatch<SetStateAction<Note[]>>;
  notes: Note[];
};
export default function Container({ setNotes, notes }: Props) {
  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);
  return (
    <div
      className={cn(
        notes.length > 0
          ? "flex flex-col gap-3 overflow-y-scroll overflow-x-clip p-2 -m-2"
          : "p-6 text-center text-qn-text-muted border border-dashed border-qn-border rounded-[20px] text-sm",
      )}
    >
      {notes.length > 0 ? (
        <AnimatePresence>
          {notes.map((note) => {
            return (
              <CardNote
                formatter={formatter}
                setNotes={setNotes}
                key={note.id}
                note={note}
              />
            );
          })}
        </AnimatePresence>
      ) : (
        "Пока заметок нет"
      )}
    </div>
  );
}
