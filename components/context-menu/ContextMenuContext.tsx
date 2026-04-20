import { createContext, RefObject } from "react";

export type ContextMenuContextType = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  setPosition: ({ x, y }: { x: number; y: number }) => void;
  x: number;
  y: number;
  refMenu: RefObject<HTMLDivElement | null>;
  setIsTriggeredText: (text: string) => void;
  isTriggeredText: string;
  isTriggered: boolean;
  handleTriggered: (text: string) => void;
};
export const ContextMenuContext = createContext<ContextMenuContextType | null>(
  null,
);
