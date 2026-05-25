"use client";
import { onest } from "@/lib/font";
import { cn } from "@/lib/utils";
import { JSX, useMemo, useState } from "react";
import FeedContent from "./content/FeedContent";
import ProfileContent from "./content/ProfileContent";
import TableContent from "./content/TableContent";
import MainCard from "./MainCard";
type Select = "profile" | "feed" | "table";
type SelectContent = {
  title: string;
  content: JSX.Element;
};
export default function SLPage() {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [choise, setChoise] = useState<Select>("profile");
  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);
  const mapChoise: Record<Select, SelectContent> = {
    profile: {
      title: "Профиль",
      content: <ProfileContent isLoader={isLoader} />,
    },
    feed: { title: "Лента", content: <FeedContent isLoader={isLoader} /> },
    table: {
      title: "Таблица",
      content: (
        <TableContent
          isLoader={isLoader}
          formatter={formatter}
        />
      ),
    },
  };
  return (
    <main
      className={cn(
        "flex items-center justify-center p-2.5 w-full min-h-screen bg-sl-bg-base text-sl-text-light",
        onest.className,
      )}
    >
      <div className={cn("flex flex-col gap-6 max-w-3xl w-full")}>
        <div
          className={cn("flex flex-wrap justify-between gap-2.5 items-center")}
        >
          <div className={cn("flex flex-row gap-1.5")}>
            {Object.entries(mapChoise).map(([key, item]) => {
              return (
                <button
                  key={`${key}-selector`}
                  onClick={() => setChoise(key as Select)}
                  className={cn(
                    "cursor-pointer border px-3.5 py-1.25 text-xs font-medium rounded-lg transition-colors duration-150",
                    key === choise
                      ? "text-sl-accent-purple bg-sl-bg-dark border-sl-accent-violet"
                      : "text-sl-muted-lavender bg-sl-bg-tertiary border-sl-border-primary",
                  )}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setIsLoader((prev) => !prev)}
            className={cn(
              "px-5 py-2.25 cursor-pointer text-[13px] font-medium transition-all duration-150 hover:opacity-85 hover:scale-102 origin-center active:scale-97 rounded-[10px] border",
              isLoader
                ? "text-white bg-sl-accent-violet border-transparent"
                : "text-sl-accent-purple border-sl-bg-deep bg-sl-bg-primary",
            )}
          >
            {isLoader ? "Показать контент" : "Показать скелетон"}
          </button>
        </div>
        <MainCard key={`${choise}-${isLoader}`}>
          {mapChoise[choise].content}
        </MainCard>
      </div>
    </main>
  );
}
