"use client";
import {
  firstCode,
  secondCodeFirstChoice,
  thirdCodeSecondChoice,
} from "@/data/git-merge-conflict-resolver-widget/codeData";
import { cn } from "@/lib/utils";
import { JSX, useState } from "react";
import Choice from "./Choice";
import Footer from "./Footer";
import Header from "./Header";
import Row from "./Row";
export type Choice = 0 | 1 | null;
export default function Widget() {
  const [choice, setChoice] = useState<Choice>(null);

  const firstChoice = (
    <Choice classname={"border-gcr-current-border bg-emerald-950/10"}>
      <div
        className={cn(
          "bg-emerald-500/10 px-4 py-1 text-[11px] font-semibold text-gcr-current-border flex flex-row justify-between items-center",
        )}
      >
        {"<<<<<<< Текущие изменения (ветка: main)"}
        <button
          onClick={() => setChoice(0)}
          className={cn(
            "px-1.5 py-1 border text-[11px] bg-gcr-bg-editor/60 rounded cursor-pointer font-normal transition-colors duration-150 hover:text-white border-emerald-500/20",
          )}
        >
          Принять текущие
        </button>
      </div>
      <div className={cn("px-7 flex flex-row gap-3 py-1")}>
        <span className={cn("text-gcr-text-muted text-xs")}>2</span>
        {secondCodeFirstChoice}
      </div>
    </Choice>
  );

  const secondChoice = (
    <Choice classname={"border-gcr-incoming-border bg-purple-950/10"}>
      <div className={cn("px-7 flex flex-row gap-3 py-1")}>
        <span className={cn("text-gcr-text-muted text-xs")}>3</span>
        {thirdCodeSecondChoice}
      </div>
      <div
        className={cn(
          "bg-purple-500/10 px-4 py-1 text-[11px] font-semibold flex flex-row justify-between items-center text-gcr-incoming-border",
        )}
      >
        {">>>>>>> Входящие изменения (ветка: feature/ui-upgrade)"}
        <button
          onClick={() => setChoice(1)}
          className={cn(
            "px-1.5 py-1 border text-[11px] bg-gcr-bg-editor/60 rounded cursor-pointer font-normal transition-colors duration-150 hover:text-white border-purple-500/20",
          )}
        >
          Принять входящие
        </button>
      </div>
    </Choice>
  );
  const choiceMap: Record<number, JSX.Element> = {
    0: (
      <Row>
        <div className={cn("flex flex-row gap-3 py-1")}>
          <span className={cn("text-gcr-text-muted text-xs")}>2</span>
          {secondCodeFirstChoice}
        </div>
      </Row>
    ),
    1: (
      <Row>
        <div className={cn("flex flex-row gap-3 py-1")}>
          <span className={cn("text-gcr-text-muted text-xs")}>2</span>
          {thirdCodeSecondChoice}
        </div>
      </Row>
    ),
  };
  return (
    <div
      className={cn(
        "flex flex-col border bg-gcr-bg-editor text-sm rounded-xl shadow-2xl max-w-xl w-full divide-y divide-gcr-border overflow-clip selection:bg-gcr-incoming-border/30 transition-all duration-300",
        choice === 0 || choice === 1
          ? "border-emerald-500/30 shadow-emerald-950/20"
          : "border-gcr-border shadow-black",
      )}
    >
      <Header choice={choice} />
      <div className={cn("flex flex-col")}>
        <Row>{firstCode}</Row>
        {choice === null ? (
          <>
            {firstChoice}
            <div
              className={cn(
                "text-[11px] text-gcr-text-muted font-bold pl-4 bg-gray-800/40",
              )}
            >
              =======
            </div>
            {secondChoice}
          </>
        ) : (
          choiceMap[choice]
        )}
        <Row>
          <span className={cn("text-xs text-gcr-text-muted")}>
            {choice === 0 || choice === 1 ? 3 : 4}
          </span>
          <span>{"};"}</span>
        </Row>
      </div>
      <Footer choice={choice} />
    </div>
  );
}
