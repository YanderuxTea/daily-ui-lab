"use client";
import useMainContext from "@/components/main/useMainContext";
import { LayoutGrid, Monitor, Search, Smartphone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchBlock() {
  const { setQuery, query, filter, setFilter } = useMainContext();
  return (
    <div
      className={
        "flex flex-col gap-4 md:flex-row md:justify-between items-center"
      }
    >
      <div className={"w-full relative flex items-center md:w-1/3"}>
        <span className={"absolute left-3 text-slate-500"}>
          <Search size={16} />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          id={"searchInput"}
          placeholder={"Поиск компонента..."}
          className={
            "border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm bg-slate-900/50 text-slate-200" +
            " outline-none w-full transition-all focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500/50"
          }
        />
      </div>
      <div
        className={
          "text-slate-400 flex flex-row w-full justify-between p-1 border border-slate-800 rounded-xl" +
          " bg-slate-900/80 font-medium text-sm items-center md:max-w-max"
        }
      >
        <AnimatePresence>
          <button
            onClick={() => setFilter(["pc", "mobile"])}
            key={"button-all"}
            className={`flex flex-row gap-3 px-4 py-1.5 items-center relative cursor-pointer transition-colors ${filter.length === 2 ? "text-slate-950" : "hover:text-slate-200"}`}
          >
            {filter.length === 2 && (
              <motion.div
                key={"all-bg"}
                layoutId={"bg-button"}
                className={"absolute inset-0 bg-emerald-500 rounded-lg"}
              ></motion.div>
            )}
            <span className={"items-center relative z-10 flex flex-row gap-3"}>
              <LayoutGrid size={16} /> <span>Все</span>
            </span>
          </button>
          <button
            onClick={() => setFilter(["pc"])}
            key={"button-pc"}
            className={`px-4 py-1.5 items-center relative cursor-pointer transition-colors ${filter.length === 1 && filter.includes("pc") ? "text-slate-950" : "hover:text-slate-200"}`}
          >
            {filter.length === 1 && filter.includes("pc") && (
              <motion.div
                key={"pc-bg"}
                layoutId={"bg-button"}
                className={"absolute inset-0 bg-emerald-500 rounded-lg"}
              ></motion.div>
            )}
            <span className={"items-center relative z-10 flex flex-row gap-3"}>
              <Monitor size={16} /> <span>PC</span>
            </span>
          </button>
          <button
            onClick={() => setFilter(["mobile"])}
            key={"button-mobile"}
            className={`flex flex-row gap-3 px-4 py-1.5 items-center relative cursor-pointer transition-colors ${filter.length === 1 && filter.includes("mobile") ? "text-slate-950" : "hover:text-slate-200"}`}
          >
            {filter.length === 1 && filter.includes("mobile") && (
              <motion.div
                key={"mobile-bg"}
                layoutId={"bg-button"}
                className={"absolute inset-0 bg-emerald-500 rounded-lg"}
              ></motion.div>
            )}
            <span className={"items-center relative z-10 flex flex-row gap-3"}>
              <Smartphone size={16} /> <span>Mobile</span>
            </span>
          </button>
        </AnimatePresence>
      </div>
    </div>
  );
}
