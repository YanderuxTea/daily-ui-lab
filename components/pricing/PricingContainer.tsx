"use client";

import { pricingData } from "@/data/pricing/pricingData";
import { cn } from "@/lib/utils";
import PricingCard from "./PricingCard";

export default function PricingContainer() {
  return (
    <div className={cn("flex flex-wrap gap-5 justify-center")}>
      {pricingData.map((item) => {
        return (
          <PricingCard
            key={item.id}
            data={item}
            className={cn(
              item.popular &&
                "bg-pc-surface-highlighted border-pc-border-highlighted shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_20px_60px_rgba(59,130,246,0.12)]",
            )}
          />
        );
      })}
    </div>
  );
}
