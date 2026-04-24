"use client";
import { ReactNode, useState } from "react";
import { MainContext, MainContextType } from "@/components/main/MainContext";
import { Devices } from "@/data/LinksUIData";

export default function MainProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<Devices[]>(["pc", "mobile"]);
  const value: MainContextType = {
    filter: filter,
    query: query,
    setFilter: setFilter,
    setQuery: setQuery,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
