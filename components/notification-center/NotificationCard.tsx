"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  color: string;
  index: number;
  title: string;
  content: string;
  isRead: boolean;
  timeAgo: string;
};
export default function NotificationCard({
  index,
  Icon,
  color,
  isRead,
  content,
  title,
  timeAgo,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.25,
        ease: "easeOut",
      }}
      className={
        "px-4.5 py-3.25 flex items-start transition-colors" +
        " hover:bg-nc-surface-alt flex-row gap-3"
      }
    >
      <div
        className={`flex items-center justify-center w-9 aspect-square rounded-[10px] shrink-0 ${color}`}
      >
        <Icon size={16} />
      </div>
      <div className={"flex flex-col relative"}>
        <p
          className={"text-[13px] font-semibold mb-0.5 text-nc-text-secondary "}
        >
          {title}
        </p>
        <p
          className={
            "text-xs font-normal text-nc-text-desc line-clamp-2 leading-[1.45]"
          }
        >
          {content}
        </p>
        <p className={"text-[11px] font-normal text-nc-text-time mt-1"}>
          {timeAgo}
        </p>
        {!isRead && (
          <div
            className={
              "w-1.75 bg-nc-accent rounded-full absolute top-0 right-0 aspect-square mt-0.75"
            }
          ></div>
        )}
      </div>
    </motion.div>
  );
}
