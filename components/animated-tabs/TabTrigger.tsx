"use client";

import { motion } from "framer-motion";
import { AnimatedTabsData } from "@/data/animated-tabs/animatedTabsData";

export default function TabTrigger({
  tab,
  setSelectTabAction,
  selectedTab,
}: {
  tab: AnimatedTabsData;
  setSelectTabAction: ({
    id,
    content,
  }: {
    id: number;
    content: string;
  }) => void;
  selectedTab: { id: number; content: string };
}) {
  return (
    <div className={"relative"}>
      {tab.id === selectedTab.id && (
        <motion.div
          key={selectedTab.id}
          transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
          layoutId={"tab"}
          className={
            "absolute inset-0 border border-white/8 bg-[#1e1e2e] rounded-[10px]"
          }
        ></motion.div>
      )}
      <button
        onClick={() => setSelectTabAction({ id: tab.id, content: tab.content })}
        className={`relative z-10 cursor-pointer text-[13px] px-4 py-1.5 min-w-22.5 text-center transition-colors duration-150 ${
          tab.id === selectedTab.id
            ? "text-[#f1f5f9]" + " font-medium"
            : "text-[#64748b] font-normal"
        }`}
      >
        {tab.title}
      </button>
    </div>
  );
}
