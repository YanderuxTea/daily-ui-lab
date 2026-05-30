import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}
export default function Button({ children, disabled, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-3 border font-medium bg-vcm-bg-inner border-vcm-border/50 text-xs transition-all duration-150 flex flex-row justify-between rounded-xl items-center",
        !disabled &&
          "hover:bg-vcm-border/30 hover:border-vcm-border cursor-pointer active:scale-99",
      )}
    >
      {children}
    </button>
  );
}
