"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import {
  Notification,
  TypeNotification,
} from "@/components/toast-notification/ToastContext";
import {
  CircleAlert,
  CircleCheck,
  CircleX,
  Info,
  LucideIcon,
  X,
} from "lucide-react";
import useToast from "@/components/toast-notification/useToast";
import { useEffect, useRef } from "react";

type Props = {
  notification: Notification;
};
export default function NotificationCard({ notification }: Props) {
  const toast = useToast();
  const configurationNotificationMap: Record<
    TypeNotification,
    {
      icon: LucideIcon;
      color: string;
      title: string;
      before: string;
      bg: string;
    }
  > = {
    error: {
      icon: CircleX,
      color: "text-[#ef4444]",
      before: "before:bg-[#ef4444]",
      bg: "bg-[#ef4444]",
      title: "Request failed",
    },
    warning: {
      icon: CircleAlert,
      color: "text-[#f59e0b]",
      before: "before:bg-[#f59e0b]",
      bg: "bg-[#f59e0b]",
      title: "Storage limit",
    },
    info: {
      icon: Info,
      color: "text-[#3b82f6]",
      before: "before:bg-[#3b82f6]",
      bg: "bg-[#3b82f6]",
      title: "Update available",
    },
    success: {
      icon: CircleCheck,
      color: "text-[#22c55e]",
      before: "before:bg-[#22c55e]",
      bg: "bg-[#22c55e]",
      title: "Changes saved",
    },
  };
  const configurationNotification =
    configurationNotificationMap[notification.type];
  const Icon = configurationNotification.icon;
  const [scope, animate] = useAnimate();
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  useEffect(() => {
    if (scope.current) {
      animationRef.current = animate(
        scope.current,
        { width: 0 },
        {
          duration: 4,
          ease: "linear",
        },
      );
    }
    return () => {
      animationRef.current?.stop();
    };
  }, [animate, scope]);
  return (
    <motion.div
      onHoverStart={() => {
        animationRef.current?.pause();
        toast.addNotificationInPaused(notification);
      }}
      onHoverEnd={() => {
        animationRef.current?.play();
        toast.removeNotificationInPaused(notification);
      }}
      layout
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 60, opacity: 0 }}
      transition={{ type: "tween" }}
      className={
        "bg-[#12121C]/85 border border-white/8 p-2.5 backdrop-blur-md flex flex-col gap-3 w-80 relative" +
        ` before:absolute before:inset-y-0 before:w-0.5 before:left-0 ${configurationNotification.before} rounded-xl overflow-clip`
      }
    >
      <div className={"flex items-center flex-row justify-between"}>
        <div
          className={
            "flex items-center flex-row gap-3 text-sm text-[#f1f5f9] font-medium"
          }
        >
          <span className={`${configurationNotification.color}`}>
            <Icon />
          </span>
          <p>{configurationNotification.title}</p>
        </div>
        <button
          onClick={() => toast.removeNotification(notification.id)}
          className={
            "text-[#f1f5f9] cursor-pointer border border-white/8 rounded-md px-2.5 py-1.25 transition-colors" +
            " duration-200 hover:bg-black/20"
          }
        >
          <X size={16} />
        </button>
      </div>
      <article className={"hyphens-auto text-xs text-[#94a3b8] pl-9"}>
        {notification.text}
      </article>
      <div
        ref={scope}
        className={`${configurationNotification.bg} h-0.5 inset-x-0 absolute bottom-0 origin-right`}
      ></div>
    </motion.div>
  );
}
