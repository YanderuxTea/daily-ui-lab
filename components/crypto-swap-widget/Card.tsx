"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Card({
  children,
  classname,
}: {
  children: ReactNode;
  classname: string;
}) {
  return (
    <motion.div
      layout={"y"}
      className={cn(
        "flex flex-col border border-csw-border p-4 bg-csw-bg-input rounded-2xl w-full gap-2 transition-colors duration-150 focus-within:border-csw-border-focus",
        classname,
      )}
    >
      {children}
    </motion.div>
  );
}
