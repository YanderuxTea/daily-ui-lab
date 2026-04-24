export type Devices = "pc" | "mobile";
type Technology = "Next.js" | "Framer" | "Tailwind CSS";
type LinksUIData = {
  href: string;
  title: string;
  devices: Devices[];
  description: string;
  stack: Technology[];
};
export const linksUIData: LinksUIData[] = [
  {
    href: "glassmorphism-profile-card",
    title: "Карточка профиля(стекло)",
    devices: ["pc", "mobile"],
    description: "Минималистичная карточка профиля с эффектом матового стекла.",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    href: "dashboard-activity-widget",
    title: "Виджет активности",
    devices: ["pc", "mobile"],
    description:
      "Дашборд-виджет с динамическим распределением задач и пружинной анимацией прогресса.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "command-palette",
    title: "Командное меню",
    devices: ["pc"],
    description: "Интеллектуальная панель управления приложением.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "message-card",
    title: "Карточка сообщения",
    devices: ["pc", "mobile"],
    description:
      "Карточка сообщения для чатов и форумов с поддержкой интерактивных действий и микроанимаций.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "toast-notification",
    title: "Всплывающие уведомления",
    devices: ["pc", "mobile"],
    description: "Система уведомлений с глобальным контекстом и стеком тостов.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "context-menu",
    title: "Контекстное меню",
    devices: ["pc"],
    description:
      "Контекстное меню по правому клику с поддержкой вложенного подменю, умным позиционированием у краёв экрана и" +
      " анимацией.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "animated-tabs",
    title: "Анимированные вкладки",
    devices: ["pc", "mobile"],
    description:
      "Компонент вкладок с плавной анимацией индикатора активного таба.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "pin-input",
    title: "Поле PIN",
    devices: ["pc", "mobile"],
    description:
      "Шестизначный OTP-инпут с автофокусом, навигацией стрелками, Backspace-логикой и поддержкой вставки строки ровно из 6 цифр.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
  {
    href: "multi-step-stepper",
    title: "Степпер/Пошаговая форма регистрации",
    devices: ["pc", "mobile"],
    description:
      "Трёхшаговый stepper с анимацией слайда между шагами, прогресс-трек, dot-индикаторы с состояниями.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
  },
];
