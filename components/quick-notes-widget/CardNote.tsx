"use client";

import { ibm_plex_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Pin, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Note } from "./Widget";

type Props = {
  setNotes: Dispatch<SetStateAction<Note[]>>;
  note: Note;
  formatter: Intl.DateTimeFormat;
};
export default function CardNote({ note, setNotes, formatter }: Props) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01, transition: { duration: 0.35 } }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      layout
      className={cn(
        "p-4 border border-qn-border rounded-[20px] bg-white/3 flex flex-col gap-2.5 transition-colors duration-250 hover:border-qn-accent/45",
        note.isPinned &&
          "bg-qn-pinned/22 border-qn-accent/35 shadow-qn-accent/8 shadow-[0px_0px_10px]",
      )}
    >
      {note.isPinned && (
        <p
          className={cn(
            "uppercase text-[11px] text-qn-accent-soft font-bold tracking-[0.88px]",
          )}
        >
          pinned
        </p>
      )}
      <p
        className={cn(
          "text-[15px] text-qn-text leading-1.6 wrap-break-word whitespace-pre-wrap mb-1.5",
        )}
      >
        {note.content}
      </p>
      <div className={cn("flex flex-row justify-between items-center")}>
        <p
          className={cn("text-qn-text-muted text-xs", ibm_plex_mono.className)}
        >
          {formatter.format(note.time)}
        </p>
        <div className={cn("gap-2 flex flex-row")}>
          <button
            onClick={() =>
              setNotes((prev) =>
                prev.map((notePr) => {
                  if (notePr.id === note.id) {
                    return { ...notePr, isPinned: !notePr.isPinned };
                  }
                  return notePr;
                }),
              )
            }
            className={cn(
              "cursor-pointer w-8.5 aspect-square rounded-xl transition-all duration-200 bg-white/4 flex items-center justify-center text-qn-text hover:bg-white/8 hover:scale-105",
            )}
          >
            <Pin size={15} />
          </button>
          <button
            onClick={() =>
              setNotes((prev) => prev.filter((n) => n.id !== note.id))
            }
            className={cn(
              "cursor-pointer w-8.5 aspect-square rounded-xl transition-all duration-200 bg-white/4 flex items-center justify-center text-qn-text hover:bg-qn-danger/15 hover:text-[#fca5a5] hover:scale-105",
            )}
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
