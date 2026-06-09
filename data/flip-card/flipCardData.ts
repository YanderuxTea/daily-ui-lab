import { Atom, LucideIcon, Package, Server } from "lucide-react";

export type FlipCardProps = {
  classnameIcon: string;
  title: string;
  description: string;
  list: string[];
  classnameList: string;
  classnameButton: string;
  icon: string;
};
export const iconsFlipCard: Record<string, LucideIcon> = {
  Atom: Atom,
  Server: Server,
  Package: Package,
};
export const frontendData: FlipCardProps = {
  classnameIcon: "bg-fc-violet-dim text-fc-violet",
  title: "Frontend",
  description: "Интерфейсы и UI-компоненты",
  list: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  classnameList: "text-fc-violet",
  classnameButton: "bg-fc-violet text-white",
  icon: "Atom",
};
export const backendData: FlipCardProps = {
  classnameIcon: "bg-fc-cyan-dim text-fc-cyan",
  title: "Backend",
  description: "Серверная логика, API и базы данных",
  list: ["NestJS / Node.js", "PostgreSQL", "Prisma ORM", "Redis / Socket.io"],
  classnameList: "text-fc-cyan",
  classnameButton: "bg-fc-cyan text-white",
  icon: "Server",
};
export const devOpsData: FlipCardProps = {
  classnameIcon: "bg-fc-amber-dim text-fc-amber",
  title: "DevOps",
  description: "Деплой, контейнеризация и CI/CD",
  list: ["Docker", "GitHub Actions", "Nginx", "Linux / SSH"],
  classnameList: "text-fc-amber",
  classnameButton: "bg-fc-amber text-fc-amber-on",
  icon: "Package",
};
