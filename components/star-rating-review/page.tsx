"use client";
import { dm_sans } from "@/lib/font";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import SubmitCard from "./SubmitCard";

export default function SRRPage() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [previewStar, setPreviewStar] = useState<number>(0);
  const [submitStar, setSubmitStar] = useState<number>(0);
  return (
    <main
      className={cn(
        "flex-1 w-full flex items-center justify-center p-2.5 bg-sr-bg text-sr-text",
        dm_sans.className,
      )}
    >
      <AnimatePresence mode={"wait"}>
        {isSubmit ? (
          <SubmitCard
            key={"submitCard"}
            sumbitStar={submitStar}
          />
        ) : (
          <ReviewCard
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            previewStar={previewStar}
            setPreviewStar={setPreviewStar}
            submitStar={submitStar}
            setSubmitStar={setSubmitStar}
            key={"reviewCard"}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
