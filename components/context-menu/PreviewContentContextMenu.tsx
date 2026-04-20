"use client";
import { MousePointerClick } from "lucide-react";
import useContextMenu from "@/components/context-menu/useContextMenu";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import ContextMenu from "@/components/context-menu/ContextMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function PreviewContentContextMenu() {
  const context = useContextMenu();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isActive, isTriggeredText, isTriggered } = context;
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);
  return (
    <div className={"flex flex-col gap-3 items-center"}>
      <MousePointerClick size={32} color={"#404552"} />
      <p className={"text-sm text-[#475569]"}>Right click anywhere</p>
      {isMounted &&
        createPortal(
          <AnimatePresence>{isActive && <ContextMenu />}</AnimatePresence>,
          document.body,
        )}
      <AnimatePresence>
        {isTriggered && isTriggeredText.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            className={
              "absolute bottom-5 rounded-md border border-neutral-900 bg-neutral-800 px-2.5 py-1.25 text-sm origin-top"
            }
          >
            <p>{isTriggeredText}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
