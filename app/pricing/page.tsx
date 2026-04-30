import PricingContainer from "@/components/pricing/PricingContainer";
import PricingProvider from "@/components/pricing/PricingProvider";
import TogglePricing from "@/components/pricing/TogglePricing";
import { manrope, syne } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function PPage() {
  return (
    <main
      className={cn(
        "bg-pc-bg min-h-screen w-full p-2.5 flex items-center justify-center flex-col gap-12 text-pc-text-primary",
        manrope.className,
      )}
    >
      <div className={cn("flex flex-col gap-1 text-center")}>
        <h1 className={cn("text-[28px] font-bold", syne.className)}>
          Выберите свой план
        </h1>
        <p className={cn("text-sm text-pc-text-muted")}>
          Без скрытых платежей. Отмена в любое время.
        </p>
      </div>
      <PricingProvider>
        <TogglePricing />
        <PricingContainer />
      </PricingProvider>
    </main>
  );
}
