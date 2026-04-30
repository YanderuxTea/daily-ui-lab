import { createContext, Dispatch, SetStateAction } from "react";

export type PricingContext = {
  isYearly: boolean;
  setIsYearly: Dispatch<SetStateAction<boolean>>;
};
export const PricingContext = createContext<PricingContext | null>(null);
