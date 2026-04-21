"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function TabContent({ content }: { content: string }) {
  return (
    <div
      className={
        "bg-white/2 border border-white/6 rounded-xl p-6 min-h-40 text-sm/1.6"
      }
    >
      <AnimatePresence mode={"wait"}>
        <motion.p
          key={content}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={"text-sm/1.6"}
        >
          {content}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
