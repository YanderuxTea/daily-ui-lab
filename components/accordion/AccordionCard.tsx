"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AccordionData } from "@/data/accordion/accordionData";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useRef } from "react";

type Props = {
  openId: string;
  setOpenIdAction: Dispatch<SetStateAction<string>>;
  item: AccordionData;
};
export default function AccordionCard({
  openId,
  setOpenIdAction,
  item,
}: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <motion.div
      onClick={(e) => {
        if (contentRef.current?.contains(e.target as Node)) {
          return;
        }
        setOpenIdAction((prevState) => {
          return prevState === item.id ? "" : item.id;
        });
      }}
      layout
      className={`transition-colors duration-200 bg-acc-item-bg rounded-xl  border ${openId === item.id ? "border-acc-border-active" : "border-acc-border"} flex flex-col divide-y divide-acc-divider overflow-clip`}
    >
      <div
        className={
          "flex flex-row justify-between w-full transition-colors hover:bg-acc-item-hover cursor-pointer px-5 py-4" +
          " items-center select-none"
        }
      >
        <p className={"text-sm font-medium"}>{item.title}</p>
        <motion.span
          animate={{ rotate: openId === item.id ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`transition-colors duration-200 ${openId === item.id ? "text-acc-icon-active" : "text-acc-icon"}`}
        >
          <ChevronDown size={16} />
        </motion.span>
      </div>
      <AnimatePresence>
        {openId === item.id && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, padding: "0, 25px, 0, 25px" }}
            className={"px-5"}
          >
            <p
              className={"text-acc-text-content text-[13px] leading-[1.7] py-4"}
            >
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
