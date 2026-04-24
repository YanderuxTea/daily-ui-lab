import { useContext } from "react";
import { MainContext } from "@/components/main/MainContext";

export default function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("Компонент не обернут в провайдер main");
  }
  return context;
}
