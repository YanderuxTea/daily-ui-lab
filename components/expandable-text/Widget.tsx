"use client";

import { ExpandableData } from "@/data/expandable-text/expandableTextData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
interface Props extends ExpandableData {
  height: number;
}
export default function Widget({ props }: { props: Props }) {
  const { height, tag, title, classnameTag, description } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.div
      layout
      className={cn(
        "flex flex-col border rounded-[14px] px-5 py-4.5 border-et-border bg-et-card max-w-md w-full overflow-clip",
      )}
    >
      <div
        className={cn("flex flex-row justify-between font-medium text-sm mb-2")}
      >
        <p>{title}</p>
        <span
          className={cn(
            "text-[11px] rounded-[20px] px-2.25 py-0.5",
            classnameTag,
          )}
        >
          {tag}
        </span>
      </div>
      <motion.div
        initial={{ height: `${height}px` }}
        animate={{ height: isOpen ? "auto" : `${height}px` }}
        className={cn("pb-0.5 overflow-clip")}
      >
        <p className={cn("text-[13px] text-et-muted leading-1.65")}>
          {description}
        </p>
      </motion.div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "mt-2.5 text-xs flex flex-row gap-2 text-et-hint transition-colors duration-200 hover:text-et-muted cursor-pointer font-medium",
        )}
      >
        {isOpen ? "Свернуть" : "Показать больше"}
        <span
          className={cn(
            "transition-all duration-250",
            isOpen ? "rotate-180" : "rotate-0",
          )}
        >
          <ChevronDown size={15} />
        </span>
      </button>
    </motion.div>
  );
}
