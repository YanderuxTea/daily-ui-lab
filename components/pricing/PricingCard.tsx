"use client";

import { PricingData } from "@/data/pricing/pricingData";
import { manrope, syne } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { HTMLAttributes } from "react";
import usePricingContext from "./usePricingContext";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: PricingData;
}

export default function PricingCard({ data, className }: Props) {
  const { name, price, description, permissions, popular, buttonText } = data;
  const { isYearly } = usePricingContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative border w-70 rounded-2xl border-pc-border p-7 bg-pc-surface flex flex-col divide-y divide-pc-divider",
        className,
      )}
    >
      {popular && (
        <div
          className={cn(
            "absolute top-0 text-[11px] text-white font-semibold px-3 py-1 rounded-full bg-pc-badge-bg -translate-y-1/2 translate-x-1/2 right-1/2 border-none",
          )}
        >
          Самый популярный
        </div>
      )}
      <div className={cn("flex flex-col gap-2 pb-4")}>
        <p
          className={cn(
            "uppercase text-[13px] font-semibold tracking-[0.08em]",
            syne.className,
            popular ? "text-pc-accent" : "text-pc-text-muted",
          )}
        >
          {name}
        </p>
        <div className={cn("mt-2 font-bold flex flex-row", syne.className)}>
          <span
            className={cn(
              "text-xl font-normal text-pc-text-secondary self-start",
            )}
          >
            $
          </span>
          <AnimatePresence
            mode={"wait"}
            initial={false}
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              key={`${price}-${isYearly}`}
              className={cn("text-[42px]")}
            >
              {isYearly ? price.yearly : price.monthly}
            </motion.span>
          </AnimatePresence>
          <span
            className={cn(
              "text-[13px] text-pc-text-muted self-end font-normal",
              manrope.className,
            )}
          >
            /mo
          </span>
        </div>
        <p className={cn("text-[13px] text-pc-text-muted")}>{description}</p>
      </div>
      <div className={"flex flex-col flex-1 pt-4 gap-4"}>
        <div className={cn("flex-1 flex flex-col gap-2.5")}>
          {permissions.map((item) => {
            const Icon = item.allow ? Check : Minus;
            return (
              <p
                key={item.id}
                className={cn(
                  "flex flex-row gap-2.5 items-center text-[13px]",
                  item.allow
                    ? "text-pc-btn-default-text"
                    : "text-pc-text-disabled",
                )}
              >
                <span
                  className={cn(
                    item.allow ? "text-pc-success" : "text-pc-text-disabled",
                  )}
                >
                  <Icon size={14} />
                </span>
                {item.title}
              </p>
            );
          })}
        </div>
        <button
          className={cn(
            "border cursor-pointer w-full py-2.5 rounded-[10px] font-semibold text-[13px] transition-colors duration-150",
            popular
              ? "bg-pc-btn-highlighted-bg text-white border-pc-btn-highlighted-bg hover:bg-pc-btn-highlighted-hover shadow-[0_4px_16px_rgba(59,130,246,0.3)]"
              : "bg-pc-btn-default-bg border-pc-btn-default-border text-pc-btn-default-text hover:bg-pc-btn-default-hover",
          )}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}
