import { useContext } from "react";
import { ContextMenuContext } from "@/components/context-menu/ContextMenuContext";

export default function useContextMenu() {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("Компонент не обернут в провайдер контекстного меню");
  }
  return context;
}
