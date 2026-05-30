"use client";
import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Copy, Eye, EyeOff, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Header from "./Header";
import HeaderCard from "./HeaderCard";
import MainCard from "./MainCard";

export default function VCMWPage() {
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [isHide, setIsHide] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  useEffect(() => {
    if (!isCopied) return;
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 bg-vcm-bg-main text-white flex-1",
        inter.className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4 max-w-md w-full border bg-vcm-bg-card border-vcm-border rounded-[28px] p-5",
        )}
      >
        <Header isBlocked={isBlocked} />
        <div
          className={cn(
            "w-full h-45 p-5 rounded-2xl relative overflow-clip bg-linear-to-br flex flex-col gap-7 transition-all duration-500",
            isBlocked
              ? "from-[#2A2A35] to-[#1F1F26] opacity-40"
              : "from-vcm-card-start to-vcm-card-end shadow-[0_0_6px] shadow-vcm-card-end",
          )}
        >
          <div
            className={cn(
              "absolute w-84.5 h-32 bg-linear-to-b from-white/10 to-transparent rotate-45 bottom-full translate-y-1/3 left-0 pointer-events-none",
            )}
          ></div>
          <HeaderCard />
          <MainCard isHide={isHide} />
        </div>
        <div className={cn("flex flex-col gap-2")}>
          <Button onClick={() => setIsHide((prev) => !prev)}>
            <div className={cn("flex flex-row gap-2.5")}>
              <span className={cn("text-vcm-text-muted")}>
                {isHide ? <Eye size={16} /> : <EyeOff size={16} />}
              </span>
              <p>{isHide ? "Показать реквизиты" : "Скрыть реквизиты"}</p>
            </div>
          </Button>
          <Button
            onClick={() => {
              setIsCopied(true);
              navigator.clipboard.writeText("4532 7812 9024 4292");
            }}
          >
            <div className={cn("flex flex-row gap-2.5")}>
              <span className={cn("text-vcm-text-muted")}>
                <Copy size={16} />
              </span>
              <p
                className={cn(
                  "transition-colors duration-150",
                  isCopied && "text-vcm-accent",
                )}
              >
                {isCopied ? "Скопировано!" : "Копировать номер"}
              </p>
            </div>
          </Button>
          <Button disabled={true}>
            <div className={cn("flex flex-row gap-2.5")}>
              <span className={cn("text-vcm-text-muted")}>
                <Lock size={16} />
              </span>
              <p>Заморозить карту</p>
            </div>
            <div
              onClick={() => setIsBlocked((prev) => !prev)}
              className={cn(
                "w-8.5 h-4.5 rounded-full flex cursor-pointer items-center relative transition-colors duration-150",
                isBlocked ? "bg-vcm-danger/20" : "bg-vcm-text-muted/20",
              )}
            >
              <motion.div
                layout
                className={cn(
                  "w-3.5 aspect-square rounded-full absolute transition-colors duration-150",
                  isBlocked
                    ? "right-0.5 bg-vcm-danger"
                    : "left-0.5 bg-vcm-text-muted",
                )}
              ></motion.div>
            </div>
          </Button>
        </div>
      </div>
    </main>
  );
}
