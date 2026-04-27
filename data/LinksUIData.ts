export type Devices = "pc" | "mobile";
type Technology = "Next.js" | "Framer" | "Tailwind CSS";
type LinksUIData = {
  href: string;
  title: string;
  devices: Devices[];
  description: string;
  stack: Technology[];
  createdAt: Date;
};
function getValidDate(day: number, month: number, year: number) {
  return new Date(`${year}-${month}-${day}`);
}
export const linksUIData: LinksUIData[] = [
  {
    href: "glassmorphism-profile-card",
    title: "Карточка профиля(стекло)",
    devices: ["pc", "mobile"],
    description: "Минималистичная карточка профиля с эффектом матового стекла.",
    stack: ["Next.js", "Tailwind CSS"],
    createdAt: getValidDate(14, 4, 2026),
  },
  {
    href: "dashboard-activity-widget",
    title: "Виджет активности",
    devices: ["pc", "mobile"],
    description:
      "Дашборд-виджет с динамическим распределением задач и пружинной анимацией прогресса.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(16, 4, 2026),
  },
  {
    href: "command-palette",
    title: "Командное меню",
    devices: ["pc"],
    description: "Интеллектуальная панель управления приложением.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(17, 4, 2026),
  },
  {
    href: "message-card",
    title: "Карточка сообщения",
    devices: ["pc", "mobile"],
    description:
      "Карточка сообщения для чатов и форумов с поддержкой интерактивных действий и микроанимаций.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(18, 4, 2026),
  },
  {
    href: "toast-notification",
    title: "Всплывающие уведомления",
    devices: ["pc", "mobile"],
    description: "Система уведомлений с глобальным контекстом и стеком тостов.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(19, 4, 2026),
  },
  {
    href: "context-menu",
    title: "Контекстное меню",
    devices: ["pc"],
    description:
      "Контекстное меню по правому клику с поддержкой вложенного подменю, умным позиционированием у краёв экрана и" +
      " анимацией.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(20, 4, 2026),
  },
  {
    href: "animated-tabs",
    title: "Анимированные вкладки",
    devices: ["pc", "mobile"],
    description:
      "Компонент вкладок с плавной анимацией индикатора активного таба.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(21, 4, 2026),
  },
  {
    href: "pin-input",
    title: "Поле PIN",
    devices: ["pc", "mobile"],
    description:
      "Шестизначный OTP-инпут с автофокусом, навигацией стрелками, Backspace-логикой и поддержкой вставки строки ровно из 6 цифр.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(22, 4, 2026),
  },
  {
    href: "multi-step-stepper",
    title: "Степпер/Пошаговая форма регистрации",
    devices: ["pc", "mobile"],
    description:
      "Трёхшаговый stepper с анимацией слайда между шагами, прогресс-трек, dot-индикаторы с состояниями.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(23, 4, 2026),
  },
  {
    href: "notification-center",
    title: "Центр уведомлений",
    devices: ["pc", "mobile"],
    description:
      "Компактный и высокоинтерактивный центр уведомлений, выполненный в глубокой темной палитре.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(27, 4, 2026),
  },
];
