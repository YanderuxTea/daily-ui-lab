"use client";
import { CodeSnippetData } from "@/data/code-snippet-block/codeSnippetData";
import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import CardHeader from "./CardHeader";

export default function Card({ props }: { props: CodeSnippetData }) {
  const { icon, tag, title, classnameTag, code } = props;
  return (
    <div
      className={cn(
        "flex flex-col border border-csb-border rounded-[14px] bg-cst-bg-card overflow-clip max-w-md w-full",
      )}
    >
      <CardHeader
        tag={tag}
        title={title}
        classnameTag={classnameTag}
        icon={icon}
        code={code}
      />
      <pre className={cn("p-4", jetbrains_mono.className)}>
        <code className={cn("text-[13px] text-csb-code leading-1.65")}>
          {code}
        </code>
      </pre>
    </div>
  );
}
