export type AvatarType = {
  id: string;
  name: string;
  avatar: string;
  color: string;
};

export const avatarGroupData: AvatarType[] = [
  {
    id: "tea",
    name: "Александр",
    avatar: "АЛ",
    color: "text-ag-secondary bg-ag-secondary/33",
  },
  {
    id: "ann",
    name: "Аня",
    avatar: "АН",
    color: "text-ag-green bg-ag-green/33",
  },
  {
    id: "dima",
    name: "Дима",
    avatar: "ДМ",
    color: "text-ag-error bg-ag-error/33",
  },
  {
    id: "lera",
    name: "Лера",
    avatar: "ЛЕ",
    color: "text-ag-warning bg-ag-warning/33",
  },
  {
    id: "igor",
    name: "Игорь",
    avatar: "ИГ",
    color: "text-ag-info bg-ag-info/33",
  },
  {
    id: "dasha",
    name: "Даша",
    avatar: "ДШ",
    color: "text-ag-pink bg-ag-pink/33",
  },
];
