export type Position = "top" | "right" | "bottom" | "left";
export type Variants = "default" | "dark" | "success" | "danger";
export type Delay = 0 | 300 | 600;

export type TooltipData = {
  position: Position;
  variant: Variants;
  delay: Delay;
  title: string;
  description: string;
};
export const positionData: TooltipData[] = [
  {
    position: "top",
    variant: "default",
    delay: 0,
    title: "Top ↑",
    description: "Сверху",
  },
  {
    position: "bottom",
    variant: "default",
    delay: 0,
    title: "Bottom ↓",
    description: "Снизу",
  },
  {
    position: "left",
    variant: "default",
    delay: 0,
    title: "← Left",
    description: "Слева",
  },
  {
    position: "right",
    variant: "default",
    delay: 0,
    title: "Right →",
    description: "Справа",
  },
];

export const variantData: TooltipData[] = [
  {
    position: "top",
    variant: "default",
    delay: 0,
    title: "Default",
    description: "Обычный тултип",
  },
  {
    position: "top",
    variant: "dark",
    delay: 0,
    title: "Dark",
    description: "Темный вариант",
  },
  {
    position: "top",
    variant: "success",
    delay: 0,
    title: "Success",
    description: "✓ Успешно сохранено",
  },
  {
    position: "top",
    variant: "danger",
    delay: 0,
    title: "Danger",
    description: "⚠ Удалить навсегда?",
  },
];
export const delayData: TooltipData[] = [
  {
    position: "top",
    variant: "default",
    delay: 0,
    title: "0 мс",
    description: "Мгновенно",
  },
  {
    position: "top",
    variant: "default",
    delay: 300,
    title: "300 мс",
    description: "С задержкой 300мс",
  },
  {
    position: "top",
    variant: "default",
    delay: 600,
    title: "600 мс",
    description: "С задержкой 600мс",
  },
];
export const mapColorsTooltip: Record<
  Variants,
  { colorsContainer: string; colorsPopup: string }
> = {
  default: {
    colorsContainer:
      "text-t-primary border-t-dark-border hover:bg-t-hover-bg hover:border-t-violet",
    colorsPopup: "bg-t-label border-t-border text-t-light",
  },
  dark: {
    colorsContainer:
      "text-t-muted border-t-dark-border hover:bg-t-hover-bg hover:border-t-violet",
    colorsPopup: "bg-t-muted border-t-muted text-t-base",
  },
  success: {
    colorsContainer:
      "text-t-success border-t-success-border hover:bg-t-hover-bg",
    colorsPopup: "text-t-success border-t-success-border bg-t-success-dark",
  },
  danger: {
    colorsContainer: "text-t-danger border-t-danger-border hover:bg-t-hover-bg",
    colorsPopup: "text-t-danger border-t-danger-border bg-t-danger-dark",
  },
};
export const mapPositionTooltip: Record<
  Position,
  { position: string; y: number; x: number }
> = {
  top: { position: "bottom-full", y: -8, x: 0 },
  bottom: { position: "top-full", y: 8, x: 0 },
  left: { position: "right-full", y: 0, x: -8 },
  right: { position: "left-full", y: 0, x: 8 },
};
