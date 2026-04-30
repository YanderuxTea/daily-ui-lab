import { v4 as uuid } from "uuid";
type Permission = {
  id: string;
  allow: boolean;
  title: string;
};
export type PricingData = {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  permissions: Permission[];
  popular: boolean;
  buttonText: string;
};
export const pricingData: PricingData[] = [
  {
    id: uuid(),
    name: "starter",
    price: { monthly: 0, yearly: 0 },
    description: "Для личных проектов и экспериментов",
    permissions: [
      { id: uuid(), allow: true, title: "3 проекта" },
      { id: uuid(), allow: true, title: "1 GB хранилища" },
      { id: uuid(), allow: true, title: "Базовая аналитика" },
      { id: uuid(), allow: false, title: "Командный доступ" },
      { id: uuid(), allow: false, title: "Приоритетная поддержка" },
      { id: uuid(), allow: false, title: "API доступ" },
    ],
    popular: false,
    buttonText: "Начать бесплатно",
  },
  {
    id: uuid(),
    name: "pro",
    price: { monthly: 12, yearly: 9 },
    description: "Для профессионалов и малых команд",
    permissions: [
      { id: uuid(), allow: true, title: "Неограниченно проектов" },
      { id: uuid(), allow: true, title: "50 GB хранилища" },
      { id: uuid(), allow: true, title: "Расширенная аналитика" },
      { id: uuid(), allow: true, title: "Командный доступ (до 5)" },
      { id: uuid(), allow: true, title: "Приоритетная поддержка" },
      { id: uuid(), allow: false, title: "API доступ" },
    ],
    popular: true,
    buttonText: "Попробовать Pro",
  },
  {
    id: uuid(),
    name: "starter",
    price: { monthly: 29, yearly: 23 },
    description: "Для больших команд и бизнеса",
    permissions: [
      { id: uuid(), allow: true, title: "Неограниченно проектов" },
      { id: uuid(), allow: true, title: "500 GB хранилища" },
      { id: uuid(), allow: true, title: "Расширенная аналитика" },
      { id: uuid(), allow: true, title: "Командный доступ (без лимита)" },
      { id: uuid(), allow: true, title: "Приоритетная поддержка" },
      { id: uuid(), allow: true, title: "API доступ" },
    ],
    popular: false,
    buttonText: "Связаться с нами",
  },
];
