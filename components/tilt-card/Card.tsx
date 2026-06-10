"use client";
import { iconsTiltCard, TiltCardData } from "@/data/tilt-card/tiltCardData";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Card({ props }: { props: TiltCardData }) {
  const { icon, classname, title, description, tag } = props;
  const Icon = iconsTiltCard[icon];
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x);
  const smoothY = useSpring(y);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  function mouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }
  function mouseLeave() {
    x.set(0);
    y.set(0);
  }
  return (
    <div
      className={cn("perspective-midrange max-w-50 w-full select-none")}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
    >
      <motion.div
        transition={{ type: "spring" }}
        style={{ rotateY, rotateX }}
        ref={cardRef}
        className={cn(
          "flex flex-col border p-5 rounded-[14px] bg-tc-card border-tc-border transform-3d gap-2.5",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center w-11.5 aspect-square rounded-lg",
            classname,
          )}
        >
          <Icon size={20} />
        </div>
        <p className={cn("font-medium text-sm")}>{title}</p>
        <p className={cn("flex-1 leading-1.55 text-xs text-tc-muted")}>
          {description}
        </p>
        <span
          className={cn(
            "text-[11px] font-medium rounded-[20px] py-0.75 px-2.25 w-max",
            classname,
          )}
        >
          {tag}
        </span>
      </motion.div>
    </div>
  );
}
