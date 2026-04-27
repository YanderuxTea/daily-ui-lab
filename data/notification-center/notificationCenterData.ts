import { v4 as uuid } from "uuid";

export type NotificationCenterType = "info" | "success" | "warning" | "error";
export type NotificationCenterData = {
  id: string;
  title: string;
  content: string;
  type: NotificationCenterType;
  timeAgo: string;
  isRead: boolean;
};
export const notificationCenterData: NotificationCenterData[] = [
  {
    id: uuid(),
    title: "Deployment successful",
    content: "multi-forum v1.3.3 deployed to production without errors",
    type: "success",
    timeAgo: "2 min ago",
    isRead: false,
  },
  {
    id: uuid(),
    title: "New pull request",
    content: '@alex opened "feat: add WebSocket reconnect logic" in main repo',
    type: "info",
    timeAgo: "14 min ago",
    isRead: false,
  },
  {
    id: uuid(),
    title: "Redis memory warning",
    content: "Cache usage at 87% on prod-server-01, consider cleanup",
    type: "warning",
    timeAgo: "1 hr ago",
    isRead: false,
  },
  {
    id: uuid(),
    title: "Build failed",
    content: "CI pipeline failed on node tests - 2 assertions not passing",
    type: "error",
    timeAgo: "3 hr ago",
    isRead: true,
  },
  {
    id: uuid(),
    title: "Milestone reached",
    content: "5,000th user joined Multi Forum - milestone achieved!",
    type: "success",
    timeAgo: "Yesterday",
    isRead: true,
  },
];
