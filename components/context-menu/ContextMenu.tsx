"use client";

import { AnimatePresence, motion } from "framer-motion";
import useContextMenu from "@/components/context-menu/useContextMenu";
import { menuData } from "@/data/context-menu/contextMenuData";
import { dm_mono } from "@/lib/font";
import { useRef, useState } from "react";

export default function ContextMenu() {
  const context = useContextMenu();
  const { x, y, refMenu, handleTriggered } = context;
  const [openSubId, setOpenSubId] = useState<string>("");
  const isRight = x + 220 * 2 < window.innerWidth;
  const timer = useRef<NodeJS.Timeout | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      ref={refMenu}
      style={{ x, y }}
      className={
        "absolute left-0 bg-[#1a1a27] border border-white/8 rounded-[10px] w-55" +
        " shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] text-[#cbd5e1] text-[13px]" +
        " font-normal origin-top-left divide-y divide-white/6"
      }
    >
      {menuData.map((menuItem) => {
        return (
          <div key={menuItem.id} className={"select-none flex flex-col py-1.5"}>
            {menuItem.menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  onClick={() => handleTriggered(item.triggerText)}
                  onMouseEnter={() => {
                    if (timer.current) {
                      clearTimeout(timer.current);
                    }
                    setOpenSubId(item.id);
                  }}
                  onMouseLeave={() => {
                    timer.current = setTimeout(() => {
                      setOpenSubId("");
                    }, 200);
                  }}
                  key={item.id}
                  className={
                    "transition-colors duration-100 flex flex-row items-center" +
                    ` h-8.5 cursor-pointer px-2 py-1.5 mx-1 rounded-md justify-between group/item ${item.title === "Delete" ? "text-[#f87171] hover:bg-[#ef44441f]" : "text-[#64748b] hover:text-[#94a3b8] hover:bg-white/7 "}`
                  }
                >
                  <div className={"flex flex-row gap-3 items-center relative"}>
                    <Icon size={15} />
                    <p
                      className={`${
                        item.title === "Delete"
                          ? "text-[#f87171]"
                          : "text-[#cbd5e1]" +
                            " group-hover/item:text-[#f1f5f9]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p
                    className={`${dm_mono.className} text-[#475569] group-hover/item:text-[#64748b] text-[11px] font-medium`}
                  >
                    {item.shortcut}
                  </p>
                  <AnimatePresence>
                    {openSubId.trim().length > 0 &&
                      openSubId === item.id &&
                      item.children.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={
                            "absolute bg-[#1a1a27] border border-white/8 rounded-[10px] w-55" +
                            " shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] text-[#cbd5e1] text-[13px]" +
                            ` font-normal origin-top-left  flex flex-col py-1.5 ${
                              isRight
                                ? "translate-x-full" + " right-0"
                                : "-translate-x-full left-0"
                            }`
                          }
                        >
                          {item.children.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <div
                                key={subItem.id}
                                className={
                                  "transition-colors duration-100 flex flex-row items-center" +
                                  ` h-8.5 cursor-pointer px-2 py-1.5 mx-1 gap-3 rounded-md group/subItem ${item.title === "Delete" ? "text-[#f87171] hover:bg-[#ef44441f]" : "text-[#64748b] hover:text-[#94a3b8] hover:bg-white/7 "}`
                                }
                                onClick={() => {
                                  handleTriggered(subItem.triggerText);
                                }}
                              >
                                <Icon size={15} />
                                <p
                                  className={
                                    "text-[#cbd5e1] group-hover/subItem:text-[#f1f5f9]"
                                  }
                                >
                                  {subItem.title}
                                </p>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}
