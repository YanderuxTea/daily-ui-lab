"use client";

import { cormorant_garamond } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  previewStar: number;
  setPreviewStar: Dispatch<SetStateAction<number>>;
  submitStar: number;
  setSubmitStar: Dispatch<SetStateAction<number>>;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
  isSubmit: boolean;
};
export default function ReviewCard({
  previewStar,
  setPreviewStar,
  submitStar,
  setSubmitStar,
  setIsSubmit,
  isSubmit,
}: Props) {
  const starText = (star: number) => {
    switch (star) {
      case 1:
        return "Ужасно";
      case 2:
        return "Плохо";
      case 3:
        return "Нормально";
      case 4:
        return "Хорошо";
      case 5:
        return "Отлично";
      default:
        return "";
    }
  };
  const colorMap: Record<number, string> = {
    1: "text-sr-label-terrible",
    2: "text-sr-label-bad",
    3: "text-sr-label-okay",
    4: "text-sr-label-good",
    5: "text-sr-label-great",
  };
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={cn(
        "origin-center p-9 border rounded-[20px] border-sr-border bg-sr-card flex flex-col max-w-sm w-full",
      )}
    >
      <div className={cn("flex flex-row gap-3 items-center mb-6")}>
        <div
          className={cn(
            "w-11 aspect-square flex items-center justify-center rounded-xl border border-[#2a2318] bg-sr-surface text-sr-star-filled",
          )}
        >
          <MessageSquare
            size={20}
            strokeWidth={1.6}
          />
        </div>
        <div className={cn("flex flex-col")}>
          <p className={cn("text-sm font-medium")}>Multi Forum</p>
          <p className={cn("text-xs text-sr-subtext")}>Платформа для общения</p>
        </div>
      </div>
      <div className={cn("flex flex-col")}>
        <p
          className={cn(
            "text-[26px] font-semibold",
            cormorant_garamond.className,
          )}
        >
          Оцените ваш опыт
        </p>
        <div
          onMouseLeave={() => setPreviewStar(0)}
          className={cn("flex flex-row gap-0.5 mb-2.5")}
        >
          {Array.from({ length: 5 }).map((_, index) => {
            const currentRate = index + 1;
            return (
              <button
                onMouseEnter={() => setPreviewStar(currentRate)}
                onClick={() => setSubmitStar(currentRate)}
                key={`star-${index}`}
                className={cn(
                  "w-9.5 aspect-square flex items-center justify-center p-1 cursor-pointer",
                )}
              >
                <Star
                  size={38}
                  fill={cn(
                    previewStar > 0
                      ? previewStar >= currentRate
                        ? "#f59e0b"
                        : "#292119"
                      : submitStar >= currentRate
                        ? "#f59e0b"
                        : "#292119",
                  )}
                  strokeWidth={0}
                />
              </button>
            );
          })}
        </div>
        <div className={cn("h-6 mb-4.5")}>
          <p
            className={cn(
              "text-xs font-medium",
              previewStar > 0 ? colorMap[previewStar] : colorMap[submitStar],
            )}
          >
            {previewStar > 0 ? starText(previewStar) : starText(submitStar)}
          </p>
        </div>
      </div>
      <div className={cn("flex flex-col gap-3.5")}>
        <textarea
          name="reviewArea"
          className={cn(
            "resize-none border py-2.75 px-3.5 rounded-xl outline-none text-[13px] placeholder:text-sr-placeholder bg-sr-surface border-sr-border focus:border-sr-border-hover",
          )}
          placeholder={"Расскажите подробнее..."}
        />
        <button
          disabled={submitStar === 0}
          onClick={() => setIsSubmit(true)}
          className={cn(
            "p-3.25 text-sm font-medium rounded-xl border cursor-pointer border-sr-btn-active-bg bg-sr-btn-active-bg text-sr-btn-active-text origin-center disabled:border-[#2a2318] disabled:bg-sr-border disabled:text-sr-btn-disabled-text transition-all duration-300 disabled:cursor-default",
            submitStar > 0 && !isSubmit && "hover:scale-105 active:scale-95",
          )}
        >
          Отправить отзыв
        </button>
      </div>
    </motion.div>
  );
}
