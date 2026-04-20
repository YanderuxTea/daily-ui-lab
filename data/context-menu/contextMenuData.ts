import { v4 as uuidv4 } from "uuid";
import {
  Clipboard,
  Copy,
  ExternalLink,
  FileDown,
  Link,
  LucideIcon,
  Scissors,
  Send,
  Share2,
  SquareArrowOutUpRight,
  SquarePen,
  Trash2,
} from "lucide-react";

type MenuItemData = {
  id: string;
  title: string;
  icon: LucideIcon;
  children: MenuItemData[];
  shortcut: string;
  triggerText: string;
};
type MenuData = {
  id: string;
  menuItems: MenuItemData[];
};
export const menuData: MenuData[] = [
  {
    id: uuidv4(),
    menuItems: [
      {
        id: uuidv4(),
        title: "Open",
        children: [],
        icon: ExternalLink,
        shortcut: "",
        triggerText: "Open triggered",
      },
      {
        id: uuidv4(),
        title: "Open in new tab",
        children: [],
        icon: SquareArrowOutUpRight,
        shortcut: "",
        triggerText: "Open in new tab triggered",
      },
    ],
  },
  {
    id: uuidv4(),
    menuItems: [
      {
        id: uuidv4(),
        title: "Copy",
        children: [],
        icon: Copy,
        shortcut: "Ctrl+C",
        triggerText: "Copy triggered",
      },
      {
        id: uuidv4(),
        title: "Cut",
        children: [],
        icon: Scissors,
        shortcut: "Ctrl+X",
        triggerText: "Cut triggered",
      },
      {
        id: uuidv4(),
        title: "Paste",
        children: [],
        icon: Clipboard,
        shortcut: "Ctrl+V",
        triggerText: "Paste triggered",
      },
    ],
  },
  {
    id: uuidv4(),
    menuItems: [
      {
        id: uuidv4(),
        title: "Share",
        children: [
          {
            id: uuidv4(),
            title: "Copy link",
            children: [],
            icon: Link,
            shortcut: "",
            triggerText: "Copy link triggered",
          },
          {
            id: uuidv4(),
            title: "Send to...",
            children: [],
            icon: Send,
            shortcut: "",
            triggerText: "Send to triggered",
          },
          {
            id: uuidv4(),
            title: "Export PDF",
            children: [],
            icon: FileDown,
            shortcut: "",
            triggerText: "Export PDF triggered",
          },
        ],
        icon: Share2,
        shortcut: ">",
        triggerText: "",
      },
    ],
  },
  {
    id: uuidv4(),
    menuItems: [
      {
        id: uuidv4(),
        title: "Rename",
        children: [],
        icon: SquarePen,
        shortcut: "F2",
        triggerText: "Rename triggered",
      },
      {
        id: uuidv4(),
        title: "Delete",
        children: [],
        icon: Trash2,
        shortcut: "",
        triggerText: "Delete triggered",
      },
    ],
  },
];
