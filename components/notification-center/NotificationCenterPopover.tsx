"use client";

import { motion } from "framer-motion";
import { Dispatch, RefObject, SetStateAction, useMemo, useState } from "react";
import {
  NotificationCenterData,
  NotificationCenterType,
} from "@/data/notification-center/notificationCenterData";
import { Check, CircleX, Info, LucideIcon, TriangleAlert } from "lucide-react";
import NotificationCard from "@/components/notification-center/NotificationCard";

type Props = {
  popoverRef: RefObject<HTMLDivElement | null>;
  arrNotification: NotificationCenterData[];
  setNotificationDataAction: Dispatch<SetStateAction<NotificationCenterData[]>>;
  unreadArrayNotification: NotificationCenterData[];
};
type Filter = "all" | "unread";
export default function NotificationCenterPopover({
  popoverRef,
  setNotificationDataAction,
  arrNotification,
  unreadArrayNotification,
}: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const data = useMemo(() => {
    return filter === "all" ? arrNotification : unreadArrayNotification;
  }, [arrNotification, filter, unreadArrayNotification]);
  const iconMap: Record<NotificationCenterType, LucideIcon> = {
    error: CircleX,
    warning: TriangleAlert,
    info: Info,
    success: Check,
  };
  const colorMap: Record<NotificationCenterType, string> = {
    error: "bg-nc-error-bg text-nc-error-icon",
    warning: "bg-nc-warning-bg text-nc-warning-icon",
    info: "bg-nc-info-bg text-nc-info-icon",
    success: "bg-nc-success-bg text-nc-success-icon",
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.8 }}
      exit={{
        opacity: 0,
        scale: 0.96,
        y: -4,
        transition: { ease: "easeIn", duration: 0.15 },
      }}
      ref={popoverRef}
      onClick={(e) => e.stopPropagation()}
      className={
        "w-90 bg-nc-surface border border-nc-border rounded-2xl origin-top-right absolute top-13.5 flex flex-col" +
        " divide-y divide-nc-border-divider"
      }
    >
      <div className={"h-13 flex justify-between items-center px-4.5"}>
        <p className={"font-semibold text-sm text-nc-text-primary"}>
          Notifications
        </p>
        <button
          onClick={() =>
            setNotificationDataAction((prevState) => {
              return prevState.map((notification) => {
                if (!notification.isRead) {
                  return {
                    ...notification,
                    isRead: true,
                  };
                }
                return notification;
              });
            })
          }
          className={
            "cursor-pointer text-xs font-medium text-nc-accent transition-opacity hover:opacity-75 "
          }
        >
          Mark all read
        </button>
      </div>
      <div className={"flex flex-row gap-1 p-4.5"}>
        <button
          key={"button-all-filter"}
          onClick={() => setFilter("all")}
          className={`border px-4.5 h-10 cursor-pointer border-nc-border-divider text-[13px] font-medium transition-colors relative ${filter === "all" ? "text-nc-text-primary" : "text-nc-text-muted hover:text-nc-icon-bell"}`}
        >
          All
          {filter === "all" && (
            <motion.div
              layoutId={"down-line"}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={
                "absolute inset-x-0 h-0.5 bg-nc-accent rounded-[1px] bottom-0 z-10"
              }
            ></motion.div>
          )}
        </button>
        <button
          key={"button-unread-filter"}
          onClick={() => setFilter("unread")}
          className={`border px-4.5 h-10 cursor-pointer border-nc-border-divider text-[13px] font-medium transition-colors relative ${filter === "unread" ? "text-nc-text-primary" : "text-nc-text-muted hover:text-nc-icon-bell"}`}
        >
          Unread
          {filter === "unread" && (
            <motion.div
              layoutId={"down-line"}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={
                "absolute inset-x-0 h-0.5 bg-nc-accent rounded-[1px] bottom-0 z-10"
              }
            ></motion.div>
          )}
        </button>
      </div>
      <div className={"flex flex-col divide-y divide-nc-border-item"}>
        {data.length > 0 ? (
          data.map((notification, index) => {
            const Icon = iconMap[notification.type];
            const color = colorMap[notification.type];
            return (
              <NotificationCard
                key={notification.id}
                Icon={Icon}
                isRead={notification.isRead}
                color={color}
                title={notification.title}
                content={notification.content}
                timeAgo={notification.timeAgo}
                index={index}
              />
            );
          })
        ) : (
          <p
            className={
              "text-center p-4.5 text-nc-text-muted text-sm font-medium"
            }
          >
            No notifications
          </p>
        )}
      </div>
      <div
        className={
          "h-11 text-[13px] font-medium text-nc-accent transition-opacity hover:opacity-75 justify-center items-center" +
          " flex select-none cursor-pointer"
        }
      >
        View all notifications
      </div>
    </motion.div>
  );
}
