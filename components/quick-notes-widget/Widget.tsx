"use client";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
export type Note = {
  id: string;
  content: string;
  isPinned: boolean;
  time: Date;
};
export default function Widget() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [height, setHeight] = useState<number>(10000);
  const filteredNotes = useMemo(() => {
    const pinnedNote = notes
      .filter((note) => note.isPinned)
      .sort((a, b) => {
        return b.time.getTime() - a.time.getTime();
      });
    const unpinnedNote = notes
      .filter((note) => !note.isPinned)
      .sort((a, b) => {
        return b.time.getTime() - a.time.getTime();
      });
    const sortedNotes = [...pinnedNote, ...unpinnedNote];
    return sortedNotes;
  }, [notes]);
  useEffect(() => {
    function resizeHandler() {
      setHeight(window.innerHeight);
    }
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <div
      style={{ maxHeight: `${height * 0.8}px` }}
      className={cn(
        "p-6 max-w-107.5 w-full bg-qn-surface/75 backdrop-blur-[18px] rounded-[28px] shadow-xl border border-white/6 flex flex-col gap-5",
      )}
    >
      <Header />
      <Main setNotes={setNotes} />
      <Container
        setNotes={setNotes}
        notes={filteredNotes}
      />
    </div>
  );
}
