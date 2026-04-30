"use client";
import { ReactNode, useState } from "react";
import { PricingContext } from "./PricingContext";

export default function PricingProvider({ children }: { children: ReactNode }) {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const value: PricingContext = {
    isYearly: isYearly,
    setIsYearly: setIsYearly,
  };
  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
}
