type Status = {
  id: string;
  title: string;
  color: string;
};
export const statuses: Status[] = [
  { id: "focus", title: "Фокус", color: "bg-wms-focus" },
  { id: "break", title: "Отдых", color: "bg-wms-break" },
  { id: "away", title: "Отошел", color: "bg-wms-away" },
];
