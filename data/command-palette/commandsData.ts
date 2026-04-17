import {
  FileText,
  House,
  LogOut,
  LucideIcon,
  Mail,
  Moon,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";

export type CommandData = {
  id: number;
  title: string;
  icon: LucideIcon;
  category: string;
  shortcut: string;
};
export const commandsData: CommandData[] = [
  {
    id: 1,
    title: "Перейти в Профиль",
    icon: User,
    category: "Навигация",
    shortcut: "G P",
  },
  {
    id: 2,
    title: "Главная страница",
    icon: House,
    category: "Навигация",
    shortcut: "G H",
  },
  {
    id: 3,
    title: "Мои черновики",
    icon: FileText,
    category: "Навигация",
    shortcut: "G D",
  },
  {
    id: 4,
    title: "Создать новый пост",
    icon: Plus,
    category: "Действия",
    shortcut: "N",
  },
  {
    id: 5,
    title: "Поиск по форуму",
    icon: Search,
    category: "Действия",
    shortcut: "/",
  },
  {
    id: 6,
    title: "Написать сообщение",
    icon: Mail,
    category: "Действия",
    shortcut: "M",
  },
  {
    id: 7,
    title: "Темная тема",
    icon: Moon,
    category: "Настройки",
    shortcut: "T",
  },
  {
    id: 8,
    title: "Настройки аккаунта",
    icon: Settings,
    category: "Настройки",
    shortcut: "S",
  },
  {
    id: 9,
    title: "Выйти из системы",
    icon: LogOut,
    category: "Настройки",
    shortcut: "Shift Q",
  },
];
