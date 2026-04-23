import { InputHTMLAttributes } from "react";

export default function InputStepper({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "bg-white/4 rounded-lg px-3 py-2.5 text-[#f1f5f9] text-sm border border-white/8 placeholder:text-[#475569]" +
        " focus:border-[#3b82f6]" +
        " focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] outline-none"
      }
    />
  );
}
