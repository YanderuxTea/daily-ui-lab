"use client";
import useMainContext from "@/components/main/useMainContext";
import { useMemo } from "react";
import { linksUIData } from "@/data/LinksUIData";
import Link from "next/link";
import { ArrowBigRight, Monitor, Smartphone } from "lucide-react";
import Divider from "@/components/main/Divider";
import { motion } from "framer-motion";

export default function ContainerComponents() {
  const { query, filter, sort } = useMainContext();
  const arrayComponents = useMemo(() => {
    return linksUIData
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query.trim().toLowerCase()) &&
          item.devices.some((device) => filter.includes(device)),
      )
      .sort((a, b) =>
        sort === "desc"
          ? b.createdAt.getTime() - a.createdAt.getTime()
          : a.createdAt.getTime() - b.createdAt.getTime(),
      );
  }, [query, filter, sort]);
  return (
    <>
      <Divider count={arrayComponents.length} />
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}>
        {arrayComponents.map((component, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.1, 1) }}
              key={`${component.title}-${index}-${sort}`}
              layout
              className={"flex"}
            >
              <Link
                href={component.href}
                className={
                  "relative p-5 border" +
                  " border-slate-800/50 group bg-slate-900/30 transition-all duration-300 flex flex-col w-full" +
                  " rounded-2xl hover:bg-slate-900/60 hover:border-emerald-500/40 gap-3"
                }
              >
                <p
                  className={
                    "flex flex-row justify-between items-start text-slate-100 font-bold transition-colors" +
                    " group-hover:text-emerald-400"
                  }
                >
                  {component.title}
                  <span
                    className={
                      "flex flex-row gap-1.5 text-slate-200 opacity-60 transition-opacity" +
                      " group-hover:opacity-100"
                    }
                  >
                    {component.devices.some((device) => device === "pc") && (
                      <Monitor size={14} />
                    )}
                    {component.devices.some(
                      (device) => device === "mobile",
                    ) && <Smartphone size={14} />}
                  </span>
                </p>

                <p className={"text-xs text-slate-500 leading-relaxed flex-1"}>
                  {component.description}
                </p>
                {component.createdAt && (
                  <p className={"text-[10px] text-slate-600"}>
                    Дата добавления:{" "}
                    <span className={"text-slate-500"}>
                      {new Date(component.createdAt).toLocaleDateString(
                        "ru-RU",
                      )}
                    </span>
                  </p>
                )}
                <div className={"flex flex-row justify-between items-start"}>
                  <p className={"font-mono text-[10px] text-emerald-500/70"}>
                    {component.stack.join(" / ")}
                  </p>
                  <div
                    className={
                      "rounded-full flex items-center justify-center text-slate-200 bg-slate-800" +
                      " group-hover:bg-emerald-500 transition-colors group-hover:text-slate-950 w-6 aspect-square"
                    }
                  >
                    <ArrowBigRight size={16} />
                  </div>
                </div>
                {linksUIData.at(-1)?.href === component.href && (
                  <motion.p
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: [1, 0.9, 1], opacity: [1, 0.8, 1] }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className={
                      "px-2 py-1 bg-emerald-500 max-w-max text-[10px] uppercase font-bold text-slate-950 rounded-full" +
                      " shadow-xs shadow-emerald-500/50 absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2" +
                      " select-none pointer-events-none"
                    }
                  >
                    new
                  </motion.p>
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
