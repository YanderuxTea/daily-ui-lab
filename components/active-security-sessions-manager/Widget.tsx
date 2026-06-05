"use client";
import {
  sessionsData,
  SessionType,
} from "@/data/active-security-sessions-manager/sessionData";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "./Header";
import SessionCard from "./SessionCard";

export default function Widget() {
  const [sessions, setSessions] = useState<SessionType[]>(sessionsData);
  return (
    <div
      className={cn(
        "flex flex-col shadow-2xl p-5 border border-asm-border bg-asm-bg-card rounded-2xl gap-4 max-w-lg w-full select-none",
      )}
    >
      <Header count={sessions.length} />
      <div className={cn("flex flex-col gap-3")}>
        <AnimatePresence>
          {sessions.map((s) => {
            return (
              <SessionCard
                setSessions={setSessions}
                session={s}
                key={s.id}
              />
            );
          })}
        </AnimatePresence>
      </div>
      {sessions.some((s) => !s.isCurrentSession) && (
        <button
          onClick={() =>
            setSessions((prev) => prev.filter((s) => s.isCurrentSession))
          }
          className={cn(
            "py-2.5 border transition-all duration-150 font-semibold text-xs cursor-pointer text-asm-danger bg-asm-danger/5 border-asm-danger/20 rounded-xl active:scale-99 hover:bg-asm-danger hover:text-white",
          )}
        >
          Завершить все остальные сеансы
        </button>
      )}
    </div>
  );
}
