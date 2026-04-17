"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import ResultsList from "@/components/command-palette/ResultsList";

export default function CommandInput() {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [selectId, setSelectId] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    function handleDropdown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        setOpenDropdown(true);
        inputRef.current?.focus();
        return;
      }
    }
    window.addEventListener("keydown", handleDropdown);
    return () => {
      window.removeEventListener("keydown", handleDropdown);
    };
  }, []);
  return (
    <>
      <div className={"w-1/2 flex relative z-20 flex-col gap-5"}>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectId(0);
          }}
          value={query}
          ref={inputRef}
          onFocus={() => setOpenDropdown(true)}
          autoComplete={"off"}
          id={"command-palette-command-input"}
          type="text"
          placeholder={"Начните вводить команду или текст для поиска"}
          className={
            "outline-none border border-[#27272a] rounded-xl px-5 pl-11 py-2.5 w-full caret-indigo-600" +
            " selection:bg-indigo-600/50 bg-[#09090b]"
          }
        />
        <span className={"absolute translate-y-1/2 left-2.5"}>
          <Search size={24} />
        </span>
        <AnimatePresence>
          {openDropdown && (
            <ResultsList
              setQueryAction={setQuery}
              setOpenDropdownAction={setOpenDropdown}
              query={query}
              selectId={selectId}
              setSelectIdAction={setSelectId}
            />
          )}
        </AnimatePresence>
      </div>
      <p className={"font-medium text-lg text-center absolute top-1/2"}>
        Нажмите Ctrl+B
      </p>
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            onClick={() => setOpenDropdown(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={"absolute z-10 bg-white/5 inset-0 backdrop-blur-xs"}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
