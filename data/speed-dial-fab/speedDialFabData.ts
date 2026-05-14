import { LucideIcon, PencilLine, Send, Share2, Upload } from "lucide-react";

type Data = {
  id: string;
  title: string;
  icon: LucideIcon;
};
export const speedDialFabData: Data[] = [
  {
    id: "newPost",
    title: "Новый пост",
    icon: PencilLine,
  },
  {
    id: "uploadFile",
    title: "Загрузить файл",
    icon: Upload,
  },
  {
    id: "message",
    title: "Сообщение",
    icon: Send,
  },
  {
    id: "share",
    title: "Поделиться",
    icon: Share2,
  },
];
