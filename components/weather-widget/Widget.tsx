import { cn } from "@/lib/utils";
import WidgetHeader from "./WidgetHeader";
import WidgetMain from "./WidgetMain";
import WidgetFooter from "./WidgetFooter";

export default function Widget() {
  return (
    <div
      className={cn(
        "flex flex-col p-6 border relative bg-ww-bg-card border-ww-border max-w-sm w-full rounded-3xl before:absolute before:bg-linear-90 before:from-transparent before:via-ww-accent-glow/20 before:to-transparent before:h-px before:top-0 before:inset-x-0 overflow-clip",
      )}
    >
      <WidgetHeader />
      <WidgetMain />
      <div
        className={cn(
          "h-px w-full bg-linear-90 from-transparent via-ww-border to-transparent mb-5",
        )}
      ></div>
      <WidgetFooter />
    </div>
  );
}
