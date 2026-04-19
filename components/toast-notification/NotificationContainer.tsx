"use client";
import useToast from "@/components/toast-notification/useToast";
import NotificationCard from "@/components/toast-notification/NotificationCard";
import { AnimatePresence } from "framer-motion";

export default function NotificationContainer() {
  const toast = useToast();
  return (
    <div className={"fixed right-0 bottom-0 flex flex-col p-2.5 gap-3"}>
      <AnimatePresence mode="popLayout">
        {toast.notifications.map((notification) => {
          return (
            <NotificationCard
              notification={notification}
              key={notification.id}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
