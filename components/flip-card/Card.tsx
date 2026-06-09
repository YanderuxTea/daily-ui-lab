"use client";
import { FlipCardProps, iconsFlipCard } from "@/data/flip-card/flipCardData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Card({ props }: { props: FlipCardProps }) {
  const {
    classnameButton,
    classnameIcon,
    classnameList,
    title,
    description,
    list,
    icon,
  } = props;
  const [flipped, setFlipped] = useState<boolean>(false);
  const Icon = iconsFlipCard[icon];
  return (
    <div
      className={cn("perspective-midrange cursor-pointer")}
      onClick={() => {
        setFlipped((prev) => !prev);
      }}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        className={cn("transform-3d relative w-50 h-55")}
        transition={{
          type: "spring",
          duration: 0.55,
          stiffness: 200,
          damping: 10,
        }}
      >
        <div
          className={cn(
            "backface-hidden absolute inset-0 flex flex-col gap-2.5 items-center justify-center text-center p-5 bg-fc-card border border-fc-border rounded-[14px]",
          )}
        >
          <div
            className={cn(
              "w-12.5 aspect-square rounded-lg flex items-center justify-center",
              classnameIcon,
            )}
          >
            <Icon size={22} />
          </div>
          <p className={cn("text-sm font-medium")}>{title}</p>
          <p className={cn("text-xs text-fc-muted")}>{description}</p>
          <span
            className={cn(
              "flex flex-row gap-1 text-[11px] text-fc-hint items-center",
            )}
          >
            <RotateCcw size={11} />
            Нажми чтобы узнать
          </span>
        </div>
        <div
          className={cn(
            "backface-hidden absolute inset-0 flex flex-col rotate-y-180 p-5 bg-fc-card border border-fc-border rounded-[14px] gap-2.5",
          )}
        >
          <p className={cn("text-[13px] font-medium")}>Ключевые навыки</p>
          <div
            className={cn("mb-0.5 flex-1 flex flex-col gap-1.5", classnameList)}
          >
            {list.map((v, i) => {
              return (
                <span
                  key={v + i}
                  className={cn("flex flex-row gap-1.5 items-center text-xs")}
                >
                  <Check size={12} />
                  {v}
                </span>
              );
            })}
          </div>
          <button
            className={cn(
              "text-xs font-medium cursor-pointer rounded-lg transition-opacity duration-150 hover:opacity-82 py-2",
              classnameButton,
            )}
          >
            Посмотреть работы
          </button>
        </div>
      </motion.div>
    </div>
  );
}
