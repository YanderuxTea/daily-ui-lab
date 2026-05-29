"use client";
import { cn } from "@/lib/utils";
import HeaderWidget from "./HeaderWidget";
import MainWidget from "./MainWidget";
import { useRef, useState } from "react";

export default function Widget() {
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className={cn("flex flex-col gap-3.5 w-full max-w-lg")}>
      <HeaderWidget
        textareaRef={textareaRef}
        setText={setText}
      />
      <MainWidget
        textareaRef={textareaRef}
        text={text}
        setText={setText}
      />
    </div>
  );
}
