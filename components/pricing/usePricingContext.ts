import { useContext } from "react";
import { PricingContext } from "./PricingContext";

export default function usePricingContext() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("Компонент не обернут в провайдер цен");
  }
  return context;
}
