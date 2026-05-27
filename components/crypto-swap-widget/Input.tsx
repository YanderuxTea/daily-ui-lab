import { jetbrains_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";
export default function Input({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="text"
      inputMode={"numeric"}
      placeholder={"0.00"}
      className={cn(
        "font-semibold text-2xl outline-none w-full",
        jetbrains_mono.className,
      )}
    />
  );
}
