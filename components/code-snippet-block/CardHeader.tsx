"use client";
import { iconsCodeSnippet } from "@/data/code-snippet-block/codeSnippetData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  icon: string;
  title: string;
  tag: string;
  classnameTag: string;
  code: string;
};
export default function CardHeader({
  icon,
  title,
  tag,
  classnameTag,
  code,
}: Props) {
  const Icon = iconsCodeSnippet[icon];
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!isCopied) return;
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [isCopied]);
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center px-3.5 py-2.5 border-b border-csb-border bg-csb-header",
      )}
    >
      <div className={cn("flex flex-row gap-2 items-center")}>
        <Icon
          size={16}
          className={"text-csb-hint"}
        />
        <p
          className={cn(
            "font-medium text-xs text-nowrap text-csb-muted",
            jetbrains_mono.className,
          )}
        >
          {title}
        </p>
        <span
          className={cn(
            "px-2 py-0.5 font-medium text-[11px] rounded-[20px]",
            classnameTag,
          )}
        >
          {tag}
        </span>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setIsCopied(true);
        }}
        className={cn(
          "w-7 aspect-square rounded-lg text-csb-hint bg-transparent transition-colors duration-200 hover:bg-white/6 hover:text-csb-muted cursor-pointer flex items-center justify-center",
        )}
      >
        {isCopied ? (
          <Check
            size={16}
            className={"text-csb-success"}
          />
        ) : (
          <Copy size={16} />
        )}
      </button>
    </div>
  );
}
