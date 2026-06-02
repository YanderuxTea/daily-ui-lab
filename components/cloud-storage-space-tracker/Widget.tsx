"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Category from "./Category";
import Header from "./Header";
import Spinner from "./Spinner";

export default function Widget() {
  const mediaSize = 51.2;
  const docSize = 19.2;
  const [cacheSize, setCacheSize] = useState<number>(8);
  const maxSizeStorage = 128;
  const [isCleaned, setIsCleaned] = useState<boolean>(false);
  const [isCleaning, setIsCleaning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!isCleaning) return;
    timerRef.current = setTimeout(() => {
      setIsCleaned(true);
      setIsCleaning(false);
      setCacheSize(0);
    }, 2500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isCleaning]);
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-cst-bg-card p-5 border border-cst-border w-full max-w-sm rounded-2xl shadow-xl",
      )}
    >
      <Header
        docSize={docSize}
        maxSizeStorage={maxSizeStorage}
        mediaSize={mediaSize}
        cacheSize={cacheSize}
      />
      <div
        className={cn(
          "flex flex-row rounded-full h-3 w-full bg-cst-empty mb-1 overflow-clip",
        )}
      >
        <div
          style={{ width: `${(mediaSize / maxSizeStorage) * 100}%` }}
          className={cn("origin-left h-3 bg-cst-media")}
        ></div>
        <div
          style={{ width: `${(docSize / maxSizeStorage) * 100}%` }}
          className={cn("origin-left h-3 bg-cst-docs")}
        ></div>
        <motion.div
          layout="size"
          transition={{ duration: 0.5 }}
          initial={{ width: `${(cacheSize / maxSizeStorage) * 100}%` }}
          animate={{ width: `${(cacheSize / maxSizeStorage) * 100}%` }}
          className={cn("origin-left h-3 bg-cst-other")}
        ></motion.div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2.5 border-b border-cst-border/50 text-xs pb-4 font-medium",
        )}
      >
        <Category
          classname={"bg-cst-media"}
          title={"Медиафайлы"}
          size={mediaSize.toFixed(1) + " ГБ"}
        />
        <Category
          classname={"bg-cst-docs"}
          title={"Документы"}
          size={docSize.toFixed(1) + " ГБ"}
        />
        <Category
          classname={cn(isCleaned ? "bg-cst-border" : "bg-cst-other")}
          title={"Временный кэш"}
          size={isCleaned ? cacheSize + " ГБ" : cacheSize.toFixed(1) + " ГБ"}
        />
      </div>
      <button
        onClick={
          isCleaned || isCleaning ? undefined : () => setIsCleaning(true)
        }
        className={cn(
          "flex flex-row justify-center text-xs font-semibold transition-all duration-150 gap-2 py-2.5 border border-cst-border bg-cst-border/20 rounded-xl items-center select-none",
          isCleaned || isCleaning
            ? "opacity-70 cursor-not-allowed"
            : "active:scale-98 hover:bg-cst-border/50 cursor-pointer",
        )}
      >
        {isCleaning ? (
          <>
            <Spinner />
            Очистка...
          </>
        ) : isCleaned ? (
          <>
            <span className={cn("text-cst-other")}>
              <Check size={14} />
            </span>
            Очищено
          </>
        ) : (
          <>
            <span className={cn("text-cst-text-muted")}>
              <Trash size={14} />
            </span>
            Очистить временный кэш
          </>
        )}
      </button>
    </div>
  );
}
