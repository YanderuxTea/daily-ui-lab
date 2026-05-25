"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

export default function MainCard({
  children,
  ...props
}: {
  children: ReactNode;
  props?: HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.4 }}
      className={cn(
        "w-full p-4.5 border bg-sl-bg-secondary border-sl-border-dark rounded-2xl",
      )}
    >
      {children}
    </motion.div>
  );
}
