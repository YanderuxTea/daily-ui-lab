"use client";
import NotificationButton from "@/components/notification-center/NotificationButton";
import {
  notificationCenterData,
  NotificationCenterData,
} from "@/data/notification-center/notificationCenterData";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import NotificationCenterPopover from "@/components/notification-center/NotificationCenterPopover";

export default function NotificationPanel() {
  const [notificationData, setNotificationData] = useState<
    NotificationCenterData[]
  >(notificationCenterData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement | null>(null);
  const notificationUnread = useMemo(() => {
    return notificationData.reduce<{
      count: number;
      notifications: NotificationCenterData[];
    }>(
      (acc, curr) => {
        if (!curr.isRead) {
          acc.count += 1;
          acc.notifications.push(curr);
        }
        return acc;
      },
      { count: 0, notifications: [] },
    );
  }, [notificationData]);
  const refButton = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    requestAnimationFrame(() => {
      setElement(panelRef.current);
    });
    function handleClosePopover(e: MouseEvent) {
      if (
        refButton.current?.contains(e.target as Node) ||
        popoverRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    }
    window.document.addEventListener("mousedown", handleClosePopover);
    return () => {
      window.document.removeEventListener("mousedown", handleClosePopover);
    };
  }, []);
  return (
    <div
      ref={panelRef}
      className={
        "max-w-7xl mx-auto w-full flex items-start justify-end relative"
      }
    >
      <NotificationButton
        refButton={refButton}
        setIsOpenAction={setIsOpen}
        count={notificationUnread.count}
      />
      {element &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <NotificationCenterPopover
                unreadArrayNotification={notificationUnread.notifications}
                setNotificationDataAction={setNotificationData}
                arrNotification={notificationData}
                popoverRef={popoverRef}
              />
            )}
          </AnimatePresence>,
          element,
        )}
    </div>
  );
}
