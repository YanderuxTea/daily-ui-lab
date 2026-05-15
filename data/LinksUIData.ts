import dynamic from "next/dynamic";
import { ComponentType } from "react";

export type Devices = "pc" | "mobile";
type Technology = "Next.js" | "Framer" | "Tailwind CSS";

type LinkItem = {
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
export const linksUIData = [
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
      "Контекстное меню по правому клику с поддержкой вложенного подменю, умным позиционированием у краёв экрана и анимацией.",
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
  {
    href: "file-upload-dropzone",
    title: "Зона загрузки файлов",
    devices: ["pc", "mobile"],
    description:
      "Интерактивная drop-зона загрузки файлов с анимированными состояниями, прогресс-баром и тёмной палитрой.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(28, 4, 2026),
  },
  {
    href: "accordion",
    title: "Аккордеон",
    devices: ["pc", "mobile"],
    description:
      "FAQ-аккордеон с single‑open логикой и плавной анимацией раскрытия.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(29, 4, 2026),
  },
  {
    href: "pricing",
    title: "Тарифные планы",
    devices: ["pc", "mobile"],
    description:
      "Премиальные карточки тарифов с динамическим переключением периодов оплаты, типографикой Syne и пружинной анимацией смены цен.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(30, 4, 2026),
  },
  {
    href: "music-player",
    title: "Музыкальный плеер",
    devices: ["pc", "mobile"],
    description:
      "Простой музыкальный плеер с анимацией воспроизведения, прогресс-баром и контролами.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(1, 5, 2026),
  },
  {
    href: "tasks-board",
    title: "Доска задач",
    devices: ["pc", "mobile"],
    description:
      "Трёхколоночная доска задач с drag-and-drop между колонками, добавлением и удалением карточек, тегами, приоритетами и аватарами исполнителей.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(2, 5, 2026),
  },
  {
    href: "reaction-bar",
    title: "Панель реакций",
    devices: ["pc", "mobile"],
    description:
      "Панель реакций в стиле Slack/GitHub - эмодзи с каунтером, тогл своей реакции, анимация появления через AnimatePresence и spring-масштаб при нажатии.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(4, 5, 2026),
  },
  {
    href: "tag-input",
    title: "Поле ввода тегов",
    devices: ["pc", "mobile"],
    description:
      "Интерактивное поле для создания и управления тегами с автодополнением и клавиатурной навигацией.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(5, 5, 2026),
  },
  {
    href: "smart-device-controller",
    title: "Контроллер умного дома",
    devices: ["pc", "mobile"],
    description:
      "Интерактивная карточка управления климатом с анимированным переключателем питания, индикатором состояния и выбором режимов.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(6, 5, 2026),
  },
  {
    href: "quick-notes-widget",
    title: "Виджет быстрых заметок",
    devices: ["pc", "mobile"],
    description:
      "Минималистичный виджет заметок с мгновенным добавлением, закреплением и удалением карточек. Поддерживает микроанимации, автофокус и визуальное разделение pinned / обычных заметок.",
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(7, 5, 2026),
  },
  {
    href: "password-strength-meter",
    title: "Индикатор силы пароля",
    description:
      "Интерактивный индикатор оценки надёжности пароля с визуальной обратной связью и пошаговыми критериями.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS"],
    createdAt: getValidDate(8, 5, 2026),
  },
  {
    href: "interactive-work-status-switcher",
    title: "Переключатель рабочего статуса",
    description:
      "Интерактивный компонент для смены текущего состояния работы с динамической индикацией и микро-взаимодействиями.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(9, 5, 2026),
  },
  {
    href: "star-rating-review",
    title: "Оценка и отзыв",
    description:
      "Карточка оценки продукта с пятизвёздочной системой и текстовым комментарием.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(11, 5, 2026),
  },
  {
    href: "poll-widget",
    title: "Виджет голосования",
    description:
      "Виджет опроса с анимированными полосами результатов. Данные хранятся локально в массиве - легко подключить к API.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(12, 5, 2026),
  },
  {
    href: "countdown-timer",
    title: "Таймер обратного отсчёта",
    description:
      "Таймер обратного отсчёта с flip-анимацией цифр и кольцом прогресса.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(13, 5, 2026),
  },
  {
    href: "speed-dial-fab",
    title: "Плавающая кнопка действий",
    description:
      "Плавающая кнопка с раскрывающимися дочерними действиями. Каждое дочернее действие имеет label-тег слева.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(14, 5, 2026),
  },
  {
    href: "word-counter",
    title: "Счётчик слов",
    description:
      "Счётчик слов с живой статистикой и лимитом в реальном времени.",
    devices: ["pc", "mobile"],
    stack: ["Next.js", "Tailwind CSS", "Framer"],
    createdAt: getValidDate(15, 5, 2026),
  },
] as const satisfies readonly LinkItem[];

export type PageId = (typeof linksUIData)[number]["href"];
type PageTitle = (typeof linksUIData)[number]["title"];
type PageDesc = (typeof linksUIData)[number]["description"];

export const dynamicPageMap: Record<
  PageId,
  { page: ComponentType; title: PageTitle; description: PageDesc }
> = {
  "glassmorphism-profile-card": {
    page: dynamic(() => import("@/components/glassmorphism-profile-card/page")),
    title: "Карточка профиля(стекло)",
    description: "Минималистичная карточка профиля с эффектом матового стекла.",
  },
  accordion: {
    page: dynamic(() => import("@/components/accordion/page")),
    title: "Аккордеон",
    description:
      "FAQ-аккордеон с single‑open логикой и плавной анимацией раскрытия.",
  },
  "animated-tabs": {
    page: dynamic(() => import("@/components/animated-tabs/page")),
    title: "Анимированные вкладки",
    description:
      "Компонент вкладок с плавной анимацией индикатора активного таба.",
  },
  "command-palette": {
    page: dynamic(() => import("@/components/command-palette/page")),
    title: "Командное меню",
    description: "Интеллектуальная панель управления приложением.",
  },
  "dashboard-activity-widget": {
    page: dynamic(() => import("@/components/dashboard-activity-widget/page")),
    title: "Виджет активности",
    description:
      "Дашборд-виджет с динамическим распределением задач и пружинной анимацией прогресса.",
  },
  "file-upload-dropzone": {
    page: dynamic(() => import("@/components/file-upload-dropzone/page")),
    title: "Зона загрузки файлов",
    description:
      "Интерактивная drop-зона загрузки файлов с анимированными состояниями, прогресс-баром и тёмной палитрой.",
  },
  "message-card": {
    page: dynamic(() => import("@/components/message-card/page")),
    title: "Карточка сообщения",
    description:
      "Карточка сообщения для чатов и форумов с поддержкой интерактивных действий и микроанимаций.",
  },
  "multi-step-stepper": {
    page: dynamic(() => import("@/components/multi-step-stepper/page")),
    title: "Степпер/Пошаговая форма регистрации",
    description:
      "Трёхшаговый stepper с анимацией слайда между шагами, прогресс-трек, dot-индикаторы с состояниями.",
  },
  "music-player": {
    page: dynamic(() => import("@/components/music-player/page")),
    title: "Музыкальный плеер",
    description:
      "Простой музыкальный плеер с анимацией воспроизведения, прогресс-баром и контролами.",
  },
  "notification-center": {
    page: dynamic(() => import("@/components/notification-center/page")),
    title: "Центр уведомлений",
    description:
      "Компактный и высокоинтерактивный центр уведомлений, выполненный в глубокой темной палитре.",
  },
  "pin-input": {
    page: dynamic(() => import("@/components/pin-input/page")),
    title: "Поле PIN",
    description:
      "Шестизначный OTP-инпут с автофокусом, навигацией стрелками, Backspace-логикой и поддержкой вставки строки ровно из 6 цифр.",
  },
  pricing: {
    page: dynamic(() => import("@/components/pricing/page")),
    title: "Тарифные планы",
    description:
      "Премиальные карточки тарифов с динамическим переключением периодов оплаты, типографикой Syne и пружинной анимацией смены цен.",
  },
  "reaction-bar": {
    page: dynamic(() => import("@/components/reaction-bar/page")),
    title: "Панель реакций",
    description:
      "Панель реакций в стиле Slack/GitHub - эмодзи с каунтером, тогл своей реакции, анимация появления через AnimatePresence и spring-масштаб при нажатии.",
  },
  "tasks-board": {
    page: dynamic(() => import("@/components/tasks-board/page")),
    title: "Доска задач",
    description:
      "Трёхколоночная доска задач с drag-and-drop между колонками, добавлением и удалением карточек, тегами, приоритетами и аватарами исполнителей.",
  },
  "toast-notification": {
    page: dynamic(() => import("@/components/toast-notification/page")),
    title: "Всплывающие уведомления",
    description: "Система уведомлений с глобальным контекстом и стеком тостов.",
  },
  "context-menu": {
    page: dynamic(() => import("@/components/context-menu/page")),
    title: "Контекстное меню",
    description:
      "Контекстное меню по правому клику с поддержкой вложенного подменю, умным позиционированием у краёв экрана и анимацией.",
  },
  "tag-input": {
    page: dynamic(() => import("@/components/tag-input/page")),
    title: "Поле ввода тегов",
    description:
      "Интерактивное поле для создания и управления тегами с автодополнением и клавиатурной навигацией.",
  },
  "smart-device-controller": {
    page: dynamic(() => import("@/components/smart-device-controller/page")),
    title: "Контроллер умного дома",
    description:
      "Интерактивная карточка управления климатом с анимированным переключателем питания, индикатором состояния и выбором режимов.",
  },
  "quick-notes-widget": {
    page: dynamic(() => import("@/components/quick-notes-widget/page")),
    title: "Виджет быстрых заметок",
    description:
      "Минималистичный виджет заметок с мгновенным добавлением, закреплением и удалением карточек. Поддерживает микроанимации, автофокус и визуальное разделение pinned / обычных заметок.",
  },
  "password-strength-meter": {
    page: dynamic(() => import("@/components/password-strength-meter/page")),
    title: "Индикатор силы пароля",
    description:
      "Интерактивный индикатор оценки надёжности пароля с визуальной обратной связью и пошаговыми критериями.",
  },
  "interactive-work-status-switcher": {
    page: dynamic(
      () => import("@/components/interactive-work-status-switcher/page"),
    ),
    title: "Переключатель рабочего статуса",
    description:
      "Интерактивный компонент для смены текущего состояния работы с динамической индикацией и микро-взаимодействиями.",
  },
  "star-rating-review": {
    page: dynamic(() => import("@/components/star-rating-review/page")),
    title: "Оценка и отзыв",
    description:
      "Карточка оценки продукта с пятизвёздочной системой и текстовым комментарием.",
  },
  "poll-widget": {
    page: dynamic(() => import("@/components/poll-widget/page")),
    title: "Виджет голосования",
    description:
      "Виджет опроса с анимированными полосами результатов. Данные хранятся локально в массиве - легко подключить к API.",
  },
  "countdown-timer": {
    page: dynamic(() => import("@/components/countdown-timer/page")),
    title: "Таймер обратного отсчёта",
    description:
      "Таймер обратного отсчёта с flip-анимацией цифр и кольцом прогресса.",
  },
  "speed-dial-fab": {
    page: dynamic(() => import("@/components/speed-dial-fab/page")),
    title: "Плавающая кнопка действий",
    description:
      "Плавающая кнопка с раскрывающимися дочерними действиями. Каждое дочернее действие имеет label-тег слева.",
  },
  "word-counter": {
    page: dynamic(() => import("@/components/word-counter/page")),
    title: "Счётчик слов",
    description:
      "Счётчик слов с живой статистикой и лимитом в реальном времени.",
  },
} as const;
