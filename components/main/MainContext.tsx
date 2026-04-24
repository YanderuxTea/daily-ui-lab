import { createContext, Dispatch, SetStateAction } from "react";
import { Devices } from "@/data/LinksUIData";

export type MainContextType = {
  filter: Devices[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<Devices[]>>;
};
export const MainContext = createContext<MainContextType | null>(null);
