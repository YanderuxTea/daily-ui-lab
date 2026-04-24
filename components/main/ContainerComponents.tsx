"use client";
import useMainContext from "@/components/main/useMainContext";
import { useMemo } from "react";
import { linksUIData } from "@/data/LinksUIData";
import Link from "next/link";
import { ArrowBigRight, Monitor, Smartphone } from "lucide-react";
import Divider from "@/components/main/Divider";

export default function ContainerComponents() {
  const { query, filter } = useMainContext();
  const arrayComponents = useMemo(() => {
    return linksUIData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase()) &&
        item.devices.some((device) => filter.includes(device)),
    );
  }, [query, filter]);
  return (
    <>
      <Divider count={arrayComponents.length} />
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}>
        {arrayComponents.map((component, index) => {
          return (
            <Link
              href={component.href}
              key={`${component.title}-${index}`}
              className={
                "p-5 border" +
                " border-slate-800/50 group bg-slate-900/30 transition-all duration-300 flex flex-col" +
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
                  {component.devices.some((device) => device === "mobile") && (
                    <Smartphone size={14} />
                  )}
                </span>
              </p>
              <p className={"text-xs text-slate-500 leading-relaxed flex-1"}>
                {component.description}
              </p>
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
            </Link>
          );
        })}
      </div>
    </>
  );
}
