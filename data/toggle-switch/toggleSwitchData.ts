export type Size = "sm" | "md" | "lg";
export type Colors = "default" | "green" | "yellow" | "red" | "blue";
export type ToggleSwitch = {
  disabled: boolean;
  checked: boolean;
  color: Colors;
  size: Size;
};
interface ISetting extends ToggleSwitch {
  title: string;
  description: string;
}
export const settingsGroup: ISetting[] = [
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "md",
    title: "Push-уведомления",
    description: "Получать уведомления в браузере",
  },
  {
    disabled: false,
    checked: false,
    color: "default",
    size: "md",
    title: "Email-рассылка",
    description: "Еженедельный дайджест",
  },
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "md",
    title: "Звук уведомлений",
    description: "Воспроизводить звук при событии",
  },
  {
    disabled: true,
    checked: false,
    color: "default",
    size: "md",
    title: "Тёмная тема",
    description: "Недоступно в вашем плане",
  },
];

export const sizeGroup: ToggleSwitch[] = [
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "sm",
  },
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "md",
  },
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "lg",
  },
];

export const colorsGroup: ToggleSwitch[] = [
  {
    disabled: false,
    checked: true,
    color: "default",
    size: "md",
  },
  {
    disabled: false,
    checked: true,
    color: "green",
    size: "md",
  },
  {
    disabled: false,
    checked: true,
    color: "yellow",
    size: "md",
  },
  {
    disabled: false,
    checked: true,
    color: "red",
    size: "md",
  },
  {
    disabled: false,
    checked: true,
    color: "blue",
    size: "md",
  },
];

export const mapColor: Record<Colors, string> = {
  default: "bg-ts-accent-purple border-ts-accent-purple",
  green: "bg-ts-success border-ts-success",
  yellow: "bg-ts-accent-amber border-ts-accent-amber",
  red: "bg-ts-error border-ts-error",
  blue: "bg-ts-accent-blue border-ts-accent-blue",
};
export const mapSize: Record<
  Size,
  { trackWidth: number; trackHeight: number; sizeDot: number }
> = {
  sm: { trackWidth: 34, trackHeight: 18, sizeDot: 14 },
  md: { trackWidth: 44, trackHeight: 24, sizeDot: 18 },
  lg: { trackWidth: 56, trackHeight: 30, sizeDot: 24 },
};
