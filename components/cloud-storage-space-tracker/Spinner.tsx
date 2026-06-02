import { cn } from "@/lib/utils";

export default function Spinner() {
  return (
    <div
      className={cn(
        "relative w-3.5 aspect-square rounded-full bg-linear-to-b from-70% from-transparent to-70% to-white flex items-center justify-center origin-center animate-spin overflow-clip",
      )}
    >
      <div
        className={cn(
          "bg-cst-bg-card w-2.5 aspect-square rounded-full relative z-1",
        )}
      ></div>
      <div className={cn("bg-white/20 inset-0 absolute")}></div>
    </div>
  );
}
