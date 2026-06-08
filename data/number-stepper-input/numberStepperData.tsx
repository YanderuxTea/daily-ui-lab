import {
  Calendar1,
  LucideIcon,
  ShoppingBag,
  Thermometer,
  UtensilsCrossed,
} from "lucide-react";

export type StepperData = {
  id: string;
  icon: string;
  title: string;
  description: string;
  step: number;
  min: number;
  max: number;
  measure?: string;
};
export const iconsStepperData: Record<string, LucideIcon> = {
  ShoppingBag: ShoppingBag,
  UtensilsCrossed: UtensilsCrossed,
  Thermometer: Thermometer,
  Calendar1: Calendar1,
};
export const stepperData: StepperData[] = [
  {
    id: "product",
    icon: "ShoppingBag",
    title: "Количество",
    description: "товаров в заказе",
    step: 1,
    min: 1,
    max: 25,
  },
  {
    id: "portion",
    icon: "UtensilsCrossed",
    title: "Порция",
    description: "граммов на прием",
    step: 50,
    min: 50,
    max: 500,
    measure: "г",
  },
  {
    id: "temperature",
    icon: "Thermometer",
    title: "Температура",
    description: "целевая в градусах",
    step: 5,
    min: 60,
    max: 100,
    measure: "°C",
  },
  {
    id: "subscribe",
    icon: "Calendar1",
    title: "Длительность",
    description: "дней подписки",
    step: 1,
    min: 1,
    max: 30,
    measure: "дн",
  },
];
