"use client";
import { motion } from "framer-motion";
import { CommandData, commandsData } from "@/data/command-palette/commandsData";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  query: string;
  setSelectIdAction: (id: number) => void;
  selectId: number;
  setOpenDropdownAction: (openDropdown: boolean) => void;
  setQueryAction: (query: string) => void;
};
export default function ResultsList({
  query,
  setSelectIdAction,
  selectId,
  setOpenDropdownAction,
  setQueryAction,
}: Props) {
  const commandsBeforeSearch = useMemo(() => {
    return commandsData
      .map((command) => {
        if (command.title.toLowerCase().includes(query.toLowerCase())) {
          return command;
        }
      })
      .filter((comm): comm is CommandData => Boolean(comm));
  }, [query]);
  const splitCommandsByCategories = commandsBeforeSearch.reduce(
    (acc: Record<CommandData["category"], CommandData[]>, curr) => {
      if (acc[curr.category] === undefined) {
        acc[curr.category] = [];
      }
      acc[curr.category].push(curr);
      return acc;
    },
    {},
  );
  const indexesAvailableId = commandsBeforeSearch.map((command) => {
    return command.id;
  });
  const [indexSelect, setIndexSelect] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleSelect(e: KeyboardEvent) {
      if (commandsBeforeSearch.length === 0) {
        return;
      }
      if (e.key === "ArrowDown") {
        const next = Math.min(
          typeof indexSelect === "number" ? indexSelect + 1 : 0,
          indexesAvailableId.length - 1,
        );
        setSelectIdAction(indexesAvailableId[next]);
        setIndexSelect(next);
      }
      if (e.key === "ArrowUp") {
        const next = Math.max(0, indexSelect ? indexSelect - 1 : 0);
        setSelectIdAction(indexesAvailableId[next]);
        setIndexSelect(next);
      }
      if (e.key === "Enter") {
        if (indexSelect !== null) {
          setQueryAction(commandsBeforeSearch[indexSelect].title);
          setOpenDropdownAction(false);
        }
      }
    }
    window.addEventListener("keydown", handleSelect);
    return () => {
      window.removeEventListener("keydown", handleSelect);
    };
  }, [
    commandsBeforeSearch.length,
    indexSelect,
    indexesAvailableId,
    setSelectIdAction,
  ]);
  useEffect(() => {
    setIndexSelect(null);
  }, [query]);
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
      className={
        "absolute bg-[#09090b] inset-x-0 top-full h-100 border-[#27272a] border rounded-xl"
      }
    >
      <div
        ref={containerRef}
        className={`flex flex-col w-full h-full overflow-y-auto select-none divide-y divide-neutral-800 ${commandsBeforeSearch.length === 0 && "justify-center items-center"}`}
      >
        {commandsBeforeSearch.length > 0 ? (
          Object.entries(splitCommandsByCategories).map(
            ([category, commands]) => {
              return (
                <div key={category} className={"flex flex-col "}>
                  {commands.map((comm) => {
                    const Icon = comm.icon;
                    return (
                      <div
                        id={comm.id.toString()}
                        key={comm.id + comm.category}
                        className={`p-2.5 rounded-xl h-10 items-center flex flex-row justify-between ${selectId === comm.id && "bg-indigo-600"}`}
                      >
                        <div className={"flex flex-row gap-2.5 items-center"}>
                          <Icon />
                          {comm.title}
                        </div>
                        <div className={"flex flex-row gap-2.5 items-center"}>
                          <p className={"text-xs font-light text-neutral-300"}>
                            {comm.category}
                          </p>
                          <p className={"text-sm font-mono"}>{comm.shortcut}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            },
          )
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </motion.div>
  );
}
