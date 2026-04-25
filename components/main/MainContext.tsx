import { createContext, Dispatch, SetStateAction } from "react";
import { Devices } from "@/data/LinksUIData";

export type SortedType = "asc" | "desc";
export type MainContextType = {
  filter: Devices[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<Devices[]>>;
  setSort: Dispatch<SetStateAction<SortedType>>;
  sort: SortedType;
};
export const MainContext = createContext<MainContextType | null>(null);
