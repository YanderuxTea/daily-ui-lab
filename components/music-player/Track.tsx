"use client";
import { space_mono } from "@/lib/font";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
type Props = {
  currentTime: number;
  duration: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  interval: RefObject<NodeJS.Timeout | null>;
  setIntervalFunc: () => void;
  isPause: boolean;
};
export default function Track({
  currentTime,
  duration,
  setCurrentTime,
  interval,
  setIntervalFunc,
  isPause,
}: Props) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  const progress = useTransform(x, [0, trackWidth], ["0%", "100%"]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (interval.current) {
      clearInterval(interval.current);
    }
    const rect = trackRef.current?.getBoundingClientRect();
    if (rect) {
      const clickX = e.clientX - rect.left;
      const clampedX = Math.max(Math.min(rect.right - rect.left, clickX), 0);
      x.set(clampedX);
      setIsDragging(true);
      const newTime = (clampedX / (rect.right - rect.left)) * duration;
      setCurrentTime(newTime);
    }
  }
  function handlePointeMove(e: PointerEvent) {
    if (isDragging) {
      const rect = trackRef.current?.getBoundingClientRect();
      if (rect) {
        const clientX = e.clientX - rect.left;
        const clampedX = Math.max(Math.min(rect.right - rect.left, clientX), 0);
        x.set(clampedX);
        const newTime = (clampedX / (rect.right - rect.left)) * duration;
        setCurrentTime(newTime);
      }
    }
  }
  function handlePointerUp() {
    if (!isPause) {
      setIntervalFunc();
    }
    setIsDragging(false);
  }
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("pointermove", handlePointeMove);
      document.addEventListener("pointerup", handlePointerUp);
    } else {
      document.removeEventListener("pointermove", handlePointeMove);
      document.removeEventListener("pointerup", handlePointerUp);
    }
    return () => {
      document.removeEventListener("pointermove", handlePointeMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);
  useEffect(() => {
    function updateWidth() {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  useEffect(() => {
    if (isDragging) return;
    x.set((currentTime / duration) * trackWidth);
  }, [currentTime, duration, isDragging, trackWidth]);

  return (
    <div className={cn("flex flex-col gap-2 select-none")}>
      <div
        className={cn(
          "flex flex-row justify-between text-[11px] text-mp-text-muted",
          space_mono.className,
        )}
      >
        <p>
          {Math.trunc(currentTime / 60)}:
          {Math.trunc(currentTime % 60)
            .toString()
            .padStart(2, "0")}
        </p>
        <p>
          {Math.trunc(duration / 60)}:
          {Math.trunc(duration % 60)
            .toString()
            .padStart(2, "0")}
        </p>
      </div>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onPointerDown={handlePointerDown}
        ref={trackRef}
        className={cn(
          "relative h-1 rounded-full bg-mp-progress-track touch-none cursor-pointer",
        )}
      >
        <motion.div
          initial={{ width: 0 }}
          style={{ width: progress }}
          className={cn(
            "absolute inset-y-0 bg-mp-progress-fill rounded-full origin-left pointer-events-none",
          )}
        ></motion.div>
        <AnimatePresence>
          {(isVisible || isDragging) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0 } }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
              drag={"x"}
              dragConstraints={{ left: 0, right: trackWidth }}
              dragElastic={0}
              dragMomentum={false}
              style={{ x }}
              className={cn(
                "w-3 h-3 rounded-full bg-mp-progress-thumb absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none shadow-[0_0_0_3px_rgba(124,106,255,0.3)]",
              )}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
