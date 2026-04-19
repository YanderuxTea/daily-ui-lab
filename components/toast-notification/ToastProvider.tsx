"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Notification,
  NotificationContextType,
  ToastContext,
  TypeNotification,
} from "@/components/toast-notification/ToastContext";

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [pausedNotifications, setPausedNotifications] = useState<
    Notification[]
  >([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const leftTime = useRef<number>(0);
  function addNotification(type: TypeNotification, text: string) {
    setNotifications((prevState) => {
      if (prevState.length >= 5) {
        const newState = prevState.slice(1);
        return [
          ...newState,
          {
            type: type,
            text: text,
            id: uuidv4(),
            expiresTime: Date.now() + 4000,
          },
        ];
      }
      return [
        ...prevState,
        {
          type: type,
          text: text,
          id: uuidv4(),
          expiresTime: Date.now() + 4000,
        },
      ];
    });
  }
  function removeNotification(id: string) {
    setNotifications((prevState) => prevState.filter((n) => n.id !== id));
  }
  function addNotificationInPaused(notification: Notification) {
    setPausedNotifications((prevState) => [...prevState, notification]);
    leftTime.current = notification.expiresTime - Date.now();
  }
  function removeNotificationInPaused(notification: Notification) {
    setPausedNotifications((prevState) =>
      prevState.filter((n) => n.id !== notification.id),
    );
    setNotifications((prevState) =>
      prevState.map((notify) => {
        if (notify.id === notification.id) {
          return {
            ...notify,
            expiresTime: Date.now() + leftTime.current,
          };
        }
        return notify;
      }),
    );
  }
  const value: NotificationContextType = {
    addNotificationInPaused: addNotificationInPaused,
    removeNotificationInPaused: removeNotificationInPaused,
    notifications: notifications,
    addNotification: addNotification,
    removeNotification: removeNotification,
  };
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNotifications((prevState) =>
        prevState.filter(
          (notification) =>
            notification.expiresTime > Date.now() ||
            pausedNotifications.includes(notification),
        ),
      );
    }, 100);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [pausedNotifications]);
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
