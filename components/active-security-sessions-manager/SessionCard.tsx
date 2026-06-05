"use client";
import { SessionType } from "@/data/active-security-sessions-manager/sessionData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import CurrentSession from "./CurrentSession";
type Props = {
  session: SessionType;
  setSessions: Dispatch<SetStateAction<SessionType[]>>;
};
export default function SessionCard({ session, setSessions }: Props) {
  const { icon, id, ip, isCurrentSession, timeAgo, device, browser, country } =
    session;
  const Icon = icon;
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.85 }}
      className={cn(
        "flex flex-row justify-between border p-3 rounded-xl items-center transition-colors duration-300 origin-center",
        isCurrentSession
          ? "bg-asm-bg-main/40 border-asm-border"
          : "border-asm-border/60 hover:border-asm-border",
      )}
    >
      <div className={cn("flex flex-row items-center gap-3.5")}>
        <div
          className={cn(
            "w-10 aspect-square rounded-lg flex items-center justify-center border",
            isCurrentSession
              ? "bg-asm-border/50 border-asm-border/30"
              : "text-asm-text-muted border-asm-border/20 bg-asm-border/30",
          )}
        >
          <Icon size={18} />
        </div>
        <div className={cn("flex flex-col gap-0.5")}>
          <div className={cn("flex flex-row gap-2 items-center")}>
            <p className={cn("font-semibold text-sm")}>{device}</p>
            {isCurrentSession && <CurrentSession />}
          </div>
          <span className={cn("text-asm-text-muted text-xs")}>
            {browser} •{" "}
            <span
              className={cn("text-[11px] font-mono", jetbrains_mono.className)}
            >
              {ip}
            </span>{" "}
            {country}
          </span>
          {timeAgo && (
            <p className={cn("mt-0.5 text-[11px] text-asm-text-muted/80")}>
              {timeAgo}
            </p>
          )}
        </div>
      </div>
      {!isCurrentSession && (
        <button
          onClick={() => setSessions((prev) => prev.filter((s) => s.id !== id))}
          className={cn(
            "p-2 border border-transparent rounded-lg cursor-pointer text-asm-text-muted transition-colors duration-200 hover:bg-asm-danger/10 hover:border-asm-danger/20 hover:text-asm-danger",
          )}
        >
          <X size={15} />
        </button>
      )}
    </motion.div>
  );
}
