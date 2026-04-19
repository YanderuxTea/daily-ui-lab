import { createContext } from "react";

export type TypeNotification = "success" | "error" | "info" | "warning";
export type Notification = {
  id: string;
  type: TypeNotification;
  text: string;
  expiresTime: number;
};
export type NotificationContextType = {
  notifications: Notification[];
  addNotification: (type: TypeNotification, text: string) => void;
  removeNotification: (id: string) => void;
  addNotificationInPaused: (notification: Notification) => void;
  removeNotificationInPaused: (notification: Notification) => void;
};
export const ToastContext = createContext<NotificationContextType | null>(null);
