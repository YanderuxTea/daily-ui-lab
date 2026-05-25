import { Status } from "@/components/skeleton-loader/StatusTag";

type Stats = {
  count: number;
  text: string;
};
type ProfileData = {
  avatar: string;
  name: string;
  subText: string;
  buttonText: string;
  text: string;
  components: Stats;
  views: Stats;
  subscribers: Stats;
};
type FeedData = {
  avatar: string;
  name: string;
  ago: string;
  tag: string;
  text: string;
};
type TableData = {
  avatar: string;
  name: string;
  role: string;
  status: Status;
  date: Date;
  colorAvatar: string;
};
export const profileData: ProfileData = {
  avatar: "ЧТ",
  name: "Чай",
  subText: "@teawithsuqar · Fullstack Dev",
  buttonText: "Подписаться",
  text: "Фронтенд-разработчик, строю UI Lab - ежедневный полигон для прокачки навыков вёрстки на Next.js + Framer Motion.",
  components: { count: 35, text: "Компонентов" },
  views: { count: 4200, text: "Просмотров" },
  subscribers: { count: 138, text: "Подписчиков" },
};
export const feedData: FeedData = {
  avatar: "ЧТ",
  name: "Чай",
  ago: "2 мин назад",
  tag: "Разработка",
  text: "Только что задеплоил новый UI Lab компонент - Skeleton Loader.",
};

export const tableData: TableData[] = [
  {
    avatar: "ЧТ",
    name: "Чай",
    role: "Разработчик",
    status: "online",
    date: new Date(2026, 5 - 1, 23),
    colorAvatar: "bg-sl-accent-violet/22 text-sl-accent-violet",
  },
  {
    avatar: "ДШ",
    name: "Даша",
    role: "Дизайнер",
    status: "online",
    date: new Date(2026, 5 - 1, 21),
    colorAvatar: "bg-sl-pink/22 text-sl-pink",
  },
  {
    avatar: "ДМ",
    name: "Дима",
    role: "Менеджер",
    status: "busy",
    date: new Date(2026, 5 - 1, 19),
    colorAvatar: "bg-sl-warning/22 text-sl-warning",
  },
  {
    avatar: "ИГ",
    name: "Игорь",
    role: "Разработчик",
    status: "offline",
    date: new Date(2026, 5 - 1, 15),
    colorAvatar: "bg-sl-accent-blue/22 text-sl-accent-blue",
  },
  {
    avatar: "АН",
    name: "Аня",
    role: "Дизайнер",
    status: "online",
    date: new Date(2026, 5 - 1, 10),
    colorAvatar: "bg-sl-success/22 text-sl-success",
  },
];
