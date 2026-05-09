"use client";

import { statuses } from "@/data/interactive-work-status-switcher/statusData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Switcher() {
  const [selectId, setSelectId] = useState<string>("focus");
  return (
    <div
      className={cn(
        "flex flex-row p-2 border backdrop-blur-md rounded-2xl border-white/10 bg-wms-bg/70 items-center select-none",
      )}
    >
      {statuses.map((status) => {
        return (
          <div
            key={status.id}
            className={cn(
              "flex items-center justify-center px-5 py-2.5 relative cursor-pointer",
            )}
          >
            <div
              onClick={() => setSelectId(status.id)}
              className={cn(
                "flex flex-row gap-2 relative z-2 text-sm font-medium items-center text-white",
              )}
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full bg-white opacity-50",
                  selectId === status.id && "opacity-100 animate-pulse",
                )}
              ></span>
              <p>{status.title}</p>
            </div>
            {status.id === selectId && (
              <motion.div
                layoutId={"bg-status"}
                className={cn(
                  "absolute inset-0 rounded-[10px] border border-white/15",
                  status.color,
                )}
              ></motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
