"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  subText: string;
  tag: string;
  classnameTag: string;
  classnameSwiper: string;
  classnameFill: string;
  textFor: string;
  icon: LucideIcon;
  textComplete: string;
};
export default function Widget({
  title,
  subText,
  tag,
  classnameTag,
  classnameSwiper,
  classnameFill,
  textFor,
  icon,
  textComplete,
}: Props) {
  const Icon = icon;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  useEffect(() => {
    function resize() {
      if (trackRef.current) setTrackWidth(trackRef.current.clientWidth);
    }
    resize();
    window.document.addEventListener("resize", resize);
    return () => {
      window.document.removeEventListener("resize", resize);
    };
  }, []);
  const controls = useAnimation();
  const variants = {
    default: { x: 0 },
    active: { x: trackWidth - 6 - 44 },
  };
  const [isActive, setIsActive] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(100);
  const [widthFill, setWidthFill] = useState<number>(0);
  useEffect(() => {
    if (!isActive) return;
    setTimeout(() => {
      setIsActive(false);
      controls.start("default");
      setOpacity(100);
      setWidthFill(0);
    }, 2000);
  }, [controls, isActive]);
  return (
    <div
      className={cn(
        "flex flex-col px-4.5 py-4 border rounded-[14px] border-swc-border bg-swc-card gap-3.5 max-w-lg w-full",
      )}
    >
      <div className={cn("flex flex-col gap-1")}>
        <div className={cn("flex flex-row justify-between")}>
          <span className={cn("text-sm font-medium")}>{title}</span>
          <span
            className={cn(
              "text-[11px] font-medium py-0.5 px-2.5 rounded-[20px]",
              classnameTag,
            )}
          >
            {tag}
          </span>
        </div>
        <p className={cn("text-xs text-swc-muted")}>{subText}</p>
      </div>
      <div
        ref={trackRef}
        className={cn(
          "w-full border p-0.75 rounded-full bg-swc-track relative overflow-clip",
          isActive ? "border-swc-success" : "border-swc-border",
        )}
      >
        <motion.div
          variants={variants}
          animate={controls}
          onDragEnd={
            isActive
              ? undefined
              : () => {
                  if (isActive) {
                    controls.start("active");
                    setOpacity(0);
                    setWidthFill(100);
                  } else {
                    controls.start("default");
                    setOpacity(100);
                    setWidthFill(0);
                  }
                }
          }
          onDrag={(e, i) => {
            if (isActive) return;
            const passedDistance = Math.min(
              100,
              (i.offset.x / trackWidth) * 100,
            );
            setOpacity(60 - passedDistance);
            setWidthFill(passedDistance);
            if (i.offset.x >= trackWidth * 0.6) {
              controls.start("active");
              setOpacity(0);
              setWidthFill(100);
              setIsActive(true);
            }
          }}
          drag={isActive ? undefined : "x"}
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          transition={{ type: "spring", damping: 60, stiffness: 800 }}
          className={cn(
            "w-11 aspect-square rounded-full cursor-pointer flex items-center justify-center relative z-2 touch-none",
            isActive ? "bg-swc-success" : classnameSwiper,
          )}
        >
          {isActive ? <Check size={19} /> : <Icon size={19} />}
        </motion.div>
        <motion.div
          className={cn(
            "absolute inset-y-0 origin-right left-0 rounded-full",
            isActive ? "bg-swc-success-fill/50" : classnameFill,
          )}
          animate={{ width: `${widthFill}%` }}
          transition={{ type: "tween" }}
        ></motion.div>
        <span
          className={cn(
            "absolute inset-0 pointer-events-none flex items-center justify-center font-medium text-xs z-1 flex-row gap-1",
            isActive ? "text-swc-success" : "text-swc-hint",
          )}
          style={{ opacity: isActive ? 100 : `${opacity}%` }}
        >
          {isActive ? (
            <>
              <Check size={12} />
              {textComplete}
            </>
          ) : (
            `Потянитя для ${textFor}`
          )}
        </span>
      </div>
    </div>
  );
}
